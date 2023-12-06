import React, { useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';

function SignIn ( props ) {

    useEffect( () => {
        document.querySelector( 'body' ).classList.add( 'loaded' );
    }, [] )

    function signIn ( e ) {
        e.preventDefault();
        props.history.push( `${ process.env.PUBLIC_URL }/` );
    }

    return (
        <section className="body-sign">
            <div className="center-sign">
                <Card className="card-sign">
                    <Card.Body>
                        <h2 className="sign-title">Sign In</h2>
                        <Form onSubmit={ signIn }>
                            <Form.Group className="form-custom-group">
                                <Form.Label>Email Address <span className="required">*</span></Form.Label>
                                <Form.Control
                                    type="email"
                                    required
                                    autoFocus
                                />
                            </Form.Group>

                            <Form.Group className="form-custom-group">
                                <Form.Label className="float-left">Password <span className="required">*</span></Form.Label>
                                <Form.Control type="password" required />
                            </Form.Group>

                            <Row className="rem-password">
                                <Col sm={ 8 }>
                                    <Form.Check
                                        custom
                                        id="remember"
                                        className="checkbox-default"
                                        label="Remember me"
                                    />
                                </Col>

                                <Col sm={ 4 }>
                                    <Link to={ `${ process.env.PUBLIC_URL }/pages/forgot-password` }>Forgot Password?</Link>
                                </Col>
                            </Row>

                            <Button
                                type="submit"
                                className="btn-login"
                                variant=""
                                block
                            >Sign In</Button>

                            <span className="my-3 line-thru text-center text-uppercase">
                                <span>or</span>
                            </span>

                            <div className="mb-1 text-center">
                                <Button
                                    href="#"
                                    className="mb-3 mx-1"
                                    variant="facebook">
                                    Connect with <i className="fab fa-facebook-f"></i>
                                </Button>
                                <Button
                                    href="#"
                                    className="mb-3 mx-1"
                                    variant="twitter">
                                    Connect with <i className="fab fa-twitter"></i>
                                </Button>
                            </div>

                            <p className="text-center">
                                Don't have an account yet? <Link to={ `${ process.env.PUBLIC_URL }/pages/sign-up` }>Sign Up!</Link>
                            </p>
                        </Form>
                    </Card.Body>
                </Card>

                <p className="text-center text-muted my-3">&copy; Copyright 2021. All Rights Reserved.</p>
            </div>
        </section>
    )
}

export default React.memo( withRouter( SignIn ) );