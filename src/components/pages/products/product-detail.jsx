import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Form, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import LightBox from 'react-image-lightbox';
import { SlideToggle } from 'react-slide-toggle';
import { toast } from 'react-toastify';
import Tree from 'rc-tree';
import {v4 as uuidv4} from 'uuid';

import 'rc-tree/assets/index.css';
import 'react-image-lightbox/style.css';
import 'react-datepicker/dist/react-datepicker.css';

import Breadcrumb from '../../common/breadcrumb';
import Loader from '../../features/loader';
import MediaGalleryModal from '../../features/modals/media-gallery-modal';
import PNotify from '../../features/elements/p-notify';
import PtLazyLoad from '../../features/lazyload';
import PtTagsInput from '../../features/elements/tags-input';
import PtToolTip from '../../features/elements/tooltip';

import { getCategories, getTags, getProduct, getProducts, updateProduct } from '../../../api';

import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from "@cloudinary/url-gen";

// Import required actions and qualifiers.
import {thumbnail} from "@cloudinary/url-gen/actions/resize";
import {byRadius} from "@cloudinary/url-gen/actions/roundCorners";
import {focusOn} from "@cloudinary/url-gen/qualifiers/gravity";
import { FocusOn } from "@cloudinary/url-gen/qualifiers/focusOn";

const cld = new Cloudinary({
    cloud: {
      cloudName: 'dhkg3aqid'
    }
});

