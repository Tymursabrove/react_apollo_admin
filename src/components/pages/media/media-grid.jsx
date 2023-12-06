import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Form, Row, Col } from 'react-bootstrap';
import { toast } from 'react-toastify';

import Breadcrumb from '../../common/breadcrumb';
import MediaThumb from '../../features/media-thumb';
import Pagination from '../../features/pagination';
import Loader from '../../features/loader';
import PNotify from '../../features/elements/p-notify';

import { getMedia } from '../../../api';

import { getQueryInfo, getQueryString } from '../../../utils';

function MediaGrid ( props ) {
    const [ loading, setLoading ] = useState( true );
    const [ ajax, setAjax ] = useState( {
        data: [],
        total: 0
    } );
    const query = useMemo( () => {
        return getQueryInfo( props.location.search );
    }, [ props.location ] );
    const [ filter, setFilter ] = useState( '' );
    const ref = useRef( null );

    useEffect( () => {
        let curPage = query.page ? query.page : 1;
        setFilter( query.filter ? query.filter : '' );
        setLoading( true );
        window.scrollTo( {
            top: window.pageYOffset + ref.current.getBoundingClientRect().top,
            behavior: 'smooth'
        } );
        getMedia( ( curPage - 1 ) * 24, curPage * 24, [ { id: 'type', value: query.filter } ] ).then( results => {
            setLoading( false );
            setAjax( {
                data: results.data.map( media => {
                    return {
                        ...media,
                        selected: false
                    }
                } ),
                total: parseInt( results.total / 24 ) + !( !( results.total % 24 ) )
            } );
        } )
    }, [ query ] )

    function onSelectChange ( index, value ) {
        setAjax( {
            ...ajax,
            data: ajax.data.map( ( media, id ) => {
                if ( id === index ) {
                    return {
                        ...media,
                        selected: value
                    };
                }
                return media;
            } )
        } );
    }

    function selectAllItems ( e ) {
        let isAllSelected = e.currentTarget.classList.contains( 'all-selected' );
        e.currentTarget.querySelector( 'span' ).innerText = isAllSelected ? 'Select All' : 'Deselect All';
        e.currentTarget.classList.toggle( 'all-selected' );

        setAjax( {
            ...ajax,
            data: ajax.data.map( media => {
                return {
                    ...media,
                    selected: !isAllSelected
                }
            } )
        } );

        e.preventDefault();
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
            data: ajax.data.filter( media => !media.selected )
        } );
    }

    function filterItems ( e ) {
        props.history.push( { search: getQueryString( { ...query, page: 1, filter: e.target.value } ) } );
    }

    return (
        <>
            <Breadcrumb current="Gallery Grid" paths={ [ { url: '/', name: 'Home' }, { url: '/media', name: 'Media' } ] } />

            <section className="media-gallery">
                <Form action="#" method="get">
                    <div className="inner-body mg-main ml-0">
                        <div className="inner-toolbar clearfix" ref={ ref }>
                            <ul>
                                <li>
                                    <Link to={ `${ process.env.PUBLIC_URL }/media/list` }><i className="fas fa-th-list"></i></Link>
                                </li>
                                <li>
                                    <Link to={ `${ process.env.PUBLIC_URL }/media` } className="active"><i className="fas fa-th-large"></i></Link>
                                </li>
                                <li>
                                    <a href="#no" onClick={ selectAllItems }>
                                        <i className="fas fa-check-square mr-1"></i>
                                        <span>Select All</span>
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
                                        className="form-control form-control-sm select-style-1 filter-by w-auto"
                                        size="sm"
                                        value={ filter }
                                        onChange={ filterItems }
                                    >
                                        <option value="">All</option>
                                        <option value="image">Images</option>
                                        <option value="stream">Videos</option>
                                    </Form.Control>
                                </li>
                            </ul>
                        </div>

                        <Row className="mg-files">
                            {
                                loading ? <Loader />
                                    :
                                    !ajax.data.length ?
                                        <div className="no-results text-center pt-5 m-auto">No media were found</div>
                                        :
                                        ajax.data.map( ( media, index ) => (
                                            <Col xs={ 4 } sm={ 3 } md="1-5" lg={ 2 } xl="1-8" className="col-6 col-xxl-1-10" key={ `media-${ index }` }>
                                                <MediaThumb media={ media } selected={ media.selected } onChange={ value => onSelectChange( index, value ) } />
                                            </Col>
                                        ) )
                            }
                        </Row>

                        <div className="pagination-wrapper d-flex justify-content-lg-end">
                            <Pagination total={ ajax.total } />
                        </div>
                    </div>
                </Form>
            </section>
        </>
    )
}

export default React.memo( withRouter( MediaGrid ) );