import React, { useState } from 'react';
import { Row, Col, Button, Form, InputGroup } from 'react-bootstrap';
import Chart from 'react-apexcharts';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

import Breadcrumb from '../../../common/breadcrumb';

const options = {
    legend: {
        position: 'right',
        width: 224,
        fontSize: 13,
        formatter: ( name, opt ) => {
            let sum = opt.w.config.series[ opt.seriesIndex ].data.reduce( ( acc, cur ) => acc + cur.y, 0 );

            return (
                `<strong>
                    ${ name === 'Total Sales' ? '$' + sum.toFixed( 2 ) : sum }
                </strong>
                ${ name === 'Total Sales' ? 'total sales in this period' : 'order(s) placed' }`
            );
        },
        labels: {
            colors: '#808697'
        },
        markers: {
            width: 5,
            radius: 0
        },
        itemMargin: {
            horizontal: 0,
            vertical: 0
        }
    },
    dataLabels: {
        enabled: false
    },
    xaxis: {
        type: 'datetime'
    },
    yaxis: [
        {
            seriesName: 'Total Sales',
            axisTicks: {
                show: true,
            },
            axisBorder: {
                show: true
            },
            title: {
                text: "Gross Revenue"
            }
        },
        {
            seriesName: 'Order',
            opposite: true,
            axisTicks: {
                show: true,
            },
            axisBorder: {
                show: true
            },
            title: {
                text: "Orders Count"
            },
            decimalsInFloat: 0
        }
    ],
    responsive: [
        {
            breakpoint: 1024,
            options: {
                legend: {
                    position: "bottom",
                    width: "auto",
                    formatter: ( name, opt ) => {
                        return name + " (" + opt.w.config.series[ opt.seriesIndex ].data.reduce( ( acc, cur ) => acc + cur.y, 0 ) + ")";
                    },
                    markers: {
                        width: 12,
                        radius: "50%"
                    },
                    itemMargin: {
                        horizontal: 10,
                        vertical: 5
                    }
                },
                yaxis: [
                    {
                        seriesName: 'Total Sales',
                        axisTicks: {
                            show: false
                        }
                    },
                    {
                        seriesName: 'Order',
                        opposite: true,
                        axisTicks: {
                            show: false
                        }
                    }
                ]
            }
        }
    ],
    stroke: {
        curve: "smooth",
        lineCap: "round"
    }
};

const data = [ {
    name: 'Total Sales',
    type: 'line',
    data: [ {
        x: "1 Jan",
        y: 50
    }, {
        x: "2 Jan",
        y: 40
    }, {
        x: "3 Jan",
        y: 30
    }, {
        x: "4 Jan",
        y: 20
    }, {
        x: "5 Jan",
        y: 100
    }, {
        x: "6 Jan",
        y: 80
    }, {
        x: "7 Jan",
        y: 40
    } ]
}, {
    name: 'Order',
    type: 'bar',
    data: [ {
        x: "1 Jan",
        y: 3
    }, {
        x: "2 Jan",
        y: 2
    }, {
        x: "3 Jan",
        y: 1
    }, {
        x: "4 Jan",
        y: 1
    }, {
        x: "5 Jan",
        y: 6
    }, {
        x: "6 Jan",
        y: 4
    }, {
        x: "7 Jan",
        y: 2
    } ]
} ];

export default function OrdersReport () {
    const [ startDate, setStartDate ] = useState( null );
    const [ endDate, setEndDate ] = useState( null );

    return (
        <>
            <Breadcrumb current="Orders Reports" paths={ [
                {
                    name: 'Home',
                    url: '/'
                }, {
                    name: 'Ecommerce',
                    url: '/ecommerce'
                }
            ] } />

            <div className="card card-modern">
                <div className="card card-header">
                    <h2 className="card-title">Orders</h2>
                </div>
                <div className="card-body">
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
                                        maxDate={ endDate ? endDate : new Date() }
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
                        <Col xxl={ 10 }>
                            <div className="chart chart-with-sidebar mt-3">
                                <Chart options={ options } series={ data } height={ 400 } />
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}