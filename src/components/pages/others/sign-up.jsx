import React, { useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';

function SignUp ( props ) {

    useEffect( () => {
        document.querySelector( 'body' ).classList.add( 'loaded' );
    }, [] )

    function signUp ( e ) {
        e.preventDefault();
        props.history.push( `${ process.env.PUBLIC_URL }/` );
    }

    return (
        <section className="body-sign">
            <div className="center-sign">
                <Card className="card-sign">
                    <Card.Body>
                        <h2 className="sign-title">Sign Up</h2>

                        <Form onSubmit={ signUp }>
                            <Form.Group className="form-custom-group mb-3">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" required />
                            </Form.Group>

                            <Form.Group className="form-custom-group mb-3">
                                <Form.Label>E-mail Address</Form.Label>
                                <Form.Control type="email" required />
                            </Form.Group>

                            <Form.Group className="form-custom-group mb-3">
                                <Row>
                                    <Col sm={ 6 } className="mb-3 mb-sm-0">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" required />
                                    </Col>

                                    <Col sm={ 6 }>
                                        <Form.Label>Password Confirmation</Form.Label>
                                        <Form.Control type="password" required />
                                    </Col>
                                </Row>
                            </Form.Group>

                            <Row className="mb-3">
                                <Col sm={ 8 }>
                                    <Form.Check
                                        custom
                                        required
                                        id="agree"
                                        label={
                                            <>I agree with <a href="#terms" onClick={ e => e.preventDefault() }>terms of use</a></>
                                        }
                                    />
                                </Col>

                                <Col sm={ 4 } className="text-right">
                                </Col>
                            </Row>

                            <Button
                                type="submit"
                                className="btn-login mt-2"
                                variant=""
                                block
                            >Sign Up</Button>

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

                            <p className="text-center">Already have an account ? <Link to={ `${ process.env.PUBLIC_URL }/pages/sign-in` }>Sign In!</Link></p>
                        </Form>
                    </Card.Body>
                </Card>

                <p className="text-center text-muted my-3">&copy; Copyright 2021. All Rights Reserved.</p>
            </div>
        </section>
    )
}

export default React.memo( withRouter( SignUp ) );