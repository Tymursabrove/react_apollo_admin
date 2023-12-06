import React from 'react';
import { Range } from 'react-range';

export default function PtRange ( { className = "", variant = "", ...props } ) {

    function classNames () {
        let temp = [ "slider-range" ];
        className && temp.push( className );
        variant && temp.push( "slider-range-" + variant );
        return temp.join( " " );
    }

    return (
        <Range
            { ...props }
            renderTrack={ ( { props, children } ) => {

                function trackStyle () {
                    let range = children.length > 1 ? children[ 1 ].props[ "aria-valuemax" ] - children[ 0 ].props[ "aria-valuemin" ] : children[ 0 ].props[ "aria-valuemax" ] - children[ 0 ].props[ "aria-valuemin" ];
                    let style = {
                        left: children.length > 1 ? 100 * ( children[ 0 ].props[ "aria-valuenow" ] - children[ 0 ].props[ "aria-valuemin" ] ) / range + "%" : 0,
                        width: children.length > 1 ? 100 * ( children[ 0 ].props[ "aria-valuemax" ] - children[ 0 ].props[ "aria-valuenow" ] ) / range + "%" : 100 * children[ 0 ].props[ "aria-valuenow" ] / range + "%"
                    };
                    return style;
                }

                return (
                    <div
                        className={ classNames() }
                        { ...props }
                    >
                        <div className="slider-track" style={ trackStyle() } />
                        { children }
                    </div>
                )
            } }
            renderThumb={ ( { props } ) => (
                <div
                    className="slider-thumb"
                    { ...props }
                    style={ {
                        ...props.style
                    } } />
            ) }
        />
    )
}