import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Form, Button, Collapse } from 'react-bootstrap';
import { SlideToggle } from 'react-slide-toggle';
import Select from 'react-select';
import { toast } from 'react-toastify';

import Breadcrumb from '../../common/breadcrumb';
import DeleteConfirmModal from '../../features/modals/delete-confirm-modal';
import Loader from '../../features/loader';
import PNotify from '../../features/elements/p-notify';

import { getUser } from '../../../api';
import { COUNTRIES, STATES } from '../../../utils/data/constant';

export default function UserDetail ( props ) {
    const [ user, setUser ] = useState( null );
    const [ loading, setLoading ] = useState( true );
    const [ resetPwd, setResetPwd ] = useState( false );
    const [ pwd, setPwd ] = useState( '' );
    const [ pwdConfirm, setPwdConfirm ] = useState( '' );
    const [ diffShipping, setDiffShipping ] = useState( true );
    const [ shipping, setShipping ] = useState( null );
    const [ openModal, setOpenModal ] = useState( false );
    const billingStates = useMemo( () => {
        return user && user.billing_country ? STATES[ user.billing_country ] : [];
    }, [ user ] );
    const shippingStates = useMemo( () => {
        return shipping && shipping.country ? STATES[ shipping.country ] : [];
    }, [ shipping ] )

    useEffect( () => {
        setLoading( true );
        getUser( parseInt( props.match.params.id ) ).then( result => {
            setUser( result );
            setShipping( {
                first_name: result.shipping_first_name ? result.shipping_first_name : '',
                last_name: result.shipping_last_name ? result.shipping_last_name : '',
                company: result.shipping_company ? result.shipping_company : '',
                address_1: result.shipping_address_1 ? result.shipping_address_1 : '',
                address_2: result.shipping_address_2 ? result.shipping_address_2 : '',
                city: result.shipping_city ? result.shipping_city : '',
                state: result.shipping_state ? result.shipping_state : '',
                country: result.shipping_country ? result.shipping_country : '',
                postcode: result.shipping_postcode ? result.shipping_postcode : ''
            } )
            setLoading( false );
        } );
    }, [ props.match.params.id ] )

    function saveUser ( e ) {
        e.preventDefault();
        toast(
            <PNotify title="Success" icon="fas fa-check" text="User saved successfully." />,
            {
                containerId: "default",
                className: "notification-success"
            }
        );
    }

    function deleteUser ( e ) {
        e.preventDefault();
        setOpenModal( true );
    }

    function deleteConfirm ( result ) {
        setOpenModal( false );
        result && props.history.push( `${ process.env.PUBLIC_URL }/users` );
    }

    function userChange ( key, value ) {
        let temp = { ...user };
        temp[ key ] = value;
        setUser( temp );
    }

    function shippingChange ( key, value ) {
        let temp = { ...shipping };
        temp[ key ] = value;
        setShipping( temp );
    }

    return (
        <>
            {
                loading ? <Loader />
                    :
                    <>
                        <Breadcrumb current="Edit User" paths={ [ {
                            name: 'Home',
                            url: '/'
                        }, {
                            name: 'users',
                            url: `/users`
                        } ] } />

                        <Form className="ecommerce-form" action="#" method="post" onSubmit={ saveUser }>
                            <Row>
                                <Col>
                                    <Card className="card-modern card-big-info">
                                        <Card.Body>
                                            <Row>
                                                <Col lg="2-5" xl="1-5">
                                                    <i className="card-big-info-icon bx bx-user-circle"></i>
                                                    <h2 className="card-big-info-title">Account Info</h2>
                                                    <p className="card-big-info-desc">Add here the user account info.</p>
                                                </Col>
                                                <Col lg="3-5" xl="4-5">
                                                    <Form.Group as={ Row } className="align-items-center">
                                                        <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">First Name</Col>
                                                        <Col lg={ 7 } xl={ 6 }>
                                                            <Form.Control
                                                                type="text"
                                                                className="form-control-modern"
                                                                value={ user.first_name ? user.first_name : '' }
                                                                onChange={ e => userChange( 'first_name', e.target.value ) }
                                                                required
                                                            />
                                                        </Col>
                                                    </Form.Group>
                                                    <Form.Group as={ Row } className="align-items-center">
                                                        <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">Last Name</Col>
                                                        <Col lg={ 7 } xl={ 6 }>
                                                            <Form.Control
                                                                type="text"
                                                                className="form-control-modern"
                                                                value={ user.last_name ? user.last_name : '' }
                                                                onChange={ e => userChange( 'last_name', e.target.value ) }
                                                                required
                                                            />
                                                        </Col>
                                                    </Form.Group>
                                                    <Form.Group as={ Row } className="align-items-center">
                                                        <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">Email</Col>
                                                        <Col lg={ 7 } xl={ 6 }>
                                                            <Form.Control
                                                                type="email"
                                                                className="form-control-modern"
                                                                value={ user.email }
                                                                onChange={ e => userChange( 'email', e.target.value ) }
                                                                required
                                                            />
                                                        </Col>
                                                    </Form.Group>
                                                    <Form.Group as={ Row } className="align-items-center">
                                                        <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">Password Reset</Col>
                                                        <Col lg={ 7 } xl={ 6 }>
                                                            <Form.Check
                                                                className="checkbox-default"
                                                                custom
                                                                id="checkboxExample1"
                                                                checked={ resetPwd }
                                                                onChange={ e => { setResetPwd( e.target.checked ) } }
                                                                label="Do you want to reset password?"
                                                            />
                                                        </Col>
                                                    </Form.Group>
                                                    <Collapse in={ resetPwd }>
                                                        <Form.Group style={ { margin: "0 -15px" } } className="py-0 mb-0">
                                                            <Form.Group as={ Row } className="align-items-center mx-0 pt-3">
                                                                <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">Password</Col>
                                                                <Col lg={ 7 } xl={ 6 }>
                                                                    <Form.Control
                                                                        type="password"
                                                                        className="form-control-modern"
                                                                        value={ pwd }
                                                                        onChange={ e => setPwd( e.target.value ) }
                                                                    />
                                                                </Col>
                                                            </Form.Group>
                                                            <Form.Group as={ Row } className="align-items-center mx-0 mb-3">
                                                                <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">Password Confirm</Col>
                                                                <Col lg={ 7 } xl={ 6 }>
                                                                    <Form.Control
                                                                        type="password"
                                                                        className="form-control-modern"
                                                                        value={ pwdConfirm }
                                                                        onChange={ e => setPwdConfirm( e.target.value ) }
                                                                    />
                                                                </Col>
                                                            </Form.Group>
                                                        </Form.Group>
                                                    </Collapse>
                                                    <Form.Group as={ Row } className="align-items-center">
                                                        <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">Manage Role</Col>
                                                        <Col lg={ 7 } xl={ 6 }>
                                                            <Form.Control
                                                                as="select"
                                                                className="form-control-modern"
                                                                value={ user.role_id }
                                                                onChange={ e => userChange( 'role_id', parseInt( e.target.value ) ) }
                                                            >
                                                                <option value="2">Customer</option>
                                                                <option value="4">Vendor</option>
                                                                <option value="7">Administrator</option>
                                                            </Form.Control>
                                                        </Col>
                                                    </Form.Group>
                                                    <Form.Group as={ Row }>
                                                        <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mt-lg-2 mb-0">Description</Col>
                                                        <Col lg={ 7 } xl={ 6 }>
                                                            <Form.Control
                                                                as="textarea"
                                                                rows="5"
                                                                className="form-control-modern"
                                                                value={ user.description ? user.description : '' }
                                                                onChange={ e => userChange( 'description', e.target.value ) }
                                                                required
                                                            />
                                                        </Col>
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Card className="card-modern card-big-info">
                                        <Card.Body>
                                            <Row>
                                                <Col lg="2-5" xl="1-5">
                                                    <i className="card-big-info-icon bx bx-dollar-circle"></i>
                                                    <h2 className="card-big-info-title">Billing Info</h2>
                                                    <p className="card-big-info-desc">
                                                        Add here the customer billing info with all
                                                        details and necessary information.
                                                    </p>
                                                </Col>
                                                <Col lg="3-5" xl="4-5">
                                                    <Form.Group as={ Row } className="align-items-center">
                                                        <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">First Name</Col>
                                                        <Col lg={ 7 } xl={ 6 }>
                                                            <Form.Control
                                                                type="text"
                                                                className="form-control-modern"
                                                                value={ user.billing_first_name ? user.billing_first_name : '' }
                                                                onChange={ e => userChange( 'billing_first_name', e.target.value ) }
                                                            />
                                                        </Col>
                                                    </Form.Group>
                                                    <Form.Group as={ Row } className="align-items-center">
                                                        <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">Last Name</Col>
                                                        <Col lg={ 7 } xl={ 6 }>
                                                            <Form.Control
                                                                type="text"
                                                                className="form-control-modern"
                                                                value={ user.billing_last_name ? user.billing_last_name : '' }
                                                                onChange={ e => userChange( 'billing_last_name', e.target.value ) }
                                                            />
                                                        </Col>
                                                    </Form.Group>
                                                    <Form.Group as={ Row } className="align-items-center">
                                                        <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">Company</Col>
                                                        <Col lg={ 7 } xl={ 6 }>
                                                            <Form.Control
                                                                type="text"
                                                                className="form-control-modern"
                                                                value={ user.billing_company ? user.billing_company : '' }
                                                                onChange={ e => userChange( 'billing_company', e.target.value ) }
                                                            />
                                                        </Col>
                                                    </Form.Group>
                                                    <Form.Group as={ Row } className="align-items-center">
                                                        <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">Address Line 1</Col>
                                                        <Col lg={ 7 } xl={ 6 }>
                                                            <Form.Control
                                                                type="text"
                                                                className="form-control-modern"
                                                                value={ user.billing_address_1 ? user.billing_address_1 : '' }
                                                                onChange={ e => userChange( 'billing_address_1', e.target.value ) }
                                                            />
                                                        </Col>
                                                    </Form.Group>
                                                    <Form.Group as={ Row } className="align-items-center">
                                                        <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">Address Line 2</Col>
                                                        <Col lg={ 7 } xl={ 6 }>
                                                            <Form.Control
                                                                type="text"
                                                                className="form-control-modern"
                                                                value={ user.billing_address_2 ? user.billing_address_2 : '' }
                                                                onChange={ e => userChange( 'billing_address_2', e.target.value ) }
                                                            />
                                                        </Col>
                                                    </Form.Group>
                                                    <Form.Group as={ Row } className="align-items-center">
                                                        <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">City</Col>
                                                        <Col lg={ 7 } xl={ 6 }>
                                                            <Form.Control
                                                                type="text"
                                                                className="form-control-modern"
                                                                value={ user.billing_city ? user.billing_city : '' }
                                                                onChange={ e => userChange( 'billing_city', e.target.value ) }
                                                            />
                                                        </Col>
                                                    </Form.Group>
                                                    <Form.Group as={ Row } className="align-items-center">
                                                        <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">Postcode / ZIP</Col>
                                                        <Col lg={ 7 } xl={ 6 }>
                                                            <Form.Control
                                                                type="text"
                                                                className="form-control-modern"
                                                                value={ user.billing_postcode ? user.billing_postcode : '' }
                                                                onChange={ e => userChange( 'billing_postcode', e.target.value ) }
                                                            />
                                                        </Col>
                                                    </Form.Group>
                                                    <Form.Group as={ Row } className="align-items-center">
                                                        <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">Country</Col>
                                                        <Col lg={ 7 } xl={ 6 }>
                                                            <Select
                                                                isSearchable={ true }
                                                                options={ COUNTRIES }
                                                                onChange={ option => userChange( 'billing_country', option.value ) }
                                                            />
                                                        </Col>
                                                    </Form.Group>
                                                    <Form.Group as={ Row } className="align-items-center">
                                                        <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">State / Province</Col>
                                                        <Col lg={ 7 } xl={ 6 }>
                                                            {
                                                                billingStates && billingStates.length ?
                                                                    <Select
                                                                        isSearchable={ true }
                                                                        options={ billingStates }
                                                                        onChange={ option => userChange( 'billing_state', option.value ) }
                                                                    />
                                                                    :
                                                                    <Form.Control
                                                                        type="text"
                                                                        className="form-control-modern"
                                                                        value={ user.billing_state ? user.billing_state : '' }
                                                                        onChange={ e => userChange( 'billing_state', e.target.value ) }
                                                                    />
                                                            }
                                                        </Col>
                                                    </Form.Group>
                                                    <Form.Group as={ Row } className="align-items-center">
                                                        <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">Phone</Col>
                                                        <Col lg={ 7 } xl={ 6 }>
                                                            <Form.Control
                                                                type="tel"
                                                                className="form-control-modern"
                                                                value={ user.phone ? user.phone : '' }
                                                                onChange={ e => userChange( 'phone', e.target.value ) }
                                                            />
                                                        </Col>
                                                    </Form.Group>
                                                    <Form.Group as={ Row } className="align-items-center">
                                                        <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">Email address</Col>
                                                        <Col lg={ 7 } xl={ 6 }>
                                                            <Form.Control
                                                                type="email"
                                                                className="form-control-modern"
                                                                value={ user.billing_email ? user.billing_email : '' }
                                                                onChange={ e => userChange( 'billing_email', e.target.value ) }
                                                            />
                                                        </Col>
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Card className="card-modern card-big-info">
                                        <Card.Body>
                                            <Row>
                                                <Col lg="2-5" xl="1-5">
                                                    <i className="card-big-info-icon bx bx-mail-send"></i>
                                                    <h2 className="card-big-info-title">Shipping Info</h2>
                                                    <p className="card-big-info-desc">
                                                        Add here the customer shipping info with all
                                                        details and necessary information.
                                                    </p>
                                                </Col>
                                                <Col lg="3-5" xl="4-5">
                                                    <SlideToggle>
                                                        { ( { onToggle, setCollapsibleElement, toggleState } ) => (
                                                            <>
                                                                <Form.Group as={ Row } className="align-items-center">
                                                                    <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">Different from billing</Col>
                                                                    <Col lg={ 7 } xl={ 6 }>
                                                                        <Form.Check
                                                                            custom
                                                                            className="my-2"
                                                                            id="diff-shipping"
                                                                            checked={ diffShipping }
                                                                            onChange={ e => { onToggle(); setDiffShipping( e.target.checked ) } }
                                                                            label="Check this box to use different information for shipping."
                                                                        />
                                                                    </Col>
                                                                </Form.Group>
                                                                <div className={ toggleState !== "EXPANDED" ? "overflow-hidden" : "" } ref={ setCollapsibleElement }>
                                                                    <Form.Group as={ Row } className="align-items-center">
                                                                        <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">First Name</Col>
                                                                        <Col lg={ 7 } xl={ 6 }>
                                                                            <Form.Control
                                                                                type="text"
                                                                                className="form-control-modern"
                                                                                value={ shipping.first_name }
                                                                                onChange={ e => shippingChange( 'first_name', e.target.value ) }
                                                                            />
                                                                        </Col>
                                                                    </Form.Group>
                                                                    <Form.Group as={ Row } className="align-items-center">
                                                                        <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">Last Name</Col>
                                                                        <Col lg={ 7 } xl={ 6 }>
                                                                            <Form.Control
                                                                                type="text"
                                                                                className="form-control-modern"
                                                                                value={ shipping.last_name }
                                                                                onChange={ e => shippingChange( 'last_name', e.target.value ) }
                                                                            />
                                                                        </Col>
                                                                    </Form.Group>
                                                                    <Form.Group as={ Row } className="align-items-center">
                                                                        <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">Company</Col>
                                                                        <Col lg={ 7 } xl={ 6 }>
                                                                            <Form.Control
                                                                                type="text"
                                                                                className="form-control-modern"
                                                                                value={ shipping.company }
                                                                                onChange={ e => shippingChange( 'company', e.target.value ) }
                                                                            />
                                                                        </Col>
                                                                    </Form.Group>
                                                                    <Form.Group as={ Row } className="align-items-center">
                                                                        <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">Address Line 1</Col>
                                                                        <Col lg={ 7 } xl={ 6 }>
                                                                            <Form.Control
                                                                                type="text"
                                                                                className="form-control-modern"
                                                                                value={ shipping.address_1 }
                                                                                onChange={ e => shippingChange( 'address_1', e.target.value ) }
                                                                            />
                                                                        </Col>
                                                                    </Form.Group>
                                                                    <Form.Group as={ Row } className="align-items-center">
                                                                        <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">Address Line 2</Col>
                                                                        <Col lg={ 7 } xl={ 6 }>
                                                                            <Form.Control
                                                                                type="text"
                                                                                className="form-control-modern"
                                                                                value={ shipping.address_2 }
                                                                                onChange={ e => shippingChange( 'address_2', e.target.value ) }
                                                                            />
                                                                        </Col>
                                                                    </Form.Group>
                                                                    <Form.Group as={ Row } className="align-items-center">
                                                                        <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">City</Col>
                                                                        <Col lg={ 7 } xl={ 6 }>
                                                                            <Form.Control
                                                                                type="text"
                                                                                className="form-control-modern"
                                                                                value={ shipping.city }
                                                                                onChange={ e => shippingChange( 'city', e.target.value ) }
                                                                            />
                                                                        </Col>
                                                                    </Form.Group>
                                                                    <Form.Group as={ Row } className="align-items-center">
                                                                        <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">Postcode / ZIP</Col>
                                                                        <Col lg={ 7 } xl={ 6 }>
                                                                            <Form.Control
                                                                                type="text"
                                                                                className="form-control-modern"
                                                                                value={ shipping.postcode }
                                                                                onChange={ e => shippingChange( 'postcode', e.target.value ) }
                                                                            />
                                                                        </Col>
                                                                    </Form.Group>
                                                                    <Form.Group as={ Row } className="align-items-center">
                                                                        <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">Country</Col>
                                                                        <Col lg={ 7 } xl={ 6 }>
                                                                            <Select
                                                                                isSearchable={ true }
                                                                                options={ COUNTRIES }
                                                                                onChange={ option => shippingChange( 'country', option.value ) }
                                                                            />
                                                                        </Col>
                                                                    </Form.Group>
                                                                    <Form.Group as={ Row } className="align-items-center">
                                                                        <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">State / Country</Col>
                                                                        <Col lg={ 7 } xl={ 6 }>
                                                                            {
                                                                                shippingStates && shippingStates.length ?
                                                                                    <Select
                                                                                        isSearchable={ true }
                                                                                        options={ shippingStates }
                                                                                        onChange={ option => shippingChange( 'state', option.value ) }
                                                                                    />
                                                                                    :
                                                                                    <Form.Control
                                                                                        type="text"
                                                                                        className="form-control-modern"
                                                                                        value={ shipping.state ? shipping.state : '' }
                                                                                        onChange={ e => shippingChange( 'state', e.target.value ) }
                                                                                    />
                                                                            }
                                                                        </Col>
                                                                    </Form.Group>
                                                                </div>
                                                            </>
                                                        ) }
                                                    </SlideToggle>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                            <Row className="action-buttons">
                                <Col md="auto" className="col-6">
                                    <Button
                                        type="submit"
                                        className="btn-px-4 py-3 d-flex align-items-center font-weight-semibold line-height-1"
                                        variant="primary"
                                    ><i className="bx bx-save text-4 mr-2"></i> Save User</Button>
                                </Col>
                                <Col md="auto" className="col-6 px-md-0 mt-0">
                                    <Button
                                        as={ Link }
                                        to={ `${ process.env.PUBLIC_URL }/users` }
                                        className="btn-px-4 py-3 border font-weight-semibold text-color-dark line-height-1 d-flex h-100 align-items-center"
                                        variant="light"
                                    >Back</Button>
                                </Col>
                                <Col md="auto" className="col-6 ml-md-auto mt-3 mt-md-0">
                                    <Button
                                        href="#delete"
                                        className="btn-px-4 py-3 d-flex align-items-center font-weight-semibold line-height-1"
                                        variant="danger"
                                        onClick={ deleteUser }
                                    ><i className="bx bx-trash text-4 mr-2"></i> Delete User</Button>
                                </Col>
                            </Row>
                        </Form>
                    </>
            }

            <DeleteConfirmModal isOpen={ openModal } onClose={ deleteConfirm } />
        </>
    )
}