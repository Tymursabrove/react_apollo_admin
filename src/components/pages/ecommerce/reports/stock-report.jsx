import React, { useState } from 'react';
import { Row, Col, Card, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Breadcrumb from '../../../common/breadcrumb';
import PtTable from '../../../features/elements/table';

import { getProducts } from '../../../../api';

export default function StockReport () {
    const [ loading, setLoading ] = useState( true );
    const [ ajax, setAjax ] = useState( {
        data: [],
        total: 0
    } );

    const [ tableRef, setTableRef ] = useState( null );

    // Columns
    const columns = [ {
        Header: 'Product',
        accessor: 'name'
    }, {
        Header: 'Parent',
        accessor: 'parent',
        Cell: row => (
            <Link to={ `${ process.env.PUBLIC_URL }/products/${ row.value === 0 ? row.original.id : row.value }` }>
                { row.value === 0 ? '-' : row.original.name.split( '-' )[ 0 ] }
            </Link>
        )
    }, {
        Header: 'Units in stock',
        accessor: 'stock_quantity',
        minWidth: 130
    }, {
        Header: 'Stock status',
        accessor: 'stock_status',
        minWidth: 125
    }, {
        Header: 'Actions',
        accessor: 'id',
        className: 'actions',
        headerClassName: "justify-content-center",
        width: 100,
        Cell: row => (
            <Link to={ `${ process.env.PUBLIC_URL }/products/${ row.original.parent !== 0 ? row.original.parent : row.value }` } className="on-default edit-row mr-2">
                <i className="fas fa-pencil-alt"></i>
            </Link>
        )
    } ];

    function filterByStatus ( e, value ) {
        e.preventDefault();

        let activeBtn = e.currentTarget.parentNode.querySelector( '.active' );
        activeBtn && activeBtn.classList.remove( 'active' );
        e.currentTarget.classList.contains( 'active' ) || e.currentTarget.classList.add( 'active' );

        tableRef.current.filterColumn( { id: 'stock_status' }, value );
    }

    function fetchData ( state ) {
        setLoading( true );
        getProducts( state.page * state.pageSize, ( state.page + 1 ) * state.pageSize, state.filtered, [ { id: 'stock_quantity', desc: true } ], true )
            .then( results => {
                setLoading( false );
                setAjax( {
                    data: results.data,
                    total: parseInt( results.total / state.pageSize ) + !( !( results.total % state.pageSize ) )
                } );
            } );
    }

    return (
        <>
            <Breadcrumb current="All Coupons" paths={ [ { name: 'Home', url: '/' }, { name: 'Ecommerce', url: '/ecommerce' } ] } />

            <Row>
                <Col>
                    <Form method="get" onSubmit={ e => e.preventDefault() }>
                        <Card className="card-modern">
                            <Card.Body>
                                <div className="datatables-header-footer-wrapper">
                                    <div className="datatable-header">
                                        <Row className="align-items-center mb-3">
                                            <Col sm="auto" className="ml-auto pl-lg-1">
                                                <Button
                                                    href="#low"
                                                    className="border mr-2"
                                                    variant="light"
                                                    onClick={ e => filterByStatus( e, "low" ) }
                                                >Low in stock</Button>
                                                <Button
                                                    href="#out"
                                                    className="border mr-2"
                                                    variant="light"
                                                    onClick={ e => filterByStatus( e, "out" ) }
                                                >Out of stock</Button>
                                                <Button
                                                    href="#most"
                                                    className="border active"
                                                    variant="light"
                                                    onClick={ e => filterByStatus( e, "most" ) }
                                                >Most stocked</Button>
                                            </Col>
                                        </Row>
                                    </div>

                                    <PtTable
                                        className="table table-ecommerce-simple -striped mb-0"
                                        type="simple"
                                        data={ ajax.data }
                                        loading={ loading }
                                        columns={ columns }
                                        pages={ ajax.total }
                                        pageSize={ 12 }
                                        manual
                                        defaultFiltered={ [ {
                                            id: 'stock_status',
                                            value: 'most'
                                        } ] }
                                        onFetchData={ fetchData }
                                        onChangeRef={ ref => setTableRef( ref ) }
                                    />
                                </div>
                            </Card.Body>
                        </Card>
                    </Form>
                </Col>
            </Row>
        </>
    )
}