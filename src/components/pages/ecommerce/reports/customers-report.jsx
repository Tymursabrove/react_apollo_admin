import React, { useState } from 'react';
import { Row, Col, Card, Button, Form, InputGroup } from 'react-bootstrap';
import Chart from 'react-apexcharts';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

import Breadcrumb from '../../../common/breadcrumb';

const options = {
    chart: {
        id: 'customer-reports',
        stacked: true,
    },
    legend: {
        show: false
    },
    dataLabels: {
        enabled: false
    },
    xaxis: {
        categories: [ '1 Jan', '2 Jan', '3 Jan', '4 Jan', '5 Jan', '6 Jan', '7 Jan' ]
    }
};

const data = [ {
    name: 'Customer Orders',
    data: [ 3, 2, 1, 1, 6, 4, 2 ],
    type: 'column'
}, {
    name: 'Guest Orders',
    data: [ 1, 4, 3, 3, 5, 7, 2 ],
    type: 'column'
} ];


const options1 = {
    chart: {
        id: 'customer-guest'
    },
    labels: [ 'Customer Sales', 'Guest Sales' ],
    legend: {
        position: 'bottom'
    },
    responsive: [
        {
            breakpoint: 1400,
            options: {
                chart: {
                    height: 300
                }
            }
        }
    ]
}

const data1 = [ 19, 27 ];

export default function CustomersReport () {
    const [ startDate, setStartDate ] = useState( null );
    const [ endDate, setEndDate ] = useState( null );

    return (
        <>
            <Breadcrumb current="Customers Reports" paths={ [
                {
                    name: 'Home',
                    url: '/'
                }, {
                    name: 'Ecommerce',
                    url: '/ecommerce'
                }
            ] } />

            <Card className="card-modern">
                <Card.Header>
                    <Card.Title>Customers</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Row>
                        <Col xl="auto" className="mb-2">
                            <div className="d-flex flex-wrap h-100">
                                <Button
                                    type="button"
                                    className="my-1 my-xl-0 mr-1"
                                    variant="default"
                                >
                                    This Year
                                </Button>
                                <Button
                                    type="button"
                                    className="my-1 my-xl-0 mr-1"
                                    variant="default"
                                >
                                    Last Month
                                </Button>
                                <Button
                                    type="button"
                                    className="my-1 my-xl-0 mr-1"
                                    variant="default"
                                >
                                    This Month
                                </Button>
                                <Button
                                    type="button"
                                    className="my-1 my-xl-0 mr-1"
                                    variant="default"
                                >
                                    Last 7 days
                                </Button>
                            </div>
                        </Col>
                        <Col xl="auto" className="d-flex mb-2">
                            <InputGroup className="input-daterange w-auto mr-2">
                                <InputGroup.Prepend>
                                    <InputGroup.Text><i className="fas fa-calendar-alt"></i></InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    as="div"
                                    className="py-0"
                                >
                                    <DatePicker
                                        selected={ startDate }
                                        onChange={ date => setStartDate( date ) }
                                        maxDate={ new Date() }
                                    />
                                </Form.Control>
                                <InputGroup.Text className="border-left-0 border-right-0 rounded-0">to</InputGroup.Text>
                                <Form.Control
                                    as="div"
                                    className="py-0"
                                >
                                    <DatePicker
                                        selected={ endDate }
                                        onChange={ date => setEndDate( date ) }
                                        minDate={ startDate }
                                        maxDate={ new Date() }
                                    />
                                </Form.Control>
                            </InputGroup>
                            <Button className="filter-btn mr-1" variant="primary">Filter</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={ 4 }>
                            <Chart type="pie" options={ options1 } series={ data1 } height={ 400 } />
                        </Col>
                        <Col lg={ 8 } className="mt-3 mt-lg-0">
                            <Chart options={ options } series={ data } height={ 400 } />
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    )
}