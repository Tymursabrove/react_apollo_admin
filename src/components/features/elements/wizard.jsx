import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Button, Form, Tabs, Tab } from 'react-bootstrap';

/* Wizard Nav Item */

export function WizardNavItem ( props ) {
    const { cur, index, className, onClick } = props;

    function goToPage ( e ) {
        e.preventDefault();
        cur !== index && onClick( index );
    }

    return (
        <li className={ `nav-item ${ cur === index ? "active" : cur > index ? "completed" : "" }` }>
            <a href="#wizardNav" className={ "nav-link" + ( className ? ` ${ className }` : "" ) } onClick={ goToPage }>
                { props.children }
            </a>
        </li>
    )
}

WizardNavItem.displayName = "WizardNavItem";

/* Wizard Nav */

export function WizardNav ( props ) {
    const { className, children, curPage, pageChange, container } = props;
    const items = children.filter( child => child.type.displayName === "WizardNavItem" );

    let content = (
        <ul className={ "nav" + ( className ? ` ${ className }` : "" ) }>
            { items.map( ( item, index ) => (
                <WizardNavItem
                    key={ `nav-${ index }` }
                    cur={ curPage }
                    index={ index }
                    onClick={ pageChange }
                    { ...item.props }
                />
            ) ) }
        </ul>
    );

    useEffect( () => {
        container && document.getElementById( container ) && ReactDOM.render( content, document.getElementById( container ) );
    }, [ curPage ] )

    return !container ? content : '';
}

WizardNav.displayName = "WizardNav";

/* Wizard Pager */

export function WizardPager ( props ) {
    const { current, total, onPrev, onNext, onFinish, container } = props;

    let content = (
        <ul className="pager">
            <li className={ `previous ${ current === 0 ? 'disabled' : '' }` }>
                <Button href="#prev" variant="default" onClick={ onPrev }><i className="fas fa-angle-left"></i> Previous</Button>
            </li>
            { current < total - 1 ?
                <li className="next">
                    <Button href="#next" variant="default" onClick={ onNext }>Next <i className="fas fa-angle-right"></i></Button>
                </li>
                : <li className="finish float-right">
                    <Button href="#finish" variant="default" onClick={ onFinish }>Finish</Button>
                </li>
            }
        </ul>
    )

    useEffect( () => {
        container && document.getElementById( container ) && ReactDOM.render( content, document.getElementById( container ) );
    }, [ current ] )

    return !container ? content : '';
}

/* Wizard Tab */

export function WizardTab ( props ) {
    return props.children;
}

WizardTab.displayName = "WizardTab";

/* Default Progress */
const WizardProgress = ( { curPage, total, size, children } ) => {

    function classNames () {
        let temp = [ "wizard-progress" ];
        size && temp.push( `wizard-progress-${ size }` );
        return temp.join( " " );
    }

    return (
        <div className={ classNames() }>
            <div className="steps-progress">
                <div className="progress-indicator" style={ { width: ( 100 * curPage / ( total - 1 ) ).toFixed( 1 ) + "%" } }>
                </div>
            </div>
            { children }
        </div>
    )
}

export default function Wizard ( props ) {
    const { onFinish, pagerContainer, className, navContainer, showProgress = false, Progress = WizardProgress, progressSize } = props;
    const [ validated, setValidated ] = useState( false );
    const tabs = props.children.filter( child => child.type.displayName === "WizardTab" );
    const nav = props.children.find( child => child.type.displayName === "WizardNav" );
    const [ curPage, setCurPage ] = useState( 0 );
    const formRef = useRef( null );

    useEffect( () => {
        setValidated( false );
    }, [ curPage ] )

    function classNames () {
        let temp = [ "form-wizard" ];
        className && temp.push( className );
        return temp.join( " " );
    }

    function nextPage ( e ) {
        e.preventDefault();
        if ( checkPageValidation( curPage ) ) {
            setCurPage( curPage + 1 );
        } else {
            setValidated( true );
        }
    }

    function prevPage ( e ) {
        e.preventDefault();
        curPage > 0 && setCurPage( curPage - 1 );
    }

    function goToPage ( index ) {
        if ( index < curPage ) {
            setCurPage( index );
        } else {
            if ( checkPageValidation( curPage ) ) {
                checkPageValidation( index - 1 ) && setCurPage( index );
            } else {
                validated || setValidated( true );
            }
        }
    }

    function finish ( e ) {
        e.preventDefault();
        if ( checkPageValidation( curPage ) ) {
            onFinish && onFinish();
        } else {
            validated || setValidated( true );
        }
    }

    function checkPageValidation ( page ) {
        return !formRef.current.querySelectorAll( ".tab-pane" )[ page ].querySelector( ":invalid" );
    }

    return (
        <>
            {
                showProgress &&
                <Progress
                    curPage={ curPage }
                    total={ tabs.length }
                    size={ progressSize }
                >
                    <WizardNav
                        container={ navContainer }
                        curPage={ curPage }
                        pageChange={ goToPage }
                        { ...nav.props }
                    />
                </Progress>
            }
            <Form
                className={ classNames() }
                ref={ formRef }
                noValidate
                validated={ validated }
                onSubmit={ e => e.preventDefault() }
            >
                {
                    showProgress ||
                    <WizardNav
                        container={ navContainer }
                        curPage={ curPage }
                        pageChange={ goToPage }
                        { ...nav.props }
                    />
                }

                <Tabs
                    activeKey={ curPage }
                    onSelect={ page => setCurPage( page ) }
                >
                    { tabs.map( ( tab, index ) => (
                        <Tab key={ `wizard-${ index }` } eventKey={ index }>{ tab }</Tab>
                    ) ) }
                </Tabs>
            </Form>

            <WizardPager
                container={ pagerContainer }
                current={ curPage }
                total={ tabs.length }
                onNext={ nextPage }
                onPrev={ prevPage }
                onFinish={ finish }
            />
        </>
    )
}