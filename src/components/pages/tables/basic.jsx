import React from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';

import Breadcrumb from '../../common/breadcrumb';

import { withCardActions } from '../../hoc';

const CardWithActions = withCardActions( Card );

function BasicTablesPage () {

    function prevent ( e ) {
        e.preventDefault();
    }

    return (
        <>
            <Breadcrumb current="Basic Tables" paths={ [ {
                name: "Home",
                url: "/"
            }, {
                name: "Tables",
                url: "/tables"
            } ] } />

            <Row className="mt-0">
                <Col lg={ 6 }>
                    <CardWithActions className="mb-4">
                        <Card.Header>
                            <Card.Title>Basic</Card.Title>
                        </Card.Header>

                        <Card.Body>
                            <Table
                                className="mb-0"
                                responsive={ true }
                            >
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Username</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </CardWithActions>
                </Col>

                <Col lg={ 6 }>
                    <CardWithActions className="mb-4">
                        <Card.Header>
                            <Card.Title>Striped</Card.Title>
                        </Card.Header>

                        <Card.Body>
                            <Table
                                className="mb-0"
                                responsive={ true }
                                striped
                            >
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Username</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </CardWithActions>
                </Col>
            </Row>

            <Row className="pt-0">
                <Col lg={ 6 }>
                    <CardWithActions className="mb-4">
                        <Card.Header>
                            <Card.Title>Bordered</Card.Title>
                        </Card.Header>

                        <Card.Body>
                            <Table
                                className="mb-0"
                                responsive={ true }
                                bordered
                            >
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Username</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </CardWithActions>
                </Col>

                <Col lg={ 6 }>
                    <CardWithActions className="mb-4">
                        <Card.Header>
                            <Card.Title>Hover Rows</Card.Title>
                        </Card.Header>

                        <Card.Body>
                            <Table
                                className="mb-0"
                                responsive={ true }
                                hover
                            >
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Username</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </CardWithActions>
                </Col>
            </Row>

            <Row className="pt-0">
                <Col lg={ 6 }>
                    <CardWithActions className="mb-4">
                        <Card.Header>
                            <Card.Title>Contextual</Card.Title>
                        </Card.Header>

                        <Card.Body>
                            <Table
                                className="mb-0"
                                responsive={ true }
                            >
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Class</th>
                                        <th>Text</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="active">
                                        <td>1</td>
                                        <td>active</td>
                                        <td>Lorem ipsum dolor sit amet</td>
                                    </tr>
                                    <tr className="primary">
                                        <td>2</td>
                                        <td>primary</td>
                                        <td>Lorem ipsum dolor sit amet</td>
                                    </tr>
                                    <tr className="success">
                                        <td>3</td>
                                        <td>success</td>
                                        <td>Lorem ipsum dolor sit amet</td>
                                    </tr>
                                    <tr className="warning">
                                        <td>4</td>
                                        <td>warning</td>
                                        <td>Lorem ipsum dolor sit amet</td>
                                    </tr>
                                    <tr className="danger">
                                        <td>5</td>
                                        <td>danger</td>
                                        <td>Lorem ipsum dolor sit amet</td>
                                    </tr>
                                    <tr className="info">
                                        <td>6</td>
                                        <td>info</td>
                                        <td>Lorem ipsum dolor sit amet</td>
                                    </tr>
                                    <tr className="dark">
                                        <td>7</td>
                                        <td>dark</td>
                                        <td>Lorem ipsum dolor sit amet</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </CardWithActions>
                </Col>

                <Col lg={ 6 }>
                    <CardWithActions className="mb-4">
                        <Card.Header>
                            <Card.Title>Condensed</Card.Title>
                        </Card.Header>

                        <Card.Body>
                            <Table
                                className="mb-0"
                                responsive={ true }
                                size="sm"
                            >
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Username</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                    <tr>
                                        <td>7</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <td>8</td>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <td>9</td>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <td>10</td>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </CardWithActions>
                </Col>
            </Row>

            <Row className="pt-0">
                <Col lg={ 6 }>
                    <CardWithActions className="mb-4">
                        <Card.Header>
                            <Card.Title>Actions</Card.Title>
                        </Card.Header>

                        <Card.Body>
                            <Table
                                className="mb-0"
                                responsive={ true }
                            >
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Username</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                        <td className="actions">
                                            <a href="#edit" onClick={ prevent }><i className="fas fa-pencil-alt"></i></a>
                                            <a href="#delete" onClick={ prevent } className="delete-row"><i className="far fa-trash-alt"></i></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                        <td className="actions">
                                            <a href="#edit" onClick={ prevent }><i className="fas fa-pencil-alt"></i></a>
                                            <a href="#delete" onClick={ prevent } className="delete-row"><i className="far fa-trash-alt"></i></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                        <td className="actions">
                                            <a href="#edit" onClick={ prevent }><i className="fas fa-pencil-alt"></i></a>
                                            <a href="#delete" onClick={ prevent } className="delete-row"><i className="far fa-trash-alt"></i></a>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </CardWithActions>
                </Col>

                <Col lg={ 6 }>
                    <CardWithActions className="mb-4">
                        <Card.Header>
                            <Card.Title>Actions Hover</Card.Title>
                        </Card.Header>

                        <Card.Body>
                            <Table
                                className="mb-0"
                                responsive={ true }
                            >
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Username</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                        <td className="actions-hover">
                                            <a href="#edit" onClick={ prevent }><i className="fas fa-pencil-alt"></i></a>
                                            <a href="#delete" onClick={ prevent } className="delete-row"><i className="far fa-trash-alt"></i></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                        <td className="actions-hover">
                                            <a href="#edit" onClick={ prevent }><i className="fas fa-pencil-alt"></i></a>
                                            <a href="#delete" onClick={ prevent } className="delete-row"><i className="far fa-trash-alt"></i></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                        <td className="actions-hover">
                                            <a href="#edit" onClick={ prevent }><i className="fas fa-pencil-alt"></i></a>
                                            <a href="#delete" onClick={ prevent } className="delete-row"><i className="far fa-trash-alt"></i></a>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </CardWithActions>
                </Col>
            </Row>

            <Row className="pt-0">
                <Col lg={ 6 }>
                    <CardWithActions className="mb-4">
                        <Card.Header>
                            <Card.Title>Actions Hover with fade</Card.Title>
                        </Card.Header>

                        <Card.Body>
                            <Table
                                className="mb-0"
                                responsive={ true }
                            >
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Username</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                        <td className="actions-hover actions-fade">
                                            <a href="#edit" onClick={ prevent }><i className="fas fa-pencil-alt"></i></a>
                                            <a href="#delete" onClick={ prevent } className="delete-row"><i className="far fa-trash-alt"></i></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                        <td className="actions-hover actions-fade">
                                            <a href="#edit" onClick={ prevent }><i className="fas fa-pencil-alt"></i></a>
                                            <a href="#delete" onClick={ prevent } className="delete-row"><i className="far fa-trash-alt"></i></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                        <td className="actions-hover actions-fade">
                                            <a href="#edit" onClick={ prevent }><i className="fas fa-pencil-alt"></i></a>
                                            <a href="#delete" onClick={ prevent } className="delete-row"><i className="far fa-trash-alt"></i></a>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </CardWithActions>
                </Col>

                <Col lg={ 6 }>
                    <CardWithActions className="mb-4">
                        <Card.Header>
                            <Card.Title>Hover Rows + Actions Hover with fade</Card.Title>
                        </Card.Header>

                        <Card.Body>
                            <Table
                                className="mb-0"
                                responsive={ true }
                                hover
                            >
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Username</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                        <td className="actions-hover actions-fade">
                                            <a href="#edit" onClick={ prevent }><i className="fas fa-pencil-alt"></i></a>
                                            <a href="#delete" onClick={ prevent } className="delete-row"><i className="far fa-trash-alt"></i></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                        <td className="actions-hover actions-fade">
                                            <a href="#edit" onClick={ prevent }><i className="fas fa-pencil-alt"></i></a>
                                            <a href="#delete" onClick={ prevent } className="delete-row"><i className="far fa-trash-alt"></i></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                        <td className="actions-hover actions-fade">
                                            <a href="#edit" onClick={ prevent }><i className="fas fa-pencil-alt"></i></a>
                                            <a href="#delete" onClick={ prevent } className="delete-row"><i className="far fa-trash-alt"></i></a>
                                        </td>
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

export default React.memo( BasicTablesPage );