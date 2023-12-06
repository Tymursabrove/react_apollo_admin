import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Form, Button, InputGroup } from 'react-bootstrap';
import { toast } from 'react-toastify';

import Breadcrumb from '../../../common/breadcrumb';
import PtTable from '../../../features/elements/table';
import PNotify from '../../../features/elements/p-notify';

import { getCoupons } from '../../../../api';

export default function CouponList () {
    const [ loading, setLoading ] = useState( true );
    const [ ajax, setAjax ] = useState( {
        data: [],
        total: 0
    } );

    const [ search, setSearch ] = useState( '' );
    const [ type, setType ] = useState( '' );

    const [ selectAll, setSelectAll ] = useState( false );
    const [ tableRef, setTableRef ] = useState( null );
    const [ selected, setSelected ] = useState( [] );
    const [ bulk, setBulk ] = useState( '' );


    // Columns
    const columns = [ {
        Header: 'Code',
        accessor: 'code',
        Cell: row => (
            <Link to={ `${ process.env.PUBLIC_URL }/ecommerce/coupons/${ row.original.id }` }>
                { row.value }
            </Link>
        )
    }, {
        Header: 'Coupon type',
        accessor: 'discount_type',
        minWidth: 120,
        Cell: row => row.value === 'percent' ? 'Percentage Discount' : row.value === 'cart' ? 'Fixed Cart Discount' : 'Fixed Product Discount'
    }, {
        Header: 'Coupon amount',
        accessor: 'amount',
        minWidth: 135
    }, {
        Header: 'Description',
        accessor: 'description',
        minWidth: 110
    }, {
        Header: 'Products',
        accessor: 'products',
        Cell: row => (
            <>
                { row.value.map( ( product, index ) => (
                    <>
                        <Link to={ `${ process.env.PUBLIC_URL }/products/${ product.id }` }><strong>{ product.name }</strong></Link>
                        { index < row.value.length - 1 ? ', ' : '' }
                    </>
                ) ) }
            </>
        )
    }, {
        Header: 'Usage / Limit',
        id: 'usage',
        minWidth: 120,
        accessor: d => { return { usage: d.usage, limit: d.limit_per_coupon } },
        Cell: row => `${ row.value.usage } / ${ row.value.limit ? row.value.limit : '∞' }`
    }, {
        Header: 'Expiry Date',
        sortable: true,
        accessor: 'expiry_date',
        minWidth: 120
    }, {
        Header: 'Actions',
        accessor: 'id',
        className: 'actions',
        headerClassName: "justify-content-center",
        style: {
            width: 'auto'
        },
        minWidth: 75,
        Cell: row => (
            <>
                <Link to={ `${ process.env.PUBLIC_URL }/ecommerce/coupons/${ row.value }` } className="on-default edit-row mr-2"><i className="fas fa-pencil-alt"></i></Link>
                <a href="#del" className="on-default remove-row" onClick={ e => deleteRow( e, row.index ) }><i className="far fa-trash-alt"></i></a>
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
                data: ajax.data.filter( ( media, id ) => id !== index )
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

    function searchCoupons ( e ) {
        e.preventDefault();
        tableRef.current.wrappedInstance.filterColumn( { id: 'code' }, search );
    }

    function fetchData ( state ) {
        let filtered = [ ...state.filtered ];
        type !== '' && filtered.push( { id: 'discount_type', value: type } );
        setLoading( true );
        getCoupons( state.page * state.pageSize, ( state.page + 1 ) * state.pageSize, filtered, state.sorted )
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

    return (
        <>
            <Breadcrumb current="All Coupons" paths={ [ { name: 'Home', url: '/' }, { name: 'Ecommerce', url: '/ecommerce' } ] } />

            <Row>
                <Col>
                    <Form method="get" onSubmit={ searchCoupons }>
                        <Card className="card-modern">
                            <Card.Body>
                                <div className="datatables-header-footer-wrapper">
                                    <div className="datatable-header">
                                        <Row className="align-items-center mb-3">
                                            <Col xl="auto" className="mb-2 mt-1 mb-xl-0">
                                                <Button
                                                    as={ Link }
                                                    to={ `${ process.env.PUBLIC_URL }/ecommerce/coupons/create` }
                                                    className="font-weight-semibold"
                                                    variant="primary"
                                                    size="md"
                                                >+ Add</Button>
                                            </Col>
                                            <Col lg="auto" className="mb-2 mb-lg-0 ml-xl-auto pl-xl-1">
                                                <div className="d-flex align-items-lg-center flex-wrap">
                                                    <Form.Label className="d-none d-xl-block ws-nowrap mr-3 mb-0">Filter By:</Form.Label>
                                                    <Form.Control
                                                        as="select"
                                                        className="select-style-1 filter-by w-auto my-1 mr-2"
                                                        value={ type }
                                                        onChange={ e => setType( e.target.value ) }
                                                    >
                                                        <option value="">All Types</option>
                                                        <option value="percent">Percent Discount</option>
                                                        <option value="cart">Fixed Cart Discount</option>
                                                        <option value="product">Fixed Product Discount</option>
                                                    </Form.Control>
                                                    <Button
                                                        type="submit"
                                                        className="btn btn-primary filter-btn my-1"
                                                        variant="primary"
                                                    >Filter</Button>
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