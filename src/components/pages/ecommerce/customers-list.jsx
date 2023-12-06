import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Form, Button, InputGroup } from 'react-bootstrap';
import { format } from 'date-format-parse';

import Breadcrumb from '../../common/breadcrumb';
import PtTable from '../../features/elements/table';

import { getCustomers } from '../../../api';
import { COUNTRIES, STATES } from '../../../utils/data/constant';

export default function CustomerList () {
    const [ loading, setLoading ] = useState( true );
    const [ ajax, setAjax ] = useState( {
        data: [],
        total: 0
    } );

    // Variables
    const [ search, setSearch ] = useState( '' );

    const [ tableRef, setTableRef ] = useState( null );

    // Columns
    const columns = [ {
        Header: 'Name',
        accessor: 'name',
        sortable: true,
        Cell: row => (
            <>
                { row.original.sign_up ?
                    <Link to={ `${ process.env.PUBLIC_URL }/users/${ row.original.id }` }>
                        <strong>{ row.value }</strong>
                    </Link>
                    : row.value
                }
            </>
        )
    }, {
        Header: 'Email',
        accessor: 'email',
        Cell: row => (
            <a href={ `mailto:${ row.value }` }>{ row.value }</a>
        )
    }, {
        Header: 'Last Active',
        accessor: 'last_active',
        sortable: true,
        Cell: row => row.value ? format( new Date( row.value ), 'MMMM DD, YYYY' ) : ''
    }, {
        Header: 'Sign Up',
        accessor: 'sign_up',
        sortable: true,
        Cell: row => row.value ? format( new Date( row.value ), 'MMMM DD, YYYY' ) : ''
    }, {
        Header: 'Orders',
        accessor: 'orders',
        sortable: true
    }, {
        Header: 'Total Spend',
        accessor: 'total_spend',
        sortable: true,
        Cell: row => `$${ row.value.toFixed( 2 ) }`,
        minWidth: 120
    }, {
        Header: 'AOV',
        accessor: 'aov',
        sortable: true,
        Cell: row => `$${ row.value.toFixed( 2 ) }`
    }, {
        Header: 'Country',
        accessor: 'country',
        Cell: row => row.value ? COUNTRIES.find( item => item.value === row.value ).label : ''
    }, {
        Header: 'City',
        accessor: 'city'
    }, {
        Header: 'Region',
        accessor: 'state',
        Cell: row => row.value ? STATES[ row.original.country ] && STATES[ row.original.country ].length ? STATES[ row.original.country ].find( item => item.value === row.value ).label : row.value : ''
    }, {
        Header: 'Postal Code',
        accessor: 'postcode',
        minWidth: 120
    } ];

    function searchCustomers ( e ) {
        e.preventDefault();
        tableRef.current.filterColumn( { id: 'name' }, search );
    }

    function fetchData ( state ) {
        setLoading( true );
        getCustomers( state.page * state.pageSize, ( state.page + 1 ) * state.pageSize, state.filtered, state.sorted )
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
            <Breadcrumb current="Customers" paths={ [
                {
                    name: 'Home',
                    url: '/'
                }, {
                    name: 'Ecommerce',
                    url: '/ecommerce'
                }
            ] } />

            <Row>
                <Col>
                    <Form method="get" onSubmit={ searchCustomers }>
                        <Card className="card-modern">
                            <Card.Body>
                                <div className="datatables-header-footer-wrapper">
                                    <div className="datatable-header">
                                        <Row className="align-items-center mb-4">
                                            <Col className="col-auto ml-auto pl-lg-1">
                                                <div className="search search-style-1 mx-lg-auto w-auto">
                                                    <InputGroup>
                                                        <Form.Control
                                                            type="text"
                                                            className="search-term"
                                                            placeholder="Search"
                                                            value={ search }
                                                            onChange={ e => setSearch( e.target.value ) }
                                                        />
                                                        <InputGroup.Append>
                                                            <Button variant="default" type="submit"><i className="bx bx-search"></i></Button>
                                                        </InputGroup.Append>
                                                    </InputGroup>
                                                </div>
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