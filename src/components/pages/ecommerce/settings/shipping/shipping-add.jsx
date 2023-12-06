import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Form, Card, Button } from 'react-bootstrap';
import Select from 'react-select';
import { toast } from 'react-toastify';

import Breadcrumb from '../../../../common/breadcrumb';
import PNotify from '../../../../features/elements/p-notify';

import { removeXSSAttacks } from '../../../../../utils';
import { CONTINENTS, COUNTRIES, STATES } from '../../../../../utils/data/constant';

const getOptions = () => {
    let results = [];
    for ( const key in CONTINENTS ) {
        let countries = COUNTRIES.filter( country => CONTINENTS[ key ].countries.includes( country.value ) );
        results.push( {
            label: CONTINENTS[ key ].name,
            value: key
        } );
        for ( let i = 0; i < countries.length; i++ ) {
            let country = countries[ i ];
            results.push( {
                ...country,
                sub: 1,
                value: `${ key }:${ country.value }`
            } );
            let states = STATES[ country.value ] ? STATES[ country.value ].map( state => {
                return {
                    label: `${ state.label }, ${ country.label }`,
                    sub: 2,
                    value: `${ key }:${ country.value }:${ state.value }`
                };
            } ) : [];
            results = results.concat( states );
        }
    }
    return results;
}
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

export default function ShippingAdd () {

    function addShipping ( e ) {
        e.preventDefault();
        toast(
            <PNotify title="Success" icon="fas fa-check" text="New Shippnig zone added." />,
            {
                containerId: "default",
                className: "notification-success"
            }
        );
    }

    return (
        <>
            <Breadcrumb current="Shipping Zone Create" paths={ [
                {
                    name: 'Home',
                    url: '/'
                }, {
                    name: 'Ecommerce',
                    url: '/ecommerce'
                }, {
                    name: 'Shipping Settings',
                    url: '/ecommerce/settings/shipping'
                }
            ] } />

            <Form className="ecommerce-setting-form pb-5" action="#" method="post" onSubmit={ addShipping }>
                <Row>
                    <Col>
                        <Card className="card-modern card-big-info">
                            <Card.Body>
                                <Row>
                                    <Col lg="2-5" xl="1-5">
                                        <i className="card-big-info-icon bx bx-car"></i>
                                        <h2 className="card-big-info-title">Shipping</h2>
                                        <p className="card-big-info-desc">Add here the shipping zone info with all details and necessary information.</p>
                                    </Col>
                                    <Col lg="3-5" xl="4-5">
                                        <Form.Group as={ Row } className="align-items-center">
                                            <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">Zone name</Col>
                                            <Col lg={ 7 } xl={ 6 }>
                                                <Form.Control
                                                    type="text"
                                                    maxLength="50"
                                                    className="form-control-modern"
                                                    name="name"
                                                    required
                                                />
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={ Row } className="align-items-center">
                                            <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">Region(s)</Col>
                                            <Col lg={ 7 } xl={ 6 }>
                                                <Select
                                                    isMulti={ true }
                                                    options={ getOptions() }
                                                    components={ {
                                                        Option: Option
                                                    } }
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
                        ><i className="bx bx-save text-4 mr-2"></i> Save zone</Button>
                    </Col>
                    <Col md="auto" className="col-12 px-md-0 mt-3 mt-md-0">
                        <Button
                            as={ Link }
                            to={ `${ process.env.PUBLIC_URL }/ecommerce/settings/shipping` }
                            className="btn-px-4 py-3 border font-weight-semibold text-color-dark line-height-1 d-flex h-100 align-items-center"
                            variant="light"
                        >Back</Button>
                    </Col>
                </Row>
            </Form>
        </>
    )
}