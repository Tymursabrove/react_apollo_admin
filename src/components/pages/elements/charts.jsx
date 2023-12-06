import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import Chart from 'react-apexcharts';

import Breadcrumb from '../../common/breadcrumb';

import { withCardActions } from '../../hoc';

const CardWithActions = withCardActions( Card );

const barOptions = {
    dataLabels: {
        enabled: false
    },
    legend: {
        show: false
    },
    xaxis: {
        categories: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Nov" ]
    }
};

const barSeries = [ {
    name: "",
    data: [ 28, 42, 25, 23, 37, 33, 18, 14, 18, 15, 4, 7 ]
} ];

const lineOptions = {
    legend: {
        show: false
    },
    stroke: {
        curve: "smooth",
        lineCap: "round"
    },
    xaxis: {
        categories: [ "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020" ]
    }
};

const lineSeries = [ {
    name: "Series A",
    data: [ 100, 75, 50, 75, 50, 75, 100, 75, 45, 80, 70, 100 ]
}, {
    name: "Series B",
    data: [ 90, 65, 40, 65, 40, 65, 90, 65, 35, 70, 60, 90 ]
} ];

const areaOptions = {
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: "smooth",
        lineCap: "round"
    },
    xaxis: {
        categories: [ "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020" ]
    }
};

const areaSeries = [ {
    name: "Series A",
    data: [ 10, 100, 60, 75, 90, 75, 60, 75, 30, 45, 60, 75 ]
}, {
    name: "Series B",
    data: [ 30, 25, 25, 35, 20, 15, 10, 25, 10, 8, 9, 5 ]
} ];

const pieOptions = {
    legend: {
        show: false
    },
    lables: [ "Series 1", "Series 2", "Series 3", "Series 4" ],
    responsive: [ {
        breakpoint: 1400,
        options: {
            chart: {
                height: 300
            }
        }
    } ]
};

const pieSeries = [ 60, 10, 15, 15 ];

