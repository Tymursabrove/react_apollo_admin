import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import Reveal from 'react-awesome-reveal';

import Breadcrumb from '../../common/breadcrumb';

import { withCardActions } from '../../hoc';

import { bounce, flash, pulse, rubberBand, shake, headShake, swing, tada, wobble, jello, bounceIn, bounceInDown, bounceInLeft, bounceInRight, bounceInUp, bounceOut, bounceOutDown, bounceOutLeft, bounceOutRight, bounceOutUp, fadeIn, fadeInDown, fadeInDownBig, fadeInLeft, fadeInLeftBig, fadeInRight, fadeInRightBig, fadeInUp, fadeInUpBig, fadeOut, fadeOutDown, fadeOutDownBig, fadeOutLeft, fadeOutLeftBig, fadeOutRight, fadeOutRightBig, fadeOutUp, fadeOutUpBig, flipInX, flipInY, flipOutX, flipOutY, lightSpeedIn, lightSpeedOut, rotateIn, rotateInDownLeft, rotateInDownRight, rotateInUpLeft, rotateInUpRight, rotateOut, rotateOutDownLeft, rotateOutDownRight, rotateOutUpLeft, rotateOutUpRight, hinge, rollIn, rollOut, zoomIn, zoomInDown, zoomInLeft, zoomInRight, zoomInUp, zoomOut, zoomOutDown, zoomOutLeft, zoomOutRight, zoomOutUp, slideInLeft, slideInRight, slideInDown, slideInUp, slideOutDown, slideOutLeft, slideOutRight, slideOutUp } from '../../../utils/data/keyframes';

const CardWithActions = withCardActions( Card );

