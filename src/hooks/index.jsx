import { useState, useEffect } from 'react';

export function useApp ( slug ) {
    const [ status, setStatus ] = useState( null );

    useEffect( () => {
        setTimeout( () => {
            setStatus( slug + " App loaded " );
        }, 5000 );
    }, [] )

    return status;
}