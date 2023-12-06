import axios from 'axios';

import { getCategoryTree } from '../utils';

const API_URL = process.env.PUBLIC_URL;

// APIs to get media from mock server
export const getMedia = function ( from = 0, to, filters, sortBy ) {
    return axios.get( API_URL + '/mock-server/media.json' )
        .then( response => {
            let results = response.data;

            filters && filters.forEach( filter => {
                results = results.filter( media => media[ filter.id ].search( new RegExp( filter.value, 'i' ) ) >= 0 );
            } );

            sortBy && sortBy.forEach( sort => {
                let index = sort.desc ? -1 : 1;
                switch ( sort.id ) {
                    case 'name':
                        results = results.sort( ( a, b ) => a.name < b.name ? -index : index );
                        break;
                    case 'uploaded_by':
                        results = results.sort( ( a, b ) => a.uploaded_by < b.uploaded_by ? -index : index );
                        break;
                    case 'size':
                        results = results.sort( ( a, b ) => ( a.size - b.size ) * index );
                        break;
                    case 'created_at':
                        results = results.sort( ( a, b ) => ( new Date( a.created_at ) - new Date( b.created_at ) ) * index );
                        break;
                    default:
                        break;
                }
            } );

            return {
                data: results.slice( from, to ),
                total: results.length
            }
        } )
        .catch( error => console.error( error ) );
}
 
export const getCloudImages = function (folder) { 
    console.log("gallery Type1", folder);
    var directory=folder;
    if (folder === "gallery") { 
        directory = "large";
    } else if (folder === "gallery_small_picutres") { 
        directory = "small";
    } else if (folder === "gallery_picutres") { 
        directory = "medium";
    }

    console.log("gallery Type", directory);
    const gpldata = {
        query: `query($folder:String) { cloudImages(folder: $folder) {
            public_id
            width
            height
        }}`,
        variables: {
            "folder": directory
        }
    }
    const config = {
        "headers": {
            "Content-Type":"application/json"
        }
    }
    return axios.post( "http://localhost:4000/graphql", gpldata, config)
        .then(response => {
            console.log("new", response)
            return response;
        } )
        .catch( error => console.error( error ) );
}

export const getSingleMedia = function ( id ) {
    return axios.get( API_URL + '/mock-server/media.json' )
        .then( response => {
            return response.data.find( media => media.id === id );
        } )
        .catch( error => console.error( error ) );
}

// APIs to get tags from mock-server
export const getTags = function (type, from = 0, to, filters, sortBy) {
    const gpldata = {
    query: `query getTags { tags {
            id
            name
            slug
            description
            type
        }}`
    }
    const config = {
        "headers": {
            "Content-Type":"application/json"
        }
    }
    return axios.post( "http://localhost:4000/graphql", gpldata, config)
        .then(response => {
            let results = response.data.data.tags.filter( tag => tag.type + 's' === type );

            filters && filters.forEach( filter => {
                results = results.filter( tag => tag[ filter.id ].search( new RegExp( filter.value, 'i' ) ) >= 0 );
            } );

            sortBy && sortBy.forEach( sort => {
                let index = sort.desc ? -1 : 1;
                switch ( sort.id ) {
                    case 'name':
                        results = results.sort( ( a, b ) => a.name < b.name ? -index : index );
                        break;
                    case 'slug':
                        results = results.sort( ( a, b ) => a.slug < b.slug ? -index : index );
                        break;
                    case 'description':
                        results = results.sort( ( a, b ) => a.description < b.description ? -index : index );
                        break;
                    case 'count':
                        results = results.sort( ( a, b ) => ( a.count - b.count ) * index );
                        break;
                    default:
                        break;
                }
            } );

            return {
                data: results.slice( from, to ),
                total: results.length
            }
        } )
        .catch( error => console.error( error ) );
}

export const getTag = function (id) {
    const gpldata = {
        query: `query getTag($tagID: ID) { tag(id: $tagID) {
                id
                name
                slug
                description
                type
            }}`,
        variables: {
            "tagID": id
        }
    }
    const config = {
        "headers": {
            "Content-Type":"application/json"
        }
    }
    return axios.post( "http://localhost:4000/graphql", gpldata, config )
        .then(response => {
            return response;
            //return response.data.find( tag => tag.id === id );
        } )
        .catch( error => console.error( error ) );
}

