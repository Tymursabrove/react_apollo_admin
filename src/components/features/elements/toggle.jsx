import React, { useState } from 'react';
import { Collapse } from 'react-bootstrap';

function PtToggle ( props ) {
    const { className, label = '', children, defaultCollapsed = true } = props;
    const [ collapsed, setCollapsed ] = useState( defaultCollapsed );
    const realClassName = "toggle" + ( className ? ` ${ className }` : '' ) + ( collapsed ? '' : ' active' );

    function toggleContent () {
        setCollapsed( !collapsed );
    }

    return (
        <div className={ realClassName }>
            <label onClick={ toggleContent }>
                <i className="fas fa-plus"></i><i className="fas fa-minus"></i>{ label }
            </label>

            <Collapse in={ !collapsed }>
                <div className="toggle-content">
                    { children }
                </div>
            </Collapse>
        </div>
    )
}

export default React.memo( PtToggle );