import React from 'react';
import { Route, Switch } from 'react-router-dom';

import UserList from '../components/pages/users/user-list';
import UserCreate from '../components/pages/users/user-create';
import UserDetail from '../components/pages/users/user-detail';

export default function UsersRoute () {
    return (
        <Switch>
            <Route exact path={ `${ process.env.PUBLIC_URL }/users` } component={ UserList } />
            <Route exact path={ `${ process.env.PUBLIC_URL }/users/create` } component={ UserCreate } />
            <Route exact path={ `${ process.env.PUBLIC_URL }/users/:id` } component={ UserDetail } />
        </Switch>
    )
}