export const updateTag = function (id, tag) {
    const gpldata = {
        query: `mutation updateTag($tagID: ID, $tagData: TagInput!) { updateTag(id: $tagID, input: $tagData) {
                id
                name
                slug
                description
                type
            }}`,
        variables: {
            "tagID": id,
            "tagData": tag
        }
    }
    const config = {
        "headers": {
            "Content-Type":"application/json"
        }
    }
    return axios.post( "http://localhost:4000/graphql", gpldata, config )
        .then(response => {
            return response;
            //return response.data.find( tag => tag.id === id );
        } )
        .catch( error => console.error( error ) );
}

export const createTag = function (tag) {
    const gpldata = {
        query: `mutation createTag($tagData: TagInput!) { createTag(input: $tagData) {
                id
                name
                slug
                description
                type
                created_at
                updated_at
                count
            }}`,
        variables: {
            "tagData": tag
        }
    }
    const config = {
        "headers": {
            "Content-Type":"application/json"
        }
    }
    return axios.post( "http://localhost:4000/graphql", gpldata, config )
        .then(response => {
            return response;
        } )
        .catch( error => console.error( error ) );
}

export const deleteTag = function (id) { 
    const gpldata = {
        query: `mutation deleteTag($id: ID) { deleteTag(id: $id) {
                name
        }}`,
        variables: {
            id: parseInt(id),
        }
    }
    const config = {
        "headers": {
            "Content-Type":"application/json"
        }
    }
    return axios.post( "http://localhost:4000/graphql", gpldata, config )
        .then(response => {
            return response;
        } )
        .catch( error => console.error( error ) );
}

// APIs to get categories from mock server
export const getCategories = function (type, from = 0, to, filters, sortBy) {
    console.log("getCategories");
    const gpldata = {
        query: `query getCategories { categories {
                id
                name
                slug
                description
                type
                parent
                media_id
                count
                media {
                    public_id
                    width
                    height
                }
        }}`
    }
    const config = {
        "headers": {
            "Content-Type":"application/json"
        }
    }
    return axios.post( "http://localhost:4000/graphql", gpldata, config  )
        .then(response => {
            if (type === "productss") {
                let rlt = response.data.data.categories.filter(cat => cat.type === 'product');
                console.log("rlt", rlt);
                return rlt;
            } else {
                let results = response.data.data.categories.filter(cat => cat.type + 's' === type);
                console.log("before tree", results);
                results = getCategoryTree(results);
                console.log("after tree", results);
                let tree = results;

                filters && filters.forEach(filter => {
                    results = results.filter(cat => cat[filter.id].search(new RegExp(filter.value, 'i')) >= 0);
                });

                sortBy && sortBy.forEach(sort => {
                    let index = sort.desc ? -1 : 1;
                    switch (sort.id) {
                        case 'name':
                            results = results.sort((a, b) => a.name < b.name ? -index : index);
                            break;
                        case 'slug':
                            results = results.sort((a, b) => a.slug < b.slug ? -index : index);
                            break;
                        case 'description':
                            results = results.sort((a, b) => a.description < b.description ? -index : index);
                            break;
                        case 'count':
                            results = results.sort((a, b) => (a.count - b.count) * index);
                            break;
                        default:
                            break;
                    }
                });
            
                console.log("server", results.slice(from, to));
                return {
                    data: results.slice(from, to),
                    total: results.length,
                    tree
                }
            }
        } )
        .catch( error => console.error( error ) );
}

export const getCategory = function (id) {
    const gpldata = {
        query: `query getCategory { category {
                id
                name
                slug
                description
                type
                parent
                media_id
                count
                media {
                    public_id
                    width
                    height 
                }
        }}`
    }
    const config = {
        "headers": {
            "Content-Type":"application/json"
        }
    }
    return axios.post( "http://localhost:4000/graphql", gpldata, config )
        .then(response => {
            let cat = response.data.data.category.find(cat => cat.id === id);
            let results = response.data.data.category.filter( category => category.type === cat.type );
            results = getCategoryTree( results, cat.id );

            return {
                data: cat,
                tree: results
            };
        } )
        .catch( error => console.error( error ) );
}

export const updateCategory = function (id, cat) { 
    const gpldata = {
        query: `mutation updateCategory($id: ID, $cat: CategoryInput!) { updateCategory(id: $id, input: $cat) {
                id
                name
                slug
                description
                type
                parent
                media_id
                count
                media {
                    public_id
                    width
                    height
                }
        }}`,
        variables: {
            id: parseInt(id),
            cat: cat
        }
    }
    const config = {
        "headers": {
            "Content-Type":"application/json"
        }
    }
    return axios.post( "http://localhost:4000/graphql", gpldata, config )
        .then(response => {
            return response;
        } )
        .catch( error => console.error( error ) );
}

