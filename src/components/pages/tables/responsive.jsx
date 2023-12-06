import React from 'react';
import { Row, Col, Alert, Card, Table } from 'react-bootstrap';

import Breadcrumb from '../../common/breadcrumb';

import { withCardActions } from '../../hoc';

const CardWithActions = withCardActions( Card );

function ResponsiveTablesPage () {
    return (
        <>
            <Breadcrumb current="Responsive Tables" paths={ [ {
                name: "Home",
                url: "/"
            }, {
                name: "Tables",
                url: "/tables"
            } ] } />

            <Alert variant="info">Resize the browser to see the responsiveness in action.</Alert>

            <Row>
                <Col>
                    <CardWithActions>
                        <Card.Header>
                            <Card.Title>Bootstrap Responsive</Card.Title>
                        </Card.Header>

                        <Card.Body>
                            <Table
                                className="mb-0"
                                responsive="lg"
                                bordered
                                striped
                            >
                                <thead>
                                    <tr>
                                        <th>Code</th>
                                        <th>Company</th>
                                        <th className="text-right">Price</th>
                                        <th className="text-right">Change</th>
                                        <th className="text-right" style={ { minWidth: "80px" } }>Change %</th>
                                        <th className="text-right">Open</th>
                                        <th className="text-right">High</th>
                                        <th className="text-right">Low</th>
                                        <th className="text-right">Volume</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>AAC</td>
                                        <td>AUSTRALIAN AGRICULTURAL COMPANY LIMITED.</td>
                                        <td className="text-right">$1.38</td>
                                        <td className="text-right">-0.01</td>
                                        <td className="text-right">-0.36%</td>
                                        <td className="text-right">$1.39</td>
                                        <td className="text-right">$1.39</td>
                                        <td className="text-right">$1.38</td>
                                        <td className="text-right">9,395</td>
                                    </tr>
                                    <tr>
                                        <td>AAD</td>
                                        <td>ARDENT LEISURE GROUP</td>
                                        <td className="text-right">$1.15</td>
                                        <td className="text-right">  +0.02</td>
                                        <td className="text-right">1.32%</td>
                                        <td className="text-right">$1.14</td>
                                        <td className="text-right">$1.15</td>
                                        <td className="text-right">$1.13</td>
                                        <td className="text-right">56,431</td>
                                    </tr>
                                    <tr>
                                        <td>AAX</td>
                                        <td>AUSENCO LIMITED</td>
                                        <td className="text-right">$4.00</td>
                                        <td className="text-right">-0.04</td>
                                        <td className="text-right">-0.99%</td>
                                        <td className="text-right">$4.01</td>
                                        <td className="text-right">$4.05</td>
                                        <td className="text-right">$4.00</td>
                                        <td className="text-right">90,641</td>
                                    </tr>
                                    <tr>
                                        <td>ABC</td>
                                        <td>ADELAIDE BRIGHTON LIMITED</td>
                                        <td className="text-right">$3.00</td>
                                        <td className="text-right">  +0.06</td>
                                        <td className="text-right">2.04%</td>
                                        <td className="text-right">$2.98</td>
                                        <td className="text-right">$3.00</td>
                                        <td className="text-right">$2.96</td>
                                        <td className="text-right">862,518</td>
                                    </tr>
                                    <tr>
                                        <td>ABP</td>
                                        <td>ABACUS PROPERTY GROUP</td>
                                        <td className="text-right">$1.91</td>
                                        <td className="text-right">0.00</td>
                                        <td className="text-right">0.00%</td>
                                        <td className="text-right">$1.92</td>
                                        <td className="text-right">$1.93</td>
                                        <td className="text-right">$1.90</td>
                                        <td className="text-right">595,701</td>
                                    </tr>
                                    <tr>
                                        <td>ABY</td>
                                        <td>ADITYA BIRLA MINERALS LIMITED</td>
                                        <td className="text-right">$0.77</td>
                                        <td className="text-right">  +0.02</td>
                                        <td className="text-right">2.00%</td>
                                        <td className="text-right">$0.76</td>
                                        <td className="text-right">$0.77</td>
                                        <td className="text-right">$0.76</td>
                                        <td className="text-right">54,567</td>
                                    </tr>
                                    <tr>
                                        <td>ACR</td>
                                        <td>ACRUX LIMITED</td>
                                        <td className="text-right">$3.71</td>
                                        <td className="text-right">  +0.01</td>
                                        <td className="text-right">0.14%</td>
                                        <td className="text-right">$3.70</td>
                                        <td className="text-right">$3.72</td>
                                        <td className="text-right">$3.68</td>
                                        <td className="text-right">191,373</td>
                                    </tr>
                                    <tr>
                                        <td>ADU</td>
                                        <td>ADAMUS RESOURCES LIMITED</td>
                                        <td className="text-right">$0.72</td>
                                        <td className="text-right">0.00</td>
                                        <td className="text-right">0.00%</td>
                                        <td className="text-right">$0.73</td>
                                        <td className="text-right">$0.74</td>
                                        <td className="text-right">$0.72</td>
                                        <td className="text-right">8,602,291</td>
                                    </tr>
                                    <tr>
                                        <td>AGG</td>
                                        <td>ANGLOGOLD ASHANTI LIMITED</td>
                                        <td className="text-right">$7.81</td>
                                        <td className="text-right">-0.22</td>
                                        <td className="text-right">-2.74%</td>
                                        <td className="text-right">$7.82</td>
                                        <td className="text-right">$7.82</td>
                                        <td className="text-right">$7.81</td>
                                        <td className="text-right">148</td>
                                    </tr>
                                    <tr>
                                        <td>AGK</td>
                                        <td>AGL ENERGY LIMITED</td>
                                        <td className="text-right">$13.82</td>
                                        <td className="text-right">  +0.02</td>
                                        <td className="text-right">0.14%</td>
                                        <td className="text-right">$13.83</td>
                                        <td className="text-right">$13.83</td>
                                        <td className="text-right">$13.67</td>
                                        <td className="text-right">846,403</td>
                                    </tr>
                                    <tr>
                                        <td>AGO</td>
                                        <td>ATLAS IRON LIMITED</td>
                                        <td className="text-right">$3.17</td>
                                        <td className="text-right">-0.02</td>
                                        <td className="text-right">-0.47%</td>
                                        <td className="text-right">$3.11</td>
                                        <td className="text-right">$3.22</td>
                                        <td className="text-right">$3.10</td>
                                        <td className="text-right">5,416,303</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </CardWithActions>
                </Col>
            </Row>

            <Row>
                <Col>
                    <CardWithActions>
                        <Card.Header>
                            <Card.Title>No More Tables</Card.Title>
                        </Card.Header>

                        <Card.Body>
                            <Table
                                className="table-no-more mb-0"
                                striped
                                bordered
                            >
                                <thead>
                                    <tr>
                                        <th className="text-right">Code</th>
                                        <th className="text-right">Company</th>
                                        <th className="text-right">Price</th>
                                        <th className="text-right">Change</th>
                                        <th className="text-right" style={ { minWidth: "80px" } }>Change %</th>
                                        <th className="text-right">Open</th>
                                        <th className="text-right ">High</th>
                                        <th className="text-right ">Low</th>
                                        <th className="text-right">Volume</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td data-title="Code" className="text-right">AAC</td>
                                        <td data-title="Company" className="text-right">AUSTRALIAN AGRICULTURAL COMPANY LIMITED.</td>
                                        <td data-title="Price" className="text-right">$1.38</td>
                                        <td data-title="Change" className="text-right ">-0.01</td>
                                        <td data-title="Change %" className="text-right">-0.36%</td>
                                        <td data-title="Open" className="text-right">$1.39</td>
                                        <td data-title="High" className="text-right ">$1.39</td>
                                        <td data-title="Low" className="text-right ">$1.38</td>
                                        <td data-title="Volume" className="text-right">9,395</td>
                                    </tr>
                                    <tr>
                                        <td data-title="Code" className="text-right">AAD</td>
                                        <td data-title="Company" className="text-right">ARDENT LEISURE GROUP</td>
                                        <td data-title="Price" className="text-right">$1.15</td>
                                        <td data-title="Change" className="text-right ">  +0.02</td>
                                        <td data-title="Change %" className="text-right">1.32%</td>
                                        <td data-title="Open" className="text-right">$1.14</td>
                                        <td data-title="High" className="text-right ">$1.15</td>
                                        <td data-title="Low" className="text-right ">$1.13</td>
                                        <td data-title="Volume" className="text-right">56,431</td>
                                    </tr>
                                    <tr>
                                        <td data-title="Code" className="text-right">AAX</td>
                                        <td data-title="Company" className="text-right">AUSENCO LIMITED</td>
                                        <td data-title="Price" className="text-right">$4.00</td>
                                        <td data-title="Change" className="text-right ">-0.04</td>
                                        <td data-title="Change %" className="text-right">-0.99%</td>
                                        <td data-title="Open" className="text-right">$4.01</td>
                                        <td data-title="High" className="text-right ">$4.05</td>
                                        <td data-title="Low" className="text-right ">$4.00</td>
                                        <td data-title="Volume" className="text-right">90,641</td>
                                    </tr>
                                    <tr>
                                        <td data-title="Code" className="text-right">ABC</td>
                                        <td data-title="Company" className="text-right">ADELAIDE BRIGHTON LIMITED</td>
                                        <td data-title="Price" className="text-right">$3.00</td>
                                        <td data-title="Change" className="text-right ">  +0.06</td>
                                        <td data-title="Change %" className="text-right">2.04%</td>
                                        <td data-title="Open" className="text-right">$2.98</td>
                                        <td data-title="High" className="text-right ">$3.00</td>
                                        <td data-title="Low" className="text-right ">$2.96</td>
                                        <td data-title="Volume" className="text-right">862,518</td>
                                    </tr>
                                    <tr>
                                        <td data-title="Code" className="text-right">ABP</td>
                                        <td data-title="Company" className="text-right">ABACUS PROPERTY GROUP</td>
                                        <td data-title="Price" className="text-right">$1.91</td>
                                        <td data-title="Change" className="text-right ">0.00</td>
                                        <td data-title="Change %" className="text-right">0.00%</td>
                                        <td data-title="Open" className="text-right">$1.92</td>
                                        <td data-title="High" className="text-right ">$1.93</td>
                                        <td data-title="Low" className="text-right ">$1.90</td>
                                        <td data-title="Volume" className="text-right">595,701</td>
                                    </tr>
                                    <tr>
                                        <td data-title="Code" className="text-right">ABY</td>
                                        <td data-title="Company" className="text-right">ADITYA BIRLA MINERALS LIMITED</td>
                                        <td data-title="Price" className="text-right">$0.77</td>
                                        <td data-title="Change" className="text-right ">  +0.02</td>
                                        <td data-title="Change %" className="text-right">2.00%</td>
                                        <td data-title="Open" className="text-right">$0.76</td>
                                        <td data-title="High" className="text-right ">$0.77</td>
                                        <td data-title="Low" className="text-right ">$0.76</td>
                                        <td data-title="Volume" className="text-right">54,567</td>
                                    </tr>
                                    <tr>
                                        <td data-title="Code" className="text-right">ACR</td>
                                        <td data-title="Company" className="text-right">ACRUX LIMITED</td>
                                        <td data-title="Price" className="text-right">$3.71</td>
                                        <td data-title="Change" className="text-right ">  +0.01</td>
                                        <td data-title="Change %" className="text-right">0.14%</td>
                                        <td data-title="Open" className="text-right">$3.70</td>
                                        <td data-title="High" className="text-right ">$3.72</td>
                                        <td data-title="Low" className="text-right ">$3.68</td>
                                        <td data-title="Volume" className="text-right">191,373</td>
                                    </tr>
                                    <tr>
                                        <td data-title="Code" className="text-right">ADU</td>
                                        <td data-title="Company" className="text-right">ADAMUS RESOURCES LIMITED</td>
                                        <td data-title="Price" className="text-right">$0.72</td>
                                        <td data-title="Change" className="text-right ">0.00</td>
                                        <td data-title="Change %" className="text-right">0.00%</td>
                                        <td data-title="Open" className="text-right">$0.73</td>
                                        <td data-title="High" className="text-right ">$0.74</td>
                                        <td data-title="Low" className="text-right ">$0.72</td>
                                        <td data-title="Volume" className="text-right">8,602,291</td>
                                    </tr>
                                    <tr>
                                        <td data-title="Code" className="text-right">AGG</td>
                                        <td data-title="Company" className="text-right">ANGLOGOLD ASHANTI LIMITED</td>
                                        <td data-title="Price" className="text-right">$7.81</td>
                                        <td data-title="Change" className="text-right ">-0.22</td>
                                        <td data-title="Change %" className="text-right">-2.74%</td>
                                        <td data-title="Open" className="text-right">$7.82</td>
                                        <td data-title="High" className="text-right ">$7.82</td>
                                        <td data-title="Low" className="text-right ">$7.81</td>
                                        <td data-title="Volume" className="text-right">148</td>
                                    </tr>
                                    <tr>
                                        <td data-title="Code" className="text-right">AGK</td>
                                        <td data-title="Company" className="text-right">AGL ENERGY LIMITED</td>
                                        <td data-title="Price" className="text-right">$13.82</td>
                                        <td data-title="Change" className="text-right ">  +0.02</td>
                                        <td data-title="Change %" className="text-right">0.14%</td>
                                        <td data-title="Open" className="text-right">$13.83</td>
                                        <td data-title="High" className="text-right ">$13.83</td>
                                        <td data-title="Low" className="text-right ">$13.67</td>
                                        <td data-title="Volume" className="text-right">846,403</td>
                                    </tr>
                                    <tr>
                                        <td data-title="Code" className="text-right">AGO</td>
                                        <td data-title="Company" className="text-right">ATLAS IRON LIMITED</td>
                                        <td data-title="Price" className="text-right">$3.17</td>
                                        <td data-title="Change" className="text-right ">-0.02</td>
                                        <td data-title="Change %" className="text-right">-0.47%</td>
                                        <td data-title="Open" className="text-right">$3.11</td>
                                        <td data-title="High" className="text-right ">$3.22</td>
                                        <td data-title="Low" className="text-right ">$3.10</td>
                                        <td data-title="Volume" className="text-right">5,416,303</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </CardWithActions>
                </Col>
            </Row>
        </>
    )
}

export default React.memo( ResponsiveTablesPage );