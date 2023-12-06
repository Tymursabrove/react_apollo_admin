import React from 'react';
import { Card, Col, Row, Table, Button } from 'react-bootstrap';

import Breadcrumb from '../../common/breadcrumb';

function Invoice () {
    return (
        <>
            <Breadcrumb current="Invoice" paths={ [ {
                name: "Home",
                url: "/"
            }, {
                name: "Pages",
                url: "/pages"
            } ] } />

            <Card>
                <Card.Body>
                    <div className="invoice">
                        <header className="clearfix">
                            <Row>
                                <Col sm={ 6 } className="mt-3">
                                    <h2 className="h2 mt-0 mb-1 text-dark font-weight-bold">INVOICE</h2>
                                    <h4 className="h4 m-0 text-dark font-weight-bold">#76598345</h4>
                                </Col>
                                <Col sm={ 6 } className="text-sm-right my-3">
                                    <address className="ib">
                                        Okler Themes Ltd
                                        <br />
                                        123 Porto Street, New York, USA
                                        <br />
                                        Phone: +12 3 4567-8901
                                        <br />
                                        okler@okler.net
                                    </address>
                                </Col>
                            </Row>
                        </header>

                        <div className="bill-info">
                            <Row>
                                <Col md={ 6 }>
                                    <div className="bill-to">
                                        <p className="h5 mb-1 text-dark font-weight-semibold">To:</p>
                                        <address className="mb-0 mb-md-3">
                                            Envato
                                            <br />
                                            121 King Street, Melbourne, Australia
                                            <br />
                                            Phone: +61 3 8376 6284
                                            <br />
                                            info@envato.com
                                        </address>
                                    </div>
                                </Col>
                                <Col md={ 6 }>
                                    <div className="bill-data text-md-right">
                                        <p className="mb-0">
                                            <span className="text-dark">Invoice Date</span>
                                            <span className="value">04/20/2021</span>
                                        </p>
                                        <p className="mb-0">
                                            <span className="text-dark">Due Date</span>
                                            <span className="value">05/20/2021</span>
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </div>

                        <Table responsive={ true } className="invoice-items" style={ { minWidth: "700px" } }>
                            <thead>
                                <tr className="text-dark">
                                    <th id="cell-id" className="font-weight-semibold">#</th>
                                    <th id="cell-item" className="font-weight-semibold">Item</th>
                                    <th id="cell-desc" className="font-weight-semibold">Description</th>
                                    <th id="cell-price" className="text-center font-weight-semibold">Price</th>
                                    <th id="cell-qty" className="text-center font-weight-semibold">Quantity</th>
                                    <th id="cell-total" className="text-center font-weight-semibold">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>123456</td>
                                    <td className="font-weight-semibold text-dark">Porto HTML5 Template</td>
                                    <td>Multipurpose Website Template</td>
                                    <td className="text-center">$14.00</td>
                                    <td className="text-center">2</td>
                                    <td className="text-center">$28.00</td>
                                </tr>
                                <tr>
                                    <td>654321</td>
                                    <td className="font-weight-semibold text-dark">Tucson HTML5 Template</td>
                                    <td>Awesome Website Template</td>
                                    <td className="text-center">$17.00</td>
                                    <td className="text-center">1</td>
                                    <td className="text-center">$17.00</td>
                                </tr>
                            </tbody>
                        </Table>

                        <div className="invoice-summary">
                            <Row className="justify-content-end">
                                <Col sm={ 8 } lg={ 6 } xl={ 4 }>
                                    <Table className="h6 text-dark">
                                        <tbody>
                                            <tr className="b-top-0">
                                                <td colSpan={ 2 }>Subtotal</td>
                                                <td className="text-left">$45.00</td>
                                            </tr>
                                            <tr>
                                                <td colSpan={ 2 }>Shipping</td>
                                                <td className="text-left">$0.00</td>
                                            </tr>
                                            <tr className="h4">
                                                <td colSpan={ 2 }>Grand Total</td>
                                                <td className="text-left">$45.00</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Col>
                            </Row>
                        </div>
                    </div>

                    <div className="text-right mr-4">
                        <Button variant="default">Submit Invoice</Button>
                        <Button
                            className="ml-3"
                            variant="primary"
                        ><i className="fas fa-print"></i> Print</Button>
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}

export default React.memo( Invoice );