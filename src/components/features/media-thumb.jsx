import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FormCheck } from 'react-bootstrap';
import LightBox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import PtLazyLoad from './lazyload';

import { getCroppedImageUrl } from '../../utils';

export default function MediaThumb ( props ) {
    const { media, selected = false, onChange } = props;
    const [ openLB, setOpenLB ] = useState( false );

    function onValueChange ( value ) {
        onChange && onChange( value );
    }

    function openLightBox () {
        setOpenLB( true );
    }

    function closeLightBox () {
        setOpenLB( false );
    }

    return (
        <div className={ `thumbnail ${ selected ? 'thumbnail-selected' : '' }` }>
            <div className="thumb-preview">
                <div className="centered">
                    <Link to={ `${ process.env.PUBLIC_URL }/media/${ media.id }` } className="thumb-image">
                        <PtLazyLoad
                            className="img-fluid"
                            src={ `${ process.env.PUBLIC_URL }/mock-server/images/${ getCroppedImageUrl( media.copy_link, 150 ) }` }
                            alt="media"
                            width={ 150 }
                            height={ 150 }
                            label=""
                        />
                    </Link>
                </div>

                <div className="mg-thumb-options">
                    <div className="mg-zoom" onClick={ openLightBox }><i className="fa fa-search"></i></div>
                    <div className="mg-toolbar">
                        <FormCheck
                            className="mg-option checkbox-inline"
                            id={ `media-${ media.id }` }
                            custom
                            label=""
                            checked={ selected }
                            onChange={ e => onValueChange( e.target.checked ) }
                        />

                        <div className="mg-group float-right">
                            <Link to={ `${ process.env.PUBLIC_URL }/media/${ media.id }` }><i className="fas fa-pencil-alt"></i></Link>
                        </div>
                    </div>
                </div>
            </div>

            {
                openLB && (
                    <LightBox
                        mainSrc={ `${ process.env.PUBLIC_URL }/mock-server/images/${ media.copy_link }` }
                        reactModalStyle={ {
                            overlay: {
                                zIndex: '9999'
                            }
                        } }
                        onCloseRequest={ closeLightBox }
                    />
                )
            }
        </div>
    )
}