const donutOptions = {
    legend: {
        show: false
    },
    labels: [ "Porto Template", "Tuscon Template", "Porto Admin" ],
    plotOptions: {
        pie: {
            donut: {
                labels: {
                    show: true,
                    name: {
                        fontWeight: 700
                    },
                    value: {
                        fontWeight: 700
                    },
                    total: {
                        show: true,
                        fontWeight: 700
                    }
                }
            }
        }
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
};

const donutSeries = [ 32, 18, 20 ];

const scatterOptions = {
    xaxis: {
        tickAmount: 10
    }
};

const scatterSeries = [ {
    name: "Series A",
    data: generateScatterData( 50, 20 )
}, {
    name: "Series B",
    data: generateScatterData( 50, 20 )
}, {
    name: "Series C",
    data: generateScatterData( 50, 20 )
}, {
    name: "Series D",
    data: generateScatterData( 50, 20 )
} ];

const bubbleOptions = {
    dataLabels: {
        enabled: false
    },
    fill: {
        opacity: .8
    },
    xaxis: {
        tickAmount: 10
    }
};

const bubbleSeries = [ {
    name: "Sample 1",
    data: generateBubbleData( 15, 50, 15 )
}, {
    name: "Sample 2",
    data: generateBubbleData( 15, 50, 15 )
}, {
    name: "Sample 3",
    data: generateBubbleData( 15, 50, 15 )
} ];

const heatMapOptions = {
    dataLabels: {
        enabled: false
    },
    plotOptions: {
        heatmap: {
            shadeIntensity: .5
        }
    }
};

const heatMapSeries = [ {
    name: "Jan",
    data: generateScatterData( 50, 20 )
}, {
    name: "Feb",
    data: generateScatterData( 50, 20 )
}, {
    name: "Mar",
    data: generateScatterData( 50, 20 )
}, {
    name: "Apr",
    data: generateScatterData( 50, 20 )
}, {
    name: "May",
    data: generateScatterData( 50, 20 )
}, {
    name: "Jun",
    data: generateScatterData( 50, 20 )
}, {
    name: "Jul",
    data: generateScatterData( 50, 20 )
}, {
    name: "Aug",
    data: generateScatterData( 50, 20 )
}, {
    name: "Sep",
    data: generateScatterData( 50, 20 )
} ];

const radialOptions = {
    dataLabels: {
        enabled: false
    },
    labels: [ "Porto Template", "Porto Admin", "Tuscon Template", "Others" ],
    plotOptions: {
        radialBar: {
            dataLabels: {
                name: {
                    show: true,
                    fontWeight: 700
                },
                value: {
                    show: true,
                    fontWeight: 700
                },
                total: {
                    show: true,
                    fontWeight: 700
                }
            }
        }
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
};

const radarOptions = {
    xaxis: {
        categories: [ "2015", "2016", "2017", "2018", "2019", "2020" ]
    },
    stroke: {
        width: 0
    },
    fill: {
        opacity: .4
    },
    markers: {
        size: 0
    }
};

const radarSeries = [ {
    name: "Series A",
    data: [ 30, 40, 70, 20, 50, 10 ]
}, {
    name: "Series B",
    data: [ 60, 20, 30, 5, 60, 25 ]
}, {
    name: "Series C",
    data: [ 35, 25, 60, 30, 15, 75 ]
} ];

const candleOptions = {
    xaxis: {
        type: "datetime"
    },
    yaxis: {
        tickAmount: 10,
        min: 480,
        max: 520
    }
};

const candleSeries = [ {
    data: generateCandleData( 500, 10, 30 )
} ];

const mixedOptions = {
    xaxis: {
        categories: [ "1 Jan", "2 Jan", "3 Jan", "4 Jan", "5 Jan", "6 Jan", "7 Jan" ]
    },
    yaxis: [
        {
            axisTicks: {
                show: true
            },
            axisBorder: {
                show: true
            }
        }, {
            opposite: true,
            axisTicks: {
                show: true
            },
            axisBorder: {
                show: true
            }
        }
    ],
    stroke: {
        curve: "smooth",
        lineCap: "round"
    }
};

const mixedSeries = [ {
    name: "Series A",
    type: "line",
    data: [ 50, 70, 30, 20, 100, 80, 40 ]
}, {
    name: "Series B",
    type: "bar",
    data: [ 20, 50, 15, 50, 60, 10, 30 ]
} ];

function generateScatterData ( max, count ) {
    let temp = [];
    for ( let i = 0; i < count; i++ ) {
        let randX = ( Math.random() * max );
        let randY = ( Math.random() * max ).toFixed( 3 );
        temp.push( [ randX, randY ] );
    }
    return temp;
}

function generateBubbleData ( min, max, count ) {
    let temp = [];
    for ( let i = 0; i < count; i++ ) {
        let randX = ( Math.random() * max ) + min + min;
        let randY = ( Math.random() * max ).toFixed( 3 );
        let randZ = Math.floor( ( Math.random() * min + 4 - 4 ) ) + 4;
        temp.push( [ randX, randY, randZ ] );
    }
    return temp;
}

function generateCandleData ( initial, offset, count ) {
    let temp = [];
    for ( let i = 0; i < count; i++ ) {
        let x = new Date( Date.now() - ( count - 1 - i ) * 86400 ), y = [];
        for ( let j = 0; j < 4; j++ ) {
            let sign = Math.random() > 0.5 ? 1 : -1;
            y.push( initial + sign * ( Math.random() * offset ).toFixed( 2 ) );
        }
        temp.push( {
            x: x,
            y: y
        } );
    }
    return temp;
}

function ChartsPage () {
    return (
        <>
            <Breadcrumb current="Charts" paths={ [ {
                name: "Home",
                url: "/"
            }, {
                name: "Elements",
                url: "/elemnts"
            } ] } />

            <h4 className="my-0">Apex Charts</h4>
            <p className="mb-4">A modern JavaScript charting library to build interactive charts and visualizations with simple API.</p>

            <Row className="pt-4">
                <Col lg={ 6 }>
                    <CardWithActions className="mb-4">
                        <Card.Header>
                            <Card.Title>Bar Chart</Card.Title>
                        </Card.Header>

                        <Card.Body>
                            <Chart
                                type="bar"
                                options={ barOptions }
                                series={ barSeries }
                                height={ 400 }
                            />
                        </Card.Body>
                    </CardWithActions>
                </Col>

                <Col lg={ 6 }>
                    <CardWithActions>
                        <Card.Header>
                            <Card.Title>Line Chart</Card.Title>
                        </Card.Header>

                        <Card.Body>
                            <Chart
                                type="line"
                                options={ lineOptions }
                                series={ lineSeries }
                                height={ 400 }
                            />
                        </Card.Body>
                    </CardWithActions>
                </Col>
            </Row>

            <Row className="pt-4">
                <Col lg={ 6 }>
                    <CardWithActions className="mb-4">
                        <Card.Header>
                            <Card.Title>Area Chart</Card.Title>
                        </Card.Header>

                        <Card.Body>
                            <Chart
                                type="area"
                                options={ areaOptions }
                                series={ areaSeries }
                                height={ 400 }
                            />
                        </Card.Body>
                    </CardWithActions>
                </Col>

                <Col lg={ 6 }>
                    <CardWithActions>
                        <Card.Header>
                            <Card.Title>Pie Chart</Card.Title>
                        </Card.Header>

                        <Card.Body>
                            <Chart
                                type="pie"
                                options={ pieOptions }
                                series={ pieSeries }
                                height={ 415 }
                            />
                        </Card.Body>
                    </CardWithActions>
                </Col>
            </Row>

            <Row className="pt-4">
                <Col lg={ 6 }>
                    <CardWithActions className="mb-4">
                        <Card.Header>
                            <Card.Title>Donut Chart</Card.Title>
                        </Card.Header>

                        <Card.Body>
                            <Chart
                                type="donut"
                                options={ donutOptions }
                                series={ donutSeries }
                                height={ 415 }
                            />
                        </Card.Body>
                    </CardWithActions>
                </Col>

                <Col lg={ 6 }>
                    <CardWithActions>
                        <Card.Header>
                            <Card.Title>Scatter Chart</Card.Title>
                        </Card.Header>

                        <Card.Body>
                            <Chart
                                type="scatter"
                                options={ scatterOptions }
                                series={ scatterSeries }
                                height={ 400 }
                            />
                        </Card.Body>
                    </CardWithActions>
                </Col>
            </Row>

            <Row className="pt-4">
                <Col lg={ 6 }>
                    <CardWithActions className="mb-4">
                        <Card.Header>
                            <Card.Title>Bubble Chart</Card.Title>
                        </Card.Header>

                        <Card.Body>
                            <Chart
                                type="bubble"
                                options={ bubbleOptions }
                                series={ bubbleSeries }
                                height={ 400 }
                            />
                        </Card.Body>
                    </CardWithActions>
                </Col>

                <Col lg={ 6 }>
                    <CardWithActions>
                        <Card.Header>
                            <Card.Title>Heatmap Chart</Card.Title>
                        </Card.Header>

                        <Card.Body>
                            <Chart
                                type="heatmap"
                                options={ heatMapOptions }
                                series={ heatMapSeries }
                                height={ 400 }
                            />
                        </Card.Body>
                    </CardWithActions>
                </Col>
            </Row>

            <Row className="pt-4">
                <Col lg={ 6 }>
                    <CardWithActions className="mb-4">
                        <Card.Header>
                            <Card.Title>Radial Bar Chart</Card.Title>
                        </Card.Header>

                        <Card.Body>
                            <Chart
                                type="radialBar"
                                options={ radialOptions }
                                series={ [ 74, 23, 36, 48 ] }
                                height={ 400 }
                            />
                        </Card.Body>
                    </CardWithActions>
                </Col>

                <Col lg={ 6 }>
                    <CardWithActions>
                        <Card.Header>
                            <Card.Title>Heatmap Chart</Card.Title>
                        </Card.Header>

                        <Card.Body>
                            <Chart
                                type="radar"
                                options={ radarOptions }
                                series={ radarSeries }
                                height={ 400 }
                            />
                        </Card.Body>
                    </CardWithActions>
                </Col>
            </Row>

            <Row className="pt-4">
                <Col lg={ 6 }>
                    <CardWithActions className="mb-4">
                        <Card.Header>
                            <Card.Title>Candlestick Chart</Card.Title>
                        </Card.Header>

                        <Card.Body>
                            <Chart
                                type="candlestick"
                                options={ candleOptions }
                                series={ candleSeries }
                                height={ 400 }
                            />
                        </Card.Body>
                    </CardWithActions>
                </Col>

                <Col lg={ 6 }>
                    <CardWithActions>
                        <Card.Header>
                            <Card.Title>Mixed Chart</Card.Title>
                        </Card.Header>

                        <Card.Body>
                            <Chart
                                options={ mixedOptions }
                                series={ mixedSeries }
                                height={ 400 }
                            />
                        </Card.Body>
                    </CardWithActions>
                </Col>
            </Row>
        </>
    )
}

export default React.memo( ChartsPage );