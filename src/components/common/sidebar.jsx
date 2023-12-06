import React from 'react';
import Link from 'react-router-dom/Link';
import withRouter from 'react-router-dom/withRouter';
import { SlideToggle } from 'react-slide-toggle';

import menuData from '../../utils/data/menu.json';

function Sidebar ( props ) {
    function toggleSidebar () {
        document.querySelector( 'html' ).classList.toggle( 'sidebar-left-collapsed' );
    }

    function getOpenState ( item ) {
        return !item.children.find( child => child.url === props.location.pathname || ( child.children && child.children.find( sub => sub.url === props.location.pathname ) ) );
    }

    function closeSiblings ( e ) {
        e.preventDefault();
        e.stopPropagation();

        if ( e.currentTarget.classList.contains( 'expanded' ) ) return;

        let menu = e.currentTarget.closest( 'ul' );
        let openedLink = menu.querySelector( 'li > a.expanded' );
        openedLink && openedLink.click();
    }

    return (
        <aside id="sidebar-left" className="sidebar-left">
            <div className="sidebar-header">
                <div className="sidebar-title">
                    Navigation
                </div>
                <div className="sidebar-toggle d-none d-md-block" onClick={ toggleSidebar }>
                    <i className="fas fa-bars" aria-label="Toggle sidebar"></i>
                </div>
            </div>

            <div className="nano">
                <div className="nano-content">
                    <nav id="menu">
                        <ul className="nav nav-main">
                            {
                                menuData.map( ( item, index ) => (
                                    <li className={ item.children ? 'nav-parent' : '' } key={ `dropdown-${ index }` }>
                                        {
                                            item.children ?
                                                <>
                                                    <SlideToggle collapsed={ getOpenState( item ) }>
                                                        { ( { onToggle, setCollapsibleElement, toggleState } ) => (
                                                            <>
                                                                <a href="#no" className={ `nav-link ${ toggleState === 'EXPANDED' || toggleState === 'EXPANDING' ? 'expanded' : '' }` } onClick={ ( e ) => { closeSiblings( e ); onToggle() } }>
                                                                    <i className={ item.icon }></i>
                                                                    <span>{ item.name }</span>
                                                                </a>

                                                                <div className="overflow-hidden" ref={ setCollapsibleElement }>
                                                                    <ul className="nav nav-children">
                                                                        {
                                                                            item.children.map( ( subMenu, subId ) => (
                                                                                <li className={ subMenu.children ? 'nav-parent' : subMenu.url === props.location.pathname ? 'active' : '' } key={ `dropdown-${ index }-${ subId }` }>
                                                                                    {
                                                                                        subMenu.children ?
                                                                                            <SlideToggle collapsed={ getOpenState( subMenu ) }>
                                                                                                { ( { onToggle, setCollapsibleElement, toggleState } ) => (
                                                                                                    <>
                                                                                                        <a href="#no" className={ `nav-link ${ toggleState === 'EXPANDED' || toggleState === 'EXPANDING' ? 'expanded' : '' }` } onClick={ ( e ) => { closeSiblings( e ); onToggle() } }>
                                                                                                            { subMenu.name }
                                                                                                        </a>
                                                                                                        <div className="overflow-hidden" ref={ setCollapsibleElement }>
                                                                                                            <ul className="nav nav-children">
                                                                                                                {
                                                                                                                    subMenu.children.map( ( ssubMenu, ssubId ) => (
                                                                                                                        <li key={ `dropdown-${ index }-${ subId }-${ ssubId }` } className={ ssubMenu.url === props.location.pathname ? 'active' : '' }>
                                                                                                                            <Link to={ process.env.PUBLIC_URL + ssubMenu.url } className="nav-link">{ ssubMenu.name }</Link>
                                                                                                                        </li>
                                                                                                                    ) )
                                                                                                                }
                                                                                                            </ul>
                                                                                                        </div>
                                                                                                    </>

                                                                                                ) }
                                                                                            </SlideToggle>
                                                                                            : <Link to={ process.env.PUBLIC_URL + subMenu.url } className="nav-link">
                                                                                                { subMenu.name }
                                                                                            </Link>
                                                                                    }
                                                                                </li>
                                                                            ) )
                                                                        }
                                                                    </ul>
                                                                </div>
                                                            </>
                                                        ) }
                                                    </SlideToggle>
                                                </>
                                                : <Link to={ process.env.PUBLIC_URL + item.url } className="nav-link">
                                                    <i className={ item.icon }></i>
                                                    <span>{ item.name }</span>
                                                </Link>
                                        }
                                    </li>
                                ) )
                            }
                        </ul>
                    </nav>
                </div>
            </div>
        </aside>
    )
}

export default withRouter( Sidebar );