import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Form, Button, InputGroup, Table } from 'react-bootstrap';
import Select from 'react-select';
import Modal from "react-modal";
import { toast } from 'react-toastify';

import Breadcrumb from '../../../../common/breadcrumb';
import DeleteConfirmModal from '../../../../features/modals/delete-confirm-modal';
import Loader from '../../../../features/loader';
import PNotify from '../../../../features/elements/p-notify';
import PtToolTip from '../../../../features/elements/tooltip';
import PtSwitch from '../../../../features/elements/switch';

import { getZone } from '../../../../../api';
import { removeXSSAttacks } from '../../../../../utils';
import { CONTINENTS, COUNTRIES, STATES } from '../../../../../utils/data/constant';

const defaultDatas = {
    'free': {
        name: 'Free shipping',
        desc: 'Free shipping is a special method which can be triggered with coupons and minimum spends.'
    },
    'flat': {
        name: 'Flat rate',
        desc: 'Lets you charge a fixed rate for shipping.'
    },
    'local': {
        name: 'Local pickup',
        desc: 'Allow customers to pick up orders themselves. By default, when using local pickup store base taxes will apply regardless of customer address.'
    }
};

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

const modalStyles = {
    overlay: {
        background: 'rgba(11, 11, 11, .8)',
        zIndex: 9999
    },
    content: {
        left: '50%',
        top: '50%',
        bottom: 'auto',
        right: 'auto',
        outline: 'none',
        width: '900px',
        maxWidth: '100%',
        padding: 0,
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement( '#app' );

const FreeShippingModal = ( { isOpen, data, onClose } ) => {
    const [ name, setName ] = useState( '' );
    const [ requirement, setRequirement ] = useState( '' );
    const [ minimum, setMinimum ] = useState( '' );

    useEffect( () => {
        if ( isOpen ) {
            setName( data.name );
            setRequirement( data.free_shipping_requirement ? data.free_shipping_requirement : '' );
            setMinimum( data.minimum_order_amount ? data.minimum_order_amount : '' );
        }
    }, [ isOpen ] )

    function closeModal ( result = false ) {
        onClose( result, {
            name: name,
            free_shipping_requirement: requirement,
            minimum_order_amount: minimum
        } );
    }

    return (
        <Modal
            isOpen={ isOpen }
            style={ modalStyles }
            onRequestClose={ () => closeModal( false ) }
        >
            <Card>
                <Card.Header><Card.Title>Free Shipping</Card.Title></Card.Header>
                <Card.Body>
                    <div className="modal-wrapper">
                        <Form.Group as={ Row } className="row align-items-center">
                            <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">Title</Col>
                            <Col lg={ 7 } xl={ 6 }>
                                <Form.Control
                                    type="text"
                                    className="form-control-modern"
                                    value={ name }
                                    onChange={ e => setName( e.target.value ) }
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={ Row } className="row align-items-center">
                            <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">Free shipping requires...</Col>
                            <Col lg={ 7 } xl={ 6 }>
                                <Form.Control
                                    as="select"
                                    className="form-control-modern"
                                    value={ requirement }
                                    onChange={ e => setRequirement( e.target.value ) }
                                >
                                    <option value="">N\A</option>
                                    <option value="coupon">A valid free shipping coupon</option>
                                    <option value="min_amount">A minimum order amount</option>
                                    <option value="either">A minimum order amount OR a coupon</option>
                                    <option value="both">A minimum order amount AND a coupon</option>
                                </Form.Control>
                            </Col>
                        </Form.Group>
                        { requirement !== '' && requirement !== 'coupon' ?
                            <Form.Group as={ Row } className="row align-items-center">
                                <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">Minimum order amount</Col>
                                <Col lg={ 7 } xl={ 6 }>
                                    <Form.Control
                                        type="number"
                                        className="form-control-modern"
                                        value={ minimum }
                                        onChange={ e => setMinimum( e.target.value ) }
                                    />
                                </Col>
                            </Form.Group>
                            : '' }
                    </div>
                </Card.Body>
                <Card.Footer>
                    <Row>
                        <Col md={ 12 } className="text-right">
                            <Button
                                variant="primary"
                                className="mr-2"
                                onClick={ () => closeModal( true ) }
                            >Confirm</Button>
                            <Button
                                className="modal-dismiss"
                                variant="default"
                                onClick={ () => closeModal( false ) }
                            >Cancel</Button>
                        </Col>
                    </Row>
                </Card.Footer>
            </Card>
        </Modal>
    )
}

const OtherShippingsModal = ( { isOpen, data, onClose } ) => {
    const [ name, setName ] = useState( '' );
    const [ taxStatus, setTaxStatus ] = useState( '' );
    const [ cost, setCost ] = useState( '' );

    useEffect( () => {
        if ( isOpen ) {
            setName( data.name );
            setTaxStatus( data.tax_status );
            setCost( data.cost );
        }
    }, [ isOpen ] )

    function closeModal ( result = false ) {
        onClose( result, {
            name: name,
            tax_status: taxStatus,
            cost: cost
        } );
    }

    return (
        <Modal
            isOpen={ isOpen }
            style={ modalStyles }
            onRequestClose={ () => closeModal( false ) }
        >
            <Card>
                <Card.Header>
                    <Card.Title>{ data.type === 'local' ? 'Local Pickup' : 'Flat rate' }</Card.Title>
                </Card.Header>
                <Card.Body>
                    <div className="modal-wrapper">
                        <Form.Group as={ Row } className="row align-items-center">
                            <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">Title</Col>
                            <Col lg={ 7 } xl={ 6 }>
                                <Form.Control
                                    type="text"
                                    className="form-control-modern"
                                    value={ name }
                                    onChange={ e => setName( e.target.value ) }
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={ Row } className="row align-items-center">
                            <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">Tax status</Col>
                            <Col lg={ 7 } xl={ 6 }>
                                <Form.Control
                                    as="select"
                                    className="form-control-modern"
                                    value={ taxStatus }
                                    onChange={ e => setTaxStatus( e.target.value ) }
                                >
                                    <option value="taxable">Taxable</option>
                                    <option value="none">None</option>
                                </Form.Control>
                            </Col>
                        </Form.Group>
                        <Form.Group as={ Row } className="row align-items-center">
                            <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">Cost</Col>
                            <Col lg={ 7 } xl={ 6 }>
                                <Form.Control
                                    type="number"
                                    className="form-control-modern"
                                    value={ cost }
                                    onChange={ e => setCost( e.target.value ) }
                                />
                            </Col>
                        </Form.Group>
                    </div>
                </Card.Body>
                <Card.Footer>
                    <Row>
                        <Col md={ 12 } className="text-right">
                            <Button
                                variant="primary"
                                className="mr-2"
                                onClick={ () => closeModal( true ) }
                            >Confirm</Button>
                            <Button
                                className="modal-dismiss"
                                variant="default"
                                onClick={ () => closeModal( false ) }
                            >Cancel</Button>
                        </Col>
                    </Row>
                </Card.Footer>
            </Card>
        </Modal>
    )
}

export default function ShippingDetail ( props ) {
    const [ zone, setZone ] = useState( null );
    const [ loading, setLoading ] = useState( true );
    const [ locations, setLocations ] = useState( [] );
    const [ methods, setMethods ] = useState( [] );
    const [ methodType, setMethodType ] = useState( 'free' );
    const [ methodId, setMethodId ] = useState( null );

    const [ modalOpen, setModalOpen ] = useState( false );

    useEffect( () => {
        setLoading( true );
        getZone( parseInt( props.match.params.id ) ).then( data => {
            setZone( data );
            setLoading( false );
            setLocations( data.shipping_locations.map( location => {
                let codesArray = location.code.split( ':' ),
                    label = location.name;
                if ( codesArray.length > 2 ) {
                    let country = COUNTRIES.find( country => country.value === codesArray[ 1 ] ).label;
                    label += ' ' + country;
                }
                return { value: location.code, label };
            } ) );
            setMethods( data.shipping_zone_methods );
        } );
    }, [ props.match.params.id ] )

    function saveZone ( e ) {
        e.preventDefault();
        toast(
            <PNotify title="Success" icon="fas fa-check" text="Shipping zone saved successfully." />,
            {
                containerId: "default",
                className: "notification-success"
            }
        );
    }

    function zoneChange ( key, value ) {
        let temp = { ...zone };
        temp[ key ] = value;
        setZone( temp );
    }

    function addMethod ( e ) {
        e.preventDefault();
        setMethods( [
            ...methods,
            {
                type: methodType,
                name: defaultDatas[ methodType ].name,
                description: defaultDatas[ methodType ].desc,
                enabled: true,
                tax_status: 'taxable'
            }
        ] );
    }

    function deleteMethod ( e, index ) {
        e.preventDefault();
        setMethods( methods.filter( ( method, id ) => id !== index ) );
    }

    function methodChange ( index, key, value ) {
        let temp = [ ...methods ];
        temp[ index ][ key ] = value;
        setMethods( temp );
    }

    function editMethod ( e, index ) {
        e.preventDefault();
        setModalOpen( methods[ index ].type );
        setMethodId( index );
    }

    function closeModal ( save, value ) {
        setModalOpen( null );
        if ( save ) {
            let temp = [ ...methods ];
            temp[ methodId ] = { ...methods[ methodId ], ...value };
            setMethods( temp );
        }
    }

    function openDeleteModal ( e ) {
        e.preventDefault();
        setModalOpen( 'delete' );
    }

    function deleteZone ( result ) {
        setModalOpen( null );
        result && props.history.push( `${ process.env.PUBLIC_URL }/ecommerce/settings/shipping` );
    }

    return (
        <>
            <Breadcrumb current="Shipping Zone Detail" paths={ [
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
            { loading ? <Loader />
                :
                <Form className="ecommerce-setting-form pb-5" action="#" method="post" onSubmit={ saveZone }>
                    <Row>
                        <Col>
                            <Card className="card-big-info">
                                <Card.Body>
                                    <Row>
                                        <Col lg="2-5" xl="1-5">
                                            <i className="card-big-info-icon bx bx-car"></i>
                                            <h2 className="card-big-info-title">Shipping</h2>
                                            <p className="card-big-info-desc">Add here the shipping zone info with all details and necessary information.</p>
                                        </Col>
                                        <Col lg="3-5" xl="4-5">
                                            <Form.Group as={ Row } className="row align-items-center">
                                                <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">
                                                    Zone name <PtToolTip placement="top" trigger="hover" tooltip="Name of the zone for your reference" />
                                                </Col>
                                                <Col lg={ 7 } xl={ 6 }>
                                                    <Form.Control
                                                        type="text"
                                                        maxLength="50"
                                                        className="form-control-modern"
                                                        name="name"
                                                        value={ zone.name }
                                                        onChange={ e => zoneChange( 'name', e.target.value ) }
                                                        required
                                                    />
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={ Row } className="row align-items-center">
                                                <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">
                                                    Region(s) <PtToolTip placement="top" trigger="hover" tooltip="Names of the regions inside zone" />
                                                </Col>
                                                <Col lg={ 7 } xl={ 6 }>
                                                    <Select
                                                        isMulti={ true }
                                                        value={ locations }
                                                        options={ getOptions() }
                                                        components={ {
                                                            Option: Option
                                                        } }
                                                        styles={ {
                                                            menu: ( base ) => {
                                                                return {
                                                                    ...base,
                                                                    zIndex: 5
                                                                }
                                                            }
                                                        } }
                                                        onChange={ options => setLocations( options ) }
                                                    />
                                                </Col>
                                            </Form.Group>
                                            <Form.Group>
                                                <Row className="mb-3">
                                                    <Col as={ Form.Label } lg={ 3 } className="control-label text-lg-right mb-0 pt-2">
                                                        Shipping Methods <PtToolTip placement="top" trigger="hover" tooltip="Shipping methods which will be applied to customers with shipping address within this zone." />
                                                    </Col>
                                                    <Col lg={ 9 }>
                                                        <Table className="table-shipping-methods">
                                                            <thead>
                                                                <tr>
                                                                    <th width="35%">Title</th>
                                                                    <th>Enabled</th>
                                                                    <th width="50%">Description</th>
                                                                    <th></th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {
                                                                    methods.length ? methods.map( ( method, index ) => (
                                                                        <tr key={ `method-${ index }` }>
                                                                            <td>
                                                                                <Button
                                                                                    href="#editMethod"
                                                                                    variant="link"
                                                                                    onClick={ e => editMethod( e, index ) }
                                                                                >{ method.name }</Button>
                                                                            </td>
                                                                            <td>
                                                                                <PtSwitch
                                                                                    size="sm"
                                                                                    variant="primary"
                                                                                    on={ method.enabled }
                                                                                    onChange={ value => methodChange( index, 'enabled', value ) }
                                                                                />
                                                                            </td>
                                                                            <td>{ method.description }</td>
                                                                            <td className="actions">
                                                                                <a href="deleteMethod" onClick={ e => deleteMethod( e, index ) } ><i className="far fa-trash-alt"></i></a>
                                                                            </td>
                                                                        </tr>
                                                                    ) )
                                                                        : <tr className="no-method">
                                                                            <td colSpan="4" className="py-4">
                                                                                You can add multiple shipping methods within  this zone. Only customers within the zone will see them.
                                                                    </td>
                                                                        </tr>
                                                                }
                                                            </tbody>
                                                            <tfoot>
                                                                <tr>
                                                                    <th colSpan="4">
                                                                        <InputGroup className="add-shipping-method">
                                                                            <Form.Control
                                                                                as="select"
                                                                                className="form-control-modern w-auto"
                                                                                value={ methodType }
                                                                                onChange={ e => setMethodType( e.target.value ) }
                                                                            >
                                                                                <option value="free">Free shipping</option>
                                                                                <option value="flat">Flat rate</option>
                                                                                <option value="local">Local Pickup</option>
                                                                            </Form.Control>
                                                                            <InputGroup.Append>
                                                                                <Button
                                                                                    href="#addMethod"
                                                                                    onClick={ addMethod }
                                                                                    variant="primary"
                                                                                >Add</Button>
                                                                            </InputGroup.Append>
                                                                        </InputGroup>
                                                                    </th>
                                                                </tr>
                                                            </tfoot>
                                                        </Table>
                                                    </Col>
                                                </Row>
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
                            >
                                <i className="bx bx-save text-4 mr-2"></i> Save Zone
                            </Button>
                        </Col>
                        <Col md="auto" className="col-md-auto px-md-0 mt-3 mt-md-0">
                            <Button
                                as={ Link }
                                to={ `${ process.env.PUBLIC_URL }/ecommerce/settings/shipping` }
                                className="btn-px-4 py-3 border font-weight-semibold text-color-dark line-height-1 d-flex h-100 align-items-center"
                                variant="light"
                            >Back</Button>
                        </Col>
                        <Col md="auto" className="col-12 ml-md-auto mt-3 mt-md-0">
                            <Button
                                href="#delete"
                                className="btn-px-4 py-3 d-flex align-items-center font-weight-semibold line-height-1"
                                variant="danger"
                                onClick={ openDeleteModal }
                            >
                                <i className="bx bx-trash text-4 mr-2"></i> Delete Zone
                            </Button>
                        </Col>
                    </Row>
                </Form>
            }

            <FreeShippingModal isOpen={ modalOpen === 'free' } data={ methodId !== null ? methods[ methodId ] : {} } onClose={ closeModal } />
            <OtherShippingsModal isOpen={ modalOpen === 'local' || modalOpen === 'flat' } data={ methodId !== null ? methods[ methodId ] : {} } onClose={ closeModal } />
            <DeleteConfirmModal isOpen={ modalOpen === 'delete' } onClose={ deleteZone } />
        </>
    )
}