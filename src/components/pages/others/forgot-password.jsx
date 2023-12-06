import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, Form, Button, Alert, InputGroup } from 'react-bootstrap';

function ForgotPassword () {

    useEffect( () => {
        document.querySelector( 'body' ).classList.add( 'loaded' );
    }, [] )

    function resetPassword ( e ) {
        e.preventDefault();
    }

    return (
        <section className="body-sign">
            <div className="center-sign">
                <Card className="card-sign">
                    <Card.Body>
                        <h2 className="sign-title">Recover Password</h2>

                        <Alert variant="info"><p className="m-0">Enter your e-mail below and we will send you reset instrcutions!</p></Alert>

                        <Form onSubmit={ resetPassword }>
                            <Form.Group className="form-custom-group mb-0">
                                <InputGroup>
                                    <Form.Control
                                        type="email"
                                        required
                                        placeholder="E-mail"
                                    />
                                    <InputGroup.Append>
                                        <Button
                                            type="submit"
                                            variant="primary"
                                        >
                                            Reset!
                                        </Button>
                                    </InputGroup.Append>
                                </InputGroup>
                            </Form.Group>

                            <p className="text-center mt-3">Remembered <Link to={ `${ process.env.PUBLIC_URL }/pages/sign-in` }>Sign In!</Link></p>
                        </Form>
                    </Card.Body>
                </Card>

                <p className="text-center text-muted my-3">&copy; Copyright 2021. All Rights Reserved.</p>
            </div>
        </section>
    )
}

export default React.memo( ForgotPassword );