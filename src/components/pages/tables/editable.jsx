import React, { useState } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import ReactTable from 'react-table';

import Breadcrumb from '../../common/breadcrumb';

import { withCardActions, editableTableHOC } from '../../hoc';

import media from './media.json';

const CardWithActions = withCardActions( Card );
const EditableTable = editableTableHOC( ReactTable );

function EditableTablesPage () {
    const [ data, setData ] = useState( media.map( ( medium, index ) => {
        return { ...medium, editing: false }
    } ) );

    function addRow () {
        setData( [
            {
                id: data.length + 1,
                name: "",
                alt_text: "",
                url: "",
                size: 0,
                editing: true
            },
            ...data
        ] );
    }

    function saveRow ( row, rowData ) {
        setData( data.map( item => {
            let temp = { ...item };
            if ( item.id === row ) {
                temp = {
                    ...rowData,
                    editing: false
                };
            }
            return temp;
        } ) );
    }

    function cancelRow ( row ) {
        setData( data.map( item => {
            item.id === row && ( item.editing = false );
            return item;
        } ) );
    }

    function removeRow ( row ) {
        setData( data.filter( item => item.id !== row ) );
    }

    function editRow ( row ) {
        setData( data.map( item => {
            item.id === row && ( item.editing = true );
            return item;
        } ) );
    }

    const columns = [ {
        Header: "Name",
        accessor: "name",
        editable: true
    }, {
        Header: "Alt Text",
        accessor: "alt_text",
        editable: true
    }, {
        Header: "Url",
        accessor: "copy_link",
        editable: true
    }, {
        Header: "Size",
        accessor: "size",
        Cell: row => ( row.value / 1024 ).toFixed( 2 ) + "KB",
        editable: true,
        min: 0
    } ];

    return (
        <>
            <Breadcrumb current="Editable Tables" paths={ [ {
                name: "Home",
                url: "/"
            }, {
                name: "Tables",
                url: "/tables"
            } ] } />

            <CardWithActions>
                <Card.Header>
                    <Card.Title>Default</Card.Title>
                </Card.Header>

                <Card.Body>
                    <Row>
                        <Col sm={ 6 }>
                            <div className="mb-3">
                                <Button variant="primary" onClick={ addRow }>Add <i className="fas fa-plus"></i></Button>
                            </div>
                        </Col>
                    </Row>

                    <EditableTable
                        className="table table-ecommerce-simple -striped mb-0"
                        keyField="id"
                        defaultPageSize={ 10 }
                        showPageJump={ false }
                        data={ data }
                        columns={ columns }
                        onEditRow={ editRow }
                        onRemoveRow={ removeRow }
                        onSaveRow={ saveRow }
                        onCancelRow={ cancelRow }
                    />
                </Card.Body>
            </CardWithActions>
        </>
    )
}

export default React.memo( EditableTablesPage );