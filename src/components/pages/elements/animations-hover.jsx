import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

import Breadcrumb from '../../common/breadcrumb';

import { withCardActions } from '../../hoc';

const CardWithActions = withCardActions( Card );

function HoverAnimationsPage () {
    return (
        <>
            <Breadcrumb current="On Hover Animations" paths={ [ {
                name: "Home",
                url: "/"
            }, {
                name: "Elements",
                url: "/elements"
            } ] } />

            <Row>
                <Col md={ 12 }>
                    <CardWithActions>
                        <Card.Header>
                            <Card.Title>2D Transitions</Card.Title>
                        </Card.Header>

                        <Card.Body>
                            <span className="hvr-grow">Grow</span>
                            <span className="hvr-shrink">Shrink</span>
                            <span className="hvr-pulse">Pulse</span>
                            <span className="hvr-pulse-grow">Pulse Grow</span>
                            <span className="hvr-pulse-shrink">Pulse Shrink</span>
                            <span className="hvr-push">Push</span>
                            <span className="hvr-pop">Pop</span>
                            <span className="hvr-bounce-in">Bounce In</span>
                            <span className="hvr-bounce-out">Bounce Out</span>
                            <span className="hvr-rotate">Rotate</span>
                            <span className="hvr-grow-rotate">Grow Rotate</span>
                            <span className="hvr-float">Float</span>
                            <span className="hvr-sink">Sink</span>
                            <span className="hvr-bob">Bob</span>
                            <span className="hvr-hang">Hang</span>
                            <span className="hvr-skew">Skew</span>
                            <span className="hvr-skew-forward">Skew Forward</span>
                            <span className="hvr-skew-backward">Skew Backward</span>
                            <span className="hvr-wobble-horizontal">Wobble Horizontal</span>
                            <span className="hvr-wobble-vertical">Wobble Vertical</span>
                            <span className="hvr-wobble-to-bottom-right">Wobble To Bottom Right</span>
                            <span className="hvr-wobble-to-top-right">Wobble To Top Right</span>
                            <span className="hvr-wobble-top">Wobble Top</span>
                            <span className="hvr-wobble-bottom">Wobble Bottom</span>
                            <span className="hvr-wobble-skew">Wobble Skew</span>
                            <span className="hvr-buzz">Buzz</span>
                            <span className="hvr-buzz-out">Buzz Out</span>
                        </Card.Body>
                    </CardWithActions>
                </Col>
            </Row>

            <Row>
                <Col md={ 12 }>
                    <CardWithActions>
                        <Card.Header>
                            <Card.Title>Background Transitions</Card.Title>
                        </Card.Header>

                        <Card.Body>
                            <span className="hvr-fade">Fade</span>
                            <span className="hvr-back-pulse">Back Pulse</span>
                            <span className="hvr-sweep-to-right">Sweep To Right</span>
                            <span className="hvr-sweep-to-left">Sweep To Left</span>
                            <span className="hvr-sweep-to-bottom">Sweep To Bottom</span>
                            <span className="hvr-sweep-to-top">Sweep To Top</span>
                            <span className="hvr-bounce-to-right">Bounce To Right</span>
                            <span className="hvr-bounce-to-left">Bounce To Left</span>
                            <span className="hvr-bounce-to-bottom">Bounce To Bottom</span>
                            <span className="hvr-bounce-to-top">Bounce To Top</span>
                            <span className="hvr-radial-out">Radial Out</span>
                            <span className="hvr-radial-in">Radial In</span>
                            <span className="hvr-rectangle-in">Rectangle In</span>
                            <span className="hvr-rectangle-out">Rectangle Out</span>
                            <span className="hvr-shutter-in-horizontal">Shutter In Horizontal</span>
                            <span className="hvr-shutter-out-horizontal">Shutter Out Horizontal</span>
                            <span className="hvr-shutter-in-vertical">Shutter In Vertical</span>
                            <span className="hvr-shutter-out-vertical">Shutter Out Vertical</span>
                        </Card.Body>
                    </CardWithActions>
                </Col>
            </Row>

            <Row>
                <Col md={ 12 }>
                    <CardWithActions>
                        <Card.Header>
                            <Card.Title>Icons</Card.Title>
                        </Card.Header>

                        <Card.Body>
                            <span className="hvr-icon-back"><i className="fas fa-check hvr-icon"></i> Icon Back</span>
                            <span className="hvr-icon-forward">Icon Forward <i className="fas fa-check hvr-icon"></i></span>
                            <span className="hvr-icon-down">Icon Down <i className="fas fa-check hvr-icon"></i></span>
                            <span className="hvr-icon-up">Icon Up <i className="fas fa-check hvr-icon"></i></span>
                            <span className="hvr-icon-spin">Icon Spin <i className="fas fa-check hvr-icon"></i></span>
                            <span className="hvr-icon-drop">Icon Drop <i className="fas fa-check hvr-icon"></i></span>
                            <span className="hvr-icon-fade">Icon Fade <i className="fas fa-check hvr-icon"></i></span>
                            <span className="hvr-icon-float-away">Icon Float Away <i className="fas fa-check hvr-icon"></i></span>
                            <span className="hvr-icon-sink-away">Icon Sink Away <i className="fas fa-check hvr-icon"></i></span>
                            <span className="hvr-icon-grow">Icon Grow <i className="fas fa-check hvr-icon"></i></span>
                            <span className="hvr-icon-shrink">Icon Shrink <i className="fas fa-check hvr-icon"></i></span>
                            <span className="hvr-icon-pulse">Icon Pulse <i className="fas fa-check hvr-icon"></i></span>
                            <span className="hvr-icon-pulse-grow">Icon Pulse Grow <i className="fas fa-check hvr-icon"></i></span>
                            <span className="hvr-icon-pulse-shrink">Icon Pulse Shrink <i className="fas fa-check hvr-icon"></i></span>
                            <span className="hvr-icon-push">Icon Push <i className="fas fa-check hvr-icon"></i></span>
                            <span className="hvr-icon-pop">Icon Pop <i className="fas fa-check hvr-icon"></i></span>
                            <span className="hvr-icon-bounce">Icon Bounce <i className="fas fa-check hvr-icon"></i></span>
                            <span className="hvr-icon-rotate">Icon Rotate <i className="fas fa-check hvr-icon"></i></span>
                            <span className="hvr-icon-grow-rotate">Icon Grow Rotate <i className="fas fa-check hvr-icon"></i></span>
                            <span className="hvr-icon-float">Icon Float <i className="fas fa-check hvr-icon"></i></span>
                            <span className="hvr-icon-sink">Icon Sink <i className="fas fa-check hvr-icon"></i></span>
                            <span className="hvr-icon-bob">Icon Bob <i className="fas fa-check hvr-icon"></i></span>
                            <span className="hvr-icon-hang">Icon Hang <i className="fas fa-check hvr-icon"></i></span>
                            <span className="hvr-icon-wobble-horizontal">Icon Wobble Horizontal <i className="fas fa-check hvr-icon"></i></span>
                            <span className="hvr-icon-wobble-vertical">Icon Wobble Vertical <i className="fas fa-check hvr-icon"></i></span>
                            <span className="hvr-icon-buzz">Icon Buzz <i className="fas fa-check hvr-icon"></i></span>
                            <span className="hvr-icon-buzz-out">Icon Buzz Out <i className="fas fa-check hvr-icon"></i></span>
                        </Card.Body>
                    </CardWithActions>
                </Col>
            </Row>

            <Row>
                <Col md={ 12 }>
                    <CardWithActions>
                        <Card.Header>
                            <Card.Title>Border Transitions</Card.Title>
                        </Card.Header>

                        <Card.Body>
                            <span className="hvr-border-fade">Border Fade</span>
                            <span className="hvr-hollow">Hollow</span>
                            <span className="hvr-trim">Trim</span>
                            <span className="hvr-ripple-out">Ripple Out</span>
                            <span className="hvr-ripple-in">Ripple In</span>
                            <span className="hvr-outline-out">Outline Out</span>
                            <span className="hvr-outline-in">Outline In</span>
                            <span className="hvr-round-corners">Round Corners</span>
                            <span className="hvr-underline-from-left">Underline From Left</span>
                            <span className="hvr-underline-from-center">Underline From Center</span>
                            <span className="hvr-underline-from-right">Underline From Right</span>
                            <span className="hvr-reveal">Reveal</span>
                            <span className="hvr-underline-reveal">Underline Reveal</span>
                            <span className="hvr-overline-reveal">Overline Reveal</span>
                            <span className="hvr-overline-from-left">Overline From Left</span>
                            <span className="hvr-overline-from-center">Overline From Center</span>
                            <span className="hvr-overline-from-right">Overline From Right</span>
                        </Card.Body>
                    </CardWithActions>
                </Col>
            </Row>

            <Row>
                <Col md={ 12 }>
                    <CardWithActions>
                        <Card.Header>
                            <Card.Title>Shadow and Glow Transitions</Card.Title>
                        </Card.Header>

                        <Card.Body>
                            <span className="hvr-shadow">Shadow</span>
                            <span className="hvr-grow-shadow">Grow Shadow</span>
                            <span className="hvr-float-shadow">Float Shadow</span>
                            <span className="hvr-glow">Glow</span>
                            <span className="hvr-shadow-radial">Shadow Radial</span>
                            <span className="hvr-box-shadow-outset">Box Shadow Outset</span>
                            <span className="hvr-box-shadow-inset">Box Shadow Inset</span>
                        </Card.Body>
                    </CardWithActions>
                </Col>
            </Row>

            <Row>
                <Col md={ 12 }>
                    <CardWithActions>
                        <Card.Header>
                            <Card.Title>Speech Bubbles</Card.Title>
                        </Card.Header>

                        <Card.Body>
                            <span className="hvr-bubble-top">Bubble Top</span>
                            <span className="hvr-bubble-right">Bubble Right</span>
                            <span className="hvr-bubble-bottom">Bubble Bottom</span>
                            <span className="hvr-bubble-left">Bubble Left</span>
                            <span className="hvr-bubble-float-top">Bubble Float Top</span>
                            <span className="hvr-bubble-float-right">Bubble Float Right</span>
                            <span className="hvr-bubble-float-bottom">Bubble Float Bottom</span>
                            <span className="hvr-bubble-float-left">Bubble Float Left</span>
                        </Card.Body>
                    </CardWithActions>
                </Col>
            </Row>

            <Row>
                <Col md={ 12 }>
                    <CardWithActions>
                        <Card.Header>
                            <Card.Title>Curls</Card.Title>
                        </Card.Header>

                        <Card.Body>
                            <span className="hvr-curl-top-left">Curl Top Left</span>
                            <span className="hvr-curl-top-right">Curl Top Right</span>
                            <span className="hvr-curl-bottom-right">Curl Bottom Right</span>
                            <span className="hvr-curl-bottom-left">Curl Bottom Left</span>
                        </Card.Body>
                    </CardWithActions>
                </Col>
            </Row>
        </>
    )
}

export default React.memo( HoverAnimationsPage );