export const createCategory = function (cat) { 
    const gpldata = {
        query: `mutation createCategory($cat: CategoryInput!) { createCategory(input: $cat) {
                id
                name
                slug
                description
                type
                parent
                media_id
                count
                media {
                    public_id
                    width
                    height
                }
        }}`,
        variables: {
            cat: cat
        }
    }
    const config = {
        "headers": {
            "Content-Type":"application/json"
        }
    }
    return axios.post( "http://localhost:4000/graphql", gpldata, config )
        .then(response => {
            return response;
        } )
        .catch( error => console.error( error ) );
}

export const removeCategory = function (id) { 
    const gpldata = {
        query: `mutation deleteCategory($id: ID) { deleteCategory(id: $id) {
                name
        }}`,
        variables: {
            "id": id
        }
    }
    const config = {
        "headers": {
            "Content-Type":"application/json"
        }
    }
    return axios.post( "http://localhost:4000/graphql", gpldata, config )
        .then(response => {
            return response;
        } )
        .catch( error => console.error( error ) );
}

export const getCategoriesTree = function (type) {
    const gpldata = {
        query: `query getCategories { categories {
                id
                name
                type
                parent
        }}`
    }
    const config = {
        "headers": {
            "Content-Type":"application/json"
        }
    }
    return axios.post( "http://localhost:4000/graphql", gpldata, config )
        .then(response => {
            let results = response.data.data.categories.filter( cat => cat.type + 's' === type );
            return getCategoryTree(results);
        } )
        .catch( error => console.error( error ) );
}

// APIs to get attributes from mock server
export const getAttributes = function ( from = 0, to ) {
    return axios.get( API_URL + '/mock-server/attrs.json' )
        .then( response => {
            let results = response.data;

            return {
                data: results.slice( from, to ),
                total: results.length
            }
        } )
        .catch( error => console.error( error ) );
}

export const getAttribute = function ( id ) {
    return axios.get( API_URL + '/mock-server/attrs.json' )
        .then( response => {
            return response.data.find( attr => attr.id === id );
        } )
        .catch( error => console.error( error ) );
}

export const getAttributeTerms = function ( attrId, from = 0, to, filters, sortBy ) {
    return axios.get( API_URL + '/mock-server/attrs.json' )
        .then( response => {
            let results = response.data.find( attr => attr.id === attrId ).terms;

            filters && filters.forEach( filter => {
                results = results.filter( term => term[ filter.id ].search( new RegExp( filter.value, 'i' ) ) >= 0 );
            } );

            sortBy && sortBy.forEach( sort => {
                let index = sort.desc ? -1 : 1;
                switch ( sort.id ) {
                    case 'name':
                        results = results.sort( ( a, b ) => a.name < b.name ? -index : index );
                        break;
                    case 'slug':
                        results = results.sort( ( a, b ) => a.slug < b.slug ? -index : index );
                        break;
                    case 'description':
                        results = results.sort( ( a, b ) => a.description < b.description ? -index : index );
                        break;
                    case 'count':
                        results = results.sort( ( a, b ) => a.count - b.count );
                        break;
                    default:
                        break;
                }
            } );

            return {
                data: results.slice( from, to ),
                total: results.length
            }
        } )
        .catch( error => console.error( error ) );
}

export const getAttributeTerm = function ( attrId, id ) {
    return axios.get( API_URL + '/mock-server/attrs.json' )
        .then( response => {
            return response.data.find( attr => attr.id === attrId ).terms.find( term => term.id === id );
        } )
        .catch( error => console.error( error ) );
}

