import React from 'react';
import { Row, Col, Card, Form, InputGroup, Button, OverlayTrigger, Tooltip, Popover, Dropdown } from 'react-bootstrap';

import Breadcrumb from '../../common/breadcrumb';
import PtFileUpload from '../../features/elements/file-upload';

import { withCardActions } from '../../hoc';

const CardWithActions = withCardActions( Card );

function BasicFormsPage () {
    return (
        <>
            <Breadcrumb current="Basic Forms" paths={ [ {
                name: "Home",
                url: "/"
            }, {
                name: "Forms",
                url: "/forms"
            } ] } />

            <Row>
                <Col>
                    <CardWithActions>
                        <Card.Header>
                            <Card.Title>Form Elements</Card.Title>
                        </Card.Header>

                        <Card.Body>
                            <Form className="form-horizontal form-bordered">
                                <Form.Group as={ Row } className="align-items-center">
                                    <Col as={ Form.Label } lg={ 3 } className="text-lg-right mb-lg-0">
                                        Default
                                    </Col>
                                    <Col lg={ 6 }>
                                        <Form.Control
                                            type="text"
                                        />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={ Row } className="align-items-center">
                                    <Col as={ Form.Label } lg={ 3 } className="text-lg-right mb-lg-0">
                                        Disabled
                                    </Col>
                                    <Col lg={ 6 }>
                                        <Form.Control
                                            type="text"
                                            placeholder="Disabled Input here..."
                                            disabled
                                        />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={ Row } className="align-items-center">
                                    <Col as={ Form.Label } lg={ 3 } className="text-lg-right mb-lg-0">
                                        Read
                                    </Col>
                                    <Col lg={ 6 }>
                                        <Form.Control
                                            type="text"
                                            defaultValue="Read-Only Input"
                                            readOnly
                                        />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={ Row }>
                                    <Col lg={ 3 } className="text-lg-right pt-2">
                                        <Form.Label>Help Text</Form.Label>
                                    </Col>
                                    <Col lg={ 6 }>
                                        <Form.Control
                                            type="text"
                                        />
                                        <span className="help-block">A block of help text that breaks onto a new line and may extend beyond one line.</span>
                                    </Col>
                                </Form.Group>

                                <Form.Group as={ Row } className="align-items-center">
                                    <Col lg={ 3 } as={ Form.Label } className="text-lg-right mb-lg-0">
                                        Rounded Input
                                    </Col>
                                    <Col lg={ 6 }>
                                        <Form.Control
                                            type="text"
                                            className="input-rounded"
                                        />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={ Row } className="align-items-center">
                                    <Col as={ Form.Label } lg={ 3 } className="text-lg-right mb-lg-0">
                                        Input
                                    </Col>
                                    <Col lg={ 6 }>
                                        <Form.Control
                                            type="text"
                                            placeholder="This is focused..."
                                            autoFocus
                                        />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={ Row } className="align-items-center">
                                    <Col as={ Form.Label } lg={ 3 } className="text-lg-right mb-lg-0">
                                        Placeholder
                                    </Col>
                                    <Col lg={ 6 }>
                                        <Form.Control
                                            type="text"
                                            placeholder="placeholder"
                                        />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={ Row } className="align-items-center">
                                    <Col as={ Form.Label } lg={ 3 } className="text-lg-right mb-lg-0">
                                        Password
                                    </Col>
                                    <Col lg={ 6 }>
                                        <Form.Control
                                            type="password"
                                        />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={ Row } className="align-items-center">
                                    <Col as={ Form.Label } lg={ 3 } className="text-lg-right mb-lg-0">
                                        Static
                                    </Col>
                                    <Col lg={ 6 }>
                                        <p className="form-control-static pt-1 mb-0">
                                            email@example.com
                                        </p>
                                    </Col>
                                </Form.Group>

                                <Form.Group as={ Row } className="align-items-center">
                                    <Col as={ Form.Label } lg={ 3 } className="text-lg-right mb-lg-0">
                                        Left
                                    </Col>
                                    <Col lg={ 6 }>
                                        <InputGroup>
                                            <InputGroup.Prepend>
                                                <InputGroup.Text>
                                                    <i className="fas fa-user"></i>
                                                </InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <Form.Control type="text" placeholder="Left icon" />
                                        </InputGroup>
                                    </Col>
                                </Form.Group>

                                <Form.Group as={ Row } className="align-items-center">
                                    <Col as={ Form.Label } lg={ 3 } className="text-lg-right mb-lg-0">
                                        Right
                                    </Col>
                                    <Col lg={ 6 }>
                                        <InputGroup>
                                            <Form.Control type="text" placeholder="Left icon" />
                                            <InputGroup.Append>
                                                <InputGroup.Text>
                                                    <i className="fas fa-user"></i>
                                                </InputGroup.Text>
                                            </InputGroup.Append>
                                        </InputGroup>
                                    </Col>
                                </Form.Group>

                                <Form.Group as={ Row } className="align-items-center">
                                    <Col as={ Form.Label } lg={ 3 } className="text-lg-right mb-lg-0">
                                        File
                                    </Col>
                                    <Col lg={ 6 }>
                                        <PtFileUpload />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={ Row }>
                                    <Col lg={ 3 } className="text-lg-right pt-2">
                                        <Form.Label>Vertical Group</Form.Label>
                                    </Col>

                                    <Col lg={ 6 }>
                                        <section className="form-group-vertical">
                                            <Form.Control type="text" placeholder="Username" />
                                            <Form.Control type="text" placeholder="Email" />
                                            <Form.Control className="last" type="text" placeholder="Password" />
                                        </section>
                                    </Col>
                                </Form.Group>

                                <Form.Group as={ Row } className="has-success align-items-center">
                                    <Col as={ Form.Label } lg={ 3 } className="text-lg-right mb-lg-0">
                                        Input with success
                                    </Col>

                                    <Col lg={ 6 }>
                                        <Form.Control type="text" />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={ Row } className="has-warning align-items-center">
                                    <Col as={ Form.Label } lg={ 3 } className="text-lg-right mb-lg-0">
                                        Input with warning
                                    </Col>

                                    <Col lg={ 6 }>
                                        <Form.Control type="text" />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={ Row } className="has-danger align-items-center">
                                    <Col as={ Form.Label } lg={ 3 } className="text-lg-right mb-lg-0">
                                        Input with error
                                    </Col>

                                    <Col lg={ 6 }>
                                        <Form.Control type="text" />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={ Row } className="align-items-center">
                                    <Col as={ Form.Label } lg={ 3 } className="text-lg-right mb-lg-0">
                                        Input with Tooltip
                                    </Col>

                                    <Col lg={ 6 }>
                                        <OverlayTrigger
                                            placement="top"
                                            overlay={ <Tooltip>Place your tooltip info here</Tooltip> }
                                        >
                                            <Form.Control type="text" placeholder="Hover me" />
                                        </OverlayTrigger>
                                    </Col>
                                </Form.Group>

                                <Form.Group as={ Row } className="align-items-center">
                                    <Col as={ Form.Label } lg={ 3 } className="text-lg-right mb-lg-0">
                                        Input with Popover
                                    </Col>

                                    <Col lg={ 6 }>
                                        <OverlayTrigger
                                            trigger="click"
                                            placement="top"
                                            overlay={
                                                <Popover>
                                                    <h3 className="popover-header">The Title</h3>
                                                    <div className="popover-body">Content goes here...</div>
                                                </Popover>
                                            }
                                        >
                                            <Form.Control type="text" placeholder="Click Here" />
                                        </OverlayTrigger>
                                    </Col>
                                </Form.Group>

                                <Form.Group as={ Row } className="align-items-center">
                                    <Col as={ Form.Label } lg={ 3 } className="text-lg-right mb-lg-0">
                                        Column Sizing
                                    </Col>

                                    <Col sm={ 8 }>
                                        <Row>
                                            <Col sm={ 2 }>
                                                <Form.Control type="text" placeholder=".col-sm-2" />
                                            </Col>
                                            <div className="d-md-none mb-3"></div>
                                            <Col sm={ 3 }>
                                                <Form.Control type="text" placeholder=".col-sm-3" />
                                            </Col>
                                            <div className="d-md-none mb-3"></div>
                                            <Col sm={ 4 }>
                                                <Form.Control type="text" placeholder=".col-sm-4" />
                                            </Col>
                                        </Row>
                                    </Col>
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </CardWithActions>
                </Col>
            </Row>

            <Row>
                <Col>
                    <CardWithActions>
                        <Card.Header>
                            <Card.Title>Controls sizing</Card.Title>
                        </Card.Header>

                        <Card.Body>
                            <Form className="form-horizontal form-bordered">
                                <Form.Group as={ Row }>
                                    <Col lg={ 3 } className="pt-3 text-lg-right">
                                        <Form.Label>Input sizing</Form.Label>
                                    </Col>
                                    <Col lg={ 6 }>
                                        <Form.Control
                                            size="lg"
                                            className="mb-3"
                                            type="text"
                                            placeholder=".form-control-lg"
                                        />
                                        <Form.Control
                                            className="mb-3"
                                            type="text"
                                            placeholder="Default Input"
                                        />
                                        <Form.Control
                                            size="sm"
                                            className="mb-3"
                                            type="text"
                                            placeholder=".form-control-sm"
                                        />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={ Row }>
                                    <Col lg={ 3 } className="pt-2 text-lg-right">
                                        <Form.Label>Select sizing</Form.Label>
                                    </Col>
                                    <Col lg={ 6 }>
                                        <Form.Control
                                            size="lg"
                                            className="mb-3"
                                            as="select"
                                        >
                                            <option>Option 1</option>
                                            <option>Option 2</option>
                                            <option>Option 3</option>
                                        </Form.Control>
                                        <Form.Control
                                            className="mb-3"
                                            as="select"
                                        >
                                            <option>Option 1</option>
                                            <option>Option 2</option>
                                            <option>Option 3</option>
                                        </Form.Control>
                                        <Form.Control
                                            size="sm"
                                            className="mb-3"
                                            as="select"
                                        >
                                            <option>Option 1</option>
                                            <option>Option 2</option>
                                            <option>Option 3</option>
                                        </Form.Control>
                                    </Col>
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </CardWithActions>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <Form className="form-horizontal form-bordered">
                                <Form.Group as={ Row }>
                                    <Col lg={ 3 } className="pt-2 text-lg-right">
                                        <Form.Label>Checkboxes and radios</Form.Label>
                                    </Col>

                                    <Col lg={ 6 }>
                                        <Form.Check
                                            id="checkbox-1"
                                            label="Option one is this and that-be sure to include why it's great"
                                        />
                                        <Form.Check
                                            id="checkbox-2"
                                            label="Option one is this and that—be sure to include why it's great option one"
                                        />
                                        <Form.Check
                                            id="radio-1"
                                            type="radio"
                                            name="radios-1"
                                            label="Option one is this and that—be sure to include why it's great"
                                        />
                                        <Form.Check
                                            id="radio-2"
                                            type="radio"
                                            name="radios-1"
                                            label="Option two can be something else and selecting it will deselect option one"
                                        />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={ Row } className="align-items-center">
                                    <Col lg={ 3 } className="text-lg-right">
                                        <Form.Label>Inline Checkboxes</Form.Label>
                                    </Col>

                                    <Col lg={ 6 }>
                                        <Form.Check
                                            inline
                                            id="checkbox-inline-1"
                                            label="1"
                                        />
                                        <Form.Check
                                            inline
                                            id="checkbox-inline-2"
                                            label="2"
                                        />
                                        <Form.Check
                                            inline
                                            id="checkbox-inline-3"
                                            label="3"
                                        />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={ Row }>
                                    <Col lg={ 3 } className="pt-2 text-lg-right">
                                        <Form.Label>Selects</Form.Label>
                                    </Col>

                                    <Col lg={ 6 }>
                                        <Form.Control as="select" className="mb-3">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </Form.Control>

                                        <Form.Control as="select" multiple>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </Form.Control>
                                    </Col>
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col>
                    <CardWithActions>
                        <Card.Header>
                            <Card.Title>Input Groups</Card.Title>
                        </Card.Header>

                        <Card.Body>
                            <Form className="form-horizontal form-bordered">
                                <Form.Group as={ Row }>
                                    <Col lg={ 3 } className="pt-2 text-lg-right">
                                        <Form.Label>Basic Examples</Form.Label>
                                    </Col>

                                    <Col lg={ 6 }>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text>@</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <Form.Control type="text" placeholder="Username" />
                                        </InputGroup>

                                        <InputGroup className="mb-3">
                                            <Form.Control type="text" />
                                            <InputGroup.Append>
                                                <InputGroup.Text>.00</InputGroup.Text>
                                            </InputGroup.Append>
                                        </InputGroup>

                                        <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text>$</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <Form.Control type="text" />
                                            <InputGroup.Append>
                                                <InputGroup.Text>.00</InputGroup.Text>
                                            </InputGroup.Append>
                                        </InputGroup>
                                    </Col>
                                </Form.Group>

                                <Form.Group as={ Row }>
                                    <Col lg={ 3 } className="pt-3 text-lg-right">
                                        <Form.Label>Sizing</Form.Label>
                                    </Col>

                                    <Col lg={ 6 } >
                                        <InputGroup size="lg" className="mb-3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text>@</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <Form.Control size="lg" placeholder="Username" />
                                        </InputGroup>

                                        <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text>@</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <Form.Control placeholder="Username" />
                                        </InputGroup>

                                        <InputGroup size="sm" className="mb-3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text>@</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <Form.Control placeholder="Username" />
                                        </InputGroup>
                                    </Col>
                                </Form.Group>

                                <Form.Group as={ Row }>
                                    <Col lg={ 3 } className="pt-2 text-lg-right">
                                        <Form.Label>Iconic</Form.Label>
                                    </Col>

                                    <Col lg={ 6 }>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text><i className="fas fa-user"></i></InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <Form.Control type="text" placeholder="Username" />
                                        </InputGroup>

                                        <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text><i className="fas fa-envelope"></i></InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <Form.Control type="text" placeholder="Email" />
                                        </InputGroup>
                                    </Col>
                                </Form.Group>

                                <Form.Group as={ Row }>
                                    <Col lg={ 3 } className="pt-2 text-lg-right">
                                        <Form.Label>Checkbox and radio</Form.Label>
                                    </Col>

                                    <Col lg={ 6 }>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text>
                                                    <input type="checkbox" />
                                                </InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <Form.Control type="text" />
                                        </InputGroup>

                                        <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text>
                                                    <input type="radio" />
                                                </InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <Form.Control type="text" />
                                        </InputGroup>
                                    </Col>
                                </Form.Group>

                                <Form.Group as={ Row }>
                                    <Col lg={ 3 } className="pt-2 text-lg-right">
                                        <Form.Label>Button addons</Form.Label>
                                    </Col>

                                    <Col lg={ 6 }>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <Button variant="danger">Go!</Button>
                                            </InputGroup.Prepend>
                                            <Form.Control type="text" />
                                        </InputGroup>

                                        <InputGroup className="mb-3">
                                            <Form.Control type="text" />
                                            <InputGroup.Append>
                                                <Button variant="danger">Go!</Button>
                                            </InputGroup.Append>
                                        </InputGroup>
                                    </Col>
                                </Form.Group>

                                <Form.Group as={ Row }>
                                    <Col lg={ 3 } className="pt-2 text-lg-right">
                                        <Form.Label>Segmented buttons</Form.Label>
                                    </Col>

                                    <Col lg={ 6 }>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Prepend as={ Dropdown }>
                                                <Button variant="primary">Action</Button>
                                                <Dropdown.Toggle variant="primary" split><span className="sr-only">Toggle Dropdown</span></Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item href="#">Action</Dropdown.Item>
                                                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                                                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                                    <Dropdown.Divider />
                                                    <Dropdown.Item href="#">Separated link</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </InputGroup.Prepend>
                                            <Form.Control type="text" />
                                        </InputGroup>

                                        <InputGroup className="mb-3">
                                            <Form.Control type="text" />
                                            <InputGroup.Append as={ Dropdown }>
                                                <Button variant="primary">Action</Button>
                                                <Dropdown.Toggle variant="primary" split><span className="sr-only">Toggle Dropdown</span></Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item href="#">Action</Dropdown.Item>
                                                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                                                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                                    <Dropdown.Divider />
                                                    <Dropdown.Item href="#">Separated link</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </InputGroup.Append>
                                        </InputGroup>
                                    </Col>
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </CardWithActions>
                </Col>
            </Row>

            <Row>
                <Col>
                    <CardWithActions>
                        <Card.Header>
                            <Card.Title>Custom Checkbox &amp; Radio</Card.Title>
                        </Card.Header>

                        <Card.Body>
                            <Row>
                                <Col lg={ 6 } className="mb-3 mb-lg-0">
                                    <Form className="form-horizontal form-bordered">
                                        <Form.Group as={ Row }>
                                            <Col sm={ 4 }>
                                                <Form.Label>Checkboxes</Form.Label>
                                            </Col>

                                            <Col sm={ 8 }>
                                                <Form.Check
                                                    custom
                                                    id="custom-checkbox-1"
                                                    className="checkbox-default"
                                                    label="Checkbox Default"
                                                />

                                                <Form.Check
                                                    custom
                                                    id="custom-checkbox-2"
                                                    className="checkbox-primary"
                                                    label="Checkbox Primary"
                                                />

                                                <Form.Check
                                                    custom
                                                    id="custom-checkbox-3"
                                                    className="checkbox-success"
                                                    label="Checkbox Success"
                                                />

                                                <Form.Check
                                                    custom
                                                    id="custom-checkbox-4"
                                                    className="checkbox-warning"
                                                    label="Checkbox Warning"
                                                />

                                                <Form.Check
                                                    custom
                                                    id="custom-checkbox-5"
                                                    className="checkbox-danger"
                                                    label="Checkbox Danger"
                                                />

                                                <Form.Check
                                                    custom
                                                    id="custom-checkbox-6"
                                                    label="Checkbox Disabled"
                                                    disabled
                                                />

                                                <Form.Check
                                                    custom
                                                    id="custom-checkbox-7"
                                                    defaultChecked={ true }
                                                    disabled
                                                    label="Checkbox &amp; Disabled"
                                                />
                                            </Col>
                                        </Form.Group>
                                    </Form>
                                </Col>

                                <Col lg={ 6 } className="mb-3 mb-lg-0">
                                    <Form className="form-horizontal form-bordered">
                                        <Form.Group as={ Row }>
                                            <Col sm={ 4 }>
                                                <Form.Label>Radios</Form.Label>
                                            </Col>

                                            <Col sm={ 8 }>
                                                <Form.Check
                                                    type="radio"
                                                    custom
                                                    id="custom-radio-1"
                                                    label="Radio Default"
                                                    name="radios-2"
                                                />

                                                <Form.Check
                                                    type="radio"
                                                    custom
                                                    id="custom-radio-2"
                                                    className="radio-primary"
                                                    label="Radio Primary"
                                                    name="radios-2"
                                                />

                                                <Form.Check
                                                    type="radio"
                                                    custom
                                                    id="custom-radio-3"
                                                    className="radio-success"
                                                    label="Radio Success"
                                                    name="radios-2"
                                                />

                                                <Form.Check
                                                    type="radio"
                                                    custom
                                                    id="custom-radio-4"
                                                    className="radio-warning"
                                                    label="Radio Warning"
                                                    name="radios-2"
                                                />

                                                <Form.Check
                                                    type="radio"
                                                    custom
                                                    id="custom-radio-5"
                                                    className="radio-danger"
                                                    label="Radio Danger"
                                                    name="radios-2"
                                                />

                                                <Form.Check
                                                    type="radio"
                                                    custom
                                                    id="custom-radio-6"
                                                    label="Radio Disabled"
                                                    disabled
                                                />

                                                <Form.Check
                                                    type="radio"
                                                    custom
                                                    id="custom-radio-7"
                                                    defaultChecked={ true }
                                                    disabled
                                                    label="Radio &amp; Disabled"
                                                />
                                            </Col>
                                        </Form.Group>
                                    </Form>
                                </Col>
                            </Row>
                        </Card.Body>
                    </CardWithActions>
                </Col>
            </Row>

            <Row>
                <Col>
                    <CardWithActions>
                        <Card.Header>
                            <Card.Title>Input Grid</Card.Title>
                        </Card.Header>

                        <Card.Body>
                            <Row>
                                <Form.Group as={ Col } lg={ 12 }>
                                    <Form.Control type="text" placeholder=".col-lg-12" />
                                </Form.Group>

                                <Form.Group as={ Col } lg={ 6 }>
                                    <Form.Control type="text" placeholder=".col-lg-6" />
                                </Form.Group>

                                <Form.Group as={ Col } lg={ 6 }>
                                    <Form.Control type="text" placeholder=".col-lg-6" />
                                </Form.Group>

                                <Form.Group as={ Col } lg={ 4 }>
                                    <Form.Control type="text" placeholder=".col-lg-4" />
                                </Form.Group>

                                <Form.Group as={ Col } lg={ 4 }>
                                    <Form.Control type="text" placeholder=".col-lg-4" />
                                </Form.Group>

                                <Form.Group as={ Col } lg={ 4 }>
                                    <Form.Control type="text" placeholder=".col-lg-4" />
                                </Form.Group>

                                <Form.Group as={ Col } lg={ 3 }>
                                    <Form.Control type="text" placeholder=".col-lg-3" />
                                </Form.Group>

                                <Form.Group as={ Col } lg={ 3 }>
                                    <Form.Control type="text" placeholder=".col-lg-3" />
                                </Form.Group>

                                <Form.Group as={ Col } lg={ 3 }>
                                    <Form.Control type="text" placeholder=".col-lg-3" />
                                </Form.Group>

                                <Form.Group as={ Col } lg={ 3 }>
                                    <Form.Control type="text" placeholder=".col-lg-3" />
                                </Form.Group>

                                <Form.Group as={ Col } lg={ 2 }>
                                    <Form.Control type="text" placeholder=".col-lg-2" />
                                </Form.Group>

                                <Form.Group as={ Col } lg={ 2 }>
                                    <Form.Control type="text" placeholder=".col-lg-2" />
                                </Form.Group>

                                <Form.Group as={ Col } lg={ 2 }>
                                    <Form.Control type="text" placeholder=".col-lg-2" />
                                </Form.Group>

                                <Form.Group as={ Col } lg={ 2 }>
                                    <Form.Control type="text" placeholder=".col-lg-2" />
                                </Form.Group>

                                <Form.Group as={ Col } lg={ 2 }>
                                    <Form.Control type="text" placeholder=".col-lg-2" />
                                </Form.Group>

                                <Form.Group as={ Col } lg={ 2 }>
                                    <Form.Control type="text" placeholder=".col-lg-2" />
                                </Form.Group>

                                <Form.Group as={ Col } lg={ 1 }>
                                    <Form.Control type="text" placeholder=".col-lg-1" />
                                </Form.Group>

                                <Form.Group as={ Col } lg={ 1 }>
                                    <Form.Control type="text" placeholder=".col-lg-1" />
                                </Form.Group>

                                <Form.Group as={ Col } lg={ 1 }>
                                    <Form.Control type="text" placeholder=".col-lg-1" />
                                </Form.Group>

                                <Form.Group as={ Col } lg={ 1 }>
                                    <Form.Control type="text" placeholder=".col-lg-1" />
                                </Form.Group>

                                <Form.Group as={ Col } lg={ 1 }>
                                    <Form.Control type="text" placeholder=".col-lg-1" />
                                </Form.Group>

                                <Form.Group as={ Col } lg={ 1 }>
                                    <Form.Control type="text" placeholder=".col-lg-1" />
                                </Form.Group>

                                <Form.Group as={ Col } lg={ 1 }>
                                    <Form.Control type="text" placeholder=".col-lg-1" />
                                </Form.Group>

                                <Form.Group as={ Col } lg={ 1 }>
                                    <Form.Control type="text" placeholder=".col-lg-1" />
                                </Form.Group>

                                <Form.Group as={ Col } lg={ 1 }>
                                    <Form.Control type="text" placeholder=".col-lg-1" />
                                </Form.Group>

                                <Form.Group as={ Col } lg={ 1 }>
                                    <Form.Control type="text" placeholder=".col-lg-1" />
                                </Form.Group>

                                <Form.Group as={ Col } lg={ 1 }>
                                    <Form.Control type="text" placeholder=".col-lg-1" />
                                </Form.Group>

                                <Form.Group as={ Col } lg={ 1 }>
                                    <Form.Control type="text" placeholder=".col-lg-1" />
                                </Form.Group>
                            </Row>
                        </Card.Body>
                    </CardWithActions>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Card className="card-modern card-big-info">
                        <Card.Body>
                            <Row>
                                <Col lg="2-5" xl="1-5">
                                    <i className="card-big-info-icon bx bx-box"></i>
                                    <h2 className="card-big-info-title">General Info</h2>
                                    <p className="card-big-info-desc">Add here the product description with all details and necessary information.</p>
                                </Col>

                                <Col lg="3-5" xl="4-5">
                                    <Form.Group as={ Row } className="align-items-center">
                                        <Col lg={ 5 } xl={ 3 } className="text-lg-right">
                                            <Form.Label className="mb-lg-0">Product Name</Form.Label>
                                        </Col>
                                        <Col lg={ 7 } xl={ 6 }>
                                            <Form.Control type="text" className="form-control-modern" required />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={ Row }>
                                        <Col lg={ 5 } xl={ 3 } className="text-lg-right">
                                            <Form.Label>Product Description</Form.Label>
                                        </Col>
                                        <Col lg={ 7 } xl={ 6 }>
                                            <Form.Control as="textarea" className="form-control-modern" rows={ 6 } />
                                        </Col>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default React.memo( BasicFormsPage )