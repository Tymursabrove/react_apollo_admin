import React from 'react';
import { Link } from 'react-router-dom';

export default function Breadcrumb ( props ) {
    const { current, paths = [] } = props;

    return (
        <header className="page-header page-header-left-inline-breadcrumb">
            <h2 className="font-weight-bold text-6">{ current }</h2>
            <div className="right-wrapper">
                <ol className="breadcrumbs">
                    {
                        paths.map( ( path, index ) => (
                            <li key={ `breadcrumb-${ index }` }>
                                <Link to={ process.env.PUBLIC_URL + path.url }><span>{ path.name }</span></Link>
                            </li>
                        ) )
                    }
                </ol>
            </div>
        </header>
    )
}