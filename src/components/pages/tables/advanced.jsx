import React from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

import Breadcrumb from '../../common/breadcrumb';

import { withCardActions } from '../../hoc'

import data from './media.json';

const CardWithActions = withCardActions( Card );

const columns1 = [ {
    Header: "Name",
    accessor: "name"
}, {
    Header: "Url",
    accessor: "copy_link"
}, {
    Header: "Size",
    accessor: "size",
    Cell: row => ( row.value / 1024 ).toFixed( 2 ) + "KB"
} ];

const columns2 = [ {
    Header: "Dimension",
    id: "dimension",
    accessor: d => d.width + ' x ' + d.height
}, {
    Header: "Names",
    accessor: "name",
    Aggregated: "Check these aggregated media",
    Cell: ( row ) => (
        <a target="blank" href={ `${ process.env.PUBLIC_URL }/mock-server/images/${ row.original.copy_link }` }>{ row.value }</a>
    )
} ];

const columns3 = [ {
    Header: "",
    className: "text-center",
    expander: true,
    width: 45,
    Expander: ( { isExpanded } ) => {
        return (
            <i className={ `far h5 m-0 text-color-primary va-middle ${ isExpanded ? "fa-minus-square" : "fa-plus-square" }` }></i>
        )
    }
}, {
    Header: "Name",
    accessor: "name"
}, {
    Header: "Url",
    accessor: "copy_link"
}, {
    Header: "Size",
    accessor: "size",
    Cell: row => ( row.value / 1024 ).toFixed( 2 ) + "KB"
} ];

function AdvancedTablesPage () {
    return (
        <>
            <Breadcrumb current="Advanced Tables" paths={ [ {
                name: "Home",
                url: "/"
            }, {
                name: "Tables",
                url: "/tables"
            } ] } />

            <Row>
                <Col>
                    <CardWithActions>
                        <Card.Header>
                            <Card.Title>Basic</Card.Title>
                        </Card.Header>

                        <Card.Body>
                            <ReactTable
                                className="table table-ecommerce-simple -striped mb-0"
                                columns={ columns1 }
                                data={ data.slice( 0, 30 ) }
                                defaultPageSize={ 10 }
                                showPageJump={ false }
                            />
                        </Card.Body>
                    </CardWithActions>
                </Col>
            </Row>

            <Row>
                <Col>
                    <CardWithActions>
                        <Card.Header>
                            <Card.Title>Aggregated Table</Card.Title>
                        </Card.Header>

                        <Card.Body>
                            <ReactTable
                                className="table table-ecommerce-simple -striped mb-0"
                                columns={ columns2 }
                                data={ data.slice( 0, 30 ) }
                                defaultPageSize={ 10 }
                                pivotBy={ [ "dimension" ] }
                                showPageJump={ false }
                            />
                        </Card.Body>
                    </CardWithActions>
                </Col>
            </Row>

            <Row>
                <Col>
                    <CardWithActions>
                        <Card.Header>
                            <Card.Title>Rows with Details</Card.Title>
                        </Card.Header>

                        <Card.Body>
                            <ReactTable
                                className="table table-ecommerce-simple -striped mb-0"
                                columns={ columns3 }
                                data={ data.slice( 0, 30 ) }
                                defaultPageSize={ 10 }
                                showPageJump={ false }
                                SubComponent={ ( { original } ) => {
                                    return (
                                        <div className="p-4">
                                            <h5 className="font-weight-bold mt-0">Media Details</h5>
                                            <Table className="mb-0" striped bordered>
                                                <tbody>
                                                    <tr className="b-top-0">
                                                        <td>Width:</td>
                                                        <td>{ original.width }px</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Height:</td>
                                                        <td>{ original.height }px</td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    )
                                } }
                            />
                        </Card.Body>
                    </CardWithActions>
                </Col>
            </Row>
        </>
    )
}

export default React.memo( AdvancedTablesPage );