// APIs to get products
export const getProducts = function ( from = 0, to, filters, sortBy, withVariants = false ) {
    const data = {
        query: `query getAllProducts { products {
                id
                name
                slug
                price
                sale_price
                short_description
                stock
                ratings
                reviews
                sale_count
                is_new
                is_hot
                is_out_of_stock
                rated
                until
                variants {
                    price
                    sale_price
                    size {
                        name
                        size
                    }
                    color {
                        name
                        color
                    }
                }
                large_pictures {
                    url
                    width
                    height
                }
                pictures {
                    url
                    width
                    height
                }
                small_pictures {
                    url
                    width
                    height
                },
                categories {
                    name
                },
                tags {
                    name
                }
        }}`
    }
    const config = {
        "headers": {
            "Content-Type":"application/json"
        }
    }
    return axios.post( "http://localhost:4000/graphql", data, config )
        .then(response => {
            console.log("products", response);
            let results = response.data.data.products;
            if ( withVariants ) {
                results = results.reduce( ( acc, cur ) => {
                    acc.push( cur );
                    if ( cur.variants ) {
                        acc = [
                            ...acc,
                            ...cur.variants
                        ];
                    }
                    return acc;
                }, [] );
            }

            filters && filters.forEach( filter => {
                results = results.filter( product => {
                    if ( filter.id === 'categories' )
                        return product.categories && product.categories.find( cat => cat.slug === filter.value );
                    else if ( filter.id === 'stock_status' ) {
                        if ( !product.manage_stock ) return false;
                        if ( filter.value === 'most' )
                            return product.stock_quantity > 2;
                        else if ( filter.value === 'low' )
                            return product.stock_quantity > 0 && product.stock_quantity <= 2
                        return product.stock_quantity <= 1;
                    } else if ( filter.id !== 'name' )
                        return product[ filter.id ] === filter.value;
                    return product[ filter.id ].search( new RegExp( filter.value, 'i' ) ) >= 0;
                } )
            } );

            sortBy && sortBy.forEach( sort => {
                let index = sort.desc ? -1 : 1;
                switch ( sort.id ) {
                    case 'name':
                        results = results.sort( ( a, b ) => a.name < b.name ? -index : index );
                        break;
                    case 'sku':
                        results = results.sort( ( a, b ) => a.sku < b.sku ? -index : index );
                        break;
                    case 'stock':
                        results = results.sort( ( a, b ) => a.stock_status < b.stock_status ? -index : index );
                        break;
                    case 'stock_quantity':
                        results = results.sort( ( a, b ) => ( a.stock_quantity - b.stock_quantity ) * index );
                        break;
                    case 'created_at':
                        results = results.sort( ( a, b ) => ( new Date( a.created_at ) - new Date( b.created_at ) ) * index );
                        break;
                    default:
                        break;
                }
            } );

            return {
                data: results.slice( from, to ),
                total: results.length
            }
        } )
        .catch( error => console.error( error ) );
}

// APIs to update Products
export const updateProduct = function (id, data) {
    const sendingBody = {
        query: `mutation updateProduct($productID: ID, $input: ProductInput!) {
            updateProduct(id: $productID, input: $input) {
                id
                name
                slug
                price
                sale_price
                short_description
                stock
                ratings
                reviews
                sale_count
                is_new
                is_hot
                is_out_of_stock
                rated
                until
                variants {
                    price
                    sale_price
                    size {
                        name
                        size
                    }
                    color {
                        name
                        color
                    }
                }
                large_pictures {
                    url
                    width
                    height
                }
                pictures {
                    url
                    width
                    height
                }
                small_pictures {
                    url
                    width
                    height
                }
                categories {
                    id
                    name
                    slug
                    description
                    type
                    parent
                    media_id
                    count
                    media {
                        public_id
                        width
                        height
                    }
                }
                tags {
                    id
                    name
                    slug
                    description
                    type
                    created_at
                    updated_at
                    count
                }
            }
        }`,
        variables: {
            "productID": id,
            "input": data
        }
    };
    const config = {
        "headers": {
            "Content-Type":"application/json"
        }
    }
    return axios.post("http://localhost:4000/graphql", sendingBody, config).then(
        (response) => {
            return response;
        }
    ).catch((error) => console.error(error));
}

// APIS to add Products
export const createProduct = function (data) { 
    const sendingBody = {
        query: `mutation createProduct($input: ProductInput!) {
            createProduct(input: $input) {
                id
                name
                slug
                price
                sale_price
                short_description
                stock
                ratings
                reviews
                sale_count
                is_new
                is_hot
                is_out_of_stock
                rated
                until
                variants {
                    price
                    sale_price
                    size {
                        name
                        size
                    }
                    color {
                        name
                        color
                    }
                }
                large_pictures {
                    url
                    width
                    height
                }
                pictures {
                    url
                    width
                    height
                }
                small_pictures {
                    url
                    width
                    height
                }
                categories {
                    id
                    name
                    slug
                    description
                    type
                    parent
                    media_id
                    count
                    media {
                        public_id
                        width
                        height
                    }
                }
                tags {
                    id
                    name
                    slug
                    description
                    type
                    created_at
                    updated_at
                    count
                }
            }
        }`,
        variables: {
            "input": data 
        }
    };
    const config = {
        "headers": {
            "Content-Type":"application/json"
        }
    }
    console.log("createProduct index.jsx", sendingBody);
    return axios.post("http://localhost:4000/graphql", sendingBody, config).then(
        (response) => {
            return response;
        }
    ).catch((error) => console.error(error));
}

