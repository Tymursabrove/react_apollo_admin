import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Form, Button, InputGroup, Table, OverlayTrigger, Tooltip } from 'react-bootstrap';
import LightBox from 'react-image-lightbox';
import { SlideToggle } from 'react-slide-toggle';
import { Tabs, TabList, TabPanel, Tab } from 'react-tabs';
import DatePicker from 'react-datepicker';
import Select from 'react-select';
import SelectAsync from 'react-select/async';
import { toast } from 'react-toastify';
import Tree from 'rc-tree';
import {createProduct} from '../../../api';

import 'rc-tree/assets/index.css';
import 'react-image-lightbox/style.css';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-popper-tooltip/dist/styles.css';

import Breadcrumb from '../../common/breadcrumb';
import MediaGalleryModal from '../../features/modals/media-gallery-modal';
import PNotify from '../../features/elements/p-notify';
import PtLazyLoad from '../../features/lazyload';
import PtTagsInput from '../../features/elements/tags-input';
import PtToolTip from '../../features/elements/tooltip';

import { getAttributes, getCategories, getTags, getTaxTypes, getProducts } from '../../../api';

export default function ProductAdd () {
    const inputRef = useRef(null);

    const [name, setName] = useState('');
    const [slug, setSlug] = useState('null');
    const [price, setPrice] = useState(0);
    const [sale_price, setSale_price] = useState(null);
    const [short_description, setShort_description] = useState('');
    const [stock, setStock] = useState(0);
    const [ratings, setRatings] = useState(0);
    const [reviews, setReviews] = useState(0);
    const [sale_count, setSale_count] = useState(0);
    const [is_new, setIs_new] = useState(true);
    const [is_hot, setIs_hot] = useState(true);
    const [is_out_of_stock, setIs_out_of_stock] = useState(true);
    const [rated, setRated] = useState(null);
    const [until, setUntil] = useState(null);
    const [variants, setVariants] = useState(null);
    const [images, setImages] = useState([]);
    const [pictures, setPictures] = useState([]);
    const [large_pictures, setLarge_pictures] = useState([]);
    const [small_pictures, setSmall_pictures] = useState([]);
    const [openImage, setOpenImage] = useState(false);
    const [openPicture, setOpenPicture] = useState(false);
    const [openSmallPicture, setOpenSmallPicture] = useState(false);
    const [onlyOneImage, SetOnlyOneImage] = useState(false);
    const [customVariants, setCustomVariants] = useState([]);


    const [ type, setType ] = useState( 'simple' );
    const [ virtual, setVirtual ] = useState( false );
    const [ downloadable, setDownloadable ] = useState( false );
    
    const [ defaultImage, setDefault ] = useState( 1 );
    const [ files, setFiles ] = useState( [] );
    const [ modalOpen, setModalOpen ] = useState( false );
    
    const [ saleSchedule, setSaleSchedule ] = useState( false );
    const [ saleStart, setSaleStart ] = useState( null );
    const [ saleEnd, setSaleEnd ] = useState( null );
    const [ manageStock, setManageStock ] = useState( false );
    const [ attrs, setAttrs ] = useState( [] );
    const [ selectedAttr, setSelectedAttr ] = useState( '' );
    const [ attrsForVariation, setAttrsForVariation ] = useState( [] );
    const [ variation, setVariation ] = useState( [] );
    const attrsForVariationUpdate = useCallback( ( e ) => {
        e.preventDefault();
        let filtered = attrs.filter( attr => attr.usedForVariation && attr.selectedTerms.length );
        filtered = filtered.map( attr => {
            return {
                ...attr,
                terms: attr.terms.filter( term => attr.selectedTerms.find( selected => term.slug === selected.value ) )
            }
        } );
        setAttrsForVariation( filtered );
        setVariation( new Array( filtered.length ).fill( '' ) );
        setVariants( variants.map( variant => {
            return {
                ...variant,
                excerpt: Object.assign( [], filtered.map( attr => {
                    return {
                        attrId: attr.id,
                        termId: ''
                    };
                } ), variant.excerpt )
            }
        } ) );
    }, [ attrs, variants ] )

    // Product Attributes, Tags, Categories
    const [ productTags, setProductTags ] = useState( [] );
    const [ productAttrs, setProductAttrs ] = useState( [] );
    const [ productCats, setProductCats ] = useState( [] );
    const [ taxTypes, setTaxTypes ] = useState( [] );

    useEffect( () => {
        getAttributes().then( response => {
            setProductAttrs( response.data );
            setSelectedAttr( response.data[ 0 ].slug );
        } );
        getCategories( 'products' ).then( response => {
            setProductCats( getTreeData( response.data ) );
        } );
        getTags( 'products' ).then( response => {
            setProductTags( response.data );
        } );
        getTaxTypes().then( response => {
            setTaxTypes( response.data );
        } );
    }, [] )

    async function searchProducts ( input ) {
        let options = [];
        await getProducts( 0, undefined, [ { id: 'name', value: input } ], null ).then( response => {
            options = response.data.map( product => {
                return {
                    label: product.name,
                    value: product.id
                }
            } );
        } ).catch( error => console.error( error ) );
        return options;
    }

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

    function addProduct ( e ) {
        e.preventDefault();
        const data = {
            "id": 14,
            "name": name,
            "slug": slug,
            "price": parseFloat(price),
            "sale_price": parseFloat(sale_price),
            "short_description": short_description,
            "stock": stock,
            "ratings": parseInt(ratings),
            "reviews": parseInt(reviews),
            "sale_count": parseInt(sale_count),
            "is_new": is_new,
            "is_hot": is_hot,
            "is_out_of_stock": is_out_of_stock,
            "rated": rated,
            "until": until,
            "variants": customVariants,
            "large_pictures": images,
            "pictures": pictures,
            "small_pictures":small_pictures
        }
        console.log("sending", data);
        createProduct(data).then((result) => {
            console.log("Result", result);
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
                    <PNotify title="Success" icon="fas fa-check" text="Product added successfully." />,
                    {
                        containerId: "default",
                        className: "notification-success"
                    }
                );
            } 
        }).catch(err => console.log(err));
    }

    function openModal ( e, info ) {
        e.preventDefault();
        SetOnlyOneImage( info.type == 'file' || info.type == 'variant' );
        setModalOpen( info );
    }

    function chooseMedia ( selectedMedia ) {
        setModalOpen( false );
        if ( !selectedMedia.length ) return;
        if (modalOpen.type === 'gallery') {
            let tempImages = [...selectedMedia].map((image) => { 
                return {
                    url:  process.env.PUBLIC_URL+"/mock-server/images/"+ image.copy_link,
                    width: parseInt(image.width),
                    height: parseInt(image.height)
                }
            });
            setImages( [ ...images, ...tempImages ] );
        } else if (modalOpen.type === 'gallery_small_pictures') { 
            let tempSmallPictures = [...selectedMedia].map((image) => { 
                return {
                    url:  process.env.PUBLIC_URL+"/mock-server/images/"+ image.copy_link,
                    width: parseInt(image.width),
                    height: parseInt(image.height)
                }
            });
            setSmall_pictures([...small_pictures, ...tempSmallPictures]);
        } else if (modalOpen.type === 'gallery_pictures') {
            let tempPictures = [...selectedMedia].map((image) => { 
                return {
                    url:  process.env.PUBLIC_URL+"/mock-server/images/"+ image.copy_link,
                    width: parseInt(image.width),
                    height: parseInt(image.height)
                }
            });
            setPictures([...pictures, ...tempPictures]);
        } else if (modalOpen.type === 'file') {
            let id = modalOpen.id;
            setFiles( files.map( ( file, index ) => {
                if ( index === id ) {
                    return {
                        name: selectedMedia[ 0 ].name,
                        url: selectedMedia[ 0 ].copy_link
                    }
                }
                return file;
            } ) );
        } else if ( modalOpen.type === 'variant' ) {
            let id = modalOpen.id[ 0 ];
            let fileId = modalOpen.id[ 1 ];
            setVariants( variants.map( ( variant, index ) => {
                if ( index === id ) {
                    if ( typeof fileId === 'number' ) {
                        variant.files = variant.files.map( ( file, fileIndex ) => {
                            if ( fileIndex === fileId ) {
                                return {
                                    name: selectedMedia[ 0 ].name,
                                    url: selectedMedia[ 0 ].copy_link
                                }
                            }
                            return file;
                        } )
                    } else {
                        variant.media = selectedMedia;
                    }
                }
                return variant;
            } ) )
        }
    }
    function changeImagesWidth(e, index) { 
        let tempImages = [...images];
        tempImages[index].width = parseInt(e.target.value);
        setImages(tempImages);
        console.log(images);
    }
    function changeImagesHeight(e, index) { 
        let tempImages = [...images];
        tempImages[index].height = parseInt(e.target.value);
        setImages(tempImages);
    }
    function changeImagesURL(e, index) { 
        let tempImages = [...images];
        tempImages[index].url = e.target.value;
        setImages(tempImages);
    }
    function changePicturesWidth(e, index) { 
        let tempPictures = [...pictures];
        tempPictures[index].width = parseInt(e.target.value);
        setImages(tempPictures);
    }
    function changePicturesHeight(e, index) { 
        let tempPictures = [...pictures];
        tempPictures[index].height = parseInt(e.target.value);
        setImages(tempPictures);
    }
    function changePicturesURL(e, index) { 
        let tempPictures = [...pictures]
        tempPictures[index].url = e.target.value;
        setImages(tempPictures);
    }
    function changeSmallPicturesWidth(e, index) { 
        let tempSmallPictures = [...small_pictures];        
        tempSmallPictures[index].width = parseInt(e.target.value);
        setImages(tempSmallPictures);
    }
    function changeSmallPicturesHeight(e, index) { 
        let tempSmallPictures = [...small_pictures];        
        tempSmallPictures[index].height = parseInt(e.target.value);
        setImages(tempSmallPictures);
    }
    function changeSmallPicturesURL(e, index) { 
        let tempSmallPictures = [...small_pictures];        
        tempSmallPictures[index].url = e.target.value;
        setImages(tempSmallPictures);
    }

    function selectDefaultImage ( e, id ) {
        e.target.checked && setDefault( id );
    }

    function removeImage ( e, index ) {
        e.preventDefault();
        setImages( images.filter( image => image.id !== index ) );
    }

    function addTag ( e, tag ) {
        e.preventDefault();
        inputRef.current.addTag( tag );
    }

    function addFile ( e ) {
        e.preventDefault();
        setFiles( [
            ...files,
            {
                name: '',
                url: ''
            }
        ] );
    }

    function removeFile ( index ) {
        setFiles( files.filter( ( file, id ) => id !== index ) );
    }

    function fileNameChange ( e, index ) {
        setFiles( files.map( ( file, id ) => {
            if ( id === index ) {
                return {
                    ...file,
                    name: e.target.value
                };
            }
            return file;
        } ) );
    }

    function filePathChange ( e, index ) {
        setFiles( files.map( ( file, id ) => {
            if ( id === index ) {
                return {
                    ...file,
                    url: e.target.value
                };
            }
            return file;
        } ) );
    }

    function addAttr ( e ) {
        e.preventDefault();
        if ( attrs.find( attr => attr.slug === selectedAttr ) ) {
            return;
        }
        let attr = productAttrs.find( attr => attr.slug === selectedAttr );
        setAttrs( [
            ...attrs,
            {
                ...attr,
                showOnProductPage: false,
                usedForVariation: false,
                selectedTerms: []
            }
        ] );
    }

    function addCustomVariants ( e, index ) {
        e.preventDefault();
        setCustomVariants( [
            ...customVariants,
            {
                "price": 0.0,
                "sale_price": 0.0,
                "size": {
                    "name": "Small",
                    "size": "S"
                }
            }
        ] );
    }

    function changeCustomVariantsPrice(e, index) { 
        const tempArray = [...customVariants]
        tempArray[index].price = parseFloat(e.target.value);
        setCustomVariants(tempArray);
    }
    function changeCustomVariantsSalePrice(e, index) { 
        const tempArray = [...customVariants]
        tempArray[index].sale_price = parseFloat(e.target.value);
        setCustomVariants(tempArray);
    }
    function changeCustomVariantsSizeName(e, index) { 
        const tempArray = [...customVariants]
        tempArray[index].size.name = e.target.value;
        setCustomVariants(tempArray);
    }
    function changeCustomVariantsSizeSize(e, index) { 
        const tempArray = [...customVariants]
        tempArray[index].size.size = e.target.value;
        setCustomVariants(tempArray);
    }

    function removeAttr ( e, slug ) {
        e.preventDefault();
        setAttrs( attrs.filter( attr => attr.slug !== slug ) );
    }

    function changeAttr ( index, key, value ) {
        setAttrs( attrs.map( ( attr, id ) => {
            if ( id === index ) {
                attr[ key ] = value;
            }
            return attr;
        } ) );
    }

    function variationChange ( e, index ) {
        setVariation( variation.map( ( variation, id ) => {
            if ( id === index ) {
                return e.target.value;
            }
            return variation;
        } ) );
    }

    function addVariant ( e ) {
        e.preventDefault();
        setVariants( [
            ...variants,
            {
                saleSchedule: false,
                virtual: false,
                downloadable: false,
                manageStock: false,
                files: [],
                media: [],
                excerpt: attrsForVariation.map( ( attr, id ) => {
                    return {
                        attrId: attr.id,
                        termId: variation[ id ]
                    }
                } ),
                taxType: ''
            }
        ] );
    }

    function removeVariant ( e, index ) {
        e.preventDefault();
        setVariants( variants.filter( ( variant, id ) => id !== index ) );
    }

    function variantTermChange ( e, index, attrIndex ) {
        setVariants( variants.map( ( variant, id ) => {
            if ( id === index ) {
                return {
                    ...variant,
                    excerpt: variant.excerpt.map( ( attr, attrId ) => {
                        if ( attrId === attrIndex ) {
                            return {
                                attrId: attr.id,
                                termId: e.target.value === '' ? '' : parseInt( e.target.value )
                            };
                        }
                        return attr;
                    } )
                }
            }
            return variant;
        } ) )
    }

    function variantItemChange ( index, key, value ) {
        setVariants( variants.map( ( variant, id ) => {
            if ( id === index ) {
                variant[ key ] = value;
            }
            return variant;
        } ) );
    }

    function variantFileChange ( index, fileIndex, key, value ) {
        setVariants( variants.map( ( variant, id ) => {
            if ( id === index ) {
                variant.files = variant.files.map( ( file, fileId ) => {
                    if ( fileId === fileIndex ) {
                        file[ key ] = value;
                    }
                    return file;
                } )
            }
            return variant;
        } ) );
    }

    function addVariantFile ( e, index ) {
        e.preventDefault();
        setVariants( variants.map( ( variant, id ) => {
            if ( id === index ) {
                variant.files.push( {
                    name: '',
                    url: ''
                } );
            }
            return variant;
        } ) );
    }

    function removeVariantFile ( index, fileIndex ) {
        setVariants( variants.map( ( variant, id ) => {
            if ( id === index ) {
                variant.files.splice( fileIndex, 1 );
            }
            return variant;
        } ) );
    }

    function openImageLightBox ( index ) {
        setOpenImage( index );
    }

    function closeImageLightBox () {
        setOpenImage( false );
    }

    function openPictureLightBox ( index ) {
        setOpenPicture( index );
    }

    function closePictureLightBox () {
        setOpenPicture( false );
    }

    function openSmallPictureLightBox ( index ) {
        setOpenSmallPicture( index );
    }

    function closeSmallPictureLightBox () {
        setOpenSmallPicture( false );
    }

    return (
        <>
            <Breadcrumb current="Add Product" paths={ [ {
                name: "Home",
                url: "/"
            }, {
                name: "Products",
                url: "/products"
            } ] } />

            <Form className="ecommerce-form" action="#" method="post" onSubmit={ addProduct }>
                <Row className="mb-4">
                    <Col>
                        <Card className="card-modern card-big-info">
                            <Card.Body>
                                <Row>
                                    <Col lg="2-5" xl="1-5">
                                        <i className="card-big-info-icon bx bx-box"></i>
                                        <h2 className="card-big-info-title">General Info</h2>
                                        <p className="card-big-info-desc">
                                            Add here the product description with
                                            all details and necessary information.
                                        </p>
                                    </Col>
                                    <Col lg="3-5" xl="4-5">
                                        <Row>
                                            <Col xl={ 9 }>
                                                <Form.Group as={ Row } className="align-items-center">
                                                    <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">Product Name</Col>
                                                    <Col lg={ 7 } xl={ 8 }>
                                                        <Form.Control
                                                            type="text"
                                                            className="form-control-modern"
                                                            name="name"
                                                            value={name}
                                                            onChange={(e) => { setName(e.target.value) }}
                                                            required
                                                        />
                                                    </Col>
                                                </Form.Group>
                                                <Form.Group as={ Row } className="align-items-center">
                                                    <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">Slug</Col>
                                                    <Col lg={ 7 } xl={ 8 }>
                                                        <Form.Control
                                                            type="text"
                                                            className="form-control-modern"
                                                            name="slug"
                                                            value={slug}
                                                            onChange={(e) => { setSlug(e.target.value) }}
                                                            required
                                                        />
                                                    </Col>
                                                </Form.Group>
                                                <Form.Group as={ Row } className="align-items-center">
                                                    <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">Regular Price($)</Col>
                                                    <Col lg={ 7 } xl={ 8 }>
                                                        <Form.Control
                                                            type="text"
                                                            className="form-control-modern"
                                                            name="price"
                                                            value={price}
                                                            onChange={(e) => { setPrice(e.target.value) }}
                                                            required
                                                        />
                                                    </Col>
                                                </Form.Group>
                                                <Form.Group as={ Row } className="align-items-center">
                                                    <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">Sale Price($)</Col>
                                                    <Col lg={ 7 } xl={ 8 }>
                                                        <Form.Control
                                                            type="text"
                                                            className="form-control-modern"
                                                            name="sale_price"
                                                            value={sale_price}
                                                            onChange={(e) => { setSale_price(e.target.value) }}
                                                            required
                                                        />
                                                    </Col>
                                                </Form.Group>
                                                <Form.Group as={ Row }>
                                                    <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right pt-2 mt-1 mb-0">Short Description</Col>
                                                    <Col lg={ 7 } xl={ 8 }>
                                                        <Form.Control as="textarea"
                                                            className="form-control-modern"
                                                            name="short_desc"
                                                            value={short_description}
                                                            onChange={(e) => { setShort_description(e.target.value) }}
                                                            rows="3"
                                                            maxLength="254"
                                                        />
                                                    </Col>
                                                </Form.Group>
                                                <Form.Group as={ Row } className="align-items-center">
                                                    <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">Stock</Col>
                                                    <Col lg={ 7 } xl={ 8 }>
                                                        <Form.Control
                                                            type="text"
                                                            className="form-control-modern"
                                                            name="stock"
                                                            value={stock}
                                                            onChange={(e) => { setStock(e.target.value) }}
                                                            required
                                                        />
                                                    </Col>
                                                </Form.Group>
                                                <Form.Group as={ Row } className="align-items-center">
                                                    <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">Ratings</Col>
                                                    <Col lg={ 7 } xl={ 8 }>
                                                        <Form.Control
                                                            type="text"
                                                            className="form-control-modern"
                                                            name="ratings"
                                                            value={ratings}
                                                            onChange={(e) => { setRatings(e.target.value) }}
                                                            required
                                                        />
                                                    </Col>
                                                </Form.Group>
                                                <Form.Group as={ Row } className="align-items-center">
                                                    <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">Reviews</Col>
                                                    <Col lg={ 7 } xl={ 8 }>
                                                        <Form.Control
                                                            type="text"
                                                            className="form-control-modern"
                                                            name="reviews"
                                                            value={reviews}
                                                            onChange={(e) => { setReviews(e.target.value) }}
                                                            required
                                                        />
                                                    </Col>
                                                </Form.Group>
                                                <Form.Group as={ Row } className="align-items-center">
                                                    <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">Sale Count</Col>
                                                    <Col lg={ 7 } xl={ 8 }>
                                                        <Form.Control
                                                            type="text"
                                                            className="form-control-modern"
                                                            name="saleCount"
                                                            value={sale_count}
                                                            onChange={(e) => { setSale_count(e.target.value) }}
                                                            required
                                                        />
                                                    </Col>
                                                </Form.Group>
                                                <Form.Group as={Row} className="align-items-center">
                                                    <Col as={ Form.Label } lg={ 1 } xl={ 1 } className="control-label text-lg-right mb-lg-0">New</Col>
                                                    <Col lg={ 3 } xl={ 3 }>
                                                        <Form.Check
                                                            type="checkbox"
                                                            className="form-control-modern"
                                                            name="isNew"
                                                            checked={is_new}
                                                            onChange={(e) => { setIs_new(e.target.checked) }}
                                                        />
                                                    </Col>
                                                    <Col as={ Form.Label } lg={ 1 } xl={ 1 } className="control-label text-lg-right mb-lg-0">Hot</Col>
                                                    <Col lg={ 3 } xl={ 3 }>
                                                        <Form.Check
                                                            type="checkbox"
                                                            className="form-control-modern"
                                                            name="isHot"
                                                            checked={is_hot}
                                                            onChange={(e) => { setIs_hot(e.target.checked) }}
                                                        />
                                                    </Col>
                                                    <Col as={ Form.Label } lg={ 1 } xl={ 1 } className="control-label text-lg-right mb-lg-0">Out of Stock</Col>
                                                    <Col lg={ 3 } xl={ 3 }>
                                                        <Form.Check
                                                            type="checkbox"
                                                            className="form-control-modern"
                                                            name="isOutofStock"
                                                            checked={is_out_of_stock}
                                                            onChange={(e) => { setIs_out_of_stock(e.target.checked) }}
                                                        />
                                                    </Col>
                                                </Form.Group>
                                                <Form.Group as={ Row } className="align-items-center">
                                                    <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">sale_count</Col>
                                                    <Col lg={ 7 } xl={ 8 }>
                                                        <Form.Control
                                                            type="text"
                                                            className="form-control-modern"
                                                            name="saleCount"
                                                            value={sale_count}
                                                            onChange={(e) => { setSale_count(e.target.value) }}
                                                            required
                                                        />
                                                    </Col>
                                                </Form.Group>
                                                <Form.Group as={ Row } className="align-items-center">
                                                    <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">Rated</Col>
                                                    <Col lg={ 7 } xl={ 8 }>
                                                        <Form.Control
                                                            type="text"
                                                            className="form-control-modern"
                                                            name="rated"
                                                            value={rated}
                                                            onChange={(e) => { setRated(e.target.value) }}
                                                            required
                                                        />
                                                    </Col>
                                                </Form.Group>
                                                <Form.Group as={ Row } className="align-items-center">
                                                    <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">Until</Col>
                                                    <Col lg={ 7 } xl={ 8 }>
                                                        <Form.Control
                                                            type="text"
                                                            className="form-control-modern"
                                                            name="until"
                                                            value={until}
                                                            onChange={(e) => { setUntil(e.target.value) }}
                                                            required
                                                        />
                                                    </Col>
                                                </Form.Group>
                                            </Col>
                                            <Col xl={ 3 }>
                                                <Form.Group>
                                                    <Form.Label className="control-label text-lg-right pt-2 mt-1 mb-2">
                                                        Product Categories
                                                        <PtToolTip placement="top" tooltip="In order to add category, you need to add create category first." trigger="hover" />
                                                    </Form.Label>
                                                    <Form.Control as="div" className="form-control-modern overflow-auto">
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
                                                            treeData={ productCats }
                                                        />
                                                    </Form.Control>
                                                </Form.Group>
                                                <Form.Group>
                                                    <Form.Label className="control-label text-lg-right pt-2 mt-1 mb-2">Product Tags</Form.Label>
                                                    <PtTagsInput ref={ inputRef } />
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
                                                                        { productTags.map( ( tag, index ) =>
                                                                            <Button
                                                                                href="#tag"
                                                                                variant="tag"
                                                                                key={ `product-tag-${ index }` } onClick={ e => addTag( e, tag ) }
                                                                            >{ tag.name }</Button>
                                                                        ) }
                                                                    </Form.Control>
                                                                </div>
                                                            </>
                                                        ) }
                                                    </SlideToggle>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className="mb-4">
                    <Col>
                        <Card className="card-modern card-big-info">
                            <Card.Body>
                                <Row>
                                    <Col lg="2-5" xl="1-5">
                                        <i className="card-big-info-icon bx bx-camera"></i>
                                        <h2 className="card-big-info-title">Product Image(Large)</h2>
                                        <p className="card-big-info-desc">Upload your Product image. You can add multiple images</p>
                                    </Col>
                                    <Col lg="3-5" xl="4-5">
                                        <Form.Group className="align-items-center">
                                            <Row>
                                                <Button
                                                    href="#openModal"
                                                    className="ml-auto mb-2 mr-3"
                                                    variant="primary"
                                                    onClick={ e => openModal( e, { type: 'gallery' } ) }
                                                >Add images</Button>
                                            </Row>
                                            <div className="media-gallery product-media-gallery">
                                                <Row className="mg-files">
                                                    {
                                                        images.map((image, index) => (
                                                        <Col md={ 4 } lg={ 3 } className="col-6" key={ `image-${ index }` }>
                                                            <div className="thumbnail">
                                                                <div className="thumb-preview">
                                                                    <div className="centered">
                                                                        <a href="#thumb" className="thumb-image">
                                                                            <PtLazyLoad
                                                                                src={ image.virtual ? image.copy_link : `${ process.env.PUBLIC_URL }/mock-server/images/${ image.copy_link }` }
                                                                                alt={ image.alt_text ? image.alt_text : 'product' }
                                                                                width="300"
                                                                                height="300"
                                                                            />
                                                                        </a>
                                                                    </div>
                                                                    <div className="mg-thumb-options">
                                                                        <div className="mg-zoom" onClick={ () => openImageLightBox( index ) }>
                                                                            <i className="fas fa-search"></i>
                                                                        </div>
                                                                        <div className="mg-toolbar">
                                                                            <Form.Check
                                                                                type="radio"
                                                                                custom
                                                                                inline
                                                                                style={ { minHeight: "auto" } }
                                                                                id={ `image-${ index }` }
                                                                                name="defaultImage"
                                                                                className="mg-option"
                                                                                defaulValue={ image.id }
                                                                                checked={ defaultImage === image.id }
                                                                                onChange={ e => selectDefaultImage( e, image.id ) }
                                                                                label="Set Default"
                                                                            />
                                                                            <div className="mg-option set-default float-right">
                                                                                <a href="#delete" className="text-white mg-remove" onClick={ e => removeImage( e, image.id ) }><i className="far fa-trash-alt d-block"></i></a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <Form.Group as={ Row } className="align-items-center">
                                                                <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">URL</Col>
                                                                <Col lg={ 7 } xl={ 8 }>
                                                                    <Form.Control
                                                                        type="text"
                                                                        className="form-control-modern"
                                                                            name="URL"
                                                                            value={image.url}
                                                                            onChange={e => changeImagesURL(e, index)}
                                                                        required
                                                                    />
                                                                </Col>
                                                            </Form.Group>
                                                            <Form.Group as={ Row } className="align-items-center">
                                                                <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">Width</Col>
                                                                <Col lg={ 7 } xl={ 8 }>
                                                                    <Form.Control
                                                                        type="text"
                                                                        className="form-control-modern"
                                                                        name="Width"
                                                                            defaultValue={image.width}
                                                                            onChange={ e => changeImagesWidth(e, index)}
                                                                        required
                                                                    />
                                                                </Col>
                                                            </Form.Group>
                                                            <Form.Group as={ Row } className="align-items-center">
                                                                <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">Height</Col>
                                                                <Col lg={ 7 } xl={ 8 }>
                                                                    <Form.Control
                                                                        type="text"
                                                                        className="form-control-modern"
                                                                        name="height"
                                                                            defaultValue={image.height}
                                                                            onChange={e => changeImagesHeight(e, index)}
                                                                        required
                                                                    />
                                                                </Col>
                                                            </Form.Group>
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
                <Row className="mb-4">
                    <Col>
                        <Card className="card-modern card-big-info">
                            <Card.Body>
                                <Row>
                                    <Col lg="2-5" xl="1-5">
                                        <i className="card-big-info-icon bx bx-camera"></i>
                                        <h2 className="card-big-info-title">Product Image(Medium)</h2>
                                        <p className="card-big-info-desc">Upload your Product image. You can add multiple images</p>
                                    </Col>
                                    <Col lg="3-5" xl="4-5">
                                        <Form.Group className="align-items-center">
                                            <Row>
                                                <Button
                                                    href="#openModal"
                                                    className="ml-auto mb-2 mr-3"
                                                    variant="primary"
                                                    onClick={ e => openModal( e, { type: 'gallery_pictures' } ) }
                                                >Add images</Button>
                                            </Row>
                                            <div className="media-gallery product-media-gallery">
                                                <Row className="mg-files">
                                                    { pictures.map( ( pictures, index ) => (
                                                        <Col md={ 4 } lg={ 3 } className="col-6" key={ `image-${ index }` }>
                                                            <div className="thumbnail">
                                                                <div className="thumb-preview">
                                                                    <div className="centered">
                                                                        <a href="#thumb" className="thumb-image">
                                                                            <PtLazyLoad
                                                                                src={ pictures.virtual ? pictures.copy_link : `${ process.env.PUBLIC_URL }/mock-server/images/${ pictures.copy_link }` }
                                                                                alt={ pictures.alt_text ? pictures.alt_text : 'product' }
                                                                                width="300"
                                                                                height="300"
                                                                            />
                                                                        </a>
                                                                    </div>
                                                                    <div className="mg-thumb-options">
                                                                        <div className="mg-zoom" onClick={ () => openPictureLightBox( index ) }>
                                                                            <i className="fas fa-search"></i>
                                                                        </div>
                                                                        <div className="mg-toolbar">
                                                                            <Form.Check
                                                                                type="radio"
                                                                                custom
                                                                                inline
                                                                                style={ { minHeight: "auto" } }
                                                                                id={ `pictures-${ index }` }
                                                                                name="defaultImage"
                                                                                className="mg-option"
                                                                                value={pictures.id }
                                                                                checked={ defaultImage === pictures.id }
                                                                                onChange={ e => selectDefaultImage( e, pictures.id ) }
                                                                                label="Set Default"
                                                                            />
                                                                            <div className="mg-option set-default float-right">
                                                                                <a href="#delete" className="text-white mg-remove" onClick={ e => removeImage( e, pictures.id ) }><i className="far fa-trash-alt d-block"></i></a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <Form.Group as={ Row } className="align-items-center">
                                                                <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">URL</Col>
                                                                <Col lg={ 7 } xl={ 8 }>
                                                                    <Form.Control
                                                                        type="text"
                                                                        className="form-control-modern"
                                                                        name="reviews"
                                                                        value={pictures.url}
                                                                        onChange={ e => changePicturesURL(e, index)}
                                                                        required
                                                                    />
                                                                </Col>
                                                            </Form.Group>
                                                            <Form.Group as={ Row } className="align-items-center">
                                                                <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">Width</Col>
                                                                <Col lg={ 7 } xl={ 8 }>
                                                                    <Form.Control
                                                                        type="text"
                                                                        className="form-control-modern"
                                                                        name="width"
                                                                        defaultValue={pictures.width}
                                                                        onChange={e => changePicturesWidth(e, index)}
                                                                        required
                                                                    />
                                                                </Col>
                                                            </Form.Group>
                                                            <Form.Group as={ Row } className="align-items-center">
                                                                <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">Height</Col>
                                                                <Col lg={ 7 } xl={ 8 }>
                                                                    <Form.Control
                                                                        type="text"
                                                                        className="form-control-modern"
                                                                        name="height"
                                                                        defaultValue={pictures.height}
                                                                        onChange={e => changePicturesHeight(e, index)}
                                                                        required
                                                                    />
                                                                </Col>
                                                            </Form.Group>
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
                <Row className="mb-4">
                    <Col>
                        <Card className="card-modern card-big-info">
                            <Card.Body>
                                <Row>
                                    <Col lg="2-5" xl="1-5">
                                        <i className="card-big-info-icon bx bx-camera"></i>
                                        <h2 className="card-big-info-title">Product Image(Small)</h2>
                                        <p className="card-big-info-desc">Upload your Product image. You can add multiple images</p>
                                    </Col>
                                    <Col lg="3-5" xl="4-5">
                                        <Form.Group className="align-items-center">
                                            <Row>
                                                <Button
                                                    href="#openModal"
                                                    className="ml-auto mb-2 mr-3"
                                                    variant="primary"
                                                    onClick={ e => openModal( e, { type: 'gallery_small_pictures' } ) }
                                                >Add images</Button>
                                            </Row>
                                            <div className="media-gallery product-media-gallery">
                                                <Row className="mg-files">
                                                    { small_pictures.map( ( small_pictures, index ) => (
                                                        <Col md={ 4 } lg={ 3 } className="col-6" key={ `image-${ index }` }>
                                                            <div className="thumbnail">
                                                                <div className="thumb-preview">
                                                                    <div className="centered">
                                                                        <a href="#thumb" className="thumb-image">
                                                                            <PtLazyLoad
                                                                                src={ small_pictures.virtual ? small_pictures.copy_link : `${ process.env.PUBLIC_URL }/mock-server/images/${ small_pictures.copy_link }` }
                                                                                alt={ small_pictures.alt_text ? small_pictures.alt_text : 'product' }
                                                                                width="300"
                                                                                height="300"
                                                                            />
                                                                        </a>
                                                                    </div>
                                                                    <div className="mg-thumb-options">
                                                                        <div className="mg-zoom" onClick={ () => openSmallPictureLightBox( index ) }>
                                                                            <i className="fas fa-search"></i>
                                                                        </div>
                                                                        <div className="mg-toolbar">
                                                                            <Form.Check
                                                                                type="radio"
                                                                                custom
                                                                                inline
                                                                                style={ { minHeight: "auto" } }
                                                                                id={ `image-${ index }` }
                                                                                name="defaultImage"
                                                                                className="mg-option"
                                                                                value={ small_pictures.id }
                                                                                checked={ defaultImage === small_pictures.id }
                                                                                onChange={ e => selectDefaultImage( e, small_pictures.id ) }
                                                                                label="Set Default"
                                                                            />
                                                                            <div className="mg-option set-default float-right">
                                                                                <a href="#delete" className="text-white mg-remove" onClick={ e => removeImage( e, small_pictures.id ) }><i className="far fa-trash-alt d-block"></i></a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <Form.Group as={ Row } className="align-items-center">
                                                                <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">URL</Col>
                                                                <Col lg={ 7 } xl={ 8 }>
                                                                    <Form.Control
                                                                        type="text"
                                                                        className="form-control-modern"
                                                                        name="URL"
                                                                        value={small_pictures.url }
                                                                        onChange={e => changeSmallPicturesURL(e, index)}
                                                                        required
                                                                    />
                                                                </Col>
                                                            </Form.Group>
                                                            <Form.Group as={ Row } className="align-items-center">
                                                                <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">Width</Col>
                                                                <Col lg={ 7 } xl={ 8 }>
                                                                    <Form.Control
                                                                        type="text"
                                                                        className="form-control-modern"
                                                                        name="width"
                                                                        defaultValue={small_pictures.width}
                                                                        onChange={e => changeSmallPicturesWidth(e, index)}
                                                                        required
                                                                    />
                                                                </Col>
                                                            </Form.Group>
                                                            <Form.Group as={ Row } className="align-items-center">
                                                                <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">Height</Col>
                                                                <Col lg={ 7 } xl={ 8 }>
                                                                    <Form.Control
                                                                        type="text"
                                                                        className="form-control-modern"
                                                                        name="height"
                                                                        Value={small_pictures.height}
                                                                        onChange={e => changeSmallPicturesHeight(e, index)}
                                                                        required
                                                                    />
                                                                </Col>
                                                            </Form.Group>
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
                <Row className="mb-4">
                    <Col>
                        <Card className="card-modern card-big-info">
                            <Card.Body>
                                <Row>
                                    <Col lg="2-5" xl="1-5">
                                        <i className="card-big-info-icon bx bx-camera"></i>
                                        <h2 className="card-big-info-title">Variants</h2>
                                        <p className="card-big-info-desc">Add variant products</p>
                                    </Col>
                                    <Col lg="3-5" xl="4-5">
                                        <Form.Group className="align-items-center">
                                            <Row>
                                                <Button
                                                    href="#openModal"
                                                    className="ml-auto mb-2 mr-3"
                                                    variant="primary"
                                                    onClick={addCustomVariants}
                                                >Add Variants</Button>
                                            </Row>
                                        </Form.Group>
                                        {
                                            customVariants.map((customVariant, index) => (
                                                <Form.Group as={Row} className="align-items-center" key={ index}>
                                                    <Col xl={3} className="mb-3 mb-xl-0">
                                                        <Form.Label className="control-label">Price</Form.Label>
                                                        <Form.Control
                                                            as="input"
                                                            className="form-control-modern mb-2"
                                                            defaultValue={customVariants[index].price}
                                                            onChange={(e) => changeCustomVariantsPrice(e, index)}
                                                        ></Form.Control>
                                                    </Col>
                                                    <Col xl={3} className="mb-3 mb-xl-0">
                                                        <Form.Label className="control-label">Sale Price</Form.Label>
                                                        <Form.Control
                                                            as="input"
                                                            className="form-control-modern mb-2"
                                                            defaultValue={customVariants[index].sale_price}
                                                            onChange={(e) => changeCustomVariantsSalePrice(e, index)}
                                                        ></Form.Control>
                                                    </Col>
                                                    <Col xl={3} className="mb-3 mb-xl-0">
                                                        <Form.Label className="control-label">Size Name</Form.Label>
                                                        <Form.Control
                                                            as="input"
                                                            className="form-control-modern mb-2"
                                                            defaultValue={customVariants[index].size.name}
                                                            onChange={(e) => changeCustomVariantsSizeName(e, index)}
                                                        ></Form.Control>
                                                    </Col>
                                                    <Col xl={3} className="mb-3 mb-xl-0">
                                                        <Form.Label className="control-label">Size</Form.Label>
                                                        <Form.Control
                                                            as="input"
                                                            className="form-control-modern mb-2"
                                                            defaultValue={customVariants[index].size.size}
                                                            onChange={(e) => changeCustomVariantsSizeSize(e, index)}
                                                        ></Form.Control>
                                                    </Col>
                                                </Form.Group>
                                            ))
                                        }
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className="mb-4">
                    <Col>
                        <Card className="card-modern card-big-info">
                            <Card.Body>
                                <Tabs className="tabs-modern row" selectedTabClassName="active" selectedTabPanelClassName="show">
                                    <Col lg="2-5" xl="1-5">
                                        <TabList className="nav flex-column">
                                            <Tab><a className="nav-link" href="#price" onClick={ e => e.preventDefault() }>Price</a></Tab>
                                            <Tab><a className="nav-link" href="#inventory" onClick={ e => e.preventDefault() }>Inventory</a></Tab>
                                            { virtual ? ''
                                                : <Tab><a className="nav-link" href="#shipping" onClick={ e => e.preventDefault() }>Shipping</a></Tab>
                                            }
                                            <Tab><a className="nav-link" href="#linked" onClick={ e => e.preventDefault() }>Linked Products</a></Tab>
                                            <Tab><a className="nav-link" href="#attrs" onClick={ e => e.preventDefault() }>Attributes</a></Tab>
                                            { type === 'variable' ?
                                                <Tab><a className="nav-link" href="#attrs" onClick={ attrsForVariationUpdate }>Variations</a></Tab>
                                                : ''
                                            }
                                            <Tab><a className="nav-link" href="#advanced" onClick={ e => e.preventDefault() }>Advanced</a></Tab>
                                        </TabList>
                                    </Col>

                                    <Col lg="3-5" xl="4-5">
                                        <TabPanel className="tab-pane fade">
                                            { type === 'simple' ?
                                                <>
                                                    <Form.Group as={ Row } className="align-items-center">
                                                        <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">Regular Price ($)</Col>
                                                        <Col lg={ 7 } xl={ 6 }>
                                                            <Form.Control
                                                                type="text"
                                                                className="form-control-modern"
                                                                name="price"
                                                                required
                                                            />
                                                        </Col>
                                                    </Form.Group>
                                                    <Form.Group as={ Row } className="align-items-center">
                                                        <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">Sale Price ($)</Col>
                                                        <Col lg={ 7 } xl={ 6 }>
                                                            <Form.Control
                                                                type="text"
                                                                className="form-control-modern"
                                                                name="sale_price"
                                                            />
                                                        </Col>
                                                        { saleSchedule ? ''
                                                            :
                                                            <Col lg={ { offset: 5 } } xl={ { span: "auto", offset: 0 } } className="col-auto">
                                                                <Button
                                                                    href="#setSchedule"
                                                                    className="set-schedule p-0"
                                                                    variant="link"
                                                                    onClick={ e => { e.preventDefault(); setSaleSchedule( true ) } }
                                                                >Schedule</Button>
                                                            </Col>
                                                        }
                                                    </Form.Group>
                                                    { saleSchedule ?
                                                        <Form.Group>
                                                            <Row className="align-items-center">
                                                                <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">Sale Price Dates</Col>
                                                                <Col lg={ 7 } xl={ 6 }>
                                                                    <InputGroup className="input-daterange">
                                                                        <InputGroup.Prepend><InputGroup.Text><i className="fas fa-calendar-alt"></i></InputGroup.Text></InputGroup.Prepend>
                                                                        <Form.Control
                                                                            as="div"
                                                                            className="py-0"
                                                                        >
                                                                            <DatePicker
                                                                                selected={ saleStart }
                                                                                onChange={ date => setSaleStart( date ) }
                                                                                maxDate={ saleEnd }
                                                                            />
                                                                        </Form.Control>
                                                                        <InputGroup.Text className="border-left-0 border-right-0 rounded-0">to</InputGroup.Text>
                                                                        <Form.Control
                                                                            as="div"
                                                                            className="py-0"
                                                                        >
                                                                            <DatePicker
                                                                                selected={ saleEnd }
                                                                                onChange={ date => setSaleEnd( date ) }
                                                                                minDate={ saleStart }
                                                                            />
                                                                        </Form.Control>
                                                                    </InputGroup>
                                                                </Col>
                                                                <Col lg={ { offset: 5 } } xl={ { span: "auto", offset: 0 } } className="col-auto">
                                                                    <Button
                                                                        href="#unsetSchedule"
                                                                        className="cancel-schedule float-right p-0"
                                                                        variant="link"
                                                                        onClick={ e => { e.preventDefault(); setSaleSchedule( false ); } }
                                                                    >Cancel</Button>
                                                                </Col>
                                                            </Row>
                                                        </Form.Group>
                                                        : ''
                                                    }
                                                </>
                                                : ''
                                            }
                                            { downloadable ?
                                                <Form.Group>
                                                    <Row className="mb-3">
                                                        <Col lg={ 5 } xl={ 3 } className="text-lg-right">
                                                            <Form.Label className="control-label mt-3 mb-0">Downloadalbe files</Form.Label>
                                                        </Col>
                                                        <Col lg={ 7 } xl={ 9 }>
                                                            <Table className="table-downloadable" responsive={ true } style={ { minWidth: "600px" } }>
                                                                <thead>
                                                                    <tr>
                                                                        <th>Name</th>
                                                                        <th>File URL</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {
                                                                        files.map( ( file, index ) => (
                                                                            <tr key={ `file-${ index }` }>
                                                                                <td>
                                                                                    <Form.Control
                                                                                        type="text"
                                                                                        className="form-control-modern"
                                                                                        value={ file.name }
                                                                                        onChange={ e => fileNameChange( e, index ) }
                                                                                    />
                                                                                </td>
                                                                                <td>
                                                                                    <InputGroup>
                                                                                        <Form.Control
                                                                                            type="text"
                                                                                            className="form-control-modern"
                                                                                            value={ file.url }
                                                                                            placeholder="file path"
                                                                                            onChange={ e => filePathChange( e, index ) }
                                                                                        />
                                                                                        <InputGroup.Append>
                                                                                            <Button
                                                                                                type="button"
                                                                                                variant="primary"
                                                                                                onClick={ e => openModal( e, { type: 'file', id: index } ) }
                                                                                            >Choose File</Button>
                                                                                            <Button
                                                                                                type="button"
                                                                                                className="btn-remove"
                                                                                                variant="danger"
                                                                                                onClick={ () => removeFile( index ) }
                                                                                            ><i className="bx bx-trash text-r mt-1"></i>
                                                                                            </Button>
                                                                                        </InputGroup.Append>
                                                                                    </InputGroup>
                                                                                </td>
                                                                            </tr>
                                                                        ) )
                                                                    }
                                                                </tbody>
                                                                <tfoot>
                                                                    <tr>
                                                                        <th colSpan="2"><a href="#addFile" className="btn btn-primary" onClick={ addFile }>Add file</a></th>
                                                                    </tr>
                                                                </tfoot>
                                                            </Table>
                                                        </Col>
                                                    </Row>
                                                </Form.Group>
                                                : ''
                                            }
                                            <Form.Group as={ Row } className="align-items-center">
                                                <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">Tax Status
                                                    <PtToolTip placement="top" trigger="hover" tooltip="Define whether or not the entire product is taxable, or just the cost of shipping it." />
                                                </Col>
                                                <Col lg={ 7 } xl={ 6 }>
                                                    <Form.Control as="select" className="form-control-modern">
                                                        <option value="taxable">Taxable</option>
                                                        <option value="shipping">Shipping Only</option>
                                                        <option value="none">None</option>
                                                    </Form.Control>
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={ Row } className="align-items-center">
                                                <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">
                                                    Tax Class
                                                    <PtToolTip placement="top" trigger="hover" tooltip="Choose a tax class for this product. Tax classes are used to apply different tax rates specific to certain types of product." />
                                                </Col>
                                                <Col lg={ 7 } xl={ 6 }>
                                                    <Form.Control as="select" className="form-control-modern">
                                                        {
                                                            taxTypes.map( ( tax, index ) => (
                                                                <option value={ tax.slug } key={ `tax-type-${ index }` }>{ tax.name }</option>
                                                            ) )
                                                        }
                                                    </Form.Control>
                                                </Col>
                                            </Form.Group>
                                        </TabPanel>

                                        <TabPanel className="tab-pane fade">
                                            <Form.Group as={ Row } className="align-items-center">
                                                <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0 mb">
                                                    SKU
                                                    <PtToolTip placement="top" trigger="hover" tooltip="SKU refers to a Stock-keeping unit, a unique identifier for each distinct product and service that can be purchased." />
                                                </Col>
                                                <Col lg={ 7 } xl={ 6 }>
                                                    <Form.Control type="text" className="form-control-modern" />
                                                </Col>
                                            </Form.Group>
                                            { type === 'simple' ?
                                                <>
                                                    <Form.Group>
                                                        <Row className="align-items-center">
                                                            <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">Manage Stock?</Col>
                                                            <Col lg={ 7 } xl={ 6 }>
                                                                <Form.Check className="checkbox">
                                                                    <Form.Check.Label className="my-2">
                                                                        <Form.Check.Input
                                                                            className="checkbox-style-1 mt-0"
                                                                            type="checkbox"
                                                                            checked={ manageStock }
                                                                            onChange={ e => setManageStock( e.target.checked ) }
                                                                        />
                                                                        Enable stock management at product level
                                                                    </Form.Check.Label>
                                                                </Form.Check>
                                                            </Col>
                                                        </Row>
                                                        { manageStock ?
                                                            <>
                                                                <Row className="pt-4 mb-3 align-items-center">
                                                                    <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">
                                                                        Stock Quantity
                                                                        <PtToolTip placement="top" trigger="hover" tooltip="Stock quantity. If this is a variable product this value will be used to control stock for all variations, unless you define stock at variation level." />
                                                                    </Col>
                                                                    <Col lg={ 7 } xl={ 6 }>
                                                                        <Form.Control type="number" className="form-control-modern" />
                                                                    </Col>
                                                                </Row>
                                                                <Row className="pt-3 mb-3 align-items-center">
                                                                    <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">
                                                                        Allow Backorders
                                                                        <PtToolTip placement="top" trigger="hover" tooltip="If managing stock, this controls whether or not backorders are allowed. If enabled, stock quantity can go below 0" />
                                                                    </Col>
                                                                    <Col lg={ 7 } xl={ 6 }>
                                                                        <Form.Control as="select" className="form-control-modern">
                                                                            <option value="no">Do not allow</option>
                                                                            <option value="yes">Allow</option>
                                                                        </Form.Control>
                                                                    </Col>
                                                                </Row>
                                                                <Row className="py-3 mb-3 align-items-center">
                                                                    <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">
                                                                        Low stock threshold
                                                                        <PtToolTip placement="top" trigger="hover" tooltip="When product stock reaches this amount you will be notified by email" />
                                                                    </Col>
                                                                    <Col lg={ 7 } xl={ 6 }>
                                                                        <Form.Control
                                                                            type="number"
                                                                            className="form-control-modern"
                                                                            min="0"
                                                                            defaultValue={ 2 }
                                                                        />
                                                                    </Col>
                                                                </Row>
                                                            </>
                                                            : ''
                                                        }
                                                    </Form.Group>
                                                    {
                                                        !manageStock ?
                                                            <Form.Group as={ Row } className="align-items-center">
                                                                <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">
                                                                    Stock Status
                                                                    <PtToolTip placement="top" trigger="hover" tooltip="Controls whether or not the product is listed as 'in stock' or 'out of stock' on the frontend." />
                                                                </Col>
                                                                <Col lg={ 7 } xl={ 6 }>
                                                                    <Form.Control as="select" className="form-control-modern">
                                                                        <option value="in-stock">In Stock</option>
                                                                        <option value="out-of-stock">Out of Stock</option>
                                                                        <option value="on-backorder">On Backorder</option>
                                                                    </Form.Control>
                                                                </Col>
                                                            </Form.Group>
                                                            : ''
                                                    }
                                                </>
                                                : ''
                                            }
                                            <Form.Group as={ Row } className="align-items-center">
                                                <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">Sold Individually</Col>
                                                <Col lg={ 7 } xl={ 6 }>
                                                    <Form.Check className="checkbox">
                                                        <Form.Check.Label className="my-2">
                                                            <Form.Check.Input className="checkbox-style-1 mt-0" type="checkbox" />
                                                            Enable this to only allow one of this item to be bought in a single order
                                                        </Form.Check.Label>
                                                    </Form.Check>
                                                </Col>
                                            </Form.Group>
                                        </TabPanel>

                                        { !virtual ?
                                            <TabPanel className="tab-pane fade">
                                                <Form.Group as={ Row } className="align-items-center">
                                                    <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">
                                                        Weight (kg)
                                                        <PtToolTip placement="top" trigger="hover" tooltip="Weight in decimal form" />
                                                    </Col>
                                                    <Col lg={ 7 } xl={ 6 }>
                                                        <Form.Control type="number" className="form-control-modern" />
                                                    </Col>
                                                </Form.Group>
                                                <Form.Group as={ Row } className="align-items-center">
                                                    <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">
                                                        Dimensions (cm)
                                                        <PtToolTip placement="top" trigger="hover" tooltip="LxWxH decimal form" />
                                                    </Col>
                                                    <Col lg={ 7 } xl={ 6 }>
                                                        <Row>
                                                            <Col xl={ 4 } className="mb-3 mb-xl-0">
                                                                <Form.Control
                                                                    type="number"
                                                                    className="form-control-modern"
                                                                    placeholder="Length"
                                                                />
                                                            </Col>
                                                            <Col xl={ 4 } className="mb-3 mb-xl-0">
                                                                <Form.Control
                                                                    type="number"
                                                                    className="form-control-modern"
                                                                    placeholder="Width"
                                                                />
                                                            </Col>
                                                            <Col xl={ 4 } className="mb-3 mb-xl-0">
                                                                <Form.Control
                                                                    type="number"
                                                                    className="form-control-modern"
                                                                    placeholder="Height"
                                                                />
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </Form.Group>
                                            </TabPanel>
                                            : ''
                                        }

                                        <TabPanel className="tab-pane fade">
                                            <Form.Group as={ Row } className="align-items-center">
                                                <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">
                                                    Upsells
                                                    <PtToolTip placement="top" trigger="hover" tooltip="Upsells are products which you recommend instead of the currently viewed product, for example, products that are more profitable or better quality or more expensive." />
                                                </Col>
                                                <Col lg={ 7 } xl={ 6 }>
                                                    <SelectAsync
                                                        isMulti={ true }
                                                        loadOptions={ searchProducts }
                                                    />
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={ Row } className="align-items-center">
                                                <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">
                                                    Cross-sells
                                                    <PtToolTip placement="top" trigger="hover" tooltip="Cross-sells are products which you promote in the cart, based on the current product." />
                                                </Col>
                                                <Col lg={ 7 } xl={ 6 }>
                                                    <SelectAsync
                                                        isMulti={ true }
                                                        loadOptions={ searchProducts }
                                                    />
                                                </Col>
                                            </Form.Group>
                                        </TabPanel>

                                        <TabPanel className="tab-pane fade">
                                            <div className="ecommerce-attribues-wrapper">
                                                {
                                                    productAttrs.length ?
                                                        <>
                                                            <Form.Group as={ Row } className="ecommerce-attribute-add justify-content-center mb-0 pb-3 border-bottom">
                                                                <Col xl={ 9 }>
                                                                    <Form.Control
                                                                        as="select"
                                                                        className="form-control-modern float-left w-auto mr-3"
                                                                        value={ selectedAttr }
                                                                        onChange={ e => setSelectedAttr( e.target.value ) }
                                                                    >
                                                                        {
                                                                            productAttrs.map( ( attr, index ) => (
                                                                                <option value={ attr.slug } key={ `attr-${ index }` }>{ attr.name }</option>
                                                                            ) )
                                                                        }
                                                                    </Form.Control>
                                                                    <Button
                                                                        href="#addAttr"
                                                                        className="ecommerce-attribute-add-new font-weight-semibold float-left"
                                                                        variant="primary"
                                                                        disabled={ selectedAttr === '' }
                                                                        onClick={ addAttr }
                                                                    >+ New</Button>
                                                                </Col>
                                                            </Form.Group>
                                                            { attrs.map( ( attr, index ) => (
                                                                <Form.Group as={ Row } className="justify-content-center ecommerce-attribute-row" key={ `product-attr-${ index }` }>
                                                                    <Col xl={ 3 } className="mb-3 mb-xl-0">
                                                                        <Form.Label className="control-label">Name</Form.Label>
                                                                        <Form.Control as="label" className="form-control-modern mb-2">{ attr.name }</Form.Control>
                                                                        <Form.Check
                                                                            custom
                                                                            className="for-variations"
                                                                            id={ `show_product_${ index }` }
                                                                            label="Show on product page."
                                                                            checked={ attr.showOnProductPage }
                                                                            onChange={ e => changeAttr( index, "showOnProductPage", e.target.checked ) }
                                                                        />
                                                                        { type === 'variable' ?
                                                                            <Form.Check
                                                                                custom
                                                                                className="for-variations"
                                                                                id={ `use_variation_${ index }` }
                                                                                label="Used for variations."
                                                                                checked={ attr.usedForVariation }
                                                                                onChange={ e => changeAttr( index, "usedForVariation", e.target.checked ) }
                                                                            />
                                                                            : ''
                                                                        }
                                                                    </Col>
                                                                    <Col xl={ 6 }>
                                                                        <a href="#removeAttr" className="ecommerce-attribute-remove text-color-danger float-right" onClick={ e => removeAttr( e, attr.slug ) }>Remove</a>
                                                                        <Form.Label className="control-label">Value(s)</Form.Label>
                                                                        <Select
                                                                            value={ attr.selectedTerms }
                                                                            isMulti={ true }
                                                                            onChange={ options => changeAttr( index, "selectedTerms", options ) }
                                                                            options={ attr.terms.map( term => { return { value: term.slug, label: attr.slug === 'color' ? term.slug : term.name } } ) }
                                                                        />
                                                                    </Col>
                                                                </Form.Group>
                                                            ) )
                                                            }
                                                        </>
                                                        :
                                                        <Card.Body className="p-3 border">
                                                            <div className="widget-summary widget-summary-sm">
                                                                <div className="widget-summary-col widget-summary-col-icon">
                                                                    <div className="summary-icon bg-primary">
                                                                        <i className="fas fa-life-ring"></i>
                                                                    </div>
                                                                </div>
                                                                <div className="widget-summary-col">
                                                                    <div className="summary">
                                                                        <h4 className="title">Before you can add a attribute you need to create attributeds on Products/Attribute Page.</h4>
                                                                    </div>
                                                                    <div className="summary-footer">
                                                                        <a href="#docs" target="_blank">(Learn More)</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Card.Body>
                                                }
                                            </div>
                                        </TabPanel>

                                        { type === 'variable' ?
                                            <TabPanel className="tab-pane fade">
                                                <div className="ecommerce-variations-wrapper">
                                                    {
                                                        attrsForVariation.length ?
                                                            <>
                                                                <Form.Group>
                                                                    <div className="d-flex float-left align-items-center">
                                                                        <Form.Label className="control-label mb-0 text-nowrap mr-2">Default Form Values</Form.Label>
                                                                        { attrsForVariation.map( ( attr, index ) => (
                                                                            <Form.Control
                                                                                as="select"
                                                                                className="form-control-modern mr-2"
                                                                                key={ `variation-attr-${ index }` }
                                                                                value={ variation[ index ] }
                                                                                onChange={ e => variationChange( e, index ) }
                                                                            >
                                                                                <option value=''>Any { attr.name }</option>
                                                                                {
                                                                                    attr.terms.map( term => (
                                                                                        <option key={ `${ attr.slug }-term-${ term.id }` } value={ term.id }>{ attr.slug === 'color' ? term.slug : term.name }</option>
                                                                                    ) )
                                                                                }
                                                                            </Form.Control>
                                                                        ) ) }
                                                                    </div>
                                                                    <div className="float-right text-right">
                                                                        <Button
                                                                            href="#addVariation"
                                                                            className="ecommerce-variations-add font-weight-semibold"
                                                                            variant="primary"
                                                                            onClick={ addVariant }
                                                                        >+ Add variation</Button>
                                                                    </div>
                                                                </Form.Group>
                                                                { variants.map( ( variant, index ) => (
                                                                    <div className="ecommerce-variations-group" key={ `variant-${ index }` }>
                                                                        <SlideToggle collapsed={ true }>
                                                                            { ( { onToggle, setCollapsibleElement, toggleState } ) => (
                                                                                <div className="ecommerce-variation">
                                                                                    <div className="ecommerce-variation-header d-flex justify-content-between">
                                                                                        <Form.Group className="d-flex mb-0">
                                                                                            { attrsForVariation.map( ( attr, attrIndex ) => (
                                                                                                <Form.Control
                                                                                                    as="select"
                                                                                                    className="form-control-modern mx-2 w-auto"
                                                                                                    key={ `variant-${ index }-attr-${ attr.slug }` }
                                                                                                    value={ variant.excerpt[ attrIndex ].termId }
                                                                                                    onChange={ e => variantTermChange( e, index, attrIndex ) }
                                                                                                >
                                                                                                    <option value=''>Any { attr.name }</option>
                                                                                                    {
                                                                                                        attr.terms.map( term => (
                                                                                                            <option key={ `${ attr.slug }-term-${ term.id }` } value={ term.id }>{ attr.slug === 'color' ? term.slug : term.name }</option>
                                                                                                        ) )
                                                                                                    }
                                                                                                </Form.Control>
                                                                                            ) ) }
                                                                                        </Form.Group>
                                                                                        <div className="ecommerce-variation-header-action d-flex align-items-center">
                                                                                            <a href="#toggle" className="ecommerce-variation-slide-toggle mr-2" onClick={ e => { e.preventDefault(); onToggle(); } }>{ toggleState === 'COLLAPSED' ? 'Expand' : 'Collapse' }</a>
                                                                                            <a href="#remove" className="ecommerce-variation-remove text-color-danger" onClick={ e => removeVariant( e, index ) }>Remove</a>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="overflow-hidden" ref={ setCollapsibleElement }>
                                                                                        <div className="ecommerce-variation-content d-block">
                                                                                            <Form.Group as={ Row }>
                                                                                                <Col className="col-6">
                                                                                                    <div className="variation-img">
                                                                                                        <Button
                                                                                                            href="#variationimage"
                                                                                                            variant="outline-primary"
                                                                                                            onClick={ e => openModal( e, { type: 'variant', id: [ index ] } ) }
                                                                                                        >
                                                                                                            { variant.media.length ?
                                                                                                                <PtLazyLoad
                                                                                                                    src={ variant.media[ 0 ].virtual ? variant.media[ 0 ].copy_link : `${ process.env.PUBLIC_URL }/mock-server/images/${ variant.media[ 0 ].copy_link }` }
                                                                                                                    alt={ variant.media[ 0 ].alt_text ? variant.media[ 0 ].alt_text : 'product' }
                                                                                                                    width="100"
                                                                                                                    height="100"
                                                                                                                />
                                                                                                                : <img
                                                                                                                    src={ `${ process.env.PUBLIC_URL }/assets/images/porto-placeholder-66x66.png` }
                                                                                                                    alt="category"
                                                                                                                    width="100"
                                                                                                                    height="100"
                                                                                                                />
                                                                                                            }
                                                                                                        </Button>
                                                                                                    </div>
                                                                                                </Col>
                                                                                                <Col className="col-6">
                                                                                                    <Form.Label className="control-label">SKU</Form.Label>
                                                                                                    <Form.Control type="text" className="form-control-modern" />
                                                                                                </Col>
                                                                                            </Form.Group>
                                                                                            <Form.Group>
                                                                                                <Form.Check
                                                                                                    custom
                                                                                                    inline
                                                                                                    className="checkbox-default mr-3 align-items-center"
                                                                                                    id={ `virtual-check-${ index }` }
                                                                                                    checked={ variant.virtual }
                                                                                                    onChange={ e => variantItemChange( index, 'virtual', e.target.checked ) }
                                                                                                    label="Virtual"
                                                                                                />
                                                                                                <Form.Check
                                                                                                    custom
                                                                                                    inline
                                                                                                    className="checkbox-default mr-3 align-items-center"
                                                                                                    id={ `download-check-${ index }` }
                                                                                                    checked={ variant.downloadable }
                                                                                                    onChange={ e => variantItemChange( index, 'downloadable', e.target.checked ) }
                                                                                                    label="Downloadable"
                                                                                                />
                                                                                                <Form.Check
                                                                                                    custom
                                                                                                    inline
                                                                                                    className="checkbox-default align-items-center"
                                                                                                    id={ `stock-check-${ index }` }
                                                                                                    checked={ variant.manageStock }
                                                                                                    onChange={ e => variantItemChange( index, 'manageStock', e.target.checked ) }
                                                                                                    label="Manage stock?"
                                                                                                />
                                                                                            </Form.Group>
                                                                                            <Form.Group>
                                                                                                <Row>
                                                                                                    <Col className="col-6">
                                                                                                        <Form.Label className="control-label">Regular Price ($)</Form.Label>
                                                                                                        <Form.Control type="text" className="form-control-modern" required />
                                                                                                    </Col>
                                                                                                    <Col className="col-6">
                                                                                                        <Form.Label className="control-label">Sale Price ($)</Form.Label>
                                                                                                        <div className="d-flex">
                                                                                                            <Form.Control type="text" className="form-control-modern" />
                                                                                                            <Button
                                                                                                                href="#toggleSchedule"
                                                                                                                className="toggle-schedule"
                                                                                                                variant="link"
                                                                                                                onClick={ e => { e.preventDefault(); variantItemChange( index, 'saleSchedule', !variant.saleSchedule ) } }
                                                                                                            >Schedule</Button>
                                                                                                        </div>
                                                                                                    </Col>
                                                                                                </Row>
                                                                                            </Form.Group>
                                                                                            { variant.saleSchedule ?
                                                                                                <Row className="mt-3">
                                                                                                    <Col className="col-6">
                                                                                                        <InputGroup>
                                                                                                            <InputGroup.Append><InputGroup.Text>From</InputGroup.Text></InputGroup.Append>
                                                                                                            <Form.Control
                                                                                                                as="div"
                                                                                                                className="py-0"
                                                                                                            >
                                                                                                                <DatePicker
                                                                                                                    selected={ variant.saleStart }
                                                                                                                    onChange={ date => variantItemChange( index, 'saleStart', date ) }
                                                                                                                    maxDate={ variant.saleEnd }
                                                                                                                />
                                                                                                            </Form.Control>
                                                                                                        </InputGroup>
                                                                                                    </Col>
                                                                                                    <Col className="col-6">
                                                                                                        <InputGroup>
                                                                                                            <InputGroup.Prepend><InputGroup.Text>To</InputGroup.Text></InputGroup.Prepend>
                                                                                                            <Form.Control
                                                                                                                as="div"
                                                                                                                className="py-0"
                                                                                                            >
                                                                                                                <DatePicker
                                                                                                                    selected={ variant.saleEnd }
                                                                                                                    onChange={ date => variantItemChange( index, 'saleEnd', date ) }
                                                                                                                    minDate={ variant.saleStart }
                                                                                                                />
                                                                                                            </Form.Control>
                                                                                                        </InputGroup>
                                                                                                    </Col>
                                                                                                </Row>
                                                                                                : ''
                                                                                            }
                                                                                            { variant.manageStock ?
                                                                                                <Row className="mt-3">
                                                                                                    <Col className="col-6">
                                                                                                        <Form.Label className="control-label">Stock Quantity</Form.Label>
                                                                                                        <Form.Control type="number" min="0" className="form-control-modern" />
                                                                                                    </Col>
                                                                                                    <Col className="col-6">
                                                                                                        <Form.Label className="control-label">Allow backorders</Form.Label>
                                                                                                        <Form.Control as="select" className="form-control-modern">
                                                                                                            <option value="no">Do not allow</option>
                                                                                                            <option value="yes">Allow</option>
                                                                                                        </Form.Control>
                                                                                                    </Col>
                                                                                                </Row>
                                                                                                : <Row className="mt-3">
                                                                                                    <Col>
                                                                                                        <Form.Label className="control-label">Stock Status</Form.Label>
                                                                                                        <Form.Control as="select" className="form-control-modern">
                                                                                                            <option value="in-stock">In Stock</option>
                                                                                                            <option value="out-of-stock">Out of Stock</option>
                                                                                                            <option value="on-backorder">On Backorder</option>
                                                                                                        </Form.Control>
                                                                                                    </Col>
                                                                                                </Row>
                                                                                            }
                                                                                            {
                                                                                                variant.virtual ? ''
                                                                                                    : <Row className="mt-3">
                                                                                                        <Col className="col-6 mb-3">
                                                                                                            <Form.Label className="control-label">Weight (kg)</Form.Label>
                                                                                                            <Form.Control type="number" className="form-control-modern" />
                                                                                                        </Col>
                                                                                                        <Col className="col-6 mb-3">
                                                                                                            <Form.Label className="control-label">Dimensions (cm)</Form.Label>
                                                                                                            <Row>
                                                                                                                <Col className="col-4">
                                                                                                                    <Form.Control type="number" className="form-control-modern" placeholder="Length" />
                                                                                                                </Col>
                                                                                                                <Col className="col-4">
                                                                                                                    <Form.Control type="number" className="form-control-modern" placeholder="Width" />
                                                                                                                </Col>
                                                                                                                <Col className="col-4">
                                                                                                                    <Form.Control type="number" className="form-control-modern" placeholder="Height" />
                                                                                                                </Col>
                                                                                                            </Row>
                                                                                                        </Col>
                                                                                                    </Row>
                                                                                            }
                                                                                            <Row className="mt-3">
                                                                                                <Col className="col-12">
                                                                                                    <Form.Label className="control-label">Tax Class</Form.Label>
                                                                                                    <Form.Control as="select" className="form-control-modern">
                                                                                                        <option value="">Same as parent</option>
                                                                                                        {
                                                                                                            taxTypes.map( ( tax, taxIndex ) => (
                                                                                                                <option value={ tax.slug } key={ `variant-${ index }tax-type-${ taxIndex }` }>{ tax.name }</option>
                                                                                                            ) )
                                                                                                        }
                                                                                                    </Form.Control>
                                                                                                </Col>
                                                                                            </Row>
                                                                                            <Row className="mt-3">
                                                                                                <Col className="col-12">
                                                                                                    <Form.Label className="control-label">Description</Form.Label>
                                                                                                    <Form.Control as="textarea" className="form-control-modern" rows="2" />
                                                                                                </Col>
                                                                                            </Row>
                                                                                            { variant.downloadable ?
                                                                                                <Row className="mt-3">
                                                                                                    <Col className="col-12">
                                                                                                        <Form.Label className="control-label">Downloadable files</Form.Label>
                                                                                                        <Table responsive={ true } className="table-downloadable" style={ { minWidth: "600px" } }>
                                                                                                            <thead>
                                                                                                                <tr>
                                                                                                                    <th>Name</th>
                                                                                                                    <th>File URL</th>
                                                                                                                </tr>
                                                                                                            </thead>
                                                                                                            <tbody>
                                                                                                                {
                                                                                                                    variant.files.map( ( file, fileId ) => (
                                                                                                                        <tr key={ `variant-${ index }-file-${ fileId }` }>
                                                                                                                            <td>
                                                                                                                                <Form.Control
                                                                                                                                    type="text"
                                                                                                                                    className="form-control-modern"
                                                                                                                                    value={ file.name }
                                                                                                                                    onChange={ e => variantFileChange( index, fileId, 'name', e.target.value ) }
                                                                                                                                />
                                                                                                                            </td>
                                                                                                                            <td>
                                                                                                                                <InputGroup>
                                                                                                                                    <Form.Control
                                                                                                                                        type="text"
                                                                                                                                        className="form-control-modern"
                                                                                                                                        value={ file.url }
                                                                                                                                        placeholder="file path"
                                                                                                                                        onChange={ e => variantFileChange( index, fileId, 'url', e.target.value ) }
                                                                                                                                    />
                                                                                                                                    <InputGroup.Append>
                                                                                                                                        <Button
                                                                                                                                            type="button"
                                                                                                                                            variant="primary"
                                                                                                                                            onClick={ e => openModal( e, { type: 'variant', id: [ index, fileId ] } ) }
                                                                                                                                        >Choose File</Button>
                                                                                                                                        <Button
                                                                                                                                            type="button"
                                                                                                                                            className="btn-remove"
                                                                                                                                            variant="danger"
                                                                                                                                            onClick={ () => removeVariantFile( index, fileId ) }
                                                                                                                                        ><i className="bx bx-trash text-r mt-1"></i></Button>
                                                                                                                                    </InputGroup.Append>
                                                                                                                                </InputGroup>
                                                                                                                            </td>
                                                                                                                        </tr>
                                                                                                                    ) )
                                                                                                                }
                                                                                                            </tbody>
                                                                                                            <tfoot>
                                                                                                                <tr>
                                                                                                                    <th colSpan="2">
                                                                                                                        <Button
                                                                                                                            href="#addFile"
                                                                                                                            variant="primary"
                                                                                                                            onClick={ e => addVariantFile( e, index ) }
                                                                                                                        >Add file</Button>
                                                                                                                    </th>
                                                                                                                </tr>
                                                                                                            </tfoot>
                                                                                                        </Table>
                                                                                                    </Col>
                                                                                                </Row>
                                                                                                : ''
                                                                                            }
                                                                                        </div>
                                                                                    </div>

                                                                                </div>
                                                                            ) }
                                                                        </SlideToggle>
                                                                    </div>
                                                                ) ) }
                                                            </>
                                                            : <Card.Body className="p-3 border">
                                                                <div className="widget-summary widget-summary-sm">
                                                                    <div className="widget-summary-col widget-summary-col-icon">
                                                                        <div className="summary-icon bg-primary"><i className="fas fa-life-ring"></i></div>
                                                                    </div>
                                                                    <div className="widget-summary-col">
                                                                        <div className="summary">
                                                                            <h4 className="title">Before you can add a variation you need to add some variation attributes on the Attributes tab.</h4>
                                                                        </div>
                                                                        <div className="summary-footer">
                                                                            <a className="text-muted text-uppercase primary-color" href="#docs" target="_blank">(Learn More)</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Card.Body>
                                                    }
                                                </div>
                                            </TabPanel>
                                            : ''
                                        }

                                        <TabPanel className="tab-pane fade">
                                            <Form.Group as={ Row }>
                                                <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0 pt-2 mt-1 mb-0">
                                                    Purchase Note
                                                    <PtToolTip placement="top" trigger="hover" tooltip="Enter an optional note to send the customer after purchase." />
                                                </Col>
                                                <Col lg={ 7 } xl={ 6 }>
                                                    <Form.Control as="textarea" className="form-control-modern" rows="6" />
                                                </Col>
                                            </Form.Group>
                                        </TabPanel>
                                    </Col>
                                </Tabs>
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
                        ><i className="bx bx-save text-4 mr-2"></i>Add Product</Button>
                    </Col>
                    <Col md="auto" className="col-12 px-md-0 mt-3 mt-md-0">
                        <Button
                            as={ Link }
                            to={ `${ process.env.PUBLIC_URL }/products` }
                            className="btn-px-4 py-3 border font-weight-semibold text-color-dark line-height-1 d-flex h-100 align-items-center"
                            variant="light"
                        >Back</Button>
                    </Col>
                </Row>
            </Form>

            {
                openImage !== false && (
                    <LightBox
                        mainSrc={images[openImage].virtual ? images[openImage].copy_link : `${process.env.PUBLIC_URL}/mock-server/images/${images[openImage].copy_link}`}
                        reactModalStyle={{
                            overlay: {
                                zIndex: '9999'
                            }
                        }}
                        onCloseRequest={closeImageLightBox}
                    />
                )
            }
            {
                openPicture !== false && (
                    <LightBox
                        mainSrc={ pictures[ openPicture ].virtual ? pictures[ openPicture ].copy_link : `${ process.env.PUBLIC_URL }/mock-server/images/${ pictures[ openPicture ].copy_link }` }
                        reactModalStyle={ {
                            overlay: {
                                zIndex: '9999'
                            }
                        } }
                        onCloseRequest={ closePictureLightBox }
                    />
                )
            }

            {
                openSmallPicture !== false && (
                    <LightBox
                        mainSrc={ small_pictures[ openSmallPicture ].virtual ? small_pictures[ openSmallPicture ].copy_link : `${ process.env.PUBLIC_URL }/mock-server/images/${ small_pictures[ openSmallPicture ].copy_link }` }
                        reactModalStyle={ {
                            overlay: {
                                zIndex: '9999'
                            }
                        } }
                        onCloseRequest={ closeSmallPictureLightBox }
                    />
                )
            }

            <MediaGalleryModal chooseOne={ onlyOneImage } isOpen={ modalOpen ? true : false } onClose={ chooseMedia } />
        </>
    )
}
