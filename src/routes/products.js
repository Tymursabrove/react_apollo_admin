import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ProductList from '../components/pages/products/product-list';
import ProductAdd from '../components/pages/products/product-add';
import ProductDetail from '../components/pages/products/product-detail';

import AttributesList from '../components/pages/products/attributes/attributes-list';
import AttibutesEdit from '../components/pages/products/attributes/attributes-edit';
import TermsList from '../components/pages/products/attributes/terms-list';
import TermsEdit from '../components/pages/products/attributes/terms-edit';

import TagsList from '../components/pages/tags/tags-list';
import CategoriesList from '../components/pages/categories/categories-list';
import ReviewList from '../components/pages/products/reviews/review-list';
import ReviewDetail from '../components/pages/products/reviews/review-detail';

export default function ProductPages () {
    return (
        <Switch>
            <Route exact path={ `${ process.env.PUBLIC_URL }/products` } component={ ProductList } />
            <Route exact path={ `${ process.env.PUBLIC_URL }/products/create` } component={ ProductAdd } />

            <Route exact path={ `${ process.env.PUBLIC_URL }/products/attributes` } component={ AttributesList } />
            <Route exact path={ `${ process.env.PUBLIC_URL }/products/attributes/:id` } component={ AttibutesEdit } />
            <Route exact path={ `${ process.env.PUBLIC_URL }/products/attributes/:id/terms` } component={ TermsList } />
            <Route exact path={ `${ process.env.PUBLIC_URL }/products/attributes/:id/terms/:termId` } component={ TermsEdit } />
            <Route exact path={ `${ process.env.PUBLIC_URL }/products/tags` } component={ () => ( <TagsList type="products" /> ) } />
            <Route exact path={ `${ process.env.PUBLIC_URL }/products/categories` } component={ () => ( <CategoriesList type="products" /> ) } />
            <Route exact path={ `${ process.env.PUBLIC_URL }/products/reviews` } component={ ReviewList } />
            <Route exact path={ `${ process.env.PUBLIC_URL }/products/reviews/:id` } component={ ReviewDetail } />

            <Route exact path={ `${ process.env.PUBLIC_URL }/products/:id` } component={ ProductDetail } />
        </Switch>
    )
}