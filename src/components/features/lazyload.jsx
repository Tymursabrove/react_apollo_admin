import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

export default function PtLazyLoad ( { width, height, ...props } ) {
    return (
        <LazyLoadImage
            width={ width }
            height={ height }
            effect="opacity"
            { ...props }
            wrapperProps={ {
                style: {
                    paddingTop: 100 * height / width + "%"
                }
            } }
        />
    )
}