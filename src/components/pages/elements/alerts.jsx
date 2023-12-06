import React, { useEffect } from 'react';
import { Card, Row, Col, Alert, Button, Tooltip, OverlayTrigger, Popover } from 'react-bootstrap';

import Breadcrumb from '../../common/breadcrumb';

import { withCardActions, withDismissible } from '../../hoc'

const CardWithActions = withCardActions( Card );
const AlertDismissible = withDismissible( Alert );

function AlertsPage () {

    useEffect( () => {
        document.querySelector( ".content-body" ).classList.add( "card-margin" );

        return () => {
            document.querySelector( ".content-body" ).classList.remove( "card-margin" );
        };
    }, [] )

    return (
        <>
            <Breadcrumb current="Alerts" paths={ [ {
                name: 'Home',
                url: '/'
            }, {
                name: 'Elements',
                url: '/elemnts'
            } ] } />

            <Row>
                <Col lg={ 6 }>
                    <CardWithActions>
                        <Card.Header>
                            <Card.Title>Alerts</Card.Title>
                            <Card.Subtitle>Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.</Card.Subtitle>
                        </Card.Header>

                        <Card.Body>
                            <AlertDismissible variant="default">
                                <strong>Well done!</strong> You are using an awesome template! <Alert.Link>Say Hi to Porto Admin</Alert.Link>
                            </AlertDismissible>

                            <AlertDismissible variant="primary">
                                <strong>Well done!</strong> You are using an awesome template! <Alert.Link>Say Hi to Porto Admin</Alert.Link>
                            </AlertDismissible>

                            <AlertDismissible variant="success">
                                <strong>Well done!</strong> You are using an awesome template! <Alert.Link>Say Hi to Porto Admin</Alert.Link>
                            </AlertDismissible>

                            <AlertDismissible variant="info">
                                <strong>Well done!</strong> You are using an awesome template! <Alert.Link>Say Hi to Porto Admin</Alert.Link>
                            </AlertDismissible>

                            <AlertDismissible variant="warning">
                                <strong>Well done!</strong> You are using an awesome template! <Alert.Link>Say Hi to Porto Admin</Alert.Link>
                            </AlertDismissible>

                            <AlertDismissible variant="danger">
                                <strong>Well done!</strong> You are using an awesome template! <Alert.Link>Say Hi to Porto Admin</Alert.Link>
                            </AlertDismissible>

                            <AlertDismissible variant="dark">
                                <strong>Well done!</strong> You are using an awesome template! <Alert.Link>Say Hi to Porto Admin</Alert.Link>
                            </AlertDismissible>

                            <AlertDismissible variant="info" className="nomargin">
                                <h4>Announcement!</h4>
                                <p>We are extermely happy to announce our first admin. We dedicated a lot of effort to bring you tons of features, easily customization for an accessible price! Do you still have any doubts that this is the best choice?</p>
                                <p>
                                    <Button variant="info" className="my-1 mr-1">Yes, it's the best choice</Button>
                                    <Button variant="default" className="my-1">Not convinced yet</Button>
                                </p>
                            </AlertDismissible>
                        </Card.Body>
                    </CardWithActions>
                </Col>

                <Col lg={ 6 }>
                    <CardWithActions>
                        <Card.Header>
                            <Card.Title>Tooltips</Card.Title>
                            <Card.Subtitle>Easily show tooltiops with a few html attributes.</Card.Subtitle>
                        </Card.Header>

                        <Card.Body>
                            <OverlayTrigger
                                placement={ "top" }
                                overlay={ <Tooltip>Tooltip on top.</Tooltip> }
                            >
                                <Button variant="primary m-xs mr-1">Top</Button>
                            </OverlayTrigger>

                            <OverlayTrigger
                                placement={ "right" }
                                overlay={ <Tooltip>Tooltip on right.</Tooltip> }
                            >
                                <Button variant="primary m-xs mr-1">Right</Button>
                            </OverlayTrigger>

                            <OverlayTrigger
                                placement={ "left" }
                                overlay={ <Tooltip>Tooltip on left.</Tooltip> }
                            >
                                <Button variant="primary m-xs mr-1">Left</Button>
                            </OverlayTrigger>

                            <OverlayTrigger
                                placement={ "bottom" }
                                overlay={ <Tooltip>Tooltip on bottom.</Tooltip> }
                            >
                                <Button variant="primary m-xs mr-1">Bottom</Button>
                            </OverlayTrigger>

                            <OverlayTrigger
                                placement={ "top" }
                                overlay={ <Tooltip>Tooltip Link.</Tooltip> }
                            >
                                <a href="#link" onClick={ e => e.preventDefault() }>Link</a>
                            </OverlayTrigger>

                        </Card.Body>
                    </CardWithActions>

                    <CardWithActions>
                        <Card.Header>
                            <Card.Title>Popovers</Card.Title>
                            <Card.Subtitle>Add small overlays of content, like those on the iPad, to any element for housing secondary information.</Card.Subtitle>
                        </Card.Header>

                        <Card.Body>
                            <OverlayTrigger
                                trigger="click"
                                placement="top"
                                overlay={
                                    <Popover>
                                        <h3 className="popover-header">This one have a title</h3>
                                        <div className="popover-body">Example of top popover, click again to close :)</div>
                                    </Popover>
                                }
                            >
                                <Button variant="primary" className="m-xs mr-1">Top</Button>
                            </OverlayTrigger>

                            <OverlayTrigger
                                trigger="click"
                                placement="right"
                                overlay={
                                    <Popover>
                                        <div className="popover-body">Example of right popover, click again to close :)</div>
                                    </Popover>
                                }
                            >
                                <Button variant="primary" className="m-xs mr-1">Right</Button>
                            </OverlayTrigger>

                            <OverlayTrigger
                                trigger="click"
                                placement="left"
                                overlay={
                                    <Popover>
                                        <div className="popover-body">Example of left popover, click again to close :)</div>
                                    </Popover>
                                }
                            >
                                <Button variant="primary" className="m-xs mr-1">Left</Button>
                            </OverlayTrigger>

                            <OverlayTrigger
                                trigger="click"
                                placement="bottom"
                                overlay={
                                    <Popover>
                                        <div className="popover-body">Example of bottom popover, click again to close :)</div>
                                    </Popover>
                                }
                            >
                                <Button variant="primary" className="m-xs mr-1">Bottom</Button>
                            </OverlayTrigger>
                        </Card.Body>
                    </CardWithActions>
                </Col>
            </Row>
        </>
    )
}

export default React.memo( AlertsPage );