export const getProduct = function (id) {
    //axios.post( "http://localhost:4000/graphql", data, config )
    //return axios.get( API_URL + '/mock-server/products.json' )
    const sendingBody = {
        query: `query Product($productID: ID) {
            product(id: $productID) {
                id
                name
                slug
                price
                sale_price
                short_description
                stock
                ratings
                reviews
                sale_count
                is_new
                is_hot
                is_out_of_stock
                rated
                until
                variants {
                    price
                    sale_price
                    size {
                        name
                        size
                    }
                    color {
                        name
                        color
                    }
                }
                large_pictures {
                    url
                    width
                    height
                }
                pictures {
                    url
                    width
                    height
                }
                small_pictures {
                    url
                    width
                    height
                }
                categories {
                    id
                    name
                    slug
                    description
                    type
                    parent
                    media_id
                    count
                    media {
                        public_id
                        width
                        height
                    }
                }
                tags {
                    id
                    name
                    slug
                    description
                    type
                    created_at
                    updated_at
                    count
                }
            }
        }`,
        variables: {
            "productID": id
        }
    };
    return axios.post("http://localhost:4000/graphql", sendingBody)
        .then(response => {
            return response;
        } )
        .catch(error => {
            console.error(error);
        } );
}

// APIs to get Tax Types
export const getTaxTypes = function ( from = 0, to, filters, sortBy ) {
    return axios.get( API_URL + '/mock-server/taxes.json' )
        .then( response => {
            let results = response.data;

            filters && filters.forEach( filter => {
                let pattern = new RegExp( filter.value, 'i' );
                results = results.filter( tax => {
                    if ( filter.id === '*' )
                        return tax.name.search( pattern ) >= 0 || tax.description.search( pattern ) >= 0;
                    return tax[ filter.id ].search( pattern ) >= 0;
                } );
            } );

            sortBy && sortBy.forEach( sort => {
                let index = sort.desc ? -1 : 1;
                switch ( sort.id ) {
                    case 'name':
                        results = results.sort( ( a, b ) => a.name < b.name ? -index : index );
                        break;
                    case 'description':
                        results = results.sort( ( a, b ) => a.description < b.description ? -index : index );
                        break;
                    default:
                        break;
                }
            } );

            return {
                data: results.slice( from, to ),
                total: results.length
            }
        } )
        .catch( error => console.error( error ) );
}

export const getTaxType = function ( id ) {
    return axios.get( API_URL + '/mock-server/taxes.json' )
        .then( response => {
            return response.data.find( tax => tax.id === id );
        } )
        .catch( error => console.error( error ) );
}

// APIs to get posts
export const getPosts = function ( from = 0, to, filters, sortBy ) {
    return axios.get( API_URL + '/mock-server/posts.json' )
        .then( response => {
            let results = response.data;

            filters && filters.forEach( filter => {
                results = results.filter( product => {
                    if ( filter.id === 'categories' )
                        return product.categories && product.categories.find( cat => cat.slug === filter.value );
                    else if ( filter.id === 'period' )
                        return product[ filter.id ] === filter.value;
                    return product[ filter.id ].search( new RegExp( filter.value, 'i' ) ) >= 0;
                } )
            } );

            sortBy && sortBy.forEach( sort => {
                let index = sort.desc ? -1 : 1;
                switch ( sort.id ) {
                    case 'title':
                        results = results.sort( ( a, b ) => a.name < b.name ? -index : index );
                        break;
                    case 'comments_count':
                        results = results.sort( ( a, b ) => ( a.comments_count - b.comments_count ) * index );
                        break;
                    case 'created_at':
                        results = results.sort( ( a, b ) => ( new Date( a.created_at ) - new Date( b.created_at ) ) * index );
                        break;
                    default:
                        break;
                }
            } );

            return {
                data: results.slice( from, to ),
                total: results.length
            }
        } )
        .catch( error => console.error( error ) );
}

export const getPost = function ( id ) {
    return axios.get( API_URL + '/mock-server/posts.json' )
        .then( response => {
            return response.data.find( post => post.id === id );
        } )
        .catch( error => console.error( error ) );
}

