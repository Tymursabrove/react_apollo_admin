import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import ReactTable from 'react-table';

import Breadcrumb from '../../common/breadcrumb';

import { withCardActions } from '../../hoc';

import { getMedia } from '../../../api';

import { getCroppedImageUrl } from '../../../utils';

const CardWithActions = withCardActions( Card );

function AjaxTablesPage () {
    const [ loading, setLoading ] = useState( true );
    const [ ajax, setAjax ] = useState( {
        data: [],
        total: 0
    } );

    const columns = [ {
        id: 'name',
        Header: 'File',
        sortable: true,
        accessor: d => { return { id: d.id, url: d.copy_link, alt: d.alt_text ? d.alt_text : 'thumb', name: d.name } },
        Cell: row => (
            <>
                <Link to={ `${ process.env.PUBLIC_URL }/media/${ row.value.id }` }>
                    <img
                        src={ `${ process.env.PUBLIC_URL }/mock-server/images/` + getCroppedImageUrl( row.value.url, 100 ) }
                        alt={ row.alt }
                        width={ 60 }
                        height={ 60 }
                    />
                </Link>
                <span className="ml-3">{ row.value.name }</span>
            </>
        )
    }, {
        Header: 'Author',
        accessor: 'uploaded_by',
        sortable: true
    }, {
        Header: 'Type',
        accessor: 'type',
        width: 100
    }, {
        Header: 'Size',
        accessor: 'size',
        sortable: true,
        width: 80,
        Cell: row => ( row.value / 1024 ).toFixed( 2 ) + 'Kb'
    }, {
        Header: 'Date',
        sortable: true,
        width: 160,
        accessor: 'created_at',
    }, {
        Header: 'Actions',
        accessor: 'id',
        className: 'actions',
        headerClassName: "justify-content-center",
        width: 100,
        Cell: row => (
            <>
                <Link to={ `${ process.env.PUBLIC_URL }/media/${ row.value }` } className="on-default edit-row mr-2"><i className="fas fa-pencil-alt"></i></Link>
                <a href="#del" className="on-default remove-row" onClick={ e => deleteRow( e, row.index ) }><i className="far fa-trash-alt"></i></a>
            </>
        )
    } ];

    function deleteRow ( e, index ) {
        e.preventDefault();
        if ( window.confirm( "Are you sure you want to delete this data?" ) ) {
            setAjax( {
                ...ajax,
                data: ajax.data.filter( ( media, id ) => id !== index )
            } );
        }
    }

    function fetchData ( state ) {
        setLoading( true );
        getMedia( state.page * state.pageSize, ( state.page + 1 ) * state.pageSize, state.filtered, state.sorted ).then( results => {
            setLoading( false );
            setAjax( {
                data: results.data,
                total: parseInt( results.total / state.pageSize ) + !( !( results.total % state.pageSize ) )
            } );
        } );
    }

    return (
        <>
            <Breadcrumb current="Ajax Tables" paths={ [ {
                name: "Home",
                url: "/"
            }, {
                name: "Tables",
                url: "/tables"
            } ] } />

            <CardWithActions>
                <Card.Header>
                    <Card.Title>Ajax</Card.Title>
                </Card.Header>

                <Card.Body>
                    <ReactTable
                        className="table table-ecommerce-simple -striped mb-0"
                        manual
                        columns={ columns }
                        data={ ajax.data }
                        loading={ loading }
                        pages={ ajax.total }
                        defaultPageSize={ 10 }
                        showPageJump={ false }
                        onFetchData={ fetchData }
                    />
                </Card.Body>
            </CardWithActions>
        </>
    )
}

export default React.memo( AjaxTablesPage );