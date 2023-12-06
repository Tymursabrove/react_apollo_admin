import React from 'react';

export function TimeLineItem ( { children } ) {
    return (
        <li>
            { children }
        </li>
    )
}

TimeLineItem.Info = ( { children } ) => {
    return (
        <div className="tm-info">
            { children }
        </div>
    )
}

TimeLineItem.Box = ( { children } ) => {
    return (
        <div className="tm-box">
            { children }
        </div>
    )
}

export function TimeLineGroup ( props ) {
    const { title, children } = props;

    return (
        <>
            <div className="tm-title">{ title }</div>
            <ol className="tm-items">
                { children }
            </ol>
        </>
    )
}

export default function TimeLine ( props ) {
    const { className = "", children } = props;

    return (
        <div className={ "timeline " + className }>
            <div className="tm-body">
                { children }
            </div>
        </div>
    )
}