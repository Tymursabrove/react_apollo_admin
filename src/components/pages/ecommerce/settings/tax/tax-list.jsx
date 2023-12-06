import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Button, Form, InputGroup } from 'react-bootstrap';
import { toast } from 'react-toastify';

import Breadcrumb from '../../../../common/breadcrumb';
import PNotify from '../../../../features/elements/p-notify';
import PtTable from '../../../../features/elements/table';
import PtToolTip from '../../../../features/elements/tooltip';

import { withCardActions } from '../../../../hoc';

import { getTaxTypes } from '../../../../../api';

const CardWithActions = withCardActions( Card );

export default function TaxList () {
    const [ loading, setLoading ] = useState( true );
    const [ ajax, setAjax ] = useState( {
        data: [],
        total: 0
    } );
    const [ taxRates, setTaxRates ] = useState( [] );

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
            <Link to={ `${ process.env.PUBLIC_URL }/ecommerce/settings/tax/${ row.original.id }` }>
                <strong>{ row.value }</strong>
            </Link>
        )
    }, {
        Header: 'Description',
        accessor: 'description'
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
                <Link to={ `${ process.env.PUBLIC_URL }/ecommerce/settings/tax/${ row.value }` } className="on-default edit-row mr-2"><i className="fas fa-pencil-alt"></i></Link>
                <a href="#del" className="on-default remove-row" onClick={ e => deleteRow( e, row.index ) }><i className="far fa-trash-alt"></i></a>
            </>
        )
    } ];

    useEffect( () => {
        getTaxTypes().then( response => {
            setTaxRates( response.data );
        } );
    }, [] );

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
        if ( bulk === 'delete' ) {
            setAjax( {
                ...ajax,
                data: ajax.data.filter( term => selected.find( item => item.id === term.id && !item.selected ) )
            } );
        }
    }

    function searchTax ( e ) {
        e.preventDefault();
        tableRef.current.wrappedInstance.fireFetchData();
    }

    function fetchData ( state ) {
        setLoading( true );
        getTaxTypes( state.page * state.pageSize, ( state.page + 1 ) * state.pageSize, [ { id: filterBy, value: search } ], state.sorted )
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
            <Breadcrumb current="Tax Settings" paths={ [
                {
                    name: 'Home',
                    url: '/'
                }, {
                    name: 'Ecommerce',
                    url: '/ecommerce'
                }
            ] } />

            <Form className="ecommerce-setting-form pb-5" method="post" onSubmit={ saveSettings }>
                <CardWithActions className="card-modern" dismissible={ false }>
                    <Card.Header>
                        <Card.Title>Tax options</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Form.Group as={ Row } className="align-items-center">
                            <Col as={ Form.Label } lg={ 5 } xl={ 4 } className="control-label text-lg-right mb-lg-0">
                                Calculate tax based on <PtToolTip placement="top" trigger="hover" tooltip="This option determines which address is used to calculate tax." />
                            </Col>
                            <Col lg={ 7 } xl={ 8 }>
                                <Form.Control as="select" className="form-control-modern">
                                    <option value="shipping">Customer shipping address</option>
                                    <option value="billing">Customer billing address</option>
                                    <option value="base">Shop base address</option>
                                </Form.Control>
                            </Col>
                        </Form.Group>
                        <Form.Group as={ Row } className="align-items-center">
                            <Col as={ Form.Label } lg={ 5 } xl={ 4 } className="control-label text-lg-right mb-lg-0">
                                Shipping tax class <PtToolTip placement="top" trigger="hover" tooltip="Optionally control which tax class shipping gets, or leave it so shipping tax is based on the cart items themselves." />
                            </Col>
                            <Col lg={ 7 } xl={ 8 }>
                                <Form.Control as="select" className="form-control-modern">
                                    <option value="cart_item">Shipping tax class based on cart items.</option>
                                    { taxRates.map( ( taxRate, index ) => (
                                        <option key={ `taxRate-${ index }` } value={ taxRate.id }>{ taxRate.name }</option>
                                    ) ) }
                                </Form.Control>
                            </Col>
                        </Form.Group>
                        <Form.Group as={ Row } className="align-items-center">
                            <Col as={ Form.Label } lg={ 5 } xl={ 4 } className="control-label text-lg-right mb-lg-0">Rounding</Col>
                            <Col lg={ 7 } xl={ 8 }>
                                <Form.Check
                                    custom
                                    id="tax_round"
                                    className="my-2"
                                    label="Round tax at subtotal level, instead of rounding per line"
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={ Row } className="align-items-center">
                            <Col as={ Form.Label } lg={ 5 } xl={ 4 } className="control-label text-lg-right mb-lg-0">Display prices during cart and checkout</Col>
                            <Col lg={ 7 } xl={ 8 }>
                                <Form.Control as="select" className="form-control-modern">
                                    <option value="include">Including tax</option>
                                    <option value="exclude">Excluding tax</option>
                                </Form.Control>
                            </Col>
                        </Form.Group>
                        <Form.Group as={ Row } className="align-items-center">
                            <Col as={ Form.Label } lg={ 5 } xl={ 4 } className="control-label text-lg-right mb-lg-0">Price display suffix</Col>
                            <Col lg={ 7 } xl={ 8 }>
                                <Form.Control
                                    type="text"
                                    maxLength="20"
                                    className="form-control-modern"
                                />
                            </Col>
                        </Form.Group>
                    </Card.Body>
                    <Card.Footer className="text-right">
                        <Button type="submit" variant="primary">Save changes</Button>
                    </Card.Footer>
                </CardWithActions>
            </Form>

            <Form className="ecommerce-tax-class-form" method="get" onSubmit={ searchTax }>
                <Card className="card-modern">
                    <Card.Body>
                        <div className="datatables-header-footer-wrapper">
                            <div className="datatable-header">
                                <Row className="align-items-center mb-3">
                                    <Col lg="auto" className="col-lg-auto mb-3 mb-lg-0">
                                        <Button
                                            as={ Link }
                                            to={ `${ process.env.PUBLIC_URL }/ecommerce/settings/tax/create` }
                                            className="font-weight-semibold"
                                            variant="primary"
                                            size="md"
                                        >+ Add Tax Class</Button>
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
                                                <option value="name">Tax Class</option>
                                                <option value="description">Description</option>
                                            </Form.Control>
                                        </div>
                                    </Col>
                                    <Col sm={ 6 } lg="auto" className="col-sm-6 col-lg-auto pl-lg-1">
                                        <div className="search search-style-1 mx-lg-auto w-auto">
                                            <InputGroup>
                                                <Form.Control
                                                    type="text"
                                                    className="search-term"
                                                    name="search-term"
                                                    id="search-term"
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
                                pageSize={ 5 }
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
        </>
    )
}