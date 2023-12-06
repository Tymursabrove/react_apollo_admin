import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import Breadcrumb from '../../common/breadcrumb';

function SessionTimeout ({ history }) {
    const idleTime = 10,
    sessionTime = 15,
    redirectTime = 5;
    let idleTimer = null;
    let sessionTimer=null;
    let redirectTimer = null;
    const events = ["mousemove", "keydown", "wheel", "DOMMouseScroll", "mousewheel", "mousedown", "touchstart", "touchmove", "MSPointerDown", "MSPointerMove"]

    useEffect(() => {
        idleTimer = setTimeout(showLockScreen, idleTime * 1000);
        sessionTimer = setTimeout(sessionTimeout, sessionTime * 1000);
        events.forEach(event => {
            window.addEventListener(event, idleTimeout);
        });

        return () => {
            idleTimer && clearTimeout(idleTimer);
            sessionTimer && clearTimeout(sessionTimer);
            redirectTimer && clearTimeout(redirectTimer);
            events.forEach(event => {
                window.removeEventListener(event, idleTimeout);
            });
        }
    }, [])

    function idleTimeout() {
        idleTimer && clearTimeout(idleTimer);
        idleTimer = setTimeout(showLockScreen, idleTime * 1000);
    }

    function showLockScreen() {
        history.push(`${ process.env.PUBLIC_URL }/pages/locked-screen`);
    }

    function sessionTimeout() {
        if(! window.confirm("Your session is about to expire, do you want to renew?") ) {
            redirectTimer = setTimeout(redirectLoginPage, redirectTime * 1000);
        }
    }

    function redirectLoginPage() {
        history.push( `${process.env.PUBLIC_URL}/pages/sign-in` );
    }

    return (
        <>
            <Breadcrumb current="Session Timeout" paths={ [ {
                name: "Home",
                url: "/"
            }, {
                name: "Pages",
                url: "/pages"
            } ] } />

            If you don't move, after { idleTime } seconds lock screen will be shown.
            <br />
            After { sessionTime } seconds after document ready, a warning will appear asking if user wants to renew a session.
            <br />
            If the user doesn't want to, then after { redirectTime } more seconds he will be redirected to login page.

            <br />
            <br />

            Note: The code is for demo purposes, you can configure it like you want to.
            If you don't want a session timeout you can just make a keep alive call from time to time. :)
            <br />
            You can find more information looking at source code or at our extensive documentation.
        </>
    )
}

export default React.memo( withRouter(SessionTimeout) );