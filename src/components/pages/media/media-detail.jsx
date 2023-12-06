import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Form, Card, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';

import Breadcrumb from '../../common/breadcrumb';
import Loader from '../../features/loader';
import DeleteConfirmModal from '../../features/modals/delete-confirm-modal';
import PNotify from '../../features/elements/p-notify';

import { withCardActions } from '../../hoc';

import { getSingleMedia } from '../../../api';

const CardWithActions = withCardActions( Card );

export default function MediaEdit ( props ) {
    const [ media, setMedia ] = useState( null );
    const [ loading, setLoading ] = useState( true );
    const [ openModal, setOpenModal ] = useState( false );
    const [ name, setName ] = useState( '' );
    const [ altText, setAltText ] = useState( '' );
    const [ desc, setDesc ] = useState( '' );

    useEffect( () => {
        setLoading( true );
        getSingleMedia( parseInt( props.match.params.id ) ).then( result => {
            setMedia( result );
            setName( result.name );
            setAltText( result.alt_text );
            setDesc( result.description ? result.description : '' );
            setLoading( false );
        } );
    }, props.match.params.id )

    function saveMedia ( e ) {
        e.preventDefault();
        toast(
            <PNotify title="Success" icon="fas fa-check" text="Media saved successfully." />,
            {
                containerId: "default",
                className: "notification-success"
            }
        );
    }

    function deleteMedia ( e ) {
        e.preventDefault();
        setOpenModal( true );
    }

    function deleteConfirm ( result ) {
        setOpenModal( false );
        result && props.history.push( `${ process.env.PUBLIC_URL }/media/list` );
    }

    return (
        <>
            <Breadcrumb current={ "Edit Media" } />

            {
                loading ? <Loader />
                    : <Form className="ecommerce-form edit-media-form" action="#" method="post" onSubmit={ saveMedia }>
                        <Row>
                            <Col lg={ 7 }>
                                <img
                                    src={ `${ process.env.PUBLIC_URL }/mock-server/images/${ media.copy_link }` }
                                    alt={ media.alt_text ? media.alt_text : 'media' }
                                    width={ media.width }
                                    height={ media.height }
                                />
                            </Col>
                            <Col lg={ 5 } className="mt-3 mt-lg-0">
                                <CardWithActions className="card-info media-info" dismissible={ false }>
                                    <Card.Header>
                                        <Card.Title>Media Info</Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <div className="info-section d-flex align-items-center mb-3">
                                            <h5 className="info-title">Date</h5>
                                            <span className="info-text">{ media.created_at }</span>
                                        </div>
                                        <div className="info-section mb-3">
                                            <h5 className="info-title">File URL</h5>
                                            <Form.Control
                                                type="text"
                                                className="form-control-modern mt-1"
                                                value={ media.copy_link }
                                                maxLength={ 40 }
                                                readOnly
                                            />
                                        </div>
                                        <div className="info-section d-flex align-items-center mb-3">
                                            <h5 className="info-title">File name</h5>
                                            <span className="info-text">{ media.name }</span>
                                        </div>
                                        <div className="info-section d-flex align-items-center mb-3">
                                            <h5 className="info-title">File size</h5>
                                            <span className="info-text">{ ( media.size / 1024 ).toFixed( 5 ) } Kb</span>
                                        </div>
                                        <div className="info-section d-flex align-items-center mb-0">
                                            <h5 className="info-title">Dimensions</h5>
                                            <span className="info-text">{ media.width } x { media.height }</span>
                                        </div>
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
                                                <h2 className="card-big-info-title">General</h2>
                                                <p className="card-big-info-desc">Add here the product description with all details and necessary information.</p>
                                            </Col>
                                            <Col lg="3-5" xl="4-5">
                                                <Form.Group as={ Row } className="align-items-center">
                                                    <Col lg={ 5 } xl={ 3 } className="text-lg-right">
                                                        <Form.Label className="mb-0">Title</Form.Label>
                                                    </Col>
                                                    <Col lg={ 7 } xl={ 6 }>
                                                        <Form.Control
                                                            type="text"
                                                            className="form-control-modern"
                                                            value={ name }
                                                            onChange={ e => setName( e.target.value ) }
                                                            maxLength={ 50 }
                                                            required
                                                        />
                                                    </Col>
                                                </Form.Group>
                                                <Form.Group as={ Row } className="align-items-center">
                                                    <Col lg={ 5 } xl={ 3 } className="text-lg-right">
                                                        <Form.Label className="mb-0">Alternative Text</Form.Label>
                                                    </Col>
                                                    <Col lg={ 7 } xl={ 6 }>
                                                        <Form.Control
                                                            type="text"
                                                            className="form-control-modern"
                                                            value={ altText ? altText : "" }
                                                            onChange={ e => setAltText( e.target.value ) }
                                                            maxLength={ 20 }
                                                            required
                                                        />
                                                    </Col>
                                                </Form.Group>
                                                <Form.Group as={ Row }>
                                                    <Col lg={ 5 } xl={ 3 } className="text-lg-right">
                                                        <Form.Label className="mb-0">Description</Form.Label>
                                                    </Col>
                                                    <Col lg={ 7 } xl={ 6 }>
                                                        <Form.Control
                                                            as="textarea"
                                                            rows={ 5 }
                                                            className="form-control-modern"
                                                            value={ desc }
                                                            onChange={ e => setDesc( e.target.value ) }
                                                            required
                                                        />
                                                    </Col>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row className="action-buttons">
                            <Col md="auto" className="col-6">
                                <Button
                                    type="submit"
                                    className="btn-px-4 py-3 d-flex align-items-center font-weight-semibold line-height-1"
                                    variant="primary"
                                ><i className="bx bx-save text-4 mr-2"></i> Save Media</Button>
                            </Col>
                            <Col md="auto" className="col-6 px-md-0 mt-0">
                                <Button
                                    as={ Link }
                                    to={ `${ process.env.PUBLIC_URL }/media/list` }
                                    className="btn-px-4 py-3 border font-weight-semibold text-color-dark line-height-1 d-flex h-100 align-items-center"
                                    variant="light"
                                >Back</Button>
                            </Col>
                            <Col md="auto" className="col-6 ml-md-auto mt-3 mt-md-0">
                                <Button
                                    href="#delete"
                                    className="btn-px-4 py-3 d-flex align-items-center font-weight-semibold line-height-1"
                                    variant="danger"
                                    onClick={ deleteMedia }
                                ><i className="bx bx-trash text-4 mr-2"></i> Delete Media</Button>
                            </Col>
                        </Row>
                    </Form>
            }

            <DeleteConfirmModal isOpen={ openModal } onClose={ deleteConfirm } />
        </>
    )
}