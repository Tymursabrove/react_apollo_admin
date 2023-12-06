import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Modal, Button, Form } from 'react-bootstrap';
import ReactModal from 'react-modal';
import Reveal from 'react-awesome-reveal';
import Select from 'react-select';

import Breadcrumb from '../../common/breadcrumb';

import { withCardActions } from '../../hoc';
import { getTag } from '../../../api';

import { fadeZoomIn, fadeZoomOut, fadeSlideIn, fadeSlideOut } from '../../../utils/data/keyframes';

const CardWithActions = withCardActions( Card );

ReactModal.setAppElement( '#app' );

const customStyles = {
    overlay: {
        background: "rgba(11, 11, 11, .8)",
        zIndex: 2000,
        transition: "opacity .2s ease"
    },
    content: {
        position: 'absolute',
        maxWidth: '600px',
        marginLeft: 'auto',
        marginRight: 'auto',
        outline: 'none',
        top: '50%',
        bottom: 'auto',
        left: '10px',
        right: '10px',
        border: 'none',
        background: "transparent",
        transform: 'translateY(-50%)',
        padding: 0,
        overflowX: "hidden"
    }
};

function ModalsPage () {
    const [ modal, setModal ] = useState( -1 );
    const [ tag, setTag ] = useState( null );
    const [ loading, setLoading ] = useState( true );

    useEffect( () => {
        document.querySelector( ".content-body" ).classList.add( "card-margin" );

        return () => {
            document.querySelector( ".content-body" ).classList.remove( "card-margin" );
        };
    }, [] )

    function openModal ( index ) {
        setModal( index );
    }

    function closeModal () {
        setModal( -1 );
    }

    function loadAjaxData () {
        setLoading( true );
        getTag( 1 ).then( data => {
            setTag( data );
            setLoading( false );
        } );
    }

    return (
        <>
            <Breadcrumb current="Modals" paths={ [ {
                name: "Home",
                url: "/"
            }, {
                name: "Elements",
                url: "/elements"
            } ] } />

            <Row>
                <Col lg={ 6 }>
                    <CardWithActions>
                        <Card.Header>
                            <Card.Title>Basic</Card.Title>
                            <Card.Subtitle>Modals are streamlined, but flexible, dialog prompts with the minimum required functionality and smart defaults.</Card.Subtitle>
                        </Card.Header>

                        <Card.Body>
                            <Button className="my-1 mr-2" variant="default" onClick={ () => openModal( 0 ) }>Basic</Button>

                            <Modal show={ modal === 0 } onHide={ closeModal } centered={ true }>
                                <Card>
                                    <Card.Header>
                                        <Card.Title>Are you sure?</Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <div className="modal-wrapper">
                                            <div className="modal-text">
                                                <p className="mb-0">Are you sure that you want to delete this image?</p>
                                            </div>
                                        </div>
                                    </Card.Body>
                                    <Card.Footer>
                                        <Row>
                                            <Col md={ 12 } className="text-right">
                                                <Button variant="primary" onClick={ closeModal } className="mr-1">Confirm</Button>
                                                <Button variant="default" onClick={ closeModal }>Cancel</Button>
                                            </Col>
                                        </Row>
                                    </Card.Footer>
                                </Card>
                            </Modal>

                            <Button className="my-1 mr-2" variant="default" onClick={ () => openModal( 1 ) }>Icon</Button>

                            <Modal show={ modal === 1 } onHide={ closeModal } centered={ true }>
                                <Card>
                                    <Card.Header>
                                        <Card.Title>Are you sure?</Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <div className="modal-wrapper">
                                            <div className="modal-icon">
                                                <i className="fas fa-question-circle"></i>
                                            </div>
                                            <div className="modal-text">
                                                <p className="mb-0">Are you sure that you want to delete this image?</p>
                                            </div>
                                        </div>
                                    </Card.Body>
                                    <Card.Footer>
                                        <Row>
                                            <Col md={ 12 } className="text-right">
                                                <Button variant="primary" onClick={ closeModal } className="mr-1">Confirm</Button>
                                                <Button variant="default" onClick={ closeModal }>Cancel</Button>
                                            </Col>
                                        </Row>
                                    </Card.Footer>
                                </Card>
                            </Modal>

                            <Button className="my-1 mr-2" variant="default" onClick={ () => openModal( 2 ) }>Center Icon</Button>

                            <Modal show={ modal === 2 } onHide={ closeModal } centered={ true }>
                                <Card>
                                    <Card.Body className="text-center">
                                        <div className="modal-wrapper">
                                            <div className="modal-icon center">
                                                <i className="fas fa-question-circle"></i>
                                            </div>
                                            <div className="modal-text">
                                                <h4>Are you sure?</h4>
                                                <p>Are you sure that you want to delete this image?</p>
                                            </div>
                                        </div>
                                    </Card.Body>
                                    <Card.Footer>
                                        <Row>
                                            <Col md={ 12 } className="text-right">
                                                <Button variant="primary" onClick={ closeModal } className="mr-1">Confirm</Button>
                                                <Button variant="default" onClick={ closeModal }>Cancel</Button>
                                            </Col>
                                        </Row>
                                    </Card.Footer>
                                </Card>
                            </Modal>

                            <Button className="my-1 mr-2" variant="default" onClick={ () => openModal( 3 ) }>No Title</Button>

                            <Modal show={ modal === 3 } onHide={ closeModal } centered={ true }>
                                <Card>
                                    <Card.Body>
                                        <div className="modal-wrapper">
                                            <div className="modal-text">
                                                <p className="mb-0">Are you sure that you want to delete this image?</p>
                                            </div>
                                        </div>
                                    </Card.Body>
                                    <Card.Footer>
                                        <Row>
                                            <Col md={ 12 } className="text-right">
                                                <Button variant="primary" onClick={ closeModal } className="mr-1">Confirm</Button>
                                                <Button variant="default" onClick={ closeModal }>Cancel</Button>
                                            </Col>
                                        </Row>
                                    </Card.Footer>
                                </Card>
                            </Modal>

                            <Button className="my-1 mr-2" variant="default" onClick={ () => openModal( 4 ) }>No Footer</Button>

                            <Modal show={ modal === 4 } onHide={ closeModal } centered={ true }>
                                <Card>
                                    <Card.Header>
                                        <Card.Title>Are you sure?</Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <div className="modal-wrapper">
                                            <div className="modal-text">
                                                <p className="mb-0">Are you sure that you want to delete this image?</p>
                                                <Button variant="primary" onClick={ closeModal } className="mr-1">Confirm</Button>
                                                <Button variant="default" onClick={ closeModal }>Cancel</Button>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Modal>

                            <Button className="my-1 mr-2" variant="default" onClick={ () => openModal( 5 ) }>Center</Button>

                            <Modal show={ modal === 5 } onHide={ closeModal } centered={ true }>
                                <Card>
                                    <Card.Body>
                                        <div className="modal-wrapper">
                                            <div className="modal-text text-center">
                                                <p>Are you sure that you want to delete this image?</p>
                                                <Button variant="primary" onClick={ closeModal } className="mr-1">Confirm</Button>
                                                <Button variant="default" onClick={ closeModal }>Cancel</Button>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Modal>
                        </Card.Body>
                    </CardWithActions>

                    <CardWithActions>
                        <Card.Header>
                            <Card.Title>Contextual</Card.Title>
                            <Card.Subtitle>You can use any of the avaible contextual classes to create a styled modal.</Card.Subtitle>
                        </Card.Header>

                        <Card.Body>
                            <Button className="my-1 mr-2" variant="primary" onClick={ () => openModal( 6 ) }>Primary</Button>

                            <Modal show={ modal === 6 } onHide={ closeModal } centered={ true }>
                                <Card>
                                    <Card.Header>
                                        <Card.Title>Are you sure?</Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <div className="modal-wrapper">
                                            <div className="modal-icon"><i className="fas fa-question-circle"></i></div>
                                            <div className="modal-text">
                                                <h4>Primary</h4>
                                                <p>Are you sure that you want to delete this image?</p>
                                            </div>
                                        </div>
                                    </Card.Body>
                                    <Card.Footer>
                                        <Row>
                                            <Col md={ 12 } className="text-right">
                                                <Button variant="primary" onClick={ closeModal } className="mr-1">Confirm</Button>
                                                <Button variant="default" onClick={ closeModal }>Cancel</Button>
                                            </Col>
                                        </Row>
                                    </Card.Footer>
                                </Card>
                            </Modal>

                            <Button className="my-1 mr-2" variant="success" onClick={ () => openModal( 7 ) }>Success</Button>

                            <Modal show={ modal === 7 } onHide={ closeModal } centered={ true } className="modal-block-success">
                                <Card>
                                    <Card.Header>
                                        <Card.Title>Success!</Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <div className="modal-wrapper">
                                            <div className="modal-icon"><i className="fas fa-check"></i></div>
                                            <div className="modal-text">
                                                <h4>Success</h4>
                                                <p>This is a successful message.</p>
                                            </div>
                                        </div>
                                    </Card.Body>
                                    <Card.Footer>
                                        <Row>
                                            <Col md={ 12 } className="text-right">
                                                <Button variant="success" onClick={ closeModal }>OK</Button>
                                            </Col>
                                        </Row>
                                    </Card.Footer>
                                </Card>
                            </Modal>

                            <Button className="my-1 mr-2" variant="info" onClick={ () => openModal( 8 ) }>Info</Button>

                            <Modal show={ modal === 8 } onHide={ closeModal } centered={ true } className="modal-block-info">
                                <Card>
                                    <Card.Header>
                                        <Card.Title>Information</Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <div className="modal-wrapper">
                                            <div className="modal-icon"><i className="fas fa-info-circle"></i></div>
                                            <div className="modal-text">
                                                <h4>Info</h4>
                                                <p>This is a information message.</p>
                                            </div>
                                        </div>
                                    </Card.Body>
                                    <Card.Footer>
                                        <Row>
                                            <Col md={ 12 } className="text-right">
                                                <Button variant="info" onClick={ closeModal }>OK</Button>
                                            </Col>
                                        </Row>
                                    </Card.Footer>
                                </Card>
                            </Modal>

                            <Button className="my-1 mr-2" variant="warning" onClick={ () => openModal( 9 ) }>Warning</Button>

                            <Modal show={ modal === 9 } onHide={ closeModal } centered={ true } className="modal-block-warning">
                                <Card>
                                    <Card.Header>
                                        <Card.Title>Warning!</Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <div className="modal-wrapper">
                                            <div className="modal-icon"><i className="fas fa-info-circle"></i></div>
                                            <div className="modal-text">
                                                <h4>Warning</h4>
                                                <p>This is a warning message.</p>
                                            </div>
                                        </div>
                                    </Card.Body>
                                    <Card.Footer>
                                        <Row>
                                            <Col md={ 12 } className="text-right">
                                                <Button variant="warning" onClick={ closeModal }>OK</Button>
                                            </Col>
                                        </Row>
                                    </Card.Footer>
                                </Card>
                            </Modal>

                            <Button className="my-1 mr-2" variant="danger" onClick={ () => openModal( 10 ) }>Danger</Button>

                            <Modal show={ modal === 10 } onHide={ closeModal } centered={ true } className="modal-block-danger">
                                <Card>
                                    <Card.Header>
                                        <Card.Title>Danger!</Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <div className="modal-wrapper">
                                            <div className="modal-icon"><i className="fas fa-times-circle"></i></div>
                                            <div className="modal-text">
                                                <h4>Danger</h4>
                                                <p>This is a danger message.</p>
                                            </div>
                                        </div>
                                    </Card.Body>
                                    <Card.Footer>
                                        <Row>
                                            <Col md={ 12 } className="text-right">
                                                <Button variant="danger" onClick={ closeModal }>OK</Button>
                                            </Col>
                                        </Row>
                                    </Card.Footer>
                                </Card>
                            </Modal>
                        </Card.Body>
                    </CardWithActions>

                    <CardWithActions>
                        <Card.Header>
                            <Card.Title>Header Color</Card.Title>
                            <Card.Subtitle>Colored Header Modals</Card.Subtitle>
                        </Card.Header>

                        <Card.Body>
                            <Button className="my-1 mr-2" variant="primary" onClick={ () => openModal( 11 ) }>Primary</Button>

                            <Modal show={ modal === 11 } onHide={ closeModal } centered={ true } className="modal-block modal-header-color modal-block-primary">
                                <Card>
                                    <Card.Header>
                                        <Card.Title>Are you sure?</Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <div className="modal-wrapper">
                                            <div className="modal-icon"><i className="fas fa-question-circle"></i></div>
                                            <div className="modal-text">
                                                <h4>Primary</h4>
                                                <p>Are you sure that you want to delete this image?</p>
                                            </div>
                                        </div>
                                    </Card.Body>
                                    <Card.Footer>
                                        <Row>
                                            <Col md={ 12 } className="text-right">
                                                <Button variant="primary" onClick={ closeModal } className="mr-1">Confirm</Button>
                                                <Button variant="default" onClick={ closeModal }>Cancel</Button>
                                            </Col>
                                        </Row>
                                    </Card.Footer>
                                </Card>
                            </Modal>

                            <Button className="my-1 mr-2" variant="success" onClick={ () => openModal( 12 ) }>Success</Button>

                            <Modal show={ modal === 12 } onHide={ closeModal } centered={ true } className="modal-block modal-header-color modal-block-success">
                                <Card>
                                    <Card.Header>
                                        <Card.Title>Success!</Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <div className="modal-wrapper">
                                            <div className="modal-icon"><i className="fas fa-check"></i></div>
                                            <div className="modal-text">
                                                <h4>Success</h4>
                                                <p>This is a successful message.</p>
                                            </div>
                                        </div>
                                    </Card.Body>
                                    <Card.Footer>
                                        <Row>
                                            <Col md={ 12 } className="text-right">
                                                <Button variant="success" onClick={ closeModal }>OK</Button>
                                            </Col>
                                        </Row>
                                    </Card.Footer>
                                </Card>
                            </Modal>

                            <Button className="my-1 mr-2" variant="info" onClick={ () => openModal( 13 ) }>Info</Button>

                            <Modal show={ modal === 13 } onHide={ closeModal } centered={ true } className="modal-block modal-header-color modal-block-info">
                                <Card>
                                    <Card.Header>
                                        <Card.Title>Information</Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <div className="modal-wrapper">
                                            <div className="modal-icon"><i className="fas fa-info-circle"></i></div>
                                            <div className="modal-text">
                                                <h4>Info</h4>
                                                <p>This is a information message.</p>
                                            </div>
                                        </div>
                                    </Card.Body>
                                    <Card.Footer>
                                        <Row>
                                            <Col md={ 12 } className="text-right">
                                                <Button variant="info" onClick={ closeModal }>OK</Button>
                                            </Col>
                                        </Row>
                                    </Card.Footer>
                                </Card>
                            </Modal>

                            <Button className="my-1 mr-2" variant="warning" onClick={ () => openModal( 14 ) }>Warning</Button>

                            <Modal show={ modal === 14 } onHide={ closeModal } centered={ true } className="modal-block modal-header-color modal-block-warning">
                                <Card>
                                    <Card.Header>
                                        <Card.Title>Warning!</Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <div className="modal-wrapper">
                                            <div className="modal-icon"><i className="fas fa-info-circle"></i></div>
                                            <div className="modal-text">
                                                <h4>Warning</h4>
                                                <p>This is a warning message.</p>
                                            </div>
                                        </div>
                                    </Card.Body>
                                    <Card.Footer>
                                        <Row>
                                            <Col md={ 12 } className="text-right">
                                                <Button variant="warning" onClick={ closeModal }>OK</Button>
                                            </Col>
                                        </Row>
                                    </Card.Footer>
                                </Card>
                            </Modal>

                            <Button className="my-1 mr-2" variant="danger" onClick={ () => openModal( 15 ) }>Danger</Button>

                            <Modal show={ modal === 15 } onHide={ closeModal } centered={ true } className="modal-block modal-header-color modal-block-danger">
                                <Card>
                                    <Card.Header>
                                        <Card.Title>Danger!</Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <div className="modal-wrapper">
                                            <div className="modal-icon"><i className="fas fa-times-circle"></i></div>
                                            <div className="modal-text">
                                                <h4>Danger</h4>
                                                <p>This is a danger message.</p>
                                            </div>
                                        </div>
                                    </Card.Body>
                                    <Card.Footer>
                                        <Row>
                                            <Col md={ 12 } className="text-right">
                                                <Button variant="danger" onClick={ closeModal }>OK</Button>
                                            </Col>
                                        </Row>
                                    </Card.Footer>
                                </Card>
                            </Modal>
                        </Card.Body>
                    </CardWithActions>

                    <CardWithActions>
                        <Card.Header>
                            <Card.Title>Full Color</Card.Title>
                            <Card.Subtitle>Full Colored Modals</Card.Subtitle>
                        </Card.Header>

                        <Card.Body>
                            <Button className="my-1 mr-2" variant="primary" onClick={ () => openModal( 16 ) }>Primary</Button>

                            <Modal show={ modal === 16 } onHide={ closeModal } centered={ true } className="modal-block modal-full-color modal-block-primary">
                                <Card>
                                    <Card.Header>
                                        <Card.Title>Are you sure?</Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <div className="modal-wrapper">
                                            <div className="modal-icon"><i className="fas fa-question-circle"></i></div>
                                            <div className="modal-text">
                                                <h4>Primary</h4>
                                                <p>Are you sure that you want to delete this image?</p>
                                            </div>
                                        </div>
                                    </Card.Body>
                                    <Card.Footer>
                                        <Row>
                                            <Col md={ 12 } className="text-right">
                                                <Button variant="primary" onClick={ closeModal } className="mr-1">Confirm</Button>
                                                <Button variant="default" onClick={ closeModal }>Cancel</Button>
                                            </Col>
                                        </Row>
                                    </Card.Footer>
                                </Card>
                            </Modal>

                            <Button className="my-1 mr-2" variant="success" onClick={ () => openModal( 17 ) }>Success</Button>

                            <Modal show={ modal === 17 } onHide={ closeModal } centered={ true } className="modal-block modal-full-color modal-block-success">
                                <Card>
                                    <Card.Header>
                                        <Card.Title>Success!</Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <div className="modal-wrapper">
                                            <div className="modal-icon"><i className="fas fa-check"></i></div>
                                            <div className="modal-text">
                                                <h4>Success</h4>
                                                <p>This is a successful message.</p>
                                            </div>
                                        </div>
                                    </Card.Body>
                                    <Card.Footer>
                                        <Row>
                                            <Col md={ 12 } className="text-right">
                                                <Button variant="success" onClick={ closeModal }>OK</Button>
                                            </Col>
                                        </Row>
                                    </Card.Footer>
                                </Card>
                            </Modal>

                            <Button className="my-1 mr-2" variant="info" onClick={ () => openModal( 18 ) }>Info</Button>

                            <Modal show={ modal === 18 } onHide={ closeModal } centered={ true } className="modal-block modal-full-color modal-block-info">
                                <Card>
                                    <Card.Header>
                                        <Card.Title>Information</Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <div className="modal-wrapper">
                                            <div className="modal-icon"><i className="fas fa-info-circle"></i></div>
                                            <div className="modal-text">
                                                <h4>Info</h4>
                                                <p>This is a information message.</p>
                                            </div>
                                        </div>
                                    </Card.Body>
                                    <Card.Footer>
                                        <Row>
                                            <Col md={ 12 } className="text-right">
                                                <Button variant="info" onClick={ closeModal }>OK</Button>
                                            </Col>
                                        </Row>
                                    </Card.Footer>
                                </Card>
                            </Modal>

                            <Button className="my-1 mr-2" variant="warning" onClick={ () => openModal( 19 ) }>Warning</Button>

                            <Modal show={ modal === 19 } onHide={ closeModal } centered={ true } className="modal-block modal-full-color modal-block-warning">
                                <Card>
                                    <Card.Header>
                                        <Card.Title>Warning!</Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <div className="modal-wrapper">
                                            <div className="modal-icon"><i className="fas fa-info-circle"></i></div>
                                            <div className="modal-text">
                                                <h4>Warning</h4>
                                                <p>This is a warning message.</p>
                                            </div>
                                        </div>
                                    </Card.Body>
                                    <Card.Footer>
                                        <Row>
                                            <Col md={ 12 } className="text-right">
                                                <Button variant="warning" onClick={ closeModal }>OK</Button>
                                            </Col>
                                        </Row>
                                    </Card.Footer>
                                </Card>
                            </Modal>

                            <Button className="my-1 mr-2" variant="danger" onClick={ () => openModal( 20 ) }>Danger</Button>

                            <Modal show={ modal === 20 } onHide={ closeModal } centered={ true } className="modal-block modal-full-color modal-block-danger">
                                <Card>
                                    <Card.Header>
                                        <Card.Title>Danger!</Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <div className="modal-wrapper">
                                            <div className="modal-icon"><i className="fas fa-times-circle"></i></div>
                                            <div className="modal-text">
                                                <h4>Danger</h4>
                                                <p>This is a danger message.</p>
                                            </div>
                                        </div>
                                    </Card.Body>
                                    <Card.Footer>
                                        <Row>
                                            <Col md={ 12 } className="text-right">
                                                <Button variant="danger" onClick={ closeModal }>OK</Button>
                                            </Col>
                                        </Row>
                                    </Card.Footer>
                                </Card>
                            </Modal>
                        </Card.Body>
                    </CardWithActions>
                </Col>

                <Col lg={ 6 }>
                    <CardWithActions>
                        <Card.Header>
                            <Card.Title>Sizes</Card.Title>
                            <Card.Subtitle>Set the size of the modal using a CSS class.</Card.Subtitle>
                        </Card.Header>

                        <Card.Body>
                            <Button className="my-1 mr-2" variant="default" onClick={ () => openModal( 21 ) }>Extra Small</Button>

                            <Modal show={ modal === 21 } onHide={ closeModal } centered={ true } className="modal-block modal-block-xs">
                                <Card>
                                    <Card.Header>
                                        <Card.Title>Are you sure?</Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <div className="modal-wrapper">
                                            <div className="modal-text">
                                                <p className="mb-0">Are you sure that you want to delete this image?</p>
                                            </div>
                                        </div>
                                    </Card.Body>
                                    <Card.Footer>
                                        <Row>
                                            <Col md={ 12 } className="text-right">
                                                <Button variant="primary" onClick={ closeModal } className="mr-1">Confirm</Button>
                                                <Button variant="default" onClick={ closeModal }>Cancel</Button>
                                            </Col>
                                        </Row>
                                    </Card.Footer>
                                </Card>
                            </Modal>

                            <Button className="my-1 mr-2" variant="default" onClick={ () => openModal( 22 ) }>Small</Button>

                            <Modal show={ modal === 22 } onHide={ closeModal } centered={ true } size="sm">
                                <Card>
                                    <Card.Header>
                                        <Card.Title>Are you sure?</Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <div className="modal-wrapper">
                                            <div className="modal-text">
                                                <p className="mb-0">Are you sure that you want to delete this image?</p>
                                            </div>
                                        </div>
                                    </Card.Body>
                                    <Card.Footer>
                                        <Row>
                                            <Col md={ 12 } className="text-right">
                                                <Button variant="primary" onClick={ closeModal } className="mr-1">Confirm</Button>
                                                <Button variant="default" onClick={ closeModal }>Cancel</Button>
                                            </Col>
                                        </Row>
                                    </Card.Footer>
                                </Card>
                            </Modal>

                            <Button className="my-1 mr-2" variant="default" onClick={ () => openModal( 23 ) }>Medium</Button>

                            <Modal show={ modal === 23 } onHide={ closeModal } centered={ true }>
                                <Card>
                                    <Card.Header>
                                        <Card.Title>Are you sure?</Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <div className="modal-wrapper">
                                            <div className="modal-text">
                                                <p className="mb-0">Are you sure that you want to delete this image?</p>
                                            </div>
                                        </div>
                                    </Card.Body>
                                    <Card.Footer>
                                        <Row>
                                            <Col md={ 12 } className="text-right">
                                                <Button variant="primary" onClick={ closeModal } className="mr-1">Confirm</Button>
                                                <Button variant="default" onClick={ closeModal }>Cancel</Button>
                                            </Col>
                                        </Row>
                                    </Card.Footer>
                                </Card>
                            </Modal>

                            <Button className="my-1 mr-2" variant="default" onClick={ () => openModal( 24 ) }>Large</Button>

                            <Modal show={ modal === 24 } onHide={ closeModal } centered={ true } size="lg">
                                <Card>
                                    <Card.Header>
                                        <Card.Title>Are you sure?</Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <div className="modal-wrapper">
                                            <div className="modal-text">
                                                <p className="mb-0">Are you sure that you want to delete this image?</p>
                                            </div>
                                        </div>
                                    </Card.Body>
                                    <Card.Footer>
                                        <Row>
                                            <Col md={ 12 } className="text-right">
                                                <Button variant="primary" onClick={ closeModal } className="mr-1">Confirm</Button>
                                                <Button variant="default" onClick={ closeModal }>Cancel</Button>
                                            </Col>
                                        </Row>
                                    </Card.Footer>
                                </Card>
                            </Modal>

                            <Button className="my-1 mr-2" variant="default" onClick={ () => openModal( 25 ) }>Full</Button>

                            <Modal show={ modal === 25 } onHide={ closeModal } centered={ true } className="modal-block modal-block-full">
                                <Card>
                                    <Card.Header>
                                        <Card.Title>Are you sure?</Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <div className="modal-wrapper">
                                            <div className="modal-text">
                                                <p className="mb-0">Are you sure that you want to delete this image?</p>
                                            </div>
                                        </div>
                                    </Card.Body>
                                    <Card.Footer>
                                        <Row>
                                            <Col md={ 12 } className="text-right">
                                                <Button variant="primary" onClick={ closeModal } className="mr-1">Confirm</Button>
                                                <Button variant="default" onClick={ closeModal }>Cancel</Button>
                                            </Col>
                                        </Row>
                                    </Card.Footer>
                                </Card>
                            </Modal>
                        </Card.Body>
                    </CardWithActions>

                    <CardWithActions>
                        <Card.Header>
                            <Card.Title>React Modal with CSS animation</Card.Title>
                            <Card.Subtitle>Animations are added with simple CSS transitions, you can make them look however you wish.</Card.Subtitle>
                        </Card.Header>

                        <Card.Body>
                            <Row>
                                <Col lg={ 6 }>
                                    <Button variant="default" className="my-1 mr-2 ws-normal" onClick={ () => openModal( 26 ) }>Open with fade-zoom animation</Button>
                                </Col>

                                <Col lg={ 6 }>
                                    <Button variant="default" className="my-1 mr-2 ws-normal" onClick={ () => openModal( 27 ) }>Open with fade-slide animation</Button>
                                </Col>
                            </Row>

                            <ReactModal
                                isOpen={ modal === 26 }
                                onRequestClose={ closeModal }
                                style={ customStyles }
                                closeTimeoutMS={ 200 }
                            >
                                <Reveal keyframes={ modal < 0 ? fadeZoomOut : fadeZoomIn } duration={ 200 } triggerOnce>
                                    <Card>
                                        <Card.Header>
                                            <Card.Title>Are you sure?</Card.Title>
                                        </Card.Header>
                                        <Card.Body>
                                            <div className="modal-wrapper">
                                                <div className="modal-icon">
                                                    <i className="fas fa-question-circle"></i>
                                                </div>
                                                <div className="modal-text">
                                                    <p className="mb-0">Are you sure that you want to delete this image?</p>
                                                </div>
                                            </div>
                                        </Card.Body>
                                        <Card.Footer>
                                            <Row>
                                                <Col md={ 12 } className="text-right">
                                                    <Button variant="primary" onClick={ closeModal } className="mr-1">Confirm</Button>
                                                    <Button variant="default" onClick={ closeModal }>Cancel</Button>
                                                </Col>
                                            </Row>
                                        </Card.Footer>
                                    </Card>
                                </Reveal>
                            </ReactModal>

                            <ReactModal
                                isOpen={ modal === 27 }
                                onRequestClose={ closeModal }
                                style={ customStyles }
                                closeTimeoutMS={ 200 }
                            >
                                <Reveal keyframes={ modal < 0 ? fadeSlideOut : fadeSlideIn } duration={ 200 } triggerOnce>
                                    <Card>
                                        <Card.Header>
                                            <Card.Title>Are you sure?</Card.Title>
                                        </Card.Header>
                                        <Card.Body>
                                            <div className="modal-wrapper">
                                                <div className="modal-icon">
                                                    <i className="fas fa-question-circle"></i>
                                                </div>
                                                <div className="modal-text">
                                                    <p className="mb-0">Are you sure that you want to delete this image?</p>
                                                </div>
                                            </div>
                                        </Card.Body>
                                        <Card.Footer>
                                            <Row>
                                                <Col md={ 12 } className="text-right">
                                                    <Button variant="primary" onClick={ closeModal } className="mr-1">Confirm</Button>
                                                    <Button variant="default" onClick={ closeModal }>Cancel</Button>
                                                </Col>
                                            </Row>
                                        </Card.Footer>
                                    </Card>
                                </Reveal>
                            </ReactModal>
                        </Card.Body>
                    </CardWithActions>

                    <CardWithActions>
                        <Card.Header>
                            <Card.Title>Form</Card.Title>
                            <Card.Subtitle>Modal with a form and buttons.</Card.Subtitle>
                        </Card.Header>

                        <Card.Body>
                            <Button variant="default" onClick={ () => openModal( 28 ) }>Open Form</Button>

                            <Modal show={ modal === 28 } onHide={ closeModal } centered={ true }>
                                <Card>
                                    <Card.Header>
                                        <Card.Title>Registration Form</Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <Form>
                                            <Form.Row>
                                                <Form.Group as={ Col } md={ 6 }>
                                                    <Form.Label>Email</Form.Label>
                                                    <Form.Control
                                                        type="email"
                                                        placeholder="Email"
                                                    />
                                                </Form.Group>
                                                <Form.Group className="mb-3 mb-lg-0 border-top-0 pt-0" as={ Col } md={ 6 }>
                                                    <Form.Label>Password</Form.Label>
                                                    <Form.Control
                                                        type="password"
                                                        placeholder="Password"
                                                    />
                                                </Form.Group>
                                            </Form.Row>
                                            <Form.Group>
                                                <Form.Label>Address</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="1234 main St"
                                                />
                                            </Form.Group>
                                            <Form.Group>
                                                <Form.Label>Address 2</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Apartment, studio, or floor"
                                                />
                                            </Form.Group>
                                            <Form.Row>
                                                <Form.Group as={ Col } md={ 6 }>
                                                    <Form.Label>City</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                    />
                                                </Form.Group>
                                                <Form.Group as={ Col } md={ 4 } className="border-top-0 pt-0">
                                                    <Form.Label>State</Form.Label>
                                                    <Select
                                                        defaultValue={ { value: "", label: "Choose..." } }
                                                        options={ [ {
                                                            value: "",
                                                            label: "Choose..."
                                                        }, {
                                                            value: "...",
                                                            label: "..."
                                                        } ] }
                                                    />
                                                </Form.Group>
                                                <Form.Group as={ Col } md={ 2 } className="border-top-0 pt-0">
                                                    <Form.Label>Zip</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                    />
                                                </Form.Group>
                                            </Form.Row>
                                        </Form>
                                    </Card.Body>
                                    <Card.Footer>
                                        <Row>
                                            <Col md={ 12 } className="text-right">
                                                <Button variant="primary" onClick={ closeModal } className="mr-1">Submit</Button>
                                                <Button variant="default" onClick={ closeModal }>Cancel</Button>
                                            </Col>
                                        </Row>
                                    </Card.Footer>
                                </Card>
                            </Modal>
                        </Card.Body>
                    </CardWithActions>

                    <CardWithActions>
                        <Card.Header>
                            <Card.Title>Ajax</Card.Title>
                            <Card.Subtitle>You have full control of what is displayed in modal, align it to any side via CSS, enable or disable scroll on right side of window.</Card.Subtitle>
                        </Card.Header>

                        <Card.Body>
                            <Button variant="default" onClick={ () => { loadAjaxData(); openModal( 29 ); } }>Load Ajax Data</Button>

                            <Modal show={ modal === 29 } onHide={ closeModal } centered={ true }>
                                <Card>
                                    <Card.Header>
                                        <Card.Title>Edit Tag</Card.Title>
                                    </Card.Header>
                                    <Card.Body style={ { minHeight: "250px", position: "relative" } }>
                                        { loading ?
                                            <div className="d-loading-container">
                                                <div className="d-loading"></div>
                                            </div>
                                            : <Form>
                                                <Form.Group as={ Row } className="align-items-center">
                                                    <Col lg={ 5 } xl={ 3 }>
                                                        <Form.Label className="control-label text-lg-right mb-0">Tag Name</Form.Label>
                                                    </Col>
                                                    <Col lg={ 7 } xl={ 6 }>
                                                        <Form.Control
                                                            type="text"
                                                            maxLength="20"
                                                            defaultValue={ tag.name }
                                                        />
                                                    </Col>
                                                </Form.Group>
                                                <Form.Group as={ Row } className="align-items-center">
                                                    <Col lg={ 5 } xl={ 3 }>
                                                        <Form.Label className="control-label text-lg-right mb-0">Slug</Form.Label>
                                                    </Col>
                                                    <Col lg={ 7 } xl={ 6 }>
                                                        <Form.Control
                                                            type="text"
                                                            maxLength="20"
                                                            defaultValue={ tag.slug }
                                                        />
                                                    </Col>
                                                </Form.Group>
                                                <Form.Group as={ Row }>
                                                    <Col lg={ 5 } xl={ 3 }>
                                                        <Form.Label className="control-label text-lg-right mb-0">Tag Name</Form.Label>
                                                    </Col>
                                                    <Col lg={ 7 } xl={ 6 }>
                                                        <Form.Control
                                                            as="textarea"
                                                            rows={ 4 }
                                                            maxLength="250"
                                                            placeholder="Enter description of tag."
                                                            defaultValue={ tag.description }
                                                        />
                                                    </Col>
                                                </Form.Group>
                                            </Form>
                                        }
                                    </Card.Body>
                                    <Card.Footer>
                                        <Row>
                                            <Col md={ 12 } className="text-right">
                                                <Button variant="primary" onClick={ closeModal } className="mr-1">Save</Button>
                                                <Button variant="default" onClick={ closeModal }>Cancel</Button>
                                            </Col>
                                        </Row>
                                    </Card.Footer>
                                </Card>
                            </Modal>
                        </Card.Body>
                    </CardWithActions>
                </Col>
            </Row>
        </>
    )
}

export default React.memo( ModalsPage );