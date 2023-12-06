import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Form, Button, InputGroup } from 'react-bootstrap';
import { toast } from 'react-toastify';

import Breadcrumb from '../../../common/breadcrumb';
import PtTable from '../../../features/elements/table';
import PNotify from '../../../features/elements/p-notify';

import { getReplies } from '../../../../api';
import { removeXSSAttacks } from '../../../../utils';

export default function ReplyList () {
    const [ loading, setLoading ] = useState( true );
    const [ ajax, setAjax ] = useState( {
        data: [],
        total: 0
    } );

    // Filter Variables
    const [ search, setSearch ] = useState( '' );
    const [ author, setAuthor ] = useState( '' );

    const [ selectAll, setSelectAll ] = useState( false );
    const [ tableRef, setTableRef ] = useState( null );
    const [ selected, setSelected ] = useState( [] );
    const [ bulk, setBulk ] = useState( '' );
    const [ expanded, setExpanded ] = useState( {} );
    const [ replyContent, setReplyContent ] = useState( '' );

    // Columns
    const columns = [ {
        id: 'author',
        Header: 'Author',
        sortable: true,
        accessor: d => { return { name: d.author_name, email: d.author_email } },
        className: 'd-block',
        Cell: row => (
            <>
                <div>{ row.value.name }</div>
                <a href={ `mailto:${ row.value.email }` } className="mt-1">{ row.value.email }</a>
            </>
        )
    }, {
        Header: 'Comment',
        accessor: 'content',
        className: 'flex-column justify-content-center align-items-start',
        style: {
            whiteSpace: 'normal'
        },
        Cell: row => (
            <>
                { row.original.parent ?
                    <div>In reply to <a href="#filterBy" onClick={ e => filterByAuthor( e, row.original.parent_author_name ) } >{ row.original.parent_author_name }</a></div>
                    : ''
                }
                <div className="truncate" dangerouslySetInnerHTML={ removeXSSAttacks( row.value ) } ></div>
            </>
        )
    }, {
        id: 'post',
        Header: 'Post Title',
        accessor: d => { return { name: d.post.title, id: d.post.id } },
        sortable: true,
        Cell: row => (
            <Link to={ `${ process.env.PUBLIC_URL }/posts/${ row.value.id }` }><strong>{ row.value.name }</strong></Link>
        )
    }, {
        Header: 'Submitted On',
        accessor: 'created_at',
        width: 130,
        sortable: true,
        Cell: row => new Date( row.value ).toLocaleString()
    }, {
        Header: 'Status',
        accessor: 'approved',
        width: 80,
        Cell: row => (
            <input type="checkbox" className="approved-toggle checkbox-style-1 p-relative" checked={ row.value } onChange={ e => statusChange( row.index, e.target.checked ) } />
        )
    }, {
        Header: 'Actions',
        accessor: 'id',
        className: 'actions',
        headerClassName: "justify-content-center",
        expander: true,
        width: 80,
        Expander: ( { row } ) => (
            <>
                <a href="#reply" className="on-default modal-sizes reply-review mr-2" onClick={ e => e.preventDefault() }><i className="fas fa-reply"></i></a>
                <Link to={ `${ process.env.PUBLIC_URL }/posts/replies/${ row._original.id }` } className="on-default edit-row mr-2"><i className="fas fa-pencil-alt"></i></Link>
                <a href="#del" className="on-default remove-row" onClick={ e => deleteRow( e, row._original.id ) }><i className="far fa-trash-alt"></i></a>
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
                data: ajax.data.filter( cat => cat.id !== index )
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

    function searchReplies ( e ) {
        e.preventDefault();
        tableRef.current.getWrappedInstance().filterColumn( { id: 'content' }, search );
    }

    function filterByAuthor ( e, value ) {
        e.preventDefault();
        setAuthor( value );
        tableRef.current.wrappedInstance.fireFetchData();
    }

    function fetchData ( state ) {
        let filtered = [ ...state.filtered ];
        filtered.push( { id: 'author_name', value: author } );
        setLoading( true );
        getReplies( state.page * state.pageSize, ( state.page + 1 ) * state.pageSize, filtered, state.sorted )
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

    function replyComment ( e, index ) {
        e.preventDefault();
        let newReply = {
            id: ajax.total + 1 + parseInt( Math.random() * 100 ),
            parent: ajax.data[ index ].id,
            parent_author_name: ajax.data[ index ].author_name,
            author_name: 'John Doe',
            author_email: 'john@gmail.com',
            content: replyContent,
            post: ajax.data[ index ].post,
            rating: 0,
            created_at: new Date()
        };
        let temp = [ ...ajax.data ];
        temp.splice( index + 1, 0, newReply )
        setAjax( {
            ...ajax,
            data: temp
        } );
        setReplyContent( '' );
        setExpanded( {} );
        toast(
            <PNotify title="Success" icon="fas fa-check" text="Reply saved successfully." />,
            {
                containerId: "default",
                className: "notification-success"
            }
        );
    }

    function statusChange ( index, value ) {
        let temp = [ ...ajax.data ];
        temp[ index ].approved = value;
        setAjax( {
            ...ajax,
            data: temp
        } );
    }

    function cancelReply ( e ) {
        e.preventDefault();
        setReplyContent( '' );
        setExpanded( {} );
    }

    function expandedChange ( newRow, index ) {
        let temp = {};
        temp[ index ] = true;
        setExpanded( temp );
    }

    return (
        <>
            <Breadcrumb current={ 'Post Replies' } paths={ [ { name: 'Home', url: '/' }, { name: 'Posts', url: '/posts' } ] } />

            <Row>
                <Col>
                    <Form method="get" onSubmit={ searchReplies }>
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
                                        expanded={ expanded }
                                        data={ ajax.data }
                                        loading={ loading }
                                        columns={ columns }
                                        pages={ ajax.total }
                                        defaultPageSize={ 12 }
                                        manual
                                        onFetchData={ fetchData }
                                        selectAll={ selectAll }
                                        toggleAll={ () => setSelectAll( !selectAll ) }
                                        isSelected={ key => isSelected( key ) }
                                        toggleSelection={ onSelectChange }
                                        onChangeRef={ ref => setTableRef( ref ) }
                                        onExpandedChange={ expandedChange }
                                        SubComponent={ ( row ) => {

                                            return (
                                                <div className="reply p-3">
                                                    <Form.Label className="control-label">Reply to Comment</Form.Label>
                                                    <Form.Control
                                                        as="textarea"
                                                        id={ `reply-content-${ row.index }` }
                                                        className="form-control-modern"
                                                        rows="10"
                                                        value={ replyContent }
                                                        onChange={ e => setReplyContent( e.target.value ) }
                                                    />
                                                    <div className="reply-actions mt-3">
                                                        <Button
                                                            href="#submitReply"
                                                            className="submit-reply btn-px-2 py-2 align-items-center font-weight-semibold line-height-1"
                                                            variant="primary"
                                                            disabled={ replyContent === '' }
                                                            onClick={ e => replyComment( e, row.index ) }
                                                        >Reply</Button>
                                                        <Button
                                                            href="#cancleReply"
                                                            className="cancel-reply btn-px-2 py-2 ml-3 align-items-center border font-weight-semibold line-height-1"
                                                            variant="light"
                                                            onClick={ e => cancelReply( e ) }
                                                        >Cancel</Button>
                                                    </div>
                                                </div>
                                            )
                                        } }
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