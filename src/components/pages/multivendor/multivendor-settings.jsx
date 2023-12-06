import React from 'react';
import { Row, Col, Form, Card, Button } from 'react-bootstrap';
import { Tabs, TabList, TabPanel, Tab } from 'react-tabs';
import { toast } from 'react-toastify';

import Breadcrumb from '../../common/breadcrumb';
import PNotify from '../../features/elements/p-notify';

export default function MultivendorSettings () {

    function saveSettings ( e ) {
        e.preventDefault();
        toast(
            <PNotify title="Success" icon="fas fa-check" text="Settings saved successfully." />,
            {
                containerId: "default",
                className: "notification-success"
            }
        );
    }

    return (
        <>
            <Breadcrumb current="Vendor Setting" paths={ [
                {
                    name: 'Home',
                    url: '/'
                }, {
                    name: 'Settings',
                    url: '/ecommerce/settings'
                }
            ] } />

            <Row>
                <Col>
                    <Card className="card-modern card-big-info">
                        <Card.Body>
                            <Tabs className="tabs-modern row" selectedTabClassName="active" selectedTabPanelClassName="show">
                                <Col lg="2-5" xl="1-5">
                                    <TabList className="nav flex-column">
                                        <Tab><a className="nav-link" href="#general" onClick={ e => e.preventDefault() }>General</a></Tab>
                                        <Tab><a className="nav-link" href="#privilege" onClick={ e => e.preventDefault() }>Privilege</a></Tab>
                                        <Tab><a className="nav-link" href="#appearance" onClick={ e => e.preventDefault() }>Appearance</a></Tab>
                                    </TabList>
                                </Col>

                                <Col lg="3-5" xl="4-5">
                                    <TabPanel className="tab-pane fade">
                                        <Form className="ecommerce-form" method="post" onSubmit={ saveSettings }>
                                            <h3 className="mt-0 pb-2 w-100 border-bottom mb-3">Commission</h3>
                                            <Form.Group as={ Row } className="align-items-center">
                                                <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">Commission Type</Col>
                                                <Col lg={ 7 } xl={ 6 }>
                                                    <Form.Control
                                                        as="select"
                                                        className="form-control-modern float-left w-auto mr-3"
                                                        defaultValue="flat"
                                                    >
                                                        <option value="flat">Flat</option>
                                                        <option value="percentage">Percentage</option>
                                                    </Form.Control>
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={ Row } className="align-items-center">
                                                <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">Admin Commission</Col>
                                                <Col lg={ 7 } xl={ 6 }>
                                                    <Form.Control
                                                        type="text"
                                                        className="form-control-modern"
                                                        defaultValue="10"
                                                        required
                                                    />
                                                </Col>
                                            </Form.Group>
                                            <h3 className="mt-0 pb-2 w-100 border-bottom mb-3">Withdraw</h3>
                                            <Form.Group as={ Row } className="align-items-center">
                                                <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">Withdraw Method</Col>
                                                <Col lg={ 7 } xl={ 6 }>
                                                    <Form.Check className="checkbox">
                                                        <Form.Check.Label className="my-2">
                                                            <Form.Check.Input type="checkbox" className="checkbox-style-1 mt-0" defaultChecked />
                                                            Paypal
                                                        </Form.Check.Label>
                                                    </Form.Check>
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={ Row } className="align-items-center border-top-0 pt-0">
                                                <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">Minimum Withdraw Limit</Col>
                                                <Col lg={ 7 } xl={ 6 }>
                                                    <Form.Control
                                                        type="text"
                                                        className="form-control-modern"
                                                        defaultValue={ 10 }
                                                        required
                                                    />
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={ Row } className="align-items-center">
                                                <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">Exclude COD Payments</Col>
                                                <Col lg={ 7 } xl={ 6 }>
                                                    <Form.Check className="checkbox">
                                                        <Form.Check.Label className="my-2">
                                                            <Form.Check.Input type="checkbox" className="checkbox-style-1 mt-0" defaultChecked />
                                                            If an order is paid with Cash on Delivery (COD), then exclude that payment from vendor balance.
                                                        </Form.Check.Label>
                                                    </Form.Check>
                                                </Col>
                                            </Form.Group>
                                            <Row>
                                                <Col lg={ 5 } xl={ 3 }>
                                                </Col>
                                                <Col lg={ 7 } xl={ 6 } className="text-lg-right">
                                                    <Button type="submit" className="mb-2" variant="primary">Save</Button>
                                                </Col>
                                            </Row>
                                        </Form>
                                    </TabPanel>

                                    <TabPanel className="tab-pane fade">
                                        <Form className="ecommerce-form" method="post" onSubmit={ saveSettings }>
                                            <h3 className="mt-0 pb-2 w-100 border-bottom mb-3">Vendor Capability</h3>
                                            <Form.Group as={ Row } className="align-items-center">
                                                <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">Manage Media</Col>
                                                <Col lg={ 7 } xl={ 6 }>
                                                    <Form.Check className="checkbox">
                                                        <Form.Check.Label className="my-2">
                                                            <Form.Check.Input type="checkbox" className="checkbox-style-1 mt-0" defaultChecked />Allow vendors to manage media
                                                        </Form.Check.Label>
                                                    </Form.Check>
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={ Row } className="align-items-center">
                                                <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">Manage Product</Col>
                                                <Col lg={ 7 } xl={ 6 }>
                                                    <Form.Check className="checkbox">
                                                        <Form.Check.Label className="my-2">
                                                            <Form.Check.Input type="checkbox" className="checkbox-style-1 mt-0" defaultChecked />Allow vendors to manage product
                                                        </Form.Check.Label>
                                                    </Form.Check>
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={ Row } className="align-items-center">
                                                <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">Manage Post</Col>
                                                <Col lg={ 7 } xl={ 6 }>
                                                    <Form.Check className="checkbox">
                                                        <Form.Check.Label className="my-2">
                                                            <Form.Check.Input type="checkbox" className="checkbox-style-1 mt-0" defaultChecked />Allow vendors to manage post
                                                        </Form.Check.Label>
                                                    </Form.Check>
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={ Row } className="align-items-center">
                                                <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">Manage Ordre Status</Col>
                                                <Col lg={ 7 } xl={ 6 }>
                                                    <Form.Check className="checkbox">
                                                        <Form.Check.Label className="my-2">
                                                            <Form.Check.Input type="checkbox" className="checkbox-style-1 mt-0" defaultChecked />Allow vendors to order status
                                                        </Form.Check.Label>
                                                    </Form.Check>
                                                </Col>
                                            </Form.Group>
                                            <Row>
                                                <Col lg={ 5 } xl={ 3 }>
                                                </Col>
                                                <Col lg={ 7 } xl={ 6 } className="text-lg-right">
                                                    <Button type="submit" className="mb-2" variant="primary">Save</Button>
                                                </Col>
                                            </Row>
                                        </Form>
                                    </TabPanel>

                                    <TabPanel className="tab-pane fade">
                                        <Form className="ecommerce-form" method="post" onSubmit={ saveSettings }>
                                            <h3 className="mt-0 pb-2 w-100 border-bottom mb-3">Appearance</h3>
                                            <Form.Group as={ Row } className="align-items-center">
                                                <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">Vendor Header One</Col>
                                                <Col lg={ 7 } xl={ 9 }>
                                                    <Form.Check
                                                        type="radio"
                                                        custom
                                                        id="product-type-one"
                                                        className="radio-image"
                                                        name="product-type"
                                                        defaultChecked
                                                        label={ <img className="w-100 h-auto" src={ `${ process.env.PUBLIC_URL }/assets/images/vendors/vendor-header-1.png` } alt="header" width="1103" height="231" /> }
                                                    />
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={ Row } className="align-items-center">
                                                <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">Vendor Header Two</Col>
                                                <Col lg={ 7 } xl={ 9 }>
                                                    <Form.Check
                                                        type="radio"
                                                        custom
                                                        id="product-type-two"
                                                        className="radio-image"
                                                        name="product-type"
                                                        label={ <img className="w-100 h-auto" src={ `${ process.env.PUBLIC_URL }/assets/images/vendors/vendor-header-2.png` } alt="header" width="1106" height="799" /> }
                                                    />
                                                </Col>
                                            </Form.Group>
                                            <Row>
                                                <Col lg={ 5 } xl={ 3 }>
                                                </Col>
                                                <Col lg={ 7 } xl={ 9 } className="text-center">
                                                    <Button type="submit" className="mb-2" variant="primary">Save</Button>
                                                </Col>
                                            </Row>
                                        </Form>
                                    </TabPanel>
                                </Col>
                            </Tabs>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}