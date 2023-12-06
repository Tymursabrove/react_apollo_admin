import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Form, Button, InputGroup } from 'react-bootstrap';
import { toast } from 'react-toastify';

import Breadcrumb from '../../../common/breadcrumb';
import PtTable from '../../../features/elements/table';
import PNotify from '../../../features/elements/p-notify';

import { getAttributeTerms } from '../../../../api';

export default function TermsList ( props ) {
    const attrId = parseInt( props.match.params.id );
    const [ loading, setLoading ] = useState( true );
    const [ ajax, setAjax ] = useState( {
        data: [],
        total: 0
    } );
    const [ selectAll, setSelectAll ] = useState( false );
    const [ search, setSearch ] = useState( '' );
    const [ tableRef, setTableRef ] = useState( null );
    const [ selected, setSelected ] = useState( [] );
    const [ bulk, setBulk ] = useState( '' );
    const [ name, setName ] = useState( '' );
    const [ slug, setSlug ] = useState( '' );
    const [ desc, setDesc ] = useState( '' );

    // Columns
    const columns = [ {
        id: 'name',
        Header: 'Name',
        sortable: true,
        accessor: d => { return { id: d.id, name: d.name } },
        Cell: row => (
            <Link to={ `${ process.env.PUBLIC_URL }/products/attributes/${ attrId }/terms/${ row.value.id }` }>
                { row.value.name }
            </Link>
        )
    }, {
        Header: 'Slug',
        accessor: 'slug',
        sortable: true
    }, {
        Header: 'Description',
        accessor: 'description',
        style: {
            width: '45%'
        }
    }, {
        Header: 'Count',
        accessor: 'count',
        sortable: true,
        style: {
            width: '12%'
        }
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
                <Link to={ `${ process.env.PUBLIC_URL }/products/attributes/${ attrId }/terms/${ row.value }` } className="on-default edit-row mr-2"><i className="fas fa-pencil-alt"></i></Link>
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

    function searchTerms ( e ) {
        e.preventDefault();
        tableRef.current.wrappedInstance.filterColumn( { id: 'name' }, search );
    }

    function fetchData ( state ) {
        setLoading( true );
        getAttributeTerms( attrId, state.page * state.pageSize, ( state.page + 1 ) * state.pageSize, state.filtered, state.sorted )
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

    function addTerm ( e ) {
        e.preventDefault();
        let newId = ajax.total + 1 + parseInt( Math.random() * 100 );
        setAjax( {
            ...ajax,
            data: [
                ...ajax.data,
                {
                    id: newId,
                    name: name,
                    slug: slug,
                    description: desc,
                    count: 0
                }
            ]
        } );
        setSelected( [
            ...selected,
            {
                id: newId,
                selected: false
            }
        ] );
        setName( '' );
        setSlug( '' );
        setDesc( '' );
        toast(
            <PNotify title="Success" icon="fas fa-check" text="New term added successfully." />,
            {
                containerId: "default",
                className: "notification-success"
            }
        );
    }

    return (
        <>
            <Breadcrumb current="Product Attribute" paths={ [
                {
                    name: 'Home',
                    url: '/'
                }, {
                    name: 'Products',
                    url: '/products'
                }, {
                    name: 'Attributes',
                    url: '/products/attributes'
                }
            ] } />

            <Row>
                <Col xl={ 4 }>
                    <Form method="post" action="#" onSubmit={ addTerm }>
                        <Card className="card-modern">
                            <Card.Body>
                                <Form.Group className="align-items-center">
                                    <Form.Label className="control-label">Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        maxLength="20"
                                        className="form-control-modern"
                                        name="name"
                                        value={ name }
                                        onChange={ e => setName( e.target.value ) }
                                        required
                                    />
                                    <span className="help-block">Name for the term.</span>
                                </Form.Group>
                                <Form.Group className="align-items-center">
                                    <Form.Label className="control-label">Slug</Form.Label>
                                    <Form.Control
                                        type="text"
                                        maxLength="20"
                                        className="form-control-modern"
                                        name="slug"
                                        value={ slug }
                                        onChange={ e => setSlug( e.target.value ) }
                                    />
                                    <span className="help-block">Unique slug/reference for the term.</span>
                                </Form.Group>
                                <Form.Group className="align-items-center">
                                    <Form.Label className="control-label">Description</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        className="form-control-modern"
                                        placeholder="Enter description of term"
                                        name="description"
                                        rows="5"
                                        maxLength="200"
                                        value={ desc }
                                        onChange={ e => setDesc( e.target.value ) }
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Button type="submit" variant="primary">Add Term</Button>
                                </Form.Group>
                            </Card.Body>
                        </Card>
                    </Form>
                </Col>

                <Col xl={ 8 } className="mt-xl-0 mt-3">
                    <Form id="tags-list-form" method="get" onSubmit={ searchTerms }>
                        <Card className="card-modern">
                            <Card.Body>
                                <div className="datatables-header-footer-wrapper">
                                    <div className="datatable-header">
                                        <Row className="align-items-center mb-3">
                                            <Col sm="auto" className="col ml-auto pl-lg-1">
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