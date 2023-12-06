import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';
import { SlideToggle } from 'react-slide-toggle';
import { toast } from 'react-toastify';
import Tree from 'rc-tree';

import 'rc-tree/assets/index.css';

import Breadcrumb from '../../common/breadcrumb';
import MediaGalleryModal from '../../features/modals/media-gallery-modal';
import PNotify from '../../features/elements/p-notify';
import PtLazyLoad from '../../features/lazyload';
import PtSwitch from '../../features/elements/switch';
import PtTagsInput from '../../features/elements/tags-input';

import { getCategories, getTags } from '../../../api';

export default function PostAdd () {
    const inputRef = useRef( null );
    const [ modalOpen, setModalOpen ] = useState( false );
    const [ images, setImages ] = useState( [] );
    const [ postCats, setPostCats ] = useState( [] );
    const [ postTags, setPostTags ] = useState( [] );

    useEffect( () => {
        getCategories( 'posts' ).then( response => {
            setPostCats( getTreeData( response.data ) );
        } );
        getTags( 'posts' ).then( response => {
            setPostTags( response.data );
        } );
    }, [] )

    function getTreeData ( data ) {
        let stack = [],
            result = [];
        result = data.reduce( ( acc, cur ) => {
            if ( cur.parent === 0 ) {
                let newNode = {
                    key: cur.slug,
                    title: cur.name,
                    children: []
                };
                acc.push( newNode );
                stack.push( {
                    id: cur.id,
                    children: newNode.children
                } );
            }
            return acc;
        }, [] );

        let temp, children, childNode;
        const addChildren = () => {
            children = data.filter( item => item.parent === temp.id );
            children.forEach( child => {
                childNode = {
                    key: child.slug,
                    title: child.name,
                    children: []
                };
                temp.children.push( childNode );
                stack.push( {
                    id: child.id,
                    children: childNode.children
                } );
            } );
        }

        while ( stack.length ) {
            temp = stack[ stack.length - 1 ];
            stack.pop();
            addChildren();
        }

        return result;
    }

    function addTag ( e, tag ) {
        e.preventDefault();
        inputRef.current.addTag( tag );
    }

    function openModal ( e ) {
        e.preventDefault();
        setModalOpen( true );
    }

    function chooseMedia ( selectedMedia ) {
        setModalOpen( false );
        if ( !selectedMedia.length ) return;
        setImages( [
            ...images,
            ...selectedMedia
        ] );
    }

    function removeImage ( e, index ) {
        e.preventDefault();
        setImages( images.filter( image => image.id !== index ) );
    }

    function savePost ( e ) {
        e.preventDefault();
        toast(
            <PNotify title="Success" icon="fas fa-check" text="Post added successfully." />,
            {
                containerId: "default",
                className: "notification-success"
            }
        );
    }

    return (
        <>
            <Breadcrumb current="Add Post" paths={ [
                {
                    name: 'Home',
                    url: '/'
                }, {
                    name: 'Post',
                    url: '/posts'
                }
            ] } />

            <Form className="ecommerce-form" action="#" method="post" onSubmit={ savePost }>
                <Row>
                    <Col>
                        <Card className="card-modern card-big-info">
                            <Card.Body>
                                <Row>
                                    <Col lg="2-5" xl="1-5">
                                        <i className="card-big-info-icon bx bx-box"></i>
                                        <h2 className="card-big-info-title">General Info</h2>
                                        <p className="card-big-info-desc">Add here the post description with all details and necessary information.</p>
                                    </Col>
                                    <Col lg="3-5" xl="4-5">
                                        <Form.Group as={ Row } className="align-items-center">
                                            <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">Post Title</Col>
                                            <Col lg={ 7 } xl={ 6 }>
                                                <Form.Control
                                                    type="text"
                                                    maxLength="30"
                                                    className="form-control-modern"
                                                    name="title"
                                                    required
                                                />
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={ Row } className="align-items-center">
                                            <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">Author</Col>
                                            <Col lg={ 7 } xl={ 6 }>
                                                <Form.Control
                                                    type="text"
                                                    maxLength="20"
                                                    className="form-control-modern"
                                                    id="author"
                                                    defaultValue="John Doe"
                                                    required
                                                    readOnly
                                                />
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={ Row }>
                                            <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0 mt-2 mb-0">Short Description</Col>
                                            <Col lg={ 7 } xl={ 6 }>
                                                <Form.Control
                                                    as="textarea"
                                                    className="form-control-modern"
                                                    name="short_desc"
                                                    maxLength="250"
                                                    rows="3"
                                                    required
                                                />
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={ Row }>
                                            <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0 pt-2 mt-1 mb-2">Post Categories</Col>
                                            <Col lg={ 7 } xl={ 6 }>
                                                <Form.Control as="div" className="form-control-modern overflow-auto" id="treeCheckbox">
                                                    <Tree
                                                        className="no-icon"
                                                        selectable={ false }
                                                        checkable={ true }
                                                        showIcon={ false }
                                                        switcherIcon={ ( props ) => {
                                                            return ( !props.isLeaf ?
                                                                <i className={ `fa ${ props.expanded ? 'fa-angle-up' : 'fa-angle-down ' }` }></i>
                                                                : ''
                                                            )
                                                        } }
                                                        multiple={ true }
                                                        treeData={ postCats }
                                                    />
                                                </Form.Control>
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={ Row }>
                                            <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0 pt-2 mt-1 mb-2">Post Tags</Col>
                                            <Col lg={ 7 } xl={ 6 }>
                                                <PtTagsInput ref={ inputRef } />
                                                { postTags && postTags.length ?
                                                    <SlideToggle collapsed={ true }>
                                                        { ( { onToggle, setCollapsibleElement } ) => (
                                                            <>
                                                                <Button
                                                                    href="#toggle"
                                                                    className="mt-2 px-0"
                                                                    variant="link"
                                                                    onClick={ e => { e.preventDefault(); onToggle(); } }
                                                                >Choose from most used tags.</Button>
                                                                <div ref={ setCollapsibleElement } className="overflow-hidden">
                                                                    <Form.Control as="div" className="form-control-modern mt-1">
                                                                        { postTags.map( ( tag, index ) =>
                                                                            <Button
                                                                                href="#tag"
                                                                                variant="tag"
                                                                                key={ `product-tag-${ index }` }
                                                                                onClick={ e => addTag( e, tag ) }
                                                                            >{ tag.name }</Button>
                                                                        ) }
                                                                    </Form.Control>
                                                                </div>
                                                            </>
                                                        ) }
                                                    </SlideToggle>
                                                    : ''
                                                }
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={ Row } className="align-items-center">
                                            <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0 pt-2 col-lg-3">Status</Col>
                                            <Col lg={ 7 } xl={ 6 }>
                                                <PtSwitch on={ true } size="sm" variant="primary" />
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={ Row } className="align-items-center">
                                            <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0 pt-2 col-lg-3">Allow Comments</Col>
                                            <Col lg={ 7 } xl={ 6 }>
                                                <PtSwitch on={ true } size="sm" variant="primary" />
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
                                        <i className="card-big-info-icon bx bx-camera"></i>
                                        <h2 className="card-big-info-title">Post Image</h2>
                                        <p className="card-big-info-desc">Upload your Product image. You can add multiple images</p>
                                    </Col>
                                    <Col lg="3-5" xl="4-5">
                                        <Form.Group className="align-items-center">
                                            <Row>
                                                <Button
                                                    href="#modalGallery"
                                                    className="ml-auto mb-2"
                                                    onClick={ openModal }
                                                    variant="primary"
                                                >Add images</Button>
                                            </Row>
                                            <div className="media-gallery">
                                                <Row className="mg-files mg-post-images">
                                                    { images.map( ( image, index ) => (
                                                        <Col md={ 4 } lg={ 3 } className="col-6" key={ `image-${ index }` }>
                                                            <div className="thumbnail">
                                                                <div className="thumb-preview">
                                                                    <div className="centered">
                                                                        <a href="#thumb" className="thumb-image">
                                                                            <PtLazyLoad
                                                                                src={ image.virtual ? image.copy_link : `${ process.env.PUBLIC_URL }/mock-server/images/${ image.copy_link }` }
                                                                                alt={ image.alt_text ? image.alt_text : 'product' }
                                                                                width={ 300 }
                                                                                height={ 300 }
                                                                            />
                                                                        </a>
                                                                    </div>
                                                                    <div className="mg-thumb-options">
                                                                        <div className="mg-remove" onClick={ e => removeImage( e, image.id ) }>
                                                                            <i className="fas fa-times"></i>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                    ) )
                                                    }
                                                </Row>
                                            </div>
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
                                                    className="control form-control-modern"
                                                    rows="10"
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
                    <Col md="auto" className="col-12">
                        <Button
                            type="submit"
                            className="btn-px-4 py-3 d-flex align-items-center font-weight-semibold line-height-1"
                            variant="primary"
                        ><i className="bx bx-save text-4 mr-2"></i>Save Post</Button>
                    </Col>
                    <Col md="auto" className="col-12 px-md-0 mt-3 mt-md-0">
                        <Button
                            as={ Link }
                            to={ `${ process.env.PUBLIC_URL }/posts` }
                            className="btn-px-4 py-3 border font-weight-semibold text-color-dark line-height-1 d-flex h-100 align-items-center"
                            variant="light"
                        >Back</Button>
                    </Col>
                </Row>
            </Form>

            <MediaGalleryModal isOpen={ modalOpen } onClose={ chooseMedia } />
        </>
    )
}