import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';

import Breadcrumb from '../../common/breadcrumb';
import PNotify from '../../features/elements/p-notify';

export default function UserCreate () {

    function saveUser ( e ) {
        e.preventDefault();
        toast(
            <PNotify title="Success" icon="fas fa-check" text="User added successfully." />,
            {
                containerId: "default",
                className: "notification-success"
            }
        );
    }

    return (
        <>
            <Breadcrumb current="Add User" paths={ [
                {
                    name: 'Home',
                    url: '/'
                }, {
                    name: 'Users',
                    url: '/users'
                }
            ] } />

            <Form className="ecommerce-form" action="#" method="post" onSubmit={ saveUser }>
                <Row>
                    <Col>
                        <Card className="card-modern card-big-info">
                            <Card.Body>
                                <Row>
                                    <Col lg="2-5" xl="1-5">
                                        <i className="card-big-info-icon bx bx-user-circle"></i>
                                        <h2 className="card-big-info-title">Account Info</h2>
                                        <p className="card-big-info-desc">Add here the user account info.</p>
                                    </Col>
                                    <Col lg="3-5" xl="4-5">
                                        <Form.Group as={ Row } className="align-items-center">
                                            <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">First Name</Col>
                                            <Col lg={ 7 } xl={ 6 }>
                                                <Form.Control
                                                    type="text"
                                                    maxLength="20"
                                                    className="form-control-modern"
                                                    name="first_name"
                                                    required
                                                />
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={ Row } className="align-items-center">
                                            <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">Last Name</Col>
                                            <Col lg={ 7 } xl={ 6 }>
                                                <Form.Control
                                                    type="text"
                                                    maxLength="20"
                                                    className="form-control-modern"
                                                    name="last_name"
                                                />
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={ Row } className="align-items-center">
                                            <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">Email</Col>
                                            <Col lg={ 7 } xl={ 6 }>
                                                <Form.Control
                                                    type="email"
                                                    maxLength="30"
                                                    className="form-control-modern"
                                                    name="email"
                                                    required
                                                />
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={ Row } className="align-items-center">
                                            <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">Password</Col>
                                            <Col lg={ 7 } xl={ 6 }>
                                                <Form.Control
                                                    type="password"
                                                    maxLength="30"
                                                    className="form-control-modern"
                                                    name="password"
                                                />
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={ Row } className="align-items-center">
                                            <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">Password Confirm</Col>
                                            <Col lg={ 7 } xl={ 6 }>
                                                <Form.Control
                                                    type="password"
                                                    maxLength="30"
                                                    className="form-control-modern"
                                                    name="password_confirmation"
                                                />
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={ Row } className="align-items-center">
                                            <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">Manage Role</Col>
                                            <Col lg={ 7 } xl={ 6 }>
                                                <Form.Control as="select" className="form-control-modern" name="role_id">
                                                    <option value="2">Customer</option>
                                                    <option value="4">Vendor</option>
                                                    <option value="7">Administrator</option>
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
                        ><i className="bx bx-save text-4 mr-2"></i>Save User</Button>
                    </Col>
                    <Col md="auto" className="col-12 px-md-0 mt-3 mt-md-0">
                        <Button
                            as={ Link }
                            to={ `${ process.env.PUBLIC_URL }/users` }
                            className="btn-px-4 py-3 border font-weight-semibold text-color-dark line-height-1 d-flex h-100 align-items-center"
                            variant="light"
                        >Back</Button>
                    </Col>
                </Row>
            </Form>
        </>
    )
}