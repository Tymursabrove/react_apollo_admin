import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';
import Select from 'react-select';
import { toast } from 'react-toastify';

import Breadcrumb from '../../../common/breadcrumb';
import PNotify from '../../../features/elements/p-notify';
import PtToolTip from '../../../features/elements/tooltip';

import { COUNTRIES, STATES, CURRENCY_SYMBOLS, CURRENCIES } from '../../../../utils/data/constant';
import { removeXSSAttacks } from '../../../../utils';

const countriesAndStates = COUNTRIES.map( country => {
    if ( STATES[ country.value ] && STATES[ country.value ].length ) {
        return {
            type: 'group',
            label: country.label,
            options: STATES[ country.value ].map( state => {
                return {
                    sub: 1,
                    value: country.value + ':' + state.label,
                    label: state.label + ', ' + country.label
                }
            } )
        };
    }
    return country;
} );

const currencies = () => {
    let result = [];
    for ( const key in CURRENCIES ) {
        result.push( {
            value: key,
            label: `${ CURRENCIES[ key ] } (${ CURRENCY_SYMBOLS[ key ] })`
        } );
    }
    return result;
}

const groupHeadingStyle = {
    color: '#666',
    fontSize: '100%',
    fontWeight: 700
};

const Option = ( props ) => {
    var children = props.children,
        className = props.className,
        cx = props.cx,
        getStyles = props.getStyles,
        isDisabled = props.isDisabled,
        isFocused = props.isFocused,
        isSelected = props.isSelected,
        innerRef = props.innerRef,
        innerProps = props.innerProps,
        prefix = '&nbsp;'.repeat( 2 * ( props.data.sub ? props.data.sub : 0 ) );

    return (
        <div
            ref={ innerRef }
            style={ getStyles( 'option', props ) }
            className={ cx( {
                option: true,
                'option--is-disabled': isDisabled,
                'option--is-focused': isFocused,
                'option--is-selected': isSelected
            }, className ) }
            { ...innerProps }
            dangerouslySetInnerHTML={ removeXSSAttacks( prefix + children ) }></div>
    )
};

