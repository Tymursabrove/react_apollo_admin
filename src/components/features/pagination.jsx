import React, { useMemo } from 'react';
import { withRouter, Link } from 'react-router-dom';

import { getQueryInfo, getQueryString } from '../../utils';

function Pagination ( props ) {
    const { total } = props;
    const query = useMemo( () => {
        return getQueryInfo( props.location.search );
    }, [ props.location ] );
    const curPage = query.page ? parseInt( query.page ) : 1;
    const elementsToShow = useMemo( () => {
        let elements = [];
        if ( total <= 7 ) {
            for ( let i = 1; i <= total; i++ ) elements.push( i );
        } else {
            if ( curPage > 6 ) {
                elements = [ 1, 2, false ];
                if ( curPage <= total - 6 ) {
                    elements = elements.concat( [ curPage - 3, curPage - 2, curPage - 1, curPage ] );
                }
            } else {
                elements = [ 1, 2, 3, 4, 5, 6, 7 ];
            }
            if ( curPage <= total - 6 ) {
                if ( curPage > 6 ) {
                    elements = elements.concat( [ curPage + 1, curPage + 2, curPage + 3 ] );
                }
                elements = elements.concat( [ false, total - 1, total ] );
            } else {
                for ( let i = total - 6; i <= total; i++ ) {
                    elements.push( i );
                }
            }
        }
        return elements;
    }, [ curPage, total ] );


    function getUrl ( page ) {
        return getQueryString( { ...query, page } );
    }

    return (
        <>
            {
                total > 1 ?
                    <ul className="pagination pagination-modern pagination-modern-spacing" role="navigation">
                        {
                            curPage > 1 ?
                                <li className="page-item">
                                    <Link to={ { pathname: props.location.pathname, search: getUrl( curPage - 1 ) } } className="page-link"><i className="fas fa-chevron-left"></i></Link>
                                </li>
                                :
                                <li className="page-item disabled">
                                    <a className="page-link" href="#1"><i className="fas fa-chevron-left"></i></a>
                                </li>
                        }
                        {
                            elementsToShow.map( ( item, index ) => (
                                <React.Fragment key={ `page-item-${ index }` }>
                                    {
                                        item ?
                                            <li className={ `page-item ${ item === curPage ? 'active' : '' }` }><Link className="page-link" to={ { pathname: props.location.pathname, search: getUrl( item ) } }>{ item }</Link></li>
                                            : <li className="page-item disabled" aria-disabled="true"><span className="page-link">...</span></li>
                                    }
                                </React.Fragment>
                            ) )
                        }
                        {
                            curPage < total ?
                                <li className="page-item">
                                    <Link to={ { pathname: props.location.pathname, search: getUrl( curPage + 1 ) } } className="page-link"><i className="fas fa-chevron-right"></i></Link>
                                </li>
                                :
                                <li className="page-item disabled">
                                    <a className="page-link" href="#1"><i className="fas fa-chevron-right"></i></a>
                                </li>
                        }
                    </ul>
                    : ''
            }
        </>
    )
}

export default withRouter( Pagination );