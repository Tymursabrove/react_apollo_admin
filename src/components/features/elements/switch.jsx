import React, { useState } from 'react';

export default function PtSwitch ( props ) {
    const { className = "", size = "", variant = "", on = false, onChange } = props;
    const [ status, setStatus ] = useState( on );

    function classNames () {
        let temp = [ "switch" ];
        size && temp.push( "switch-" + size );
        variant && temp.push( "switch-" + variant );
        className && temp.push( className );
        return temp.join( ' ' );
    }

    function toggleStatus ( e ) {
        e.preventDefault();
        onChange && onChange( !status );
        setStatus( !status );
    }

    return (
        <div className={ classNames() }>
            <div className={ `ios-switch ${ status ? 'on' : 'off' }` } onClick={ toggleStatus }>
                <div className="on-background background-fill"></div>
                <div className="state-background background-fill"></div>
                <div className="handle"></div>
            </div>
        </div>
    )
}