export default function GeneralSetting () {
    const [ selling, setSelling ] = useState( 'all' );
    const [ sellSpecific, setSellSpecific ] = useState( [] );
    const [ shipping, setShipping ] = useState( 'sellable' );
    const [ shippingSpecific, setShippingSpecific ] = useState( [] );
    const [ thouSeps, setThouSeps ] = useState( ',' );
    const [ decSeps, setDecSeps ] = useState( '.' );
    const [ numDec, setNumDec ] = useState( 2 );

    useEffect( () => {
        setSellSpecific( [] );
    }, [ selling ] )

    useEffect( () => {
        setShippingSpecific( [] );
    }, [ shipping ] )

    function saveChanges ( e ) {
        e.preventDefault();
        toast(
            <PNotify title="Success" icon="fas fa-check" text="Settings saved successfully." />,
            {
                containerId: "default",
                className: "notification-success"
            }
        );
    }

    return (
        <>
            <Breadcrumb current="General Setting" paths={ [
                {
                    name: 'Home',
                    url: '/'
                }, {
                    name: 'Ecommerce',
                    url: '/ecommerce'
                }
            ] } />

            <Form className="ecommerce-form" onSubmit={ saveChanges }>
                <Row>
                    <Col>
                        <Card className="card-modern card-big-info">
                            <Card.Body>
                                <Row>
                                    <Col lg="2-5" xl="1-5">
                                        <i className="card-big-info-icon bx bx-store"></i>
                                        <h2 className="card-big-info-title">Store Address</h2>
                                        <p className="card-big-info-desc">Add here the customer billing info with all details and necessary information.</p>
                                    </Col>
                                    <Col lg="3-5" xl="4-5">
                                        <Form.Group as={ Row } className="align-items-center">
                                            <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0 mb-lg-0">
                                                Address Line 1 <PtToolTip placemet="top" trigger="hover" tooltip="The street address for your business location." />
                                            </Col>
                                            <Col lg={ 7 } xl={ 6 }>
                                                <Form.Control
                                                    type="text"
                                                    maxLength="50"
                                                    className="form-control-modern"
                                                />
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={ Row } className="align-items-center">
                                            <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0 mb-lg-0">
                                                Address Line 2 <PtToolTip placemet="top" trigger="hover" tooltip="An additional, optional address line for your business location." />
                                            </Col>
                                            <Col lg={ 7 } xl={ 6 }>
                                                <Form.Control
                                                    type="text"
                                                    maxLength="50"
                                                    className="form-control-modern"
                                                />
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={ Row } className="align-items-center">
                                            <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0 mb-lg-0">
                                                City <PtToolTip placemet="top" trigger="hover" tooltip="The city in which your business is located." />
                                            </Col>
                                            <Col lg={ 7 } xl={ 6 }>
                                                <Form.Control
                                                    type="text"
                                                    maxLength="50"
                                                    className="form-control-modern"
                                                />
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={ Row } className="align-items-center">
                                            <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0 mb-lg-0">
                                                Country / State <PtToolTip placemet="top" trigger="hover" tooltip="The country and state or province, if any, in which your business is located." />
                                            </Col>
                                            <Col lg={ 7 } xl={ 6 }>
                                                <Select
                                                    isSearchable={ true }
                                                    placeholder="Choose countries / cities"
                                                    options={ countriesAndStates }
                                                    components={ {
                                                        Option: Option
                                                    } }
                                                    styles={ {
                                                        groupHeading: ( base ) => { return { ...base, ...groupHeadingStyle } },
                                                        placeholder: ( base ) => {
                                                            return {
                                                                ...base,
                                                                whiteSpace: "nowrap"
                                                            }
                                                        }
                                                    } }
                                                />
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={ Row } className="align-items-center">
                                            <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0 mb-lg-0">
                                                Postcode / ZIP <PtToolTip placemet="top" trigger="hover" tooltip="The postal code, if any, in which your business is located." />
                                            </Col>
                                            <Col lg={ 7 } xl={ 6 }>
                                                <Form.Control
                                                    type="number"
                                                    className="form-control-modern"
                                                    min="10000"
                                                    max="99999"
                                                />
                                            </Col>
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row >
                <Row>
                    <Col>
                        <Card className="card-modern card-big-info">
                            <Card.Body>
                                <Row>
                                    <Col lg="2-5" xl="1-5">
                                        <i className="card-big-info-icon bx bx-box"></i>
                                        <h2 className="card-big-info-title">General Option</h2>
                                        <p className="card-big-info-desc">Add here the customer shipping info with all details and necessary information.</p>
                                    </Col>
                                    <Col lg="3-5" xl="4-5">
                                        <Form.Group as={ Row } className="align-items-center">
                                            <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0 mb-lg-0">
                                                Selling Location(s) <PtToolTip placemet="top" trigger="hover" tooltip="This option lets you limit which countries you are willing to sell to." />
                                            </Col>
                                            <Col lg={ 7 } xl={ 6 }>
                                                <Form.Control
                                                    as="select"
                                                    className="form-control-modern"
                                                    value={ selling }
                                                    onChange={ e => setSelling( e.target.value ) }
                                                >
                                                    <option value="all">Sell to all countries</option>
                                                    <option value="except">Sell to all countries, except for ... </option>
                                                    <option value="specific">Sell to specific countries</option>
                                                </Form.Control>
                                            </Col>
                                        </Form.Group>
                                        { selling !== "all" ?
                                            <Form.Group as={ Row } className="align-items-center">
                                                <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0 mb-lg-0">
                                                    { selling === 'except' ? 'Sell to all countries, except for ... ' : 'Sell to specific countries' }
                                                </Col>
                                                <Col lg={ 7 } xl={ 6 }>
                                                    <Select
                                                        isMulti={ true }
                                                        value={ sellSpecific }
                                                        options={ COUNTRIES }
                                                        onChange={ options => setSellSpecific( options ) }
                                                        placeholder="Choose countries"
                                                    />
                                                </Col>
                                            </Form.Group>
                                            : ''
                                        }
                                        <Form.Group as={ Row } className="align-items-center">
                                            <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0 mb-lg-0">
                                                Shipping Location(s) <PtToolTip placemet="top" trigger="hover" tooltip="Choose which countries you want to ship to, or choose to ship to all locations you sell to." />
                                            </Col>
                                            <Col lg={ 7 } xl={ 6 }>
                                                <Form.Control
                                                    as="select"
                                                    className="form-control-modern"
                                                    value={ shipping }
                                                    onChange={ e => setShipping( e.target.value ) }
                                                >
                                                    <option value="sellable" >Ship to all countries you sell to</option>
                                                    <option value="all" >Ship to all countries</option>
                                                    <option value="specific" >Ship to specific countries only</option>
                                                </Form.Control>
                                            </Col>
                                        </Form.Group>
                                        { shipping === 'specific' ?
                                            <Form.Group as={ Row } className="align-items-center">
                                                <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0 mb-lg-0">Ship to specific countries</Col>
                                                <Col lg={ 7 } xl={ 6 }>
                                                    <Select
                                                        isMulti={ true }
                                                        options={ COUNTRIES }
                                                        value={ shippingSpecific }
                                                        onChange={ options => setShippingSpecific( options ) }
                                                        placeholder="Choose countries"
                                                    />
                                                </Col>
                                            </Form.Group>
                                            : ''
                                        }
                                        <Form.Group as={ Row } className="align-items-center">
                                            <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0 mb-lg-0">
                                                Default Customer Location <PtToolTip placemet="top" trigger="hover" tooltip="This option determines a customers default location." />
                                            </Col>
                                            <Col lg={ 7 } xl={ 6 }>
                                                <Form.Control
                                                    as="select"
                                                    className="form-control-modern"
                                                >
                                                    <option value="">No location by default</option>
                                                    <option value="base">Shop base address</option>
                                                </Form.Control>
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={ Row }>
                                            <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0 mt-2 mb-0">
                                                Enable Taxes
                                            </Col>
                                            <Col lg={ 7 } xl={ 6 }>
                                                <Form.Check className="checkbox">
                                                    <Form.Check.Label className="mt-2 mb-1">
                                                        <Form.Check.Input name="enable_tax" type="checkbox" className="checkbox-style-1 mt-0" />
                                                        Enable tax rates and calculations
                                                    </Form.Check.Label>
                                                    <i>Rates will be configurable and taxes will be calculated during checkout.</i>
                                                </Form.Check>
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={ Row }>
                                            <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0 mt-2 mb-0">
                                                Enable coupons
                                            </Col>
                                            <Col lg={ 7 } xl={ 6 }>
                                                <Form.Check className="checkbox mb-3">
                                                    <Form.Check.Label className="mt-2 mb-1">
                                                        <Form.Check.Input name="enable_tax" type="checkbox" className="checkbox-style-1 mt-0" />
                                                        Enable the use of coupon codes
                                                    </Form.Check.Label>
                                                    <i>Coupons can be applied from the cart and checkout pages.</i>
                                                </Form.Check>
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
                                        <h2 className="card-big-info-title">Currency Option</h2>
                                        <p className="card-big-info-desc">Add here the customer account info with all details and necessary information.</p>
                                    </Col>
                                    <Col lg="3-5" xl="4-5">
                                        <Form.Group as={ Row } className="align-items-center">
                                            <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0 mb-lg-0">
                                                Currency <PtToolTip placemet="top" trigger="hover" tooltip="This controls what currency prices are listed at in the catalog and which currency gateways will take payments in." />
                                            </Col>
                                            <Col lg={ 7 } xl={ 6 }>
                                                <Select
                                                    isSearchable={ true }
                                                    components={ {
                                                        Option: Option,
                                                        SingleValue: ( props ) => {
                                                            let label = props.getValue()[ 0 ].label;
                                                            return (
                                                                <>
                                                                    <div className="wahaha" dangerouslySetInnerHTML={ removeXSSAttacks( label ) }></div>
                                                                </>
                                                            )
                                                        }
                                                    } }
                                                    options={ currencies() }
                                                    placeholder="Choose Currency"
                                                />
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={ Row } className="align-items-center">
                                            <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0 mb-lg-0">
                                                Currency Position <PtToolTip placemet="top" trigger="hover" tooltip="This controls the position of the currency symbol." />
                                            </Col>
                                            <Col lg={ 7 } xl={ 6 }>
                                                <Form.Control
                                                    as="select"
                                                    className="form-control-modern"
                                                >
                                                    <option value="left">Left</option>
                                                    <option value="right">Right</option>
                                                    <option value="left_space">Left with space</option>
                                                    <option value="right_space">Right with space</option>
                                                </Form.Control>
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={ Row } className="align-items-center">
                                            <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0 mb-lg-0">
                                                Thousand separator <PtToolTip placemet="top" trigger="hover" tooltip="This sets the thousand separator of displayed prices." />
                                            </Col>
                                            <Col lg={ 7 } xl={ 6 }>
                                                <Form.Control
                                                    type="text"
                                                    maxLength="10"
                                                    className="form-control-modern"
                                                    value={ thouSeps }
                                                    onChange={ e => setThouSeps( e.target.value ) }
                                                    required
                                                />
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={ Row } className="align-items-center">
                                            <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0 mb-lg-0">
                                                Deciaml separator <PtToolTip placemet="top" trigger="hover" tooltip="This sets the decimal separator of displayed prices." />
                                            </Col>
                                            <Col lg={ 7 } xl={ 6 }>
                                                <Form.Control
                                                    type="text"
                                                    maxLength="10"
                                                    className="form-control-modern"
                                                    value={ decSeps }
                                                    onChange={ e => setDecSeps( e.target.value ) }
                                                    required
                                                />
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={ Row } className="align-items-center">
                                            <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0 mb-lg-0">
                                                Number of decimal <PtToolTip placemet="top" trigger="hover" tooltip="This sets the number of decimal points shown in displayed prices." />
                                            </Col>
                                            <Col lg={ 7 } xl={ 6 }>
                                                <Form.Control
                                                    type="number"
                                                    min={ 0 }
                                                    max={ 5 }
                                                    className="form-control-modern"
                                                    value={ numDec }
                                                    onChange={ e => setNumDec( e.target.value ) }
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
                <Row className="action-buttons">
                    <Col md="auto" className="col-12">
                        <Button
                            type="submit"
                            className="btn-px-4 py-3 d-flex align-items-center font-weight-semibold line-height-1"
                            variant="primary"
                        ><i className="bx bx-save text-4 mr-2"></i> Save Changes
                        </Button>
                    </Col>
                </Row>
            </Form>
        </>
    )
}