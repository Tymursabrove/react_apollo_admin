import React, { useState, useEffect } from 'react';
import Link from 'react-router-dom/Link';
import { Button, Collapse, Dropdown, ProgressBar, InputGroup, Form } from 'react-bootstrap';
import { SlideToggle } from 'react-slide-toggle';

import menuData from '../../utils/data/menu.json';

export default function Header () {
    const [ showUserBox, toggleUserBox ] = useState( false );
    const [ menu, toggleMenu ] = useState( false );
    const [ search, toggleSearch ] = useState( false );

    useEffect( () => {
        document.querySelector( 'body' ).addEventListener( 'click', onBodyClick );
    }, [] )

    function onToggleUserBox ( e ) {
        e.preventDefault();
        toggleUserBox( !showUserBox );
    }

    function onBodyClick ( e ) {
        if ( !e.target.closest( '.userbox' ) ) {
            toggleUserBox( false );
        }
    }

    function prevent ( e ) {
        e.preventDefault();
    }

    return (
        <header className="header header-nav-menu header-nav-links">
            <div className="logo-container">
                <Link to={ `${ process.env.PUBLIC_URL }` } className="logo">
                    <img src={ `${ process.env.PUBLIC_URL }/assets/images/logo-modern.png` } className="logo-image" width="90" height="24" alt="Porto Admin" />
                    <img src={ `${ process.env.PUBLIC_URL }/assets/images/logo-default.png` } className="logo-image-mobile" width="90" height="41" alt="Porto Admin" />
                </Link>
                <Button
                    variant=""
                    className="header-btn-collapse-nav d-md-none"
                    onClick={ () => toggleMenu( !menu ) }
                >
                    <i className="fas fa-bars"></i>
                </Button>

                <Collapse in={ menu }>
                    <div className="header-nav d-md-none">
                        <div className="header-nav-main header-nav-main-effect-1 header-nab-main-sub-effect-1 header-nav-main-square">
                            <nav>
                                <ul className="nav nav-pills">
                                    {
                                        menuData.map( ( item, index ) => (
                                            <li className={ item.children ? 'dropdown' : '' } key={ `dropdown-${ index }` }>
                                                {
                                                    item.children ?
                                                        <>
                                                            <SlideToggle collapsed={ true }>
                                                                { ( { onToggle, setCollapsibleElement } ) => (
                                                                    <>
                                                                        <a href="#no" className="nav-link dropdown-toggle" onClick={ ( e ) => { e.preventDefault(); onToggle() } }>
                                                                            { item.name }
                                                                            <i className="fas fa-caret-down"></i>
                                                                        </a>

                                                                        <ul className="dropdown-menu" ref={ setCollapsibleElement }>
                                                                            {
                                                                                item.children.map( ( subMenu, subId ) => (
                                                                                    <li className={ subMenu.children ? 'dropdown-submenu' : '' } key={ `dropdown-${ index }-${ subId }` }>
                                                                                        {
                                                                                            subMenu.children ?
                                                                                                <SlideToggle collapsed={ true }>
                                                                                                    { ( { onToggle, setCollapsibleElement } ) => (
                                                                                                        <>
                                                                                                            <a href="#no" className="nav-link dropdown-toggle" onClick={ ( e ) => { e.preventDefault(); onToggle() } }>
                                                                                                                { subMenu.name }
                                                                                                                <i className="fas fa-caret-down"></i>
                                                                                                            </a>
                                                                                                            <ul className="dropdown-menu" ref={ setCollapsibleElement }>
                                                                                                                {
                                                                                                                    subMenu.children.map( ( ssubMenu, ssubId ) => (
                                                                                                                        <li key={ `dropdown-${ index }-${ subId }-${ ssubId }` }>
                                                                                                                            <Link to={ process.env.PUBLIC_URL + ssubMenu.url } className="nav-link">{ ssubMenu.name }</Link>
                                                                                                                        </li>
                                                                                                                    ) )
                                                                                                                }
                                                                                                            </ul>
                                                                                                        </>

                                                                                                    ) }
                                                                                                </SlideToggle>
                                                                                                : <Link to={ process.env.PUBLIC_URL + subMenu.url } className="nav-link">{ subMenu.name }</Link>
                                                                                        }
                                                                                    </li>
                                                                                ) )
                                                                            }
                                                                        </ul>
                                                                    </>
                                                                ) }
                                                            </SlideToggle>
                                                        </>
                                                        : <Link to={ process.env.PUBLIC_URL + item.url } className="nav-link">{ item.name }</Link>
                                                }
                                            </li>
                                        ) )
                                    }
                                </ul>
                            </nav>
                        </div>
                    </div>
                </Collapse>

                <div className="header-nav show d-none d-md-block">
                    <div className="header-nav-main">
                    </div>
                </div>
            </div>

            <div className="header-right">
                <Button variant="" className="search-toggle d-none d-md-inline-block d-xl-none" onClick={ () => toggleSearch( !search ) }><i className="bx bx-search"></i></Button>
                <Form action="#" className={ `search search-style-1 nav-form d-none d-xl-inline-block ${ search ? "active" : "" }` } onSubmit={ prevent }>
                    <InputGroup>
                        <Form.Control type="text" className="form-control" placeholder="Search..." />
                        <InputGroup.Append>
                            <Button variant="default" type="submit"><i className="bx bx-search"></i></Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Form>

                <span className="separator"></span>

                <Dropdown className="d-none d-sm-block">
                    <Dropdown.Toggle as="a" className="dropdown-language nav-link">
                        <i className="flag flag-us"></i> EN
						<i className="fas fa-chevron-down"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu alignRight={ true }>
                        <Dropdown.Item><i className="flag flag-us"></i> English</Dropdown.Item>
                        <Dropdown.Item><i className="flag flag-es"></i> Español</Dropdown.Item>
                        <Dropdown.Item><i className="flag flag-fr"></i> Française</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <span className="separator"></span>

                <ul className="notifications">
                    <li>
                        <Dropdown>
                            <Dropdown.Toggle as="a" className="notification-icon">
                                <i className="bx bx-task"></i>
                                <span className="badge">3</span>
                            </Dropdown.Toggle>

                            <Dropdown.Menu className="notification-menu large">
                                <div className="notification-title">
                                    <span className="float-right badge badge-default">3</span> Tasks
                                </div>

                                <div className="content">
                                    <ul>
                                        <li>
                                            <p className="clearfix mb-1">
                                                <span className="message float-left">Generating Sales Report</span>
                                                <span className="message float-right text-dark">60%</span>
                                            </p>

                                            <ProgressBar className="progress-xs light" min={ 0 } max={ 100 } now={ 60 } />
                                        </li>

                                        <li>
                                            <p className="clearfix mb-1">
                                                <span className="message float-left">Importing Contacts</span>
                                                <span className="message float-right text-dark">98%</span>
                                            </p>
                                            <ProgressBar className="progress-xs light" min={ 0 } max={ 100 } now={ 98 } />
                                        </li>

                                        <li>
                                            <p className="clearfix mb-1">
                                                <span className="message float-left">Uploading something big</span>
                                                <span className="message float-right text-dark">33%</span>
                                            </p>
                                            <ProgressBar className="progress-xs light mb-1" now={ 33 } />
                                        </li>
                                    </ul>
                                </div>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                    <li>
                        <Dropdown>
                            <Dropdown.Toggle as="a" className="notification-icon">
                                <i className="bx bx-envelope"></i>
                                <span className="badge">4</span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="notification-menu">
                                <div className="notification-title">
                                    <span className="float-right badge badge-default">230</span> Messages
                                </div>


                                <div className="content">
                                    <ul>
                                        <li>
                                            <a href="#msg" className="clearfix" onClick={ prevent }>
                                                <span className="image image-as-text">JD</span>
                                                <span className="title">Joseph Doe</span>
                                                <span className="message">Lorem ipsum dolor sit.</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#msg" className="clearfix" onClick={ prevent }>
                                                <span className="image image-as-text bg-secondary">JJ</span>
                                                <span className="title">Joseph Junior</span>
                                                <span className="message truncate">Truncated message. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet lacinia orci. Proin vestibulum eget risus non luctus. Nunc cursus lacinia lacinia. Nulla molestie malesuada est ac tincidunt. Quisque eget convallis diam, nec venenatis risus. Vestibulum blandit faucibus est et malesuada. Sed interdum cursus dui nec venenatis. Pellentesque non nisi lobortis, rutrum eros ut, convallis nisi. Sed tellus turpis, dignissim sit amet tristique quis, pretium id est. Sed aliquam diam diam, sit amet faucibus tellus ultricies eu. Aliquam lacinia nibh a metus bibendum, eu commodo eros commodo. Sed commodo molestie elit, a molestie lacus porttitor id. Donec facilisis varius sapien, ac fringilla velit porttitor et. Nam tincidunt gravida dui, sed pharetra odio pharetra nec. Duis consectetur venenatis pharetra. Vestibulum egestas nisi quis elementum elementum.</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#msg" className="clearfix" onClick={ prevent }>
                                                <span className="image image-as-text bg-tertiary">MD</span>
                                                <span className="title">Monica Doe</span>
                                                <span className="message">Lorem ipsum dolor sit.</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#msg" className="clearfix" onClick={ prevent }>
                                                <span className="image image-as-text bg-quaternary">RD</span>
                                                <span className="title">Robert Doe</span>
                                                <span className="message">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet lacinia orci. Proin vestibulum eget risus non luctus. Nunc cursus lacinia lacinia. Nulla molestie malesuada est ac tincidunt. Quisque eget convallis diam.</span>
                                            </a>
                                        </li>
                                    </ul>

                                    <hr />

                                    <div className="text-right">
                                        <a href="#msg" className="view-more" onClick={ prevent }>View All</a>
                                    </div>
                                </div>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                    <li>
                        <Dropdown>
                            <Dropdown.Toggle as="a" className="notification-icon">
                                <i className="bx bx-bell"></i>
                                <span className="badge">3</span>
                            </Dropdown.Toggle>

                            <Dropdown.Menu className="notification-menu">
                                <div className="notification-title">
                                    <span className="float-right badge badge-default">3</span> Alerts
                                </div>

                                <div className="content">
                                    <ul>
                                        <li>
                                            <a href="#log" className="clearfix" onClick={ prevent }>
                                                <div className="image">
                                                    <i className="bx bx-dislike bg-danger"></i>
                                                </div>
                                                <span className="title">Server is Down!</span>
                                                <span className="message">Just now</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#log" className="clearfix" onClick={ prevent }>
                                                <div className="image">
                                                    <i className="bx bx-lock-alt bg-warning"></i>
                                                </div>
                                                <span className="title">User Locked</span>
                                                <span className="message">15 minutes ago</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#log" className="clearfix" onClick={ prevent }>
                                                <div className="image">
                                                    <i className="bx bx-wifi bg-success"></i>
                                                </div>
                                                <span className="title">Connection Restaured</span>
                                                <span className="message">10/10/2017</span>
                                            </a>
                                        </li>
                                    </ul>

                                    <hr />

                                    <div className="text-right">
                                        <Link to={ `${ process.env.PUBLIC_URL }/pages/log-viewer` } className="view-more">View All</Link>
                                    </div>
                                </div>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                </ul>

                <span className="separator"></span>

                <div id="userbox" className={ `userbox ${ showUserBox ? 'show' : '' }` }>
                    <a href="#no" onClick={ onToggleUserBox }>
                        <span className="profile-picture profile-picture-as-text">Me</span>
                        <div className="profile-info profile-info-no-role">
                            <span className="name">Hi, <strong className="font-weight-semibold">John Doe</strong></span>
                        </div>
                        <i className="fas fa-chevron-down text-color-dark"></i>
                    </a>

                    <div className={ `dropdown-menu ${ showUserBox ? 'show' : '' }` }>
                        <ul className="list-unstyled">
                            <li>
                                <Link to={ `${ process.env.PUBLIC_URL }/pages/user-profile` }><i className="bx bx-user"></i> My Profile</Link>
                            </li>
                            <li>
                                <Link to={ `${ process.env.PUBLIC_URL }/pages/sign-in` } ><i className="bx bx-log-out"></i> Logout</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}