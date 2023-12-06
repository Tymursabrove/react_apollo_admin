import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Form, Card, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';

import Breadcrumb from '../../../common/breadcrumb';
import DeleteConfirmModal from '../../../features/modals/delete-confirm-modal';
import Loader from '../../../features/loader';
import PNotify from '../../../features/elements/p-notify';

import { getReview } from '../../../../api';

export default function ReviewDetail ( props ) {
    const [ review, setReview ] = useState( null );
    const [ loading, setLoading ] = useState( true );
    const [ openModal, setOpenModal ] = useState( false );

    useEffect( () => {
        setLoading( true );
        getReview( parseInt( props.match.params.id ) ).then( result => {
            if ( !result ) {
                return props.history.push( `${ process.env.PUBLIC_URL }/pages/404` );
            }
            setReview( result );
            setLoading( false );
        } );
    }, [ props.match.params.id ] )

    function saveReview ( e ) {
        e.preventDefault();
        toast(
            <PNotify title="Success" icon="fas fa-check" text="Review saved successfully." />,
            {
                containerId: "default",
                className: "notification-success"
            }
        );
    }

    function deleteReview ( e ) {
        e.preventDefault();
        setOpenModal( true );
    }

    function deleteConfirm ( result ) {
        setOpenModal( false );
        result && props.history.push( `${ process.env.PUBLIC_URL }/products/reviews` );
    }

    function reviewChange ( key, value ) {
        let temp = { ...review };
        temp[ key ] = value;
        setReview( temp );
    }

    return (
        <>
            {
                loading ? <Loader />
                    :
                    <>
                        <Breadcrumb current="Edit Review" paths={ [ {
                            name: 'Home',
                            url: '/'
                        }, {
                            name: 'Products',
                            url: `/products`
                        }, {
                            name: 'Reviews',
                            url: `/products/reviews`
                        } ] } />

                        <Form className="ecommerce-form" action="#" method="post" onSubmit={ saveReview }>
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
                                                                value={ review.author_name }
                                                                onChange={ e => reviewChange( 'author_name', e.target.value ) }
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
                                                                value={ review.author_email }
                                                                onChange={ e => reviewChange( 'author_email', e.target.value ) }
                                                                required />
                                                        </Col>
                                                    </Form.Group>
                                                    <Form.Group as={ Row }>
                                                        <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0 pt-2 mt-1 mb-0">Rating</Col>
                                                        <Col lg={ 7 } xl={ 6 }>
                                                            <Form.Control
                                                                type="number"
                                                                className="form-control-modern"
                                                                name="rating"
                                                                min={ 0 }
                                                                max={ 5 }
                                                                value={ review.rating }
                                                                onChange={ e => reviewChange( 'rating', e.target.value ? parseInt( e.target.value ) : '' ) }
                                                            />
                                                        </Col>
                                                    </Form.Group>
                                                    <Form.Group as={ Row } className="align-items-center">
                                                        <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0 pt-2">Status</Col>
                                                        <Col lg={ 7 } xl={ 6 }>
                                                            <Form.Control
                                                                as="select"
                                                                className="form-control-modern"
                                                                value={ review.approved ? '1' : '0' }
                                                                onChange={ e => reviewChange( 'approved', e.target.value === '1' ) }
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
                                                            <Form.Control
                                                                as="textarea"
                                                                className="form-control-modern"
                                                                rows="10"
                                                                value={ review.content }
                                                                onChange={ e => reviewChange( 'content', e.target.value ) }
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
                                    ><i className="bx bx-save text-4 mr-2"></i> Save Review</Button>
                                </Col>
                                <Col md="auto" className="col-6 px-md-0 mt-0">
                                    <Button
                                        as={ Link }
                                        to={ `${ process.env.PUBLIC_URL }/products/reviews` }
                                        className="btn-px-4 py-3 border font-weight-semibold text-color-dark line-height-1 d-flex h-100 align-items-center"
                                        variant="light"
                                    >Back</Button>
                                </Col>
                                <Col md="auto" className="col-6 ml-md-auto mt-3 mt-md-0">
                                    <Button
                                        href="#delete"
                                        className="btn-px-4 py-3 d-flex align-items-center font-weight-semibold line-height-1"
                                        variant="danger"
                                        onClick={ deleteReview }
                                    ><i className="bx bx-trash text-4 mr-2"></i> Delete Review</Button>
                                </Col>
                            </Row>
                        </Form>
                    </>
            }

            <DeleteConfirmModal isOpen={ openModal } onClose={ deleteConfirm } />
        </>
    )
}