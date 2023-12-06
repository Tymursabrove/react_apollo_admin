import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

export default function FileUpload ( props ) {
    const [ file, setFile ] = useState( null );

    function changeFile ( e ) {
        setFile( e.target.files[ 0 ] );
    }

    function removeFile () {
        setFile( null );
    }

    return (
        <div className="fileupload">
            <div className="input-append">
                <div className="uneditable-input">
                    { file &&
                        <>
                            <i className="fas fa-file fileupload-exists"></i>
                            <span className="fileupload-preview">{ file.name }</span>
                        </>
                    }
                </div>
                <Button variant="default" className="btn-file">
                    { file ? <span className="fileupload-exists">Change</span>
                        : <span className="fileupload-new">Select file</span>
                    }
                    <input type="file" onChange={ changeFile } />
                </Button>
                { file && <Button variant="default" onClick={ removeFile }>Remove</Button> }
            </div>
        </div>
    )
}