export default function ProductDetail(props) {
    const inputRef = useRef(null);
    
    const [images, setImages] = useState([]);
    const [openPicture, setOpenPicture] = useState(false);
    const [openSmallPicture, setOpenSmallPicture] = useState(false);
    const [openImage, setOpenImage] = useState(false);
    const [onlyOneImage, SetOnlyOneImage] = useState(false);


    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState(null);
    const [virtual, setVirtual] = useState(false);
    const [downloadable, setDownloadable] = useState(false);
    const [cats, setCats] = useState([]);
    const [defaultImage, setDefault] = useState(1);
    const [files, setFiles] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [customVariants, setCustomVariants] = useState();
    const [categoriesInDatabase, setCategoriesInDatabase] = useState([]);
    const [categoryChecked, setCategoryChecked] = useState([]);
    const [treeInput, setTreeInput] = useState();
    const [variantState, setVariantState] = useState();
    var customVar = [];
    var selectedCategories = [];
    //

    // Product Attributes, Tags, Categories
    const [productTags, setProductTags] = useState([]);
    const [productCats, setProductCats] = useState([]);
    var selectedTags = [];

    ///
    //Three state to store the cloudinary image for thumb
    const [thumbImages, setThumbImages] = useState([]);
    const [thumbPictures, setThumbPictures] = useState([]);
    const [thumbSmall_pictures, setThumbSmall_pictures] = useState([]);

    var largeCloud = [];
    var largePictureWidget = window.cloudinary.createUploadWidget(
        {
            cloudName: "dhkg3aqid",
            uploadPreset: "media_channel",
            folder: "admin/large"
        },
        (error, result) => {
            if (!error && result && result.event === "success") {
                console.log("Done! Here is the image info: ", result.info);
                largeCloud = [...largeCloud, {
                    "url": result.info.public_id,
                    "width": result.info.width,
                    "height": result.info.height
                }]
                console.log("largeCloud", largeCloud);
            }
        }
    );
    var pictureWidget = window.cloudinary.createUploadWidget(
        {
            cloudName: "dhkg3aqid",
            uploadPreset: "media_channel",
            folder: "admin/medium"
        },
        (error, result) => {
            if (!error && result && result.event === "success") {
                console.log("Done! Here is the image info: ", result.info);
            
            }
        }
    );

    var smallPictureWidget = window.cloudinary.createUploadWidget(
        {
            cloudName: "dhkg3aqid",
            uploadPreset: "media_channel",
            folder: "admin/small"
        },
        (error, result) => {
            if (!error && result && result.event === "success") {
                console.log("Done! Here is the image info: ", result.info);
            }
        }
    );

    function getSelectedCategories(keys) { 
        console.log("tymur keys", keys);
        setCategoryChecked(keys);
    }

    useEffect(() => {
        console.log("tymur234234", categoryChecked);
        if (categoryChecked.length > 0) {
            getCategories('productss').then(response => {
                console.log("tymur1", response);
            
                categoryChecked.map((checkedKey) => {
                    selectedCategories = [
                        ...selectedCategories,
                        ...response.filter((row) => row.slug === checkedKey)
                    ];
                });
                setCategoriesInDatabase(selectedCategories);
                setTreeInput({ checked: categoryChecked, halfChecked: [] })
            }
            )
        }
        console.log("tymur3", selectedCategories);
       
    }, [categoryChecked])

    useEffect(() => {
        getCategories('products').then(response => {
            setProductCats(getTreeData(response.data));
        });
        getTags('products').then(response => {
            setProductTags(response.data);
        });
    }, [])

    useEffect(() => {
        setLoading(true);
        getProduct(parseInt(props.match.params.id)).then(response => {
            if (!response || response.parent > 0) {
                props.history.goBack();
            }
            response = response.data.data
            console.log("tymur product detail", response.product);
            setProduct(response.product);
            establishImageData(response.product.large_pictures, 1);
            establishImageData(response.product.pictures, 2);
            establishImageData(response.product.small_pictures, 3);
            if (response.product.categories.length > 0) {
                setCategoryChecked(response.product.categories.map((cat) => {
                    return cat.slug
                }))
                setTreeInput({
                    checked: response.product.categories.map((cat) => {
                        return cat.slug
                    }), halfChecked: []
                });
            }
            setCustomVariants(response.product.variants);
            
            setLoading(false);
            
        })
        console.log("product-detail.jsx", product);
        // 
        // console.log("cats",cats);
    }, [props.match.params.id]);

    useEffect(() => {
        if (product !== null) {
            selectedTags = product.tags
        }
    }, [product])

    function establishImageData(data, kind) {
        let tempThumb = [...data].map((image) => {
            let temp = cld.image(image.url);
            temp.resize(thumbnail().width(150).height(150).gravity(focusOn(FocusOn.face())))  // Crop the image, focusing on the face.
                .roundCorners(byRadius(20));
            return temp;
        });
        if (kind === 1) { setThumbImages([...thumbImages, ...tempThumb]) }
        if (kind === 2) { setThumbPictures([...thumbPictures, ...tempThumb]) }
        if (kind === 3) { setThumbSmall_pictures([...thumbSmall_pictures, ...tempThumb]) }
        
    }

    function genTagSlugs(tags) {
        //console.log("detail/gentagslugs1",tags);
        selectedTags = tags;
        
        console.log("detail/gentagslugs2", selectedTags);
        //productChange('tags', tags);
    }

    function getTreeData(data) {
        let stack = [],
            result = [];
        result = data.reduce((acc, cur) => {
            if (cur.parent === 0) {
                let newNode = {
                    key: cur.slug,
                    title: cur.name,
                    children: []
                };
                acc.push(newNode);
                stack.push({
                    id: cur.id,
                    children: newNode.children
                });
            }
            return acc;
        }, []);

        let temp, children, childNode;
        const addChildren = () => {
            children = data.filter(item => item.parent === temp.id);
            children.forEach(child => {
                childNode = {
                    key: child.slug,
                    title: child.name,
                    children: []
                };
                temp.children.push(childNode);
                stack.push({
                    id: child.id,
                    children: childNode.children
                });
            });
        }

        while (stack.length) {
            temp = stack[stack.length - 1];
            stack.pop();
            addChildren();
        }

        return result;
    }

    function saveProduct(e) {
        e.preventDefault();
        console.log("tymur state", categoriesInDatabase);
        const data = {
            "name": product.name,
            "slug": product.slug,
            "price": product.price,
            "sale_price": product.sale_price,
            "short_description": product.short_description,
            "stock": product.stock,
            "ratings": parseInt(product.ratings),
            "reviews": parseInt(product.reviews),
            "sale_count": parseInt(product.sale_count),
            "is_new": product.is_new,
            "is_hot": product.is_hot,
            "is_out_of_stock": product.is_out_of_stock,
            "rated": product.rated,
            "until": product.until,
            "variants": customVariants,
            "large_pictures": product.large_pictures,
            "pictures": product.pictures,
            "small_pictures": product.small_pictures,
            "categories": categoriesInDatabase,
            "tags": selectedTags
        }
        console.log("tymur final", data)
        updateProduct(parseInt(props.match.params.id), data).then((result) => {
            if (result.data.errors) {
                toast(
                    <PNotify title="Failed" icon="fas fa-check" text={result.data.errors[0].message} />,
                    {
                        containerId: "default",
                        className: "notification-failed"
                    }
                );
            } else {
                toast(
                    <PNotify title="Success" icon="fas fa-check" text="Product saved successfully." />,
                    {
                        containerId: "default",
                        className: "notification-success"
                    }
                );
            }
        }).catch(err => console.log(err));
    }

    function openModal(e, info) {
        e.preventDefault();
        SetOnlyOneImage(info.type == 'file' || info.type == 'variant');
        setModalOpen(info);
    }

    function chooseMedia(selectedMedia) {
        setModalOpen(false);
        if (!selectedMedia.length) return;
        if (modalOpen.type === 'gallery') {
            let tempThumb = [...selectedMedia].map((image) => {
                let temp = cld.image(image.public_id);
                temp.resize(thumbnail().width(150).height(150).gravity(focusOn(FocusOn.face())))  // Crop the image, focusing on the face.
                    .roundCorners(byRadius(20));
                return temp;
            });
            let tempImages = [...selectedMedia].map((image) => {
                return {
                    url: image.public_id,
                    width: parseInt(image.width),
                    height: parseInt(image.height)
                }
            });
            setThumbImages([...thumbImages, ...tempThumb])
            productChange('large_pictures', [...product.large_pictures, ...tempImages]);
        } else if (modalOpen.type === 'gallery_small_pictures') {
            let tempThumb = [...selectedMedia].map((image) => {
                let temp = cld.image(image.public_id);
                temp.resize(thumbnail().width(150).height(150).gravity(focusOn(FocusOn.face())))  // Crop the image, focusing on the face.
                    .roundCorners(byRadius(20));
                return temp;
            });
            let tempSmallPictures = [...selectedMedia].map((image) => {
                return {
                    url: image.public_id,
                    width: parseInt(image.width),
                    height: parseInt(image.height)
                }
            });
            setThumbSmall_pictures([...thumbSmall_pictures, ...tempThumb])
            productChange('small_pictures', [...product.small_pictures, ...tempSmallPictures]);
        } else if (modalOpen.type === 'gallery_pictures') {
            let tempThumb = [...selectedMedia].map((image) => {
                let temp = cld.image(image.public_id);
                temp.resize(thumbnail().width(150).height(150).gravity(focusOn(FocusOn.face())))  // Crop the image, focusing on the face.
                    .roundCorners(byRadius(20));
                return temp;
            });
            let tempPictures = [...selectedMedia].map((image) => {
                return {
                    url: image.public_id,
                    width: parseInt(image.width),
                    height: parseInt(image.height)
                }
            });
            setThumbPictures([...thumbPictures, ...tempThumb])
            productChange('pictures', [...product.pictures, ...tempPictures])
        } else if (modalOpen.type === 'file') {
            let id = modalOpen.id;
            setFiles(files.map((file, index) => {
                if (index === id) {
                    return {
                        name: selectedMedia[0].name,
                        url: selectedMedia[0].copy_link
                    }
                }
                return file;
            }));
        }
    }

    function selectDefaultImage(e, id) {
        e.target.checked && setDefault(id);
    }

    function removeImage(e, index) {
        e.preventDefault();
        productChange('large_pictures', product.large_pictures.filter((large_picture, id) => id !== index))
        setThumbImages(thumbImages.filter((image, id) => id !== index))
    }

    function removePicture(e, index) {
        e.preventDefault();
        productChange('pictures', product.pictures.filter((picture, id) => id !== index))
        setThumbPictures(thumbPictures.filter((image, id) => id !== index))
        console.log("remove pictures", thumbPictures);
    }

    function removeSmallPicture(e, index) {
        e.preventDefault();
        productChange('small_pictures', product.small_pictures.filter((small_picture, id) => id !== index))
        setThumbSmall_pictures(thumbSmall_pictures.filter((image, id) => id !== index))
        console.log("remove smallpictures", thumbSmall_pictures);
    }

    function addTag(e, tag) {
        e.preventDefault();
        inputRef.current.addTag(tag);
    }

    function productChange(key, value) {
        let temp = { ...product };
        temp[key] = value;
        setProduct(temp);
    }

    // These are functions for image change.
    function changeImagesWidth(e, index) {
        let temp = { ...product };
        let tempImages = [...temp.large_pictures];
        tempImages[index].width = parseInt(e.target.value);
        productChange('large_pictures', tempImages);
    }
    function changeImagesHeight(e, index) {
        let temp = { ...product };
        let tempImages = [...temp.large_pictures];
        tempImages[index].height = parseInt(e.target.value);
        productChange('large_pictures', tempImages);
    }
    function changeImagesURL(e, index) {
        let temp = { ...product };
        let tempImages = [...temp.large_pictures];
        tempImages[index].url = parseInt(e.target.value);
        productChange('large_pictures', tempImages);
    }
    function changePicturesWidth(e, index) {
        let temp = { ...product };
        let tempImages = [...temp.pictures];
        tempImages[index].width = parseInt(e.target.value);
        productChange('pictures', tempImages);
    }
    function changePicturesHeight(e, index) {
        let temp = { ...product };
        let tempImages = [...temp.pictures];
        tempImages[index].height = parseInt(e.target.value);
        productChange('pictures', tempImages);
    }
    function changePicturesURL(e, index) {
        let temp = { ...product };
        let tempImages = [...temp.pictures];
        tempImages[index].url = parseInt(e.target.value);
        productChange('pictures', tempImages);
    }
    function changeSmallPicturesWidth(e, index) {
        let temp = { ...product };
        let tempImages = [...temp.small_pictures];
        tempImages[index].width = parseInt(e.target.value);
        productChange('small_pictures', tempImages);
    }
    function changeSmallPicturesHeight(e, index) {
        let temp = { ...product };
        let tempImages = [...temp.small_pictures];
        tempImages[index].heigh = parseInt(e.target.value);
        productChange('small_pictures', tempImages);
    }
    function changeSmallPicturesURL(e, index) {
        let temp = { ...product };
        let tempImages = [...temp.small_pictures];
        tempImages[index].width = parseInt(e.target.value);
        productChange('small_pictures', tempImages);
    }

    //These are the Variant changes.
    function addCustomVariants(e, index) {
        e.preventDefault();
        
        let variants = [
            ...product.variants,
            {
                "price": 0.0,
                "sale_price": 0.0,
                "size": {
                    "name": "Small",
                    "size": "S"
                },
                "color": {
                    "name": "black",
                    "color": "#FFFFFF"
                }
            }
        ];
        productChange('variants', variants);
        setCustomVariants(variants);
    }

    function changeVar(e, index) { 
        customVar = product.variants;
        if (e.target.name === "vprice") { customVar[index]['price'] = parseFloat(e.target.value)}
        if (e.target.name === "vsale_price") { customVar[index].sale_price = parseInt(e.target.value) }
        if (e.target.name === "vsizesize") { customVar[index].size.size = e.target.value }
        if (e.target.name === "vsizename") { customVar[index].size.name = e.target.value }
        if (e.target.name === "vcolorname") { customVar[index].color.name = e.target.value }
        if (e.target.name === "vcolorcolor") { customVar[index].color.color = e.target.value }
        console.log("tymur customvar", customVar);
        setCustomVariants(customVar);
    }
    function changeCustomVariantsPrice(e, index) { 
        const tempArray = [...customVariants]
        tempArray[index].price = parseFloat(e.target.value);
        //setCustomVariants(tempArray);
        //productChange('variants', tempArray);
    }
    function changeCustomVariantsSalePrice(e, index) { 
        const tempArray = [...customVariants]
        tempArray[index].sale_price = parseFloat(e.target.value);
        setCustomVariants(tempArray);
        //productChange('variants', tempArray);
    }
    function changeCustomVariantsSizeName(e, index) { 
        const tempArray = [...customVariants]
        tempArray[index].size.name = e.target.value;
        setCustomVariants(tempArray);
        // productChange('variants', tempArray);
    }
    function changeCustomVariantsSizeSize(e, index) { 
        const tempArray = [...customVariants]
        tempArray[index].size.size = e.target.value;
        setCustomVariants(tempArray);

        // productChange('variants', tempArray);
    }
    function changeCustomVariantsColorName(e, index) { 
        const tempArray = [...customVariants]
        tempArray[index].size.size = e.target.value;
        setCustomVariants(tempArray);
        // productChange('variants', tempArray);
    }
    function changeCustomVariantsColorColor(e, index) { 
        const tempArray = [...customVariants]
        tempArray[index].size.size = e.target.value;
        setCustomVariants(tempArray);
        // productChange('variants', tempArray);
    }
    function removeCustomVariants(index) {
        const newVar = [...product.variants.filter((variant, id) => id !== index)];
        productChange('variants', newVar);
        const temp = [...customVariants.filter((variant, id) => id !== index)];
        setCustomVariants(temp);
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
            <Breadcrumb current="Edit Product" paths={ [ {
                name: "Home",
                url: "/"
            }, {
                name: "Products",
                url: "/products"
            } ] } />

            { loading ? <Loader />
                :
                <Form className="ecommerce-form" action="#" method="post" onSubmit={ saveProduct }>
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
                                            <p>
                                                <a href="#see" target="_blank" onClick={ e => e.preventDefault() }>Click here to see the product</a>
                                            </p>
                                        </Col>
                                        <Col lg="3-5" xl="4-5">
                                            <Row>
                                                <Col xl={9}>
                                                    <Form.Group as={ Row } className="align-items-center">
                                                        <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">Product Name</Col>
                                                        <Col lg={ 7 } xl={ 8 }>
                                                            <Form.Control
                                                                type="text"
                                                                className="form-control-modern"
                                                                name="name"
                                                                required
                                                                value={ product.name }
                                                                onChange={ e => productChange( 'name', e.target.value ) }
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
                                                                value={product.slug}
                                                                onChange={(e) => { productChange('slug', e.target.value) }}
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
                                                                value={product.price}
                                                                onChange={(e) => { productChange('price', e.target.value) }}
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
                                                                value={product.sale_price}
                                                                onChange={(e) => { productChange('sale_price', e.target.value) }}
                                                                required
                                                            />
                                                        </Col>
                                                    </Form.Group>
                                                    <Form.Group as={ Row }>
                                                        <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0 pt-2 mt-1 mb-0">Short Description</Col>
                                                        <Col lg={ 7 } xl={ 8 }>
                                                            <Form.Control as="textarea"
                                                                className="form-control-modern"
                                                                name="short_desc"
                                                                rows="3"
                                                                maxLength="254"
                                                                value={ product.short_description ? product.short_description : '' }
                                                                onChange={ e => productChange( 'short_description', e.target.value ) }
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
                                                                value={product.stock}
                                                                onChange={(e) => { productChange('stock', e.target.value) }}
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
                                                                value={product.ratings}
                                                                onChange={(e) => { productChange('ratings', e.target.value) }}
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
                                                                value={product.reviews}
                                                                onChange={(e) => { productChange('reviews', e.target.value) }}
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
                                                                value={product.sale_count}
                                                                onChange={(e) => { productChange('sale_count', e.target.value) }}
                                                                required
                                                            />
                                                        </Col>
                                                    </Form.Group>
                                                    <Form.Group as={Row} className="align-items-center">
                                                    <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">Additional Info</Col>
                                                    <Col lg={ 7 } xl={ 8 }>
                                                        <OverlayTrigger
                                                            placement="top"
                                                            overlay={ <Tooltip>Description for "Is new"</Tooltip> }
                                                        >
                                                            <label className="checkbox-inline mr-4 mb-0">
                                                                <input
                                                                    type="checkbox"
                                                                    className="checkbox-style-1 mr-2"
                                                                    checked={product.is_new}
                                                                    onChange={(e) => { productChange('is_new', e.target.checked) }}
                                                                />
                                                                Is New
                                                            </label>
                                                        </OverlayTrigger>
                                                        <OverlayTrigger
                                                            placement="top"
                                                            overlay={ <Tooltip>Description for "Is hot"</Tooltip> }
                                                        >
                                                            <label className="checkbox-inline mr-4 mb-0">
                                                                <input
                                                                    type="checkbox"
                                                                    className="checkbox-style-1 mr-2"
                                                                    checked={product.is_hot}
                                                                    onChange={ (e) => { productChange('is_hot', e.target.checked) }}
                                                                />
                                                                    Is hot
                                                                </label>
                                                        </OverlayTrigger>
                                                        <OverlayTrigger
                                                            placement="top"
                                                            overlay={ <Tooltip>Description for "Is out of stock"</Tooltip> }
                                                        >
                                                            <label className="checkbox-inline mr-4 mb-0">
                                                                <input
                                                                    type="checkbox"
                                                                    className="checkbox-style-1 mr-2"
                                                                    checked={ product.is_out_of_stock }
                                                                    onChange={ (e) => { productChange('is_out_of_stock', e.target.checked) }}
                                                                />
                                                                Is out of stock
                                                            </label>
                                                        </OverlayTrigger>
                                                        </Col>
                                                    </Form.Group>
                                                    <Form.Group as={ Row } className="align-items-center">
                                                        <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">Rated</Col>
                                                        <Col lg={ 7 } xl={ 8 }>
                                                            <Form.Control
                                                                type="text"
                                                                className="form-control-modern"
                                                                name="rated"
                                                                value={product.rated}
                                                                onChange={(e) => { productChange('rated', e.target.value) }}
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
                                                                value={product.until}
                                                                onChange={(e) => { productChange('until', e.target.value) }}
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
                                                                checkStrictly={ true }
                                                                showIcon={ false }
                                                                switcherIcon={ ( props ) => {

                                                                    return ( !props.isLeaf ?
                                                                        <i className={ `fa ${ props.expanded ? 'fa-angle-up' : 'fa-angle-down ' }` }></i>
                                                                        : ''
                                                                    )
                                                                } }
                                                                multiple={ true }
                                                                treeData={ productCats }
                                                                checkedKeys={treeInput}
                                                                onCheck={keys => {
                                                                    console.log("tymur", keys);
                                                                    setCats(keys.checked);

                                                                    getSelectedCategories(keys.checked)
                                                                }}
                                                            />
                                                        </Form.Control>
                                                    </Form.Group>
                                                    <Form.Group>
                                                        <Form.Label className="control-label text-lg-right pt-2 mt-1 mb-2">Product Tags</Form.Label>
                                                        
                                                        <PtTagsInput ref={ inputRef } value={ product.tags } addSelectedTags={(tags) => genTagSlugs(tags)}/>
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
                                                    <Button
                                                        href="#openModal"
                                                        className="ml-auto mb-2 mr-3"
                                                        variant="primary"
                                                        onClick={() => { largePictureWidget.open()} }
                                                    >Upload Image</Button>
                                                </Row>
                                                <div className="media-gallery product-media-gallery">
                                                    <Row className="mg-files">
                                                        {
                                                            product.large_pictures.map((image, index) => (
                                                            <Col md={ 4 } lg={ 3 } className="col-6" key={uuidv4()}>
                                                                <div className="thumbnail">
                                                                    <div className="thumb-preview">
                                                                        <div className="centered">
                                                                            <a href="#thumb" className="thumb-image">
                                                                                <AdvancedImage cldImg={thumbImages[index]} />
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
                                                                                    <a href="#delete" className="text-white mg-remove" onClick={ e => removeImage( e, index ) }><i className="far fa-trash-alt d-block"></i></a>
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
                                                    <Button
                                                        href="#openModal"
                                                        className="ml-auto mb-2 mr-3"
                                                        variant="primary"
                                                        onClick={() => { pictureWidget.open()} }
                                                    >Upload Image</Button>
                                                </Row>
                                                <div className="media-gallery product-media-gallery">
                                                    <Row className="mg-files">
                                                        { product.pictures.map( ( pictures, index ) => (
                                                            <Col md={ 4 } lg={ 3 } className="col-6" key={uuidv4()}>
                                                                <div className="thumbnail">
                                                                    <div className="thumb-preview">
                                                                        <div className="centered">
                                                                            <a href="#thumb" className="thumb-image">
                                                                                <AdvancedImage cldImg={thumbPictures[index]} />
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
                                                                                    <a href="#delete" className="text-white mg-remove" onClick={ e => removePicture( e, index ) }><i className="far fa-trash-alt d-block"></i></a>
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
                                                    <Button
                                                        href="#openModal"
                                                        className="ml-auto mb-2 mr-3"
                                                        variant="primary"
                                                        onClick={() => { smallPictureWidget.open()} }
                                                    >Upload Image</Button>
                                                </Row>
                                                <div className="media-gallery product-media-gallery">
                                                    <Row className="mg-files">
                                                        { product.small_pictures.map( ( small_pictures, index ) => (
                                                            <Col md={ 4 } lg={ 3 } className="col-6" key={uuidv4()}>
                                                                <div className="thumbnail">
                                                                    <div className="thumb-preview">
                                                                        <div className="centered">
                                                                            <a href="#thumb" className="thumb-image">
                                                                                <AdvancedImage cldImg={thumbSmall_pictures[index]} /> 
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
                                                                                    <a href="#delete" className="text-white mg-remove" onClick={ e => removeSmallPicture( e, index ) }><i className="far fa-trash-alt d-block"></i></a>
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
                                                product.variants.map((customVariant, index) => (
                                                    <Form.Group as={Row} className="align-items-center" key={ uuidv4()}>
                                                        <Col xl={1} className="mb-3 mb-xl-0">
                                                            <Form.Label className="control-label">Price</Form.Label>
                                                            <Form.Control
                                                                name="vprice"
                                                                as="input"
                                                                className="form-control-modern mb-2"
                                                                defaultValue={customVariant.price}
                                                                // onChange={(e) => changeCustomVariantsPrice(e, index)}
                                                                onChange={ (e) => changeVar(e, index)}
                                                            ></Form.Control>
                                                        </Col>
                                                        <Col xl={1} className="mb-3 mb-xl-0">
                                                            <Form.Label className="control-label">Sale Price</Form.Label>
                                                            <Form.Control
                                                                name="vsale_price"
                                                                as="input"
                                                                className="form-control-modern mb-2"
                                                                defaultValue={customVariant.sale_price}
                                                                // onChange={(e) => changeCustomVariantsSalePrice(e, index)}
                                                                onChange={ (e) => changeVar(e, index)}
                                                            ></Form.Control>
                                                        </Col>
                                                        <Col xl={2} className="mb-3 mb-xl-0">
                                                            <Form.Label className="control-label">Size Name</Form.Label>
                                                            <Form.Control
                                                                name="vsizename"
                                                                as="input"
                                                                className="form-control-modern mb-2"
                                                                defaultValue={customVariant.size.name}
                                                                // onChange={(e) => changeCustomVariantsSizeName(e, index)}
                                                                onChange={ (e) => changeVar(e, index)}
                                                            ></Form.Control>
                                                        </Col>
                                                        <Col xl={2} className="mb-3 mb-xl-0">
                                                            <Form.Label className="control-label">Size</Form.Label>
                                                            <Form.Control
                                                                name="vsizesize"
                                                                as="input"
                                                                className="form-control-modern mb-2"
                                                                defaultValue={customVariant.size.size}
                                                                //  onChange={(e) => changeCustomVariantsSizeSize(e, index)}
                                                                onChange={ (e) => changeVar(e, index)}
                                                            ></Form.Control>
                                                        </Col>
                                                        <Col xl={2} className="mb-3 mb-xl-0">
                                                        <Form.Label className="control-label">Color Name</Form.Label>
                                                            {/* <Form.Control
                                                                name="vcolorname"
                                                            as="input"
                                                            className="form-control-modern mb-2"
                                                            defaultValue={customVariant.color.name}
                                                                // onChange={(e) => changeCustomVariantsColorName(e, index)}
                                                                onChange={ (e) => changeVar(e, index)}
                                                        ></Form.Control> */}
                                                            <Form.Control name ="vcolorname" as="select" className="form-control-modern" onChange={(e) => changeVar(e, index)} defaultValue={customVariant.color.name}>
                                                            <option value="red">red</option>
                                                            <option value="blue">blue</option>
                                                            <option value="green">green</option>
                                                            <option value="light red">light red</option>
                                                            <option value="light blue">light blue</option>
                                                            <option value="light green">light green</option>
                                                            <option value="dark red">dark red</option>
                                                            <option value="dark blue">dark blue</option>
                                                            <option value="dark green">dark green</option>
                                                        </Form.Control>
                                                    </Col>
                                                    <Col xl={2} className="mb-3 mb-xl-0">
                                                        <Form.Label className="control-label">Color</Form.Label>
                                                            <Form.Control
                                                                name="vcolorcolor"
                                                            as="input"
                                                            className="form-control-modern mb-2"
                                                            defaultValue={customVariant.color.color}
                                                                // onChange={(e) => changeCustomVariantsColorColor(e, index)}
                                                                onChange={ (e) => changeVar(e, index)}
                                                        ></Form.Control>
                                                        </Col>                                                        
                                                    <Col xl={2} className="mb-3 mb-xl-0">
                                                        <Button
                                                            type="button"
                                                            className="btn-remove"
                                                            variant="danger"
                                                            onClick={ () => removeCustomVariants(index) }
                                                        ><i className="bx bx-trash text-r mt-1"></i>
                                                        </Button>
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

                    <Row className="action-buttons">
                        <Col md="auto" className="col-12">
                            <Button
                                type="submit"
                                className="btn-px-4 py-3 d-flex align-items-center font-weight-semibold line-height-1"
                                variant="primary"
                            ><i className="bx bx-save text-4 mr-2"></i>Save Product</Button>
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
            }

            {
                openImage !== false && (
                    <LightBox
                        mainSrc={product.large_pictures[openImage].virtual ? product.large_pictures[openImage].copy_link : `${process.env.PUBLIC_URL}/mock-server/images/${product.large_pictures[openImage].copy_link}`}
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
                        mainSrc={ product.pictures[ openPicture ].virtual ? product.pictures[ openPicture ].copy_link : `${ process.env.PUBLIC_URL }/mock-server/images/${ product.pictures[ product.openPicture ].copy_link }` }
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
                        mainSrc={ product.small_pictures[ openSmallPicture ].virtual ? product.small_pictures[ openSmallPicture ].copy_link : `${ process.env.PUBLIC_URL }/mock-server/images/${ product.small_pictures[ openSmallPicture ].copy_link }` }
                        reactModalStyle={ {
                            overlay: {
                                zIndex: '9999'
                            }
                        } }
                        onCloseRequest={ closeSmallPictureLightBox }
                    />
                )
            }

            <MediaGalleryModal galleryType={ modalOpen.type} chooseOne={ onlyOneImage } isOpen={ modalOpen ? true : false } onClose={ chooseMedia } />
        </>
    )
}