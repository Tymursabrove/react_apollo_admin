import React, { useState } from 'react';
import { Row, Col, Form, Collapse, Button, Card, ProgressBar, OverlayTrigger, Tooltip, InputGroup, Tabs, Tab } from 'react-bootstrap';
import LightBox from 'react-image-lightbox';

import Breadcrumb from '../../common/breadcrumb';
import PtLazyLoad from '../../features/lazyload';
import ToDoList, { ToDoItem } from '../../features/elements/to-do-list';
import TimeLine, { TimeLineGroup, TimeLineItem } from '../../features/elements/timeline';

import { withCardActions } from '../../hoc';

const CardWithActions = withCardActions( Card );

function UserProfile () {
    const [ collapse, setCollapse ] = useState( false );
    const [ openLB, setOpenLB ] = useState( false );

    function prevent ( e ) {
        e.preventDefault();
    }

    function showLightBox ( e ) {
        e.preventDefault();
        setOpenLB( true );
    }

    function closeLightBox () {
        setOpenLB( false );
    }

    return (
        <>
            <Breadcrumb current="User Profile" paths={ [ {
                name: "Home",
                url: "/"
            }, {
                name: "Pages",
                url: "/pages"
            } ] } />

            <Row>
                <Col lg={ 4 } xl={ 3 } className="mb-4 mb-xl-0">
                    <Card>
                        <Card.Body>
                            <div className="thumb-info mb-3">
                                <PtLazyLoad
                                    src={ `${ process.env.PUBLIC_URL }/assets/images/users/!logged-user.jpg` }
                                    alt="John Doe"
                                    width={ 150 }
                                    height={ 150 }
                                />
                                <div className="thumb-info-title">
                                    <span className="thumb-info-inner">John Doe</span>
                                    <span className="thumb-info-type">CEO</span>
                                </div>
                            </div>

                            <div className={ `widget-toggle-expand mt-3 ${ collapse ? "widget-collapsed" : "" }` }>
                                <div className="widget-header">
                                    <h5 className="mb-2">Profile Completion</h5>
                                    <div className="widget-toggle" onClick={ () => setCollapse( !collapse ) }>+</div>
                                </div>
                                <div className="widget-content-collapsed">
                                    <ProgressBar
                                        className="progress-xs light"
                                        min={ 0 }
                                        max={ 100 }
                                        now={ 60 }
                                        label="60%"
                                    />
                                </div>

                                <Collapse in={ !collapse }>
                                    <div className="widget-content-expanded">
                                        <ToDoList className="mt-3">
                                            <ToDoItem status="completed">Update Profile Picture</ToDoItem>
                                            <ToDoItem status="completed">Change Personal Information</ToDoItem>
                                            <ToDoItem>Update Social Media</ToDoItem>
                                            <ToDoItem>Follow Someone</ToDoItem>
                                        </ToDoList>
                                    </div>
                                </Collapse>
                            </div>

                            <hr className="dotted short" />

                            <h5 className="mb-2 mt-3">About</h5>
                            <p className="text-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis vulputate quam. Interdum et malesuada</p>
                            <div className="clearfix">
                                <a className="text-uppercase text-muted float-right" href="#view" onClick={ prevent } >(View All)</a>
                            </div>

                            <hr className="dotted short" />

                            <div className="social-icons-list">
                                <OverlayTrigger
                                    trigger="hover"
                                    placement="bottom"
                                    overlay={ <Tooltip>Facebook</Tooltip> }
                                >
                                    <a href="http://www.facebook.com" className="mr-1">
                                        <i className="fab fa-facebook-f"></i><span>Facebook</span>
                                    </a>
                                </OverlayTrigger>

                                <OverlayTrigger
                                    trigger="hover"
                                    placement="bottom"
                                    overlay={ <Tooltip>Twitter</Tooltip> }
                                >
                                    <a href="http://www.twitter.com" className="mr-1">
                                        <i className="fab fa-twitter"></i><span>Twitter</span>
                                    </a>
                                </OverlayTrigger>

                                <OverlayTrigger
                                    trigger="hover"
                                    placement="bottom"
                                    overlay={ <Tooltip>Linkedin</Tooltip> }
                                >
                                    <a href="http://www.linkedin.com">
                                        <i className="fab fa-linkedin-in"></i><span>Linkedin</span>
                                    </a>
                                </OverlayTrigger>
                            </div>
                        </Card.Body>
                    </Card>

                    <CardWithActions>
                        <Card.Header>
                            <Card.Title>
                                <span className="badge badge-primary label-sm font-weight-normal va-middle mr-3">298</span>
                                <span className="va-middle">Friends</span>
                            </Card.Title>
                        </Card.Header>

                        <Card.Body>
                            <div className="content">
                                <ul className="simple-user-list">
                                    <li>
                                        <figure className="image rounded">
                                            <PtLazyLoad
                                                src={ `${ process.env.PUBLIC_URL }/assets/images/users/!sample-user.jpg` }
                                                alt="Joseph Doe Junior"
                                                className="rounded-circle"
                                                width={ 35 }
                                                height={ 35 }
                                            />
                                        </figure>
                                        <span className="title">Joseph Doe Junior</span>
                                        <span className="message truncate">Lorem ipsum dolor sit.</span>
                                    </li>
                                    <li>
                                        <figure className="image rounded">
                                            <PtLazyLoad
                                                src={ `${ process.env.PUBLIC_URL }/assets/images/users/!sample-user.jpg` }
                                                alt="Joseph Junior"
                                                className="rounded-circle"
                                                width={ 35 }
                                                height={ 35 }
                                            />
                                        </figure>
                                        <span className="title">Joseph Junior</span>
                                        <span className="message truncate">Lorem ipsum dolor sit.</span>
                                    </li>
                                    <li>
                                        <figure className="image rounded">
                                            <PtLazyLoad
                                                src={ `${ process.env.PUBLIC_URL }/assets/images/users/!sample-user.jpg` }
                                                alt="Joe Junior"
                                                className="rounded-circle"
                                                width={ 35 }
                                                height={ 35 }
                                            />
                                        </figure>
                                        <span className="title">Joe Junior</span>
                                        <span className="message truncate">Lorem ipsum dolor sit.</span>
                                    </li>
                                    <li>
                                        <figure className="image rounded">
                                            <PtLazyLoad
                                                src={ `${ process.env.PUBLIC_URL }/assets/images/users/!sample-user.jpg` }
                                                alt="Joseph Doe Junior"
                                                className="rounded-circle"
                                                width={ 35 }
                                                height={ 35 }
                                            />
                                        </figure>
                                        <span className="title">Joseph Doe Junior</span>
                                        <span className="message truncate">Lorem ipsum dolor sit.</span>
                                    </li>
                                </ul>

                                <hr className="dotted short" />
                                <div className="text-right">
                                    <a className="text-uppercase text-muted" href="#viewAll" onClick={ prevent }>(View All)</a>
                                </div>
                            </div>
                        </Card.Body>

                        <Card.Footer>
                            <InputGroup>
                                <Form.Control
                                    type="text"
                                    placeholder="Search..."
                                />
                                <InputGroup.Append>
                                    <Button variant="default"><i className="fas fa-search"></i></Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </Card.Footer>
                    </CardWithActions>

                    <CardWithActions>
                        <Card.Header>
                            <Card.Title>Popular Posts</Card.Title>
                        </Card.Header>

                        <Card.Body>
                            <ul className="simple-post-list">
                                <li>
                                    <div className="post-image">
                                        <div className="img-thumbnail d-block">
                                            <a href="#post" onClick={ prevent }>
                                                <PtLazyLoad
                                                    src={ `${ process.env.PUBLIC_URL }/assets/images/posts/post-thumb-1.jpg` }
                                                    alt="post"
                                                    width={ 50 }
                                                    height={ 50 }
                                                />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="post-info">
                                        <a href="#post" onClick={ prevent }>Nullam Vitae Nibh Un Odiosters</a>
                                        <div className="post-meta">Jan 10, 2021</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="post-image">
                                        <div className="img-thumbnail d-block">
                                            <a href="#post" onClick={ prevent }>
                                                <PtLazyLoad
                                                    src={ `${ process.env.PUBLIC_URL }/assets/images/posts/post-thumb-2.jpg` }
                                                    alt="post"
                                                    width={ 50 }
                                                    height={ 50 }
                                                />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="post-info">
                                        <a href="#post" onClick={ prevent }>Vitae Nibh Un Odiosters</a>
                                        <div className="post-meta">Jan 10, 2021</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="post-image">
                                        <div className="img-thumbnail d-block">
                                            <a href="#post" onClick={ prevent }>
                                                <PtLazyLoad
                                                    src={ `${ process.env.PUBLIC_URL }/assets/images/posts/post-thumb-3.jpg` }
                                                    alt="post"
                                                    width={ 50 }
                                                    height={ 50 }
                                                />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="post-info">
                                        <a href="#post" onClick={ prevent }>Odiosters Nullam Vitae</a>
                                        <div className="post-meta">Jan 10, 2021</div>
                                    </div>
                                </li>
                            </ul>
                        </Card.Body>
                    </CardWithActions>
                </Col>

                <Col lg={ 8 } xl={ 6 }>
                    <div className="tabs">
                        <Tabs className="tabs-primary">
                            <Tab eventKey="overview" title="Overview">
                                <div className="p-3">
                                    <h4 className="mb-3">Update Status</h4>

                                    <section className="simple-compose-box mb-3">
                                        <Form>
                                            <textarea
                                                placeholder="What's on your mind?"
                                                rows={ 1 }
                                            />
                                        </Form>
                                        <div className="compose-box-footer">
                                            <ul className="compose-toolbar">
                                                <li>
                                                    <a href="#camera" onClick={ prevent }><i className="fas fa-camera"></i></a>
                                                </li>
                                                <li>
                                                    <a href="#map" onClick={ prevent }><i className="fas fa-map-marker-alt"></i></a>
                                                </li>
                                            </ul>
                                            <ul className="compose-btn">
                                                <li>
                                                    <Button
                                                        href="#"
                                                        variant="primary"
                                                        size="xs"
                                                    >Post</Button>
                                                </li>
                                            </ul>
                                        </div>
                                    </section>

                                    <h4 className="mb-3 pt-4">Timeline</h4>

                                    <TimeLine className="timeline-simple my-3">
                                        <TimeLineGroup title={ <h5 className="m-0 py-2 text-uppercase">November 2020</h5> }>
                                            <TimeLineItem>
                                                <TimeLineItem.Box>
                                                    <p className="text-muted mb-0">7 months ago.</p>
                                                    <p>
                                                        It's awesome when we find a good solution for our projects, Porto Admin is <span className="text-color-primary">#awesome</span>
                                                    </p>
                                                </TimeLineItem.Box>
                                            </TimeLineItem>
                                            <TimeLineItem>
                                                <TimeLineItem.Box>
                                                    <p className="text-muted mb-0">7 months ago.</p>
                                                    <p>
                                                        What is your biggest developer pain point?
                                                    </p>
                                                </TimeLineItem.Box>
                                            </TimeLineItem>
                                            <TimeLineItem>
                                                <TimeLineItem.Box>
                                                    <p className="text-muted mb-0">7 months ago.</p>
                                                    <p>
                                                        Checkout! How cool is that!
                                                    </p>
                                                    <div className="thumbnail-gallery">
                                                        <a className="img-thumbnail lightbox d-block" href="#lightbox" onClick={ showLightBox }>
                                                            <PtLazyLoad
                                                                className="img-fluid"
                                                                src={ `${ process.env.PUBLIC_URL }/assets/images/projects/project-4.jpg` }
                                                                alt="lightbox"
                                                                width={ 215 }
                                                                height={ 215 }
                                                            />
                                                            <span className="zoom"><i className="fas fa-search"></i></span>
                                                        </a>
                                                    </div>
                                                </TimeLineItem.Box>
                                            </TimeLineItem>
                                        </TimeLineGroup>
                                    </TimeLine>
                                </div>
                            </Tab>

                            <Tab eventKey="edit" title="Edit">
                                <Form className="p-3">
                                    <h4 className="mb-3">Personal Information</h4>
                                    <Form.Group>
                                        <Form.Label>Address</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="1234 Main St"
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Address 2</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Apartment, studiio, or floor"
                                        />
                                    </Form.Group>
                                    <Form.Row>
                                        <Form.Group as={ Col } md={ 6 }>
                                            <Form.Label>City</Form.Label>
                                            <Form.Control type="text" />
                                        </Form.Group>
                                        <Form.Group as={ Col } md={ 4 } className="pt-md-0 border-top-0">
                                            <Form.Label>State</Form.Label>
                                            <Form.Control as="select">
                                                <option>Choose...</option>
                                                <option>...</option>
                                            </Form.Control>
                                        </Form.Group>
                                        <Form.Group as={ Col } md={ 2 } className="pt-md-0 border-top-0">
                                            <Form.Label>Zip</Form.Label>
                                            <Form.Control tpye="text" />
                                        </Form.Group>
                                    </Form.Row>

                                    <hr className="dotted tall" />

                                    <h4 className="mb-3">Change Password</h4>

                                    <Form.Row>
                                        <Form.Group as={ Col } md={ 6 }>
                                            <Form.Label>New Password</Form.Label>
                                            <Form.Control
                                                type="password"
                                                placeholder="Password"
                                            />
                                        </Form.Group>

                                        <Form.Group as={ Col } md={ 6 } className="pt-md-0 border-top-0">
                                            <Form.Label>Re New Password</Form.Label>
                                            <Form.Control
                                                type="password"
                                                placeholder="Password"
                                            />
                                        </Form.Group>
                                    </Form.Row>

                                    <Form.Row>
                                        <Col md={ 12 } className="text-right mt-3">
                                            <Button
                                                variant="primary"
                                            >Save</Button>
                                        </Col>
                                    </Form.Row>
                                </Form>
                            </Tab>
                        </Tabs>
                    </div>
                </Col>

                <Col xl={ 3 }>
                    <h4 className="mb-3 mt-0">Sale Stats</h4>
                    <ul className="simple-card-list mb-3">
                        <li className="primary">
                            <h3>488</h3>
                            <p className="text-light">Nullam quris ris.</p>
                        </li>
                        <li className="primary">
                            <h3>$ 189,000.00</h3>
                            <p className="text-light">Nullam quris ris.</p>
                        </li>
                        <li className="primary">
                            <h3>16</h3>
                            <p className="text-light">Nullam quris ris.</p>
                        </li>
                    </ul>

                    <h4 className="mb-3 mt-4 pt-2">Projects</h4>
                    <ul className="simple-bullet-list">
                        <li className="red">
                            <span className="title">Porto Template</span>
                            <span className="description truncate">Lorem ipsom dolor sit.</span>
                        </li>
                        <li className="green">
                            <span className="title">Tucson HTML5 Template</span>
                            <span className="description truncate">Lorem ipsom dolor sit amet</span>
                        </li>
                        <li className="blue">
                            <span className="title">Porto HTML5 Template</span>
                            <span className="description truncate">Lorem ipsom dolor sit.</span>
                        </li>
                        <li className="orange">
                            <span className="title">Tucson Template</span>
                            <span className="description truncate">Lorem ipsom dolor sit.</span>
                        </li>
                    </ul>

                    <h4 className="mb-3 mt-4 pt-2">Messages</h4>
                    <ul className="simple-user-list mb-3">
                        <li>
                            <figure className="image rounded">
                                <PtLazyLoad
                                    src={ `${ process.env.PUBLIC_URL }/assets/images/users/!sample-user.jpg` }
                                    alt="Joseph Doe Junior"
                                    className="rounded-circle"
                                    width={ 35 }
                                    height={ 35 }
                                />
                            </figure>
                            <span className="title">Joseph Doe Junior</span>
                            <span className="message truncate">Lorem ipsum dolor sit.</span>
                        </li>
                        <li>
                            <figure className="image rounded">
                                <PtLazyLoad
                                    src={ `${ process.env.PUBLIC_URL }/assets/images/users/!sample-user.jpg` }
                                    alt="Joseph Junior"
                                    className="rounded-circle"
                                    width={ 35 }
                                    height={ 35 }
                                />
                            </figure>
                            <span className="title">Joseph Junior</span>
                            <span className="message truncate">Lorem ipsum dolor sit.</span>
                        </li>
                        <li>
                            <figure className="image rounded">
                                <PtLazyLoad
                                    src={ `${ process.env.PUBLIC_URL }/assets/images/users/!sample-user.jpg` }
                                    alt="Joe Junior"
                                    className="rounded-circle"
                                    width={ 35 }
                                    height={ 35 }
                                />
                            </figure>
                            <span className="title">Joe Junior</span>
                            <span className="message truncate">Lorem ipsum dolor sit.</span>
                        </li>
                        <li>
                            <figure className="image rounded">
                                <PtLazyLoad
                                    src={ `${ process.env.PUBLIC_URL }/assets/images/users/!sample-user.jpg` }
                                    alt="Joseph Doe Junior"
                                    className="rounded-circle"
                                    width={ 35 }
                                    height={ 35 }
                                />
                            </figure>
                            <span className="title">Joseph Doe Junior</span>
                            <span className="message truncate">Lorem ipsum dolor sit.</span>
                        </li>
                    </ul>
                </Col>
            </Row>

            {
                openLB && (
                    <LightBox
                        mainSrc={ `${ process.env.PUBLIC_URL }/assets/images/projects/project-4.jpg` }
                        reactModalStyle={ {
                            overlay: {
                                zIndex: '9999'
                            }
                        } }
                        onCloseRequest={ closeLightBox }
                    />
                )
            }
        </>
    )
}

export default React.memo( UserProfile );