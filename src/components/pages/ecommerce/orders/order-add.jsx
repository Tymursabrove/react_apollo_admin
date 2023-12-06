import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Button, Form, Table, InputGroup } from 'react-bootstrap';
import Reveal from 'react-awesome-reveal';
import DatePicker from 'react-datepicker';
import Modal from "react-modal";
import Select from 'react-select';
import SelectAsync from 'react-select/async';
import { toast } from 'react-toastify';

import 'react-datepicker/dist/react-datepicker.css';

import Breadcrumb from '../../../common/breadcrumb';
import OrderNotes from '../../../partials/order-notes';
import PNotify from '../../../features/elements/p-notify';
import PtTable from '../../../features/elements/table';

import { getUsers, getProducts, applyCoupons } from '../../../../api';
import { COUNTRIES, STATES } from '../../../../utils/data/constant';
import { fadeZoomIn, fadeZoomOut } from '../../../../utils/data/keyframes';


const modalStyles = {
    overlay: {
        background: 'rgba(11, 11, 11, .8)',
        zIndex: 9999,
        transition: "opacity .2s ease"
    },
    content: {
        left: '50%',
        top: '50%',
        bottom: 'auto',
        right: 'auto',
        outline: 'none',
        width: '600px',
        maxWidth: '100%',
        padding: 0,
        border: 'none',
        background: "transparent",
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement( '#app' );

const AddProductsModal = ( { isOpen, onClose } ) => {
    const [ products, setProducts ] = useState( [] );
    const [ selected, setSelected ] = useState( [] );

    useEffect( () => {
        setProducts( [] );
        setSelected( [] );
    }, [ isOpen ] )

    async function searchProducts ( input ) {
        let options = [];
        await getProducts( 0, undefined, [
            {
                id: 'name',
                value: input,
            }, {
                id: 'type',
                value: 'simple'
            }
        ], null, true ).then( response => {
            options = response.data.map( product => {
                return {
                    label: product.name,
                    value: product.id,
                    price: product.min_max_price[ 0 ],
                    parent: product.parent
                };
            } );
        } ).catch( error => console.error( error ) );
        return options;
    }

    function addProducts () {
        let temp = [ ...products ];
        selected.forEach( product => {
            if ( !products.find( item => item.id === product.value ) ) {
                temp.push( {
                    id: product.value,
                    name: product.label,
                    price: product.price,
                    parent: product.parent,
                    qty: 1
                } );
            }
        } );
        setProducts( temp );
        setSelected( [] );
    }

    function qtyChange ( index, qty ) {
        let temp = [ ...products ];
        temp[ index ].qty = qty;
        setProducts( temp );
    }

    function closeModal ( result = false ) {
        onClose( result, products );
    }

    return (
        <Modal
            isOpen={ isOpen }
            style={ modalStyles }
            onRequestClose={ () => closeModal( false ) }
            closeTimeoutMS={ 200 }
        >

            <Reveal keyframes={ !isOpen ? fadeZoomOut : fadeZoomIn } duration={ 200 } triggerOnce>
                <Card>
                    <Card.Header>
                        <Card.Title>Add Products</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <div className="modal-wrapper">
                            <Form.Group className="mb-3">
                                <InputGroup>
                                    <SelectAsync
                                        className="flex-grow-1"
                                        value={ selected }
                                        isMulti={ true }
                                        loadOptions={ searchProducts }
                                        onChange={ options => setSelected( options ) }
                                    />
                                    <InputGroup.Append>
                                        <Button
                                            variant="primary"
                                            disabled={ !selected.length }
                                            onClick={ addProducts }>Add</Button>
                                    </InputGroup.Append>
                                </InputGroup>
                            </Form.Group>
                            <Table className="table table-ecommerce-simple" striped>
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th className="text-right" width="100">Quantity</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { products.length ?
                                        products.map( ( product, index ) => (
                                            <tr key={ `product-${ index }` }>
                                                <td className="align-middle">{ product.name }</td>
                                                <td>
                                                    <Form.Control
                                                        type="number"
                                                        className="form-control-modern"
                                                        value={ product.qty }
                                                        min="1"
                                                        onChange={ e => qtyChange( index, parseInt( e.target.value ) ) }
                                                    />
                                                </td>
                                            </tr>
                                        ) )
                                        : <tr>
                                            <td colSpan="2" className="text-center">No Product Added</td>
                                        </tr>
                                    }
                                </tbody>
                            </Table>
                        </div>
                    </Card.Body>
                    <Card.Footer>
                        <Row>
                            <Col md={ 12 } className="text-right">
                                <Button
                                    className="mr-2"
                                    variant="primary"
                                    disabled={ !products.length }
                                    onClick={ () => closeModal( true ) }>Add</Button>
                                <Button
                                    variant="default"
                                    onClick={ () => closeModal( false ) }>Cancel</Button>
                            </Col>
                        </Row>
                    </Card.Footer>
                </Card>
            </Reveal>
        </Modal>
    )
}

export default function OrderAdd () {
    const [ date, setDate ] = useState( null );
    const [ customer, setCustomer ] = useState( null );
    const [ shipping, setShipping ] = useState( {} );
    const [ billing, setBilling ] = useState( {} );
    const [ items, setItems ] = useState( [] );
    const [ coupons, setCoupons ] = useState( [] );
    const [ shippingMethod, setShippingMethod ] = useState( null );

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
        return coupons.reduce( ( acc, cur ) => acc + cur.discount, 0 );
    }, [ coupons ] );

    const totalTax = useMemo( () => {
        return items.reduce( ( acc, cur ) => {
            return acc + ( cur.tax_rate ? ( cur.qty * cur.cost - cur.discount ) * cur.tax_rate / 100 : 0 );
        }, shipping.tax ? shipping.tax : 0 );
    }, [ items, shipping ] );

    const [ modalOpen, setModalOpen ] = useState( false );

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
        className: 'justify-content-end',
        headerClassName: 'justify-content-end',
        Cell: row => ( row.original.edit ?
            <Form.Control
                type="number"
                className="form-control-modern"
                value={ row.value }
                onChange={ e => itemChange( row.original.id, 'qty', parseInt( e.target.value ) ) }
            />
            : <span>{ row.value }</span>
        )
    }, {
        Header: 'Total',
        id: 'total',
        accessor: d => d.qty * d.cost - d.discount,
        sortable: true,
        className: 'align-items-end flex-column',
        headerClassName: 'justify-content-end',
        Cell: row => (
            <>
                <span>${ row.value.toFixed( 2 ) }</span>
                { row.original.discount ?
                    <div className="discount-price text-color-grey text-right">
                        ${ row.original.discount.toFixed( 2 ) } discount
                    </div>
                    : ''
                }
            </>
        )
    }, {
        Header: 'Tax',
        id: 'tax',
        accessor: d => d.tax_rate ? ( d.qty * d.cost - d.discount ) * d.tax_rate / 100 : 0,
        sortable: true,
        className: 'justify-content-end',
        headerClassName: 'justify-content-end',
        Cell: row => (
            <>
                <span>${ row.value.toFixed( 2 ) }</span>
                { row.original.edit ?
                    <Form.Control
                        type="number"
                        placeholder="Tax Rate (%)"
                        min={ 0 }
                        max={ 100 }
                        className="form-control-modern"
                        value={ row.original.tax_rate ? row.original.tax_rate : '' }
                        onChange={ e => itemChange( row.original.id, 'tax_rate', parseFloat( e.target.value ) ) }
                    />
                    : ''
                }
            </>
        )
    }, {
        Header: '',
        id: 'actions',
        accessor: 'id',
        className: 'actions justify-content-end',
        headerClassName: 'justify-content-end',
        width: 100,
        Cell: row => (
            <>
                <a href="#editRow" onClick={ e => { e.preventDefault(); itemChange( row.value, 'edit', !row.original.edit ); } }><i className={ `fas ${ row.original.edit ? 'fa-times' : 'fa-pencil-alt' }` }></i></a>
                <a href="#del" onClick={ e => deleteItem( e, row.value ) } ><i className="fas fa-trash-alt"></i></a>
            </>
        )
    } ];

    async function searchCustomers ( input ) {
        let options = [];
        await getUsers( 0, undefined, [
            {
                id: 'role_id',
                value: 2
            }, {
                id: 'name',
                value: input
            }
        ] ).then( response => {
            options = response.data.map( customer => {
                return {
                    label: customer.first_name + ' ' + customer.last_name,
                    value: customer
                };
            } );
        } ).catch( error => console.error( error ) );
        return options;
    }

    function loadBilling ( e ) {
        e.preventDefault();
        if ( window.confirm( "Load the customer's billing information? This will remove any currently entered billing information." ) ) {
            setBilling( {
                first_name: customer.billing_first_name,
                last_name: customer.billing_last_name,
                company: customer.billing_company,
                address_1: customer.billing_address_1,
                address_2: customer.billing_address_2,
                city: customer.billing_city,
                state: customer.billing_state,
                postcode: customer.billing_postcode,
                country: customer.billing_country,
                email: customer.billing_email,
                phone: customer.billing_phone
            } );
        }
    }

    function loadShipping ( e ) {
        e.preventDefault();
        if ( window.confirm( "Load the customer's shipping information? This will remove any currently entered shipping information." ) ) {
            setShipping( {
                first_name: customer.shipping_first_name,
                last_name: customer.shipping_last_name,
                company: customer.shipping_company,
                address_1: customer.shipping_address_1,
                address_2: customer.shipping_address_2,
                city: customer.shipping_city,
                state: customer.shipping_state,
                postcode: customer.shipping_postcode,
                country: customer.shipping_country
            } );
        }
    }

    function copyBilling ( e ) {
        e.preventDefault();
        if ( window.confirm( "Copy billing information to shipping information ? This will remove any currently entered shipping information." ) ) {
            setShipping( {
                first_name: customer.billing_first_name,
                last_name: customer.billing_last_name,
                company: customer.billing_company,
                address_1: customer.billing_address_1,
                address_2: customer.billing_address_2,
                city: customer.billing_city,
                state: customer.billing_state,
                postcode: customer.billing_postcode,
                country: customer.billing_country
            } );
        }
    }

    function addressChange ( type, key, value ) {
        let temp;
        if ( type === 'billing' ) {
            temp = { ...billing };
            temp[ key ] = value;
            setBilling( temp );
        } else {
            temp = { ...shipping };
            temp[ key ] = value;
            setShipping( temp );
        }
    }

    function itemChange ( id, key, value ) {
        let temp = [ ...items ];
        temp.find( item => item.id === id )[ key ] = value;
        setItems( temp );
    }

    function deleteItem ( e, id ) {
        e.preventDefault();
        setItems( items.filter( item => item.id !== id ) );
    }

    function addItems ( result, data ) {
        setModalOpen( false );
        if ( result ) {
            let temp = [ ...items ];
            data.forEach( product => {
                let index = temp.findIndex( item => item.id === product.id )
                if ( index >= 0 ) {
                    temp[ index ].qty += product.qty;
                } else {
                    temp.push( {
                        id: product.id,
                        name: product.name,
                        cost: product.price,
                        qty: product.qty,
                        discount: 0,
                        tax_rate: null
                    } );
                }
            } );
            setItems( temp );
        }
    }

    function addShipping () {
        setShippingMethod( {
            name: '',
            cost: 0,
            tax: 0,
            edit: false
        } );
    }

    function shippingMethodChange ( key, value ) {
        let temp = { ...shippingMethod };
        temp[ key ] = value;
        setShippingMethod( temp );
    }

    function addCoupon () {
        let newCoupon = window.prompt( "Please enter coupon code." );
        if ( newCoupon ) {
            if ( coupons.find( coupon => coupon.code === newCoupon ) ) {
                return toast(
                    <PNotify title="Warning" icon="fas fa-exclamation" text="This coupon has already been applied." />,
                    {
                        containerId: "default",
                        className: "notification-warning"
                    }
                );
            }
            applyCoupons( items, coupons, newCoupon ).then( response => {
                if ( response ) {
                    setItems( response.items );
                    setCoupons( response.coupons );
                    return toast(
                        <PNotify title="Success" icon="fas fa-check" text="Coupon added successfully." />,
                        {
                            containerId: "default",
                            className: "notification-success"
                        }
                    );
                } else {
                    return toast(
                        <PNotify title="Error" icon="fas fa-times" text="Invalid Coupon code." />,
                        {
                            containerId: "default",
                            className: "notification-danger"
                        }
                    );
                }
            } );
        }
    }

    function removeCoupon ( index ) {
        if ( window.confirm( "Are you sure you want to remove this coupon?" ) ) {
            let temp = [ ...coupons ];
            temp.splice( index, 1 );
            applyCoupons( items, temp ).then( response => {
                setItems( response.items );
                setCoupons( response.coupons );
            } );
            toast(
                <PNotify title="Success" icon="fas fa-check" text="Coupon removed successfully." />,
                {
                    containerId: "default",
                    className: "notification-success"
                }
            );
        }
    }

    return (
        <>
            <Breadcrumb current="New Order" paths={ [
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

            <Form className="order-details" method="post" action="#" onSubmit={ e => e.preventDefault() }>
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
                                        <Form.Control as="select" className="form-control-modern">
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
                                            <div className="date d-flex">
                                                <Form.Control
                                                    as="div"
                                                    className="py-0"
                                                >
                                                    <DatePicker
                                                        selected={ date }
                                                        onChange={ value => setDate( value ) }
                                                    />
                                                </Form.Control>
                                            </div>
                                            <div className="time">
                                                <span className="px-2">@</span>
                                                <Form.Control
                                                    type="number"
                                                    className="form-control-modern text-center"
                                                    min="0"
                                                    max="23"
                                                />
                                                <span className="px-2">:</span>
                                                <Form.Control
                                                    type="number"
                                                    className="form-control-modern text-center"
                                                    min="0"
                                                    max="59"
                                                />
                                            </div>
                                        </div>
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={ Col } className="mb-3">
                                        <Form.Label>Customer</Form.Label>
                                        <SelectAsync
                                            loadOptions={ searchCustomers }
                                            onChange={ option => setCustomer( option.value ) }
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
                                            { customer ?
                                                <Button
                                                    href="#loadBilling"
                                                    className="text-left p-0"
                                                    variant="link"
                                                    block
                                                    onClick={ loadBilling }
                                                >Load billing address</Button>
                                                : ''
                                            }
                                        </h3>
                                        <Form.Row>
                                            <Col md={ 6 } className="mb-3">
                                                <Form.Group>
                                                    <Form.Label>First name</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        className="form-control-modern"
                                                        required
                                                        value={ billing.first_name ? billing.first_name : '' }
                                                        onChange={ e => addressChange( 'billing', 'first_name', e.target.value ) }
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col md={ 6 } className="mb-3">
                                                <Form.Group>
                                                    <Form.Label>Last name</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        className="form-control-modern"
                                                        required
                                                        value={ billing.last_name ? billing.last_name : '' }
                                                        onChange={ e => addressChange( 'billing', 'last_name', e.target.value ) }
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col className="col-12 mb-3">
                                                <Form.Group>
                                                    <Form.Label>Company</Form.Label>
                                                    <Form.Control type="text" className="form-control-modern" />
                                                </Form.Group>
                                            </Col>
                                            <Col md={ 6 } className="mb-3">
                                                <Form.Group>
                                                    <Form.Label>Address line 1</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        className="form-control-modern"
                                                        required
                                                        value={ billing.address_1 ? billing.address_1 : '' }
                                                        onChange={ e => addressChange( 'billing', 'address_1', e.target.value ) }
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col md={ 6 } className="mb-3">
                                                <Form.Group>
                                                    <Form.Label>Address line 2</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        className="form-control-modern"
                                                        value={ billing.address_2 ? billing.address_2 : '' }
                                                        onChange={ e => addressChange( 'billing', 'address_2', e.target.value ) }
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col md={ 6 } className="mb-3">
                                                <Form.Group>
                                                    <Form.Label>City</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        className="form-control-modern"
                                                        required
                                                        value={ billing.city ? billing.city : '' }
                                                        onChange={ e => addressChange( 'billing', 'city', e.target.value ) }
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col md={ 6 } className="mb-3">
                                                <Form.Group>
                                                    <Form.Label>Postcode / Zip</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        className="form-control-modern"
                                                        required
                                                        value={ billing.postcode ? billing.postcode : '' }
                                                        onChange={ e => addressChange( 'billing', 'postcode', e.target.value ) }
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col className="col-12 mb-3">
                                                <Form.Group>
                                                    <Form.Label>Country</Form.Label>
                                                    <Select
                                                        options={ COUNTRIES }
                                                        value={ billing.country ? COUNTRIES.find( item => item.value === billing.country ) : {} }
                                                        onChange={ option => addressChange( 'billing', 'country', option.value ) }
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col className="col-12 mb-3">
                                                <Form.Group>
                                                    <Form.Label>State / Province</Form.Label>
                                                    { STATES[ billing.country ] && STATES[ billing.country ].length ?
                                                        <Select
                                                            options={ STATES[ billing.country ] }
                                                            value={ billing.state ? STATES[ billing.country ].find( state => state.value === billing.state ) : {} }
                                                            onChange={ option => addressChange( 'billing', 'state', option.value ) }
                                                        />
                                                        :
                                                        <Form.Control
                                                            type="text"
                                                            className="form-control-modern"
                                                            required
                                                            value={ billing.state ? billing.state : '' }
                                                            onChange={ e => addressChange( 'billing', 'state', e.target.value ) }
                                                        />
                                                    }
                                                </Form.Group>
                                            </Col>
                                            <Col md={ 6 } className="col-12 mb-3">
                                                <Form.Group>
                                                    <Form.Label>Email address</Form.Label>
                                                    <Form.Control
                                                        type="email"
                                                        className="form-control-modern"
                                                        required
                                                        value={ billing.email ? billing.email : '' }
                                                        onChange={ e => addressChange( 'billing', 'email', e.target.value ) }
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col md={ 6 } className="mb-3">
                                                <Form.Group>
                                                    <Form.Label>Phone</Form.Label>
                                                    <Form.Control
                                                        type="tel"
                                                        className="form-control-modern"
                                                        required
                                                        value={ billing.phone ? billing.phone : '' }
                                                        onChange={ e => addressChange( 'billing', 'phone', e.target.value ) }
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group>
                                                    <Form.Label>Payment method</Form.Label>
                                                    <Form.Control as="select" className="form-control-modern" required>
                                                        <option value="stripe">Stripe</option>
                                                        <option value="paypal">Paypal</option>
                                                        <option value="cash_on_delivery">Cash on Delivery</option>
                                                    </Form.Control>
                                                </Form.Group>
                                            </Col>
                                        </Form.Row>
                                    </Col>
                                    <Col xl={ 4 }>
                                        <h3 className="font-weight-bold text-color-dark text-4 line-height-1 mt-0 mb-3">
                                            SHIPPING
                                            { customer ?
                                                <div className="d-block">
                                                    <Button
                                                        href="#loadShipping"
                                                        className="text-left p-0"
                                                        variant="link"
                                                        onClick={ loadShipping } >Load shipping address</Button>
                                                    <Button
                                                        href="#copyBilling"
                                                        className="text-left p-0"
                                                        variant="link"
                                                        onClick={ copyBilling } >Copy billing address</Button>
                                                </div>
                                                : '' }
                                        </h3>
                                        <Form.Row>
                                            <Col md={ 6 } className="mb-3">
                                                <Form.Group>
                                                    <Form.Label>First name</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        className="form-control-modern"
                                                        required
                                                        value={ shipping.first_name ? shipping.first_name : '' }
                                                        onChange={ e => addressChange( 'shipping', 'first_name', e.target.value ) }
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col md={ 6 } className="mb-3">
                                                <Form.Group>
                                                    <Form.Label>Last name</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        className="form-control-modern"
                                                        required
                                                        value={ shipping.last_name ? shipping.last_name : '' }
                                                        onChange={ e => addressChange( 'shipping', 'last_name', e.target.value ) }
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col className="col-12 mb-3">
                                                <Form.Group>
                                                    <Form.Label>Company</Form.Label>
                                                    <Form.Control type="text" className="form-control-modern" />
                                                </Form.Group>
                                            </Col>
                                            <Col md={ 6 } className="mb-3">
                                                <Form.Group>
                                                    <Form.Label>Address line 1</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        className="form-control-modern"
                                                        required
                                                        value={ shipping.address_1 ? shipping.address_1 : '' }
                                                        onChange={ e => addressChange( 'shipping', 'address_1', e.target.value ) }
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col md={ 6 } className="mb-3">
                                                <Form.Group>
                                                    <Form.Label>Address line 2</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        className="form-control-modern"
                                                        value={ shipping.address_2 ? shipping.address_2 : '' }
                                                        onChange={ e => addressChange( 'shipping', 'address_2', e.target.value ) }
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col md={ 6 } className="mb-3">
                                                <Form.Group>
                                                    <Form.Label>City</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        className="form-control-modern"
                                                        required
                                                        value={ shipping.city ? shipping.city : '' }
                                                        onChange={ e => addressChange( 'shipping', 'city', e.target.value ) }
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col md={ 6 } className="mb-3">
                                                <Form.Group>
                                                    <Form.Label>Postcode / Zip</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        className="form-control-modern"
                                                        required
                                                        value={ shipping.postcode ? shipping.postcode : '' }
                                                        onChange={ e => addressChange( 'shipping', 'postcode', e.target.value ) }
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col className="col-12 mb-3">
                                                <Form.Group>
                                                    <Form.Label>Country</Form.Label>
                                                    <Select
                                                        options={ COUNTRIES }
                                                        value={ shipping.country ? COUNTRIES.find( item => item.value === shipping.country ) : {} }
                                                        onChange={ option => addressChange( 'shipping', 'country', option.value ) }
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col className="col-12 mb-3">
                                                <Form.Group>
                                                    <Form.Label>State / Province</Form.Label>
                                                    { STATES[ shipping.country ] && STATES[ shipping.country ].length ?
                                                        <Select
                                                            options={ STATES[ shipping.country ] }
                                                            value={ shipping.state ? STATES[ shipping.country ].find( state => state.value === shipping.state ) : {} }
                                                            onChange={ option => addressChange( 'shipping', 'state', option.value ) }
                                                        />
                                                        :
                                                        <Form.Control
                                                            type="text"
                                                            className="form-control-modern"
                                                            required
                                                            value={ shipping.state ? shipping.state : '' }
                                                            onChange={ e => addressChange( 'shipping', 'state', e.target.value ) }
                                                        />
                                                    }
                                                </Form.Group>
                                            </Col>
                                        </Form.Row>
                                    </Col>
                                    <Col xl={ 4 }>
                                        <h3 className="text-color-dark font-weight-bold text-4 line-height-1 mt-0 mb-3" >Order Information</h3>
                                        <Form.Control as="textarea" rows="10" className="form-control-modern" />
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
                                    <Button
                                        type="button"
                                        className="mr-2"
                                        variant="primary"
                                        onClick={ () => setModalOpen( true ) }>Add products</Button>
                                    <Button
                                        type="button"
                                        className="mr-2"
                                        variant="primary"
                                        disabled={ !items.length }
                                        onClick={ addCoupon }>Add coupon</Button>
                                    <Button
                                        type="button"
                                        variant="primary"
                                        disabled={ shippingMethod }
                                        onClick={ addShipping }>Add shipping</Button>
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <PtTable
                                    className="table table-ecommerce-simple -striped mb-2"
                                    type="simple"
                                    data={ items }
                                    columns={ columns }
                                    NoDataComponent={ () => { return ''; } }
                                    pageSize={ Math.min( items.length, 6 ) }
                                />

                                { shippingMethod ?
                                    <Table
                                        className="table-ecommerce-simple table-ecommerce-simple-border-bottom table-no-collapse mb-2"
                                        striped
                                    >
                                        <tbody>
                                            <tr>
                                                <td width="60" className="pl-4"><i className="fa fa-truck"></i></td>
                                                <td width="300">
                                                    { shippingMethod.edit ?
                                                        <Form.Control
                                                            type="text"
                                                            className="form-control-modern"
                                                            value={ shippingMethod.name }
                                                            onChange={ e => shippingMethodChange( 'name', e.target.value ) }
                                                        />
                                                        : <span>{ shippingMethod.name }</span>
                                                    }
                                                </td>
                                                <td colSpan="2"></td>
                                                <td className="text-right">
                                                    { shippingMethod.edit ?
                                                        <Form.Control
                                                            type="number"
                                                            className="form-control-modern"
                                                            value={ shippingMethod.cost }
                                                            onChange={ e => shippingMethodChange( 'cost', parseFloat( e.target.value ) ) }
                                                        />
                                                        : <span>${ shippingMethod.cost.toFixed( 2 ) }</span>
                                                    }
                                                </td>
                                                <td className="text-right">
                                                    { shippingMethod.edit ?
                                                        <Form.Control
                                                            type="number"
                                                            className="form-control-modern"
                                                            value={ shippingMethod.tax }
                                                            onChange={ e => shippingMethodChange( 'tax', parseFloat( e.target.value ) ) }
                                                        />
                                                        : <span>${ shippingMethod.tax.toFixed( 2 ) }</span>
                                                    }
                                                </td>
                                                <td className="actions text-right" width="100">
                                                    <a href="#editShipping" onClick={ e => { e.preventDefault(); shippingMethodChange( 'edit', !shippingMethod.edit ); } }>
                                                        <i className={ `fas ${ shippingMethod.edit ? 'fa-times' : 'fa-pencil-alt' }` }></i>
                                                    </a>
                                                    <a href="#delShipping" onClick={ e => { e.preventDefault(); setShippingMethod( null ); } }><i className="fas fa-trash-alt"></i></a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                    : ''
                                }

                                { coupons.length ?
                                    <div className="coupons px-2">
                                        <h3 className="font-weight-bold text-color-dark text-2 mt-2 mb-1">Used Coupons</h3>
                                        <Row>
                                            { coupons.map( ( coupon, index ) => (
                                                <Col className="col-auto" key={ `coupon-${ index }` }>
                                                    <Button
                                                        href="#delCoupon"
                                                        className="border"
                                                        variant="light"
                                                        onClick={ e => e.preventDefault() }>
                                                        { coupon.code }
                                                        <i className="fa fa-times ml-3" onClick={ () => removeCoupon( index ) }></i>
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
                                    { coupons.length ?
                                        <Col className="col-auto mr-5">
                                            <h3 className="font-weight-bold text-color-dark text-4 mb-3">Coupon(s)</h3>
                                            <span className="d-flex align-items-center">
                                                { coupons.length } coupons
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
                                    <Col className="col-auto">
                                        <h3 className="font-weight-bold text-color-dark text-4 mb-3">Order Total</h3>
                                        <span className="d-flex align-items-center justify-content-lg-end">
                                            <strong className="text-color-dark text-5">${ ( subtotal - couponAmount + ( shipping.cost ? shipping.cost : 0 ) + totalTax ).toFixed( 2 ) }</strong>
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
                    <Col md="auto" className="col-6 px-md-0 mt-3 mt-md-0">
                        <Button
                            as={ Link }
                            to={ `${ process.env.PUBLIC_URL }/ecommerce/orders` }
                            className="btn-px-4 py-3 border font-weight-semibold text-color-dark line-height-1 d-flex h-100 align-items-center"
                            variant="light"
                        >Back</Button>
                    </Col>
                </Row>
            </Form>

            <AddProductsModal isOpen={ modalOpen } onClose={ addItems } />
        </>
    )
}