import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Button, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';

import Breadcrumb from '../../../common/breadcrumb';
import DeleteConfirmModal from '../../../features/modals/delete-confirm-modal';
import Loader from '../../../features/loader';
import PNotify from '../../../features/elements/p-notify';

import { getAttribute } from '../../../../api';

export default function AttributesEdit ( props ) {
    const [ attr, setAttr ] = useState( null );
    const [ loading, setLoading ] = useState( true );
    const [ openModal, setOpenModal ] = useState( false );

    useEffect( () => {
        setLoading( true );
        getAttribute( parseInt( props.match.params.id ) ).then( result => {
            if ( !result ) {
                return props.history.push( `${ process.env.PUBLIC_URL }/pages/404` );
            }
            setAttr( result );
            setLoading( false );
        } );
    }, [ props.match.params.id ] )

    function saveAttr ( e ) {
        e.preventDefault();
        toast(
            <PNotify title="Success" icon="fas fa-check" text="Attribute saved successfully." />,
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

    function deleteAttr ( result ) {
        setOpenModal( false );
        result && props.history.push( `${ process.env.PUBLIC_URL }/products/attributes` );
    }

    return (
        <>
            {
                loading ? <Loader />
                    :
                    <>
                        <Breadcrumb current="Edit Attribute" paths={ [ {
                            name: 'Home',
                            url: '/'
                        }, {
                            name: 'Products',
                            url: 'products'
                        }, {
                            name: 'Attributes',
                            url: `/products/attributes`
                        } ] } />

                        <Form className="ecommerce-form" action="#" method="post" onSubmit={ saveAttr }>
                            <Row>
                                <Col>
                                    <Card className="card-modern card-big-info">
                                        <Card.Body>
                                            <Row>
                                                <Col lg="2-5" xl="1-5">
                                                    <i className="card-big-info-icon bx bx-analyse"></i>
                                                    <h2 className="card-big-info-title">Attribute</h2>
                                                    <p className="card-big-info-desc">Add here the customer billing info with all details and necessary information.</p>
                                                </Col>
                                                <Col lg="3-5" xl="4-5">
                                                    <Form.Group as={ Row } className="align-items-center">
                                                        <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">Attribute Name</Col>
                                                        <Col lg={ 7 } xl={ 6 }>
                                                            <Form.Control
                                                                type="text"
                                                                maxLength="20"
                                                                className="form-control-modern"
                                                                name="name"
                                                                value={ attr.name }
                                                                onChange={ e => setAttr( { ...attr, name: e.target.value } ) }
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
                                                                value={ attr.slug }
                                                                onChange={ e => setAttr( { ...attr, slug: e.target.value } ) }
                                                            />
                                                        </Col>
                                                    </Form.Group>
                                                    <Form.Group as={ Row } className="align-items-center">
                                                        <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">Default sort order</Col>
                                                        <Col lg={ 7 } xl={ 6 }>
                                                            <Form.Control
                                                                as="select"
                                                                className="form-control-modern w-auto"
                                                                value={ attr.sort_by }
                                                                onChange={ e => setAttr( { ...attr, sort_by: e.target.value } ) }
                                                            >
                                                                <option value="custom_ordering">Custom Ordering</option>
                                                                <option value="name">Name</option>
                                                                <option value="name_numeric">Name (numeric)</option>
                                                                <option value="term_id">Term ID</option>
                                                            </Form.Control>
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
                                    ><i className="bx bx-save text-4 mr-2"></i> Save Attribute</Button>
                                </Col>
                                <Col md="auto" className="col-6 px-md-0 mt-0">
                                    <Button
                                        as={ Link }
                                        to={ `${ process.env.PUBLIC_URL }/products/attributes` }
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
                                    ><i className="bx bx-trash text-4 mr-2"></i> Delete Attribute</Button>
                                </Col>
                            </Row>
                        </Form>
                    </>
            }

            <DeleteConfirmModal isOpen={ openModal } onClose={ deleteAttr } />
        </>
    )
}