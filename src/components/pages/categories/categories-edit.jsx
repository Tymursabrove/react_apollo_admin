import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';

import Breadcrumb from '../../common/breadcrumb';
import DeleteConfirmModal from '../../features/modals/delete-confirm-modal';
import Loader from '../../features/loader';
import MediaGalleryModal from '../../features/modals/media-gallery-modal';
import PNotify from '../../features/elements/p-notify';

import { getCroppedImageUrl, removeXSSAttacks } from '../../../utils';
import { getCategory, updateCategory, removeCategory} from '../../../api';

//Here goes code for cloundinary
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from "@cloudinary/url-gen";

// Import required actions and qualifiers.
import {thumbnail} from "@cloudinary/url-gen/actions/resize";
import {byRadius} from "@cloudinary/url-gen/actions/roundCorners";
import {focusOn} from "@cloudinary/url-gen/qualifiers/gravity";
import { FocusOn } from "@cloudinary/url-gen/qualifiers/focusOn";
import { format } from '@cloudinary/url-gen/actions/delivery';

const cld = new Cloudinary({
    cloud: {
      cloudName: 'dhkg3aqid'
    }
});


export default function CategoriesEdit ( props ) {
    const [ cat, setCat ] = useState( null );
    const [ loading, setLoading ] = useState( true );
    const [ tree, setTree ] = useState( [] );
    const [ openModal, setOpenModal ] = useState( false );
    const [modalGallery, setModalGallery] = useState(false);
    const [imageData, setImageData] = useState();
    var formattedImage = null;
    useEffect( () => {
        setLoading( true );
        getCategory( parseInt( props.match.params.id ) ).then( result => {
            if ( !result ) {
                return props.history.push( `${ process.env.PUBLIC_URL }/pages/404` );
            }
            setCat(result.data);
            setTree(result.tree);
            formattedImage = cld.image(result.data.media.public_id);
            formattedImage.resize(thumbnail().width(80).height(80).gravity(focusOn(FocusOn.face())));
            console.log("formatted Data", formattedImage);
            setImageData(formattedImage);
            setLoading(false);
        } );
    }, [ props.match.params.id ] )

    function saveCategory ( e ) {
        e.preventDefault();
        updateCategory(parseInt(props.match.params.id), cat).then((result) => {
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
                    <PNotify title="Success" icon="fas fa-check" text="Category saved successfully." />,
                    {
                        containerId: "default",
                        className: "notification-success"
                    }
                );
            } 
        }).catch(err => console.log(err));
    }

    function deleteCategory ( e ) {
        e.preventDefault();
        setOpenModal( true );
    }

    function deleteConfirm ( result ) {
        setOpenModal( false );
        result && props.history.push(`${process.env.PUBLIC_URL}/${cat.type}s/categories`);
        if (result) {
            removeCategory(props.match.params.id).then((result) => {
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
                        <PNotify title="Success" icon="fas fa-check" text="Category deleted successfully." />,
                        {
                            containerId: "default",
                            className: "notification-success"
                        }
                    );
                } 
            }).catch(err => console.log(err));
        }
    }

    function selectImage ( e ) {
        e.preventDefault();
        setModalGallery( true );
    }

    function closeModal ( selectedMedia ) {
        setModalGallery( false );
        if (selectedMedia.length) {
            const array = {
                public_id: selectedMedia[0].public_id,
                width: parseInt(selectedMedia[0].width),
                height: parseInt(selectedMedia[0].height),
            }
            console.log("tymur close modal", array);
            formattedImage = cld.image(selectedMedia[0].public_id);
            formattedImage.resize(thumbnail().width(80).height(80).gravity(focusOn(FocusOn.face())));
            setImageData(formattedImage);
            setCat( {
                ...cat,
                media: array
            } );
        }
    }

    return (
        <>
            {
                loading ? <Loader />
                    :
                    <>
                        <Breadcrumb current="Edit Category" paths={ [ {
                            name: 'Home',
                            url: '/'
                        }, {
                            name: cat.type + 's',
                            url: `/${ cat.type }s`
                        }, {
                            name: 'Categoriess',
                            url: `/${ cat.type }s/categories`
                        } ] } />

                        <Form className="ecommerce-form" action="#" method="post" onSubmit={ saveCategory }>
                            <Row>
                                <Col>
                                    <Card className="card-modern card-big-info">
                                        <Card.Body>
                                            <Row>
                                                <Col lg="2-5" xl="1-5">
                                                    <i className="card-big-info-icon bx bx-slider"></i>
                                                    <h2 className="card-big-info-title">Category Details</h2>
                                                    <p className="card-big-info-desc">Add here the category description with all details and necessary information.</p>
                                                </Col>
                                                <Col lg="3-5" xl="4-5">
                                                    <Form.Group as={ Row } className="align-items-center">
                                                        <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">Category Name</Col>
                                                        <Col lg={ 7 } xl={ 6 }>
                                                            <Form.Control
                                                                type="text"
                                                                className="form-control-modern"
                                                                maxLength="50"
                                                                name="name"
                                                                value={ cat.name }
                                                                onChange={ e => setCat( { ...cat, name: e.target.value } ) }
                                                                required
                                                            />
                                                        </Col>
                                                    </Form.Group>
                                                    <Form.Group as={ Row } className="align-items-center">
                                                        <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">Slug</Col>
                                                        <Col lg={ 7 } xl={ 6 }>
                                                            <Form.Control
                                                                type="text"
                                                                className="form-control-modern"
                                                                maxLength="50"
                                                                name="slug"
                                                                value={ cat.slug }
                                                                onChange={ e => setCat( { ...cat, slug: e.target.value } ) }
                                                            />
                                                        </Col>
                                                    </Form.Group>
                                                    <Form.Group as={ Row } className="align-items-center">
                                                        <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">Parent Category</Col>
                                                        <Col lg={ 7 } xl={ 6 }>
                                                            <Form.Control
                                                                as="select"
                                                                className="form-control-modern"
                                                                name="parent"
                                                                value={ cat.parent }
                                                                onChange={ e => setCat( { ...cat, parent: parseInt( e.target.value ) } ) }
                                                            >
                                                                <option value="0">None</option>
                                                                {
                                                                    tree.map( ( item, index ) => (
                                                                        <option key={ 'cat-' + index } value={ item.id } dangerouslySetInnerHTML={ removeXSSAttacks( "&nbsp;".repeat( item.depth * 3 ) + item.name ) }></option>
                                                                    ) )
                                                                }
                                                            </Form.Control>
                                                        </Col>
                                                    </Form.Group>
                                                    <Form.Group as={ Row }>
                                                        <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0 pt-2 mt-1 mb-0">Description</Col>
                                                        <Col lg={ 7 } xl={ 6 }>
                                                            <Form.Control
                                                                as="textarea"
                                                                className="form-control-modern"
                                                                name="description"
                                                                rows="6"
                                                                maxLength="200"
                                                                value={ cat.description ? cat.description : '' }
                                                                onChange={ e => setCat( { ...cat, description: e.target.value } ) }
                                                            />
                                                        </Col>
                                                    </Form.Group>
                                                    <Form.Group as={ Row } className="align-items-center">
                                                        <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">Category Image</Col>
                                                        <Col lg={ 7 } xl={ 6 }>
                                                            <Button
                                                                href="#mediaGallery"
                                                                className="ml-auto mr-3"
                                                                variant="primary"
                                                                onClick={ selectImage }
                                                            >
                                                                Select Image
                                                            </Button>

                                                            <div className="category-image d-inline-block">
                                                                { imageData ?
                                                                    <AdvancedImage cldImg={imageData}/>
                                                                    : <div>No image</div>
                                                                }
                                                                
                                                            </div>
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
                                    ><i className="bx bx-save text-4 mr-2"></i> Save Category</Button>
                                </Col>
                                <Col md="auto" className="col-6 px-md-0 mt-0">
                                    <Button
                                        as={ Link }
                                        to={ `${ process.env.PUBLIC_URL }/${ cat.type }s/categories` }
                                        className="btn-px-4 py-3 border font-weight-semibold text-color-dark line-height-1 d-flex h-100 align-items-center"
                                        variant="light"
                                    >Back</Button>
                                </Col>
                                <Col md="auto" className="col-6 ml-md-auto mt-3 mt-md-0">
                                    <Button
                                        href="#delete"
                                        className="btn-px-4 py-3 d-flex align-items-center font-weight-semibold line-height-1"
                                        variant="danger"
                                        onClick={ deleteCategory }
                                    ><i className="bx bx-trash text-4 mr-2"></i> Delete Category</Button>
                                </Col>
                            </Row>
                        </Form>
                    </>
            }

            <DeleteConfirmModal isOpen={ openModal } onClose={ deleteConfirm } />
            <MediaGalleryModal galleryType={ 'categories'} chooseOne={ true } isOpen={ modalGallery } onClose={ closeModal } />
        </>
    )
}