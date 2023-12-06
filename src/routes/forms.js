import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AdvancedFormsPage from '../components/pages/forms/advanced';
import BasicFormsPage from '../components/pages/forms/basic';
import FormLayoutsPage from '../components/pages/forms/layouts';
import FormValidationPage from '../components/pages/forms/validation';
import FormWizardsPage from '../components/pages/forms/wizards';

export default function FormsRoutes () {
    return (
        <Switch>
            <Route exact path={ `${ process.env.PUBLIC_URL }/forms` } component={ BasicFormsPage } />
            <Route exact path={ `${ process.env.PUBLIC_URL }/forms/advanced` } component={ AdvancedFormsPage } />
            <Route exact path={ `${ process.env.PUBLIC_URL }/forms/layouts` } component={ FormLayoutsPage } />
            <Route exact path={ `${ process.env.PUBLIC_URL }/forms/validation` } component={ FormValidationPage } />
            <Route exact path={ `${ process.env.PUBLIC_URL }/forms/wizards` } component={ FormWizardsPage } />
        </Switch>
    )
}