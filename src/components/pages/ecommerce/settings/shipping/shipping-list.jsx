import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Form, Button, InputGroup } from 'react-bootstrap';
import { toast } from 'react-toastify';

import Breadcrumb from '../../../../common/breadcrumb';
import PtTable from '../../../../features/elements/table';
import PNotify from '../../../../features/elements/p-notify';

import { withCardActions } from '../../../../hoc';

import { getZones } from '../../../../../api';
import PtToolTip from '../../../../features/elements/tooltip';

const CardWithActions = withCardActions( Card );

export default function ShippingList () {
    const [ loading, setLoading ] = useState( true );
    const [ ajax, setAjax ] = useState( {
        data: [],
        total: 0
    } );

    // Variables
    const [ search, setSearch ] = useState( '' );
    const [ filterBy, setFilterBy ] = useState( '*' );

    const [ selectAll, setSelectAll ] = useState( false );
    const [ tableRef, setTableRef ] = useState( null );
    const [ selected, setSelected ] = useState( [] );
    const [ bulk, setBulk ] = useState( '' );

    // Columns
    const columns = [ {
        Header: 'Name',
        accessor: 'name',
        sortable: true,
        Cell: row => (
            <Link to={ `${ process.env.PUBLIC_URL }/ecommerce/settings/shipping/${ row.original.id }` }>
                <strong>{ row.value }</strong>
            </Link>
        )
    }, {
        Header: 'Region(s)',
        accessor: 'shipping_locations',
        Cell: row => row.value.map( location => location.name ).join( ', ' )
    }, {
        Header: 'Shipping Method',
        accessor: 'shipping_zone_methods',
        Cell: row => row.value.map( method => method.name ).join( ', ' )
    }, {
        Header: 'Actions',
        accessor: 'id',
        className: 'actions',
        headerClassName: "justify-content-center",
        style: {
            width: 'auto'
        },
        minWidth: 60,
        Cell: row => (
            <>
                <Link to={ `${ process.env.PUBLIC_URL }/ecommerce/settings/shipping/${ row.value }` } className="on-default edit-row mr-2"><i className="fas fa-pencil-alt"></i></Link>
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
                data: ajax.data.filter( ( term, id ) => id !== index )
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

    function searchShipping ( e ) {
        e.preventDefault();
        tableRef.current.wrappedInstance.fireFetchData();
    }

    function fetchData ( state ) {
        setLoading( true );
        getZones( state.page * state.pageSize, ( state.page + 1 ) * state.pageSize, [ { id: filterBy, value: search } ], state.sorted )
            .then( results => {
                setLoading( false );
                setAjax( {
                    data: results.data,
                    total: parseInt( results.total / state.pageSize ) + !( !( results.total % state.pageSize ) )
                } );
                setSelected( results.data.map( term => {
                    return {
                        id: term.id,
                        selected: false
                    }
                } ) );
                setSelectAll( false );
            } );
    }

    function saveSettings ( e ) {
        e.preventDefault();
        toast(
            <PNotify title="Success" icon="fas fa-check" text="Settings saved successfully." />,
            {
                containerId: "default",
                className: "notification-success"
            }
        );
    }

    return (
        <>
            <Breadcrumb current="Shipping Settings" paths={ [
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
                    <Form className="ecommerce-setting-form" method="post" onSubmit={ saveSettings }>
                        <CardWithActions className="card-modern shadow-none" dismissible={ false }>
                            <Card.Header>
                                <Card.Title>Shipping options</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Form.Group as={ Row } className="align-items-center">
                                    <Col as={ Form.Label } lg={ 5 } xl={ 4 } className="control-label text-lg-right mb-lg-0">Calculations</Col>
                                    <Col lg={ 7 } xl={ 8 }>
                                        <Form.Check
                                            id="enable_on_cart_page"
                                            className="my-2"
                                            custom
                                            label="Enable the shipping calculator on the cart page"
                                        />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={ Row }>
                                    <Col as={ Form.Label } lg={ 5 } xl={ 4 } className="control-label text-lg-right mt-2 pt-1 mb-lg-0">Shipping destination <PtToolTip placement="top" trigger="hover" tooltip="This shows which address is used by default" /></Col>
                                    <Col lg={ 7 } xl={ 8 }>
                                        <Form.Check
                                            type="radio"
                                            id="customer_shipping"
                                            name="default_shipping_address"
                                            className="my-2"
                                            custom
                                            label="Default to customer shipping address"
                                            defaultChecked
                                        />
                                        <Form.Check
                                            type="radio"
                                            id="customer_billing"
                                            name="default_shipping_address"
                                            className="my-2"
                                            custom
                                            label="Default to customer billing address"
                                        />
                                        <Form.Check
                                            type="radio"
                                            id="force_billing"
                                            name="default_shipping_address"
                                            className="my-2"
                                            custom
                                            label="Force shipping to the customer billing address"
                                        />
                                    </Col>
                                </Form.Group>
                            </Card.Body>
                            <Card.Footer className="text-right">
                                <Button type="submit" variant="primary">Save changes</Button>
                            </Card.Footer>
                        </CardWithActions>
                    </Form>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Form method="get" onSubmit={ searchShipping }>
                        <Card className="card-modern">
                            <Card.Body>
                                <div className="datatables-header-footer-wrapper">
                                    <div className="datatable-header">
                                        <Row className="align-items-center mb-3">
                                            <Col lg="auto" className="col-lg-auto mb-3 mb-lg-0">
                                                <Button
                                                    as={ Link }
                                                    to={ `${ process.env.PUBLIC_URL }/ecommerce/settings/shipping/create` }
                                                    className="font-weight-semibold"
                                                    variant="primary"
                                                    size="md"
                                                >+ Add Zone</Button>
                                            </Col>
                                            <Col sm={ 6 } lg="auto" className="ml-lg-auto mb-4 mb-lg-0">
                                                <div className="d-flex align-items-lg-center flex-column flex-lg-row">
                                                    <Form.Label className="ws-nowrap mr-3 mb-0">Filter By:</Form.Label>
                                                    <Form.Control
                                                        as="select"
                                                        className="select-style-1 filter-by"
                                                        value={ filterBy }
                                                        onChange={ e => setFilterBy( e.target.value ) }
                                                    >
                                                        <option value="*">All</option>
                                                        <option value="name">Zone</option>
                                                        <option value="regions">Region</option>
                                                        <option value="methods">Shipping Methods</option>
                                                    </Form.Control>
                                                </div>
                                            </Col>
                                            <Col sm={ 6 } lg="auto" className="pl-lg-1">
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