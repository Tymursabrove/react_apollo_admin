import React, { useState, useEffect } from 'react';
import { InputGroup, Button, Form, ButtonGroup } from 'react-bootstrap';

export default function PtSpinner ( props ) {
    const {
        className = "",
        disabled = false,
        min = 1,
        max,
        step = 1,
        value = 1,
        onChange,
        isVertical = true,
        iconUp = "fas fa-angle-up",
        iconDown = "fas fa-angle-down",
        size = ""
    } = props;
    const [ current, setCurrent ] = useState( value );

    function up () {
        setCurrent( typeof max === "number" ? Math.min( max, current + step ) : current + step );
    }

    function down () {
        setCurrent( typeof min === "number" ? Math.max( min, current - step ) : current - step );
    }

    useEffect( () => {
        onChange && onChange( current );
    }, [ current ] )

    return (
        <InputGroup className={ className }>
            <Form.Control className="spinner-input" disabled={ disabled } readOnly value={ current } />

            { isVertical ?
                <ButtonGroup className="spinner-buttons input-group-btn" vertical>
                    <Button
                        className="spinner-up"
                        size={ size }
                        variant="default"
                        onClick={ up }
                        disabled={ disabled || ( max && max === current ) }
                    >
                        <i className={ iconUp }></i>
                    </Button>
                    <Button
                        className="spinner-down"
                        size={ size }
                        variant="default"
                        onClick={ down }
                        disabled={ disabled || ( min && min === current ) }
                    >
                        <i className={ iconDown }></i>
                    </Button>
                </ButtonGroup>
                :
                <InputGroup.Append>
                    <Button
                        className="spinner-up"
                        size={ size }
                        variant="default"
                        onClick={ up }
                        disabled={ disabled || ( max && max === current ) }
                    >
                        <i className={ iconUp }></i>
                    </Button>
                    <Button
                        className="spinner-down"
                        size={ size }
                        variant="default"
                        onClick={ down }
                        disabled={ disabled || ( ( min !== null || min !== undefined ) && min === current ) }
                    >
                        <i className={ iconDown }></i>
                    </Button>
                </InputGroup.Append>
            }
        </InputGroup>
    )
}