import React, { useMemo } from 'react';

export default function TablePagination ( props ) {
    const { pages, page } = props;
    const elementsToShow = useMemo( () => {
        let elements = [];
        if ( pages < 7 ) {
            for ( let i = 0; i < pages; i++ ) elements.push( i );
        } else {
            if ( page > 5 ) {
                elements = [ 0, 1, false ];
                if ( page < pages - 6 ) {
                    elements = elements.concat( [ page - 3, page - 2, page - 1, page ] );
                }
            } else {
                elements = [ 0, 1, 2, 3, 4, 5, 6 ];
            }
            if ( page < pages - 6 ) {
                if ( page > 5 ) {
                    elements = elements.concat( [ page + 1, page + 2, page + 3 ] );
                }
                elements = elements.concat( [ false, pages - 1, pages ] );
            } else {
                for ( let i = pages - 7; i < pages; i++ ) {
                    elements.push( i );
                }
            }
        }
        return elements;
    }, [ page, pages ] );

    function changePage ( e, index ) {
        e.preventDefault();
        props.onPageChange( index );
    }

    return (
        <>
            {
                pages > 1 ?
                    <ul className="pagination pagination-modern pagination-modern-spacing" role="navigation">
                        {
                            page > 0 ?
                                <li className="page-item">
                                    <a href="#prev" className="page-link" onClick={ e => changePage( e, page - 1 ) }><i className="fas fa-chevron-left"></i></a>
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
                                        typeof item === 'number' ?
                                            <li className={ `page-item ${ item === page ? 'active' : '' }` }><a className="page-link" href={ `#page=${ item }` } onClick={ e => changePage( e, item ) }>{ item + 1 }</a></li>
                                            : <li className="page-item disabled" aria-disabled="true"><span className="page-link">...</span></li>
                                    }
                                </React.Fragment>
                            ) )
                        }
                        {
                            page < pages - 1 ?
                                <li className="page-item">
                                    <a href="#next" className="page-link" onClick={ e => changePage( e, page + 1 ) }><i className="fas fa-chevron-right"></i></a>
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