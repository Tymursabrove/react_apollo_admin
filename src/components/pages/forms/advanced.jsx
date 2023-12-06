import React, { useState, useRef } from 'react';
import { Row, Col, Card, Form, InputGroup, Button, OverlayTrigger, Popover } from 'react-bootstrap';
import Select from 'react-select';
import MaskedInput from 'react-text-mask';
import DatePicker from 'react-datepicker';
import ColorPicker, { useColor } from "react-color-palette";
import { EditorState } from 'draft-js';
import { Editor } from "react-draft-wysiwyg";

import "react-color-palette/lib/css/styles.css";
import 'react-datepicker/dist/react-datepicker.css';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import Breadcrumb from '../../common/breadcrumb';
import PtRange from '../../features/elements/range';
import PtSwitch from '../../features/elements/switch';
import PtSpinner from '../../features/elements/spinner';
import PtTagsInput from '../../features/elements/tags-input';
import PtDropzone from '../../features/elements/dropzone';

import { withCardActions, withMaxLength } from '../../hoc';
import { COUNTRIES } from '../../../utils/data/constant';

const CardWithActions = withCardActions( Card );
const MaxLengthInput = withMaxLength( Form.Control );

function AdvancedFormsPage () {
    const tagsInput = useRef( null );
    const [ newTag, setNewTag ] = useState( '' );
    const [ singleValue, setSingleValue ] = useState( [ 50 ] );
    const [ values, setValues ] = useState( [ 25, 75 ] );
    const [ date1, setDate1 ] = useState( null );
    const [ from, setFrom ] = useState( null );
    const [ to, setTo ] = useState( null );
    const [ inline, setInline ] = useState( null );
    const [ color1, setColor1 ] = useColor( "hex", "#121212" );
    const [ color2, setColor2 ] = useColor( "hex", "#121212" );
    const [ color3, setColor3 ] = useColor( "hex", "#121212" );
    const [ edit, setEdit ] = useState( EditorState.createWithText( 'Start typing...' ) );

    function addTag () {
        tagsInput.current.addTag( {
            name: newTag,
            slug: newTag
        } );
        setNewTag( '' );
    }

    function onEditorStateChange ( state ) {
        setEdit( state );
    }

    return (
        <>
            <Breadcrumb current="Advanced Forms" paths={ [ {
                name: "Home",
                url: "/"
            }, {
                name: "Forms",
                url: "/forms"
            } ] }
            />

            <Row>
                <Col>
                    <CardWithActions>
                        <Card.Header>
                            <Card.Title>Select Replacement</Card.Title>
                        </Card.Header>

                        <Card.Body>
                            <Form className="form-horizontal form-bordered">
                                <Form.Group as={ Row } className="align-items-center">
                                    <Col lg={ 3 } as={ Form.Label } className="text-lg-right mb-lg-0">
                                        Basic Select
                                    </Col>
                                    <Col lg={ 6 }>
                                        <Select
                                            options={ COUNTRIES }
                                        />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={ Row } className="align-items-center">
                                    <Col lg={ 3 } as={ Form.Label } className="text-lg-right mb-lg-0">
                                        Multi-Value Select
                                    </Col>
                                    <Col lg={ 6 }>
                                        <Select
                                            isMulti={ true }
                                            isSearchable={ true }
                                            options={ COUNTRIES }
                                        />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={ Row } className="align-items-center">
                                    <Col lg={ 3 } as={ Form.Label } className="text-lg-right mb-lg-0">
                                        Placeholders
                                    </Col>
                                    <Col lg={ 6 }>
                                        <Select
                                            isSearchable={ true }
                                            placeholder="Select a state"
                                            options={ COUNTRIES }
                                        />
                                    </Col>
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </CardWithActions>
                </Col>
            </Row>

            <Row>
                <Col>
                    <CardWithActions>
                        <Card.Header>
                            <Card.Title>Tag Autocomplete</Card.Title>
                        </Card.Header>

                        <Card.Body>
                            <Form className="form-horizontal form-bordered ecommerce-form">
                                <Form.Group as={ Row }>
                                    <Col lg={ 3 } as={ Form.Label } className="text-lg-right pt-2">
                                        Input Tags
                                    </Col>

                                    <Col lg={ 7 }>
                                        <PtTagsInput value={ [ {
                                            name: "Amsterdam",
                                            slug: "amsterdam"
                                        }, {
                                            name: "Washington",
                                            slug: "washington"
                                        }, {
                                            name: "Sydney",
                                            slug: "sydney"
                                        }, {
                                            name: "Beijing",
                                            slug: "beijing"
                                        } ] } />
                                        <p>
                                            Use <code>PtTagsInput</code> component to make a tags input field.
                                        </p>
                                    </Col>
                                </Form.Group>

                                <Form.Group as={ Row }>
                                    <Col lg={ 3 } as={ Form.Label } className="text-lg-right pt-2">
                                        Input Tags
                                    </Col>

                                    <Col lg={ 7 }>
                                        <PtTagsInput
                                            ref={ tagsInput }
                                            value={ [ {
                                                name: "Amsterdam",
                                                slug: "amsterdam"
                                            }, {
                                                name: "Washington",
                                                slug: "washington"
                                            }, {
                                                name: "Sydney",
                                                slug: "sydney"
                                            }, {
                                                name: "Beijing",
                                                slug: "beijing"
                                            } ] } />
                                        <p className="my-1">Please add tag by using other form-control.</p>
                                        <InputGroup style={ { maxWidth: "360px" } }>
                                            <Form.Control
                                                type="text"
                                                value={ newTag }
                                                onChange={ e => setNewTag( e.target.value ) }
                                            />
                                            <InputGroup.Append>
                                                <Button variant="default" onClick={ addTag } disabled={ !newTag }>Add Tag</Button>
                                            </InputGroup.Append>
                                        </InputGroup>
                                        <p>
                                            Use <code>addTag</code> method to add tag programmatically.
                                        </p>
                                    </Col>
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </CardWithActions>
                </Col>
            </Row>

            <Row>
                <Col>
                    <CardWithActions>
                        <Card.Header>
                            <Card.Title>Toggle Switches</Card.Title>
                        </Card.Header>

                        <Card.Body>
                            <Form className="form-horizontal form-bordered">
                                <Form.Group as={ Row } className="align-items-center">
                                    <Col lg={ 3 } as={ Form.Label } className="text-lg-right mb-lg-0">
                                        Large
                                    </Col>

                                    <Col lg={ 9 }>
                                        { [ "primary", "success", "warning", "danger", "info", "dark" ].map( variant => (
                                            <PtSwitch
                                                className="mr-1"
                                                key={ variant }
                                                on={ true }
                                                size="lg"
                                                variant={ variant }
                                            />
                                        ) ) }
                                    </Col>
                                </Form.Group>

                                <Form.Group as={ Row } className="align-items-center">
                                    <Col lg={ 3 } as={ Form.Label } className="text-lg-right mb-lg-0">
                                        Default
                                    </Col>

                                    <Col lg={ 9 }>
                                        { [ "primary", "success", "warning", "danger", "info", "dark" ].map( variant => (
                                            <PtSwitch
                                                className="mr-1"
                                                key={ variant }
                                                on={ true }
                                                variant={ variant }
                                            />
                                        ) ) }
                                    </Col>
                                </Form.Group>

                                <Form.Group as={ Row } className="align-items-center">
                                    <Col lg={ 3 } as={ Form.Label } className="text-lg-right mb-lg-0">
                                        Small
                                    </Col>

                                    <Col lg={ 9 }>
                                        { [ "primary", "success", "warning", "danger", "info", "dark" ].map( variant => (
                                            <PtSwitch
                                                className="mr-1"
                                                key={ variant }
                                                on={ true }
                                                size="sm"
                                                variant={ variant }
                                            />
                                        ) ) }
                                    </Col>
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </CardWithActions>
                </Col>
            </Row>

            <Row>
                <Col>
                    <CardWithActions>
                        <Card.Header>
                            <Card.Title>Slider Range</Card.Title>
                        </Card.Header>

                        <Card.Body>
                            <Form className="form-horizontal form-bordered">
                                <Form.Group as={ Row }>
                                    <Col lg={ 3 } as={ Form.Label } className="text-lg-right mb-lg-0">One Value</Col>
                                    <Col lg={ 6 }>
                                        <PtRange
                                            variant="primary"
                                            step={ 1 }
                                            min={ 0 }
                                            max={ 100 }
                                            values={ singleValue }
                                            onChange={ values => setSingleValue( values ) }
                                        />
                                        <p>The current <code>value</code> is: <b className="min">{ singleValue[ 0 ] }</b></p>
                                    </Col>
                                </Form.Group>

                                <Form.Group as={ Row }>
                                    <Col lg={ 3 } as={ Form.Label } className="text-lg-right mb-lg-0">Range</Col>
                                    <Col lg={ 6 }>
                                        <PtRange
                                            variant="primary"
                                            step={ 1 }
                                            min={ 0 }
                                            max={ 100 }
                                            values={ values }
                                            onChange={ values => setValues( values ) }
                                        />
                                        <p>The <code>min</code> is: <b className="min">{ values[ 0 ] }</b> and the <code>max</code> is: <b className="max">{ values[ 1 ] }</b></p>
                                    </Col>
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </CardWithActions>
                </Col>
            </Row >

            <Row>
                <Col>
                    <CardWithActions>
                        <Card.Header>
                            <Card.Title>Spinners</Card.Title>
                        </Card.Header>

                        <Card.Body>
                            <Form className="form-horizontal form-bordered">
                                <Form.Group as={ Row } className="align-items-center">
                                    <Col lg={ 3 } as={ Form.Label } className="text-lg-right mb-lg-0">Default Spinner</Col>
                                    <Col lg={ 6 }>
                                        <PtSpinner value={ 1 } size="xs" />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={ Row } className="align-items-center">
                                    <Col lg={ 3 } as={ Form.Label } className="text-lg-right mb-lg-0">Disabled</Col>
                                    <Col lg={ 6 }>
                                        <PtSpinner value={ 1 } size="xs" disabled />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={ Row }>
                                    <Col lg={ 3 } as={ Form.Label } className="text-lg-right pt-2">Horizontal buttons</Col>
                                    <Col lg={ 6 }>
                                        <PtSpinner value={ 0 } min={ 0 } max={ 10 } isVertical={ false } />
                                        <p>
                                            with <code>max</code> value set to 10
                                        </p>
                                    </Col>
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </CardWithActions >
                </Col >
            </Row >

            <Row>
                <Col>
                    <CardWithActions>
                        <Card.Header>
                            <Card.Title>Masked Inputs</Card.Title>
                            <Card.Subtitle>Input masks allows a user to more easily enter fixed width input where you would like them to enter the data in a certain format (dates,phones, etc).</Card.Subtitle>
                        </Card.Header>

                        <Card.Body>
                            <Form className="form-horizontal form-bordered">
                                <Form.Group as={ Row } className="align-items-center">
                                    <Col lg={ 3 } as={ Form.Label } className="text-lg-right mb-lg-0">
                                        Date
                                    </Col>

                                    <Col lg={ 6 }>
                                        <InputGroup>
                                            <InputGroup.Prepend>
                                                <InputGroup.Text><i className="fas fa-calendar-alt"></i></InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <Form.Control
                                                as={ MaskedInput }
                                                mask={ [ /\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/ ] }
                                                placeholder="__/__/____"
                                            />
                                        </InputGroup>
                                    </Col>
                                </Form.Group>

                                <Form.Group as={ Row } className="align-items-center">
                                    <Col lg={ 3 } as={ Form.Label } className="text-lg-right mb-lg-0">
                                        Phone
                                    </Col>

                                    <Col lg={ 6 }>
                                        <InputGroup>
                                            <InputGroup.Prepend>
                                                <InputGroup.Text><i className="fas fa-phone"></i></InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <Form.Control
                                                as={ MaskedInput }
                                                mask={ [ '(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/ ] }
                                                placeholder="(123) 123-1234"
                                            />
                                        </InputGroup>
                                    </Col>
                                </Form.Group>

                                <Form.Group as={ Row } className="align-items-center">
                                    <Col lg={ 3 } as={ Form.Label } className="text-lg-right mb-lg-0">
                                        Product Key
                                    </Col>

                                    <Col lg={ 6 }>
                                        <InputGroup>
                                            <InputGroup.Prepend>
                                                <InputGroup.Text><i className="fas fa-tag"></i></InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <Form.Control
                                                as={ MaskedInput }
                                                mask={ [ '(', /[a-z]|[A-Z]/, /[a-z]|[A-Z]/, ')', ' ', /\d/, /\d/, '-', /\d/, /\d/, /\d/ ] }
                                                placeholder="(ab) 12-123"
                                            />
                                        </InputGroup>
                                    </Col>
                                </Form.Group>

                                <Form.Group as={ Row } className="align-items-center">
                                    <Col lg={ 3 } as={ Form.Label } className="text-lg-right mb-lg-0">
                                        SSN
                                    </Col>

                                    <Col lg={ 6 } className="align-items-center">
                                        <InputGroup>
                                            <InputGroup.Prepend>
                                                <InputGroup.Text><i className="fas fa-plus"></i></InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <Form.Control
                                                as={ MaskedInput }
                                                mask={ [ /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/ ] }
                                                placeholder="___-__-____"
                                            />
                                        </InputGroup>
                                    </Col>
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </CardWithActions>
                </Col>
            </Row>

            <Row>
                <Col>
                    <CardWithActions>
                        <Card.Header>
                            <Card.Title>Date Picker</Card.Title>
                        </Card.Header>

                        <Card.Body>
                            <Form className="form-horizontal form-bordered">
                                <Form.Group as={ Row } className="align-items-center">
                                    <Col lg={ 3 } as={ Form.Label } className="text-lg-right mb-lg-0">
                                        Default Datepicker
                                    </Col>

                                    <Col lg={ 6 }>
                                        <InputGroup>
                                            <InputGroup.Prepend>
                                                <InputGroup.Text><i className="fas fa-calendar-alt"></i></InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <Form.Control
                                                as="div"
                                                className="py-0"
                                            >
                                                <DatePicker
                                                    selected={ date1 }
                                                    onSelect={ date => setDate1( date ) }
                                                />
                                            </Form.Control>
                                        </InputGroup>
                                    </Col>
                                </Form.Group>

                                <Form.Group as={ Row } className="align-items-center">
                                    <Col lg={ 3 } as={ Form.Label } className="text-lg-right mb-lg-0">
                                        Date range
                                    </Col>

                                    <Col lg={ 6 }>
                                        <InputGroup className="input-daterange">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text><i className="fas fa-calendar-alt"></i></InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <Form.Control
                                                as="div"
                                                className="py-0"
                                            >
                                                <DatePicker
                                                    maxDate={ to }
                                                    selected={ from }
                                                    onSelect={ date => setFrom( date ) }
                                                />
                                            </Form.Control>
                                            <InputGroup.Text className="border-left-0 border-right-0 rounded-0">to</InputGroup.Text>
                                            <Form.Control
                                                as="div"
                                                className="py-0"
                                            >
                                                <DatePicker
                                                    minDate={ from }
                                                    selected={ to }
                                                    onSelect={ date => setTo( date ) }
                                                />
                                            </Form.Control>
                                        </InputGroup>
                                    </Col>
                                </Form.Group>

                                <Form.Group as={ Row }>
                                    <Col lg={ 3 } as={ Form.Label } className="text-lg-right pt-2">
                                        Inline
                                    </Col>

                                    <Col lg={ 6 }>
                                        <DatePicker
                                            inline
                                            selected={ inline }
                                            onSelect={ date => setInline( date ) }
                                        />
                                    </Col>
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </CardWithActions>
                </Col>
            </Row>

            <Row>
                <Col>
                    <CardWithActions>
                        <Card.Header>
                            <Card.Title>Color Pickers</Card.Title>
                        </Card.Header>

                        <Card.Body>
                            <Form className="form-horizontal form-bordered">
                                <Form.Group as={ Row } className="align-items-center">
                                    <Col as={ Form.Label } lg={ 3 } className="control-label text-lg-right pt-2">Default</Col>
                                    <Col lg={ 6 }>
                                        <OverlayTrigger
                                            trigger="click"
                                            placement="bottom"
                                            overlay={
                                                <Popover>
                                                    <div className="popover-body">
                                                        <ColorPicker width={ 150 } height={ 120 } color={ color1 } onChange={ setColor1 } hideHSB hideHEX />
                                                    </div>
                                                </Popover>
                                            }
                                        >
                                            <Form.Control
                                                type="text"
                                                value={ color1.hex }
                                                onChange={ () => { } }
                                            />
                                        </OverlayTrigger>
                                    </Col>
                                </Form.Group>

                                <Form.Group as={ Row } className="align-items-center">
                                    <Col as={ Form.Label } lg={ 3 } className="control-label text-lg-right pt-2">RGB</Col>
                                    <Col lg={ 6 }>
                                        <OverlayTrigger
                                            trigger="click"
                                            placement="bottom"
                                            overlay={
                                                <Popover>
                                                    <div className="popover-body">
                                                        <ColorPicker width={ 150 } height={ 120 } color={ color2 } onChange={ setColor2 } hideHSB hideHEX />
                                                    </div>
                                                </Popover>
                                            }
                                        >
                                            <Form.Control
                                                type="text"
                                                value={ `rgba(${ color2.rgb.r }, ${ color2.rgb.g }, ${ color2.rgb.b })` }
                                                onChange={ () => { } }
                                            />
                                        </OverlayTrigger>
                                    </Col>
                                </Form.Group>

                                <Form.Group as={ Row } className="align-items-center">
                                    <Col as={ Form.Label } lg={ 3 } className="control-label text-lg-right pt-2">Component</Col>
                                    <Col lg={ 6 }>
                                        <OverlayTrigger
                                            trigger="click"
                                            placement="bottom"
                                            overlay={
                                                <Popover>
                                                    <div className="popover-body">
                                                        <ColorPicker width={ 150 } height={ 120 } color={ color3 } onChange={ setColor3 } hideHSB hideHEX />
                                                    </div>
                                                </Popover>
                                            }
                                        >
                                            <InputGroup>
                                                <InputGroup.Prepend>
                                                    <InputGroup.Text className="input-group-addon"
                                                        style={ { background: color3.hex } }
                                                    >
                                                        <i style={ { width: "16px", height: "16px" } } />
                                                    </InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <Form.Control
                                                    type="text"
                                                    value={ `rgba(${ color3.rgb.r }, ${ color3.rgb.g }, ${ color3.rgb.b })` }
                                                    onChange={ () => { } }
                                                />
                                            </InputGroup>
                                        </OverlayTrigger>
                                    </Col>
                                </Form.Group>
                            </Form>

                        </Card.Body>
                    </CardWithActions>
                </Col>
            </Row>

            <Row>
                <Col>
                    <CardWithActions>
                        <Card.Header>
                            <Card.Title>MaxLength Control</Card.Title>
                        </Card.Header>

                        <Card.Body>
                            <Form className="form-horizontal form-bordered">
                                <Form.Group as={ Row }>
                                    <Col lg={ 3 } as={ Form.Label } className="text-lg-right pt-2">
                                        Input
                                    </Col>

                                    <Col lg={ 6 }>
                                        <MaxLengthInput type="text" maxLength={ 20 } />
                                        <p>
                                            <code>maxLength</code> set to 20.
                                        </p>
                                    </Col>
                                </Form.Group>

                                <Form.Group as={ Row }>
                                    <Col lg={ 3 } as={ Form.Label } className="text-lg-right pt-2">
                                        Textarea
                                    </Col>

                                    <Col lg={ 6 }>
                                        <MaxLengthInput as="textarea" rows={ 3 } maxLength={ 140 } />
                                        <p>
                                            <code>maxLength</code> set to 140.
                                        </p>
                                    </Col>
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </CardWithActions>
                </Col>
            </Row>

            <Row>
                <Col>
                    <CardWithActions>
                        <Card.Header>
                            <Card.Title>WYSIWYG Editors</Card.Title>
                        </Card.Header>

                        <Card.Body>
                            <Editor
                                editorClassName="form-control"
                                editorState={ edit }
                                editorStyle={ { minHeight: "300px" } }
                                onEditorStateChange={ onEditorStateChange }
                            />
                        </Card.Body>
                    </CardWithActions>
                </Col>
            </Row>

            <Row>
                <Col>
                    <CardWithActions>
                        <Card.Header>
                            <Card.Title>File Upload Drag'n Drop</Card.Title>
                        </Card.Header>

                        <Card.Body>
                            <PtDropzone />
                        </Card.Body>
                    </CardWithActions>
                </Col>
            </Row>
        </>
    )
}

export default React.memo( AdvancedFormsPage );