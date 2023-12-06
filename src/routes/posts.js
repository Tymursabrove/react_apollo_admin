import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PostList from '../components/pages/posts/post-list';
import PostAdd from '../components/pages/posts/post-add';
import PostDetail from '../components/pages/posts/post-detail';

import CategoriesList from '../components/pages/categories/categories-list';
import TagsList from '../components/pages/tags/tags-list';
import ReplyList from '../components/pages/posts/replies/reply-list';
import ReplyDetail from '../components/pages/posts/replies/reply-detail';

export default function PostsRoute () {
    return (
        <Switch>
            <Route exact path={ `${ process.env.PUBLIC_URL }/posts` } component={ PostList } />
            <Route exact path={ `${ process.env.PUBLIC_URL }/posts/categories` } component={ () => ( <CategoriesList type="posts" /> ) } />
            <Route exact path={ `${ process.env.PUBLIC_URL }/posts/create` } component={ PostAdd } />
            <Route exact path={ `${ process.env.PUBLIC_URL }/posts/tags` } component={ () => ( <TagsList type="posts" /> ) } />
            <Route exact path={ `${ process.env.PUBLIC_URL }/posts/replies` } component={ ReplyList } />
            <Route exact path={ `${ process.env.PUBLIC_URL }/posts/replies/:id` } component={ ReplyDetail } />
            <Route exact path={ `${ process.env.PUBLIC_URL }/posts/:id` } component={ PostDetail } />
        </Switch>
    )
}