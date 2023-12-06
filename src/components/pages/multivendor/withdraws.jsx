import React, { useState, useEffect } from 'react';
import { Row, Col, Form, Card, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';

import Breadcrumb from '../../common/breadcrumb';
import PtTable from '../../features/elements/table';
import PNotify from '../../features/elements/p-notify';

import { getWithdraws } from '../../../api';

export default function Withdraws () {
    const [ loading, setLoading ] = useState( true );
    const [ ajax, setAjax ] = useState( {
        data: [],
        total: 0
    } );

    // Variables
    const [ status, setStatus ] = useState( '' );

    const [ selectAll, setSelectAll ] = useState( false );
    const [ tableRef, setTableRef ] = useState( null );
    const [ selected, setSelected ] = useState( [] );
    const [ bulk, setBulk ] = useState( '' );

    // Columns
    const columns = [ {
        Header: 'User Name',
        id: 'name',
        accessor: d => ( d.user.first_name ? d.user.first_name : '' ) + ' ' + ( d.user.last_name ? d.user.last_name : '' ),
        width: 150,
    }, {
        Header: 'Amount',
        accessor: 'amount'
    }, {
        Header: 'Paypal Email',
        accessor: 'user.vendor.paypal_email'
    }, {
        Header: 'Date',
        accessor: 'updated_at'
    }, {
        Header: 'Status',
        accessor: 'status',
        Cell: row => (
            <div className={ `ecommerce-status ${ row.value === 'approved' ? 'completed' : row.value }` }>{ row.value }</div>
        )
    }, {
        Header: 'Actions',
        accessor: 'id',
        className: 'actions',
        headerClassName: "justify-content-center",
        width: 100,
        Cell: row => (
            <>
                { row.original.status === 'processing' ?
                    <>
                        <a href="#cancel" className="on-default cancel-withdraw mr-1" title="Cancel" onClick={ e => statusChange( e, row.original.id, 'cancelled' ) }><i className="fas fa-reply"></i></a>
                        <a href="#approve" className="on-default approve-withdraw mr-1" title="Approve" onClick={ e => statusChange( e, row.original.id, 'approved' ) }><i className="fas fa-check"></i></a>
                    </>
                    : '' }
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

    function searchWithdraws ( e ) {
        e.preventDefault();
        tableRef.current.wrappedInstance.filterColumn( { id: 'status' }, status );
    }

    function fetchData ( state ) {
        setLoading( true );
        getWithdraws( state.page * state.pageSize, ( state.page + 1 ) * state.pageSize, state.filtered, state.sorted )
            .then( results => {
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

    function statusChange ( e, index, status ) {
        e.preventDefault();
        setAjax( {
            ...ajax,
            data: ajax.data.map( item => {
                if ( item.id === index ) item.status = status;
                return item;
            } )
        } );
    }

    return (
        <>
            <Breadcrumb current="Withdraws" paths={ [
                {
                    name: 'Home',
                    url: '/'
                }
            ] } />

            <Row>
                <Col>
                    <Form method="get" onSubmit={ searchWithdraws }>
                        <Card className="card-modern">
                            <Card.Body>
                                <div className="datatables-header-footer-wrapper">
                                    <div className="datatable-header">
                                        <Row className="align-items-center mb-4">
                                            <Col lg="auto" className="mb-2 mb-lg-0 ml-xl-auto pl-xl-1">
                                                <div className="d-flex align-items-lg-center flex-wrap">
                                                    <Form.Label className="d-none d-xl-block ws-nowrap mr-3 mb-0">Filter By:</Form.Label>
                                                    <Form.Control
                                                        as="select"
                                                        className="select-style-1 filter-by w-auto my-1 mr-2"
                                                        value={ status }
                                                        onChange={ e => setStatus( e.target.value ) }
                                                    >
                                                        <option value="">All</option>
                                                        <option value="approved">Approved</option>
                                                        <option value="cancelled">Cancelled</option>
                                                        <option value="processing">Processing</option>
                                                    </Form.Control>
                                                    <Button type="submit" className="filter-btn my-1" variant="primary">Filter</Button>
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