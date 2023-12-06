import React from 'react';
import { Row, Col, Form, Card, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';

import Breadcrumb from '../../../common/breadcrumb';
import PNotify from '../../../features/elements/p-notify';
import PtToolTip from '../../../features/elements/tooltip';

import { WEIGHT_UNITS, DIMENSIONS_UNITS } from '../../../../utils/data/constant';

export default function ProductsSetting () {

    function saveChanges ( e ) {
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
            <Breadcrumb current="Products Setting" paths={ [
                {
                    name: 'Home',
                    url: '/'
                }, {
                    name: 'Ecommerce',
                    url: '/ecommerce'
                }
            ] } />

            <Form className="ecommerce-form" onSubmit={ saveChanges } >
                <Row>
                    <Col>
                        <Card className="card-modern card-big-info">
                            <Card.Body>
                                <Row>
                                    <Col lg="2-5" xl="1-5">
                                        <i className="card-big-info-icon bx bx-box"></i>
                                        <h2 className="card-big-info-title">General</h2>
                                        <p className="card-big-info-desc">Add products info with all details and necessary information.</p>
                                    </Col>
                                    <Col lg="3-5" xl="4-5">
                                        <Form.Group as={ Row }>
                                            <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0 mt-2 mb-0">Measurements</Col>
                                            <Col lg={ 7 } xl={ 9 } className="mt-2">
                                                <Row>
                                                    <Col xl={ 6 } className="mb-3 mb-xl-0">
                                                        <Form.Label className="control-label">Weight Unit <PtToolTip placement="top" trigger="hover" tooltip="This controls what unit you will define weights in." /></Form.Label>
                                                        <Form.Control as="select" className="form-control-modern" defaultValue="kg">
                                                            { WEIGHT_UNITS.map( ( weight, index ) => (
                                                                <option key={ `weight-${ index }` } value={ weight }>{ weight }</option>
                                                            ) ) }
                                                        </Form.Control>
                                                    </Col>
                                                    <Col xl={ 6 }>
                                                        <Form.Label className="control-label">Dimensions Unit <PtToolTip placement="top" trigger="hover" tooltip="This controls what unit you will define lengths in." /></Form.Label>
                                                        <Form.Control as="select" className="form-control form-control-modern" name="product_dimentions_unit" defaultValue="cm">
                                                            { DIMENSIONS_UNITS.map( ( dimension, index ) => (
                                                                <option key={ `dimension-${ index }` } value={ dimension }>{ dimension }</option>
                                                            ) ) }
                                                        </Form.Control>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={ Row }>
                                            <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0 mt-2 mb-0">Reviews</Col>
                                            <Col lg={ 7 } xl={ 9 } className="mt-2">
                                                <Row>
                                                    <Col xl={ 6 } className="mb-3 mb-xl-0">
                                                        <Form.Label className="control-label">Enable reviews</Form.Label>
                                                        <Form.Check>
                                                            <Form.Check.Label className="my-1">
                                                                <Form.Check.Input name="product_enable_reviews" className="checkbox-style-1 mt-0" type="checkbox" />
                                                                Enable product reviews
                                                            </Form.Check.Label>
                                                        </Form.Check>
                                                    </Col>
                                                    <Col xl={ 6 } className="product-ratings-container">
                                                        <Form.Label className="control-label">Product ratings</Form.Label>
                                                        <Form.Check>
                                                            <Form.Check.Label className="my-1">
                                                                <Form.Check.Input name="product_enable_star_rating" className="checkbox-style-1 mt-0" type="checkbox" />
                                                                Enable star rating on reviews
                                                            </Form.Check.Label>
                                                        </Form.Check>
                                                        <Form.Check className="product-star-rating-required-container">
                                                            <Form.Check.Label className="my-1">
                                                                <Form.Check.Input name="product_star_rating_required" className="checkbox-style-1 mt-0" type="checkbox" />
                                                                Star ratings should be required, not optional
                                                            </Form.Check.Label>
                                                        </Form.Check>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card className="card-modern card-big-info">
                            <Card.Body>
                                <Row>
                                    <Col lg="2-5" xl="1-5">
                                        <i className="card-big-info-icon bx bx-basket"></i>
                                        <h2 className="card-big-info-title">Inventory</h2>
                                        <p className="card-big-info-desc">Add the inventory info with all details and necessary information.</p>
                                    </Col>
                                    <Col lg="3-5" xl="4-5">
                                        <Form.Group as={ Row } className="align-items-center">
                                            <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">Manage stock</Col>
                                            <Col lg={ 7 } xl={ 6 }>
                                                <Form.Check>
                                                    <Form.Check.Label className="my-2">
                                                        <Form.Check.Input name="product_enable_stock_management" className="checkbox-style-1 mt-0" type="checkbox" />
                                                    Enable stock management
                                                    </Form.Check.Label>
                                                </Form.Check>
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={ Row } className="align-items-center low-stock-threshold-container">
                                            <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">Low stock threshold</Col>
                                            <Col lg={ 7 } xl={ 6 }>
                                                <Form.Control type="number" name="product_low_stock_threshold" className="form-control-modern" min="0" />
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={ Row } className="align-items-center out-of-stock-threshold-container">
                                            <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">Out of stock threshold</Col>
                                            <Col lg={ 7 } xl={ 6 }>
                                                <Form.Control type="number" name="product_out_of_stock_threshold" className="form-control-modern" min="0" />
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={ Row } className="align-items-center">
                                            <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">Out of stock visibility</Col>
                                            <Col lg={ 7 } xl={ 6 }>
                                                <Form.Check>
                                                    <Form.Check.Label className="my-2">
                                                        <Form.Check.Input name="product_out_of_stock_visibility" className="checkbox-style-1 mt-0" type="checkbox" />
                                                    Hide out of stock items from the catalog
                                                </Form.Check.Label>
                                                </Form.Check>
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={ Row } className="align-items-center">
                                            <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">Stock display format</Col>
                                            <Col lg={ 7 } xl={ 6 }>
                                                <Form.Control as="select" className="form-control-modern" name="product_stock_display_format">
                                                    <option value="always">Always show quantity remaining in stock</option>
                                                    <option value="low">Only show quantity remaining in stock when low</option>
                                                    <option value="never">Never show quantity remaining in stock</option>
                                                </Form.Control>
                                            </Col>
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className="action-buttons">
                    <Col md="auto" className="col-12">
                        <Button
                            type="submit"
                            className="btn-px-4 py-3 d-flex align-items-center font-weight-semibold line-height-1"
                            variant="primary"
                        >
                            <i className="bx bx-save text-4 mr-2"></i> Save Changes
                        </Button>
                    </Col>
                </Row>
            </Form>
        </>
    )
}