import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Button, Table, ProgressBar } from 'react-bootstrap';
import Chart from 'react-apexcharts';

import Breadcrumb from '../common/breadcrumb';

const options = {
    chart: {
        stacked: true,
        toolbar: {
            show: false
        }
    },
    legend: {
        show: false
    },
    xaxis: {
        categories: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ]
    },
    dataLabels: {
        enabled: false
    }
};

const data = [ {
    name: 'Gross Revenue',
    data: [ 65, 96, 75, 90, 55, 75, 85, 98, 46, 42, 81, 34 ]
}, {
    name: 'Net Revenue',
    data: [ 56, 76, 65, 80, 55, 15, 79, 78, 35, 35, 72, 22 ]
} ];

export default function Dashboard () {

    return (
        <>
            <Breadcrumb current="Dashboard" />

            <Row>
                <Col xl={ 5 } xxl={ 4 }>
                    <Row>
                        <Col className="col-12">
                            <Card>
                                <Card.Body className="p-0">
                                    <div className="widget-user-info">
                                        <div className="widget-user-info-header">
                                            <h2 className="font-weight-bold text-color-dark text-5">Hello, John Doe</h2>
                                            <p className="mb-0">Administrator</p>

                                            <div className="widget-user-acrostic bg-primary">
                                                <span className="font-weight-bold">Me</span>
                                            </div>
                                        </div>
                                        <div className="widget-user-info-body">
                                            <Row>
                                                <Col className="col-auto">
                                                    <strong className="text-color-dark text-5">$19,876.02</strong>
                                                    <h3 className="text-4-1">User Balance</h3>
                                                </Col>
                                                <Col className="col-auto">
                                                    <strong className="text-color-dark text-5">637</strong>
                                                    <h3 className="text-4-1">Products</h3>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <Button
                                                        as={ Link }
                                                        className="border font-weight-semibold text-color-dark text-3 mt-4"
                                                        variant="light"
                                                        size="xl"
                                                        to={ `${ process.env.PUBLIC_URL }/pages/user-profile` }
                                                    >
                                                        View Profile
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={ 6 } xl={ 12 } className="pb-2 pb-lg-0 mb-4 mb-lg-0">
                            <Card className="card-modern">
                                <Card.Body className="py-4">
                                    <Row className="align-items-center">
                                        <Col sm={ 4 } className="col-6">
                                            <h3 className="text-4-1 my-0">Total Orders</h3>
                                            <strong className="text-6 text-color-dark">4825</strong>
                                        </Col>
                                        <Col sm={ 4 } className="col-6 border border-top-0 border-right-0 border-bottom-0 border-color-light-grey py-3">
                                            <h3 className="text-4-1 text-color-success line-height-2 my-0">Orders <strong className="ws-nowrap">UP <i className="fas fa-long-arrow-alt-up"></i></strong></h3>
                                            <span>This month</span>
                                        </Col>
                                        <Col sm={ 4 } className="text-center text-sm-right mt-4 mt-sm-0">
                                            <i className="bx bx-cart-alt icon icon-inline icon-xl bg-primary rounded-circle text-color-light"></i>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={ 6 } xl={ 12 } className="pt-xl-2 mt-xl-4">
                            <Card className="card-modern">
                                <Card.Body className="py-4">
                                    <Row className="align-items-center">
                                        <Col sm={ 4 } className="col-6">
                                            <h3 className="text-4-1 my-0">Average Price</h3>
                                            <strong className="text-6 text-color-dark">$39.03</strong>
                                        </Col>
                                        <Col sm={ 4 } className="col-6 border border-top-0 border-right-0 border-bottom-0 border-color-light-grey py-3">
                                            <h3 className="text-4-1 text-color-danger line-height-2 my-0">Price <strong className="ws-nowrap">DOWN <i className="fas fa-long-arrow-alt-down"></i></strong></h3>
                                            <span>This month</span>
                                        </Col>
                                        <Col sm={ 4 } className="text-center text-sm-right mt-4 mt-sm-0">
                                            <i className="bx bx-purchase-tag-alt icon icon-inline icon-xl bg-primary rounded-circle text-color-light pr-0"></i>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>

                <Col xl={ 7 } xxl={ 8 } className="pt-2 pt-xl-0 mt-4 mt-xl-0">
                    <Row className="h-100">
                        <Col>
                            <Card className="card-modern h-100">
                                <Card.Header>
                                    <Card.Title>Revenue</Card.Title>
                                </Card.Header>
                                <Card.Body className="h-100 pt-2">
                                    <Row>
                                        <Col className="col-auto">
                                            <strong className="text-color-dark text-6">$19,986.02</strong>
                                            <h3 className="text-4 mt-0 mb-2">This Month</h3>
                                        </Col>
                                        <Col className="col-auto">
                                            <strong className="text-color-dark text-6">$14,345.26</strong>
                                            <h3 className="text-4 mt-0 mb-2">Last Month</h3>
                                        </Col>
                                        <Col className="col-auto">
                                            <strong className="text-color-dark text-6">$119,876.02</strong>
                                            <h3 className="text-4 mt-0 mb-2">Total Profit</h3>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col className="px-0">
                                            <Chart
                                                options={ options }
                                                series={ data }
                                                type="bar"
                                                height={ 400 }
                                            />
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col lg={ 6 } xl={ 5 } xxl={ 4 }>
                    <div className="d-flex flex-column h-100">
                        <Card className="card-modern">
                            <Card.Body className="py-4">
                                <Row className="align-items-center">
                                    <Col sm={ 4 } className="col-6">
                                        <h3 className="text-4-1 my-0">Total Customers</h3>
                                        <strong className="text-6 text-color-dark">3872</strong>
                                    </Col>
                                    <Col sm={ 4 } className="col-6 border border-top-0 border-right-0 border-bottom-0 border-color-light-grey py-3">
                                        <h3 className="text-4-1 text-color-success line-height-2 my-0">Customers <strong className="ws-nowrap">UP <i className="fas fa-long-arrow-alt-up"></i></strong></h3>
                                        <span>This month</span>
                                    </Col>
                                    <Col sm={ 4 } className="text-center text-sm-right mt-4 mt-sm-0">
                                        <i className="bx bx-user icon icon-inline icon-xl bg-primary rounded-circle text-color-light p-0"></i>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                        <Card className="card-modern flex-grow-1">
                            <Card.Header>
                                <Card.Title>Recent Activity</Card.Title>
                            </Card.Header>
                            <Card.Body className="h-100 pt-2" style={ { minHeight: "330px" } }>
                                <ul className="list list-unstyled mb-0">
                                    <li className="activity-item">
                                        <span className="activity-time">1 MIN AGO</span> <i className="fas fa-chevron-right text-color-primary"></i>
                                        <span className="activity-description">
                                            <Link to={ `${ process.env.PUBLIC_URL }/users/1` } className="text-color-dark"><strong>John Doe</strong></Link> Added <Link to={ `${ process.env.PUBLIC_URL }/products/13` } className="text-color-dark"><strong>Black Watch - L</strong></Link> to Cart.
                                            </span>
                                    </li>
                                    <li className="activity-item">
                                        <span className="activity-time">2 MINs AGO</span> <i className="fas fa-chevron-right text-color-primary"></i>
                                        <span className="activity-description">
                                            <Link to={ `${ process.env.PUBLIC_URL }/ecommerce/orders/1` } className="text-color-dark"><strong>Order #1</strong></Link> had payment refused.
                                            </span>
                                    </li>
                                    <li className="activity-item">
                                        <span className="activity-time">3 MINs AGO</span> <i className="fas fa-chevron-right text-color-primary"></i>
                                        <span className="activity-description">
                                            <Link to={ `${ process.env.PUBLIC_URL }/users/4` } className="text-color-dark"><strong>Joe Anita</strong></Link> added <Link to={ `${ process.env.PUBLIC_URL }/products/48` } className="text-color-dark"><strong>HD Camera</strong></Link> to Cart.
                                            </span>
                                    </li>
                                    <li className="activity-item">
                                        <span className="activity-time">4 MINs AGO</span> <i className="fas fa-chevron-right text-color-primary"></i>
                                        <span className="activity-description">
                                            <Link to={ `${ process.env.PUBLIC_URL }/ecommerce/orders/3` } className="text-color-dark"><strong>Order #3</strong></Link> had payment refused.
                                            </span>
                                    </li>
                                    <li className="activity-item">
                                        <span className="activity-time">5 MINs AGO</span> <i className="fas fa-chevron-right text-color-primary"></i>
                                        <span className="activity-description">
                                            <Link to={ `${ process.env.PUBLIC_URL }/users/3` } className="text-color-dark"><strong>Merle Brandell</strong></Link> added <Link to={ `${ process.env.PUBLIC_URL }/products/3` } className="text-color-dark"><strong>Laptop Case Bag</strong></Link> to Cart.
                                            </span>
                                    </li>
                                </ul>
                                <Button
                                    href="#viewActivities"
                                    className="border font-weight-semibold text-color-dark text-3 mt-3"
                                    variant="light"
                                    size="xl"
                                    onClick={ e => e.preventDefault() }
                                >View More</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
                <Col lg={ 6 } xl={ 4 } xxl={ 4 } className="pt-2 pt-lg-0 mt-4 mt-lg-0">
                    <Card className="card-modern h-100">
                        <Card.Header>
                            <Card.Title>Top 5 Selling Products</Card.Title>
                        </Card.Header>
                        <Card.Body className="h-100 pt-2">
                            <Table responsive className="table-ecommerce-simple table-no-collapse mb-1" style={ { minWidth: "454px" } }>
                                <thead>
                                    <tr>
                                        <th width="57"></th>
                                        <th>Product Name</th>
                                        <th width="90">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <Link to={ `${ process.env.PUBLIC_URL }/products/3` }>
                                                <img src={ `${ process.env.PUBLIC_URL }/mock-server/images/product9-150x150.jpg` } alt="product" width="45" height="45" />
                                            </Link>
                                        </td>
                                        <td>
                                            <Link to={ `${ process.env.PUBLIC_URL }/products/3` }>Laptop Case Bag</Link>
                                        </td>
                                        <td>
                                            <div className="product-price">
                                                <div className="regular-price on-sale">$1,999.00</div>
                                                <div className="sale-price">$1,699.00</div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Link to={ `${ process.env.PUBLIC_URL }/products/16` }>
                                                <img src={ `${ process.env.PUBLIC_URL }/mock-server/images/product8-150x150.jpg` } alt="product" width="60" height="60" />
                                            </Link>
                                        </td>
                                        <td>
                                            <Link to={ `${ process.env.PUBLIC_URL }/products/3` }>Black Gentle Shoes - Yellow, L</Link>
                                        </td>
                                        <td>$111.00</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Link to={ `${ process.env.PUBLIC_URL }/products/5` }>
                                                <img src={ `${ process.env.PUBLIC_URL }/mock-server/images/product16-150x150.jpg` } alt="product" width="60" height="60" />
                                            </Link>
                                        </td>
                                        <td>
                                            <Link to={ `${ process.env.PUBLIC_URL }/products/5` }>Brown Bag</Link>
                                        </td>
                                        <td>$299.00</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Link to={ `${ process.env.PUBLIC_URL }/products/44` }>
                                                <img src={ `${ process.env.PUBLIC_URL }/mock-server/images/product17-150x150.jpg` } alt="product" width="60" height="60" />
                                            </Link>
                                        </td>
                                        <td>
                                            <Link to={ `${ process.env.PUBLIC_URL }/products/44` }>Classic Earphone</Link>
                                        </td>
                                        <td>
                                            <div className="product-price">
                                                <div className="regular-price on-sale">$596.00</div>
                                                <div className="sale-price">$68.00</div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Link to={ `${ process.env.PUBLIC_URL }/products/46` }>
                                                <img src={ `${ process.env.PUBLIC_URL }/mock-server/images/product18-150x150.jpg` } alt="product" width="60" height="60" />
                                            </Link>
                                        </td>
                                        <td>
                                            <Link to={ `${ process.env.PUBLIC_URL }/products/46` }>Motor Cap</Link>
                                        </td>
                                        <td>
                                            <div className="product-price">
                                                <div className="regular-price on-sale">$199.00</div>
                                                <div className="sale-price">$109.00</div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={ 3 } xxl={ 4 } className="pt-2 pt-xl-0 mt-4 mt-xl-0">
                    <Card className="card-modern h-100">
                        <Card.Header>
                            <Card.Title>Customers By Location</Card.Title>
                        </Card.Header>
                        <Card.Body className="h-100 pt-2">
                            <label>Los Angeles (69.992)</label>
                            <ProgressBar
                                className="progress-xs mb-4 light rounded-0"
                                variant="primary"
                                srOnly
                                min={ 0 }
                                max={ 100 }
                                now={ 50 }
                            />
                            <label>Miami (41.953)</label>
                            <ProgressBar
                                className="progress-xs mb-4 light rounded-0"
                                variant="info"
                                srOnly
                                min={ 0 }
                                max={ 100 }
                                now={ 35 }
                            />
                            <label>New York (23.307)</label>
                            <ProgressBar
                                className="progress-xs mb-4 light rounded-0"
                                variant="primary"
                                srOnly
                                min={ 0 }
                                max={ 100 }
                                now={ 25 }
                            />
                            <label>Chicago (20.200)</label>
                            <ProgressBar
                                className="progress-xs mb-4 light rounded-0"
                                variant="info"
                                srOnly
                                min={ 0 }
                                max={ 100 }
                                now={ 22 }
                            />
                            <label>Detroit (19.550)</label>
                            <ProgressBar
                                className="progress-xs mb-5 light rounded-0"
                                variant="primary"
                                srOnly
                                min={ 0 }
                                max={ 100 }
                                now={ 19 }
                            />


                            <Button
                                as={ Link }
                                to={ `${ process.env.PUBLIC_URL }/users` }
                                className="border font-weight-semibold text-color-dark text-3 mb-4"
                                variant="light"
                                size="xl"
                            >View More</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row >

            <Row>
                <Col>
                    <Card className="card-modern">
                        <Card.Header>
                            <Card.Title>Recent Orders</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="datatables-header-footer-wrapper">
                                <Table
                                    className="table-ecommerce-simple mb-0"
                                    responsive="lg"
                                    striped
                                    style={ { minWidth: "600px" } }
                                >
                                    <thead>
                                        <tr>
                                            <th width="100">Order</th>
                                            <th width="30%">Customer &amp; Guests</th>
                                            <th>Date</th>
                                            <th>Status</th>
                                            <th className="text-lg-right">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><Link to={ `${ process.env.PUBLIC_URL }/ecommerce/orders/3` }><strong>#3</strong></Link></td>
                                            <td><Link to={ `${ process.env.PUBLIC_URL }/users/4` }>Joe Anita</Link></td>
                                            <td className="ws-nowrap">Mar 23, 2021</td>
                                            <td><span className="ecommerce-status on-hold">On Hold</span></td>
                                            <td className="text-lg-right">$5,680.75</td>
                                        </tr>
                                        <tr>
                                            <td><Link to={ `${ process.env.PUBLIC_URL }/ecommerce/orders/1` }><strong>#1</strong></Link></td>
                                            <td><Link to={ `${ process.env.PUBLIC_URL }/users/3` }>Merle Brandell</Link></td>
                                            <td className="ws-nowrap">Jan 05, 2021</td>
                                            <td><span className="ecommerce-status processing">Processing</span></td>
                                            <td className="text-lg-right">
                                                <span className="order-old-price mr-1">$903.00</span>
                                                <span className="order-new-price">$830.00</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}