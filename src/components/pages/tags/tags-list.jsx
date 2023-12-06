import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Form, Button, InputGroup } from 'react-bootstrap';
import { toast } from 'react-toastify';

import Breadcrumb from '../../common/breadcrumb';
import PtTable from '../../features/elements/table';
import PNotify from '../../features/elements/p-notify';

import { createTag, getTags, deleteTag } from '../../../api';


export default function TagsList ( props ) {
    const type = props.type;
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
            <Link to={ `${ process.env.PUBLIC_URL }/tags/${ row.value.id }` }>
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
        width: 100,
        Cell: row => (
            <>
                <Link to={ `${ process.env.PUBLIC_URL }/tags/${ row.value }` } className="on-default edit-row mr-2"><i className="fas fa-pencil-alt"></i></Link>
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
        //console.log("deleteRow", ajax);

        if (window.confirm("Are you sure you want to delete this data?")) {
            const id = ajax.data.filter((media, id) => id === index)[0].id;
            deleteTag(id).then((result) => {
                if (result.data.errors) { 
                    toast(
                        <PNotify title="Failed" icon="fas fa-check" text={ result.data.errors[0].message} />,
                        {
                            containerId: "default",
                            className: "notification-failed"
                        }
                    );
                } else {
                    toast(
                        <PNotify title="Success" icon="fas fa-check" text="Tag deleted successfully." />,
                        {
                            containerId: "default",
                            className: "notification-success"
                        }
                    );
                } 
            }).catch(err => console.log(err));
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

    function searchTags ( e ) {
        e.preventDefault();
        tableRef.current.wrappedInstance.filterColumn( { id: 'name' }, search );
    }

    function fetchData ( state ) {
        setLoading( true );
        getTags( type, state.page * state.pageSize, ( state.page + 1 ) * state.pageSize, state.filtered, state.sorted )
            .then(results => {
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

    function addTag ( e ) {
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
        });
        console.log("addTag ajax", ajax);

        createTag({
                    id: newId,
                    name: name,
                    slug: slug,
                    description: desc,
                    type: "product",
                    created_at: new Date(),
                    updated_at: new Date(),
                    count: 0
        }).then((result) => {
            if (result.data.errors) { 
                toast(
                    <PNotify title="Failed" icon="fas fa-check" text={ result.data.errors[0].message} />,
                    {
                        containerId: "default",
                        className: "notification-failed"
                    }
                );
            } else {
                toast(
                    <PNotify title="Success" icon="fas fa-check" text="Tag created successfully." />,
                    {
                        containerId: "default",
                        className: "notification-success"
                    }
                );
            } 
        }).catch(err => console.log(err));
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
    }

    return (
        <>
            <Breadcrumb current={ `${ type === 'products' ? 'Product' : 'Posts' } tags` } paths={ [ { name: 'Home', url: '/' }, { name: type, url: '/' + type } ] } />

            <Row>
                <Col xl={ 4 }>
                    <Form method="post" action="#" onSubmit={ addTag }>
                        <Card className="card-modern">
                            <Card.Body>
                                <Form.Group className="form-group align-items-center">
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
                                    <span className="help-block">Name for the tag.</span>
                                </Form.Group>
                                <Form.Group className="form-group align-items-center">
                                    <Form.Label className="control-label">Slug</Form.Label>
                                    <Form.Control
                                        type="text"
                                        maxLength="20"
                                        className="form-control-modern"
                                        name="slug"
                                        value={ slug }
                                        onChange={ e => setSlug( e.target.value ) }
                                    />
                                    <span className="help-block">Unique slug/reference for the tag.</span>
                                </Form.Group>
                                <Form.Group className="form-group align-items-center">
                                    <Form.Label className="control-label">Description</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        className="form-control-modern"
                                        name="description"
                                        rows="5"
                                        maxLength="200"
                                        value={ desc }
                                        onChange={ e => setDesc( e.target.value ) }
                                    />
                                    <span className="help-block">Add description for the tag.</span>
                                </Form.Group>
                                <Form.Group>
                                    <Button type="submit" variant="primary">Add Tag</Button>
                                </Form.Group>
                            </Card.Body>
                        </Card>
                    </Form>
                </Col>

                <Col xl={ 8 } className="mt-xl-0 mt-3">
                    <Form id="tags-list-form" method="get" onSubmit={ searchTags }>
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