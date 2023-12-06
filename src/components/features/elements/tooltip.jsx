import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

export default function PtToolTip ( { children, tooltip, trigger, addClass = "", placement } ) {
    return (
        <OverlayTrigger
            trigger={ trigger }
            placement={ placement }
            overlay={ <Tooltip>{ tooltip }</Tooltip> }
        >
            <span className={ `porto-help-tip ${ addClass }` }>{ children }</span>
        </OverlayTrigger>
    )
}