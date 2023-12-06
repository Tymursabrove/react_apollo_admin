import React from 'react';
import { Switch, Route } from 'react-router-dom';

import VendorList from '../components/pages/multivendor/vendor-list';
import Withdraws from '../components/pages/multivendor/withdraws';
import MultivendorSettings from '../components/pages/multivendor/multivendor-settings';

export default function MultivendorPages () {
    return (
        <Switch>
            <Route exact path={ `${ process.env.PUBLIC_URL }/multivendor` } component={ VendorList }></Route>
            <Route exact path={ `${ process.env.PUBLIC_URL }/multivendor/withdraws` } component={ Withdraws }></Route>
            <Route exact path={ `${ process.env.PUBLIC_URL }/multivendor/settings` } component={ MultivendorSettings }></Route>
        </Switch>
    )
}
