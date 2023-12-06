import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';

import Breadcrumb from '../../../common/breadcrumb';
import PtTable from '../../../features/elements/table';
import PNotify from '../../../features/elements/p-notify';

import { getAttributes } from '../../../../api';

export default function AttributesList () {
    const [ loading, setLoading ] = useState( true );
    const [ ajax, setAjax ] = useState( {
        data: [],
        total: 0
    } );
    const [ selectAll, setSelectAll ] = useState( false );
    const [ selected, setSelected ] = useState( [] );
    const [ bulk, setBulk ] = useState( '' );
    const [ name, setName ] = useState( '' );
    const [ slug, setSlug ] = useState( '' );
    const [ sortBy, setSortBy ] = useState( 'custom_ordering' );

    // Columns
    const columns = [ {
        id: 'name',
        Header: 'Name',
        sortable: true,
        accessor: d => { return { id: d.id, name: d.name } },
        Cell: row => (
            <Link to={ `${ process.env.PUBLIC_URL }/products/attributes/${ row.value.id }` }>
                <strong>{ row.value.name }</strong>
            </Link>
        )
    }, {
        Header: 'Slug',
        accessor: 'slug',
        sortable: true
    }, {
        Header: 'Order By',
        accessor: 'sort_by'
    }, {
        id: 'terms',
        Header: 'Terms',
        accessor: d => { return { id: d.id, terms: d.terms } },
        sortable: true,
        width: 240,
        style: {
            display: 'block',
            whiteSpace: 'normal'
        },
        Cell: row => (
            <>
                <div className="terms">{ row.value.terms.reduce( ( acc, cur, id, src ) => {
                    return acc + cur.name + ( id < src.length - 1 ? ', ' : '' );
                }, '' ) }</div>
                <Link to={ `${ process.env.PUBLIC_URL }/products/attributes/${ row.value.id }/terms` }>Configure Terms</Link>
            </>
        )
    }, {
        Header: 'Actions',
        accessor: 'id',
        className: 'actions',
        headerClassName: "justify-content-center",
        minWidth: 80,
        Cell: row => (
            <>
                <Link to={ `${ process.env.PUBLIC_URL }/products/attributes/${ row.value }` } className="on-default edit-row mr-2"><i className="fas fa-pencil-alt"></i></Link>
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
                data: ajax.data.filter( ( attr, id ) => id !== index )
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

    function fetchData ( state ) {
        setLoading( true );
        getAttributes( state.page * state.pageSize, ( state.page + 1 ) * state.pageSize )
            .then( results => {
                setLoading( false );
                setAjax( {
                    data: results.data,
                    total: parseInt( results.total / state.pageSize ) + !( !( results.total % state.pageSize ) )
                } );
                setSelected( results.data.map( attr => {
                    return {
                        id: attr.id,
                        selected: false
                    }
                } ) );
                setSelectAll( false );
            } );
    }

    function addAttribute ( e ) {
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
                    sort_by: sortBy,
                    terms: []
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
        toast(
            <PNotify title="Success" icon="fas fa-check" text="New Attribute added successfully." />,
            {
                containerId: "default",
                className: "notification-success"
            }
        );
    }

    return (
        <>
            <Breadcrumb current="Product Attributes" paths={ [
                {
                    name: 'Home',
                    url: '/'
                },
                {
                    name: 'Products',
                    url: '/products'
                }
            ] } />

            <Row>
                <Col xl={ 4 }>
                    <Form method="post" action="#" onSubmit={ addAttribute }>
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
                                    <span className="help-block">Name for the attribute.</span>
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
                                    <span className="help-block">Unique slug/reference for the attribute.</span>
                                </Form.Group>
                                <Form.Group className="align-items-center">
                                    <Form.Label className="control-label">Default sort order</Form.Label>
                                    <Form.Control
                                        as="select"
                                        className="form-control-modern w-auto"
                                        name="sort_by"
                                        value={ sortBy }
                                        onChange={ e => setSortBy( e.target.value ) }
                                    >
                                        <option value="custom_ordering">Custom Ordering</option>
                                        <option value="name">Name</option>
                                        <option value="name_numeric">Name (numeric)</option>
                                        <option value="term_id">Term ID</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Button type="submit" variant="primary">Add attribute</Button>
                                </Form.Group>
                            </Card.Body>
                        </Card>
                    </Form>
                </Col>

                <Col xl={ 8 } className="mt-xl-0 mt-3">
                    <Card className="card-modern">
                        <Card.Body>
                            <div className="datatables-header-footer-wrapper">
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
                                />

                                <div className="datatable-footer">
                                    <Row className="align-items-center justify-content-between mt-3">
                                        <Col md="auto" className="mb-3 mb-lg-0">
                                            <div className="d-flex align-items-center">
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
                </Col>
            </Row>
        </>
    )
}