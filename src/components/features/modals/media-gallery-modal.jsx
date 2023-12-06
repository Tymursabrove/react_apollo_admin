import React, { useState, useEffect } from 'react';
import { Row, Card, Col, Button } from 'react-bootstrap';
import Modal from "react-modal";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Loader from '../loader';
import PtDropzone from '../elements/dropzone';
import PtLazyLoad from "../lazyload";

import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from "@cloudinary/url-gen";

// Import required actions and qualifiers.
import {thumbnail} from "@cloudinary/url-gen/actions/resize";
import {byRadius} from "@cloudinary/url-gen/actions/roundCorners";
import {focusOn} from "@cloudinary/url-gen/qualifiers/gravity";
import {FocusOn} from "@cloudinary/url-gen/qualifiers/focusOn";

// import { getMedia } from '../../../api';
import { getCloudImages } from '../../../api';
import { getCroppedImageUrl } from '../../../utils';

const modalStyles = {
    overlay: {
        background: 'rgba(11, 11, 11, .8)',
        zIndex: 9999
    },
    content: {
        top: '10%',
        right: '10%',
        bottom: '10%',
        left: '10%',
        outline: 'none',
        width: '805',
        height: '80%',
        maxWidth: '100%',
        padding: 0,
        position: 'absolute'
    }
};

const cld = new Cloudinary({
    cloud: {
      cloudName: 'dhkg3aqid'
    }
}); 

var formattedImages = [];

Modal.setAppElement( '#app' );

export default function MediaGalleryModal ( { galleryType, isOpen, onClose, chooseOne = false, selected = [] } ) {
    const [ media, setMedia ] = useState( [] );
    const [ loading, setLoading ] = useState( true );
    
    useEffect( () => {
        if ( isOpen ) {
            setLoading(true);
            formattedImages = []
            // getMedia(0).then(results => {
            //     console.log("media-gallery-model", results);
            //     let newMedia = results.data.map( file => {
            //         return {
            //             ...file,
            //             selected: false
            //         };
            //     } )
            //     setMedia( newMedia );
            //     setLoading( false );
            // } );
            console.log("gallery_from_gallery", galleryType);
            getCloudImages(galleryType).then(results => {
                console.log("media-gallery-model", results);
                let newMedia = results.data.data.cloudImages.map(file => {
                    let image = cld.image(file.public_id);
                    image.resize(thumbnail().width(150).height(150).gravity(focusOn(FocusOn.face())))  // Crop the image, focusing on the face.
                        .roundCorners(byRadius(20));
                    formattedImages = [...formattedImages, image];
                    return {
                        ...file,
                        selected: false
                    };
                })
                console.log("formatted image", formattedImages);
                console.log("formatted data", newMedia);
                setMedia(newMedia);
                setLoading( false );
            } );
        }
    }, [ isOpen ] )

    function closeModal ( result = false ) {
        let selectedMedia = result ? media.filter(item => item.selected) : [];
        onClose( selectedMedia );
    }

    function toggleSelect(index, checked) {
        // console.log("forammted id", id);
        setMedia( media.map( (file, seq) => {
            if ( index === seq ) {
                return {
                    ...file,
                    selected: checked
                };
            } else if ( chooseOne && checked && file.selected ) {
                return {
                    ...file,
                    selected: false
                };
            }
            return file;
        }));
        console.log("formatted changed", media);
    }

    function uploadImage ( files ) {
        let temp = [ ...media ];
        let newMedia = temp.concat( files.map( file => {
            return {
                ...file,
                virtual: true,
                selected: false
            };
        }));
        console.log("media", newMedia);
        setMedia( newMedia );
    };

    function removeImage ( id ) {
        setMedia( media.filter( file => file.id !== id ) );
    }

    return (
        <Modal
            isOpen={ isOpen }
            style={ modalStyles }
            className="modal-media-gallery"
        >
            <Card>
                <Card.Header>
                    <Card.Title>Select Images</Card.Title>
                </Card.Header>

                <Card.Body>
                    <div className="modal-wrapper">
                        {
                            loading ? <Loader />
                                :
                                <Tabs className="tabs" defaultIndex={ 1 } selectedTabClassName="active" selectedTabPanelClassName="show" forceRenderTabPanel={ true }>
                                    <TabList className="nav nav-tabs">
                                        <Tab className="nav-item">
                                            <a href="#upload" onClick={ e => e.preventDefault() } className="nav-link border-bottom-0">Upload Media</a>
                                        </Tab>
                                        <Tab className="nav-item">
                                            <a href="#gallery" onClick={ e => e.preventDefault() } className="nav-link border-bottom-0">Media Gallery</a>
                                        </Tab>
                                    </TabList>

                                    <TabPanel className="tab-pane">
                                        <PtDropzone onUpload={ uploadImage } onRemove={ removeImage } />
                                    </TabPanel>

                                    <TabPanel className="tab-pane media-gallery overflow-auto">
                                        {
                                            <Row className="mg-files">
                                                {
                                                    media.map( ( medium, index ) => (
                                                        <Col xs={ 4 } sm={ 3 } md="1-5" lg={ 2 } xl="1-8" className="col-6 col-xxl-1-10" key={ 'modal-media-' + index }>
                                                            <div className={ `thumbnail ${ medium.selected ? 'thumbnail-selected' : '' }` }>
                                                                <div className="thumb-preview">
                                                                    <div className="centered">
                                                                        <a className="thumb-image" href="#media">
                                                                            <AdvancedImage cldImg={formattedImages[index]} />
                                                                        </a>
                                                                    </div>
                                                                    <div className="mg-thumb-options">
                                                                        <div className="mg-toolbar">
                                                                            <div className="mg-option custom-checkbox checkbox-inline">
                                                                                <input
                                                                                    type="checkbox"
                                                                                    id={ "media_" + index }
                                                                                    checked={ medium.selected }
                                                                                    onChange={ e => toggleSelect( index, e.target.checked ) }
                                                                                />
                                                                                <label htmlFor={ "media_" + medium.public_id }>Select</label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                    ) )
                                                }
                                            </Row>
                                        }
                                    </TabPanel>
                                </Tabs>
                        }
                    </div>
                </Card.Body>
                <Card.Footer>
                    <Row>
                        <Col md={ 12 } className="text-right">
                            <Button
                                className="modal-confirm mr-2"
                                onClick={ () => closeModal( true ) }
                                variant="primary"
                            >Set</Button>
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