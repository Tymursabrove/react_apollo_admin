import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Form, Card, Button } from 'react-bootstrap';
// import { Editor } from '@tinymce/tinymce-react';
import { toast } from 'react-toastify';

import Breadcrumb from '../../../common/breadcrumb';
import DeleteConfirmModal from '../../../features/modals/delete-confirm-modal';
import Loader from '../../../features/loader';
import PNotify from '../../../features/elements/p-notify';

import { getReply } from '../../../../api';

export default function ReplyDetail ( props ) {
    const [ reply, setReply ] = useState( null );
    const [ loading, setLoading ] = useState( true );
    const [ openModal, setOpenModal ] = useState( false );

    useEffect( () => {
        setLoading( true );
        getReply( parseInt( props.match.params.id ) ).then( result => {
            if ( !result ) {
                return props.history.push( `${ process.env.PUBLIC_URL }/pages/404` );
            }
            setReply( result );
            setLoading( false );
        } );
    }, [ props.match.params.id ] )

    function saveReply ( e ) {
        e.preventDefault();
        toast(
            <PNotify title="Success" icon="fas fa-check" text="Review saved successfully." />,
            {
                containerId: "default",
                className: "notification-success"
            }
        );
    }

    function deleteReply ( e ) {
        e.preventDefault();
        setOpenModal( true );
    }

    function deleteConfirm ( result ) {
        setOpenModal( false );
        result && props.history.push( `${ process.env.PUBLIC_URL }/posts/replies` );
    }

    function replyChange ( key, value ) {
        let temp = { ...reply };
        temp[ key ] = value;
        setReply( temp );
    }

    return (
        <>
            {
                loading ? <Loader />
                    :
                    <>
                        <Breadcrumb current="Edit Reply" paths={ [ {
                            name: 'Home',
                            url: '/'
                        }, {
                            name: 'Posts',
                            url: `/posts`
                        }, {
                            name: 'Replies',
                            url: `/posts/replies`
                        } ] } />

                        <Form className="ecommerce-form" action="#" method="post" onSubmit={ saveReply }>
                            <Row>
                                <Col>
                                    <Card className="card-modern card-big-info">
                                        <Card.Body>
                                            <Row>
                                                <Col lg="2-5" xl="1-5">
                                                    <i className="card-big-info-icon bx bx-box"></i>
                                                    <h2 className="card-big-info-title">General Info</h2>
                                                    <p className="card-big-info-desc">Add here the product description with all details and necessary information.</p>
                                                </Col>
                                                <Col lg="3-5" xl="4-5">
                                                    <Form.Group as={ Row } className="align-items-center">
                                                        <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">Name</Col>
                                                        <Col lg={ 7 } xl={ 6 }>
                                                            <Form.Control
                                                                type="text"
                                                                maxLength="50"
                                                                className="form-control-modern"
                                                                value={ reply.author_name }
                                                                onChange={ e => replyChange( 'author_name', e.target.value ) }
                                                                required
                                                            />
                                                        </Col>
                                                    </Form.Group>
                                                    <Form.Group as={ Row } className="align-items-center">
                                                        <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">E-mail</Col>
                                                        <Col lg={ 7 } xl={ 6 }>
                                                            <Form.Control
                                                                type="email"
                                                                maxLength="50"
                                                                className="form-control-modern"
                                                                value={ reply.author_email }
                                                                onChange={ e => replyChange( 'author_email', e.target.value ) }
                                                                required />
                                                        </Col>
                                                    </Form.Group>
                                                    <Form.Group as={ Row } className="align-items-center">
                                                        <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0 pt-2">Status</Col>
                                                        <Col lg={ 7 } xl={ 6 }>
                                                            <Form.Control
                                                                as="select"
                                                                className="form-control-modern"
                                                                value={ reply.approved ? '1' : '0' }
                                                                onChange={ e => replyChange( 'approved', e.target.value === '1' ) }
                                                                required
                                                            >
                                                                <option value="1">Approved</option>
                                                                <option value="0">Pending</option>
                                                            </Form.Control>
                                                        </Col>
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Card className="card-modern card-big-info">
                                        <Card.Body>
                                            <Row>
                                                <Col lg="2-5" xl="1-5">
                                                    <i className="card-big-info-icon bx bx-paste"></i>
                                                    <h2 className="card-big-info-title">Description</h2>
                                                    <p className="card-big-info-desc">Add here the post description with all details and necessary information.</p>
                                                </Col>
                                                <Col lg="3-5" xl="4-5">
                                                    <Form.Group as={ Row }>
                                                        <Col>
                                                            {/* <Editor
                                                                value={ reply.content }
                                                                onChange={ e => replyChange( 'content', e.target.value ) }
                                                            /> */}
                                                            <Form.Control
                                                                as="textarea"
                                                                className="form-control-modern"
                                                                rows="10"
                                                                value={ reply.content }
                                                                onChange={ e => replyChange( 'content', e.target.value ) }
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
                                    ><i className="bx bx-save text-4 mr-2"></i> Save Reply</Button>
                                </Col>
                                <Col md="auto" className="col-6 px-md-0 mt-0">
                                    <Button
                                        as={ Link }
                                        to={ `${ process.env.PUBLIC_URL }/posts/replies` }
                                        className="btn-px-4 py-3 border font-weight-semibold text-color-dark line-height-1 d-flex h-100 align-items-center"
                                        variant="light"
                                    >Back</Button>
                                </Col>
                                <Col md="auto" className="col-6 ml-md-auto mt-3 mt-md-0">
                                    <Button
                                        href="#delete"
                                        className="btn-px-4 py-3 d-flex align-items-center font-weight-semibold line-height-1"
                                        variant="danger"
                                        onClick={ deleteReply }
                                    ><i className="bx bx-trash text-4 mr-2"></i> Delete Reply</Button>
                                </Col>
                            </Row>
                        </Form>
                    </>
            }

            <DeleteConfirmModal isOpen={ openModal } onClose={ deleteConfirm } />
        </>
    )
}