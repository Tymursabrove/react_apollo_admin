import React from 'react';
import { Row, Col, Form, Card } from 'react-bootstrap';

import Breadcrumb from '../../common/breadcrumb';
import PtDropzone from '../../features/elements/dropzone';

export default function MediaAdd () {

    return (
        <>
            <Breadcrumb current="Add new Media" paths={ [ { name: 'Home', url: '/' }, { name: 'Media', url: '/media' } ] } />

            <Form className="ecommerce-form" encType="multipart/form-data">
                <Row>
                    <Col>
                        <Card className="card-modern">
                            <Card.Body>
                                <Row>
                                    <Col>
                                        <PtDropzone />
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <span className="help-block text-3 mb-1">You are using the multi-file uploader.</span>
                        <span className="help-block text-3">Maximum upload file size: 8 MB.</span>
                    </Col>
                </Row>
            </Form>
        </>
    )
}