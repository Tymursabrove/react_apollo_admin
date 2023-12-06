import React from 'react';
import { Row, Col, Card, Button, Form } from 'react-bootstrap';

import Breadcrumb from '../../common/breadcrumb';

import { withCardActions } from '../../hoc';

const CardWithActions = withCardActions( Card );

function FormLayoutsPage () {
    return (
        <>
            <Breadcrumb current="Form Layouts" paths={ [ {
                name: "Home",
                url: "/"
            }, {
                name: "Forms",
                url: "/forms"
            } ] } />

            <Row className="mt-0">
                <Col lg={ 6 } className="mb-4">
                    <Form className="form-horizontal">
                        <CardWithActions>
                            <Card.Header>
                                <Card.Title>Horizontal Form</Card.Title>
                                <Card.Subtitle>Use <code>.form-horizontal</code> class in the form to style with horizontal fields.</Card.Subtitle>
                            </Card.Header>

                            <Card.Body>
                                <Form.Group as={ Row } className="align-items-center">
                                    <Col sm={ 4 } className="text-sm-right">
                                        <Form.Label className="mb-sm-0">Your Name: </Form.Label>
                                    </Col>
                                    <Col sm={ 8 }>
                                        <Form.Control type="text" />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={ Row } className="align-items-center">
                                    <Col sm={ 4 } className="text-sm-right">
                                        <Form.Label className="mb-sm-0">Your Email: </Form.Label>
                                    </Col>
                                    <Col sm={ 8 }>
                                        <Form.Control type="text" />
                                    </Col>
                                </Form.Group>
                            </Card.Body>

                            <Card.Footer className="text-right">
                                <Button className="mr-2" type="submit" variant="primary">Submit</Button>
                                <Button type="reset" variant="default">Reset</Button>
                            </Card.Footer>
                        </CardWithActions>
                    </Form>
                </Col>

                <Col lg={ 6 } className="mb-4">
                    <Form className="form-horizontal form-bordered">
                        <CardWithActions>
                            <Card.Header>
                                <Card.Title>Bordered Form</Card.Title>
                                <Card.Subtitle>Use <code>.form-bordered</code> class to style horizontal fields with borders.</Card.Subtitle>
                            </Card.Header>

                            <Card.Body>
                                <Form.Group as={ Row } className="align-items-center">
                                    <Col sm={ 4 } className="text-sm-right">
                                        <Form.Label className="mb-sm-0">Your Name: </Form.Label>
                                    </Col>
                                    <Col sm={ 8 }>
                                        <Form.Control type="text" />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={ Row } className="align-items-center">
                                    <Col sm={ 4 } className="text-sm-right">
                                        <Form.Label className="mb-sm-0">Your Email: </Form.Label>
                                    </Col>
                                    <Col sm={ 8 }>
                                        <Form.Control type="text" />
                                    </Col>
                                </Form.Group>
                            </Card.Body>

                            <Card.Footer className="text-right">
                                <Button className="mr-2" type="submit" variant="primary">Submit</Button>
                                <Button type="reset" variant="default">Reset</Button>
                            </Card.Footer>
                        </CardWithActions>
                    </Form>
                </Col>
            </Row>

            <Row className="pt-0">
                <Col lg={ 6 } className="mb-4">
                    <Form>
                        <CardWithActions>
                            <Card.Header>
                                <Card.Title>Form without labels</Card.Title>
                                <Card.Subtitle>You can use placeholders instead of label like this example.</Card.Subtitle>
                            </Card.Header>

                            <Card.Body>
                                <Form.Group as={ Row }>
                                    <Col lg={ 4 }>
                                        <Form.Control
                                            type="text"
                                            placeholder="First Name"
                                        />
                                    </Col>

                                    <div className="mb-3 hidden-lg"></div>

                                    <Col lg={ 4 }>
                                        <Form.Control
                                            type="text"
                                            placeholder="Last Name"
                                        />
                                    </Col>

                                    <div className="mb-3 hidden-lg"></div>

                                    <Col lg={ 4 }>
                                        <Form.Control
                                            type="email"
                                            placeholder="Your Email"
                                        />
                                    </Col>
                                </Form.Group>

                                <Row>
                                    <Col lg={ 12 }>
                                        <Form.Control
                                            as="textarea"
                                            rows={ 5 }
                                            placeholder="Type your message"
                                        />
                                    </Col>
                                </Row>
                            </Card.Body>

                            <Card.Footer className="text-right">
                                <Button type="submit" variant="primary">Add Comment</Button>
                            </Card.Footer>
                        </CardWithActions>
                    </Form>
                </Col>

                <Col lg={ 6 } className="mb-4">
                    <CardWithActions>
                        <Card.Header>
                            <Card.Title>Multi-Column Form</Card.Title>
                            <Card.Subtitle>This is an example of form with multipole block columns.</Card.Subtitle>
                        </Card.Header>

                        <Card.Body>
                            <Form.Group as={ Row }>
                                <Col lg={ 4 }>
                                    <Form.Label className="col-form-label">Example label</Form.Label>
                                    <Form.Control type="text" />
                                </Col>

                                <Col lg={ 4 }>
                                    <Form.Label className="col-form-label">Example label</Form.Label>
                                    <Form.Control type="text" />
                                </Col>

                                <Col lg={ 4 }>
                                    <Form.Label className="col-form-label">Example label</Form.Label>
                                    <Form.Control type="text" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={ Row }>
                                <Col lg={ 6 }>
                                    <Form.Group>
                                        <Form.Label className="col-form-label">Example label</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>

                                <Col lg={ 6 }>
                                    <Form.Group>
                                        <Form.Label className="col-form-label">Example label</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                            </Form.Group>
                        </Card.Body>

                        <Card.Footer className="text-right">
                            <Button variant="primary">Submit Card</Button>
                        </Card.Footer>
                    </CardWithActions>
                </Col>
            </Row>

            <Row className="pt-0">
                <Col lg={ 12 }>
                    <CardWithActions>
                        <Card.Header>
                            <Card.Title>Inline Form</Card.Title>
                            <Card.Subtitle>Use <code>inline</code> prop in the form to style with inline fields.</Card.Subtitle>
                        </Card.Header>

                        <Card.Body>
                            <Form inline>
                                <Form.Label srOnly={ true }>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    className="mb-2 mr-sm-2 mb-sm-0"
                                    placeholder="Jane Doe"
                                />

                                <Form.Check
                                    className="mb-2 mr-sm-2 mb-sm-0"
                                    id="remember"
                                    label="Remember me"
                                />

                                <Button type="submit" vairant="primary">Submit</Button>
                            </Form>
                        </Card.Body>
                    </CardWithActions>
                </Col>
            </Row>
        </>
    )
}

export default React.memo( FormLayoutsPage );