export const getPostPeriods = function () {
    return axios.get( API_URL + '/mock-server/posts.json' )
        .then( response => {
            return response.data.reduce( ( acc, cur ) => {
                if ( !acc.includes( cur.period ) ) {
                    acc.push( cur.period );
                }
                return acc;
            }, [] );
        } )
        .catch( error => console.error( error ) );
}

// APIs to get users
export const getUsers = function ( from = 0, to, filters, sortBy ) {
    return axios.get( API_URL + '/mock-server/users.json' )
        .then( response => {
            let results = response.data;

            filters && filters.forEach( filter => {
                results = results.filter( product => {
                    if ( filter.id !== 'name' )
                        return product[ filter.id ] === filter.value;
                    return ( product.first_name + ' ' + product.last_name ).search( new RegExp( filter.value, 'i' ) ) >= 0 || product[ 'email' ].search( new RegExp( filter.value, 'i' ) ) >= 0;
                } )
            } );

            sortBy && sortBy.forEach( sort => {
                let index = sort.desc ? -1 : 1;
                switch ( sort.id ) {
                    case 'name':
                        results = results.sort( ( a, b ) => a.first_name < b.first_name ? -index : index );
                        break;
                    case 'email':
                        results = results.sort( ( a, b ) => a.email < b.email ? -index : index );
                        break;
                    case 'posts_count':
                        results = results.sort( ( a, b ) => ( a.posts_count - b.posts_count ) * index );
                        break;
                    default:
                        break;
                }
            } );

            return {
                data: results.slice( from, to ),
                total: results.length
            }
        } )
        .catch( error => console.error( error ) );
}

export const getUser = function ( id ) {
    return axios.get( API_URL + '/mock-server/users.json' )
        .then( response => {
            return response.data.find( user => user.id === id );
        } );
}

// APIs to get product reviews
export const getReviews = function ( from = 0, to, filters, sortBy ) {
    return axios.get( API_URL + '/mock-server/reviews.json' )
        .then( response => {
            let results = response.data;

            filters && filters.forEach( filter => {
                results = results.filter( review => {
                    if ( filter.id === 'author' )
                        return review[ 'author_name' ] === filter.value;
                    return review[ filter.id ].search( new RegExp( filter.value, 'i' ) ) >= 0;
                } )
            } );

            sortBy && sortBy.forEach( sort => {
                let index = sort.desc ? -1 : 1;
                switch ( sort.id ) {
                    case 'author':
                        results = results.sort( ( a, b ) => a.author_name < b.author_name ? -index : index );
                        break;
                    case 'product':
                        results = results.sort( ( a, b ) => a.product_name < b.product_name ? -index : index );
                        break;
                    case 'rating':
                        results = results.sort( ( a, b ) => ( a.rating - b.rating ) * index );
                        break;
                    case 'created_at':
                        results = results.sort( ( a, b ) => ( new Date( a.created_at ) - new Date( b.created_at ) ) * index );
                        break;
                    default:
                        break;
                }
            } );

            return {
                data: results.slice( from, to ),
                total: results.length
            }
        } )
        .catch( error => console.error( error ) );
}

export const getReview = function ( id ) {
    return axios.get( API_URL + '/mock-server/reviews.json' )
        .then( response => {
            return response.data.find( review => review.id === id );
        } );
}

// APIs to get post replies
export const getReplies = function ( from = 0, to, filters, sortBy ) {
    return axios.get( API_URL + '/mock-server/replies.json' )
        .then( response => {
            let results = response.data;

            filters && filters.forEach( filter => {
                results = results.filter( review => {
                    return review[ filter.id ].search( new RegExp( filter.value, 'i' ) ) >= 0;
                } )
            } );

            sortBy && sortBy.forEach( sort => {
                let index = sort.desc ? -1 : 1;
                switch ( sort.id ) {
                    case 'author':
                        results = results.sort( ( a, b ) => a.author_name < b.author_name ? -index : index );
                        break;
                    case 'post':
                        results = results.sort( ( a, b ) => a.post.title < b.post.title ? -index : index );
                        break;
                    case 'created_at':
                        results = results.sort( ( a, b ) => ( new Date( a.created_at ) - new Date( b.created_at ) ) * index );
                        break;
                    default:
                        break;
                }
            } );

            return {
                data: results.slice( from, to ),
                total: results.length
            }
        } )
        .catch( error => console.error( error ) );
}

export const getReply = function ( id ) {
    return axios.get( API_URL + '/mock-server/replies.json' )
        .then( response => {
            return response.data.find( review => review.id === id );
        } );
}

