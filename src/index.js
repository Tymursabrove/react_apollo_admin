import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ScrollContext } from 'react-router-scroll-4';

// import routes
import Routes from './routes';

export function App () {

    return (
        <BrowserRouter basename={ '/' } >
            <ScrollContext>
                <Routes />
            </ScrollContext>
        </BrowserRouter>
    )
}

ReactDOM.render( <App />, document.getElementById( 'app' ) );