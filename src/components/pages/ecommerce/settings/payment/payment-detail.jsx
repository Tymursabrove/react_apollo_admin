import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Button, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';

import Breadcrumb from '../../../../common/breadcrumb';
import PNotify from '../../../../features/elements/p-notify';

export default function PaymentDetail ( props ) {
    const type = props.match.params.type;

    function saveSetting ( e ) {
        e.preventDefault();
        toast(
            <PNotify title="Success" icon="fas fa-check" text="Payment settings saved successfully." />,
            {
                containerId: "default",
                className: "notification-success"
            }
        );
    }

    return (
        <>
            <Breadcrumb current={ `${ type[ 0 ].toUpperCase() + type.slice( 1 ) } Edit` } paths={ [
                {
                    name: 'Home',
                    url: '/'
                }, {
                    name: 'Ecommerce',
                    url: '/ecommerce'
                }, {
                    name: 'Payment Settings',
                    url: '/ecommerce/settings/payment'
                }
            ] } />

            <Form className="ecommerce-form" method="post" action="#" onSubmit={ saveSetting }>
                <Row>
                    <Col>
                        <Card className="card-modern card-big-info">
                            <Card.Body>
                                <Row>
                                    <Col lg="2-5" xl="1-5">
                                        <i className="card-big-info-icon bx bx-money"></i>
                                        <h2 className="card-big-info-title">{ type[ 0 ].toUpperCase() + type.slice( 1 ) }</h2>
                                        <p className="card-big-info-desc">Add { type } info with all details and necessary information.</p>
                                    </Col>
                                    <Col lg="3-5" xl="4-5">
                                        <Form.Group as={ Row } className="align-items-center">
                                            <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">Environment</Col>
                                            <Col lg={ 7 } xl={ 6 } className="d-flex">
                                                <Form.Check
                                                    type="radio"
                                                    custom
                                                    id="sandbox"
                                                    name="environment"
                                                    className="radio-primary mb-0"
                                                    label="Sandbox"
                                                />
                                                <Form.Check
                                                    type="radio"
                                                    custom
                                                    id="live"
                                                    name="environment"
                                                    className="radio-primary ml-5 mb-0"
                                                    label="Live"
                                                    defaultChecked
                                                />
                                            </Col>
                                        </Form.Group>
                                        {
                                            type === 'stripe' ?
                                                <>
                                                    <Form.Group as={ Row } className="align-items-center">
                                                        <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">Secret Key</Col>
                                                        <Col lg={ 7 } xl={ 6 }>
                                                            <Form.Control
                                                                type="text"
                                                                maxLength="50"
                                                                className="form-control-modern"
                                                            />
                                                        </Col>
                                                    </Form.Group>

                                                    <Form.Group as={ Row } className="align-items-center">
                                                        <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">Publishable Key</Col>
                                                        <Col lg={ 7 } xl={ 6 }>
                                                            <Form.Control
                                                                type="text"
                                                                maxLength="50"
                                                                className="form-control-modern"
                                                            />
                                                        </Col>
                                                    </Form.Group>
                                                </>
                                                : type === 'paypal' ?
                                                    <Form.Group as={ Row } className="align-items-center">
                                                        <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">Public Key</Col>
                                                        <Col lg={ 7 } xl={ 6 }>
                                                            <Form.Control
                                                                type="text"
                                                                maxLength="50"
                                                                className="form-control-modern"
                                                            />
                                                        </Col>
                                                    </Form.Group>
                                                    : ''
                                        }
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
                        ><i className="bx bx-save text-4 mr-2"></i> Save payment</Button>
                    </Col>
                    <Col md="auto" className="col-12 px-md-0 mt-3 mt-md-0">
                        <Button
                            as={ Link }
                            to={ `${ process.env.PUBLIC_URL }/ecommerce/settings/payment` }
                            className="btn-px-4 py-3 border font-weight-semibold text-color-dark line-height-1 d-flex h-100 align-items-center"
                            variant="light"
                        >Back</Button>
                    </Col>
                </Row>
            </Form>
        </>
    )
}