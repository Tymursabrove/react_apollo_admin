import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Form, Card, Button, InputGroup } from 'react-bootstrap';
import { Tabs, TabList, TabPanel, Tab } from 'react-tabs';
import DatePicker from 'react-datepicker';
import SelectAsync from 'react-select/async';
import { toast } from 'react-toastify';

import 'react-datepicker/dist/react-datepicker.css';

import Breadcrumb from '../../../common/breadcrumb';
import DeleteConfirmModal from '../../../features/modals/delete-confirm-modal';
import Loader from '../../../features/loader';
import PNotify from '../../../features/elements/p-notify';
import PtToolTip from '../../../features/elements/tooltip';

import { getProducts, getCategories, getCoupon } from '../../../../api';

export default function CouponDetail ( props ) {
    const [ coupon, setCoupon ] = useState( null );
    const [ loading, setLoading ] = useState( true );
    const [ openModal, setOpenModal ] = useState( false );

    useEffect( () => {
        setLoading( true );
        getCoupon( parseInt( props.match.params.id ) ).then( data => {
            setCoupon( data );
            setLoading( false );
        } );
    }, [ props.match.params.id ] )

    async function searchProducts ( input ) {
        let options = [];
        await getProducts( 0, undefined, [ { id: 'name', value: input } ], null, true ).then( response => {
            options = response.data.map( product => {
                return {
                    label: product.name,
                    value: product.id
                }
            } );
        } ).catch( error => console.error( error ) );
        return options;
    }

    async function searchCategories ( input ) {
        let options = [];
        await getCategories( 'products', 0, undefined, [ { id: 'name', value: input } ] ).then( response => {
            options = response.data.map( product => {
                return {
                    label: product.name,
                    value: product.id
                }
            } );
        } ).catch( error => console.error( error ) );
        return options;
    }

    function saveCoupon ( e ) {
        e.preventDefault();
        toast(
            <PNotify title="Success" icon="fas fa-check" text="Coupon saved successfully." />,
            {
                containerId: "default",
                className: "notification-success"
            }
        );
    }

    function couponChange ( key, value ) {
        let temp = { ...coupon };
        temp[ key ] = value;
        setCoupon( temp );
    }

    function selectChange ( key, options ) {
        let temp = { ...coupon };
        temp[ key ] = options ? options.map( option => {
            return {
                id: option.value,
                name: option.label
            };
        } ) : [];
        setCoupon( temp );
    }

    function deleteCoupon ( e ) {
        e.preventDefault();
        setOpenModal( true );
    }

    function deleteConfirm ( result ) {
        setOpenModal( false );
        result && props.history.push( `${ process.env.PUBLIC_URL }/ecommerce/coupons` );
    }

    return (
        <>
            <Breadcrumb current='Edit Coupon' paths={ [
                {
                    name: 'Home',
                    url: '/'
                }, {
                    name: 'Ecommerce',
                    url: '/ecommerce'
                }, {
                    name: 'Coupons',
                    url: '/ecommerce/coupons'
                }
            ] } />

            { loading ? <Loader />
                :

                <Form className="ecommerce-form" action="#" method="post" onSubmit={ saveCoupon }>
                    <Row>
                        <Col>
                            <Card className="card-modern card-big-info">
                                <Card.Body>
                                    <Tabs className="tabs-modern row" selectedTabClassName="active" selectedTabPanelClassName="show" style={ { minHeight: '490px' } }>
                                        <Col lg="2-5" xl="1-5">
                                            <TabList className="nav flex-column">
                                                <Tab><a className="nav-link" href="#price" onClick={ e => e.preventDefault() }><i className="bx bx-cog mr-2"></i>General</a></Tab>
                                                <Tab><a className="nav-link" href="#inventory" onClick={ e => e.preventDefault() }><i className="bx bx-block mr-2"></i>Usage Restriction</a></Tab>
                                                <Tab><a className="nav-link" href="#linked" onClick={ e => e.preventDefault() }><i className="bx bx-timer mr-2"></i>Usage Limits</a></Tab>
                                            </TabList>
                                        </Col>

                                        <Col lg="3-5" xl="4-5" className="col-lg-3-5 col-xl-4-5">
                                            <TabPanel className="tab-pane fade">
                                                <Form.Group as={ Row } className="align-items-center">
                                                    <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">Coupon Code</Col>
                                                    <Col lg={ 7 } xl={ 6 }>
                                                        <Form.Control
                                                            type="text"
                                                            maxLength="50"
                                                            className="form-control-modern"
                                                            value={ coupon.code }
                                                            onChange={ e => couponChange( 'code', e.target.value ) }
                                                            required
                                                        />
                                                    </Col>
                                                </Form.Group>
                                                <Form.Group as={ Row } className="align-items-center">
                                                    <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">Discount Type</Col>
                                                    <Col lg={ 7 } xl={ 6 }>
                                                        <Form.Control
                                                            as="select"
                                                            className="form-control-modern"
                                                            value={ coupon.discount_type }
                                                            onChange={ e => couponChange( 'discount_type', e.target.value ) }
                                                        >
                                                            <option value="percent">Percentage Discount</option>
                                                            <option value="cart">Fixed Cart Discount</option>
                                                            <option value="product">Fixed Product Discount</option>
                                                        </Form.Control>
                                                    </Col>
                                                </Form.Group>
                                                <Form.Group as={ Row } className="align-items-center">
                                                    <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">
                                                        Coupon Amount <PtToolTip addClass="ml-0" placement="top" trigger="hover" tooltip="Value of a coupon" />
                                                    </Col>
                                                    <Col lg={ 7 } xl={ 6 }>
                                                        <Form.Control
                                                            type="text"
                                                            maxLength="20"
                                                            className="form-control-modern"
                                                            value={ coupon.amount }
                                                            onChange={ e => couponChange( 'amount', parseInt( e.target.value ) ) }
                                                            required
                                                        />
                                                    </Col>
                                                </Form.Group>
                                                <Form.Group as={ Row }>
                                                    <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mt-2">Description</Col>
                                                    <Col lg={ 7 } xl={ 6 }>
                                                        <Form.Control
                                                            as="textarea"
                                                            rows={ 4 }
                                                            className="form-control-modern"
                                                            value={ coupon.description ? coupon.description : '' }
                                                            onChange={ e => couponChange( 'description', e.target.value ) }
                                                        />
                                                    </Col>
                                                </Form.Group>
                                                <Form.Group as={ Row }>
                                                    <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mt-2 mb-0">Allow free shipping</Col>
                                                    <Col lg={ 7 } xl={ 6 }>
                                                        <Form.Check
                                                            className="checkbox"
                                                            checked={ coupon.free_shippping }
                                                            onChange={ e => couponChange( 'free_shipping', e.target.value ) }
                                                        >
                                                            <Form.Check.Label className="my-2">
                                                                <Form.Check.Input className="checkbox-style-1 mt-0" />
                                                                Check this box if the coupon grants free shipping. A free shipping method must be enabled in your shipping zone and be set to require "a valid free shipping coupon" (see the "Free Shipping Requires" setting).
                                                            </Form.Check.Label>
                                                        </Form.Check>
                                                    </Col>
                                                </Form.Group>
                                                <Form.Group as={ Row } className="align-items-center">
                                                    <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">
                                                        Coupon expiry date <PtToolTip addClass="ml-0" placement="top" trigger="hover" tooltip="The date coupon will expire" />
                                                    </Col>
                                                    <Col lg={ 7 } xl={ 6 }>
                                                        <InputGroup>
                                                            <InputGroup.Prepend>
                                                                <InputGroup.Text><i className="fas fa-calendar-alt"></i></InputGroup.Text>
                                                            </InputGroup.Prepend>
                                                            <Form.Control
                                                                as="div"
                                                                className="py-0"
                                                            >
                                                                <DatePicker
                                                                    selected={ typeof coupon.expiry_date === 'string' ? new Date( coupon.expiry_date ) : coupon.expiry_date }
                                                                    onChange={ date => couponChange( 'expiry_date', date ) }
                                                                />
                                                            </Form.Control>
                                                        </InputGroup>
                                                    </Col>
                                                </Form.Group>
                                            </TabPanel>

                                            <TabPanel className="tab-pane fade">
                                                <Form.Group as={ Row } className="align-items-center">
                                                    <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">
                                                        Minimum Spend <PtToolTip addClass="ml-0" placement="top" trigger="hover" tooltip="Minimum spend (subtotal) allowed to use the coupon." />
                                                    </Col>
                                                    <Col lg={ 7 } xl={ 6 }>
                                                        <Form.Control
                                                            type="text"
                                                            maxLength="20"
                                                            className="form-control-modern"
                                                            placeholder="No minimum"
                                                            value={ coupon.minimum_spend ? coupon.minimum_spend : '' }
                                                            onChange={ e => couponChange( 'minimum_spend', e.target.value ) }
                                                        />
                                                    </Col>
                                                </Form.Group>
                                                <Form.Group as={ Row } className="align-items-center">
                                                    <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">
                                                        Maximum Spend <PtToolTip addClass="ml-0" placement="top" trigger="hover" tooltip="Maximum spend (subtotal) allowed to use the coupon." />
                                                    </Col>
                                                    <Col lg={ 7 } xl={ 6 }>
                                                        <Form.Control
                                                            type="text"
                                                            maxLength="20"
                                                            className="form-control-modern"
                                                            placeholder="No maximum"
                                                            value={ coupon.maximum_spend ? coupon.maximum_spend : '' }
                                                            onChange={ e => couponChange( 'maximum_spend', e.target.value ) }
                                                        />
                                                    </Col>
                                                </Form.Group>
                                                <Form.Group as={ Row }>
                                                    <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mt-2 mb-0">Individual Use Only</Col>
                                                    <Col lg={ 7 } xl={ 6 }>
                                                        <Form.Check
                                                            className="checkbox"
                                                            checked={ coupon.individual_use }
                                                            onChange={ e => couponChange( 'individual_use', e.target.checked ) }
                                                        >
                                                            <Form.Check.Label className="my-2">
                                                                <Form.Check.Input className="checkbox-style-1 mt-0" />
                                                                Check this box if the coupon cannot be used in conjunction with other coupons.
                                                            </Form.Check.Label>
                                                        </Form.Check>
                                                    </Col>
                                                </Form.Group>
                                                <Form.Group as={ Row }>
                                                    <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mt-2 mb-0">Exclude Sale Items?</Col>
                                                    <Col lg={ 7 } xl={ 6 }>
                                                        <Form.Check
                                                            className="checkbox"
                                                            checked={ coupon.exclude_sale_items }
                                                            onChange={ e => couponChange( 'exclude_sale_items', e.target.checked ) }
                                                        >
                                                            <Form.Check.Label className="my-2">
                                                                <Form.Check.Input className="checkbox-style-1 mt-0" />
                                                                Check this box if the coupon should not apply to items on sale. Per-item coupons will only work if the item is not on sale. Per-cart coupons will only work if there are items in the cart that are not on sale.
                                                            </Form.Check.Label>
                                                        </Form.Check>
                                                    </Col>
                                                </Form.Group>
                                                <Form.Group as={ Row } className="align-items-center">
                                                    <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">
                                                        Products <PtToolTip addClass="ml-0" placement="top" trigger="hover" tooltip="The products that coupon will be applied to" />
                                                    </Col>
                                                    <Col lg={ 7 } xl={ 6 }>
                                                        <SelectAsync
                                                            value={ coupon.products.map( product => { return { label: product.name, value: product.id } } ) }
                                                            isMulti={ true }
                                                            loadOptions={ searchProducts }
                                                            onChange={ options => selectChange( 'products', options ) }
                                                        />
                                                    </Col>
                                                </Form.Group>
                                                <Form.Group as={ Row } className="align-items-center">
                                                    <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">
                                                        Exclude Products <PtToolTip addClass="ml-0" placement="top" trigger="hover" tooltip="The products that coupon will not be applied to" />
                                                    </Col>
                                                    <Col lg={ 7 } xl={ 6 }>
                                                        <SelectAsync
                                                            value={ coupon.exclude_products.map( product => { return { label: product.name, value: product.id } } ) }
                                                            isMulti={ true }
                                                            loadOptions={ searchProducts }
                                                            onChange={ options => selectChange( 'exclude_products', options ) }
                                                        />
                                                    </Col>
                                                </Form.Group>
                                                <Form.Group as={ Row } className="align-items-center">
                                                    <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">
                                                        Product Categories  <PtToolTip addClass="ml-0" placement="top" trigger="hover" tooltip="The product categories that coupon will be applied to" />
                                                    </Col>
                                                    <Col lg={ 7 } xl={ 6 }>
                                                        <SelectAsync
                                                            value={ coupon.categories.map( cat => { return { label: cat.name, value: cat.id } } ) }
                                                            isMulti={ true }
                                                            loadOptions={ searchCategories }
                                                            onChange={ options => selectChange( 'categories', options ) }
                                                        />
                                                    </Col>
                                                </Form.Group>
                                                <Form.Group as={ Row } className="align-items-center">
                                                    <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">
                                                        Exclude Categories  <PtToolTip addClass="ml-0" placement="top" trigger="hover" tooltip="The product categories that coupon will not be applied to" />
                                                    </Col>
                                                    <Col lg={ 7 } xl={ 6 }>
                                                        <SelectAsync
                                                            value={ coupon.exclude_categories.map( cat => { return { label: cat.name, value: cat.id } } ) }
                                                            isMulti={ true }
                                                            loadOptions={ searchCategories }
                                                            onChange={ options => selectChange( 'exclude_categories', options ) }
                                                        />
                                                    </Col>
                                                </Form.Group>
                                                <Form.Group as={ Row } className="align-items-center">
                                                    <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">
                                                        Allowed E-mails <PtToolTip addClass="ml-0" placement="top" trigger="hover" tooltip="Emails that coupon will be applied. use comma(,) or asterisk(*) for multiple emails. e.g. *@gmail.com" />
                                                    </Col>
                                                    <Col lg={ 7 } xl={ 6 }>
                                                        <Form.Control
                                                            type="text"
                                                            maxLength="50"
                                                            className="form-control-modern"
                                                            placeholder="No restrictions"
                                                            value={ coupon.allowed_emails ? coupon.allowed_emails : '' }
                                                            onChange={ e => couponChange( "allowed_emails", e.target.value ) }
                                                        />
                                                    </Col>
                                                </Form.Group>
                                            </TabPanel>

                                            <TabPanel className="tab-pane fade">
                                                <Form.Group as={ Row } className="align-items-center">
                                                    <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">
                                                        Usage Limit Per Coupon <PtToolTip addClass="ml-0" placement="top" trigger="hover" tooltip="How many times this coupon will be used." />
                                                    </Col>
                                                    <Col lg={ 7 } xl={ 6 }>
                                                        <Form.Control
                                                            type="number"
                                                            min={ 0 }
                                                            className="form-control-modern"
                                                            placeholder="Unlimited Usage"
                                                            value={ coupon.limit_per_coupon ? coupon.limit_per_coupon : '' }
                                                            onChange={ e => couponChange( "limit_per_coupon", e.target.value ) }
                                                        />
                                                    </Col>
                                                </Form.Group>
                                                { coupon.discount_type !== 'cart' ?
                                                    <Form.Group as={ Row } className="align-items-center">
                                                        <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">
                                                            Limit Usage to X Items <PtToolTip addClass="ml-0" placement="top" trigger="hover" tooltip="How many items this coupon will be applied to" />
                                                        </Col>
                                                        <Col lg={ 7 } xl={ 6 }>
                                                            <Form.Control
                                                                type="number"
                                                                min={ 0 }
                                                                max={ 10000 }
                                                                className="form-control-modern"
                                                                placeholder="Apply to all qualifying items in cart"
                                                                value={ coupon.limit_x_items ? coupon.limit_x_items : '' }
                                                                onChange={ e => couponChange( "limit_x_items", e.target.value ) }
                                                            />
                                                        </Col>
                                                    </Form.Group>
                                                    : ''
                                                }
                                                <Form.Group as={ Row } className="align-items-center">
                                                    <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">
                                                        Usage Limit Per User <PtToolTip addClass="ml-0" placement="top" trigger="hover" tooltip="How many times this coupon will be used by individual user" />
                                                    </Col>
                                                    <Col lg={ 7 } xl={ 6 }>
                                                        <Form.Control
                                                            type="number"
                                                            min={ 0 }
                                                            max={ 10000 }
                                                            className="form-control-modern"
                                                            placeholder="Unlimited Usage"
                                                            value={ coupon.limit_per_user ? coupon.limit_per_user : '' }
                                                            onChange={ e => couponChange( "limit_per_user", e.target.value ) }
                                                        />
                                                    </Col>
                                                </Form.Group>
                                            </TabPanel>
                                        </Col>
                                    </Tabs>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="action-buttons">
                        <Col md="auto" className="col-6">
                            <Button
                                type="submit"
                                className="btn-px-4 py-3 d-flex align-items-center font-weight-semibold line-height-1"
                                variant="primary"
                            ><i className="bx bx-save text-4 mr-2"></i> Save Coupon</Button>
                        </Col>
                        <Col md="auto" className="col-6 px-md-0 mt-0">
                            <Button
                                as={ Link }
                                to={ `${ process.env.PUBLIC_URL }/ecommerce/coupons` }
                                className="btn-px-4 py-3 border font-weight-semibold text-color-dark line-height-1 d-flex h-100 align-items-center"
                                variant="light"
                            >Back</Button>
                        </Col>
                        <Col md="auto" className="col-6 ml-md-auto mt-3 mt-md-0">
                            <Button
                                href="#delete"
                                className="btn-px-4 py-3 d-flex align-items-center font-weight-semibold line-height-1"
                                variant="danger"
                                onClick={ deleteCoupon }
                            ><i className="bx bx-trash text-4 mr-2"></i> Delete Coupon</Button>
                        </Col>
                    </Row>
                </Form>
            }

            <DeleteConfirmModal isOpen={ openModal } onClose={ deleteConfirm } />
        </>
    )
}