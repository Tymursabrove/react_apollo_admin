import React, { useState } from 'react';
import { Row, Col, Card, Button, Form, InputGroup } from 'react-bootstrap';
import Select from 'react-select';

import Breadcrumb from '../../common/breadcrumb';
import ErrorSummary from '../../features/error-summary';

import { withCardActions } from '../../hoc';
import { COUNTRIES } from '../../../utils/data/constant';

const CardWithActions = withCardActions( Card );

function FormValidationPage () {
    const [ validated, setValidated ] = useState( [ false, false, false, false ] );
    const [ selected, setSelected ] = useState( null );
    const [ multiple, setMultiple ] = useState( [] );
    const [ checked, setChecked ] = useState( [] );

    function toggleChecked ( e ) {
        let temp = [ ...checked ];
        let index = temp.findIndex( item => item === e.target.value );
        index >= 0 ? temp.splice( index, 1 ) : temp.push( e.target.value );
        setChecked( temp );
    }

    function handleSubmit ( e, index ) {
        e.preventDefault();
        if ( e.currentTarget.checkValidity() === false ) {
            e.stopPropagation();
        }

        let temp = [ ...validated ];
        temp[ index ] = true;
        setValidated( temp );
    }

    return (
        <>
            <Breadcrumb current="Form Validation" paths={ [ {
                name: "Home",
                url: "/"
            }, {
                name: "Forms",
                url: "/forms"
            } ] } />

            <Row>
                <Col lg={ 6 } className="mb-4">
                    <Form
                        className="form-horizontal"
                        noValidate
                        validated={ validated[ 0 ] }
                        onSubmit={ e => handleSubmit( e, 0 ) }
                    >
                        <CardWithActions>
                            <Card.Header>
                                <Card.Title>Basic Form Validation</Card.Title>
                                <Card.Subtitle>Basic validation will display a label with the error after the form control.</Card.Subtitle>
                            </Card.Header>

                            <Card.Body>
                                <Form.Group as={ Row } className="align-items-center">
                                    <Col as={ Form.Label } sm={ 3 } className="text-sm-right mb-lg-0">
                                        Full Name <span className="required">*</span>
                                    </Col>
                                    <Col sm={ 9 }>
                                        <Form.Control
                                            type="text"
                                            placeholder="eg.: John Doe"
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">This field is required.</Form.Control.Feedback>
                                    </Col>
                                </Form.Group>

                                <Form.Group as={ Row } className="align-items-center">
                                    <Col as={ Form.Label } sm={ 3 } className="text-sm-right mb-lg-0">
                                        Email <span className="required">*</span>
                                    </Col>
                                    <Col sm={ 9 }>
                                        <InputGroup>
                                            <InputGroup.Prepend>
                                                <InputGroup.Text><i className="fas fa-envelope"></i></InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <Form.Control
                                                type="email"
                                                placeholder="eg.: email@email.com"
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid">Please enter a valid email address.</Form.Control.Feedback>
                                        </InputGroup>
                                    </Col>
                                </Form.Group>

                                <Form.Group as={ Row } className="align-items-center">
                                    <Col as={ Form.Label } sm={ 3 } className="text-sm-right mb-lg-0">
                                        GitHub</Col>
                                    <Col sm={ 9 }>
                                        <Form.Control
                                            type="url"
                                            placeholder="eg.: https://github.com/johndoe"
                                        />
                                        <Form.Control.Feedback type="invalid">Please enter a valid url.</Form.Control.Feedback>
                                    </Col>
                                </Form.Group>

                                <Form.Group as={ Row }>
                                    <Col as={ Form.Label } sm={ 3 } className="text-sm-right pt-2">
                                        Skills <span className="required">*</span>
                                    </Col>
                                    <Col sm={ 9 }>
                                        <Form.Control
                                            as="textarea"
                                            rows={ 5 }
                                            placeholder="Describe your skills"
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">This field is required</Form.Control.Feedback>
                                    </Col>
                                </Form.Group>
                            </Card.Body>

                            <Card.Footer>
                                <Row className="justify-content-end">
                                    <Col sm={ 9 }>
                                        <Button type="submit" variant="primary" className="mr-2">Submit</Button>
                                        <Button type="reset" variant="default">Reset</Button>
                                    </Col>
                                </Row>
                            </Card.Footer>
                        </CardWithActions>
                    </Form>
                </Col>

                <Col lg={ 6 } className="mb-4">
                    <Form
                        className="form-horizontal"
                        noValidate
                        onSubmit={ e => handleSubmit( e, 1 ) }
                    >
                        <CardWithActions>
                            <Card.Header>
                                <Card.Title>Validating Checkbox and Radios</Card.Title>
                                <Card.Subtitle>Easily validate checkboxes and raidos tags.</Card.Subtitle>
                            </Card.Header>

                            <Card.Body>
                                <Form.Group as={ Row } className={ validated[ 1 ] ? "was-validated" : "" }>
                                    <Col as={ Form.Label } sm={ 3 } className="text-sm-right pt-2">
                                        Porto Admin is <span className="required">*</span>
                                    </Col>
                                    <Col sm={ 9 }>
                                        <Form.Check
                                            type="radio"
                                            custom
                                            required
                                            id="radiobox-1"
                                            className="radio-primary"
                                            label="Awesome"
                                            name="radios"
                                        />
                                        <Form.Check
                                            type="radio"
                                            custom
                                            id="radiobox-2"
                                            className="radio-primary"
                                            label="Awesome"
                                            name="radios"
                                        />
                                        <Form.Check
                                            type="radio"
                                            custom
                                            id="radiobox-3"
                                            className="radio-primary"
                                            label="Awesome"
                                            name="radios"
                                        />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={ Row }>
                                    <Col as={ Form.Label } sm={ 3 } className="text-sm-right pt-2">
                                        I will use it for <span className="required">*</span>
                                    </Col>
                                    <Col sm={ 9 }>
                                        <Form.Check
                                            custom
                                            id="checkbox-1"
                                            value="project"
                                            label="My Project"
                                            isValid={ !validated[ 1 ] ? null : checked.length }
                                            isInvalid={ !validated[ 1 ] ? null : !checked.length }
                                            onChange={ toggleChecked }
                                        />
                                        <Form.Check
                                            custom
                                            id="checkbox-2"
                                            value="website"
                                            label="My Website"
                                            isValid={ !validated[ 1 ] ? null : checked.length }
                                            isInvalid={ !validated[ 1 ] ? null : !checked.length }
                                            onChange={ toggleChecked }
                                        />
                                        <Form.Check
                                            custom
                                            id="checkbox-3"
                                            value="all"
                                            label="All things I do"
                                            isValid={ !validated[ 1 ] ? null : checked.length }
                                            isInvalid={ !validated[ 1 ] ? null : !checked.length }
                                            onChange={ toggleChecked }
                                        />
                                        <Form.Control.Feedback type="invalid">This field is required.</Form.Control.Feedback>
                                    </Col>
                                </Form.Group>
                            </Card.Body>

                            <Card.Footer>
                                <Row className="justify-content-end">
                                    <Col sm={ 9 }>
                                        <Button type="submit" variant="primary" className="mr-2">Submit</Button>
                                        <Button type="reset" variant="default">Reset</Button>
                                    </Col>
                                </Row>
                            </Card.Footer>
                        </CardWithActions>
                    </Form>
                </Col>
            </Row>

            <Row className="pt-0">
                <Col lg={ 6 } className="mb-4">
                    <Form
                        className="form-horizontal"
                        noValidate
                        validated={ validated[ 2 ] }
                        onSubmit={ e => handleSubmit( e, 2 ) }
                    >
                        <CardWithActions>
                            <Card.Header>
                                <Card.Title>Validation Summary</Card.Title>
                                <Card.Subtitle>Validation summary will display an error list above the form.</Card.Subtitle>
                            </Card.Header>

                            <Card.Body>
                                <div className="validation-message" id="summary"></div>
                                <Form.Group as={ Row } className="align-items-center">
                                    <Col as={ Form.Label } sm={ 3 } className="text-sm-right mb-lg-0">
                                        Full Name <span className="required">*</span>
                                    </Col>
                                    <Col sm={ 9 }>
                                        <Form.Control
                                            id="name"
                                            title="Please enter a name."
                                            placeholder="eg.: John Doe"
                                            required
                                        />
                                        <ErrorSummary target="summary" validated={ validated[ 2 ] }>
                                            <Form.Label className="error" htmlFor="name">This field is required.</Form.Label>
                                        </ErrorSummary>
                                    </Col>
                                </Form.Group>

                                <Form.Group as={ Row } className="align-items-center">
                                    <Col as={ Form.Label } sm={ 3 } className="text-sm-right mb-lg-0">
                                        Email <span className="required">*</span>
                                    </Col>
                                    <Col sm={ 9 }>
                                        <Form.Control
                                            required
                                            id="email"
                                            type="email"
                                            placeholder="eg.: john@doe.com"
                                        />
                                        <ErrorSummary target="summary" validated={ validated[ 2 ] }>
                                            <Form.Label className="error" htmlFor="email">Please enter a valid email address.</Form.Label>
                                        </ErrorSummary>
                                    </Col>
                                </Form.Group>

                                <Form.Group as={ Row } className="align-items-center">
                                    <Col as={ Form.Label } sm={ 3 } className="text-sm-right mb-lg-0">
                                        GitHub
                                    </Col>
                                    <Col sm={ 9 }>
                                        <Form.Control
                                            id="git"
                                            type="url"
                                            placeholder="eg.: https://github.com/johndoe"
                                        />
                                        <ErrorSummary target="summary" validated={ validated[ 2 ] }>
                                            <Form.Label className="error" htmlFor="git">Please enter a valid url.</Form.Label>
                                        </ErrorSummary>
                                    </Col>
                                </Form.Group>

                                <Form.Group as={ Row }>
                                    <Col as={ Form.Label } sm={ 3 } className="text-sm-right pt-2">
                                        Resume <span className="required">*</span>
                                    </Col>
                                    <Col sm={ 9 }>
                                        <Form.Control
                                            as="textarea"
                                            id="resume"
                                            required
                                            placeholder="Enter your resume"
                                            rows={ 5 }
                                        />

                                        <ErrorSummary target="summary" validated={ validated[ 2 ] }>
                                            <Form.Label className="error" htmlFor="resume">Your resume is too short.</Form.Label>
                                        </ErrorSummary>
                                    </Col>
                                </Form.Group>
                            </Card.Body>

                            <Card.Footer>
                                <Row className="justify-content-end">
                                    <Col sm={ 9 }>
                                        <Button className="mr-2" type="submit" variant="primary">Submit</Button>
                                        <Button type="reset" variant="default">Reset</Button>
                                    </Col>
                                </Row>
                            </Card.Footer>
                        </CardWithActions>
                    </Form>
                </Col>

                <Col lg={ 6 }>
                    <Form
                        noValidate
                        validated={ validated[ 3 ] }
                        onSubmit={ e => handleSubmit( e, 3 ) }
                    >
                        <CardWithActions>
                            <Card.Header>
                                <Card.Title>Validation Selects</Card.Title>
                                <Card.Subtitle>Easily validate select tags, does not matter if is single or multiple.</Card.Subtitle>
                            </Card.Header>

                            <Card.Body>
                                <Form.Group as={ Row } className="align-items-center">
                                    <Col as={ Form.Label } sm={ 3 } className="text-sm-right mb-lg-0">
                                        Company
                                    </Col>
                                    <Col sm={ 9 }>
                                        <Form.Control
                                            as="select"
                                            required
                                        >
                                            <option value="">Choose a Company</option>
                                            <option value="apple">Apple</option>
                                            <option value="google">Goggle</option>
                                            <option value="microsoft">Microoft</option>
                                            <option value="yahoo">Yahoo</option>
                                        </Form.Control>
                                        <Form.Control.Feedback type="invalid">Please select at least one company</Form.Control.Feedback>
                                    </Col>
                                </Form.Group>

                                <Form.Group as={ Row }>
                                    <Col as={ Form.Label } sm={ 3 } className="text-sm-right pt-2">
                                        Browsers
                                    </Col>
                                    <Col sm={ 9 }>
                                        <Form.Control
                                            as="select"
                                            required
                                            multiple
                                        >
                                            <option value="chrome">Chrome / Safari</option>
                                            <option value="ff">Firefox</option>
                                            <option value="ie">Internet Explorer</option>
                                            <option value="opera">Opera</option>
                                        </Form.Control>
                                        <Form.Control.Feedback type="invalid">Please select at least one browser</Form.Control.Feedback>
                                    </Col>
                                </Form.Group>

                                <Form.Group as={ Row } className="align-items-center">
                                    <Col as={ Form.Label } sm={ 3 } className="text-sm-right mb-lg-0">
                                        State
                                    </Col>
                                    <Col sm={ 9 }>
                                        <Select
                                            options={ COUNTRIES }
                                            value={ selected }
                                            onChange={ option => setSelected( option ) }
                                            placeholder="Choose a State"
                                        />
                                        <Form.Control
                                            required
                                            className="d-none"
                                            value={ selected ? selected.value : '' }
                                            readOnly
                                        />
                                        <Form.Control.Feedback type="invalid">Please select at least one state</Form.Control.Feedback>
                                    </Col>
                                </Form.Group>

                                <Form.Group as={ Row } className="align-items-center">
                                    <Col as={ Form.Label } sm={ 3 } className="text-sm-right mb-lg-0">
                                        Multi-Value Select
                                    </Col>
                                    <Col sm={ 9 }>
                                        <Select
                                            options={ COUNTRIES }
                                            isMulti
                                            value={ multiple }
                                            onChange={ options => setMultiple( options ) }
                                        />
                                        <Form.Control
                                            required
                                            className="d-none"
                                            readOnly
                                            value={ multiple ? multiple.map( option => option.value ).join( "," ) : '' }
                                        />
                                        <Form.Control.Feedback type="invalid">Please select at least one state</Form.Control.Feedback>
                                    </Col>
                                </Form.Group>
                            </Card.Body>

                            <Card.Footer>
                                <Row className="justify-content-end">
                                    <Col sm={ 9 }>
                                        <Button className="mr-2" type="submit" variant="primary">Submit</Button>
                                        <Button type="reset" variant="default">Reset</Button>
                                    </Col>
                                </Row>
                            </Card.Footer>
                        </CardWithActions>
                    </Form>
                </Col>
            </Row>
        </>
    )
}

export default React.memo( FormValidationPage );