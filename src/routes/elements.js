import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AccordionsPage from '../components/pages/elements/accordions';
import AlertsPage from '../components/pages/elements/alerts';
import ApperAnimationsPage from '../components/pages/elements/animations-appear';
import ButtonsPage from '../components/pages/elements/buttons';
import CardsPage from '../components/pages/elements/cards';
import CarouselsPage from '../components/pages/elements/carousels';
import ChartsPage from '../components/pages/elements/charts';
import HoverAnimationsPage from '../components/pages/elements/animations-hover';
import ModalsPage from '../components/pages/elements/modals';
import NotificationsPage from '../components/pages/elements/notifications';
import ProgressBarsPage from '../components/pages/elements/progress-bars';
import ScrollablesPage from '../components/pages/elements/scrollables';
import TabsPage from '../components/pages/elements/tabs';
import TogglesPage from '../components/pages/elements/toggles';
import TreeViewsPage from '../components/pages/elements/treeviews';
import Typography from '../components/pages/elements/typography';

export default function ElementsRoutes () {
    return (
        <Switch>
            <Route exact path={ `${ process.env.PUBLIC_URL }/elements` } component={ Typography } />
            <Route exact path={ `${ process.env.PUBLIC_URL }/elements/accordions` } component={ AccordionsPage } />
            <Route exact path={ `${ process.env.PUBLIC_URL }/elements/alerts` } component={ AlertsPage } />
            <Route exact path={ `${ process.env.PUBLIC_URL }/elements/animations-appear` } component={ ApperAnimationsPage } />
            <Route exact path={ `${ process.env.PUBLIC_URL }/elements/buttons` } component={ ButtonsPage } />
            <Route exact path={ `${ process.env.PUBLIC_URL }/elements/cards` } component={ CardsPage } />
            <Route exact path={ `${ process.env.PUBLIC_URL }/elements/carousels` } component={ CarouselsPage } />
            <Route exact path={ `${ process.env.PUBLIC_URL }/elements/charts` } component={ ChartsPage } />
            <Route exact path={ `${ process.env.PUBLIC_URL }/elements/animations-hover` } component={ HoverAnimationsPage } />
            <Route exact path={ `${ process.env.PUBLIC_URL }/elements/modals` } component={ ModalsPage } />
            <Route exact path={ `${ process.env.PUBLIC_URL }/elements/notifications` } component={ NotificationsPage } />
            <Route exact path={ `${ process.env.PUBLIC_URL }/elements/progress-bars` } component={ ProgressBarsPage } />
            <Route exact path={ `${ process.env.PUBLIC_URL }/elements/scrollables` } component={ ScrollablesPage } />
            <Route exact path={ `${ process.env.PUBLIC_URL }/elements/tabs` } component={ TabsPage } />
            <Route exact path={ `${ process.env.PUBLIC_URL }/elements/treeviews` } component={ TreeViewsPage } />
            <Route exact path={ `${ process.env.PUBLIC_URL }/elements/toggles` } component={ TogglesPage } />
        </Switch>
    )
}