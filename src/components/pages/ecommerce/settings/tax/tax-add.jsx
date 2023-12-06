import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Button, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';

import Breadcrumb from '../../../../common/breadcrumb';
import PNotify from '../../../../features/elements/p-notify';

export default function TaxAdd () {

    function addTax ( e ) {
        e.preventDefault();
        toast(
            <PNotify title="Success" icon="fas fa-check" text="Tax rate added successfully." />,
            {
                containerId: "default",
                className: "notification-success"
            }
        );
    }

    return (
        <>
            <Breadcrumb
                current="Tax Rate Create"
                paths={ [
                    {
                        name: 'Home',
                        url: '/'
                    }, {
                        name: 'Ecommerce',
                        url: '/ecommerce'
                    }, {
                        name: 'Tax Settings',
                        url: '/ecommerce/settings/tax'
                    }
                ] }
            />
            <Form className="ecommerce-setting-form pb-5" action="#" method="post" onSubmit={ addTax }>
                <Row>
                    <Col>
                        <Card className="card-modern card-big-info">
                            <Card.Body>
                                <Row>
                                    <Col lg="2-5" xl="1-5">
                                        <i className="card-big-info-icon bx bx-cog"></i>
                                        <h2 className="card-big-info-title">General</h2>
                                        <p className="card-big-info-desc">Add here the tax rate info with all details and necessary information.</p>
                                    </Col>
                                    <Col lg="3-5" xl="4-5">
                                        <Form.Group as={ Row } className="align-items-center">
                                            <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">Class Name</Col>
                                            <Col lg={ 7 } xl={ 6 }>
                                                <Form.Control
                                                    type="text"
                                                    maxLength="50"
                                                    className="form-control-modern"
                                                    name="name"
                                                    required
                                                />
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={ Row }>
                                            <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0 mt-2">Description</Col>
                                            <Col lg={ 7 } xl={ 6 }>
                                                <Form.Control
                                                    as="textarea"
                                                    className="form-control-modern"
                                                    rows="6"
                                                    name="description"
                                                />
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
                        ><i className="bx bx-save text-4 mr-2"></i> Save Tax Rate</Button>
                    </Col>
                    <Col md="auto" className="col-12 px-md-0 mt-3 mt-md-0">
                        <Button
                            as={ Link }
                            to={ `${ process.env.PUBLIC_URL }/ecommerce/settings/tax` }
                            className="btn-px-4 py-3 border font-weight-semibold text-color-dark line-height-1 d-flex h-100 align-items-center"
                            variant="light"
                        >Back</Button>
                    </Col>
                </Row>
            </Form>
        </>
    )
}
