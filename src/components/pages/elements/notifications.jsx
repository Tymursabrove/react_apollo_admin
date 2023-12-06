import React, { useEffect } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap'
import { toast } from 'react-toastify';

import Breadcrumb from '../../common/breadcrumb';
import PNotify from '../../features/elements/p-notify';

import { withCardActions } from '../../hoc';

const CardWithActions = withCardActions( Card );

function NotificationsPage () {

    useEffect( () => {
        document.querySelector( ".content-body" ).classList.add( "card-margin" );

        return () => {
            document.querySelector( ".content-body" ).classList.remove( "card-margin" );
        };
    }, [] )

    return (
        <>
            <Breadcrumb current="Notifications" paths={ [ {
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
                            <Card.Title>Default Notifications</Card.Title>
                        </Card.Header>

                        <Card.Body>
                            <Button
                                className="my-3 mr-1"
                                variant="primary"
                                onClick={ () => toast(
                                    <PNotify title="Regular Notice" icon="fab fa-twitter" text="Check me out! I'm a notice." />,
                                    {
                                        containerId: "default",
                                        className: "notification-primary"
                                    }
                                ) }
                            >
                                Primary
                            </Button>

                            <Button
                                className="my-3 mr-1"
                                variant="warning"
                                onClick={ () => toast(
                                    <PNotify title="Regular Notice" icon="fas fa-exclamation" text="Check me out! I'm a notice." />,
                                    {
                                        containerId: 'default',
                                        className: "notification-warning"
                                    }
                                ) }
                            >
                                Warning
                            </Button>

                            <Button
                                className="my-3 mr-1"
                                variant="success"
                                onClick={ () => toast(
                                    <PNotify title="Regular Notice" icon="fas fa-check" text="Check me out! I'm a notice." />,
                                    {
                                        containerId: 'default',
                                        className: "notification-success"
                                    }
                                ) }
                            >
                                Success
                            </Button>

                            <Button
                                className="my-3 mr-1"
                                variant="info"
                                onClick={ () => toast(
                                    <PNotify title="Regular Notice" icon="fas fa-info" text="Check me out! I'm a notice." />,
                                    {
                                        containerId: 'default',
                                        className: "notification-info"
                                    }
                                ) }
                            >
                                Success
                            </Button>

                            <Button
                                className="my-3 mr-1"
                                variant="danger"
                                onClick={ () => toast(
                                    <PNotify title="Regular Notice" icon="fas fa-times" text="Check me out! I'm a notice." />,
                                    {
                                        containerId: 'default',
                                        className: "notification-danger"
                                    }
                                ) }
                            >
                                Error
                            </Button>

                            <Button
                                className="my-3 mr-1"
                                variant="dark"
                                onClick={ () => toast(
                                    <PNotify title="Regular Notice" icon="fas fa-user" text="Check me out! I'm a notice." />,
                                    {
                                        containerId: 'default',
                                        className: "notification-dark"
                                    }
                                ) }
                            >
                                Dark
                            </Button>
                        </Card.Body>
                    </CardWithActions>

                    <CardWithActions>
                        <Card.Header>
                            <Card.Title>Notifications with Shadow</Card.Title>
                        </Card.Header>

                        <Card.Body>
                            <Button
                                className="my-3 mr-1"
                                variant="primary"
                                onClick={ () => toast(
                                    <PNotify title="Regular Notice" icon="fab fa-twitter" text="Check me out! I'm a notice." />,
                                    {
                                        containerId: 'default',
                                        className: "notification-primary ui-pnotify-shadow"
                                    }
                                ) }
                            >
                                Primary
                            </Button>

                            <Button
                                className="my-3 mr-1"
                                variant="warning"
                                onClick={ () => toast(
                                    <PNotify title="With Shadow" icon="fas fa-exclamation" text="Check me out! I'm a notice." />,
                                    {
                                        containerId: 'default',
                                        className: "notification-warning ui-pnotify-shadow"
                                    }
                                ) }
                            >
                                Warning
                            </Button>

                            <Button
                                className="my-3 mr-1"
                                variant="success"
                                onClick={ () => toast(
                                    <PNotify title="With Shadow" icon="fas fa-check" text="Check me out! I'm a notice." />,
                                    {
                                        containerId: 'default',
                                        className: "notification-success ui-pnotify-shadow"
                                    }
                                ) }
                            >
                                Success
                            </Button>

                            <Button
                                className="my-3 mr-1"
                                variant="info"
                                onClick={ () => toast(
                                    <PNotify title="With Shadow" icon="fas fa-info" text="Check me out! I'm a notice." />,
                                    {
                                        containerId: 'default',
                                        className: "notification-info ui-pnotify-shadow"
                                    }
                                ) }
                            >
                                Success
                            </Button>

                            <Button
                                className="my-3 mr-1"
                                variant="danger"
                                onClick={ () => toast(
                                    <PNotify title="With Shadow" icon="fas fa-times" text="Check me out! I'm a notice." />,
                                    {
                                        containerId: 'default',
                                        className: "notification-danger ui-pnotify-shadow"
                                    }
                                ) }
                            >
                                Error
                            </Button>

                            <Button
                                className="my-3 mr-1"
                                variant="dark"
                                onClick={ () => toast(
                                    <PNotify title="With Shadow" icon="fas fa-user" text="Check me out! I'm a notice." />,
                                    {
                                        containerId: 'default',
                                        className: "notification-dark ui-pnotify-shadow"
                                    }
                                ) }
                            >
                                Dark
                            </Button>
                        </Card.Body>
                    </CardWithActions>

                    <CardWithActions>
                        <Card.Header>
                            <Card.Title>Notifications without Icons</Card.Title>
                        </Card.Header>

                        <Card.Body>
                            <Button
                                className="my-3 mr-1"
                                variant="primary"
                                onClick={ () => toast(
                                    <PNotify title="Regular Notice" text="Check me out! I'm a notice." />,
                                    {
                                        containerId: 'default',
                                        className: "notification-primary no-icon"
                                    }
                                ) }
                            >
                                Primary
                            </Button>

                            <Button
                                className="my-3 mr-1"
                                variant="warning"
                                onClick={ () => toast(
                                    <PNotify title="Regular Notice" text="Check me out! I'm a notice." />,
                                    {
                                        containerId: 'default',
                                        className: "notification-warning no-icon"
                                    }
                                ) }
                            >
                                Warning
                            </Button>

                            <Button
                                className="my-3 mr-1"
                                variant="success"
                                onClick={ () => toast(
                                    <PNotify title="Regular Notice" text="Check me out! I'm a notice." />,
                                    {
                                        containerId: 'default',
                                        className: "notification-success no-icon"
                                    }
                                ) }
                            >
                                Success
                            </Button>

                            <Button
                                className="my-3 mr-1"
                                variant="info"
                                onClick={ () => toast(
                                    <PNotify title="Regular Notice" text="Check me out! I'm a notice." />,
                                    {
                                        containerId: 'default',
                                        className: "notification-info no-icon"
                                    }
                                ) }
                            >
                                Success
                            </Button>

                            <Button
                                className="my-3 mr-1"
                                variant="danger"
                                onClick={ () => toast(
                                    <PNotify title="Regular Notice" text="Check me out! I'm a notice." />,
                                    {
                                        containerId: 'default',
                                        className: "notification-danger no-icon"
                                    }
                                ) }
                            >
                                Error
                            </Button>

                            <Button
                                className="my-3 mr-1"
                                variant="dark"
                                onClick={ () => toast(
                                    <PNotify title="Regular Notice" text="Check me out! I'm a notice." />,
                                    {
                                        containerId: 'default',
                                        className: "notification-dark no-icon"
                                    }
                                ) }
                            >
                                Dark
                            </Button>
                        </Card.Body>
                    </CardWithActions>

                    <CardWithActions>
                        <Card.Header>
                            <Card.Title>Notifications without border radius</Card.Title>
                        </Card.Header>

                        <Card.Body>
                            <Button
                                className="my-3 mr-1"
                                variant="primary"
                                onClick={ () => toast(
                                    <PNotify title="Regular Notice" icon="fab fa-twitter" text="Check me out! I'm a notice." />,
                                    {
                                        containerId: 'default',
                                        className: "notification-primary ui-pnotify-sharp"
                                    }
                                ) }
                            >
                                Primary
                            </Button>

                            <Button
                                className="my-3 mr-1"
                                variant="warning"
                                onClick={ () => toast(
                                    <PNotify title="Regular Notice" icon="fas fa-exclamation" text="Check me out! I'm a notice." />,
                                    {
                                        containerId: 'default',
                                        className: "notification-warning ui-pnotify-sharp"
                                    }
                                ) }
                            >
                                Warning
                            </Button>

                            <Button
                                className="my-3 mr-1"
                                variant="success"
                                onClick={ () => toast(
                                    <PNotify title="Regular Notice" icon="fas fa-check" text="Check me out! I'm a notice." />,
                                    {
                                        containerId: 'default',
                                        className: "notification-success ui-pnotify-sharp"
                                    }
                                ) }
                            >
                                Success
                            </Button>

                            <Button
                                className="my-3 mr-1"
                                variant="info"
                                onClick={ () => toast(
                                    <PNotify title="Regular Notice" icon="fas fa-info" text="Check me out! I'm a notice." />,
                                    {
                                        containerId: 'default',
                                        className: "notification-info ui-pnotify-sharp"
                                    }
                                ) }
                            >
                                Success
                            </Button>

                            <Button
                                className="my-3 mr-1"
                                variant="danger"
                                onClick={ () => toast(
                                    <PNotify title="Regular Notice" icon="fas fa-times" text="Check me out! I'm a notice." />,
                                    {
                                        containerId: 'default',
                                        className: "notification-danger ui-pnotify-sharp"
                                    }
                                ) }
                            >
                                Error
                            </Button>

                            <Button
                                className="my-3 mr-1"
                                variant="dark"
                                onClick={ () => toast(
                                    <PNotify title="Regular Notice" icon="fas fa-user" text="Check me out! I'm a notice." />,
                                    {
                                        containerId: 'default',
                                        className: "notification-dark ui-pnotify-sharp"
                                    }
                                ) }
                            >
                                Dark
                            </Button>
                        </Card.Body>
                    </CardWithActions>

                    <CardWithActions>
                        <Card.Header>
                            <Card.Title>Notifications icons without border</Card.Title>
                        </Card.Header>

                        <Card.Body>
                            <Button
                                className="my-3 mr-1"
                                variant="primary"
                                onClick={ () => toast(
                                    <PNotify title="Regular Notice" icon="fab fa-twitter" text="Check me out! I'm a notice." />,
                                    {
                                        containerId: 'default',
                                        className: "notification-primary icon-nb"
                                    }
                                ) }
                            >
                                Primary
                            </Button>

                            <Button
                                className="my-3 mr-1"
                                variant="warning"
                                onClick={ () => toast(
                                    <PNotify title="Regular Notice" icon="fas fa-exclamation" text="Check me out! I'm a notice." />,
                                    {
                                        containerId: 'default',
                                        className: "notification-warning icon-nb"
                                    }
                                ) }
                            >
                                Warning
                            </Button>

                            <Button
                                className="my-3 mr-1"
                                variant="success"
                                onClick={ () => toast(
                                    <PNotify title="Regular Notice" icon="fas fa-check" text="Check me out! I'm a notice." />,
                                    {
                                        containerId: 'default',
                                        className: "notification-success icon-nb"
                                    }
                                ) }
                            >
                                Success
                            </Button>

                            <Button
                                className="my-3 mr-1"
                                variant="info"
                                onClick={ () => toast(
                                    <PNotify title="Regular Notice" icon="fas fa-info" text="Check me out! I'm a notice." />,
                                    {
                                        containerId: 'default',
                                        className: "notification-info icon-nb"
                                    }
                                ) }
                            >
                                Success
                            </Button>

                            <Button
                                className="my-3 mr-1"
                                variant="danger"
                                onClick={ () => toast(
                                    <PNotify title="Regular Notice" icon="fas fa-times" text="Check me out! I'm a notice." />,
                                    {
                                        containerId: 'default',
                                        className: "notification-danger icon-nb"
                                    }
                                ) }
                            >
                                Error
                            </Button>

                            <Button
                                className="my-3 mr-1"
                                variant="dark"
                                onClick={ () => toast(
                                    <PNotify title="Regular Notice" icon="fas fa-user" text="Check me out! I'm a notice." />,
                                    {
                                        containerId: 'default',
                                        className: "notification-dark icon-nb"
                                    }
                                ) }
                            >
                                Dark
                            </Button>
                        </Card.Body>
                    </CardWithActions>

                    <CardWithActions>
                        <Card.Header>
                            <Card.Title>Notifications Sticky</Card.Title>
                        </Card.Header>

                        <Card.Body>
                            <Button
                                className="my-3 mr-1"
                                variant="primary"
                                onClick={ () => toast(
                                    <PNotify title="Regular Notice" icon="fab fa-twitter" text="Check me out! I'm a notice." />,
                                    {
                                        containerId: 'default',
                                        autoClose: false,
                                        className: "notification-primary"
                                    }
                                ) }
                            >
                                Primary
                            </Button>

                            <Button
                                className="my-3 mr-1"
                                variant="warning"
                                onClick={ () => toast(
                                    <PNotify title="Regular Notice" icon="fas fa-exclamation" text="Check me out! I'm a notice." />,
                                    {
                                        containerId: 'default',
                                        autoClose: false,
                                        className: "notification-warning"
                                    }
                                ) }
                            >
                                Warning
                            </Button>

                            <Button
                                className="my-3 mr-1"
                                variant="success"
                                onClick={ () => toast(
                                    <PNotify title="Regular Notice" icon="fas fa-check" text="Check me out! I'm a notice." />,
                                    {
                                        containerId: 'default',
                                        autoClose: false,
                                        className: "notification-success"
                                    }
                                ) }
                            >
                                Success
                            </Button>

                            <Button
                                className="my-3 mr-1"
                                variant="info"
                                onClick={ () => toast(
                                    <PNotify title="Regular Notice" icon="fas fa-info" text="Check me out! I'm a notice." />,
                                    {
                                        containerId: 'default',
                                        autoClose: false,
                                        className: "notification-info"
                                    }
                                ) }
                            >
                                Success
                            </Button>

                            <Button
                                className="my-3 mr-1"
                                variant="danger"
                                onClick={ () => toast(
                                    <PNotify title="Regular Notice" icon="fas fa-times" text="Check me out! I'm a notice." />,
                                    {
                                        containerId: 'default',
                                        autoClose: false,
                                        className: "notification-danger"
                                    }
                                ) }
                            >
                                Error
                            </Button>

                            <Button
                                className="my-3 mr-1"
                                variant="dark"
                                onClick={ () => toast(
                                    <PNotify title="Regular Notice" icon="fas fa-user" text="Check me out! I'm a notice." />,
                                    {
                                        containerId: 'default',
                                        autoClose: false,
                                        className: "notification-dark"
                                    }
                                ) }
                            >
                                Dark
                            </Button>
                        </Card.Body>
                    </CardWithActions>

                    <CardWithActions>
                        <Card.Header>
                            <Card.Title>Notifications Click to close</Card.Title>
                        </Card.Header>

                        <Card.Body>
                            <Button
                                className="my-3 mr-1"
                                variant="primary"
                                onClick={ () => toast(
                                    <PNotify title="Regular Notice" icon="fab fa-twitter" text="Check me out! I'm a notice." />,
                                    {
                                        containerId: 'default',
                                        closeOnClick: true,
                                        className: "notification-primary"
                                    }
                                ) }
                            >
                                Primary
                            </Button>

                            <Button
                                className="my-3 mr-1"
                                variant="warning"
                                onClick={ () => toast(
                                    <PNotify title="Regular Notice" icon="fas fa-exclamation" text="Check me out! I'm a notice." />,
                                    {
                                        containerId: 'default',
                                        closeOnClick: true,
                                        className: "notification-warning"
                                    }
                                ) }
                            >
                                Warning
                            </Button>

                            <Button
                                className="my-3 mr-1"
                                variant="success"
                                onClick={ () => toast(
                                    <PNotify title="Regular Notice" icon="fas fa-check" text="Check me out! I'm a notice." />,
                                    {
                                        containerId: 'default',
                                        closeOnClick: true,
                                        className: "notification-success"
                                    }
                                ) }
                            >
                                Success
                            </Button>

                            <Button
                                className="my-3 mr-1"
                                variant="info"
                                onClick={ () => toast(
                                    <PNotify title="Regular Notice" icon="fas fa-info" text="Check me out! I'm a notice." />,
                                    {
                                        containerId: 'default',
                                        closeOnClick: true,
                                        className: "notification-info"
                                    }
                                ) }
                            >
                                Success
                            </Button>

                            <Button
                                className="my-3 mr-1"
                                variant="danger"
                                onClick={ () => toast(
                                    <PNotify title="Regular Notice" icon="fas fa-times" text="Check me out! I'm a notice." />,
                                    {
                                        containerId: 'default',
                                        closeOnClick: true,
                                        className: "notification-danger"
                                    }
                                ) }
                            >
                                Error
                            </Button>

                            <Button
                                className="my-3 mr-1"
                                variant="dark"
                                onClick={ () => toast(
                                    <PNotify title="Regular Notice" icon="fas fa-user" text="Check me out! I'm a notice." />,
                                    {
                                        containerId: 'default',
                                        closeOnClick: true,
                                        className: "notification-dark"
                                    }
                                ) }
                            >
                                Dark
                            </Button>
                        </Card.Body>
                    </CardWithActions>
                </Col>

                <Col lg={ 6 }>
                    <CardWithActions>
                        <Card.Header>
                            <Card.Title>Positions</Card.Title>
                        </Card.Header>

                        <Card.Body>
                            <Button
                                className="my-3 mr-1"
                                variant="primary"
                                onClick={ () => toast(
                                    <PNotify title="Regular Notice" icon="fab fa-twitter" text="Check me out! I'm a notice." />,
                                    {
                                        containerId: 'default',
                                        position: "top-left",
                                        className: "notification-primary"
                                    }
                                ) }
                            >
                                Top Left, Moves down. Pushes to stack top.
                            </Button>

                            <Button
                                className="my-3 mr-1"
                                variant="warning"
                                onClick={ () => toast(
                                    <PNotify title="Regular Notice" icon="fas fa-exclamation" text="Check me out! I'm a notice." />,
                                    {
                                        containerId: 'default',
                                        position: "top-left",
                                        className: "notification-warning"
                                    }
                                ) }
                            >
                                Top Left, Moves down. Pushes to stack top.
                            </Button>

                            <Button
                                className="my-3 mr-1"
                                variant="success"
                                onClick={ () => toast(
                                    <PNotify title="Regular Notice" icon="fas fa-check" text="Check me out! I'm a notice." />,
                                    {
                                        containerId: 'default',
                                        position: "top-left",
                                        className: "notification-success"
                                    }
                                ) }
                            >
                                Top Left, Moves down. Pushes to stack top.
                            </Button>

                            <Button
                                className="my-3 mr-1"
                                variant="info"
                                onClick={ () => toast(
                                    <PNotify title="Regular Notice" icon="fas fa-info" text="Check me out! I'm a notice." />,
                                    {
                                        containerId: 'default',
                                        position: "top-left",
                                        className: "notification-info"
                                    }
                                ) }
                            >
                                Top Left, Moves down. Pushes to stack top.
                            </Button>

                            <Button
                                className="my-3 mr-1"
                                variant="danger"
                                onClick={ () => toast(
                                    <PNotify title="Regular Notice" icon="fas fa-times" text="Check me out! I'm a notice." />,
                                    {
                                        containerId: 'default',
                                        position: "top-left",
                                        className: "notification-danger"
                                    }
                                ) }
                            >
                                Top Left, Moves down. Pushes to stack top.
                            </Button>

                            <Button
                                className="my-3 mr-1"
                                variant="dark"
                                onClick={ () => toast(
                                    <PNotify title="Regular Notice" icon="fas fa-user" text="Check me out! I'm a notice." />,
                                    {
                                        containerId: 'default',
                                        position: "top-left",
                                        className: "notification-dark"
                                    }
                                ) }
                            >
                                Top Left, Moves down. Pushes to stack top.
                            </Button>

                            <br />
                            <br />
                            <br />

                            <Button
                                className="my-3 mr-1"
                                variant="primary"
                                onClick={ () => toast(
                                    <PNotify title="Regular Notice" icon="fab fa-twitter" text="Check me out! I'm a notice." />,
                                    {
                                        containerId: "bottom-left",
                                        className: "notification-primary"
                                    }
                                ) }
                            >
                                Bottom Left. Moves up, then right. Pushes to stack top.
                            </Button>

                            <Button
                                className="my-3 mr-1"
                                variant="warning"
                                onClick={ () => toast(
                                    <PNotify title="Regular Notice" icon="fas fa-exclamation" text="Check me out! I'm a notice." />,
                                    {
                                        containerId: "bottom-left",
                                        className: "notification-warning"
                                    }
                                ) }
                            >
                                Bottom Left. Moves up, then right. Pushes to stack top.
                            </Button>

                            <Button
                                className="my-3 mr-1"
                                variant="success"
                                onClick={ () => toast(
                                    <PNotify title="Regular Notice" icon="fas fa-check" text="Check me out! I'm a notice." />,
                                    {
                                        containerId: "bottom-left",
                                        className: "notification-success"
                                    }
                                ) }
                            >
                                Bottom Left. Moves up, then right. Pushes to stack top.
                            </Button>

                            <Button
                                className="my-3 mr-1"
                                variant="info"
                                onClick={ () => toast(
                                    <PNotify title="Regular Notice" icon="fas fa-info" text="Check me out! I'm a notice." />,
                                    {
                                        containerId: "bottom-left",
                                        className: "notification-info"
                                    }
                                ) }
                            >
                                Bottom Left. Moves up, then right. Pushes to stack top.
                            </Button>

                            <Button
                                className="my-3 mr-1"
                                variant="danger"
                                onClick={ () => toast(
                                    <PNotify title="Regular Notice" icon="fas fa-times" text="Check me out! I'm a notice." />,
                                    {
                                        containerId: "bottom-left",
                                        className: "notification-danger"
                                    }
                                ) }
                            >
                                Bottom Left. Moves up, then right. Pushes to stack top.
                            </Button>

                            <Button
                                className="my-3 mr-1"
                                variant="dark"
                                onClick={ () => toast(
                                    <PNotify title="Regular Notice" icon="fas fa-user" text="Check me out! I'm a notice." />,
                                    {
                                        position: "bottom-left",
                                        className: "notification-dark"
                                    }
                                ) }
                            >
                                Bottom Left. Moves up, then right. Pushes to stack top.
                            </Button>

                            <br />
                            <br />
                            <br />

                            <Button
                                className="my-3 mr-1"
                                variant="primary"
                                onClick={ () => toast(
                                    <PNotify title="Regular Notice" icon="fab fa-twitter" text="Check me out! I'm a notice." />,
                                    {
                                        containerId: "bottom-right",
                                        className: "notification-primary"
                                    }
                                ) }
                            >
                                Bottom Right. Moves up, then left. Pushes to stack bottom.
                            </Button>

                            <Button
                                className="my-3 mr-1"
                                variant="warning"
                                onClick={ () => toast(
                                    <PNotify title="Regular Notice" icon="fas fa-exclamation" text="Check me out! I'm a notice." />,
                                    {
                                        containerId: "bottom-right",
                                        className: "notification-warning"
                                    }
                                ) }
                            >
                                Bottom Right. Moves up, then left. Pushes to stack bottom.
                            </Button>

                            <Button
                                className="my-3 mr-1"
                                variant="success"
                                onClick={ () => toast(
                                    <PNotify title="Regular Notice" icon="fas fa-check" text="Check me out! I'm a notice." />,
                                    {
                                        containerId: "bottom-right",
                                        className: "notification-success"
                                    }
                                ) }
                            >
                                Bottom Right. Moves up, then left. Pushes to stack bottom.
                            </Button>

                            <Button
                                className="my-3 mr-1"
                                variant="info"
                                onClick={ () => toast(
                                    <PNotify title="Regular Notice" icon="fas fa-info" text="Check me out! I'm a notice." />,
                                    {
                                        containerId: "bottom-right",
                                        className: "notification-info"
                                    }
                                ) }
                            >
                                Bottom Right. Moves up, then left. Pushes to stack bottom.
                            </Button>

                            <Button
                                className="my-3 mr-1"
                                variant="danger"
                                onClick={ () => toast(
                                    <PNotify title="Regular Notice" icon="fas fa-times" text="Check me out! I'm a notice." />,
                                    {
                                        containerId: "bottom-right",
                                        className: "notification-danger"
                                    }
                                ) }
                            >
                                Bottom Right. Moves up, then left. Pushes to stack bottom.
                            </Button>

                            <Button
                                className="my-3 mr-1"
                                variant="dark"
                                onClick={ () => toast(
                                    <PNotify title="Regular Notice" icon="fas fa-user" text="Check me out! I'm a notice." />,
                                    {
                                        position: "bottom-right",
                                        className: "notification-dark"
                                    }
                                ) }
                            >
                                Bottom Right. Moves up, then left. Pushes to stack bottom.
                            </Button>

                            <br />
                            <br />
                            <br />

                            <Button
                                className="my-3 mr-1"
                                variant="primary"
                                onClick={ () => toast(
                                    <PNotify title="Regular Notice" icon="fab fa-twitter" text="Check me out! I'm a notice." />,
                                    {
                                        containerId: "top-bar",
                                        className: "notification-primary"
                                    }
                                ) }
                            >
                                Top bar style. (Like Old Microsoft Notification Bars.) Moves down, then right. Pushes to stack top.
                            </Button>

                            <Button
                                className="my-3 mr-1"
                                variant="warning"
                                onClick={ () => toast(
                                    <PNotify title="Regular Notice" icon="fas fa-exclamation" text="Check me out! I'm a notice." />,
                                    {
                                        containerId: "top-bar",
                                        className: "notification-warning"
                                    }
                                ) }
                            >
                                Top bar style. (Like Old Microsoft Notification Bars.) Moves down, then right. Pushes to stack top.
                            </Button>

                            <Button
                                className="my-3 mr-1"
                                variant="success"
                                onClick={ () => toast(
                                    <PNotify title="Regular Notice" icon="fas fa-check" text="Check me out! I'm a notice." />,
                                    {
                                        containerId: "top-bar",
                                        className: "notification-success"
                                    }
                                ) }
                            >
                                Top bar style. (Like Old Microsoft Notification Bars.) Moves down, then right. Pushes to stack top.
                            </Button>

                            <Button
                                className="my-3 mr-1"
                                variant="info"
                                onClick={ () => toast(
                                    <PNotify title="Regular Notice" icon="fas fa-info" text="Check me out! I'm a notice." />,
                                    {
                                        containerId: "top-bar",
                                        className: "notification-info"
                                    }
                                ) }
                            >
                                Top bar style. (Like Old Microsoft Notification Bars.) Moves down, then right. Pushes to stack top.
                            </Button>

                            <Button
                                className="my-3 mr-1"
                                variant="danger"
                                onClick={ () => toast(
                                    <PNotify title="Regular Notice" icon="fas fa-times" text="Check me out! I'm a notice." />,
                                    {
                                        containerId: "top-bar",
                                        className: "notification-danger"
                                    }
                                ) }
                            >
                                Top bar style. (Like Old Microsoft Notification Bars.) Moves down, then right. Pushes to stack top.
                            </Button>

                            <Button
                                className="my-3 mr-1"
                                variant="dark"
                                onClick={ () => toast(
                                    <PNotify title="Regular Notice" icon="fas fa-user" text="Check me out! I'm a notice." />,
                                    {
                                        position: "top-bar",
                                        className: "notification-dark"
                                    }
                                ) }
                            >
                                Top bar style. (Like Old Microsoft Notification Bars.) Moves down, then right. Pushes to stack top.
                            </Button>

                            <br />
                            <br />
                            <br />

                            <Button
                                className="my-3 mr-1"
                                variant="primary"
                                onClick={ () => toast(
                                    <PNotify title="Regular Notice" icon="fab fa-twitter" text="Check me out! I'm a notice." />,
                                    {
                                        containerId: "bottom-bar",
                                        className: "notification-primary"
                                    }
                                ) }
                            >
                                Bottom bar style. (Like New Microsoft Notification Bars.) Moves up, then right. Pushes to stack bottom.
                            </Button>

                            <Button
                                className="my-3 mr-1"
                                variant="warning"
                                onClick={ () => toast(
                                    <PNotify title="Regular Notice" icon="fas fa-exclamation" text="Check me out! I'm a notice." />,
                                    {
                                        containerId: "bottom-bar",
                                        className: "notification-warning"
                                    }
                                ) }
                            >
                                Bottom bar style. (Like New Microsoft Notification Bars.) Moves up, then right. Pushes to stack bottom.
                            </Button>

                            <Button
                                className="my-3 mr-1"
                                variant="success"
                                onClick={ () => toast(
                                    <PNotify title="Regular Notice" icon="fas fa-check" text="Check me out! I'm a notice." />,
                                    {
                                        containerId: "bottom-bar",
                                        className: "notification-success"
                                    }
                                ) }
                            >
                                Bottom bar style. (Like New Microsoft Notification Bars.) Moves up, then right. Pushes to stack bottom.
                            </Button>

                            <Button
                                className="my-3 mr-1"
                                variant="info"
                                onClick={ () => toast(
                                    <PNotify title="Regular Notice" icon="fas fa-info" text="Check me out! I'm a notice." />,
                                    {
                                        containerId: "bottom-bar",
                                        className: "notification-info"
                                    }
                                ) }
                            >
                                Bottom bar style. (Like New Microsoft Notification Bars.) Moves up, then right. Pushes to stack bottom.
                            </Button>

                            <Button
                                className="my-3 mr-1"
                                variant="danger"
                                onClick={ () => toast(
                                    <PNotify title="Regular Notice" icon="fas fa-times" text="Check me out! I'm a notice." />,
                                    {
                                        containerId: "bottom-bar",
                                        className: "notification-danger"
                                    }
                                ) }
                            >
                                Bottom bar style. (Like New Microsoft Notification Bars.) Moves up, then right. Pushes to stack bottom.
                            </Button>

                            <Button
                                className="my-3 mr-1"
                                variant="dark"
                                onClick={ () => toast(
                                    <PNotify title="Regular Notice" icon="fas fa-user" text="Check me out! I'm a notice." />,
                                    {
                                        position: "bottom-bar",
                                        className: "notification-dark"
                                    }
                                ) }
                            >
                                Bottom bar style. (Like New Microsoft Notification Bars.) Moves up, then right. Pushes to stack bottom.
                            </Button>
                        </Card.Body>
                    </CardWithActions>
                </Col>
            </Row>
        </>
    )
}

export default React.memo( NotificationsPage );