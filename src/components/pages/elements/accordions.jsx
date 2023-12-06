import React from 'react';
import { Row, Col, Accordion, Card } from 'react-bootstrap';

import Breadcrumb from '../../common/breadcrumb';

const AccordionToggle = ( { className = "accordion-toggle", children, onClick } ) => {

    function toggle ( e ) {
        e.preventDefault();
        onClick();
    }

    return (
        <a href="#accordion-toggle" className={ className } onClick={ toggle }>{ children }</a>
    )
}

function AccordionsPage () {
    return (
        <>
            <Breadcrumb current="Accordions" paths={ [ {
                name: "Home",
                url: "/"
            }, {
                name: "Elements",
                url: "/elements"
            } ] } />


            <Row>
                <Col>
                    <h4>Default</h4>

                    <Accordion defaultActiveKey="0">
                        <Card className="card-default">
                            <Card.Header>
                                <Card.Title>
                                    <Accordion.Toggle as={ AccordionToggle } eventKey="0">Accordion Title 1</Accordion.Toggle>
                                </Card.Title>
                            </Card.Header>

                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <p>Donec tellus massa, tristique sit amet condim vel, facilisis quis sapien. Praesent id enim sit amet odio vulputate eleifend in in tortor. Donec tellus massa, tristique sit amet condim vel, facilisis quis sapien. Praesent id enim sit amet odio vulputate eleifend in in tortor. Donec tellus massa, tristique sit amet condim vel, facilisis quis sapien. Praesent id enim sit amet odio vulputate eleifend in in tortor. Donec tellus massa, tristique sit amet condim vel, facilisis quis sapien. Praesent id enim sit amet odio vulputate eleifend in in tortor. Donec tellus massa.</p>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>

                        <Card className="card-default">
                            <Card.Header>
                                <Card.Title>
                                    <Accordion.Toggle as={ AccordionToggle } eventKey="1">Accordion Title 2</Accordion.Toggle>
                                </Card.Title>
                            </Card.Header>

                            <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                    <p>Donec tellus massa, tristique sit amet condimentum vel, facilisis quis sapien.</p>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>

                        <Card className="card-default">
                            <Card.Header>
                                <Card.Title>
                                    <Accordion.Toggle as={ AccordionToggle } eventKey="2">Accordion Title 3</Accordion.Toggle>
                                </Card.Title>
                            </Card.Header>

                            <Accordion.Collapse eventKey="2">
                                <Card.Body>
                                    <p>Donec tellus massa, tristique sit amet condimentum vel, facilisis quis sapien.</p>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Col>
            </Row>

            <Row>
                <Col lg={ 12 } xl={ 12 }><h4>Colors</h4></Col>

                { [ "primary", "secondary", "tertiary", "quaternary" ].map( color => (
                    <Col lg={ 6 } xl={ 3 } key={ color }>
                        <Accordion defaultActiveKey="0" className={ `accordion-${ color }` }>
                            <Card className="card-default">
                                <Card.Header>
                                    <Card.Title>
                                        <Accordion.Toggle as={ AccordionToggle } eventKey="0">Accordion Title 1</Accordion.Toggle>
                                    </Card.Title>
                                </Card.Header>

                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        <p>Donec tellus massa, tristique sit amet condimentum vel, facilisis quis sapien.</p>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>

                            <Card className="card-default">
                                <Card.Header>
                                    <Card.Title>
                                        <Accordion.Toggle as={ AccordionToggle } eventKey="1">Accordion Title 2</Accordion.Toggle>
                                    </Card.Title>
                                </Card.Header>

                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>
                                        <p>Donec tellus massa, tristique sit amet condimentum vel, facilisis quis sapien.</p>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>

                            <Card className="card-default">
                                <Card.Header>
                                    <Card.Title>
                                        <Accordion.Toggle as={ AccordionToggle } eventKey="2">Accordion Title 3</Accordion.Toggle>
                                    </Card.Title>
                                </Card.Header>

                                <Accordion.Collapse eventKey="2">
                                    <Card.Body>
                                        <p>Donec tellus massa, tristique sit amet condimentum vel, facilisis quis sapien.</p>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Col>
                ) ) }
            </Row>

            <Row>
                <Col lg={ 6 } xl={ 3 } className="mb-3 mb-lg-0">
                    <h4>Small</h4>

                    <Accordion defaultActiveKey="0" className="accordion-sm">
                        <Card className="card-default">
                            <Card.Header>
                                <Card.Title>
                                    <Accordion.Toggle as={ AccordionToggle } eventKey="0">Accordion Title 1</Accordion.Toggle>
                                </Card.Title>
                            </Card.Header>

                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <p>Donec tellus massa, tristique sit amet condim vel, facilisis quis sapien. Praesent id enim sit amet odio vulputate eleifend in in tortor. Donec tellus massa, tristique sit amet condim vel, facilisis quis sapien. Praesent id enim sit amet odio vulputate eleifend in in tortor. Donec tellus massa, tristique sit amet condim vel, facilisis quis sapien. Praesent id enim sit amet odio vulputate eleifend in in tortor. Donec tellus massa, tristique sit amet condim vel, facilisis quis sapien. Praesent id enim sit amet odio vulputate eleifend in in tortor. Donec tellus massa.</p>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>

                        <Card className="card-default">
                            <Card.Header>
                                <Card.Title>
                                    <Accordion.Toggle as={ AccordionToggle } eventKey="1">Accordion Title 2</Accordion.Toggle>
                                </Card.Title>
                            </Card.Header>

                            <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                    <p>Donec tellus massa, tristique sit amet condimentum vel, facilisis quis sapien.</p>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>

                        <Card className="card-default">
                            <Card.Header>
                                <Card.Title>
                                    <Accordion.Toggle as={ AccordionToggle } eventKey="2">Accordion Title 3</Accordion.Toggle>
                                </Card.Title>
                            </Card.Header>

                            <Accordion.Collapse eventKey="2">
                                <Card.Body>
                                    <p>Donec tellus massa, tristique sit amet condimentum vel, facilisis quis sapien.</p>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Col>

                <Col lg={ 6 } xl={ 3 } className="mb-3 mb-lg-0">
                    <h4>Default</h4>

                    <Accordion defaultActiveKey="0">
                        <Card className="card-default">
                            <Card.Header>
                                <Card.Title>
                                    <Accordion.Toggle as={ AccordionToggle } eventKey="0">Accordion Title 1</Accordion.Toggle>
                                </Card.Title>
                            </Card.Header>

                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <p>Donec tellus massa, tristique sit amet condim vel, facilisis quis sapien. Praesent id enim sit amet odio vulputate eleifend in in tortor. Donec tellus massa, tristique sit amet condim vel, facilisis quis sapien. Praesent id enim sit amet odio vulputate eleifend in in tortor. Donec tellus massa, tristique sit amet condim vel, facilisis quis sapien. Praesent id enim sit amet odio vulputate eleifend in in tortor. Donec tellus massa, tristique sit amet condim vel, facilisis quis sapien. Praesent id enim sit amet odio vulputate eleifend in in tortor. Donec tellus massa.</p>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>

                        <Card className="card-default">
                            <Card.Header>
                                <Card.Title>
                                    <Accordion.Toggle as={ AccordionToggle } eventKey="1">Accordion Title 2</Accordion.Toggle>
                                </Card.Title>
                            </Card.Header>

                            <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                    <p>Donec tellus massa, tristique sit amet condimentum vel, facilisis quis sapien.</p>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>

                        <Card className="card-default">
                            <Card.Header>
                                <Card.Title>
                                    <Accordion.Toggle as={ AccordionToggle } eventKey="2">Accordion Title 3</Accordion.Toggle>
                                </Card.Title>
                            </Card.Header>

                            <Accordion.Collapse eventKey="2">
                                <Card.Body>
                                    <p>Donec tellus massa, tristique sit amet condimentum vel, facilisis quis sapien.</p>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Col>

                <Col xl={ 6 }>
                    <h4>Large</h4>

                    <Accordion defaultActiveKey="0" className="accordion-lg">
                        <Card className="card-default">
                            <Card.Header>
                                <Card.Title>
                                    <Accordion.Toggle as={ AccordionToggle } eventKey="0">Accordion Title 1</Accordion.Toggle>
                                </Card.Title>
                            </Card.Header>

                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <p>Donec tellus massa, tristique sit amet condim vel, facilisis quis sapien. Praesent id enim sit amet odio vulputate eleifend in in tortor. Donec tellus massa, tristique sit amet condim vel, facilisis quis sapien. Praesent id enim sit amet odio vulputate eleifend in in tortor. Donec tellus massa, tristique sit amet condim vel, facilisis quis sapien. Praesent id enim sit amet odio vulputate eleifend in in tortor. Donec tellus massa, tristique sit amet condim vel, facilisis quis sapien. Praesent id enim sit amet odio vulputate eleifend in in tortor. Donec tellus massa.</p>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>

                        <Card className="card-default">
                            <Card.Header>
                                <Card.Title>
                                    <Accordion.Toggle as={ AccordionToggle } eventKey="1">Accordion Title 2</Accordion.Toggle>
                                </Card.Title>
                            </Card.Header>

                            <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                    <p>Donec tellus massa, tristique sit amet condimentum vel, facilisis quis sapien.</p>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>

                        <Card className="card-default">
                            <Card.Header>
                                <Card.Title>
                                    <Accordion.Toggle as={ AccordionToggle } eventKey="2">Accordion Title 3</Accordion.Toggle>
                                </Card.Title>
                            </Card.Header>

                            <Accordion.Collapse eventKey="2">
                                <Card.Body>
                                    <p>Donec tellus massa, tristique sit amet condimentum vel, facilisis quis sapien.</p>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Col>
            </Row>
        </>
    )
}

export default React.memo( AccordionsPage );