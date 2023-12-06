import React from 'react';
import { Row, Col, Card, Form, ProgressBar } from 'react-bootstrap';
import { toast } from 'react-toastify';

import Breadcrumb from '../../common/breadcrumb';
import PNotify from '../../features/elements/p-notify';
import Wizard, { WizardTab, WizardNav, WizardNavItem } from '../../features/elements/wizard';

import { withCardActions } from '../../hoc';

const CardWithActions = withCardActions( Card );

function FormWizardsPage () {

    function wizardCompleted () {
        toast(
            <PNotify title="Congratulations" icon="fas fa-check" text="You completted the wizard form." />,
            {
                containerId: "default",
                className: "notification-success"
            }
        );
    }

    return (
        <>
            <Breadcrumb current="Form Wizards" paths={ [ {
                name: "Home",
                url: "/"
            }, {
                name: "Forms",
                url: "/forms"
            } ] } />

            <Row className="mt-0">
                <Col xl={ 6 }>
                    <CardWithActions className="mb-4">
                        <Card.Header>
                            <Card.Title>Form Wizard</Card.Title>
                        </Card.Header>

                        <Card.Body className="card-body-nopadding">
                            <div id="nav1" className="wizard-tabs"></div>
                            <Wizard
                                className="form-horizontal"
                                navContainer="nav1"
                                pagerContainer="footer1"
                                onFinish={ wizardCompleted }
                            >
                                <WizardNav className="wizard-steps">
                                    <WizardNavItem className="text-center"><span className="badge">1</span> Account</WizardNavItem>
                                    <WizardNavItem className="text-center"><span className="badge">2</span> Profile</WizardNavItem>
                                    <WizardNavItem className="text-center"><span className="badge">3</span> Confirm</WizardNavItem>
                                </WizardNav>

                                <WizardTab>
                                    <Form.Group as={ Row } className="align-items-center">
                                        <Col sm={ 4 } className="text-sm-right">
                                            <Form.Label className="mb-0">Username</Form.Label>
                                        </Col>
                                        <Col sm={ 8 }>
                                            <Form.Control
                                                type="text"
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid">This field is required.</Form.Control.Feedback>
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={ Row } className="align-items-center">
                                        <Col sm={ 4 } className="text-sm-right">
                                            <Form.Label className="mb-0">Password</Form.Label>
                                        </Col>
                                        <Col sm={ 8 }>
                                            <Form.Control
                                                type="password"
                                                minLength={ 6 }
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid">Please enter at least 6 characters.</Form.Control.Feedback>
                                        </Col>
                                    </Form.Group>
                                </WizardTab>

                                <WizardTab>
                                    <Form.Group as={ Row } className="align-items-center">
                                        <Col sm={ 4 } className="text-sm-right">
                                            <Form.Label className="mb-0">First Name</Form.Label>
                                        </Col>
                                        <Col sm={ 8 }>
                                            <Form.Control
                                                type="text"
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid">This field is required.</Form.Control.Feedback>
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={ Row } className="align-items-center">
                                        <Col sm={ 4 } className="text-sm-right">
                                            <Form.Label className="mb-0">Last Name</Form.Label>
                                        </Col>
                                        <Col sm={ 8 }>
                                            <Form.Control
                                                type="text"
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid">This field is required.</Form.Control.Feedback>
                                        </Col>
                                    </Form.Group>
                                </WizardTab>

                                <WizardTab>
                                    <Form.Group as={ Row } className="align-items-center">
                                        <Col sm={ 4 } className="text-sm-right">
                                            <Form.Label className="mb-0">Email</Form.Label>
                                        </Col>
                                        <Col sm={ 8 }>
                                            <Form.Control
                                                type="email"
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid">Please enter a valid email address.</Form.Control.Feedback>
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={ Row }>
                                        <Col sm={ 2 }></Col>
                                        <Col sm={ 10 }>
                                            <Form.Check
                                                id="agree1"
                                                custom
                                                required
                                                label="I agree to the terms of service"
                                            />
                                        </Col>
                                    </Form.Group>
                                </WizardTab>
                            </Wizard>
                        </Card.Body>

                        <Card.Footer id="footer1"></Card.Footer>
                    </CardWithActions>
                </Col>

                <Col xl={ 6 }>
                    <Card className="mb-4">
                        <Card.Body className="p-0 tabs bg-transparent mb-0">
                            <Wizard
                                className="form-horizontal"
                                pagerContainer="footer2"
                                onFinish={ wizardCompleted }
                            >
                                <WizardNav
                                    className="nav-tabs nav-justify"
                                >
                                    <WizardNavItem className="border-bottom-0 text-center"><span className="badge badge-primary">1</span> Account</WizardNavItem>
                                    <WizardNavItem className="border-bottom-0 text-center"><span className="badge badge-primary">2</span> Profile</WizardNavItem>
                                    <WizardNavItem className="border-bottom-0 text-center"><span className="badge badge-primary">3</span> Confirm</WizardNavItem>
                                </WizardNav>

                                <WizardTab>
                                    <Form.Group as={ Row } className="align-items-center">
                                        <Col sm={ 4 } className="text-sm-right">
                                            <Form.Label className="mb-0">Username</Form.Label>
                                        </Col>
                                        <Col sm={ 8 }>
                                            <Form.Control
                                                type="text"
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid">This field is required.</Form.Control.Feedback>
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={ Row } className="align-items-center">
                                        <Col sm={ 4 } className="text-sm-right">
                                            <Form.Label className="mb-0">Password</Form.Label>
                                        </Col>
                                        <Col sm={ 8 }>
                                            <Form.Control
                                                type="password"
                                                minLength={ 6 }
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid">Please enter at least 6 characters.</Form.Control.Feedback>
                                        </Col>
                                    </Form.Group>
                                </WizardTab>

                                <WizardTab>
                                    <Form.Group as={ Row } className="align-items-center">
                                        <Col sm={ 4 } className="text-sm-right">
                                            <Form.Label className="mb-0">First Name</Form.Label>
                                        </Col>
                                        <Col sm={ 8 }>
                                            <Form.Control
                                                type="text"
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid">This field is required.</Form.Control.Feedback>
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={ Row } className="align-items-center">
                                        <Col sm={ 4 } className="text-sm-right">
                                            <Form.Label className="mb-0">Last Name</Form.Label>
                                        </Col>
                                        <Col sm={ 8 }>
                                            <Form.Control
                                                type="text"
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid">This field is required.</Form.Control.Feedback>
                                        </Col>
                                    </Form.Group>
                                </WizardTab>

                                <WizardTab>
                                    <Form.Group as={ Row } className="align-items-center">
                                        <Col sm={ 4 } className="text-sm-right">
                                            <Form.Label className="mb-0">Email</Form.Label>
                                        </Col>
                                        <Col sm={ 8 }>
                                            <Form.Control
                                                type="email"
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid">Please enter a valid email address.</Form.Control.Feedback>
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={ Row }>
                                        <Col sm={ 2 }></Col>
                                        <Col sm={ 10 }>
                                            <Form.Check
                                                id="agree2"
                                                custom
                                                required
                                                label="I agree to the terms of service"
                                            />
                                        </Col>
                                    </Form.Group>
                                </WizardTab>
                            </Wizard>
                        </Card.Body>

                        <Card.Footer id="footer2"></Card.Footer>
                    </Card>
                </Col>
            </Row>

            <Row className="pt-0">
                <Col className="mb-4">
                    <CardWithActions>
                        <Card.Header>
                            <Card.Title>Form Wizard</Card.Title>
                        </Card.Header>

                        <Card.Body>
                            <Wizard
                                className="form-horizontal p-3"
                                pagerContainer="footer3"
                                onFinish={ wizardCompleted }
                                showProgress={ true }
                                progressSize="lg"
                            >
                                <WizardNav className="wizard-steps">
                                    <WizardNavItem><span>1</span>Account Info</WizardNavItem>
                                    <WizardNavItem><span>2</span>Profile Info</WizardNavItem>
                                    <WizardNavItem><span>3</span>Billing Info</WizardNavItem>
                                    <WizardNavItem><span>4</span>Confirmation</WizardNavItem>
                                </WizardNav>

                                <WizardTab>
                                    <Form.Group as={ Row } className="align-items-center">
                                        <Col sm={ 3 } className="text-sm-right">
                                            <Form.Label className="mb-0">Username</Form.Label>
                                        </Col>
                                        <Col sm={ 9 }>
                                            <Form.Control
                                                type="text"
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid">This field is required.</Form.Control.Feedback>
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={ Row } className="align-items-center">
                                        <Col sm={ 3 } className="text-sm-right">
                                            <Form.Label className="mb-0">Password</Form.Label>
                                        </Col>
                                        <Col sm={ 9 }>
                                            <Form.Control
                                                type="password"
                                                required
                                                minLength={ 6 }
                                            />
                                            <Form.Control.Feedback type="invalid">Please enter at least 6 characters.</Form.Control.Feedback>
                                        </Col>
                                    </Form.Group>
                                </WizardTab>

                                <WizardTab>
                                    <Form.Group as={ Row } className="align-items-center">
                                        <Col sm={ 3 } className="text-sm-right">
                                            <Form.Label className="mb-0">First Name</Form.Label>
                                        </Col>
                                        <Col sm={ 9 }>
                                            <Form.Control
                                                type="text"
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid">This field is required.</Form.Control.Feedback>
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={ Row } className="align-items-center">
                                        <Col sm={ 3 } className="text-sm-right">
                                            <Form.Label className="mb-0">Last Name</Form.Label>
                                        </Col>
                                        <Col sm={ 9 }>
                                            <Form.Control
                                                type="text"
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid">This field is required.</Form.Control.Feedback>
                                        </Col>
                                    </Form.Group>
                                </WizardTab>

                                <WizardTab>
                                    <Form.Group as={ Row } className="align-items-center">
                                        <Col sm={ 3 } className="text-sm-right">
                                            <Form.Label className="mb-0">Card Number</Form.Label>
                                        </Col>
                                        <Col sm={ 9 }>
                                            <Form.Control
                                                type="text"
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid">This field is required.</Form.Control.Feedback>
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={ Row } className="align-items-center">
                                        <Col sm={ 3 } className="text-sm-right">
                                            <Form.Label className="mb-0">Expiration</Form.Label>
                                        </Col>
                                        <Col sm={ 5 }>
                                            <Form.Control
                                                as="select"
                                                required
                                            >
                                                <option>January</option>
                                                <option>February</option>
                                                <option>March</option>
                                                <option>April</option>
                                                <option>May</option>
                                                <option>June</option>
                                                <option>July</option>
                                                <option>August</option>
                                                <option>September</option>
                                                <option>October</option>
                                                <option>November</option>
                                                <option>December</option>
                                            </Form.Control>
                                            <Form.Control.Feedback type="invalid">This field is required.</Form.Control.Feedback>
                                        </Col>
                                        <Col sm={ 4 }>
                                            <Form.Control as="select" required>
                                                <option>2014</option>
                                                <option>2015</option>
                                                <option>2016</option>
                                                <option>2017</option>
                                                <option>2018</option>
                                                <option>2019</option>
                                                <option>2020</option>
                                                <option>2021</option>
                                                <option>2022</option>
                                            </Form.Control>
                                        </Col>
                                    </Form.Group>
                                </WizardTab>

                                <WizardTab>
                                    <Form.Group as={ Row } className="align-items-center">
                                        <Col sm={ 3 } className="text-sm-right">
                                            <Form.Label className="mb-0">Email</Form.Label>
                                        </Col>
                                        <Col sm={ 9 }>
                                            <Form.Control
                                                type="email"
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid">Please enter a valid email address.</Form.Control.Feedback>
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={ Row }>
                                        <Col sm={ 3 }></Col>
                                        <Col sm={ 9 }>
                                            <Form.Check
                                                id="agree3"
                                                custom
                                                required
                                                label="I agree to the terms of service"
                                            />
                                        </Col>
                                    </Form.Group>
                                </WizardTab>
                            </Wizard>
                        </Card.Body>

                        <Card.Footer id="footer3"></Card.Footer>
                    </CardWithActions>
                </Col>
            </Row>

            <Row className="pt-0">
                <Col xl={ 6 } className="mb-4">
                    <CardWithActions>
                        <Card.Header>
                            <Card.Title>Form Wizard</Card.Title>
                        </Card.Header>

                        <Card.Body>
                            <Wizard
                                className="form-horizontal p-3"
                                pagerContainer="footer4"
                                onFinish={ wizardCompleted }
                                showProgress={ true }
                            >
                                <WizardNav className="wizard-steps">
                                    <WizardNavItem><span>1</span>Account Info</WizardNavItem>
                                    <WizardNavItem><span>2</span>Profile Info</WizardNavItem>
                                    <WizardNavItem><span>3</span>Billing Info</WizardNavItem>
                                    <WizardNavItem><span>4</span>Confirmation</WizardNavItem>
                                </WizardNav>

                                <WizardTab>
                                    <Form.Group as={ Row } className="align-items-center">
                                        <Col sm={ 3 } className="text-sm-right">
                                            <Form.Label className="mb-0">Username</Form.Label>
                                        </Col>
                                        <Col sm={ 9 }>
                                            <Form.Control
                                                type="text"
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid">This field is required.</Form.Control.Feedback>
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={ Row } className="align-items-center">
                                        <Col sm={ 3 } className="text-sm-right">
                                            <Form.Label className="mb-0">Password</Form.Label>
                                        </Col>
                                        <Col sm={ 9 }>
                                            <Form.Control
                                                type="password"
                                                required
                                                minLength={ 6 }
                                            />
                                            <Form.Control.Feedback type="invalid">Please enter at least 6 characters.</Form.Control.Feedback>
                                        </Col>
                                    </Form.Group>
                                </WizardTab>

                                <WizardTab>
                                    <Form.Group as={ Row } className="align-items-center">
                                        <Col sm={ 3 } className="text-sm-right">
                                            <Form.Label className="mb-0">First Name</Form.Label>
                                        </Col>
                                        <Col sm={ 9 }>
                                            <Form.Control
                                                type="text"
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid">This field is required.</Form.Control.Feedback>
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={ Row } className="align-items-center">
                                        <Col sm={ 3 } className="text-sm-right">
                                            <Form.Label className="mb-0">Last Name</Form.Label>
                                        </Col>
                                        <Col sm={ 9 }>
                                            <Form.Control
                                                type="text"
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid">This field is required.</Form.Control.Feedback>
                                        </Col>
                                    </Form.Group>
                                </WizardTab>

                                <WizardTab>
                                    <Form.Group as={ Row } className="align-items-center">
                                        <Col sm={ 3 } className="text-sm-right">
                                            <Form.Label className="mb-0">Card Number</Form.Label>
                                        </Col>
                                        <Col sm={ 9 }>
                                            <Form.Control
                                                type="text"
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid">This field is required.</Form.Control.Feedback>
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={ Row } className="align-items-center">
                                        <Col sm={ 3 } className="text-sm-right">
                                            <Form.Label className="mb-0">Expiration</Form.Label>
                                        </Col>
                                        <Col sm={ 5 }>
                                            <Form.Control
                                                as="select"
                                                required
                                            >
                                                <option>January</option>
                                                <option>February</option>
                                                <option>March</option>
                                                <option>April</option>
                                                <option>May</option>
                                                <option>June</option>
                                                <option>July</option>
                                                <option>August</option>
                                                <option>September</option>
                                                <option>October</option>
                                                <option>November</option>
                                                <option>December</option>
                                            </Form.Control>
                                            <Form.Control.Feedback type="invalid">This field is required.</Form.Control.Feedback>
                                        </Col>
                                        <Col sm={ 4 }>
                                            <Form.Control as="select" required>
                                                <option>2014</option>
                                                <option>2015</option>
                                                <option>2016</option>
                                                <option>2017</option>
                                                <option>2018</option>
                                                <option>2019</option>
                                                <option>2020</option>
                                                <option>2021</option>
                                                <option>2022</option>
                                            </Form.Control>
                                        </Col>
                                    </Form.Group>
                                </WizardTab>

                                <WizardTab>
                                    <Form.Group as={ Row } className="align-items-center">
                                        <Col sm={ 3 } className="text-sm-right">
                                            <Form.Label className="mb-0">Email</Form.Label>
                                        </Col>
                                        <Col sm={ 9 }>
                                            <Form.Control
                                                type="email"
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid">Please enter a valid email address.</Form.Control.Feedback>
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={ Row }>
                                        <Col sm={ 3 }></Col>
                                        <Col sm={ 9 }>
                                            <Form.Check
                                                id="agree4"
                                                custom
                                                required
                                                label="I agree to the terms of service"
                                            />
                                        </Col>
                                    </Form.Group>
                                </WizardTab>
                            </Wizard>
                        </Card.Body>

                        <Card.Footer id="footer4"></Card.Footer>
                    </CardWithActions>
                </Col>

                <Col xl={ 6 }>
                    <CardWithActions>
                        <Card.Header>
                            <Card.Title>Form Wizard</Card.Title>
                        </Card.Header>

                        <Card.Body>
                            <Wizard
                                className="form-horizontal p-3"
                                pagerContainer="footer5"
                                onFinish={ wizardCompleted }
                                showProgress={ true }
                                Progress={
                                    ( { curPage, total } ) => (
                                        <ProgressBar
                                            className="progress-xl m-md light"
                                            striped
                                            variant="primary"
                                            min={ 0 }
                                            max={ 100 }
                                            now={ 100 * ( curPage + 1 ) / total }
                                        />
                                    )
                                }
                            >
                                <WizardNav className="wizard-steps">
                                    <WizardNavItem><span>1</span>Account Info</WizardNavItem>
                                    <WizardNavItem><span>2</span>Profile Info</WizardNavItem>
                                    <WizardNavItem><span>3</span>Billing Info</WizardNavItem>
                                    <WizardNavItem><span>4</span>Confirmation</WizardNavItem>
                                </WizardNav>

                                <WizardTab>
                                    <Form.Group as={ Row } className="align-items-center">
                                        <Col sm={ 3 } className="text-sm-right">
                                            <Form.Label className="mb-0">Username</Form.Label>
                                        </Col>
                                        <Col sm={ 9 }>
                                            <Form.Control
                                                type="text"
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid">This field is required.</Form.Control.Feedback>
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={ Row } className="align-items-center">
                                        <Col sm={ 3 } className="text-sm-right">
                                            <Form.Label className="mb-0">Password</Form.Label>
                                        </Col>
                                        <Col sm={ 9 }>
                                            <Form.Control
                                                type="password"
                                                required
                                                minLength={ 6 }
                                            />
                                            <Form.Control.Feedback type="invalid">Please enter at least 6 characters.</Form.Control.Feedback>
                                        </Col>
                                    </Form.Group>
                                </WizardTab>

                                <WizardTab>
                                    <Form.Group as={ Row } className="align-items-center">
                                        <Col sm={ 3 } className="text-sm-right">
                                            <Form.Label className="mb-0">First Name</Form.Label>
                                        </Col>
                                        <Col sm={ 9 }>
                                            <Form.Control
                                                type="text"
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid">This field is required.</Form.Control.Feedback>
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={ Row } className="align-items-center">
                                        <Col sm={ 3 } className="text-sm-right">
                                            <Form.Label className="mb-0">Last Name</Form.Label>
                                        </Col>
                                        <Col sm={ 9 }>
                                            <Form.Control
                                                type="text"
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid">This field is required.</Form.Control.Feedback>
                                        </Col>
                                    </Form.Group>
                                </WizardTab>

                                <WizardTab>
                                    <Form.Group as={ Row } className="align-items-center">
                                        <Col sm={ 3 } className="text-sm-right">
                                            <Form.Label className="mb-0">Card Number</Form.Label>
                                        </Col>
                                        <Col sm={ 9 }>
                                            <Form.Control
                                                type="text"
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid">This field is required.</Form.Control.Feedback>
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={ Row } className="align-items-center">
                                        <Col sm={ 3 } className="text-sm-right">
                                            <Form.Label className="mb-0">Expiration</Form.Label>
                                        </Col>
                                        <Col sm={ 5 }>
                                            <Form.Control
                                                as="select"
                                                required
                                            >
                                                <option>January</option>
                                                <option>February</option>
                                                <option>March</option>
                                                <option>April</option>
                                                <option>May</option>
                                                <option>June</option>
                                                <option>July</option>
                                                <option>August</option>
                                                <option>September</option>
                                                <option>October</option>
                                                <option>November</option>
                                                <option>December</option>
                                            </Form.Control>
                                            <Form.Control.Feedback type="invalid">This field is required.</Form.Control.Feedback>
                                        </Col>
                                        <Col sm={ 4 }>
                                            <Form.Control as="select" required>
                                                <option>2014</option>
                                                <option>2015</option>
                                                <option>2016</option>
                                                <option>2017</option>
                                                <option>2018</option>
                                                <option>2019</option>
                                                <option>2020</option>
                                                <option>2021</option>
                                                <option>2022</option>
                                            </Form.Control>
                                        </Col>
                                    </Form.Group>
                                </WizardTab>

                                <WizardTab>
                                    <Form.Group as={ Row } className="align-items-center">
                                        <Col sm={ 3 } className="text-sm-right">
                                            <Form.Label className="mb-0">Email</Form.Label>
                                        </Col>
                                        <Col sm={ 9 }>
                                            <Form.Control
                                                type="email"
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid">Please enter a valid email address.</Form.Control.Feedback>
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={ Row }>
                                        <Col sm={ 3 }></Col>
                                        <Col sm={ 9 }>
                                            <Form.Check
                                                id="agree5"
                                                custom
                                                required
                                                label="I agree to the terms of service"
                                            />
                                        </Col>
                                    </Form.Group>
                                </WizardTab>
                            </Wizard>
                        </Card.Body>

                        <Card.Footer id="footer5"></Card.Footer>
                    </CardWithActions>
                </Col>
            </Row>
        </>
    )
}

export default React.memo( FormWizardsPage );