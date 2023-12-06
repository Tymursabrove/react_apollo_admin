import React, { useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Row, Col, Card, Form, Button, InputGroup } from 'react-bootstrap';

function LockedScreen ( { history } ) {

    useEffect( () => {
        document.querySelector( 'body' ).classList.add( 'loaded' );
    }, [] )

    function unlock ( e ) {
        e.preventDefault();
        history.goBack();
    }

    return (
        <section className="body-sign body-locked" style={ { background: `url('${ process.env.PUBLIC_URL }/assets/images/patterns/noisy_net.png')` } }>
            <div className="center-sign">
                <Card className="card-sign">
                    <Card.Body>
                        <Form onSubmit={ unlock }>
                            <div className="current-user text-center">
                                <img className="rounded-circle user-image" src={ `${ process.env.PUBLIC_URL }/assets/images/users/!logged-user.jpg` } alt="John doe" width="150" height="150" />
                                <h2 className="user-name text-dark m-0">John Doe</h2>
                                <p className="user-email m-0">johndoe@okler.com</p>
                            </div>

                            <Form.Group className="mb-3">
                                <InputGroup>
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        required
                                    />
                                    <InputGroup.Append>
                                        <InputGroup.Text>
                                            <i className="fas fa-lock"></i>
                                        </InputGroup.Text>
                                    </InputGroup.Append>
                                </InputGroup>
                            </Form.Group>

                            <Row>
                                <Col className="col-6">
                                    <p className="mt-1 mb-3">
                                        <Link to={ `${ process.env.PUBLIC_URL }/pages/sign-in` }>Not John Doe?</Link>
                                    </p>
                                </Col>
                                <Col className="col-6">
                                    <Button
                                        type="submit"
                                        className="pull-right"
                                        variant="primary"
                                    >Unlock</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        </section>
    )
}

export default React.memo( withRouter( LockedScreen ) );