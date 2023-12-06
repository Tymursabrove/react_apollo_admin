import React from 'react';
import { Row, Col, Tabs, Tab, Card, Form } from 'react-bootstrap';
import { Tabs as ReactTabs, TabList as ReactTabList, Tab as ReactTab, TabPanel as ReactTabPanel } from 'react-tabs';

import Breadcrumb from '../../common/breadcrumb';

function TabsPage () {
    return (
        <>
            <Breadcrumb current="Tabs" paths={ [ {
                name: 'Home',
                url: '/'
            }, {
                name: 'Elements',
                url: '/elements'
            } ] } />

            <Row>
                <Col lg={ 6 }>
                    <div className="tabs">
                        <Tabs>
                            <Tab eventKey="popular" title={ <><i className="fas fa-star"></i> Popular</> }>
                                <p>Popular</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat.</p>
                            </Tab>
                            <Tab eventKey="recent" title="Recent">
                                <p>Recent</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat.</p>
                            </Tab>
                        </Tabs>
                    </div>
                </Col>

                <Col lg={ 6 }>
                    <div className="tabs">
                        <Tabs className="tabs-primary justify-content-end">
                            <Tab eventKey="popular" title={ <><i className="fas fa-star"></i> Popular</> }>
                                <p>Popular</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat.</p>
                            </Tab>
                            <Tab eventKey="recent" title="Recent">
                                <p>Recent</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat.</p>
                            </Tab>
                        </Tabs>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col lg={ 6 }>
                    <div className="tabs tabs-bottom">
                        <Tabs>
                            <Tab eventKey="popular" title={ <><i className="fas fa-star"></i> Popular</> }>
                                <p>Popular</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat.</p>
                            </Tab>
                            <Tab eventKey="recent" title="Recent">
                                <p>Recent</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat.</p>
                            </Tab>
                        </Tabs>
                    </div>
                </Col>

                <Col lg={ 6 }>
                    <div className="tabs tabs-bottom tabs-primary">
                        <Tabs className="justify-content-end">
                            <Tab eventKey="popular" title={ <><i className="fas fa-star"></i> Popular</> }>
                                <p>Popular</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat.</p>
                            </Tab>
                            <Tab eventKey="recent" title="Recent">
                                <p>Recent</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat.</p>
                            </Tab>
                        </Tabs>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col lg={ 6 }>
                    <div className="tabs">
                        <Tabs className="nav-justified">
                            <Tab eventKey="popular" title={ <><i className="fas fa-star"></i> Popular</> }>
                                <p>Popular</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat.</p>
                            </Tab>
                            <Tab eventKey="recent" title="Recent">
                                <p>Recent</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat.</p>
                            </Tab>
                        </Tabs>
                    </div>
                </Col>
                <Col lg={ 6 }>
                    <div className="tabs tabs-bottom tabs-primary">
                        <Tabs className="nav-justified">
                            <Tab eventKey="popular" title={ <><i className="fas fa-star"></i> Popular</> }>
                                <p>Popular</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat.</p>
                            </Tab>
                            <Tab eventKey="recent" title="Recent">
                                <p>Recent</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat.</p>
                            </Tab>
                        </Tabs>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col lg={ 6 }>
                    <div className="tabs tabs-vertical tabs-left">
                        <Tabs>
                            <Tab eventKey="popular" title={ <><i className="fas fa-star"></i> Popular</> }>
                                <p>Popular</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat.</p>
                            </Tab>
                            <Tab eventKey="recent" title="Recent">
                                <p>Recent</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat.</p>
                            </Tab>
                        </Tabs>
                    </div>
                </Col>
                <Col lg={ 6 }>
                    <div className="tabs tabs-vertical tabs-right tabs-primary">
                        <Tabs>
                            <Tab eventKey="popular" title={ <><i className="fas fa-star"></i> Popular</> }>
                                <p>Popular</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat.</p>
                            </Tab>
                            <Tab eventKey="recent" title="Recent">
                                <p>Recent</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat.</p>
                            </Tab>
                        </Tabs>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col lg={ 6 }>
                    <div className="tabs tabs-primary">
                        <Tabs>
                            <Tab eventKey="popular" title={ <><i className="fas fa-star"></i> Popular</> }>
                                <p>Popular</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat.</p>
                            </Tab>
                            <Tab eventKey="recent" title="Recent">
                                <p>Recent</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat.</p>
                            </Tab>
                        </Tabs>
                    </div>
                </Col>
                <Col lg={ 6 }>
                    <div className="tabs tabs-secondary">
                        <Tabs>
                            <Tab eventKey="popular" title={ <><i className="fas fa-star"></i> Popular</> }>
                                <p>Popular</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat.</p>
                            </Tab>
                            <Tab eventKey="recent" title="Recent">
                                <p>Recent</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat.</p>
                            </Tab>
                        </Tabs>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col lg={ 6 }>
                    <div className="tabs tabs-tertiary">
                        <Tabs>
                            <Tab eventKey="popular" title={ <><i className="fas fa-star"></i> Popular</> }>
                                <p>Popular</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat.</p>
                            </Tab>
                            <Tab eventKey="recent" title="Recent">
                                <p>Recent</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat.</p>
                            </Tab>
                        </Tabs>
                    </div>
                </Col>
                <Col lg={ 6 }>
                    <div className="tabs tabs-quaternary">
                        <Tabs>
                            <Tab eventKey="popular" title={ <><i className="fas fa-star"></i> Popular</> }>
                                <p>Popular</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat.</p>
                            </Tab>
                            <Tab eventKey="recent" title="Recent">
                                <p>Recent</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat.</p>
                            </Tab>
                        </Tabs>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col>
                    <div className="tabs tabs-dark">
                        <Tabs>
                            <Tab eventKey="popular" title={ <><i className="fas fa-star"></i> Popular</> }>
                                <p>Popular</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat.</p>
                            </Tab>
                            <Tab eventKey="recent" title="Recent">
                                <p>Recent</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat.</p>
                            </Tab>
                        </Tabs>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Card variant="modern" className="card-big-info">
                        <Card.Body>
                            <Row as={ ReactTabs } className="tabs-modern" forceRenderTabPanel={ true } selectedTabClassName="active" selectedTabPanelClassName="active show">
                                <Col lg="2-5" xl="1-5">
                                    <ReactTabList className="nav flex-column">
                                        <ReactTab><a className="nav-link" href="#general" onClick={ e => e.preventDefault() }><i className="bx bx-cog mr-2"></i> General</a></ReactTab>
                                        <ReactTab><a className="nav-link" href="#usage-restriction" onClick={ e => e.preventDefault() }><i className="bx bx-block mr-2"></i> Usage Restriction</a></ReactTab>
                                        <ReactTab><a className="nav-link" href="#usage-limits" onClick={ e => e.preventDefault() }><i className="bx bx-timer mr-2"></i> Usage Limits</a></ReactTab>
                                    </ReactTabList>
                                </Col>

                                <Col lg="3-5" xl="4-5">
                                    <div className="tab-content">
                                        <ReactTabPanel className="tab-pane fade">
                                            <Form.Group as={ Row } className="align-items-center">
                                                <Col lg={ 5 } xl={ 3 } className="text-lg-right mb-0">
                                                    <Form.Label>Coupon Name</Form.Label>
                                                </Col>
                                                <Col lg={ 7 } xl={ 6 }>
                                                    <Form.Control
                                                        type="text"
                                                        className="form-control-modern"
                                                        required
                                                    />
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={ Row } className="align-items-center">
                                                <Col lg={ 5 } xl={ 3 } className="text-lg-right mb-0">
                                                    <Form.Label>Discount Type</Form.Label>
                                                </Col>
                                                <Col lg={ 7 } xl={ 6 }>
                                                    <Form.Control as="select" className="form-control-modern" defaultValue="percentage">
                                                        <option value="percentage">Percentage Discount</option>
                                                        <option value="fixed-cart">Fixed Cart Discount</option>
                                                        <option value="fixed-product">Fixed Product Discount</option>
                                                    </Form.Control>
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={ Row } className="align-items-center">
                                                <Col lg={ 5 } xl={ 3 } className="text-lg-right mb-0">
                                                    <Form.Label>Coupon Amount</Form.Label>
                                                </Col>
                                                <Col lg={ 7 } xl={ 6 }>
                                                    <Form.Control
                                                        type="text"
                                                        className="form-control-modern"
                                                        required
                                                    />
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={ Row }>
                                                <Col lg={ 5 } xl={ 3 } className="text-lg-right mb-0">
                                                    <Form.Label>Description</Form.Label>
                                                </Col>
                                                <Col lg={ 7 } xl={ 6 }>
                                                    <Form.Control
                                                        as="textarea"
                                                        className="form-control-modern"
                                                        rows={ 6 }
                                                    />
                                                </Col>
                                            </Form.Group>
                                        </ReactTabPanel>
                                        <ReactTabPanel className="tab-pane fade">
                                            <Form.Group as={ Row } className="align-items-center">
                                                <Col lg={ 5 } xl={ 3 } className="text-lg-right mb-0">
                                                    <Form.Label>Minimum Spend</Form.Label>
                                                </Col>
                                                <Col lg={ 7 } xl={ 6 }>
                                                    <Form.Control
                                                        type="text"
                                                        className="form-control-modern"
                                                        placeholder="No minimum"
                                                    />
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={ Row } className="align-items-center">
                                                <Col lg={ 5 } xl={ 3 } className="text-lg-right mb-0">
                                                    <Form.Label>Maximum Spend</Form.Label>
                                                </Col>
                                                <Col lg={ 7 } xl={ 6 }>
                                                    <Form.Control
                                                        type="text"
                                                        className="form-control-modern"
                                                        placeholder="No maximum"
                                                    />
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={ Row } className="align-items-center">
                                                <Col lg={ 5 } xl={ 3 } className="text-lg-right mb-0">
                                                    <Form.Label>Individual Use Only?</Form.Label>
                                                </Col>
                                                <Col lg={ 7 } xl={ 6 }>
                                                    <Form.Check
                                                        id="individual"
                                                        label="Check this box if the coupon cannot be used in conjunction with other coupons."
                                                    />
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={ Row } className="align-items-center">
                                                <Col lg={ 5 } xl={ 3 } className="text-lg-right mb-0">
                                                    <Form.Label>Exclude Sale Items?</Form.Label>
                                                </Col>
                                                <Col lg={ 7 } xl={ 6 }>
                                                    <Form.Check
                                                        id="exclude"
                                                        label="Check this box if the coupon should not apply to items on sale. Per-item coupons will only work if the item is not on sale. Per-cart coupons will only work if there are items in the cart that are not on sale."
                                                    />
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={ Row } className="align-items-center">
                                                <Col lg={ 5 } xl={ 3 } className="text-lg-right mb-0">
                                                    <Form.Label>Products</Form.Label>
                                                </Col>
                                                <Col lg={ 7 } xl={ 6 }>
                                                    <Form.Control as="select" className="form-control-modern" placeholder="Search for a product...">
                                                        <option value="product1">Porto Cap</option>
                                                        <option value="product2">Porto Bag</option>
                                                        <option value="product3">Porto Shoes</option>
                                                        <option value="product4">Porto Jacket</option>
                                                    </Form.Control>
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={ Row } className="align-items-center">
                                                <Col lg={ 5 } xl={ 3 } className="text-lg-right mb-0">
                                                    <Form.Label>Exclude Products</Form.Label>
                                                </Col>
                                                <Col lg={ 7 } xl={ 6 }>
                                                    <Form.Control as="select" className="form-control-modern" placeholder="Search for a product...">
                                                        <option value="product1">Porto Cap</option>
                                                        <option value="product2">Porto Bag</option>
                                                        <option value="product3">Porto Shoes</option>
                                                        <option value="product4">Porto Jacket</option>
                                                    </Form.Control>
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={ Row } className="align-items-center">
                                                <Col lg={ 5 } xl={ 3 } className="text-lg-right mb-0">
                                                    <Form.Label>Product Categories</Form.Label>
                                                </Col>
                                                <Col lg={ 7 } xl={ 6 }>
                                                    <Form.Control as="select" className="form-control-modern" placeholder="Search for a product category...">
                                                        <option value="any">Any Category</option>
                                                        <option value="product1">Bags</option>
                                                        <option value="product2">Shoes</option>
                                                        <option value="product3">Jackets</option>
                                                    </Form.Control>
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={ Row } className="align-items-center">
                                                <Col lg={ 5 } xl={ 3 } className="text-lg-right mb-0">
                                                    <Form.Label>Exclude Categories</Form.Label>
                                                </Col>
                                                <Col lg={ 7 } xl={ 6 }>
                                                    <Form.Control as="select" className="form-control-modern" placeholder="Search for a product category...">
                                                        <option value="none">None</option>
                                                        <option value="product1">Bags</option>
                                                        <option value="product2">Shoes</option>
                                                        <option value="product3">Jackets</option>
                                                    </Form.Control>
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={ Row } className="align-items-center">
                                                <Col lg={ 5 } xl={ 3 } className="text-lg-right mb-0">
                                                    <Form.Label>Allowed E-mails</Form.Label>
                                                </Col>
                                                <Col lg={ 7 } xl={ 6 }>
                                                    <Form.Control
                                                        type="text"
                                                        className="form-control-modern"
                                                    />
                                                </Col>
                                            </Form.Group>
                                        </ReactTabPanel>
                                        <ReactTabPanel className="tab-pane fade">
                                            <Form.Group as={ Row } className="align-items-center">
                                                <Col lg={ 5 } xl={ 3 } className="text-lg-right mb-0">
                                                    <Form.Label>Usage Limit Per Coupon</Form.Label>
                                                </Col>
                                                <Col lg={ 7 } xl={ 6 }>
                                                    <Form.Control
                                                        type="text"
                                                        className="form-control-modern"
                                                        placeholder="Unlimited Usage"
                                                    />
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={ Row } className="align-items-center">
                                                <Col lg={ 5 } xl={ 3 } className="text-lg-right mb-0">
                                                    <Form.Label>Limit Usage to X Items</Form.Label>
                                                </Col>
                                                <Col lg={ 7 } xl={ 6 }>
                                                    <Form.Control
                                                        type="text"
                                                        className="form-control-modern"
                                                        placeholder="Apply to all qualifying items in cart"
                                                    />
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={ Row } className="align-items-center">
                                                <Col lg={ 5 } xl={ 3 } className="text-lg-right mb-0">
                                                    <Form.Label>Usage Limit Per User</Form.Label>
                                                </Col>
                                                <Col lg={ 7 } xl={ 6 }>
                                                    <Form.Control
                                                        type="text"
                                                        className="form-control-modern"
                                                        placeholder="Unlimited Usage"
                                                    />
                                                </Col>
                                            </Form.Group>
                                        </ReactTabPanel>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default React.memo( TabsPage );