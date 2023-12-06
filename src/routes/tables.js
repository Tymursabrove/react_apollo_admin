import React from 'react';
import { Switch, Route } from 'react-router-dom';

import BasicTablesPage from '../components/pages/tables/basic';
import AdvancedTablesPage from '../components/pages/tables/advanced';
import AjaxTablesPage from '../components/pages/tables/ajax';
import ResponsiveTablesPage from '../components/pages/tables/responsive';
import EditableTablesPage from '../components/pages/tables/editable';

export default function TablesPage () {
    return (
        <Switch>
            <Route exact path={ `${ process.env.PUBLIC_URL }/tables` } component={ BasicTablesPage } />
            <Route exact path={ `${ process.env.PUBLIC_URL }/tables/advanced` } component={ AdvancedTablesPage } />
            <Route exact path={ `${ process.env.PUBLIC_URL }/tables/ajax` } component={ AjaxTablesPage } />
            <Route exact path={ `${ process.env.PUBLIC_URL }/tables/editable` } component={ EditableTablesPage } />
            <Route exact path={ `${ process.env.PUBLIC_URL }/tables/responsive` } component={ ResponsiveTablesPage } />
        </Switch>
    )
}