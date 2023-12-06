import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MediaGrid from '../components/pages/media/media-grid';
import MediaAdd from '../components/pages/media/media-add';
import MediaSetting from '../components/pages/media/media-setting';
import MediaList from '../components/pages/media/media-list';
import MediaDetail from '../components/pages/media/media-detail';

export default function MediaPages () {
    return (
        <Switch>
            <Route exact path={ `${ process.env.PUBLIC_URL }/media` } component={ MediaGrid } />
            <Route exact path={ `${ process.env.PUBLIC_URL }/media/list` } component={ MediaList } />
            <Route exact path={ `${ process.env.PUBLIC_URL }/media/create` } component={ MediaAdd } />
            <Route exact path={ `${ process.env.PUBLIC_URL }/media/settings` } component={ MediaSetting } />
            <Route exact path={ `${ process.env.PUBLIC_URL }/media/:id` } component={ MediaDetail } />
        </Switch>
    )
}