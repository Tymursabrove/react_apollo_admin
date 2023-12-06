import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Layout from '../components/layout';

import Blank from '../components/pages/others/blank';
import ErrorPage from '../components/pages/others/error-page';
import ForgotPassword from '../components/pages/others/forgot-password';
import LockedScreen from '../components/pages/others/locked-screen';
import LogViewer from '../components/pages/others/log-viewer';
import PageNotFound from '../components/pages/others/page-not-found';
import SessionTimeout from '../components/pages/others/session-timeout';
import SignIn from '../components/pages/others/sign-in';
import SignUp from '../components/pages/others/sign-up';
import TimeLine from '../components/pages/others/timeline';
import UserProfile from '../components/pages/others/user-profile';
import Invoice from '../components/pages/others/invoice';

export default function OtherPagesRoutes () {
    return (
        <Switch>
            <Route exact path={ `${ process.env.PUBLIC_URL }/pages` } render={ () => ( <Redirect to={ `${ process.env.PUBLIC_URL }/pages/user-profile` } /> ) } />

            <Route exact path={ `${ process.env.PUBLIC_URL }/pages/forgot-password` } component={ ForgotPassword } />
            <Route exact path={ `${ process.env.PUBLIC_URL }/pages/locked-screen` } component={ LockedScreen } />
            <Route exact path={ `${ process.env.PUBLIC_URL }/pages/sign-in` } component={ SignIn } />
            <Route exact path={ `${ process.env.PUBLIC_URL }/pages/sign-up` } component={ SignUp } />

            <Layout>
                <Route exact path={ `${ process.env.PUBLIC_URL }/pages/404` } component={ PageNotFound } />
                <Route exact path={ `${ process.env.PUBLIC_URL }/pages/500` } component={ ErrorPage } />
                <Route exact path={ `${ process.env.PUBLIC_URL }/pages/blank` } component={ Blank } />
                <Route exact path={ `${ process.env.PUBLIC_URL }/pages/invoice` } component={ Invoice } />
                <Route exact path={ `${ process.env.PUBLIC_URL }/pages/session-timeout` } component={ SessionTimeout } />
                <Route exact path={ `${ process.env.PUBLIC_URL }/pages/timeline` } component={ TimeLine } />
                <Route exact path={ `${ process.env.PUBLIC_URL }/pages/user-profile` } component={ UserProfile } />
                <Route exact path={ `${ process.env.PUBLIC_URL }/pages/log-viewer` } component={ LogViewer } />
            </Layout>
        </Switch>
    )
}