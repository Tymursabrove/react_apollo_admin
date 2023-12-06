import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';

import Breadcrumb from '../../common/breadcrumb';
import DeleteConfirmModal from '../../features/modals/delete-confirm-modal';
import Loader from '../../features/loader';
import PNotify from '../../features/elements/p-notify';

import { getTag, updateTag } from '../../../api';
import { deleteTag as deleteTagAPI}  from '../../../api'
export default function TagsEdit ( props ) {
    const [ tag, setTag ] = useState( null );
    const [ loading, setLoading ] = useState( true );
    const [ openModal, setOpenModal ] = useState( false );

    useEffect( () => {
        setLoading( true );
        getTag(parseInt(props.match.params.id)).then(result => {
            const rlt = result.data.data.tag;
            if ( !result ) {
                return props.history.push( `${ process.env.PUBLIC_URL }/pages/404` );
            }
            setTag( rlt );
            setLoading( false );
        } );
    }, [ props.match.params.id ] )

    function saveTag ( e ) {
        e.preventDefault();
        updateTag(parseInt(props.match.params.id), tag).then((result) => {
            if (result.data.errors) { 
                toast(
                    <PNotify title="Failed" icon="fas fa-check" text={ result.data.errors[0].message} />,
                    {
                        containerId: "default",
                        className: "notification-failed"
                    }
                );
            } else {
                toast(
                    <PNotify title="Success" icon="fas fa-check" text="Tag saved successfully." />,
                    {
                        containerId: "default",
                        className: "notification-success"
                    }
                );
            } 
        }).catch(err => console.log(err));
    }

    function deleteTag ( e ) {
        e.preventDefault();
        setOpenModal(true);
    }

    function deleteConfirm ( result ) {
        setOpenModal(false);
        
        result && props.history.push(`${process.env.PUBLIC_URL}/${tag.type}s/tags`);
        if (result) { 
            deleteTagAPI(props.match.params.id).then((result) => {
                if (result.data.errors) { 
                    toast(
                        <PNotify title="Failed" icon="fas fa-check" text={ result.data.errors[0].message} />,
                        {
                            containerId: "default",
                            className: "notification-failed"
                        }
                    );
                } else {
                    toast(
                        <PNotify title="Success" icon="fas fa-check" text="Tag deleted successfully." />,
                        {
                            containerId: "default",
                            className: "notification-success"
                        }
                    );
                } 
            }).catch(err => console.log(err));
        }
    }

    return (
        <>
            {
                loading ? <Loader />
                    :
                    <>
                        <Breadcrumb current="Edit Tag" paths={ [ {
                            name: 'Home',
                            url: '/'
                        }, {
                            name: tag.type + 's',
                            url: `/${ tag.type }s`
                        }, {
                            name: 'Tags',
                            url: `/${ tag.type }s/tags`
                        } ] } />

                        <Form className="ecommerce-form" action="#" method="post" onSubmit={ saveTag }>
                            <Row>
                                <Col>
                                    <Card className="card-modern card-big-info">
                                        <Card.Body>
                                            <Row>
                                                <Col lg="2-5" xl="1-5">
                                                    <i className="card-big-info-icon bx bx-tag"></i>
                                                    <h2 className="card-big-info-title">Tag</h2>
                                                    <p className="card-big-info-desc">Add or update tag info with all details and necessary information.</p>
                                                </Col>
                                                <Col lg="3-5" xl="4-5">
                                                    <Form.Group as={ Row } className="align-items-center">
                                                        <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">Tag Name</Col>
                                                        <Col lg={ 7 } xl={ 6 }>
                                                            <Form.Control
                                                                type="text"
                                                                maxLength="20"
                                                                className="form-control-modern"
                                                                name="name"
                                                                value={ tag.name }
                                                                onChange={ e => setTag( { ...tag, name: e.target.value } ) }
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
                                                                value={ tag.slug }
                                                                onChange={ e => setTag( { ...tag, slug: e.target.value } ) }
                                                            />
                                                        </Col>
                                                    </Form.Group>
                                                    <Form.Group as={ Row }>
                                                        <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0 mt-2 mb-0">Description</Col>
                                                        <Col lg={ 7 } xl={ 6 }>
                                                            <Form.Control
                                                                as="textarea"
                                                                className="form-control-modern"
                                                                name="description"
                                                                maxLength="250"
                                                                rows="4"
                                                                placeholder="Enter description of tag."
                                                                value={ tag.description ? tag.description : '' }
                                                                onChange={ e => setTag( {
                                                                    ...tag,
                                                                    description: e.target.value
                                                                } ) }
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
                                    ><i className="bx bx-save text-4 mr-2"></i> Save Tag</Button>
                                </Col>
                                <Col md="auto" className="col-6 px-md-0 mt-0">
                                    <Button
                                        as={ Link }
                                        to={ `${ process.env.PUBLIC_URL }/${ tag.type }s/tags` }
                                        className="btn-px-4 py-3 border font-weight-semibold text-color-dark line-height-1 d-flex h-100 align-items-center"
                                        variant="light"
                                    >Back</Button>
                                </Col>
                                <Col md="auto" className="col-6 ml-md-auto mt-3 mt-md-0">
                                    <Button
                                        href="#delete"
                                        className="btn-px-4 py-3 d-flex align-items-center font-weight-semibold line-height-1"
                                        variant="danger"
                                        onClick={ deleteTag }
                                    ><i className="bx bx-trash text-4 mr-2"></i> Delete Tag</Button>
                                </Col>
                            </Row>
                        </Form>
                    </>
            }

            <DeleteConfirmModal isOpen={ openModal } onClose={ deleteConfirm } />
        </>
    )
}