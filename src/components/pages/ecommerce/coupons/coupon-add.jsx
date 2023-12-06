import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Form, Card, InputGroup, Button } from 'react-bootstrap';
import { Tabs, TabList, TabPanel, Tab } from 'react-tabs';
import DatePicker from 'react-datepicker';
import SelectAsync from 'react-select/async';
import { toast } from 'react-toastify';

import 'react-datepicker/dist/react-datepicker.css';

import Breadcrumb from '../../../common/breadcrumb';
import PtToolTip from '../../../features/elements/tooltip';
import PNotify from '../../../features/elements/p-notify';

import { getProducts, getCategories } from '../../../../api';

export default function CouponAdd () {
    const [ type, setType ] = useState( 'percent' );
    const [ expiry, setExpiry ] = useState( null );

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

    function addCoupon ( e ) {
        e.preventDefault();
        toast(
            <PNotify title="Success" icon="fas fa-check" text="Coupon added successfully." />,
            {
                containerId: "default",
                className: "notification-success"
            }
        );
    }

    return (
        <>
            <Breadcrumb current={ 'Add Coupon' } paths={ [
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

            <Form className="ecommerce-form" action="#" method="post" onSubmit={ addCoupon }>
                <Row>
                    <Col>
                        <Card className="card-modern card-big-info">
                            <Card.Body>
                                <Tabs className="tabs-modern row" forceRenderTabPanel={ true } selectedTabClassName="active" selectedTabPanelClassName="active show" style={ { minHeight: '490px' } }>
                                    <Col lg="2-5" xl="1-5">
                                        <TabList className="nav flex-column">
                                            <Tab><a className="nav-link" href="#price" onClick={ e => e.preventDefault() }><i className="bx bx-cog mr-2"></i>General</a></Tab>
                                            <Tab><a className="nav-link" href="#inventory" onClick={ e => e.preventDefault() }><i className="bx bx-block mr-2"></i>Usage Restriction</a></Tab>
                                            <Tab><a className="nav-link" href="#linked" onClick={ e => e.preventDefault() }><i className="bx bx-timer mr-2"></i>Usage Limits</a></Tab>
                                        </TabList>
                                    </Col>

                                    <Col lg="3-5" xl="4-5" className="col-lg-3-5 col-xl-4-5">
                                        <div className="tab-content">
                                            <TabPanel className="tab-pane fade">
                                                <Form.Group as={ Row } className="align-items-center">
                                                    <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">Coupon Code</Col>
                                                    <Col lg={ 7 } xl={ 6 }>
                                                        <Form.Control
                                                            type="text"
                                                            maxLength="50"
                                                            className="form-control-modern"
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
                                                            value={ type }
                                                            onChange={ e => setType( e.target.value ) }
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
                                                            required
                                                        />
                                                    </Col>
                                                </Form.Group>
                                                <Form.Group as={ Row }>
                                                    <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mt-2 mb-0">Description</Col>
                                                    <Col lg={ 7 } xl={ 6 }>
                                                        <Form.Control
                                                            as="textarea"
                                                            rows={ 4 }
                                                            className="form-control-modern"
                                                        />
                                                    </Col>
                                                </Form.Group>
                                                <Form.Group as={ Row }>
                                                    <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mt-2 mb-0">Allow free shipping</Col>
                                                    <Col lg={ 7 } xl={ 6 }>
                                                        <Form.Check className="checkbox">
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
                                                                    selected={ expiry }
                                                                    onChange={ date => setExpiry( date ) }
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
                                                        />
                                                    </Col>
                                                </Form.Group>
                                                <Form.Group as={ Row }>
                                                    <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mt-2 mb-0">Individual Use Only</Col>
                                                    <Col lg={ 7 } xl={ 6 }>
                                                        <Form.Check className="checkbox">
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
                                                        <Form.Check className="checkbox">
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
                                                            isMulti={ true }
                                                            loadOptions={ searchProducts }
                                                        />
                                                    </Col>
                                                </Form.Group>
                                                <Form.Group as={ Row } className="align-items-center">
                                                    <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">
                                                        Exclude Products <PtToolTip addClass="ml-0" placement="top" trigger="hover" tooltip="The products that coupon will not be applied to" />
                                                    </Col>
                                                    <Col lg={ 7 } xl={ 6 }>
                                                        <SelectAsync
                                                            isMulti={ true }
                                                            loadOptions={ searchProducts }
                                                        />
                                                    </Col>
                                                </Form.Group>
                                                <Form.Group as={ Row } className="align-items-center">
                                                    <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">
                                                        Product Categories  <PtToolTip addClass="ml-0" placement="top" trigger="hover" tooltip="The product categories that coupon will be applied to" />
                                                    </Col>
                                                    <Col lg={ 7 } xl={ 6 }>
                                                        <SelectAsync
                                                            isMulti={ true }
                                                            loadOptions={ searchCategories }
                                                        />
                                                    </Col>
                                                </Form.Group>
                                                <Form.Group as={ Row } className="align-items-center">
                                                    <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">
                                                        Exclude Categories  <PtToolTip addClass="ml-0" placement="top" trigger="hover" tooltip="The product categories that coupon will not be applied to" />
                                                    </Col>
                                                    <Col lg={ 7 } xl={ 6 }>
                                                        <SelectAsync
                                                            isMulti={ true }
                                                            loadOptions={ searchCategories }
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
                                                        />
                                                    </Col>
                                                </Form.Group>
                                                { type !== 'cart' ?
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
                                                        />
                                                    </Col>
                                                </Form.Group>
                                            </TabPanel>
                                        </div>
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
                    <Col md="auto" className="col-6 px-md-0 mt-3 mt-md-0">
                        <Button
                            as={ Link }
                            to={ `${ process.env.PUBLIC_URL }/ecommerce/coupons` }
                            className="btn-px-4 py-3 border font-weight-semibold text-color-dark line-height-1 d-flex h-100 align-items-center"
                            variant="light"
                        >Back</Button>
                    </Col>
                </Row>
            </Form>
        </>
    )
}