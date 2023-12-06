import React, { useEffect } from 'react';
import { Row, Col, Button, Card, Dropdown, ButtonGroup } from 'react-bootstrap';

import Breadcrumb from '../../common/breadcrumb';

import { withCardActions } from '../../hoc'

const CardWithActions = withCardActions( Card );

function ButtonsPage () {

    useEffect( () => {
        document.querySelector( ".content-body" ).classList.add( "card-margin" );

        return () => {
            document.querySelector( ".content-body" ).classList.remove( "card-margin" );
        };
    }, [] )

    return (
        <>
            <Breadcrumb current="Buttons" paths={ [ {
                name: 'Home',
                url: '/'
            }, {
                name: 'Elements',
                url: '/elements'
            } ] } />

            <Row>
                <Col lg={ 6 }>
                    <CardWithActions>
                        <Card.Header>
                            <Card.Title>Buttons</Card.Title>
                            <Card.Subtitle>Use any of the available button classes to quickly create a styled <code>button</code>.</Card.Subtitle>
                        </Card.Header>

                        <Card.Body>
                            <Button className="mb-1 mt-1 mr-1" variant="default">Default</Button>
                            <Button className="mb-1 mt-1 mr-1" variant="primary">Primary</Button>
                            <Button className="mb-1 mt-1 mr-1" variant="success">Success</Button>
                            <Button className="mb-1 mt-1 mr-1" variant="info">Info</Button>
                            <Button className="mb-1 mt-1 mr-1" variant="warning">Warning</Button>
                            <Button className="mb-1 mt-1 mr-1" variant="danger">Danger</Button>
                        </Card.Body>
                    </CardWithActions>

                    <CardWithActions>
                        <Card.Header>
                            <Card.Title>Disabled Buttons</Card.Title>
                            <Card.Subtitle>Add the <code>disabled</code> prop.</Card.Subtitle>
                        </Card.Header>

                        <Card.Body>
                            <Button className="mb-1 mt-1 mr-1" variant="default" disabled>Default</Button>
                            <Button className="mb-1 mt-1 mr-1" variant="primary" disabled>Primary</Button>
                            <Button className="mb-1 mt-1 mr-1" variant="success" disabled>Success</Button>
                            <Button className="mb-1 mt-1 mr-1" variant="info" disabled>Info</Button>
                            <Button className="mb-1 mt-1 mr-1" variant="warning" disabled>Warning</Button>
                            <Button className="mb-1 mt-1 mr-1" variant="danger" disabled>Danger</Button>
                        </Card.Body>
                    </CardWithActions>

                    <CardWithActions>
                        <Card.Header>
                            <Card.Title>Sizes</Card.Title>
                            <Card.Subtitle>Fancy larger or smaller buttons? Add <code>.btn-lg</code>, <code>.btn-sm</code>, or <code>.btn-xs</code> for additional sizes.</Card.Subtitle>
                        </Card.Header>

                        <Card.Body>
                            <p className="m-0">
                                <Button className="mb-1 mt-1 mr-1" variant="default" size="lg">Large Button</Button>
                                <Button className="mb-1 mt-1 mr-1" variant="primary" size="lg">Large Button</Button>
                            </p>
                            <p className="m-0">
                                <Button className="mb-1 mt-1 mr-1" variant="default">Default Button</Button>
                                <Button className="mb-1 mt-1 mr-1" variant="primary">Default Button</Button>
                            </p>
                            <p className="m-0">
                                <Button className="mb-1 mt-1 mr-1" variant="default" size="sm">Small Button</Button>
                                <Button className="mb-1 mt-1 mr-1" variant="primary" size="sm">Small Button</Button>
                            </p>
                            <p className="m-0">
                                <Button className="mb-1 mt-1 mr-1" variant="default" size="xs">Extra Small Button</Button>
                                <Button className="mb-1 mt-1 mr-1" variant="primary" size="xs">Extra Small Button</Button>
                            </p>
                        </Card.Body>
                    </CardWithActions>

                    <CardWithActions>
                        <Card.Header>
                            <Card.Title>Dropdowns</Card.Title>
                            <Card.Subtitle>Turn a button into a dropdown toggle with some basic markup changes.</Card.Subtitle>
                        </Card.Header>

                        <Card.Body>
                            <Row>
                                <Col lg={ 6 }>
                                    <h5 className="font-weight-semibold text-dark text-uppercase mb-0">Dropdown</h5>
                                    <p>Simple Dropdown Menus.</p>

                                    <Dropdown>
                                        <Dropdown.Toggle variant="default">Default <span className="caret"></span></Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item className="text-1" href="#">Action</Dropdown.Item>
                                            <Dropdown.Item className="text-1" href="#">Another action</Dropdown.Item>
                                            <Dropdown.Item className="text-1" href="#">Something else here</Dropdown.Item>
                                            <Dropdown.Item className="text-1" href="#">Separated link</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Col>

                                <Col lg={ 6 }>
                                    <h5 className="font-weight-semibold text-dark text-uppercase mb-0">Dropup</h5>
                                    <p>Dropdown Menus above elements.</p>

                                    <Dropdown drop="up">
                                        <Dropdown.Toggle variant="default">Default <span className="caret"></span></Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item className="text-1" href="#">Action</Dropdown.Item>
                                            <Dropdown.Item className="text-1" href="#">Another action</Dropdown.Item>
                                            <Dropdown.Item className="text-1" href="#">Something else here</Dropdown.Item>
                                            <Dropdown.Item className="text-1" href="#">Separated link</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Col>
                            </Row>
                        </Card.Body>
                    </CardWithActions>

                    <CardWithActions>
                        <Card.Header>
                            <Card.Title>Buttons Icons</Card.Title>
                            <Card.Subtitle>It's easy to add a icon from the library to a button.</Card.Subtitle>
                        </Card.Header>

                        <Card.Body>
                            <Button className="mb-1 mt-1 mr-1" variant="default"><i className="fas fa-sync"></i> Refresh</Button>
                            <Button className="mb-1 mt-1 mr-1" variant="primary"><i className="fas fa-cloud"></i> Cloud</Button>
                            <Button className="mb-1 mt-1 mr-1" variant="info"><i className="fas fa-thumbs-up"></i> </Button>
                        </Card.Body>
                    </CardWithActions>
                </Col>

                <Col lg={ 6 }>
                    <CardWithActions>
                        <Card.Header>
                            <Card.Title>Blocks</Card.Title>
                            <Card.Subtitle>Create block level buttons—those that span the full width of a parent— by adding <code>block</code> prop.</Card.Subtitle>
                        </Card.Header>

                        <Card.Body>
                            <Button className="mb-1 mt-1 mr-1" variant="primary" size="lg" block>Block level button</Button>
                            <Button className="mb-1 mt-1 mr-1" variant="default" size="lg" block>Block level button</Button>
                            <Button className="mb-1 mt-1 mr-1" variant="primary" block>Block level button</Button>
                            <Button className="mb-1 mt-1 mr-1" variant="default" size="sm" block>Block level button</Button>
                        </Card.Body>
                    </CardWithActions>

                    <CardWithActions>
                        <Card.Header>
                            <Card.Title>Justified Button Groups</Card.Title>
                            <Card.Subtitle>Make a group of buttons stretch at equal sizes to span the entire width of its parent.</Card.Subtitle>
                        </Card.Header>

                        <Card.Body>
                            <ButtonGroup className="d-flex">
                                <Button variant="default">Left</Button>
                                <Button variant="default">Middle</Button>
                                <Button variant="default">Right</Button>
                            </ButtonGroup>
                        </Card.Body>
                    </CardWithActions>

                    <CardWithActions>
                        <Card.Header>
                            <Card.Title>Groups</Card.Title>
                            <Card.Subtitle>Wrap a series of buttons with <code>&lt;Button&gt;</code> in <code>&lt;ButtonGroup&gt;</code>.</Card.Subtitle>
                        </Card.Header>

                        <Card.Body>
                            <Row>
                                <Col md={ 4 }>
                                    <h5 className="font-weight-semibold text-dark text-uppercase mb-0">Basic</h5>
                                    <p>Simple Group</p>
                                    <ButtonGroup className="flex-wrap mb-3 mr-1 mr-md-0">
                                        <Button variant="default">Left</Button>
                                        <Button variant="default">Middle</Button>
                                        <Button variant="default">Right</Button>
                                    </ButtonGroup>
                                    <ButtonGroup className="flex-wrap mb-3">
                                        <Button variant="primary">Left</Button>
                                        <Button variant="primary">Middle</Button>
                                        <Button variant="primary">Right</Button>
                                    </ButtonGroup>
                                </Col>

                                <Col md={ 4 }>
                                    <h5 className="font-weight-semibold text-dark text-uppercase mb-0">Vertical</h5>
                                    <p>Vertically stacked.</p>
                                    <ButtonGroup className="flex-wrap mr-1 mb-3" vertical>
                                        <Button variant="default">Left</Button>
                                        <Button variant="default">Middle</Button>
                                        <Button variant="default">Right</Button>
                                    </ButtonGroup>

                                    <ButtonGroup className="flex-wrap mb-3" vertical>
                                        <Button variant="primary">Left</Button>
                                        <Button variant="primary">Middle</Button>
                                        <Button variant="primary">Right</Button>
                                    </ButtonGroup>
                                    <p></p>
                                </Col>

                                <Col md={ 4 }>
                                    <h5 className="font-weight-semibold text-dark text-uppercase mb-0">Nesting</h5>
                                    <p>Mixed with a series of buttons.</p>
                                    <ButtonGroup className="flex-wrap">
                                        <Button variant="default">1</Button>
                                        <Button variant="primary">2</Button>
                                        <Button variant="default">3</Button>
                                        <Dropdown className="btn-group">
                                            <Dropdown.Toggle variant="default">Default <span className="caret"></span></Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item className="text-1" href="#">Action</Dropdown.Item>
                                                <Dropdown.Item className="text-1" href="#">Another action</Dropdown.Item>
                                                <Dropdown.Item className="text-1" href="#">Something else here</Dropdown.Item>
                                                <Dropdown.Item className="text-1" href="#">Separated link</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </ButtonGroup>
                                    <p></p>
                                </Col>
                            </Row>
                        </Card.Body>
                    </CardWithActions>
                </Col>
            </Row>
        </>
    )
}

export default React.memo( ButtonsPage );