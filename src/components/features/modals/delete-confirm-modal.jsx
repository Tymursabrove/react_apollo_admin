import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import Modal from "react-modal";

const modalStyles = {
    overlay: {
        background: 'rgba(11, 11, 11, .8)',
        zIndex: 9999
    },
    content: {
        left: '50%',
        top: '50%',
        bottom: 'auto',
        right: 'auto',
        outline: 'none',
        width: '600px',
        maxWidth: '100%',
        padding: 0,
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement( '#app' );

export default function DeleteConfirmModal ( { isOpen, onClose } ) {

    function closeModal ( result = false ) {
        onClose( result );
    }

    return (
        <Modal
            isOpen={ isOpen }
            style={ modalStyles }
            onRequestClose={ () => closeModal( false ) }
        >
            <Card>
                <Card.Header>
                    <Card.Title>Are you sure?</Card.Title>
                </Card.Header>
                <Card.Body>
                    <div className="modal-wrapper">
                        <div className="modal-text">
                            <p className="mb-0">Are you sure that you want to delete?</p>
                        </div>
                    </div>
                </Card.Body>
                <Card.Footer>
                    <Row>
                        <Col md={ 12 } className="text-right">
                            <Button
                                className="modal-confirm mr-2"
                                variant="primary"
                                onClick={ () => closeModal( true ) }
                            >Confirm</Button>
                            <Button
                                className="modal-dismiss"
                                variant="default"
                                onClick={ () => closeModal( false ) }
                            >Cancel</Button>
                        </Col>
                    </Row>
                </Card.Footer>
            </Card>
        </Modal>
    )
}