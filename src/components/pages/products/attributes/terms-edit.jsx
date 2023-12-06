import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';

import Breadcrumb from '../../../common/breadcrumb';
import DeleteConfirmModal from '../../../features/modals/delete-confirm-modal';
import Loader from '../../../features/loader';
import PNotify from '../../../features/elements/p-notify';

import { getAttributeTerm } from '../../../../api';

export default function TermsEdit ( props ) {
    const attrId = parseInt( props.match.params.id );
    const [ term, setTerm ] = useState( null );
    const [ loading, setLoading ] = useState( true );
    const [ openModal, setOpenModal ] = useState( false );

    useEffect( () => {
        setLoading( true );
        getAttributeTerm( attrId, parseInt( props.match.params.termId ) ).then( result => {
            if ( !result ) {
                return props.history.push( `${ process.env.PUBLIC_URL }/pages/404` );
            }
            setTerm( result );
            setLoading( false );
        } );
    }, [ props.match.params.id ] )

    function saveTerm ( e ) {
        e.preventDefault();
        toast(
            <PNotify title="Success" icon="fas fa-check" text="Attribute Term saved successfully." />,
            {
                containerId: "default",
                className: "notification-success"
            }
        );
    }

    function openDeleteModal ( e ) {
        e.preventDefault();
        setOpenModal( true );
    }

    function deleteTerm ( result ) {
        setOpenModal( false );
        result && props.history.push( `${ process.env.PUBLIC_URL }/products/attributes/${ attrId }/terms` );
    }

    return (
        <>
            {
                loading ? <Loader />
                    :
                    <>
                        <Breadcrumb current="Edit Term" paths={ [ {
                            name: 'Home',
                            url: '/'
                        }, {
                            name: 'Products',
                            url: 'products'
                        }, {
                            name: 'Attributes',
                            url: `/products/attributes`
                        } ] } />

                        <Form className="ecommerce-form" action="#" method="post" onSubmit={ saveTerm }>
                            <Row>
                                <Col>
                                    <Card className="card-modern card-big-info">
                                        <Card.Body>
                                            <Row>
                                                <Col lg="2-5" xl="1-5">
                                                    <i className="card-big-info-icon bx bx-analyse"></i>
                                                    <h2 className="card-big-info-title">Attribute</h2>
                                                    <p className="card-big-info-desc">Edit attribute's term.</p>
                                                </Col>
                                                <Col lg="3-5" xl="4-5">
                                                    <Form.Group as={ Row } className="align-items-center">
                                                        <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">Name</Col>
                                                        <Col lg={ 7 } xl={ 6 }>
                                                            <Form.Control
                                                                type="text"
                                                                maxLength="20"
                                                                className="form-control-modern"
                                                                name="name"
                                                                value={ term.name }
                                                                onChange={ e => setTerm( { ...term, name: e.target.value } ) }
                                                                required
                                                            />
                                                        </Col>
                                                    </Form.Group>
                                                    <Form.Group as={ Row } className="align-items-center">
                                                        <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">Slug</Col>
                                                        <Col lg={ 7 } xl={ 6 }>
                                                            <Form.Control
                                                                type="text"
                                                                maxLength="20"
                                                                className="form-control-modern"
                                                                name="slug"
                                                                value={ term.slug }
                                                                onChange={ e => setTerm( { ...term, slug: e.target.value } ) }
                                                            />
                                                        </Col>
                                                    </Form.Group>
                                                    <Form.Group as={ Row }>
                                                        <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0 mt-2 mb-0">Description</Col>
                                                        <Col lg={ 7 } xl={ 6 }>
                                                            <Form.Control
                                                                as="textarea"
                                                                className="form-control-modern valid"
                                                                maxLength="250"
                                                                name="description"
                                                                rows="4"
                                                                placeholder="Enter description of term"
                                                                value={ term.description ? term.description : '' }
                                                                onChange={ e => setTerm( { ...term, description: e.target.value } ) }
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
                                    ><i className="bx bx-save text-4 mr-2"></i> Save Term</Button>
                                </Col>
                                <Col md="auto" className="col-6 px-md-0 mt-0">
                                    <Button
                                        as={ Link }
                                        to={ `${ process.env.PUBLIC_URL }/products/attributes/${ attrId }/terms` }
                                        className="btn-px-4 py-3 border font-weight-semibold text-color-dark line-height-1 d-flex h-100 align-items-center"
                                        variant="light"
                                    >Back</Button>
                                </Col>
                                <Col md="auto" className="col-6 ml-md-auto mt-3 mt-md-0">
                                    <Button
                                        href="#delete"
                                        className="btn-px-4 py-3 d-flex align-items-center font-weight-semibold line-height-1"
                                        variant="danger"
                                        onClick={ openDeleteModal }
                                    ><i className="bx bx-trash text-4 mr-2"></i> Delete Term</Button>
                                </Col>
                            </Row>
                        </Form>
                    </>
            }

            <DeleteConfirmModal isOpen={ openModal } onClose={ deleteTerm } />
        </>
    )
}