function AppearAnimationsPage () {
    return (
        <>
            <Breadcrumb current="On Appear Animations" paths={ [ {
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
                            <Card.Title>Animation Effects</Card.Title>
                            <Card.Subtitle>Add animations to any element by wrapping the content <code>react-awesome-reveal</code> component as following.</Card.Subtitle>
                        </Card.Header>

                        <Card.Body>
                            <Row>
                                <Col lg={ 2 }>
                                    <Reveal keyframes={ bounce } fraction={ 0.5 } duration={ 1000 } triggerOnce>
                                        <img
                                            className="img-fluid"
                                            src={ `${ process.env.PUBLIC_URL }/assets/images/device.png` }
                                            alt="device"
                                            width="600"
                                            height="422"
                                        />
                                    </Reveal>
                                </Col>
                                <Col lg={ 10 }>
                                    <h4>bounce</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc <a href="#vehicula" onClick={ e => e.preventDefault() }>vehicula</a> lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu libero ligula. Fusce eget metus lorem, ac viverra leo. Nullam convallis, arcu vel pellentesque sodales, nisi est varius diam, ac ultrices sem ante quis sem. Proin ultricies volutpat sapien, nec scelerisque ligula mollis lobortis.</p>
                                    <hr className="tall" />
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={ 2 }>
                                    <Reveal keyframes={ flash } fraction={ 0.5 } duration={ 1000 } triggerOnce>
                                        <img
                                            className="img-fluid"
                                            src={ `${ process.env.PUBLIC_URL }/assets/images/device.png` }
                                            alt="device"
                                            width="600"
                                            height="422"
                                        />
                                    </Reveal>
                                </Col>
                                <Col lg={ 10 }>
                                    <h4>flash</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc <a href="#vehicula" onClick={ e => e.preventDefault() }>vehicula</a> lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu libero ligula. Fusce eget metus lorem, ac viverra leo. Nullam convallis, arcu vel pellentesque sodales, nisi est varius diam, ac ultrices sem ante quis sem. Proin ultricies volutpat sapien, nec scelerisque ligula mollis lobortis.</p>
                                    <hr className="tall" />
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={ 2 }>
                                    <Reveal keyframes={ pulse } fraction={ 0.5 } duration={ 1000 } triggerOnce>
                                        <img
                                            className="img-fluid"
                                            src={ `${ process.env.PUBLIC_URL }/assets/images/device.png` }
                                            alt="device"
                                            width="600"
                                            height="422"
                                        />
                                    </Reveal>
                                </Col>
                                <Col lg={ 10 }>
                                    <h4>pulse</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc <a href="#vehicula" onClick={ e => e.preventDefault() }>vehicula</a> lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu libero ligula. Fusce eget metus lorem, ac viverra leo. Nullam convallis, arcu vel pellentesque sodales, nisi est varius diam, ac ultrices sem ante quis sem. Proin ultricies volutpat sapien, nec scelerisque ligula mollis lobortis.</p>
                                    <hr className="tall" />
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={ 2 }>
                                    <Reveal keyframes={ rubberBand } fraction={ 0.5 } duration={ 1000 } triggerOnce>
                                        <img
                                            className="img-fluid"
                                            src={ `${ process.env.PUBLIC_URL }/assets/images/device.png` }
                                            alt="device"
                                            width="600"
                                            height="422"
                                        />
                                    </Reveal>
                                </Col>
                                <Col lg={ 10 }>
                                    <h4>rubberBand</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc <a href="#vehicula" onClick={ e => e.preventDefault() }>vehicula</a> lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu libero ligula. Fusce eget metus lorem, ac viverra leo. Nullam convallis, arcu vel pellentesque sodales, nisi est varius diam, ac ultrices sem ante quis sem. Proin ultricies volutpat sapien, nec scelerisque ligula mollis lobortis.</p>
                                    <hr className="tall" />
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={ 2 }>
                                    <Reveal keyframes={ shake } fraction={ 0.5 } duration={ 1000 } triggerOnce>
                                        <img
                                            className="img-fluid"
                                            src={ `${ process.env.PUBLIC_URL }/assets/images/device.png` }
                                            alt="device"
                                            width="600"
                                            height="422"
                                        />
                                    </Reveal>
                                </Col>
                                <Col lg={ 10 }>
                                    <h4>shake</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc <a href="#vehicula" onClick={ e => e.preventDefault() }>vehicula</a> lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu libero ligula. Fusce eget metus lorem, ac viverra leo. Nullam convallis, arcu vel pellentesque sodales, nisi est varius diam, ac ultrices sem ante quis sem. Proin ultricies volutpat sapien, nec scelerisque ligula mollis lobortis.</p>
                                    <hr className="tall" />
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={ 2 }>
                                    <Reveal keyframes={ headShake } fraction={ 0.5 } duration={ 1000 } triggerOnce>
                                        <img
                                            className="img-fluid"
                                            src={ `${ process.env.PUBLIC_URL }/assets/images/device.png` }
                                            alt="device"
                                            width="600"
                                            height="422"
                                        />
                                    </Reveal>
                                </Col>
                                <Col lg={ 10 }>
                                    <h4>headShake</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc <a href="#vehicula" onClick={ e => e.preventDefault() }>vehicula</a> lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu libero ligula. Fusce eget metus lorem, ac viverra leo. Nullam convallis, arcu vel pellentesque sodales, nisi est varius diam, ac ultrices sem ante quis sem. Proin ultricies volutpat sapien, nec scelerisque ligula mollis lobortis.</p>
                                    <hr className="tall" />
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={ 2 }>
                                    <Reveal keyframes={ swing } fraction={ 0.5 } duration={ 1000 } triggerOnce>
                                        <img
                                            className="img-fluid"
                                            src={ `${ process.env.PUBLIC_URL }/assets/images/device.png` }
                                            alt="device"
                                            width="600"
                                            height="422"
                                        />
                                    </Reveal>
                                </Col>
                                <Col lg={ 10 }>
                                    <h4>swing</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc <a href="#vehicula" onClick={ e => e.preventDefault() }>vehicula</a> lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu libero ligula. Fusce eget metus lorem, ac viverra leo. Nullam convallis, arcu vel pellentesque sodales, nisi est varius diam, ac ultrices sem ante quis sem. Proin ultricies volutpat sapien, nec scelerisque ligula mollis lobortis.</p>
                                    <hr className="tall" />
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={ 2 }>
                                    <Reveal keyframes={ tada } fraction={ 0.5 } duration={ 1000 } triggerOnce>
                                        <img
                                            className="img-fluid"
                                            src={ `${ process.env.PUBLIC_URL }/assets/images/device.png` }
                                            alt="device"
                                            width="600"
                                            height="422"
                                        />
                                    </Reveal>
                                </Col>
                                <Col lg={ 10 }>
                                    <h4>tada</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc <a href="#vehicula" onClick={ e => e.preventDefault() }>vehicula</a> lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu libero ligula. Fusce eget metus lorem, ac viverra leo. Nullam convallis, arcu vel pellentesque sodales, nisi est varius diam, ac ultrices sem ante quis sem. Proin ultricies volutpat sapien, nec scelerisque ligula mollis lobortis.</p>
                                    <hr className="tall" />
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={ 2 }>
                                    <Reveal keyframes={ wobble } fraction={ 0.5 } duration={ 1000 } triggerOnce>
                                        <img
                                            className="img-fluid"
                                            src={ `${ process.env.PUBLIC_URL }/assets/images/device.png` }
                                            alt="device"
                                            width="600"
                                            height="422"
                                        />
                                    </Reveal>
                                </Col>
                                <Col lg={ 10 }>
                                    <h4>wobble</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc <a href="#vehicula" onClick={ e => e.preventDefault() }>vehicula</a> lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu libero ligula. Fusce eget metus lorem, ac viverra leo. Nullam convallis, arcu vel pellentesque sodales, nisi est varius diam, ac ultrices sem ante quis sem. Proin ultricies volutpat sapien, nec scelerisque ligula mollis lobortis.</p>
                                    <hr className="tall" />
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={ 2 }>
                                    <Reveal keyframes={ jello } fraction={ 0.5 } duration={ 1000 } triggerOnce>
                                        <img
                                            className="img-fluid"
                                            src={ `${ process.env.PUBLIC_URL }/assets/images/device.png` }
                                            alt="device"
                                            width="600"
                                            height="422"
                                        />
                                    </Reveal>
                                </Col>
                                <Col lg={ 10 }>
                                    <h4>jello</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc <a href="#vehicula" onClick={ e => e.preventDefault() }>vehicula</a> lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu libero ligula. Fusce eget metus lorem, ac viverra leo. Nullam convallis, arcu vel pellentesque sodales, nisi est varius diam, ac ultrices sem ante quis sem. Proin ultricies volutpat sapien, nec scelerisque ligula mollis lobortis.</p>
                                    <hr className="tall" />
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={ 2 }>
                                    <Reveal keyframes={ bounceIn } fraction={ 0.5 } duration={ 1000 } triggerOnce>
                                        <img
                                            className="img-fluid"
                                            src={ `${ process.env.PUBLIC_URL }/assets/images/device.png` }
                                            alt="device"
                                            width="600"
                                            height="422"
                                        />
                                    </Reveal>
                                </Col>
                                <Col lg={ 10 }>
                                    <h4>bounceIn</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc <a href="#vehicula" onClick={ e => e.preventDefault() }>vehicula</a> lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu libero ligula. Fusce eget metus lorem, ac viverra leo. Nullam convallis, arcu vel pellentesque sodales, nisi est varius diam, ac ultrices sem ante quis sem. Proin ultricies volutpat sapien, nec scelerisque ligula mollis lobortis.</p>
                                    <hr className="tall" />
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={ 2 }>
                                    <Reveal keyframes={ bounceInDown } fraction={ 0.5 } duration={ 1000 } triggerOnce>
                                        <img
                                            className="img-fluid"
                                            src={ `${ process.env.PUBLIC_URL }/assets/images/device.png` }
                                            alt="device"
                                            width="600"
                                            height="422"
                                        />
                                    </Reveal>
                                </Col>
                                <Col lg={ 10 }>
                                    <h4>bounceInDown</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc <a href="#vehicula" onClick={ e => e.preventDefault() }>vehicula</a> lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu libero ligula. Fusce eget metus lorem, ac viverra leo. Nullam convallis, arcu vel pellentesque sodales, nisi est varius diam, ac ultrices sem ante quis sem. Proin ultricies volutpat sapien, nec scelerisque ligula mollis lobortis.</p>
                                    <hr className="tall" />
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={ 2 }>
                                    <Reveal keyframes={ bounceInLeft } fraction={ 0.5 } duration={ 1000 } triggerOnce>
                                        <img
                                            className="img-fluid"
                                            src={ `${ process.env.PUBLIC_URL }/assets/images/device.png` }
                                            alt="device"
                                            width="600"
                                            height="422"
                                        />
                                    </Reveal>
                                </Col>
                                <Col lg={ 10 }>
                                    <h4>bounceInLeft</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc <a href="#vehicula" onClick={ e => e.preventDefault() }>vehicula</a> lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu libero ligula. Fusce eget metus lorem, ac viverra leo. Nullam convallis, arcu vel pellentesque sodales, nisi est varius diam, ac ultrices sem ante quis sem. Proin ultricies volutpat sapien, nec scelerisque ligula mollis lobortis.</p>
                                    <hr className="tall" />
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={ 2 }>
                                    <Reveal keyframes={ bounceInRight } fraction={ 0.5 } duration={ 1000 } triggerOnce>
                                        <img
                                            className="img-fluid"
                                            src={ `${ process.env.PUBLIC_URL }/assets/images/device.png` }
                                            alt="device"
                                            width="600"
                                            height="422"
                                        />
                                    </Reveal>
                                </Col>
                                <Col lg={ 10 }>
                                    <h4>bounceInRight</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc <a href="#vehicula" onClick={ e => e.preventDefault() }>vehicula</a> lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu libero ligula. Fusce eget metus lorem, ac viverra leo. Nullam convallis, arcu vel pellentesque sodales, nisi est varius diam, ac ultrices sem ante quis sem. Proin ultricies volutpat sapien, nec scelerisque ligula mollis lobortis.</p>
                                    <hr className="tall" />
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={ 2 }>
                                    <Reveal keyframes={ bounceInUp } fraction={ 0.5 } duration={ 1000 } triggerOnce>
                                        <img
                                            className="img-fluid"
                                            src={ `${ process.env.PUBLIC_URL }/assets/images/device.png` }
                                            alt="device"
                                            width="600"
                                            height="422"
                                        />
                                    </Reveal>
                                </Col>
                                <Col lg={ 10 }>
                                    <h4>bounceInUp</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc <a href="#vehicula" onClick={ e => e.preventDefault() }>vehicula</a> lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu libero ligula. Fusce eget metus lorem, ac viverra leo. Nullam convallis, arcu vel pellentesque sodales, nisi est varius diam, ac ultrices sem ante quis sem. Proin ultricies volutpat sapien, nec scelerisque ligula mollis lobortis.</p>
                                    <hr className="tall" />
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={ 2 }>
                                    <Reveal keyframes={ bounceOut } fraction={ 0.5 } duration={ 1000 } triggerOnce>
                                        <img
                                            className="img-fluid"
                                            src={ `${ process.env.PUBLIC_URL }/assets/images/device.png` }
                                            alt="device"
                                            width="600"
                                            height="422"
                                        />
                                    </Reveal>
                                </Col>
                                <Col lg={ 10 }>
                                    <h4>bounceOut</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc <a href="#vehicula" onClick={ e => e.preventDefault() }>vehicula</a> lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu libero ligula. Fusce eget metus lorem, ac viverra leo. Nullam convallis, arcu vel pellentesque sodales, nisi est varius diam, ac ultrices sem ante quis sem. Proin ultricies volutpat sapien, nec scelerisque ligula mollis lobortis.</p>
                                    <hr className="tall" />
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={ 2 }>
                                    <Reveal keyframes={ bounceOutDown } fraction={ 0.5 } duration={ 1000 } triggerOnce>
                                        <img
                                            className="img-fluid"
                                            src={ `${ process.env.PUBLIC_URL }/assets/images/device.png` }
                                            alt="device"
                                            width="600"
                                            height="422"
                                        />
                                    </Reveal>
                                </Col>
                                <Col lg={ 10 }>
                                    <h4>bounceOutDown</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc <a href="#vehicula" onClick={ e => e.preventDefault() }>vehicula</a> lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu libero ligula. Fusce eget metus lorem, ac viverra leo. Nullam convallis, arcu vel pellentesque sodales, nisi est varius diam, ac ultrices sem ante quis sem. Proin ultricies volutpat sapien, nec scelerisque ligula mollis lobortis.</p>
                                    <hr className="tall" />
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={ 2 }>
                                    <Reveal keyframes={ bounceOutLeft } fraction={ 0.5 } duration={ 1000 } triggerOnce>
                                        <img
                                            className="img-fluid"
                                            src={ `${ process.env.PUBLIC_URL }/assets/images/device.png` }
                                            alt="device"
                                            width="600"
                                            height="422"
                                        />
                                    </Reveal>
                                </Col>
                                <Col lg={ 10 }>
                                    <h4>bounceOutLeft</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc <a href="#vehicula" onClick={ e => e.preventDefault() }>vehicula</a> lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu libero ligula. Fusce eget metus lorem, ac viverra leo. Nullam convallis, arcu vel pellentesque sodales, nisi est varius diam, ac ultrices sem ante quis sem. Proin ultricies volutpat sapien, nec scelerisque ligula mollis lobortis.</p>
                                    <hr className="tall" />
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={ 2 }>
                                    <Reveal keyframes={ bounceOutRight } fraction={ 0.5 } duration={ 1000 } triggerOnce>
                                        <img
                                            className="img-fluid"
                                            src={ `${ process.env.PUBLIC_URL }/assets/images/device.png` }
                                            alt="device"
                                            width="600"
                                            height="422"
                                        />
                                    </Reveal>
                                </Col>
                                <Col lg={ 10 }>
                                    <h4>bounceOutRight</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc <a href="#vehicula" onClick={ e => e.preventDefault() }>vehicula</a> lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu libero ligula. Fusce eget metus lorem, ac viverra leo. Nullam convallis, arcu vel pellentesque sodales, nisi est varius diam, ac ultrices sem ante quis sem. Proin ultricies volutpat sapien, nec scelerisque ligula mollis lobortis.</p>
                                    <hr className="tall" />
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={ 2 }>
                                    <Reveal keyframes={ bounceOutUp } fraction={ 0.5 } duration={ 1000 } triggerOnce>
                                        <img
                                            className="img-fluid"
                                            src={ `${ process.env.PUBLIC_URL }/assets/images/device.png` }
                                            alt="device"
                                            width="600"
                                            height="422"
                                        />
                                    </Reveal>
                                </Col>
                                <Col lg={ 10 }>
                                    <h4>bounceOutUp</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc <a href="#vehicula" onClick={ e => e.preventDefault() }>vehicula</a> lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu libero ligula. Fusce eget metus lorem, ac viverra leo. Nullam convallis, arcu vel pellentesque sodales, nisi est varius diam, ac ultrices sem ante quis sem. Proin ultricies volutpat sapien, nec scelerisque ligula mollis lobortis.</p>
                                    <hr className="tall" />
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={ 2 }>
                                    <Reveal keyframes={ fadeIn } fraction={ 0.5 } duration={ 1000 } triggerOnce>
                                        <img
                                            className="img-fluid"
                                            src={ `${ process.env.PUBLIC_URL }/assets/images/device.png` }
                                            alt="device"
                                            width="600"
                                            height="422"
                                        />
                                    </Reveal>
                                </Col>
                                <Col lg={ 10 }>
                                    <h4>fadeIn</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc <a href="#vehicula" onClick={ e => e.preventDefault() }>vehicula</a> lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu libero ligula. Fusce eget metus lorem, ac viverra leo. Nullam convallis, arcu vel pellentesque sodales, nisi est varius diam, ac ultrices sem ante quis sem. Proin ultricies volutpat sapien, nec scelerisque ligula mollis lobortis.</p>
                                    <hr className="tall" />
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={ 2 }>
                                    <Reveal keyframes={ fadeInDown } fraction={ 0.5 } duration={ 1000 } triggerOnce>
                                        <img
                                            className="img-fluid"
                                            src={ `${ process.env.PUBLIC_URL }/assets/images/device.png` }
                                            alt="device"
                                            width="600"
                                            height="422"
                                        />
                                    </Reveal>
                                </Col>
                                <Col lg={ 10 }>
                                    <h4>fadeInDown</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc <a href="#vehicula" onClick={ e => e.preventDefault() }>vehicula</a> lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu libero ligula. Fusce eget metus lorem, ac viverra leo. Nullam convallis, arcu vel pellentesque sodales, nisi est varius diam, ac ultrices sem ante quis sem. Proin ultricies volutpat sapien, nec scelerisque ligula mollis lobortis.</p>
                                    <hr className="tall" />
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={ 2 }>
                                    <Reveal keyframes={ fadeInDownBig } fraction={ 0.5 } duration={ 1000 } triggerOnce>
                                        <img
                                            className="img-fluid"
                                            src={ `${ process.env.PUBLIC_URL }/assets/images/device.png` }
                                            alt="device"
                                            width="600"
                                            height="422"
                                        />
                                    </Reveal>
                                </Col>
                                <Col lg={ 10 }>
                                    <h4>fadeInDownBig</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc <a href="#vehicula" onClick={ e => e.preventDefault() }>vehicula</a> lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu libero ligula. Fusce eget metus lorem, ac viverra leo. Nullam convallis, arcu vel pellentesque sodales, nisi est varius diam, ac ultrices sem ante quis sem. Proin ultricies volutpat sapien, nec scelerisque ligula mollis lobortis.</p>
                                    <hr className="tall" />
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={ 2 }>
                                    <Reveal keyframes={ fadeInLeft } fraction={ 0.5 } duration={ 1000 } triggerOnce>
                                        <img
                                            className="img-fluid"
                                            src={ `${ process.env.PUBLIC_URL }/assets/images/device.png` }
                                            alt="device"
                                            width="600"
                                            height="422"
                                        />
                                    </Reveal>
                                </Col>
                                <Col lg={ 10 }>
                                    <h4>fadeInLeft</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc <a href="#vehicula" onClick={ e => e.preventDefault() }>vehicula</a> lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu libero ligula. Fusce eget metus lorem, ac viverra leo. Nullam convallis, arcu vel pellentesque sodales, nisi est varius diam, ac ultrices sem ante quis sem. Proin ultricies volutpat sapien, nec scelerisque ligula mollis lobortis.</p>
                                    <hr className="tall" />
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={ 2 }>
                                    <Reveal keyframes={ fadeInLeftBig } fraction={ 0.5 } duration={ 1000 } triggerOnce>
                                        <img
                                            className="img-fluid"
                                            src={ `${ process.env.PUBLIC_URL }/assets/images/device.png` }
                                            alt="device"
                                            width="600"
                                            height="422"
                                        />
                                    </Reveal>
                                </Col>
                                <Col lg={ 10 }>
                                    <h4>fadeInLeftBig</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc <a href="#vehicula" onClick={ e => e.preventDefault() }>vehicula</a> lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu libero ligula. Fusce eget metus lorem, ac viverra leo. Nullam convallis, arcu vel pellentesque sodales, nisi est varius diam, ac ultrices sem ante quis sem. Proin ultricies volutpat sapien, nec scelerisque ligula mollis lobortis.</p>
                                    <hr className="tall" />
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={ 2 }>
                                    <Reveal keyframes={ fadeInRight } fraction={ 0.5 } duration={ 1000 } triggerOnce>
                                        <img
                                            className="img-fluid"
                                            src={ `${ process.env.PUBLIC_URL }/assets/images/device.png` }
                                            alt="device"
                                            width="600"
                                            height="422"
                                        />
                                    </Reveal>
                                </Col>
                                <Col lg={ 10 }>
                                    <h4>fadeInRight</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc <a href="#vehicula" onClick={ e => e.preventDefault() }>vehicula</a> lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu libero ligula. Fusce eget metus lorem, ac viverra leo. Nullam convallis, arcu vel pellentesque sodales, nisi est varius diam, ac ultrices sem ante quis sem. Proin ultricies volutpat sapien, nec scelerisque ligula mollis lobortis.</p>
                                    <hr className="tall" />
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={ 2 }>
                                    <Reveal keyframes={ fadeInRightBig } fraction={ 0.5 } duration={ 1000 } triggerOnce>
                                        <img
                                            className="img-fluid"
                                            src={ `${ process.env.PUBLIC_URL }/assets/images/device.png` }
                                            alt="device"
                                            width="600"
                                            height="422"
                                        />
                                    </Reveal>
                                </Col>
                                <Col lg={ 10 }>
                                    <h4>fadeInRightBig</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc <a href="#vehicula" onClick={ e => e.preventDefault() }>vehicula</a> lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu libero ligula. Fusce eget metus lorem, ac viverra leo. Nullam convallis, arcu vel pellentesque sodales, nisi est varius diam, ac ultrices sem ante quis sem. Proin ultricies volutpat sapien, nec scelerisque ligula mollis lobortis.</p>
                                    <hr className="tall" />
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={ 2 }>
                                    <Reveal keyframes={ fadeInUp } fraction={ 0.5 } duration={ 1000 } triggerOnce>
                                        <img
                                            className="img-fluid"
                                            src={ `${ process.env.PUBLIC_URL }/assets/images/device.png` }
                                            alt="device"
                                            width="600"
                                            height="422"
                                        />
                                    </Reveal>
                                </Col>
                                <Col lg={ 10 }>
                                    <h4>fadeInUp</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc <a href="#vehicula" onClick={ e => e.preventDefault() }>vehicula</a> lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu libero ligula. Fusce eget metus lorem, ac viverra leo. Nullam convallis, arcu vel pellentesque sodales, nisi est varius diam, ac ultrices sem ante quis sem. Proin ultricies volutpat sapien, nec scelerisque ligula mollis lobortis.</p>
                                    <hr className="tall" />
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={ 2 }>
                                    <Reveal keyframes={ fadeInUpBig } fraction={ 0.5 } duration={ 1000 } triggerOnce>
                                        <img
                                            className="img-fluid"
                                            src={ `${ process.env.PUBLIC_URL }/assets/images/device.png` }
                                            alt="device"
                                            width="600"
                                            height="422"
                                        />
                                    </Reveal>
                                </Col>
                                <Col lg={ 10 }>
                                    <h4>fadeInUpBig</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc <a href="#vehicula" onClick={ e => e.preventDefault() }>vehicula</a> lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu libero ligula. Fusce eget metus lorem, ac viverra leo. Nullam convallis, arcu vel pellentesque sodales, nisi est varius diam, ac ultrices sem ante quis sem. Proin ultricies volutpat sapien, nec scelerisque ligula mollis lobortis.</p>
                                    <hr className="tall" />
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={ 2 }>
                                    <Reveal keyframes={ fadeOut } fraction={ 0.5 } duration={ 1000 } triggerOnce>
                                        <img
                                            className="img-fluid"
                                            src={ `${ process.env.PUBLIC_URL }/assets/images/device.png` }
                                            alt="device"
                                            width="600"
                                            height="422"
                                        />
                                    </Reveal>
                                </Col>
                                <Col lg={ 10 }>
                                    <h4>fadeOut</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc <a href="#vehicula" onClick={ e => e.preventDefault() }>vehicula</a> lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu libero ligula. Fusce eget metus lorem, ac viverra leo. Nullam convallis, arcu vel pellentesque sodales, nisi est varius diam, ac ultrices sem ante quis sem. Proin ultricies volutpat sapien, nec scelerisque ligula mollis lobortis.</p>
                                    <hr className="tall" />
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={ 2 }>
                                    <Reveal keyframes={ fadeOutDown } fraction={ 0.5 } duration={ 1000 } triggerOnce>
                                        <img
                                            className="img-fluid"
                                            src={ `${ process.env.PUBLIC_URL }/assets/images/device.png` }
                                            alt="device"
                                            width="600"
                                            height="422"
                                        />
                                    </Reveal>
                                </Col>
                                <Col lg={ 10 }>
                                    <h4>fadeOutDown</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc <a href="#vehicula" onClick={ e => e.preventDefault() }>vehicula</a> lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu libero ligula. Fusce eget metus lorem, ac viverra leo. Nullam convallis, arcu vel pellentesque sodales, nisi est varius diam, ac ultrices sem ante quis sem. Proin ultricies volutpat sapien, nec scelerisque ligula mollis lobortis.</p>
                                    <hr className="tall" />
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={ 2 }>
                                    <Reveal keyframes={ fadeOutDownBig } fraction={ 0.5 } duration={ 1000 } triggerOnce>
                                        <img
                                            className="img-fluid"
                                            src={ `${ process.env.PUBLIC_URL }/assets/images/device.png` }
                                            alt="device"
                                            width="600"
                                            height="422"
                                        />
                                    </Reveal>
                                </Col>
                                <Col lg={ 10 }>
                                    <h4>fadeOutDownBig</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc <a href="#vehicula" onClick={ e => e.preventDefault() }>vehicula</a> lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu libero ligula. Fusce eget metus lorem, ac viverra leo. Nullam convallis, arcu vel pellentesque sodales, nisi est varius diam, ac ultrices sem ante quis sem. Proin ultricies volutpat sapien, nec scelerisque ligula mollis lobortis.</p>
                                    <hr className="tall" />
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={ 2 }>
                                    <Reveal keyframes={ fadeOutLeft } fraction={ 0.5 } duration={ 1000 } triggerOnce>
                                        <img
                                            className="img-fluid"
                                            src={ `${ process.env.PUBLIC_URL }/assets/images/device.png` }
                                            alt="device"
                                            width="600"
                                            height="422"
                                        />
                                    </Reveal>
                                </Col>
                                <Col lg={ 10 }>
                                    <h4>fadeOutLeft</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc <a href="#vehicula" onClick={ e => e.preventDefault() }>vehicula</a> lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu libero ligula. Fusce eget metus lorem, ac viverra leo. Nullam convallis, arcu vel pellentesque sodales, nisi est varius diam, ac ultrices sem ante quis sem. Proin ultricies volutpat sapien, nec scelerisque ligula mollis lobortis.</p>
                                    <hr className="tall" />
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={ 2 }>
                                    <Reveal keyframes={ fadeOutDownBig } fraction={ 0.5 } duration={ 1000 } triggerOnce>
                                        <img
                                            className="img-fluid"
                                            src={ `${ process.env.PUBLIC_URL }/assets/images/device.png` }
                                            alt="device"
                                            width="600"
                                            height="422"
                                        />
                                    </Reveal>
                                </Col>
                                <Col lg={ 10 }>
                                    <h4>fadeOutDownBig</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc <a href="#vehicula" onClick={ e => e.preventDefault() }>vehicula</a> lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu libero ligula. Fusce eget metus lorem, ac viverra leo. Nullam convallis, arcu vel pellentesque sodales, nisi est varius diam, ac ultrices sem ante quis sem. Proin ultricies volutpat sapien, nec scelerisque ligula mollis lobortis.</p>
                                    <hr className="tall" />
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={ 2 }>
                                    <Reveal keyframes={ fadeOutLeft } fraction={ 0.5 } duration={ 1000 } triggerOnce>
                                        <img
                                            className="img-fluid"
                                            src={ `${ process.env.PUBLIC_URL }/assets/images/device.png` }
                                            alt="device"
                                            width="600"
                                            height="422"
                                        />
                                    </Reveal>
                                </Col>
                                <Col lg={ 10 }>
                                    <h4>fadeOutLeft</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc <a href="#vehicula" onClick={ e => e.preventDefault() }>vehicula</a> lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu libero ligula. Fusce eget metus lorem, ac viverra leo. Nullam convallis, arcu vel pellentesque sodales, nisi est varius diam, ac ultrices sem ante quis sem. Proin ultricies volutpat sapien, nec scelerisque ligula mollis lobortis.</p>
                                    <hr className="tall" />
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={ 2 }>
                                    <Reveal keyframes={ fadeOutLeftBig } fraction={ 0.5 } duration={ 1000 } triggerOnce>
                                        <img
                                            className="img-fluid"
                                            src={ `${ process.env.PUBLIC_URL }/assets/images/device.png` }
                                            alt="device"
                                            width="600"
                                            height="422"
                                        />
                                    </Reveal>
                                </Col>
                                <Col lg={ 10 }>
                                    <h4>fadeOutLeftBig</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc <a href="#vehicula" onClick={ e => e.preventDefault() }>vehicula</a> lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu libero ligula. Fusce eget metus lorem, ac viverra leo. Nullam convallis, arcu vel pellentesque sodales, nisi est varius diam, ac ultrices sem ante quis sem. Proin ultricies volutpat sapien, nec scelerisque ligula mollis lobortis.</p>
                                    <hr className="tall" />
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={ 2 }>
                                    <Reveal keyframes={ fadeOutRight } fraction={ 0.5 } duration={ 1000 } triggerOnce>
                                        <img
                                            className="img-fluid"
                                            src={ `${ process.env.PUBLIC_URL }/assets/images/device.png` }
                                            alt="device"
                                            width="600"
                                            height="422"
                                        />
                                    </Reveal>
                                </Col>
                                <Col lg={ 10 }>
                                    <h4>fadeOutRight</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc <a href="#vehicula" onClick={ e => e.preventDefault() }>vehicula</a> lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu libero ligula. Fusce eget metus lorem, ac viverra leo. Nullam convallis, arcu vel pellentesque sodales, nisi est varius diam, ac ultrices sem ante quis sem. Proin ultricies volutpat sapien, nec scelerisque ligula mollis lobortis.</p>
                                    <hr className="tall" />
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={ 2 }>
                                    <Reveal keyframes={ fadeOutRightBig } fraction={ 0.5 } duration={ 1000 } triggerOnce>
                                        <img
                                            className="img-fluid"
                                            src={ `${ process.env.PUBLIC_URL }/assets/images/device.png` }
                                            alt="device"
                                            width="600"
                                            height="422"
                                        />
                                    </Reveal>
                                </Col>
                                <Col lg={ 10 }>
                                    <h4>fadeOutRightBig</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc <a href="#vehicula" onClick={ e => e.preventDefault() }>vehicula</a> lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu libero ligula. Fusce eget metus lorem, ac viverra leo. Nullam convallis, arcu vel pellentesque sodales, nisi est varius diam, ac ultrices sem ante quis sem. Proin ultricies volutpat sapien, nec scelerisque ligula mollis lobortis.</p>
                                    <hr className="tall" />
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={ 2 }>
                                    <Reveal keyframes={ fadeOutUp } fraction={ 0.5 } duration={ 1000 } triggerOnce>
                                        <img
                                            className="img-fluid"
                                            src={ `${ process.env.PUBLIC_URL }/assets/images/device.png` }
                                            alt="device"
                                            width="600"
                                            height="422"
                                        />
                                    </Reveal>
                                </Col>
                                <Col lg={ 10 }>
                                    <h4>fadeOutUp</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc <a href="#vehicula" onClick={ e => e.preventDefault() }>vehicula</a> lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu libero ligula. Fusce eget metus lorem, ac viverra leo. Nullam convallis, arcu vel pellentesque sodales, nisi est varius diam, ac ultrices sem ante quis sem. Proin ultricies volutpat sapien, nec scelerisque ligula mollis lobortis.</p>
                                    <hr className="tall" />
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={ 2 }>
                                    <Reveal keyframes={ fadeOutUpBig } fraction={ 0.5 } duration={ 1000 } triggerOnce>
                                        <img
                                            className="img-fluid"
                                            src={ `${ process.env.PUBLIC_URL }/assets/images/device.png` }
                                            alt="device"
                                            width="600"
                                            height="422"
                                        />
                                    </Reveal>
                                </Col>
                                <Col lg={ 10 }>
                                    <h4>fadeOutUpBig</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc <a href="#vehicula" onClick={ e => e.preventDefault() }>vehicula</a> lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu libero ligula. Fusce eget metus lorem, ac viverra leo. Nullam convallis, arcu vel pellentesque sodales, nisi est varius diam, ac ultrices sem ante quis sem. Proin ultricies volutpat sapien, nec scelerisque ligula mollis lobortis.</p>
                                    <hr className="tall" />
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={ 2 }>
                                    <Reveal keyframes={ flipInX } fraction={ 0.5 } duration={ 1000 } triggerOnce>
                                        <img
                                            className="img-fluid"
                                            src={ `${ process.env.PUBLIC_URL }/assets/images/device.png` }
                                            alt="device"
                                            width="600"
                                            height="422"
                                        />
                                    </Reveal>
                                </Col>
                                <Col lg={ 10 }>
                                    <h4>flipInX</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc <a href="#vehicula" onClick={ e => e.preventDefault() }>vehicula</a> lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu libero ligula. Fusce eget metus lorem, ac viverra leo. Nullam convallis, arcu vel pellentesque sodales, nisi est varius diam, ac ultrices sem ante quis sem. Proin ultricies volutpat sapien, nec scelerisque ligula mollis lobortis.</p>
                                    <hr className="tall" />
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={ 2 }>
                                    <Reveal keyframes={ flipInY } fraction={ 0.5 } duration={ 1000 } triggerOnce>
                                        <img
                                            className="img-fluid"
                                            src={ `${ process.env.PUBLIC_URL }/assets/images/device.png` }
                                            alt="device"
                                            width="600"
                                            height="422"
                                        />
                                    </Reveal>
                                </Col>
                                <Col lg={ 10 }>
                                    <h4>flipInY</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc <a href="#vehicula" onClick={ e => e.preventDefault() }>vehicula</a> lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu libero ligula. Fusce eget metus lorem, ac viverra leo. Nullam convallis, arcu vel pellentesque sodales, nisi est varius diam, ac ultrices sem ante quis sem. Proin ultricies volutpat sapien, nec scelerisque ligula mollis lobortis.</p>
                                    <hr className="tall" />
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={ 2 }>
                                    <Reveal keyframes={ flipOutX } fraction={ 0.5 } duration={ 1000 } triggerOnce>
                                        <img
                                            className="img-fluid"
                                            src={ `${ process.env.PUBLIC_URL }/assets/images/device.png` }
                                            alt="device"
                                            width="600"
                                            height="422"
                                        />
                                    </Reveal>
                                </Col>
                                <Col lg={ 10 }>
                                    <h4>flipOutX</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc <a href="#vehicula" onClick={ e => e.preventDefault() }>vehicula</a> lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu libero ligula. Fusce eget metus lorem, ac viverra leo. Nullam convallis, arcu vel pellentesque sodales, nisi est varius diam, ac ultrices sem ante quis sem. Proin ultricies volutpat sapien, nec scelerisque ligula mollis lobortis.</p>
                                    <hr className="tall" />
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={ 2 }>
                                    <Reveal keyframes={ flipOutY } fraction={ 0.5 } duration={ 1000 } triggerOnce>
                                        <img
                                            className="img-fluid"
                                            src={ `${ process.env.PUBLIC_URL }/assets/images/device.png` }
                                            alt="device"
                                            width="600"
                                            height="422"
                                        />
                                    </Reveal>
                                </Col>
                                <Col lg={ 10 }>
                                    <h4>flipOutY</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc <a href="#vehicula" onClick={ e => e.preventDefault() }>vehicula</a> lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu libero ligula. Fusce eget metus lorem, ac viverra leo. Nullam convallis, arcu vel pellentesque sodales, nisi est varius diam, ac ultrices sem ante quis sem. Proin ultricies volutpat sapien, nec scelerisque ligula mollis lobortis.</p>
                                    <hr className="tall" />
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={ 2 }>
                                    <Reveal keyframes={ lightSpeedIn } fraction={ 0.5 } duration={ 1000 } triggerOnce>
                                        <img
                                            className="img-fluid"
                                            src={ `${ process.env.PUBLIC_URL }/assets/images/device.png` }
                                            alt="device"
                                            width="600"
                                            height="422"
                                        />
                                    </Reveal>
                                </Col>
                                <Col lg={ 10 }>
                                    <h4>lightSpeedIn</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc <a href="#vehicula" onClick={ e => e.preventDefault() }>vehicula</a> lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu libero ligula. Fusce eget metus lorem, ac viverra leo. Nullam convallis, arcu vel pellentesque sodales, nisi est varius diam, ac ultrices sem ante quis sem. Proin ultricies volutpat sapien, nec scelerisque ligula mollis lobortis.</p>
                                    <hr className="tall" />
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={ 2 }>
                                    <Reveal keyframes={ lightSpeedOut } fraction={ 0.5 } duration={ 1000 } triggerOnce>
                                        <img
                                            className="img-fluid"
                                            src={ `${ process.env.PUBLIC_URL }/assets/images/device.png` }
                                            alt="device"
                                            width="600"
                                            height="422"
                                        />
                                    </Reveal>
                                </Col>
                                <Col lg={ 10 }>
                                    <h4>lightSpeedOut</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc <a href="#vehicula" onClick={ e => e.preventDefault() }>vehicula</a> lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu libero ligula. Fusce eget metus lorem, ac viverra leo. Nullam convallis, arcu vel pellentesque sodales, nisi est varius diam, ac ultrices sem ante quis sem. Proin ultricies volutpat sapien, nec scelerisque ligula mollis lobortis.</p>
                                    <hr className="tall" />
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={ 2 }>
                                    <Reveal keyframes={ rotateIn } fraction={ 0.5 } duration={ 1000 } triggerOnce>
                                        <img
                                            className="img-fluid"
                                            src={ `${ process.env.PUBLIC_URL }/assets/images/device.png` }
                                            alt="device"
                                            width="600"
                                            height="422"
                                        />
                                    </Reveal>
                                </Col>
                                <Col lg={ 10 }>
                                    <h4>rotateIn</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc <a href="#vehicula" onClick={ e => e.preventDefault() }>vehicula</a> lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu libero ligula. Fusce eget metus lorem, ac viverra leo. Nullam convallis, arcu vel pellentesque sodales, nisi est varius diam, ac ultrices sem ante quis sem. Proin ultricies volutpat sapien, nec scelerisque ligula mollis lobortis.</p>
                                    <hr className="tall" />
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={ 2 }>
                                    <Reveal keyframes={ rotateInDownLeft } fraction={ 0.5 } duration={ 1000 } triggerOnce>
                                        <img
                                            className="img-fluid"
                                            src={ `${ process.env.PUBLIC_URL }/assets/images/device.png` }
                                            alt="device"
                                            width="600"
                                            height="422"
                                        />
                                    </Reveal>
                                </Col>
                                <Col lg={ 10 }>
                                    <h4>rotateInDownLeft</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc <a href="#vehicula" onClick={ e => e.preventDefault() }>vehicula</a> lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu libero ligula. Fusce eget metus lorem, ac viverra leo. Nullam convallis, arcu vel pellentesque sodales, nisi est varius diam, ac ultrices sem ante quis sem. Proin ultricies volutpat sapien, nec scelerisque ligula mollis lobortis.</p>
                                    <hr className="tall" />
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={ 2 }>
                                    <Reveal keyframes={ rotateInDownRight } fraction={ 0.5 } duration={ 1000 } triggerOnce>
                                        <img
                                            className="img-fluid"
                                            src={ `${ process.env.PUBLIC_URL }/assets/images/device.png` }
                                            alt="device"
                                            width="600"
                                            height="422"
                                        />
                                    </Reveal>
                                </Col>
                                <Col lg={ 10 }>
                                    <h4>rotateInDownRight</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc <a href="#vehicula" onClick={ e => e.preventDefault() }>vehicula</a> lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu libero ligula. Fusce eget metus lorem, ac viverra leo. Nullam convallis, arcu vel pellentesque sodales, nisi est varius diam, ac ultrices sem ante quis sem. Proin ultricies volutpat sapien, nec scelerisque ligula mollis lobortis.</p>
                                    <hr className="tall" />
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={ 2 }>
                                    <Reveal keyframes={ rotateInDownRight } fraction={ 0.5 } duration={ 1000 } triggerOnce>
                                        <img
                                            className="img-fluid"
                                            src={ `${ process.env.PUBLIC_URL }/assets/images/device.png` }
                                            alt="device"
                                            width="600"
                                            height="422"
                                        />
                                    </Reveal>
                                </Col>
                                <Col lg={ 10 }>
                                    <h4>rotateInDownRight</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc <a href="#vehicula" onClick={ e => e.preventDefault() }>vehicula</a> lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu libero ligula. Fusce eget metus lorem, ac viverra leo. Nullam convallis, arcu vel pellentesque sodales, nisi est varius diam, ac ultrices sem ante quis sem. Proin ultricies volutpat sapien, nec scelerisque ligula mollis lobortis.</p>
                                    <hr className="tall" />
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={ 2 }>
                                    <Reveal keyframes={ rotateInUpLeft } fraction={ 0.5 } duration={ 1000 } triggerOnce>
                                        <img
                                            className="img-fluid"
                                            src={ `${ process.env.PUBLIC_URL }/assets/images/device.png` }
                                            alt="device"
                                            width="600"
                                            height="422"
                                        />
                                    </Reveal>
                                </Col>
                                <Col lg={ 10 }>
                                    <h4>rotateInUpLeft</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc <a href="#vehicula" onClick={ e => e.preventDefault() }>vehicula</a> lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu libero ligula. Fusce eget metus lorem, ac viverra leo. Nullam convallis, arcu vel pellentesque sodales, nisi est varius diam, ac ultrices sem ante quis sem. Proin ultricies volutpat sapien, nec scelerisque ligula mollis lobortis.</p>
                                    <hr className="tall" />
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={ 2 }>
                                    <Reveal keyframes={ rotateInUpRight } fraction={ 0.5 } duration={ 1000 } triggerOnce>
                                        <img
                                            className="img-fluid"
                                            src={ `${ process.env.PUBLIC_URL }/assets/images/device.png` }
                                            alt="device"
                                            width="600"
                                            height="422"
                                        />
                                    </Reveal>
                                </Col>
                                <Col lg={ 10 }>
                                    <h4>rotateInUpRight</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc <a href="#vehicula" onClick={ e => e.preventDefault() }>vehicula</a> lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu libero ligula. Fusce eget metus lorem, ac viverra leo. Nullam convallis, arcu vel pellentesque sodales, nisi est varius diam, ac ultrices sem ante quis sem. Proin ultricies volutpat sapien, nec scelerisque ligula mollis lobortis.</p>
                                    <hr className="tall" />
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={ 2 }>
                                    <Reveal keyframes={ rotateOut } fraction={ 0.5 } duration={ 1000 } triggerOnce>
                                        <img
                                            className="img-fluid"
                                            src={ `${ process.env.PUBLIC_URL }/assets/images/device.png` }
                                            alt="device"
                                            width="600"
                                            height="422"
                                        />
                                    </Reveal>
                                </Col>
                                <Col lg={ 10 }>
                                    <h4>rotateOut</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc <a href="#vehicula" onClick={ e => e.preventDefault() }>vehicula</a> lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu libero ligula. Fusce eget metus lorem, ac viverra leo. Nullam convallis, arcu vel pellentesque sodales, nisi est varius diam, ac ultrices sem ante quis sem. Proin ultricies volutpat sapien, nec scelerisque ligula mollis lobortis.</p>
                                    <hr className="tall" />
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={ 2 }>
                                    <Reveal keyframes={ rotateOutDownLeft } fraction={ 0.5 } duration={ 1000 } triggerOnce>
                                        <img
                                            className="img-fluid"
                                            src={ `${ process.env.PUBLIC_URL }/assets/images/device.png` }
                                            alt="device"
                                            width="600"
                                            height="422"
                                        />
                                    </Reveal>
                                </Col>
                                <Col lg={ 10 }>
                                    <h4>rotateOutDownLeft</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc <a href="#vehicula" onClick={ e => e.preventDefault() }>vehicula</a> lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu libero ligula. Fusce eget metus lorem, ac viverra leo. Nullam convallis, arcu vel pellentesque sodales, nisi est varius diam, ac ultrices sem ante quis sem. Proin ultricies volutpat sapien, nec scelerisque ligula mollis lobortis.</p>
                                    <hr className="tall" />
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={ 2 }>
                                    <Reveal keyframes={ rotateOutDownRight } fraction={ 0.5 } duration={ 1000 } triggerOnce>
                                        <img
                                            className="img-fluid"
                                            src={ `${ process.env.PUBLIC_URL }/assets/images/device.png` }
                                            alt="device"
                                            width="600"
                                            height="422"
                                        />
                                    </Reveal>
                                </Col>
                                <Col lg={ 10 }>
                                    <h4>rotateOutDownRight</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc <a href="#vehicula" onClick={ e => e.preventDefault() }>vehicula</a> lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu libero ligula. Fusce eget metus lorem, ac viverra leo. Nullam convallis, arcu vel pellentesque sodales, nisi est varius diam, ac ultrices sem ante quis sem. Proin ultricies volutpat sapien, nec scelerisque ligula mollis lobortis.</p>
                                    <hr className="tall" />
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={ 2 }>
                                    <Reveal keyframes={ rotateOutUpLeft } fraction={ 0.5 } duration={ 1000 } triggerOnce>
                                        <img
                                            className="img-fluid"
                                            src={ `${ process.env.PUBLIC_URL }/assets/images/device.png` }
                                            alt="device"
                                            width="600"
                                            height="422"
                                        />
                                    </Reveal>
                                </Col>
                                <Col lg={ 10 }>
                                    <h4>rotateOutUpLeft</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc <a href="#vehicula" onClick={ e => e.preventDefault() }>vehicula</a> lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu libero ligula. Fusce eget metus lorem, ac viverra leo. Nullam convallis, arcu vel pellentesque sodales, nisi est varius diam, ac ultrices sem ante quis sem. Proin ultricies volutpat sapien, nec scelerisque ligula mollis lobortis.</p>
                                    <hr className="tall" />
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={ 2 }>
                                    <Reveal keyframes={ rotateOutUpRight } fraction={ 0.5 } duration={ 1000 } triggerOnce>
                                        <img
                                            className="img-fluid"
                                            src={ `${ process.env.PUBLIC_URL }/assets/images/device.png` }
                                            alt="device"
                                            width="600"
                                            height="422"
                                        />
                                    </Reveal>
                                </Col>
                                <Col lg={ 10 }>
                                    <h4>rotateOutUpRight</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc <a href="#vehicula" onClick={ e => e.preventDefault() }>vehicula</a> lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu libero ligula. Fusce eget metus lorem, ac viverra leo. Nullam convallis, arcu vel pellentesque sodales, nisi est varius diam, ac ultrices sem ante quis sem. Proin ultricies volutpat sapien, nec scelerisque ligula mollis lobortis.</p>
                                    <hr className="tall" />
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={ 2 }>
                                    <Reveal keyframes={ hinge } fraction={ 0.5 } duration={ 1000 } triggerOnce>
                                        <img
                                            className="img-fluid"
                                            src={ `${ process.env.PUBLIC_URL }/assets/images/device.png` }
                                            alt="device"
                                            width="600"
                                            height="422"
                                        />
                                    </Reveal>
                                </Col>
                                <Col lg={ 10 }>
                                    <h4>hinge</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc <a href="#vehicula" onClick={ e => e.preventDefault() }>vehicula</a> lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu libero ligula. Fusce eget metus lorem, ac viverra leo. Nullam convallis, arcu vel pellentesque sodales, nisi est varius diam, ac ultrices sem ante quis sem. Proin ultricies volutpat sapien, nec scelerisque ligula mollis lobortis.</p>
                                    <hr className="tall" />
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={ 2 }>
                                    <Reveal keyframes={ rollIn } fraction={ 0.5 } duration={ 1000 } triggerOnce>
                                        <img
                                            className="img-fluid"
                                            src={ `${ process.env.PUBLIC_URL }/assets/images/device.png` }
                                            alt="device"
                                            width="600"
                                            height="422"
                                        />
                                    </Reveal>
                                </Col>
                                <Col lg={ 10 }>
                                    <h4>rollIn</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc <a href="#vehicula" onClick={ e => e.preventDefault() }>vehicula</a> lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu libero ligula. Fusce eget metus lorem, ac viverra leo. Nullam convallis, arcu vel pellentesque sodales, nisi est varius diam, ac ultrices sem ante quis sem. Proin ultricies volutpat sapien, nec scelerisque ligula mollis lobortis.</p>
                                    <hr className="tall" />
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={ 2 }>
                                    <Reveal keyframes={ rollOut } fraction={ 0.5 } duration={ 1000 } triggerOnce>
                                        <img
                                            className="img-fluid"
                                            src={ `${ process.env.PUBLIC_URL }/assets/images/device.png` }
                                            alt="device"
                                            width="600"
                                            height="422"
                                        />
                                    </Reveal>
                                </Col>
                                <Col lg={ 10 }>
                                    <h4>rollOut</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc <a href="#vehicula" onClick={ e => e.preventDefault() }>vehicula</a> lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu libero ligula. Fusce eget metus lorem, ac viverra leo. Nullam convallis, arcu vel pellentesque sodales, nisi est varius diam, ac ultrices sem ante quis sem. Proin ultricies volutpat sapien, nec scelerisque ligula mollis lobortis.</p>
                                    <hr className="tall" />
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={ 2 }>
                                    <Reveal keyframes={ zoomIn } fraction={ 0.5 } duration={ 1000 } triggerOnce>
                                        <img
                                            className="img-fluid"
                                            src={ `${ process.env.PUBLIC_URL }/assets/images/device.png` }
                                            alt="device"
                                            width="600"
                                            height="422"
                                        />
                                    </Reveal>
                                </Col>
                                <Col lg={ 10 }>
                                    <h4>zoomIn</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc <a href="#vehicula" onClick={ e => e.preventDefault() }>vehicula</a> lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu libero ligula. Fusce eget metus lorem, ac viverra leo. Nullam convallis, arcu vel pellentesque sodales, nisi est varius diam, ac ultrices sem ante quis sem. Proin ultricies volutpat sapien, nec scelerisque ligula mollis lobortis.</p>
                                    <hr className="tall" />
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={ 2 }>
                                    <Reveal keyframes={ zoomInDown } fraction={ 0.5 } duration={ 1000 } triggerOnce>
                                        <img
                                            className="img-fluid"
                                            src={ `${ process.env.PUBLIC_URL }/assets/images/device.png` }
                                            alt="device"
                                            width="600"
                                            height="422"
                                        />
                                    </Reveal>
                                </Col>
                                <Col lg={ 10 }>
                                    <h4>zoomInDown</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc <a href="#vehicula" onClick={ e => e.preventDefault() }>vehicula</a> lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu libero ligula. Fusce eget metus lorem, ac viverra leo. Nullam convallis, arcu vel pellentesque sodales, nisi est varius diam, ac ultrices sem ante quis sem. Proin ultricies volutpat sapien, nec scelerisque ligula mollis lobortis.</p>
                                    <hr className="tall" />
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={ 2 }>
                                    <Reveal keyframes={ zoomInLeft } fraction={ 0.5 } duration={ 1000 } triggerOnce>
                                        <img
                                            className="img-fluid"
                                            src={ `${ process.env.PUBLIC_URL }/assets/images/device.png` }
                                            alt="device"
                                            width="600"
                                            height="422"
                                        />
                                    </Reveal>
                                </Col>
                                <Col lg={ 10 }>
                                    <h4>zoomInLeft</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc <a href="#vehicula" onClick={ e => e.preventDefault() }>vehicula</a> lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu libero ligula. Fusce eget metus lorem, ac viverra leo. Nullam convallis, arcu vel pellentesque sodales, nisi est varius diam, ac ultrices sem ante quis sem. Proin ultricies volutpat sapien, nec scelerisque ligula mollis lobortis.</p>
                                    <hr className="tall" />
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={ 2 }>
                                    <Reveal keyframes={ zoomInRight } fraction={ 0.5 } duration={ 1000 } triggerOnce>
                                        <img
                                            className="img-fluid"
                                            src={ `${ process.env.PUBLIC_URL }/assets/images/device.png` }
                                            alt="device"
                                            width="600"
                                            height="422"
                                        />
                                    </Reveal>
                                </Col>
                                <Col lg={ 10 }>
                                    <h4>zoomInRight</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc <a href="#vehicula" onClick={ e => e.preventDefault() }>vehicula</a> lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu libero ligula. Fusce eget metus lorem, ac viverra leo. Nullam convallis, arcu vel pellentesque sodales, nisi est varius diam, ac ultrices sem ante quis sem. Proin ultricies volutpat sapien, nec scelerisque ligula mollis lobortis.</p>
                                    <hr className="tall" />
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={ 2 }>
                                    <Reveal keyframes={ zoomInUp } fraction={ 0.5 } duration={ 1000 } triggerOnce>
                                        <img
                                            className="img-fluid"
                                            src={ `${ process.env.PUBLIC_URL }/assets/images/device.png` }
                                            alt="device"
                                            width="600"
                                            height="422"
                                        />
                                    </Reveal>
                                </Col>
                                <Col lg={ 10 }>
                                    <h4>zoomInUp</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc <a href="#vehicula" onClick={ e => e.preventDefault() }>vehicula</a> lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu libero ligula. Fusce eget metus lorem, ac viverra leo. Nullam convallis, arcu vel pellentesque sodales, nisi est varius diam, ac ultrices sem ante quis sem. Proin ultricies volutpat sapien, nec scelerisque ligula mollis lobortis.</p>
                                    <hr className="tall" />
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={ 2 }>
                                    <Reveal keyframes={ zoomOut } fraction={ 0.5 } duration={ 1000 } triggerOnce>
                                        <img
                                            className="img-fluid"
                                            src={ `${ process.env.PUBLIC_URL }/assets/images/device.png` }
                                            alt="device"
                                            width="600"
                                            height="422"
                                        />
                                    </Reveal>
                                </Col>
                                <Col lg={ 10 }>
                                    <h4>zoomOut</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc <a href="#vehicula" onClick={ e => e.preventDefault() }>vehicula</a> lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu libero ligula. Fusce eget metus lorem, ac viverra leo. Nullam convallis, arcu vel pellentesque sodales, nisi est varius diam, ac ultrices sem ante quis sem. Proin ultricies volutpat sapien, nec scelerisque ligula mollis lobortis.</p>
                                    <hr className="tall" />
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={ 2 }>
                                    <Reveal keyframes={ zoomOutDown } fraction={ 0.5 } duration={ 1000 } triggerOnce>
                                        <img
                                            className="img-fluid"
                                            src={ `${ process.env.PUBLIC_URL }/assets/images/device.png` }
                                            alt="device"
                                            width="600"
                                            height="422"
                                        />
                                    </Reveal>
                                </Col>
                                <Col lg={ 10 }>
                                    <h4>zoomOutDown</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc <a href="#vehicula" onClick={ e => e.preventDefault() }>vehicula</a> lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu libero ligula. Fusce eget metus lorem, ac viverra leo. Nullam convallis, arcu vel pellentesque sodales, nisi est varius diam, ac ultrices sem ante quis sem. Proin ultricies volutpat sapien, nec scelerisque ligula mollis lobortis.</p>
                                    <hr className="tall" />
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={ 2 }>
                                    <Reveal keyframes={ zoomOutLeft } fraction={ 0.5 } duration={ 1000 } triggerOnce>
                                        <img
                                            className="img-fluid"
                                            src={ `${ process.env.PUBLIC_URL }/assets/images/device.png` }
                                            alt="device"
                                            width="600"
                                            height="422"
                                        />
                                    </Reveal>
                                </Col>
                                <Col lg={ 10 }>
                                    <h4>zoomOutLeft</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc <a href="#vehicula" onClick={ e => e.preventDefault() }>vehicula</a> lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu libero ligula. Fusce eget metus lorem, ac viverra leo. Nullam convallis, arcu vel pellentesque sodales, nisi est varius diam, ac ultrices sem ante quis sem. Proin ultricies volutpat sapien, nec scelerisque ligula mollis lobortis.</p>
                                    <hr className="tall" />
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={ 2 }>
                                    <Reveal keyframes={ zoomOutRight } fraction={ 0.5 } duration={ 1000 } triggerOnce>
                                        <img
                                            className="img-fluid"
                                            src={ `${ process.env.PUBLIC_URL }/assets/images/device.png` }
                                            alt="device"
                                            width="600"
                                            height="422"
                                        />
                                    </Reveal>
                                </Col>
                                <Col lg={ 10 }>
                                    <h4>zoomOutRight</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc <a href="#vehicula" onClick={ e => e.preventDefault() }>vehicula</a> lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu libero ligula. Fusce eget metus lorem, ac viverra leo. Nullam convallis, arcu vel pellentesque sodales, nisi est varius diam, ac ultrices sem ante quis sem. Proin ultricies volutpat sapien, nec scelerisque ligula mollis lobortis.</p>
                                    <hr className="tall" />
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={ 2 }>
                                    <Reveal keyframes={ zoomOutUp } fraction={ 0.5 } duration={ 1000 } triggerOnce>
                                        <img
                                            className="img-fluid"
                                            src={ `${ process.env.PUBLIC_URL }/assets/images/device.png` }
                                            alt="device"
                                            width="600"
                                            height="422"
                                        />
                                    </Reveal>
                                </Col>
                                <Col lg={ 10 }>
                                    <h4>zoomOutUp</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc <a href="#vehicula" onClick={ e => e.preventDefault() }>vehicula</a> lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu libero ligula. Fusce eget metus lorem, ac viverra leo. Nullam convallis, arcu vel pellentesque sodales, nisi est varius diam, ac ultrices sem ante quis sem. Proin ultricies volutpat sapien, nec scelerisque ligula mollis lobortis.</p>
                                    <hr className="tall" />
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={ 2 }>
                                    <Reveal keyframes={ slideInDown } fraction={ 0.5 } duration={ 1000 } triggerOnce>
                                        <img
                                            className="img-fluid"
                                            src={ `${ process.env.PUBLIC_URL }/assets/images/device.png` }
                                            alt="device"
                                            width="600"
                                            height="422"
                                        />
                                    </Reveal>
                                </Col>
                                <Col lg={ 10 }>
                                    <h4>slideInDown</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc <a href="#vehicula" onClick={ e => e.preventDefault() }>vehicula</a> lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu libero ligula. Fusce eget metus lorem, ac viverra leo. Nullam convallis, arcu vel pellentesque sodales, nisi est varius diam, ac ultrices sem ante quis sem. Proin ultricies volutpat sapien, nec scelerisque ligula mollis lobortis.</p>
                                    <hr className="tall" />
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={ 2 }>
                                    <Reveal keyframes={ slideInLeft } fraction={ 0.5 } duration={ 1000 } triggerOnce>
                                        <img
                                            className="img-fluid"
                                            src={ `${ process.env.PUBLIC_URL }/assets/images/device.png` }
                                            alt="device"
                                            width="600"
                                            height="422"
                                        />
                                    </Reveal>
                                </Col>
                                <Col lg={ 10 }>
                                    <h4>slideInLeft</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc <a href="#vehicula" onClick={ e => e.preventDefault() }>vehicula</a> lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu libero ligula. Fusce eget metus lorem, ac viverra leo. Nullam convallis, arcu vel pellentesque sodales, nisi est varius diam, ac ultrices sem ante quis sem. Proin ultricies volutpat sapien, nec scelerisque ligula mollis lobortis.</p>
                                    <hr className="tall" />
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={ 2 }>
                                    <Reveal keyframes={ slideInRight } fraction={ 0.5 } duration={ 1000 } triggerOnce>
                                        <img
                                            className="img-fluid"
                                            src={ `${ process.env.PUBLIC_URL }/assets/images/device.png` }
                                            alt="device"
                                            width="600"
                                            height="422"
                                        />
                                    </Reveal>
                                </Col>
                                <Col lg={ 10 }>
                                    <h4>slideInRight</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc <a href="#vehicula" onClick={ e => e.preventDefault() }>vehicula</a> lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu libero ligula. Fusce eget metus lorem, ac viverra leo. Nullam convallis, arcu vel pellentesque sodales, nisi est varius diam, ac ultrices sem ante quis sem. Proin ultricies volutpat sapien, nec scelerisque ligula mollis lobortis.</p>
                                    <hr className="tall" />
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={ 2 }>
                                    <Reveal keyframes={ slideInUp } fraction={ 0.5 } duration={ 1000 } triggerOnce>
                                        <img
                                            className="img-fluid"
                                            src={ `${ process.env.PUBLIC_URL }/assets/images/device.png` }
                                            alt="device"
                                            width="600"
                                            height="422"
                                        />
                                    </Reveal>
                                </Col>
                                <Col lg={ 10 }>
                                    <h4>slideInUp</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc <a href="#vehicula" onClick={ e => e.preventDefault() }>vehicula</a> lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu libero ligula. Fusce eget metus lorem, ac viverra leo. Nullam convallis, arcu vel pellentesque sodales, nisi est varius diam, ac ultrices sem ante quis sem. Proin ultricies volutpat sapien, nec scelerisque ligula mollis lobortis.</p>
                                    <hr className="tall" />
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={ 2 }>
                                    <Reveal keyframes={ slideOutDown } fraction={ 0.5 } duration={ 1000 } triggerOnce>
                                        <img
                                            className="img-fluid"
                                            src={ `${ process.env.PUBLIC_URL }/assets/images/device.png` }
                                            alt="device"
                                            width="600"
                                            height="422"
                                        />
                                    </Reveal>
                                </Col>
                                <Col lg={ 10 }>
                                    <h4>slideOutDown</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc <a href="#vehicula" onClick={ e => e.preventDefault() }>vehicula</a> lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu libero ligula. Fusce eget metus lorem, ac viverra leo. Nullam convallis, arcu vel pellentesque sodales, nisi est varius diam, ac ultrices sem ante quis sem. Proin ultricies volutpat sapien, nec scelerisque ligula mollis lobortis.</p>
                                    <hr className="tall" />
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={ 2 }>
                                    <Reveal keyframes={ slideOutLeft } fraction={ 0.5 } duration={ 1000 } triggerOnce>
                                        <img
                                            className="img-fluid"
                                            src={ `${ process.env.PUBLIC_URL }/assets/images/device.png` }
                                            alt="device"
                                            width="600"
                                            height="422"
                                        />
                                    </Reveal>
                                </Col>
                                <Col lg={ 10 }>
                                    <h4>slideOutLeft</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc <a href="#vehicula" onClick={ e => e.preventDefault() }>vehicula</a> lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu libero ligula. Fusce eget metus lorem, ac viverra leo. Nullam convallis, arcu vel pellentesque sodales, nisi est varius diam, ac ultrices sem ante quis sem. Proin ultricies volutpat sapien, nec scelerisque ligula mollis lobortis.</p>
                                    <hr className="tall" />
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={ 2 }>
                                    <Reveal keyframes={ slideOutRight } fraction={ 0.5 } duration={ 1000 } triggerOnce>
                                        <img
                                            className="img-fluid"
                                            src={ `${ process.env.PUBLIC_URL }/assets/images/device.png` }
                                            alt="device"
                                            width="600"
                                            height="422"
                                        />
                                    </Reveal>
                                </Col>
                                <Col lg={ 10 }>
                                    <h4>slideOutRight</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc <a href="#vehicula" onClick={ e => e.preventDefault() }>vehicula</a> lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu libero ligula. Fusce eget metus lorem, ac viverra leo. Nullam convallis, arcu vel pellentesque sodales, nisi est varius diam, ac ultrices sem ante quis sem. Proin ultricies volutpat sapien, nec scelerisque ligula mollis lobortis.</p>
                                    <hr className="tall" />
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={ 2 }>
                                    <Reveal keyframes={ slideOutUp } fraction={ 0.5 } duration={ 1000 } triggerOnce>
                                        <img
                                            className="img-fluid"
                                            src={ `${ process.env.PUBLIC_URL }/assets/images/device.png` }
                                            alt="device"
                                            width="600"
                                            height="422"
                                        />
                                    </Reveal>
                                </Col>
                                <Col lg={ 10 }>
                                    <h4>slideOutUp</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc <a href="#vehicula" onClick={ e => e.preventDefault() }>vehicula</a> lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu libero ligula. Fusce eget metus lorem, ac viverra leo. Nullam convallis, arcu vel pellentesque sodales, nisi est varius diam, ac ultrices sem ante quis sem. Proin ultricies volutpat sapien, nec scelerisque ligula mollis lobortis.</p>
                                    <hr className="tall" />
                                </Col>
                            </Row>
                        </Card.Body>
                    </CardWithActions>
                </Col>
            </Row>
        </>
    )
}

export default React.memo( AppearAnimationsPage );