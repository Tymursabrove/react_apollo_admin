import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Button, Form, Table } from 'react-bootstrap';
import { format } from 'date-format-parse';
import { toast } from 'react-toastify';

import Breadcrumb from '../../../common/breadcrumb';
import DeleteConfirmModal from '../../../features/modals/delete-confirm-modal';
import Loader from '../../../features/loader';
import PtTable from '../../../features/elements/table';
import PNotify from '../../../features/elements/p-notify';

import OrderNotes from '../../../partials/order-notes';

import { getOrder } from '../../../../api';

export default function OrderDetail ( props ) {
    const [ order, setOrder ] = useState( {} );
    const [ loading, setLoading ] = useState( true );
    const [ shipping, setShipping ] = useState( {} );
    const [ items, setItems ] = useState( [] );
    const [ refunded, setRefunded ] = useState( [] );
    const [ refunds, setRefunds ] = useState( [] );
    const [ refundItems, setRefundItems ] = useState( false );
    const [ refundShippingCost, setRefundShippingCost ] = useState( 0 );
    const [ refundShippingTax, setRefundShippingTax ] = useState( 0 );
    const [ shippingMethod, setShippingMethod ] = useState( null );
    const [ modalOpen, setModalOpen ] = useState( false );

    const totalQty = useMemo( () => {
        return items.reduce( ( acc, cur ) => {
            return acc + cur.qty;
        }, 0 );
    }, [ items ] );

    const subtotal = useMemo( () => {
        return items.reduce( ( acc, cur ) => {
            return acc + cur.cost * cur.qty;
        }, 0 );
    }, [ items ] );

    const couponAmount = useMemo( () => {
        return order.coupons ? order.coupons.reduce( ( acc, cur ) => acc + cur.discount, 0 ) : 0;
    }, [ order.coupons ] );

    const totalTax = useMemo( () => {
        return items.reduce( ( acc, cur ) => {
            return acc + ( cur.tax_rate ? ( cur.qty * cur.cost - cur.discount ) * cur.tax_rate / 100 : 0 );
        }, shipping.tax ? shipping.tax : 0 );
    }, [ items, shipping ] );

    const refundPrice = useMemo( () => {
        return refunds.reduce( ( acc, cur ) => {
            return acc + cur.cost + cur.tax;
        }, 0 );
    } );

    const refundedPrice = useMemo( () => {
        return refunded.reduce( ( acc, cur ) => {
            return acc + cur.order_total_price * 1.0;
        }, 0 );
    } );

    const refundedShippingCost = useMemo( () => {
        return refunded.reduce( ( acc, cur ) => {
            return acc + cur.shipping_cost * 1.0;
        }, 0 )
    } );

    const refundedShippingTax = useMemo( () => {
        return refunded.reduce( ( acc, cur ) => {
            return acc + cur.shipping_tax * 1.0;
        }, 0 );
    } );

    const columns = [ {
        Header: 'ID',
        accessor: 'id',
        sortable: true,
        width: 60
    }, {
        Header: 'Name',
        accessor: 'name',
        sortable: true,
        width: 300
    }, {
        Header: 'Cost',
        accessor: 'cost',
        sortable: true,
        className: 'justify-content-end',
        headerClassName: 'justify-content-end',
        Cell: row => `$${ row.value.toFixed( 2 ) }`
    }, {
        Header: 'Qty',
        accessor: 'qty',
        sortable: true,
        className: 'justify-content-center align-items-end flex-column',
        headerClassName: 'justify-content-end',
        Cell: row => (
            <>
                { row.value }
                {
                    refundedQty( row.original.id ) < 0 ?
                        <div className="text-color-danger text-1">
                            <i className="fa fa-reply mr-2"></i>
                            { refundedQty( row.original.id ) }
                        </div>
                        : ''
                }
                {
                    refundItems ?
                        <input
                            type="number"
                            className="form-control form-control-modern ml-auto"
                            min="0"
                            max={ row.value + refundedQty( row.original.id ) }
                            value={ refundQty( row.original.id ) }
                            onChange={ e => refundQtyChange( row.original.id, parseInt( e.target.value ) ) }
                        />
                        : ''
                }
            </>
        )
    }, {
        Header: 'Total',
        id: 'total',
        accessor: 'total',
        sortable: true,
        className: 'justify-content-center align-items-end flex-column',
        headerClassName: 'justify-content-end',
        Cell: row => (
            <>
                <span>${ row.value.toFixed( 2 ) }</span>
                { row.original.discount ?
                    <div className="discount-price text-color-grey">
                        ${ row.original.discount.toFixed( 2 ) } discount
                    </div>
                    : ''
                }
                { refundedCost( row.original.id ) < 0 ?
                    <div className="text-color-danger text-1">
                        <i className="fa fa-reply mr-2"></i>
                        <span>-${ ( -refundedCost( row.original.id ) ).toFixed( 2 ) }</span>
                    </div>
                    : ''
                }
                { refundItems ?
                    <input
                        type="number"
                        className="form-control form-control-modern ml-auto"
                        min="0"
                        max={ row.value + refundedCost( row.original.id ) }
                        value={ refundCost( row.original.id ) }
                        onChange={ e => refundCostChange( row.original.id, parseFloat( e.target.value ) ) }
                    />
                    : ''
                }
            </>
        )
    }, {
        Header: 'Tax',
        id: 'tax',
        accessor: d => d.tax_rate ? ( d.qty * d.cost - d.discount ) * d.tax_rate / 100 : 0,
        sortable: true,
        className: 'justify-content-center align-items-end flex-column',
        headerClassName: 'justify-content-end',
        Cell: row => (
            <>
                <span>${ row.value.toFixed( 2 ) }</span>
                { refundedTax( row.original.id ) < 0 ?
                    <div className="text-color-danger text-1">
                        <i className="fa fa-reply mr-2"></i>
                        -${ ( -refundedTax( row.original.id ) ).toFixed( 2 ) }
                    </div>
                    : '' }
                { refundItems ?
                    <input
                        type="number"
                        className="form-control form-control-modern ml-auto"
                        min="0"
                        max={ row.value + refundedTax( row.original.id ) }
                        value={ refundTax( row.original.id ) }
                        onChange={ e => refundTaxChange( row.original.id, parseFloat( e.target.value ) ) }
                    />
                    : '' }
            </>
        )
    }, {
        width: 100,
        id: 'actions'
    } ];

    useEffect( () => {
        setLoading( true );
        getOrder( parseInt( props.match.params.id ) ).then( data => {
            let products = data.items.map( item => {
                return {
                    id: item.product_id,
                    name: item.name,
                    cost: ( item.net_revenue * 1.0 + item.coupon_amount * 1.0 ) / item.qty,
                    qty: item.qty,
                    discount: item.coupon_amount * 1.0,
                    total: item.net_revenue * 1.0,
                    tax: item.tax_amount * 1.0
                };
            } );
            setShipping( {
                name: data.shipping_method,
                cost: data.shipping_cost * 1.0,
                tax: data.shipping_tax * 1.0
            } );
            setOrder( data );
            setItems( products );
            setRefunded( data.refund );
            setRefunds( data.items.map( item => {
                return {
                    id: item.product_id,
                    qty: 0,
                    cost: 0,
                    tax: 0
                };
            } ) );
            setRefundShippingCost( 0 );
            setRefundShippingTax( 0 );
            setLoading( false );
        } );
    }, [ props.match.params.id ] )

    function shippingMethodChange ( key, value ) {
        let temp = { ...shippingMethod };
        temp[ key ] = value;
        setShippingMethod( temp );
    }

    function orderChange ( key, value ) {
        let temp = { ...order };
        temp[ key ] = value;
        setOrder( temp );
    }

    function saveOrder ( e ) {
        e.preventDefault();
        toast(
            <PNotify title="Success" icon="fas fa-check" text="Order saved successfully." />,
            {
                containerId: "default",
                className: "notification-success"
            }
        );
    }

    function deleteOrder ( e ) {
        e.preventDefault();
        setModalOpen( true );
    }

    function deleteConfirm ( result ) {
        setModalOpen( false );
        result && props.history.push( `${ process.env.PUBLIC_URL }/ecommerce/orders` );
    }

    function refundInit () {
        setRefunds( items.map( item => {
            return {
                id: item.id,
                qty: 0,
                cost: 0,
                tax: 0
            };
        } ) );
        setRefundShippingCost( 0 );
        setRefundShippingTax( 0 );
        setRefundItems( false );
    }

    function refundedQty ( id ) {
        return refunded.reduce( ( acc, cur ) => {
            let item = cur.items.find( item => item.product_id === id );
            return acc + ( item ? item.qty : 0 );
        }, 0 );
    }

    function refundedCost ( id ) {
        return refunded.reduce( ( acc, cur ) => {
            let item = cur.items.find( item => item.product_id === id );
            return acc + ( item ? item.net_revenue * 1.0 : 0 );
        }, 0 );
    }

    function refundedTax ( id ) {
        return refunded.reduce( ( acc, cur ) => {
            let item = cur.items.find( item => item.product_id === id );
            return acc + ( item ? item.tax_amount * 1.0 : 0 );
        }, 0 );
    }

    function refundQty ( id ) {
        return refunds.find( item => item.id === id ).qty;
    }

    function refundCost ( id ) {
        return refunds.find( item => item.id === id ).cost;
    }

    function refundTax ( id ) {
        return refunds.find( item => item.id === id ).tax;
    }

    function refundQtyChange ( id, value ) {
        setRefunds( refunds.map( item => {
            if ( item.id === id ) {
                let origin = items.find( item => item.id === id );
                item.qty = value;
                item.cost = origin.total * value / origin.qty;
                item.tax = origin.tax * value / origin.qty;
            }
            return item;
        } ) );
    }

    function refundCostChange ( id, value ) {
        setRefunds( refunds.map( item => {
            if ( item.id === id ) {
                item.cost = value;
            }
            return item;
        } ) );
    }

    function refundTaxChange ( id, value ) {
        setRefunds( refunds.map( item => {
            if ( item.id === id ) {
                item.tax = value;
            }
            return item;
        } ) )
    }

    function addRefund () {
        let newRefund = {
            id: refunded.length + 1 + parseInt( Math.random() * 100 ),
            order_total_price: -refundPrice,
            items: refunds.map( item => {
                return {
                    product_id: item.id,
                    qty: -item.qty,
                    net_revenue: -item.cost,
                    tax_amount: -item.tax
                };
            } ),
            author: {
                first_name: 'John',
                last_name: 'Doe'
            }
        };

        if ( !validateRefund( newRefund ) ) {
            return toast(
                <PNotify title="Error" icon="fas fa-times" text="Invalid refund amount" />,
                {
                    containerId: "default",
                    className: "notification-danger"
                }
            );
        }
        setRefunded( [
            ...refunded,
            newRefund
        ] );
        refundInit();
        return toast(
            <PNotify title="Success" icon="fas fa-check" text="Order refunded successfully." />,
            {
                containerId: "default",
                className: "notification-success"
            }
        );
    }

    function cancelRefund () {
        refundInit();
    }

    function removeRefund ( e, id ) {
        e.preventDefault();
        setRefunded( refunded.filter( item => item.id !== id ) );
        toast(
            <PNotify title="Success" icon="fas fa-check" text="Refunded remove successfully." />,
            {
                containerId: "default",
                className: "notification-success"
            }
        );
    }

    function validateRefund ( newRefund ) {
        if ( newRefund.order_total_price === 0 ) return false;
        return !newRefund.items.find( refundItem => {
            let item = items.find( item => item.id === refundItem.product_id );
            return ( item.qty + refundedQty( item.id ) + refundItem.qty ) < 0 ||
                ( item.net_revenue + refundedCost( item.id ) + refundItem.net_revenue ) < 0 ||
                ( item.tax_amount + refundedTax( item.id ) + refundItem.tax_amount ) < 0
        } )
    }

    return (
        <>
            <Breadcrumb current="Order Detail" paths={ [
                {
                    name: 'Home',
                    url: '/'
                }, {
                    name: 'Ecommerce',
                    url: '/ecommerce'
                }, {
                    name: 'Orders',
                    url: '/ecommerce/orders'
                }
            ] } />

            { loading ? <Loader />
                : <Form className="order-details" method="post" action="#" onSubmit={ saveOrder }>
                    <Row>
                        <Col xl={ 4 } className="mb-4 mb-xl-0">
                            <Card className="card-modern h-100">
                                <Card.Header>
                                    <Card.Title>General</Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Form.Row>
                                        <Form.Group as={ Col } className="mb-3">
                                            <Form.Label>Status</Form.Label>
                                            <Form.Control
                                                as="select"
                                                className="form-control-modern"
                                                value={ order.status }
                                                onChange={ e => orderChange( 'status', e.target.value ) }
                                            >
                                                <option value="on-hold">On Hold</option>
                                                <option value="pending">Pending Payment</option>
                                                <option value="processing">Processing</option>
                                                <option value="completed">Completed</option>
                                                <option value="cancelled">Cancelled</option>
                                                <option value="refunded">Refunded</option>
                                                <option value="failed">Failed</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group as={ Col } className="mb-3">
                                            <Form.Label>Date Created</Form.Label>
                                            <div className="date-time-field">
                                                <div className="date">
                                                    <Form.Control
                                                        type="text"
                                                        className="form-control-modern"
                                                        value={ format( new Date( order.created_at ), 'YYYY-MM-DD' ) }
                                                        readOnly
                                                    />
                                                </div>
                                                <div className="time">
                                                    <span className="px-2">@</span>
                                                    <Form.Control
                                                        type="number"
                                                        className="form-control-modern text-center"
                                                        min="0"
                                                        max="23"
                                                        value={ new Date( order.created_at ).getHours() }
                                                        readOnly
                                                    />
                                                    <span className="px-2">:</span>
                                                    <Form.Control
                                                        type="number"
                                                        className="form-control-modern text-center"
                                                        min="0"
                                                        max="59"
                                                        value={ new Date( order.created_at ).getMinutes() }
                                                        readOnly
                                                    />
                                                </div>
                                            </div>
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group as={ Col } className="mb-3">
                                            <Form.Label>Customer</Form.Label>
                                            <Form.Control
                                                className="form-control-modern"
                                                value={ order.customer_email }
                                                readOnly
                                            />
                                        </Form.Group>
                                    </Form.Row>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={ 8 }>
                            <Card className="card-modern h-100">
                                <Card.Header>
                                    <Card.Title>Addresses</Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Row>
                                        <Col xl={ 4 } className="mb-4 mb-xl-0">
                                            <h3 className="text-color-dark font-weight-bold text-4 line-height-1 mt-0 mb-3">
                                                BILLING
                                            </h3>
                                            <ul className="list list-unstyled list-item-bottom-space-0">
                                                <li>
                                                    { order.billing_first_name }
                                                    { order.billing_last_name }
                                                </li>
                                                <li>{ order.billing_company }</li>
                                                <li>
                                                    { order.billing_street_1 }
                                                    { order.billing_street_2 }
                                                </li>
                                                <li>{ order.billing_city }</li>
                                                <li>{ order.billing_state }</li>
                                                <li>{ order.billing_postcode }</li>
                                                <li>{ order.billing_country }</li>
                                            </ul>
                                            <strong className="d-block text-color-dark">Email address:</strong>
                                            <a href={ `mailto:${ order.billing_email }` }>{ order.billing_email }</a>
                                            <strong className="d-block text-color-dark">Phone:</strong>
                                            <a href={ `tel:${ order.billing_phone }` }>{ order.billing_phone }</a>
                                        </Col>
                                        <Col xl={ 4 }>
                                            <h3 className="font-weight-bold text-color-dark text-4 line-height-1 mt-0 mb-3">
                                                SHIPPING
                                            </h3>
                                            <ul className="list list-unstyled list-item-bottom-space-0">
                                                <li>
                                                    { order.shipping_first_name }
                                                    { order.shipping_last_name }
                                                </li>
                                                <li>{ order.shipping_company }</li>
                                                <li>
                                                    { order.shipping_street_1 }
                                                    { order.shipping_street_2 }
                                                </li>
                                                <li>{ order.shipping_city }</li>
                                                <li>{ order.shipping_state }</li>
                                                <li>{ order.shipping_postcode }</li>
                                                <li>{ order.shipping_country }</li>
                                            </ul>
                                        </Col>
                                        <Col xl="auto" className="pl-xl-5">
                                            <h3 className="text-color-dark font-weight-bold text-4 line-height-1 mt-0 mb-3" >Order Information</h3>
                                            <p>{ order.order_info === '""' ? 'No order infomation found' : order.order_info }</p>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Col>
                            <Card className="card-modern">
                                <Card.Header>
                                    <Card.Title>Products</Card.Title>
                                    <div className="card-actions">
                                        { !refundItems ?
                                            <Button
                                                type="button"
                                                variant="primary"
                                                onClick={ () => setRefundItems( true ) }
                                            >Refund</Button>
                                            : <>
                                                <Button
                                                    type="button"
                                                    className="mr-2"
                                                    variant="primary"
                                                    onClick={ addRefund }>Refund ${ refundPrice.toFixed( 2 ) }
                                                     manually</Button>
                                                <Button
                                                    type="button"
                                                    className="border"
                                                    variant="light"
                                                    onClick={ cancelRefund }
                                                >Cancel</Button>
                                            </>
                                        }
                                    </div>
                                </Card.Header>
                                <Card.Body>
                                    <PtTable
                                        className="table table-ecommerce-simple -striped mb-2"
                                        type="simple"
                                        data={ items }
                                        columns={ columns }
                                        pageSize={ Math.min( items.length, 6 ) }
                                    />

                                    { shippingMethod ?
                                        <Table className="table table-ecommerce-simple table-ecommerce-simple-border-bottom table-no-collapse mb-2" striped>
                                            <tbody>
                                                <tr>
                                                    <td width="60" className="pl-4"><i className="fa fa-truck"></i></td>
                                                    <td width="300">
                                                        { shippingMethod.name }
                                                    </td>
                                                    <td colSpan="2"></td>
                                                    <td className="text-right">
                                                        ${ shippingMethod.cost.toFixed( 2 ) }
                                                        { refundedShippingCost < 0 ?
                                                            <div className="text-color-dagner text-1">
                                                                <i className="fa fa-reply mr-2"></i>
                                                                ${ refundedShippingCost.toFixed( 2 ) }
                                                            </div>
                                                            : '' }
                                                        { refundItems ?
                                                            <Form.Control
                                                                type="number"
                                                                className="form-control-modern ml-auto"
                                                                min="0"
                                                                max={ shippingMethod.cost + refundShippingCost }
                                                                value={ refundShippingCost }
                                                                onChange={ e => shippingMethodChange( 'cost', parseInt( e.target.value ) ) }
                                                            />
                                                            : '' }
                                                    </td>
                                                    <td className="text-right">
                                                        ${ shippingMethod.tax.toFixed( 2 ) }
                                                        { refundedShippingTax < 0 ?
                                                            <div className="text-color-dagner text-1">
                                                                <i className="fa fa-reply mr-2"></i>
                                                                ${ refundedShippingTax.toFixed( 2 ) }
                                                            </div>
                                                            : '' }
                                                        { refundItems ?
                                                            <Form.Control
                                                                type="number"
                                                                className="form-control-modern ml-auto"
                                                                min="0"
                                                                max={ shippingMethod.tax + refundShippingTax }
                                                                value={ refundShippingCost }
                                                                onChange={ e => shippingMethodChange( 'tax', parseInt( e.target.value ) ) }
                                                            />
                                                            : '' }
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                        : ''
                                    }

                                    { refunded.length ?
                                        <Table className="table table-ecommerce-simple table-ecommerce-simple-border-bottom table-no-collapse mb-2" striped>
                                            <tbody>
                                                { refunded.map( ( item, index ) => (
                                                    <tr key={ `refunded-${ index }` }>
                                                        <td width="60" className="pl-4">
                                                            <i className="fa fa-retweet"></i>
                                                        </td>
                                                        <td width="300">
                                                            Refund { item.created_at } by <strong>{ item.author.first_name + ' ' + item.author.last_name }</strong>
                                                        </td>
                                                        <td colSpan="2"></td>
                                                        <td className="text-right">-${ ( item.order_total_price * -1.0 ).toFixed( 2 ) }</td>
                                                        <td></td>
                                                        <td className="actions" width="100">
                                                            <a href="#remove" className="float-right mr-3" onClick={ e => removeRefund( e, item.id ) }><i className="fa fa-times"></i></a>
                                                        </td>
                                                    </tr>
                                                ) )
                                                }
                                            </tbody>
                                        </Table>
                                        : '' }

                                    { order.coupons.length ?
                                        <div className="coupons px-2">
                                            <h3 className="font-weight-bold text-color-dark text-2 mt-2 mb-1">Used Coupons</h3>
                                            <Row>
                                                { order.coupons.map( ( coupon, index ) => (
                                                    <Col className="col-auto" key={ `coupon-${ index }` }>
                                                        <Button
                                                            href="#delCoupon"
                                                            className="border"
                                                            variant="light"
                                                            onClick={ e => e.preventDefault() }>
                                                            { coupon.code }
                                                        </Button>
                                                    </Col>
                                                ) )
                                                }
                                            </Row>
                                        </div>
                                        : ''
                                    }

                                    <Row className="justify-content-end flex-column flex-lg-row my-3">
                                        <Col className="col-auto mr-5">
                                            <h3 className="font-weight-bold text-color-dark text-4 mb-3">Items Subtotal</h3>
                                            <span className="d-flex align-items-center">
                                                { totalQty } items
                                            <i className="fas fa-chevron-right text-color-primary px-3"></i>
                                                <b className="text-color-dark text-xxs">${ subtotal.toFixed( 2 ) }</b>
                                            </span>
                                        </Col>
                                        { order.coupons.length ?
                                            <Col className="col-auto mr-5">
                                                <h3 className="font-weight-bold text-color-dark text-4 mb-3">Coupon(s)</h3>
                                                <span className="d-flex align-items-center">
                                                    { order.coupons.length } coupons
                                                <i className="fas fa-chevron-right text-color-primary px-3"></i>
                                                    <b className="text-color-dark text-xxs">${ couponAmount.toFixed( 2 ) }</b>
                                                </span>
                                            </Col>
                                            : ''
                                        }
                                        { shipping !== {} ?
                                            <Col className="col-auto mr-5">
                                                <h3 className="font-weight-bold text-color-dark text-4 mb-3">Shipping</h3>
                                                <span className="d-flex align-items-center">
                                                    { shipping.name ? shipping.name : 'undefined' }
                                                    <i className="fas fa-chevron-right text-color-primary px-3"></i>
                                                    <b className="text-color-dark text-xxs">${ ( shipping.cost ? shipping.cost : 0 ).toFixed( 2 ) }</b>
                                                </span>
                                            </Col>
                                            : ''
                                        }
                                        <Col className="col-auto mr-5">
                                            <h3 className="font-weight-bold text-color-dark text-4 mb-3">Tax</h3>
                                            <span className="d-flex align-items-center">
                                                Tax Amount
                                            <i className="fas fa-chevron-right text-color-primary px-3"></i>
                                                <b className="text-color-dark text-xxs">${ totalTax.toFixed( 2 ) }</b>
                                            </span>
                                        </Col>
                                        { refunded.length ?
                                            <Col className="col-auto mr-5">
                                                <h3 className="font-weight-bold text-color-dark text-4 mb-3">Refunded</h3>
                                                <span className="d-flex align-items-center">
                                                    { refunded.length } times
                                            <i className="fas fa-chevron-right text-color-primary px-3"></i>
                                                    <b className="text-color-dark text-xxs">${ refundedPrice.toFixed( 2 ) }</b>
                                                </span>
                                            </Col>
                                            : '' }
                                        <Col className="col-auto">
                                            <h3 className="font-weight-bold text-color-dark text-4 mb-3">Order Total</h3>
                                            <span className="d-flex align-items-center justify-content-lg-end">
                                                <strong className="text-color-dark text-5">${ ( subtotal - couponAmount + ( shipping.cost ? shipping.cost : 0 ) + totalTax + refundedPrice ).toFixed( 2 ) }</strong>
                                            </span>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Col>
                            <OrderNotes />
                        </Col>
                    </Row>
                    <Row className="action-buttons mt-4">
                        <Col md="auto" className="col-6">
                            <Button
                                type="submit"
                                className="btn-px-4 py-3 d-flex align-items-center font-weight-semibold line-height-1"
                                variant="primary"
                            ><i className="bx bx-save text-4 mr-2"></i> Save Order</Button>
                        </Col>
                        <Col md="auto" className="col-6 px-md-0 mt-0">
                            <Button
                                as={ Link }
                                to={ `${ process.env.PUBLIC_URL }/ecommerce/orders` }
                                className="btn-px-4 py-3 border font-weight-semibold text-color-dark line-height-1 d-flex h-100 align-items-center"
                                variant="light"
                            >Back</Button>
                        </Col>
                        <Col md="auto" className="col-6 ml-md-auto mt-3 mt-md-0">
                            <Button
                                href="#delete"
                                className="btn-px-4 py-3 d-flex align-items-center font-weight-semibold line-height-1"
                                variant="danger"
                                onClick={ deleteOrder }
                            ><i className="bx bx-trash text-4 mr-2"></i> Delete Order</Button>
                        </Col>
                    </Row>
                </Form>
            }

            <DeleteConfirmModal isOpen={ modalOpen } onClose={ deleteConfirm } />
        </>
    )
}