import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Form, Button, InputGroup } from 'react-bootstrap';
import { toast } from 'react-toastify';

import Breadcrumb from '../../common/breadcrumb';
import PtTable from '../../features/elements/table';
import PNotify from '../../features/elements/p-notify';

import { getUsers } from '../../../api';

export default function UserList () {
    const [ loading, setLoading ] = useState( true );
    const [ ajax, setAjax ] = useState( {
        data: [],
        total: 0
    } );

    // Filter Variables
    const [ role, setRole ] = useState( '' );
    const [ search, setSearch ] = useState( '' );

    const [ selectAll, setSelectAll ] = useState( false );
    const [ tableRef, setTableRef ] = useState( null );
    const [ selected, setSelected ] = useState( [] );
    const [ bulk, setBulk ] = useState( '' );

    // Columns
    const columns = [ {
        Header: 'Name',
        id: 'name',
        sortable: true,
        accessor: d => ( d.first_name ? d.first_name : '' ) + ' ' + ( d.last_name ? d.last_name : '' ),
        width: 150,
        Cell: row => (
            <Link to={ `${ process.env.PUBLIC_URL }/users/${ row.original.id }` } className="ml-1 font-weight-bold">
                { row.value }
            </Link>
        )
    }, {
        Header: 'E-mail',
        accessor: 'email',
        sortable: true
    }, {
        Header: 'Role',
        id: 'role',
        accessor: d => d.role.name
    }, {
        Header: 'Posts',
        accessor: 'posts_count',
        sortable: true
    }, {
        Header: 'Status',
        accessor: 'sign_up',
        Cell: row => (
            <span className={ `ecommerce-status ${ row.value ? 'completed' : '' }` }>Active</span>
        )
    }, {
        Header: 'Actions',
        accessor: 'id',
        className: 'actions',
        headerClassName: "justify-content-center",
        width: 100,
        Cell: row => (
            <>
                <Link to={ `${ process.env.PUBLIC_URL }/users/${ row.value }` } className="on-default edit-row mr-2"><i className="fas fa-pencil-alt"></i></Link>
                <a href="#del" className="on-default remove-row" onClick={ e => deleteRow( e, row.value ) }><i className="far fa-trash-alt"></i></a>
            </>
        )
    } ];

    useEffect( () => {
        setSelected( selected.map( item => {
            return {
                ...item,
                selected: selectAll
            }
        } ) );
    }, [ selectAll ] )

    function isSelected ( key ) {
        return selected.find( item => item.id === key && item.selected );
    }

    function onSelectChange ( e, value, row ) {
        setSelected( selected.map( item => {
            if ( item.id === row.id ) {
                return {
                    ...item,
                    selected: !item.selected
                };
            }
            return item;
        } ) );
    }

    function deleteRow ( e, index ) {
        e.preventDefault();
        if ( window.confirm( "Are you sure you want to delete this data?" ) ) {
            setAjax( {
                ...ajax,
                data: ajax.data.filter( item => item.id !== index )
            } );
        }
    }

    function bulkAction ( e ) {
        e.preventDefault();
        if ( !bulk ) {
            return toast(
                <PNotify title="Warning" icon="fas fa-exclamation" text="Please choose one of actions." />,
                {
                    containerId: "default",
                    className: "notification-warning"
                }
            );
        }
        if ( bulk === 'delete' ) {
            if ( !selected.find( item => item.selected ) ) {
                return toast(
                    <PNotify title="Warning" icon="fas fa-exclamation" text="Choose at least one item." />,
                    {
                        containerId: "default",
                        className: "notification-warning"
                    }
                );
            }
            setAjax( {
                ...ajax,
                data: ajax.data.filter( media => selected.find( item => item.id === media.id && !item.selected ) )
            } );
        }
    }

    function searchUsers ( e ) {
        e.preventDefault();
        tableRef.current.wrappedInstance.filterColumn( { id: 'name' }, search );
    }

    function fetchData ( state ) {
        let filtered = [ ...state.filtered ];
        role !== '' && filtered.push( { id: 'role_id', value: parseInt( role ) } );
        setLoading( true );
        getUsers( state.page * state.pageSize, ( state.page + 1 ) * state.pageSize, filtered, state.sorted ).then( results => {
            setLoading( false );
            setAjax( {
                data: results.data,
                total: parseInt( results.total / state.pageSize ) + !( !( results.total % state.pageSize ) )
            } );
            setSelected( results.data.map( media => {
                return {
                    id: media.id,
                    selected: false
                }
            } ) );
            setSelectAll( false );
        } );
    }

    return (
        <>
            <Breadcrumb current={ 'Users' } paths={ [
                {
                    name: 'Home',
                    url: '/'
                }, {
                    name: 'Users',
                    url: '/users'
                }
            ] } />

            <Row>
                <Col>
                    <Form method="GET" action="#" onSubmit={ searchUsers }>
                        <Card className="card-modern">
                            <Card.Body>
                                <div className="datatables-header-footer-wrapper">
                                    <div className="datatable-header">
                                        <Row className="align-items-lg-center mb-3">
                                            <Col xl="auto" className="mb-2 mt-1 mb-xl-0">
                                                <Button
                                                    as={ Link }
                                                    to={ `${ process.env.PUBLIC_URL }/users/create` }
                                                    className="font-weight-semibold"
                                                    variant="primary"
                                                    size="md"
                                                >+ Add User</Button>
                                            </Col>
                                            <Col lg="auto" className="mb-2 mb-lg-0 ml-xl-auto pl-xl-1">
                                                <div className="d-flex align-items-lg-center flex-wrap">
                                                    <Form.Label className="d-none d-xl-block ws-nowrap mr-3 mb-0">Filter By:</Form.Label>
                                                    <Form.Control
                                                        as="select"
                                                        className="select-style-1 filter-by w-auto my-1 mr-2"
                                                        value={ role }
                                                        onChange={ e => setRole( e.target.value ) }
                                                    >
                                                        <option value="">All</option>
                                                        <option value="4">Vendor</option>
                                                        <option value="2">Customer</option>
                                                        <option value="7">Admin</option>
                                                    </Form.Control>
                                                    <Button type="submit" className="filter-btn my-1" variant="primary">Filter</Button>
                                                </div>
                                            </Col>
                                            <Col className="col-auto pl-lg-1">
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
                                        data={ ajax.data }
                                        loading={ loading }
                                        columns={ columns }
                                        pages={ ajax.total }
                                        pageSize={ 12 }
                                        manual
                                        onFetchData={ fetchData }
                                        selectAll={ selectAll }
                                        toggleAll={ () => setSelectAll( !selectAll ) }
                                        isSelected={ key => isSelected( key ) }
                                        toggleSelection={ onSelectChange }
                                        onChangeRef={ ref => setTableRef( ref ) }
                                    />

                                    <div className="datatable-footer">
                                        <Row className="align-items-center justify-content-between mt-3">
                                            <Col md="auto" className="mb-3 mb-lg-0">
                                                <div className="d-flex">
                                                    <Form.Control
                                                        as="select"
                                                        className="select-style-1 bulk-action w-auto mr-3"
                                                        value={ bulk }
                                                        onChange={ e => setBulk( e.target.value ) }
                                                        style={ { minWidth: "120px" } }
                                                    >
                                                        <option value="">Bulk Actions</option>
                                                        <option value="delete">Delete</option>
                                                    </Form.Control>
                                                    <Button
                                                        href="#bulk-action"
                                                        className="bulk-action-apply border font-weight-semibold text-color-dark text-3"
                                                        variant="light"
                                                        onClick={ bulkAction }
                                                    >Apply</Button>
                                                </div>
                                            </Col>
                                            <Col lg="auto" className="mb-3 mb-lg-0">
                                                <div className="pagination-wrapper d-flex justify-content-lg-end">
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Form>
                </Col>
            </Row>
        </>
    )
}