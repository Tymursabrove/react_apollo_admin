import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Row, Col, Card, Table, Form, InputGroup, Button } from 'react-bootstrap';

import Breadcrumb from '../../../../common/breadcrumb'

const PAYMENT_METHODS = [
    {
        name: 'Stripe',
        url: 'stripe'
    },
    {
        name: 'Paypal',
        url: 'paypal'
    },
    {
        name: 'Cash on Delivery',
        url: ''
    }
];

export default function PaymentList () {
    const [ search, setSearch ] = useState( '' );
    const [ methods, setMethods ] = useState( PAYMENT_METHODS );

    function searchPayments ( e ) {
        e.preventDefault();
        setMethods( PAYMENT_METHODS.filter( method => method.name.search( new RegExp( search, 'i' ) ) >= 0 ) );
    }

    return (
        <>
            <Breadcrumb
                current="Payment Methods"
                paths={ [
                    {
                        name: 'Home',
                        url: '/'
                    }, {
                        name: 'Ecommerce',
                        url: '/ecommerce'
                    }
                ] }
            />

            <Form className="ecommerce-form" onSubmit={ searchPayments }>
                <Card className="card-modern">
                    <Card.Body>
                        <div className="datatables-header-footer-wrapper">
                            <div className="datatable-header">
                                <Row className="align-items-center mb-3 text-right">
                                    <Col lg="auto" className="col-lg-auto pl-lg-1 ml-auto">
                                        <div className="searchh search-style-1 mx-lg-auto">
                                            <InputGroup>
                                                <Form.Control
                                                    type="text"
                                                    maxLength="20"
                                                    className="search-term"
                                                    placeholder="Search ..."
                                                    value={ search }
                                                    onChange={ e => setSearch( e.target.value ) }
                                                />
                                                <InputGroup.Append>
                                                    <Button type="submit" variant="default"><i className="bx bx-search"></i></Button>
                                                </InputGroup.Append>
                                            </InputGroup>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <Table
                                className="table-ecommerce-simple mb-0"
                                striped
                                bordered
                            >
                                <thead>
                                    <tr>
                                        <th width="15%">ID</th>
                                        <th>Title</th>
                                        <th width="25%">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { methods.map( ( method, index ) => (
                                        <tr key={ `payment-method-${ index }` }>
                                            <td>
                                                { index + 1 }
                                            </td>
                                            <td>
                                                <Link to={ `${ process.env.PUBLIC_URL }/ecommerce/settings/payment/${ method.url }` }><strong>{ method.name }</strong></Link>
                                            </td>
                                            <td>
                                                <input type="checkbox" className="checkbox-style-1 p-relative" />
                                            </td>
                                        </tr>
                                    ) ) }
                                </tbody>
                            </Table>
                        </div>
                    </Card.Body>
                </Card>
            </Form>
        </>
    )
}