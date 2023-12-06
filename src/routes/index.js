import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from '../components/layout';

let Dashboard = React.lazy( () => import( '../components/pages/dashboard' ) );
let MediaPages = React.lazy( () => import( './media' ) );
let TagsEdit = React.lazy( () => import( '../components/pages/tags/tags-edit' ) );
let CategoriesEdit = React.lazy( () => import( '../components/pages/categories/categories-edit' ) );
let ProductsPages = React.lazy( () => import( './products' ) );
let PostsPages = React.lazy( () => import( './posts' ) );
let EcommercePages = React.lazy( () => import( './ecommerce' ) );
let UsersPages = React.lazy( () => import( './users' ) );
let MultivendorPages = React.lazy( () => import( './multivendor' ) );
let ElementsPages = React.lazy( () => import( './elements' ) );
let FormsPages = React.lazy( () => import( './forms' ) );
let TablesPages = React.lazy( () => import( './tables' ) );
let OtherPages = React.lazy( () => import( './others' ) );

export default function Routes () {

    return (
        <React.Suspense fallback={
            <div className="loading-overlay">
                <div className="bounce-loader">
                    <div className="bounce1"></div>
                    <div className="bounce2"></div>
                    <div className="bounce3"></div>
                </div>
            </div> }>
            <Switch>
                <Route path={ `${ process.env.PUBLIC_URL }/pages` } component={ OtherPages } />
                <Layout>
                    <Route exact path={ `${ process.env.PUBLIC_URL }/` } component={ Dashboard } />
                    <Route path={ `${ process.env.PUBLIC_URL }/media` } component={ MediaPages } />
                    <Route path={ `${ process.env.PUBLIC_URL }/products` } component={ ProductsPages } />
                    <Route path={ `${ process.env.PUBLIC_URL }/posts` } component={ PostsPages } />
                    <Route exact path={ `${ process.env.PUBLIC_URL }/tags/:id` } component={ TagsEdit } />
                    <Route exact path={ `${ process.env.PUBLIC_URL }/categories/:id` } component={ CategoriesEdit } />
                    <Route path={ `${ process.env.PUBLIC_URL }/ecommerce` } component={ EcommercePages } />
                    <Route path={ `${ process.env.PUBLIC_URL }/multivendor` } component={ MultivendorPages } />
                    <Route path={ `${ process.env.PUBLIC_URL }/users` } component={ UsersPages } />
                    <Route path={ `${ process.env.PUBLIC_URL }/elements` } component={ ElementsPages } />
                    <Route path={ `${ process.env.PUBLIC_URL }/forms` } component={ FormsPages } />
                    <Route path={ `${ process.env.PUBLIC_URL }/tables` } component={ TablesPages } />
                </Layout>
            </Switch>
        </React.Suspense>
    )
}