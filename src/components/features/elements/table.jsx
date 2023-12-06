import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import ReactTable from 'react-table';
import selectTableHOC from 'react-table/lib/hoc/selectTable';
import 'react-table/react-table.css';

import TablePagination from './table-pagination';

const CompleteTablePagination = ( props ) => {
    let paginationWrapper = document.querySelector( ".pagination-wrapper" );
    return paginationWrapper ? ReactDOM.createPortal( < TablePagination  { ...props } />, paginationWrapper ) : <TablePagination { ...props } />
}

const SelectTable = selectTableHOC( ReactTable );

const PtSelectInput = ( props ) => {
    function toggleState ( e ) {
        e.stopPropagation();
        props.onClick( props.id, e.shiftKey, props.row );
    }

    function onChange ( e ) {

    }

    return (
        <input type="checkbox" id={ props.id } className="checkbox-style-1 p-relative d-block" checked={ props.checked } onClick={ toggleState } onChange={ onChange } />
    )
}

function PtTable ( { onChangeRef, type = "select", ...props } ) {
    const ref = useRef( null );

    useEffect( () => {
        onChangeRef && onChangeRef( ref );
    }, [ ref ] )

    if ( type === "select" ) {
        return (
            <SelectTable
                ref={ ref }
                keyField="id"
                sortable={ false }
                multiSort={ false }
                selectWidth={ 40 }
                { ...props }
                PaginationComponent={ CompleteTablePagination }
                SelectAllInputComponent={ PtSelectInput }
                SelectInputComponent={ PtSelectInput }
            />
        )
    } else {
        return (
            <ReactTable
                ref={ ref }
                sortable={ false }
                multiSort={ false }
                { ...props }
                PaginationComponent={ TablePagination }
            />
        )
    }
}

export default React.memo( PtTable );