// APIs to get coupons
export const getCoupons = function ( from = 0, to, filters, sortBy ) {
    return axios.get( API_URL + '/mock-server/coupons.json' )
        .then( response => {
            let results = response.data;

            filters && filters.forEach( filter => {
                results = results.filter( coupon => {
                    if ( filter.id === 'type' )
                        return coupon[ filter.id ] === filter.value;
                    return coupon[ filter.id ].search( new RegExp( filter.value, 'i' ) ) >= 0;
                } )
            } );

            sortBy && sortBy.forEach( sort => {
                let index = sort.desc ? -1 : 1;
                switch ( sort.id ) {
                    case 'created_at':
                        results = results.sort( ( a, b ) => ( new Date( a.created_at ) - new Date( b.created_at ) ) * index );
                        break;
                    default:
                        break;
                }
            } );

            return {
                data: results.slice( from, to ),
                total: results.length
            }
        } )
        .catch( error => console.error( error ) );
}

export const getCoupon = function ( id ) {
    return axios.get( API_URL + '/mock-server/coupons.json' )
        .then( response => {
            return response.data.find( coupon => coupon.id === id );
        } );
}

// APIs to get zone
export const getZones = function ( from = 0, to, filters, sortBy ) {
    return axios.get( API_URL + '/mock-server/zones.json' )
        .then( response => {
            let results = response.data;

            filters && filters.forEach( filter => {
                results = results.filter( zone => {
                    let search = new RegExp( filter.value, 'i' );
                    if ( filter.id === '*' )
                        return zone.name.search( search ) >= 0 ||
                            zone.shipping_zone_methods.find( method => method.name.search( search ) >= 0 ) ||
                            zone.shipping_locations.find( location => location.name.search( search ) >= 0 );
                    else if ( filter.id === 'methods' )
                        return zone.shipping_zone_methods.find( method => method.name.search( search ) >= 0 );
                    else if ( filter.id === 'regions' )
                        return zone.shipping_locations.find( location => location.name.search( search ) >= 0 );
                    return zone[ filter.id ].search( search ) >= 0;
                } )
            } );

            sortBy && sortBy.forEach( sort => {
                let index = sort.desc ? -1 : 1;
                switch ( sort.id ) {
                    case 'name':
                        results = results.sort( ( a, b ) => ( a.name < b.name ? -index : index ) );
                        break;
                    default:
                        break;
                }
            } );

            return {
                data: results.slice( from, to ),
                total: results.length
            }
        } )
        .catch( error => console.error( error ) );
}

export const getZone = function ( id ) {
    return axios.get( API_URL + '/mock-server/zones.json' )
        .then( response => {
            return response.data.find( zone => zone.id === id );
        } );
}

// APIs to get customers
export const getCustomers = ( from = 0, to, filters, sortBy ) => {
    return axios.get( API_URL + '/mock-server/users.json' )
        .then( response => {
            let results = response.data.filter( user => user.role_id === 2 ).map( customer => {
                let ordersInfo = customer.orders.reduce( ( acc, cur ) => {
                    if ( cur.parent === 0 ) {
                        acc.count++;
                        acc.total += cur.order_total_price * 1.0 + cur.order_refunded_price * 1.0;
                    }
                    return acc;
                }, { count: 0, total: 0 } );

                return {
                    id: customer.id,
                    name: customer.first_name + ' ' + customer.last_name,
                    email: customer.email,
                    last_active: customer.last_active,
                    sign_up: customer.sign_up,
                    orders: ordersInfo.count,
                    total_spend: ordersInfo.total,
                    aov: ordersInfo.count ? ordersInfo.total / ordersInfo.count : 0,
                    country: customer.billing_country,
                    city: customer.billing_city,
                    state: customer.billing_state,
                    postcode: customer.billing_postcode
                };
            } );

            filters && filters.forEach( filter => {
                results = results.filter( customer => customer[ filter.id ].search( new RegExp( filter.value, 'i' ) ) >= 0 );
            } );

            sortBy && sortBy.forEach( sort => {
                let index = sort.desc ? -1 : 1;
                switch ( sort.id ) {
                    case 'name':
                        results = results.sort( ( a, b ) => ( a.name < b.name ? -index : index ) );
                        break;
                    case 'last_active':
                        results = results.sort( ( a, b ) => ( new Date( a.last_active ) - new Date( b.last_active ) ) * index );
                        break;
                    case 'sign_up':
                        results = results.sort( ( a, b ) => ( new Date( a.sign_up ) - new Date( b.sign_up ) ) * index );
                        break;
                    case 'orders':
                        results = results.sort( ( a, b ) => ( a.orders - b.orders ) * index );
                        break;
                    case 'total_spend':
                        results = results.sort( ( a, b ) => ( a.total_spend - b.total_spend ) * index );
                        break;
                    case 'aov':
                        results = results.sort( ( a, b ) => ( a.aov - b.aov ) * index );
                        break;
                    default:
                        break;
                }
            } );

            return {
                data: results.slice( from, to ),
                total: results.length
            }
        } )
        .catch( error => console.error( error ) );
}

