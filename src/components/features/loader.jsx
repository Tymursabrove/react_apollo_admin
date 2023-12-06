import React from 'react';

export default function Loader () {
    return (
        <div className="position-relatvie" style={ { minHeight: "500px" } }>
            <div className="loading-overlay bg-transparent">
                <div className="bounce-loader">
                    <div className="bounce1"></div>
                    <div className="bounce2"></div>
                    <div className="bounce3"></div>
                </div>
            </div>
        </div>
    )
}