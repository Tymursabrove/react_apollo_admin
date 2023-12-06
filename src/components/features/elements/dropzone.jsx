import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function PtDropzone ( props ) {
    const [ files, setFiles ] = useState( [] );
    const onDrop = useCallback( acceptedFiles => {
        let uploadedfiles = acceptedFiles.map( file => {
            return {
                id: parseInt( Math.random() * 100 ) + 32,
                name: file.name,
                size: file.size,
                type: file.type,
                copy_link: URL.createObjectURL( file ),
                alt_text: null
            }
        } );
        props.onUpload && props.onUpload( uploadedfiles );
        setFiles( files.concat( uploadedfiles ) );
    }, [ files ] );
    const { getRootProps, getInputProps } = useDropzone( { onDrop } );

    function imageLoaded ( index ) {
        let imagePreview = document.querySelectorAll( '.dz-preview' )[ index ];
        imagePreview.classList.add( 'dz-success', 'dz-complete' );
        imagePreview.querySelector( '.dz-upload' ).style.width = '100%';
    }

    function removeFile ( e, id ) {
        e.preventDefault();
        e.stopPropagation();
        setFiles( files.filter( file => file.id !== id ) );
        props.onRemove && props.onRemove( id );
    }

    return (
        <>
            <div className={ `dropzone-modern dz-square dz-clickable dropzone ${ files.length ? 'dz-started' : '' }` } { ...getRootProps() }>
                <input { ...getInputProps() } />
                <span className="dropzone-upload-message text-center">
                    <i className="bx bxs-cloud-upload"></i>
                    <b className="text-color-primary">Drag/Upload</b> your images here.
                </span>
                {
                    files.map( ( file, index ) => (
                        <div className="dz-image-preview dz-preview dz-processing" key={ `preview-${ index }` }>
                            <div className="dz-image">
                                <LazyLoadImage
                                    src={ file.copy_link }
                                    alt="previw"
                                    afterLoad={ () => imageLoaded( index ) }
                                />
                            </div>
                            <div className="dz-details">
                                <div className="dz-size">
                                    <span>{ ( file.size / ( 1024 * 1024 ) ).toFixed( 2 ) }</span> MB
                                </div>
                                <div className="dz-filename"><span>{ file.name }</span></div>
                            </div>
                            <div className="dz-progress">
                                <span className="dz-upload"></span>
                            </div>
                            <div className="dz-success-mark">
                                <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                                    <title>Check</title>
                                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                        <path d="M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" strokeOpacity="0.198794158" stroke="#747474" fillOpacity="0.816519475" fill="#FFFFFF"></path>
                                    </g>
                                </svg>
                            </div>
                            <a className="dz-remove" href="#remove" onClick={ ( e ) => removeFile( e, file.id ) }>Remove file</a>
                        </div>
                    ) )
                }
            </div>
        </>
    )
}

export default PtDropzone;