// APIs to get orders
export const getOrders = ( from = 0, to, filters, sortBy ) => {
    return axios.get( API_URL + '/mock-server/orders.json' )
        .then( response => {
            let results = response.data;
            let periods = results.map( order => order.period );

            filters && filters.forEach( filter => {
                results = results.filter( order => {
                    if ( filter.id !== 'id' ) {
                        return order[ filter.id ] === filter.value;
                    }
                    return ( order.id.toString() ).search( new RegExp( filter.value, 'i' ) ) >= 0;
                } );
            } )

            sortBy && sortBy.forEach( sort => {
                let index = sort.desc ? -1 : 1;
                switch ( sort.id ) {
                    case 'id':
                        results = results.sort( ( a, b ) => ( a.id - b.id ) * index );
                        break;
                    case 'created_at':
                        results = results.sort( ( a, b ) => ( new Date( a.created_at ) - new Date( b.created_at ) ) * index );
                        break;
                    case 'total':
                        results = results.sort( ( a, b ) => ( ( parseFloat( a.order_total_price ) + parseFloat( a.order_refunded_price ) ) - ( parseFloat( b.order_refunded_price ) + parseFloat( b.order_refunded_price ) ) ) * index );
                        break;
                    default:
                        break;
                };
            } )

            return {
                data: results.slice( from, to ),
                total: results.length,
                periods
            };
        } )
        .catch( error => console.error( error ) );
}

export const getOrder = ( id ) => {
    return axios.get( API_URL + '/mock-server/orders.json' )
        .then( response => {
            return response.data.find( order => order.id === id );
        } )
}

// 
export const getWithdraws = ( from = 0, to, filters ) => {
    return axios.get( API_URL + '/mock-server/withdraws.json' )
        .then( response => {
            let results = response.data;

            filters && filters.forEach( filter => {
                results = results.filter( withdraw => {
                    return withdraw[ filter.id ] === filter.value;
                } );
            } );

            return {
                data: results.slice( from, to ),
                total: results.length
            };
        } )
        .catch( error => console.error( error ) );
}

// Apply coupons
export const applyCoupons = ( items, codes, newCode ) => {
    return axios.get( API_URL + '/mock-server/coupons.json' )
        .then( response => {
            if ( !newCode || response.data.find( coupon => coupon.code === newCode ) ) {
                newCode && codes.push( newCode );
                let coupons = response.data.filter( coupon => codes.includes( coupon.code ) );
                let totalCounts = items.reduce( ( acc, cur ) => { return acc + cur.qty }, 0 );
                items = items.map( item => {
                    item.discount = 0;
                    return item;
                } );
                coupons = coupons.map( coupon => {
                    let discount = 0;
                    let tax = 0;
                    for ( let i = 0; i < items.length; i++ ) {
                        let discountAmount = 0;
                        let taxAmount = 0;
                        let taxRate = items[ i ].tax_rate ? items[ i ].tax_rate : 0;
                        if ( coupon.discount_type === 'percent' ) {
                            discountAmount = items[ i ].cost * items[ i ].qty * coupon.amount / 100;
                            taxAmount = discountAmount * taxRate / ( items[ i ].cost * items[ i ].qty );
                        } else if ( coupon.discount_type === 'product' ) {
                            discountAmount = items[ i ].qty * coupon.amount;
                            taxAmount = discountAmount * items[ i ].tax_rate / ( items[ i ].cost * items[ i ].qty );
                        } else {
                            discountAmount = coupons.amount * items[ i ].qty / totalCounts;
                            taxAmount = discountAmount * taxRate / ( items[ i ].cost * items[ i ].qty );
                        }
                        items[ i ].discount = discountAmount;
                        discount += discountAmount;
                        tax += taxAmount;
                    }
                    return {
                        ...coupon,
                        discount: discount,
                        tax: tax
                    };
                } );
                return {
                    items,
                    coupons
                };
            }
            return false;
        } )
        .catch( error => console.error( error ) );
}
