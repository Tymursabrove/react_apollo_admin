import React, { useEffect, useRef } from 'react';

export default function PtWortRotator ( props ) {
    const { addClass = '', items = [], delay = 2000, transitionTime = 300 } = props;
    const showItems = items.length ? [ ...items, items[ 0 ] ] : items;
    const rotator = useRef( null );
    let current = 0;

    useEffect( () => {
        let wrapper = rotator.current;
        let itemsWrapper = wrapper.querySelector( ".wort-rotator-items" );
        let firstItem = itemsWrapper.children[ 0 ];
        let itemHeight = firstItem.offsetHeight;
        wrapper.style.height = wrapper.offsetHeight + itemHeight + "px";
        wrapper.classList.add( "active" );

        setInterval( () => {
            current++;
            if ( current <= items.length ) {
                itemsWrapper.style.top = ( -itemHeight ) * current + "px";
                itemsWrapper.style.transition = `top ${ transitionTime }ms ease`;

                if ( current === items.length ) {
                    setTimeout( () => {
                        current = 0;
                        itemsWrapper.style.top = 0;
                        itemsWrapper.style.transition = '';
                    }, transitionTime );
                }
            }
        }, delay );
    }, [] )

    return (
        <span className={ `wort-rotator ${ addClass }` } ref={ rotator }>
            <span className="wort-rotator-items">
                { showItems.map( ( item, index ) => (
                    <span key={ `item-${ index }` }>{ item }</span>
                ) ) }
            </span>
        </span>
    )
}