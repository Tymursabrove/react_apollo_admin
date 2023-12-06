import React from 'react';

function PNotify ( { title, text, icon, closeToast } ) {
    return (
        <>
            <div className="ui-pnotify-closer" onClick={ closeToast }><span className="fas fa-times" title="close"></span></div>
            { icon && <div className="ui-pnotify-icon">
                <span className={ icon }></span>
            </div> }
            <h4 className="ui-pnotify-title">{ title }</h4>
            <div className="ui-pnotify-text">{ text }</div>
        </>
    )
}

export default React.memo( PNotify );