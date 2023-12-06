import React from 'react';
import { Row, Col, Form, Card, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';

import Breadcrumb from '../../common/breadcrumb';
import PNotify from '../../features/elements/p-notify';

export default function MediaSetting () {

    function saveSettings ( e ) {
        e.preventDefault();
        toast(
            <PNotify title="Success" icon="fas fa-check" text="Settings saved successfully." />,
            {
                containerId: "default",
                className: "notification-success"
            }
        );
    }

    return (
        <>
            <Breadcrumb current="Media Settings" paths={ [ { name: 'Home', url: '/' }, { name: 'Media', url: '/media' } ] } />

            <Row className="media-settings">
                <Col>
                    <Form action="#" method="post" className="form-horizontal" onSubmit={ saveSettings }>
                        <Card>
                            <Card.Body className="pb-5">
                                <h3 className="form-title pt-3">Small Thumbnail</h3>
                                <Form.Group as={ Row }>
                                    <Col lg={ 3 } className="text-lg-right pt-2">
                                        <Form.Label>Width <span className="required">*</span></Form.Label>
                                    </Col>
                                    <Col lg={ 3 }>
                                        <Form.Control
                                            type="number"
                                            min={ 10 }
                                            placeholder="150"
                                            required
                                        />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={ Row }>
                                    <Col lg={ 3 } className="text-lg-right pt-2">
                                        <Form.Label>Height <span className="required">*</span></Form.Label>
                                    </Col>
                                    <Col lg={ 3 }>
                                        <Form.Control
                                            type="number"
                                            min={ 10 }
                                            placeholder="150"
                                            required
                                        />
                                    </Col>
                                </Form.Group>
                                <h3 className="form-title pt-3">Medium Thumbnail</h3>
                                <Form.Group as={ Row }>
                                    <Col lg={ 3 } className="text-lg-right pt-2">
                                        <Form.Label>Width <span className="required">*</span></Form.Label>
                                    </Col>
                                    <Col lg={ 3 }>
                                        <Form.Control
                                            type="number"
                                            min={ 10 }
                                            placeholder="150"
                                            required
                                        />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={ Row }>
                                    <Col lg={ 3 } className="text-lg-right pt-2">
                                        <Form.Label>Height <span className="required">*</span></Form.Label>
                                    </Col>
                                    <Col lg={ 3 }>
                                        <Form.Control
                                            type="number"
                                            min={ 10 }
                                            placeholder="150"
                                            required
                                        />
                                    </Col>
                                </Form.Group>
                                <h3 className="form-title pt-3">Large Thumbnail</h3>
                                <Form.Group as={ Row }>
                                    <Col lg={ 3 } className="text-lg-right pt-2">
                                        <Form.Label>Width <span className="required">*</span></Form.Label>
                                    </Col>
                                    <Col lg={ 3 }>
                                        <Form.Control
                                            type="number"
                                            min={ 10 }
                                            placeholder="150"
                                            required
                                        />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={ Row }>
                                    <Col lg={ 3 } className="text-lg-right pt-2">
                                        <Form.Label>Height <span className="required">*</span></Form.Label>
                                    </Col>
                                    <Col lg={ 3 }>
                                        <Form.Control
                                            type="number"
                                            min={ 10 }
                                            placeholder="150"
                                            required
                                        />
                                    </Col>
                                </Form.Group>
                            </Card.Body>
                            <Card.Footer>
                                <Row className="justify-content-lg-end">
                                    <Col sm={ 9 }>
                                        <Button
                                            type="submit"
                                            className="mr-1"
                                            variant="primary"
                                        >Submit</Button>
                                        <Button
                                            type="reset"
                                            variant="default"
                                        >Reset</Button>
                                    </Col>
                                </Row>
                            </Card.Footer>
                        </Card>
                    </Form>
                </Col>
            </Row>
        </>
    )
}