import React, { useEffect } from "react";
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import 'react-image-lightbox/style.css';

import Header from "./common/header";
import Sidebar from "./common/sidebar";

import { isIEBrowser, isEdgeBrowser, isFirefoxBrowser } from '../utils';

export default function Layout ( props ) {
    useEffect( () => {
        document.querySelector( 'body' ).classList.add( 'loaded' );
        window.addEventListener( 'scroll', scrollHander, true );

        return () => {
            window.removeEventListener( 'scroll', scrollHander );
        }
    }, [] )

    function scrollHander () {
        if ( window.pageYOffset > 400 ) {
            document.querySelector( '.scroll-to-top' ) && document.querySelector( '.scroll-to-top' ).classList.add( 'visible' );
        } else {
            document.querySelector( '.scroll-to-top' ) && document.querySelector( '.scroll-to-top' ).classList.remove( 'visible' );
        }
    }

    function toTop ( e ) {
        if ( isIEBrowser() || isEdgeBrowser() || isFirefoxBrowser() ) {
            let pos = window.pageYOffset;
            let timer = setInterval( () => {
                if ( pos <= 0 )
                    clearInterval( timer );
                window.scrollBy( 0, -40 );
                pos -= 40;
            }, 1 );
        } else {
            window.scrollTo( {
                top: 0,
                behavior: "smooth"
            } )
        }
        e.preventDefault();
    }

    return (
        <>
            <Header />

            <div className="inner-wrapper">
                <Sidebar />

                <section role="main" className="content-body content-body-modern mt-0">
                    { props.children }
                </section>
            </div>

            <a href="#top" className="scroll-to-top hidden-mobile" onClick={ toTop }>
                <i className="fas fa-chevron-up"></i>
            </a>

            <ToastContainer
                className="ui-pnotify"
                closeButton={ false }
                closeOnClick={ false }
                draggable={ false }
                position="top-right"
                hideProgressBar={ true }
                autoClose={ 3000 }
                containerId="default"
                enableMultiContainer={ true }
            />

            <ToastContainer
                className="ui-pnotify stack-bottomleft"
                closeButton={ false }
                closeOnClick={ false }
                draggable={ false }
                position="bottom-left"
                hideProgressBar={ true }
                newestOnTop={ true }
                autoClose={ 3000 }
                containerId="bottom-left"
                enableMultiContainer={ true }
            />

            <ToastContainer
                className="ui-pnotify stack-bottomright"
                closeButton={ false }
                closeOnClick={ false }
                draggable={ false }
                position="bottom-right"
                hideProgressBar={ true }
                newestOnTop={ true }
                autoClose={ 3000 }
                containerId="bottom-right"
                enableMultiContainer={ true }
            />

            <ToastContainer
                className="ui-pnotify stack-bar-top"
                closeButton={ false }
                closeOnClick={ false }
                draggable={ false }
                position="top-left"
                hideProgressBar={ true }
                autoClose={ 3000 }
                containerId="top-bar"
                enableMultiContainer={ true }
            />

            <ToastContainer
                className="ui-pnotify stack-bar-bottom"
                closeButton={ false }
                closeOnClick={ false }
                draggable={ false }
                position="bottom-left"
                hideProgressBar={ true }
                newestOnTop={ true }
                autoClose={ 3000 }
                containerId="bottom-bar"
                enableMultiContainer={ true }
            />
        </>
    )
}