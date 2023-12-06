import ReactDOM from 'react-dom';
import { useEffect, useState } from 'react';

export default function ErrorSummary ( props ) {
    const { target, validated } = props;
    const [ el ] = useState( document.createElement( "li" ) );

    useEffect( () => {
        return () => {
            let formControl = document.getElementById( props.children.props.htmlFor );
            formControl && formControl.removeEventListener( "input", checkValidation );
        }
    }, [] )

    useEffect( () => {
        if ( validated ) {
            checkValidation();
            let formControl = document.getElementById( props.children.props.htmlFor );
            formControl.addEventListener( "input", checkValidation );
        }
    }, [ validated ] )

    function checkValidation () {
        let formControl = document.getElementById( props.children.props.htmlFor );
        formControl.checkValidity() ? removeElement() : addElement();
    }

    function addElement () {
        if ( checkElementExists() ) return;
        let container = document.getElementById( target );
        let ul = container.children.length ? container.children[ 0 ] : null;

        if ( !ul ) {
            ul = document.createElement( "ul" );
            container.appendChild( ul );
            ul.style.display = "block";
        }

        ul.appendChild( el );
    }

    function removeElement () {
        if ( !checkElementExists() ) return;
        let container = document.getElementById( target );
        let ul = container.children[ 0 ];

        ul.removeChild( el );
        ul.children.length || ( ul.style.display = "none" );
    }

    function checkElementExists () {
        let container = document.getElementById( target );
        let ul = container.children[ 0 ];

        if ( ul ) {
            for ( let i = 0; i < ul.children.length; i++ ) {
                if ( ul.children[ i ] === el ) return true;
            }
        }
        return false;
    }

    return document.getElementById( target ) ? ReactDOM.createPortal( props.children, el ) : '';
}