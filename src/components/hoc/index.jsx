import React, { useState, useRef } from 'react';
import { Card, Collapse, OverlayTrigger, Form } from 'react-bootstrap';

// HOC with card actions (toggle, dismiss).
export function withCardActions ( WrappedComponent ) {
    return ( props ) => {
        const { className = '', children, collapsible = true, dismissible = true, collapsed = false, ...restProps } = props;

        const header = children.length ? children.find( child => child.type.displayName === 'CardHeader' ) : children.type.displayName === 'CardHeader' ? children : null;
        const { children: headerChildren, ...headerProps } = header ? header.props : {};
        const content = children.length ? children.filter( child => !child.type || child.type.displayName !== 'CardHeader' ) : children.type.displayName !== 'CardHeader' ? children : null;

        const [ collapse, setCollapse ] = useState( collapsed );
        const [ dismiss, setDismiss ] = useState( false );

        function toggleContent ( e ) {
            e.preventDefault();
            setCollapse( !collapse );
        }

        function dismissCard ( e ) {
            e.preventDefault();
            setDismiss( true );
        }

        if ( dismiss ) return '';

        return (
            <WrappedComponent className={ className + ( collapse ? ' card-collapsed' : '' ) } { ...restProps }>
                <Card.Header { ...headerProps }>
                    <div className="card-actions">
                        { collapsible &&
                            <a href="#toggle" className="card-action card-action-toggle" onClick={ toggleContent }><span className="sr-only">Toggle</span></a>
                        }
                        { dismissible &&
                            <a href="#dismiss" className="card-action card-action-dismiss" onClick={ dismissCard }><span className="sr-only">Dismiss</span></a>
                        }
                    </div>
                    { headerChildren }
                </Card.Header>
                <Collapse in={ !collapse }>
                    <div>
                        { content }
                    </div>
                </Collapse>
            </WrappedComponent>
        )
    }
}

// HOC with dismissible alerts
export function withDismissible ( WrappedComponent ) {
    return ( props ) => {
        const [ show, setShow ] = useState( true );

        return (
            <WrappedComponent { ...props }
                show={ show }
                onClose={ () => setShow( false ) }
                dismissible
            />
        )
    }
}

// HOC with Max Length Alert
export function withMaxLength ( WrappedComponent ) {
    return ( props ) => {
        const { maxLength = null, onChange, ...rest } = props;
        const [ current, setCurrent ] = useState( 0 );
        const target = useRef( null );

        function inputChange ( e ) {
            props.onChange && props.onChange( e );
            setCurrent( e.target.value.length );
        }

        return (
            <OverlayTrigger
                trigger="click"
                placement="bottom-start"
                overlay={ ( {
                    placement,
                    scheduleUpdate,
                    arrowProps,
                    outOfBoundaries,
                    show: _show,
                    ...props
                } ) => (
                        <div
                            { ...props }
                            style={ {
                                ...props.style,
                                left: "auto",
                                right: "100%",
                                padding: '3px'
                            } }
                            className={ `badge ${ current < maxLength ? 'badge-success' : 'badge-danger' }` }
                        >
                            { current } / { maxLength }
                        </div>
                    ) }
            >
                <WrappedComponent
                    ref={ target }
                    maxLength={ maxLength }
                    { ...rest }
                    onChange={ inputChange }
                />
            </OverlayTrigger>
        )
    }
}

// HOC that make table contents editable
export function editableTableHOC ( WrappedComponent ) {
    let cache = [];

    function getStoredData ( key, row, column ) {
        let rowData = cache.find( data => data.key === row.original[ key ] );
        return rowData && rowData.value[ column ] ? rowData.value[ column ] : null;
    }

    function storeChangedData ( key, row, column, value ) {
        let rowData = cache.find( data => data.key === row.original[ key ] );
        rowData || ( rowData = cache[ cache.push( { key: row.original[ key ], value: { ...row.original } } ) - 1 ] );
        rowData.value[ column ] = value;
    }

    function removeStoredData ( rowKey ) {
        let rowIndex = cache.findIndex( data => data.key === rowKey );
        rowIndex >= 0 && cache.splice( rowIndex, 1 );
    }

    return ( props ) => {
        const {
            keyField = "id",
            columns,
            onSaveRow,
            onCancelRow,
            onEditRow,
            onRemoveRow,
            ...rest
        } = props;

        function getExpandedColumns ( columns ) {
            let result = columns.map( column => {
                let temp = { ...column };
                if ( column.editable ) {
                    temp.Cell = row => {
                        if ( row.original.editing ) {
                            let type = typeof row.value;
                            if ( type !== "string" && type !== "number" && row.value ) {
                                return console.error( "Only string and number can be editable." );
                            }
                            let colKey = column.id ? column.id : column.accessor;
                            let storedData = getStoredData( keyField, row, colKey );
                            return ( <Form.Control
                                type={ type === "number" ? "number" : "text" }
                                defaultValue={ storedData ? storedData : row.value }
                                min={ column.min }
                                max={ column.max }
                                onChange={ e => storeChangedData( keyField, row, colKey, e.target.value ) }
                            /> );
                        }
                        return column.Cell ? column.Cell( row ) : row.value ? row.value : ""
                    }
                }
                return temp;
            } );

            result.push( {
                Header: "Actions",
                accessor: "editing",
                className: "actions",
                Cell: row => {
                    if ( row.value ) {
                        return ( <>
                            <a href="#save" className="save-row" onClick={ e => saveRow( e, row.original[ keyField ] ) }><i className="fas fa-save"></i></a>
                            <a href="#cancel" className="cancel-row" onClick={ e => cancelRow( e, row.original[ keyField ] ) }><i className="fas fa-times"></i></a>
                        </> );
                    }
                    return ( <>
                        <a href="#edit" className="edit-row" onClick={ e => editRow( e, row.original[ keyField ] ) }><i className="fas fa-pencil-alt"></i></a>
                        <a href="#remove" className="remove-row" onClick={ e => removeRow( e, row.original[ keyField ] ) }><i className="fas fa-trash-alt"></i></a>
                    </> );
                }
            } )

            return result;
        }

        function saveRow ( e, rowKey ) {
            e.preventDefault();
            let rowData = cache.find( data => data.key === rowKey );
            if ( !isValidData( rowData ) ) {
                return window.alert( "Please enter correct data" );
            }
            if ( rowData ) {
                onSaveRow && onSaveRow( rowKey, rowData.value );
            } else {
                onCancelRow && onCancelRow( rowKey );
            }
            removeStoredData( rowKey );
        }

        function cancelRow ( e, rowKey ) {
            e.preventDefault();
            removeStoredData( rowKey );
            onCancelRow && onCancelRow( rowKey );
        }

        function editRow ( e, rowKey ) {
            e.preventDefault();
            onEditRow && onEditRow( rowKey );
        }

        function removeRow ( e, rowKey ) {
            e.preventDefault();
            onRemoveRow && onRemoveRow( rowKey );
        }

        function isValidData ( rowData ) {
            for ( let key in rowData.value ) {
                let val = rowData.value[ key ];
                let col = columns.find( column => key === ( column.id ? column.id : column.accessor ) );
                if ( col && ( ( ( col.min !== null && col.min !== undefined ) && col.min > val ) || ( ( col.max !== null && col.max !== undefined ) && col.max < val ) ) )
                    return false;
            }
            return true;
        }

        return (
            <WrappedComponent
                columns={ getExpandedColumns( columns ) }
                { ...rest }
            />
        )
    }
}
