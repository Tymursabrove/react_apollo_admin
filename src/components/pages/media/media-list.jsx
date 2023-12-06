import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Card, Row, Col, InputGroup } from 'react-bootstrap';
import { toast } from 'react-toastify';

import Breadcrumb from '../../common/breadcrumb';
import PtTable from '../../features/elements/table';
import PNotify from '../../features/elements/p-notify';

import { getMedia } from '../../../api';

import { getCroppedImageUrl } from '../../../utils';

function MediaList () {
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

    // Columns
    const columns = [ {
        id: 'name',
        Header: 'File',
        sortable: true,
        className: "d-block ws-nowrap",
        accessor: d => { return { id: d.id, url: d.copy_link, alt: d.alt_text ? d.alt_text : 'thumb', name: d.name } },
        Cell: row => (
            <>
                <Link to={ `${ process.env.PUBLIC_URL }/media/${ row.value.id }` }>
                    <img
                        className="mr-3"
                        src={ `${ process.env.PUBLIC_URL }/mock-server/images/` + getCroppedImageUrl( row.value.url, 100 ) }
                        alt={ row.alt }
                        width={ 60 }
                        height={ 60 }
                    />
                </Link>
                <span>{ row.value.name }</span>
            </>
        )
    }, {
        Header: 'Author',
        accessor: 'uploaded_by',
        sortable: true
    }, {
        Header: 'Type',
        accessor: 'type',
        width: 100
    }, {
        Header: 'Size',
        accessor: 'size',
        sortable: true,
        width: 80,
        Cell: row => ( row.value / 1024 ).toFixed( 2 ) + 'Kb'
    }, {
        Header: 'Date',
        sortable: true,
        width: 160,
        accessor: 'created_at',
    }, {
        Header: 'Actions',
        accessor: 'id',
        className: 'actions',
        headerClassName: "justify-content-center",
        width: 100,
        Cell: row => (
            <>
                <Link to={ `${ process.env.PUBLIC_URL }/media/${ row.value }` } className="on-default edit-row mr-2"><i className="fas fa-pencil-alt"></i></Link>
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

    function selectAllItems ( e ) {
        e.preventDefault();
        setSelectAll( !selectAll );
    }

    function deleteSelectedItems ( e ) {
        e.preventDefault();
        if ( !ajax.data.find( media => media.selected ) ) {
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

    function deleteRow ( e, index ) {
        e.preventDefault();
        if ( window.confirm( "Are you sure you want to delete this data?" ) ) {
            setAjax( {
                ...ajax,
                data: ajax.data.filter( ( media, id ) => id !== index )
            } );
        }
    }

    function fetchData ( state ) {
        setLoading( true );
        getMedia( state.page * state.pageSize, ( state.page + 1 ) * state.pageSize, state.filtered, state.sorted ).then( results => {
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

    function filterByType ( e ) {
        tableRef.current.wrappedInstance.filterColumn( { id: 'type' }, e.target.value );
    }

    function searchMedia ( e ) {
        e.preventDefault();
        tableRef.current.wrappedInstance.filterColumn( { id: 'name' }, search );
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

    return (
        <>
            <Breadcrumb current="Gallery List" paths={ [ {
                url: '/',
                name: 'Home'
            }, {
                url: '/media',
                name: 'Media'
            } ] } />

            <section className="media-gallery">
                <Form action="#" method="get" onSubmit={ searchMedia }>
                    <div className="inner-body mg-main ml-0">
                        <div className="inner-toolbar clearfix">
                            <ul>
                                <li>
                                    <Link to={ `${ process.env.PUBLIC_URL }/media/list` } className="active"><i className="fas fa-th-list"></i></Link>
                                </li>
                                <li>
                                    <Link to={ `${ process.env.PUBLIC_URL }/media` }><i className="fas fa-th-large"></i></Link>
                                </li>
                                <li>
                                    <a href="#no" onClick={ selectAllItems }>
                                        <i className="fas fa-check-square mr-1"></i>
                                        <span>{ selectAll ? 'Deselect All' : 'Select All' }</span>
                                    </a>
                                </li>
                                <li>
                                    <Link to={ `${ process.env.PUBLIC_URL }/media/create` }><i className="fas fa-upload mr-1"></i> Upload</Link>
                                </li>
                                <li className="pr-0">
                                    <a href="#no" onClick={ deleteSelectedItems }><i className="far fa-trash-alt mr-1"></i> Delete</a>
                                </li>
                                <li className="right d-flex align-items-center">
                                    <label className="ws-nowrap mr-3 mb-0">Filter:</label>
                                    <Form.Control
                                        as="select"
                                        className="select-style-1 filter-by w-auto"
                                        size="sm"
                                        onChange={ filterByType }
                                    >
                                        <option value="">All</option>
                                        <option value="image">Images</option>
                                        <option value="stream">Videos</option>
                                    </Form.Control>
                                </li>
                            </ul>
                        </div>

                        <div className="mg-files">
                            <Card className="card-modern">
                                <Card.Body>
                                    <div className="datatables-header-footer-wrapper">
                                        <div className="datatable-header">
                                            <Row className="align-items-center mb-3 justify-content-end">
                                                <Col lg="auto" className="col-12 pl-lg-1">
                                                    <div className="search search-style-1 mx-lg-auto">
                                                        <InputGroup>
                                                            <Form.Control
                                                                type="text"
                                                                className="search-term"
                                                                value={ search }
                                                                placeholder="Search"
                                                                onChange={ e => setSearch( e.target.value ) }
                                                            />
                                                            <InputGroup.Append>
                                                                <Button
                                                                    type="submit"
                                                                    variant="default"
                                                                ><i className="bx bx-search"></i></Button>
                                                            </InputGroup.Append>
                                                        </InputGroup>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>

                                        <PtTable
                                            className="table table-ecommerce-simple table-media -striped mb-0"
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
                        </div>
                    </div>
                </Form>
            </section>
        </>
    )
}

export default MediaList;