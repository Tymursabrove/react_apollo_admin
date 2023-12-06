import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Form, Button, InputGroup } from 'react-bootstrap';
import Modal from "react-modal";
import { toast } from 'react-toastify';

import Breadcrumb from '../../../../common/breadcrumb';
import Loader from '../../../../features/loader';
import PNotify from '../../../../features/elements/p-notify';
import PtToolTip from '../../../../features/elements/tooltip';
import PtTable from '../../../../features/elements/table';

import { getTaxType } from '../../../../../api';

const modalStyles = {
    overlay: {
        background: 'rgba(11, 11, 11, .8)',
        zIndex: 9997
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

const TaxRateModal = ( { isOpen, data, onClose } ) => {
    const [ rate, setRate ] = useState( {} );

    useEffect( () => {
        if ( isOpen ) {
            setRate( data ? data : {} );
        }
    }, [ isOpen ] )

    function rateChange ( key, value ) {
        let temp = { ...rate };
        temp[ key ] = value;
        setRate( temp );
    }

    function closeModal ( result = false ) {
        onClose( result, rate );
    }

    return (
        <Modal
            isOpen={ isOpen }
            style={ modalStyles }
            onRequestClose={ () => closeModal( false ) }
        >
            <Card>
                <Card.Header><Card.Title>Tax Rate </Card.Title></Card.Header>
                <Card.Body>
                    <div className="modal-wrapper">
                        <Form.Group as={ Row } className="align-items-center">
                            <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">
                                Tax Name <PtToolTip placement="top" trigger="hover" tooltip="Enter name for this tax rate" />
                            </Col>
                            <Col lg={ 7 } xl={ 6 }>
                                <Form.Control
                                    type="text"
                                    maxLength="20"
                                    className="form-control-modern"
                                    value={ rate.name ? rate.name : '' }
                                    onChange={ e => rateChange( 'name', e.target.value ) }
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={ Row } className="align-items-center">
                            <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">
                                Country Code <PtToolTip placement="top" trigger="hover" tooltip="A 2 digit country code, e.g. US." />
                            </Col>
                            <Col lg={ 7 } xl={ 6 }>
                                <Form.Control
                                    type="text"
                                    maxLength="20"
                                    className="form-control-modern"
                                    value={ rate.country ? rate.country : '' }
                                    onChange={ e => rateChange( 'country', e.target.value ) }
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={ Row } className="align-items-center">
                            <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">
                                State Code <PtToolTip placement="top" trigger="hover" tooltip="A 2 digit state code, e.g. AL. Leave blank to apply to all." />
                            </Col>
                            <Col lg={ 7 } xl={ 6 }>
                                <Form.Control
                                    type="text"
                                    maxLength="20"
                                    className="form-control-modern"
                                    value={ rate.state ? rate.state : '' }
                                    onChange={ e => rateChange( 'state', e.target.value ) }
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={ Row } className="align-items-center">
                            <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">
                                Postcode / Zip <PtToolTip placement="top" trigger="hover" tooltip="Postcode for this rule. Leave blank to apply to all areas." />
                            </Col>
                            <Col lg={ 7 } xl={ 6 }>
                                <Form.Control
                                    type="text"
                                    maxLength="20"
                                    className="form-control-modern"
                                    value={ rate.postcode ? rate.postcode : '' }
                                    onChange={ e => rateChange( 'postcode', e.target.value ) }
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={ Row } className="align-items-center">
                            <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">
                                City <PtToolTip placement="top" trigger="hover" tooltip="Cities for this rule. Leave blank to apply to all cities." />
                            </Col>
                            <Col lg={ 7 } xl={ 6 }>
                                <Form.Control
                                    type="text"
                                    maxLength="20"
                                    className="form-control-modern"
                                    value={ rate.city ? rate.city : '' }
                                    onChange={ e => rateChange( 'city', e.target.value ) }
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={ Row } className="align-items-center">
                            <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">
                                Rate (%) <PtToolTip placement="top" trigger="hover" tooltip="Enter a tax rate (percentage)" />
                            </Col>
                            <Col lg={ 7 } xl={ 6 }>
                                <Form.Control
                                    type="text"
                                    maxLength="20"
                                    className="form-control-modern"
                                    value={ rate.rate ? rate.rate : '' }
                                    onChange={ e => rateChange( 'rate', e.target.value ) }
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={ Row } className="align-items-center">
                            <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">
                                Apply to Shipping <PtToolTip placement="top" trigger="hover" tooltip="Choose whether or not this tax rate also gets applied to shipping." />
                            </Col>
                            <Col lg={ 7 } xl={ 6 }>
                                <Form.Check
                                    custom
                                    id="is_shipping"
                                    className="checkbox-default pt-3"
                                    checked={ rate.is_shipping ? rate.is_shipping : '' }
                                    onChange={ e => rateChange( 'is_shipping', e.target.checked ) }
                                    label=""
                                />
                            </Col>
                        </Form.Group>
                    </div>
                </Card.Body>
                <Card.Footer>
                    <Row>
                        <Col md={ 12 } className="text-right">
                            <Button
                                className="mr-2"
                                variant="primary"
                                onClick={ () => closeModal( true ) }
                            >Confirm</Button>
                            <Button
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

export default function TaxDetail ( props ) {
    const [ tax, setTax ] = useState( null );
    const [ loading, setLoading ] = useState( true );
    const [ rates, setRates ] = useState( [] );

    // Filter Variables
    const [ filterBy, setFilterBy ] = useState( 'name' );
    const [ search, setSearch ] = useState( '' );

    const [ selectAll, setSelectAll ] = useState( false );
    const [ tableRef, setTableRef ] = useState( null );
    const [ selected, setSelected ] = useState( [] );
    const [ bulk, setBulk ] = useState( '' );
    const [ modalOpen, setModalOpen ] = useState( false );
    const [ currentRate, setCurrentRate ] = useState( null );

    // Columns
    const columns = [ {
        Header: 'Tax Name',
        accessor: 'name',
        sortable: true
    }, {
        Header: 'Country Code',
        accessor: 'country',
        sortable: true
    }, {
        Header: 'State Code',
        accessor: 'state',
        sortable: true
    }, {
        Header: 'Postcode / Zip',
        accessor: 'postcode',
        sortable: true
    }, {
        Header: 'City',
        accessor: 'city',
        sortable: true
    }, {
        Header: 'Rate (%)',
        accessor: 'rate',
        width: 84
    }, {
        Header: 'Shipping',
        accessor: 'is_shipping',
        width: 100,
        Cell: row => row.value ? 'Enabled' : 'Disabled'
    }, {
        Header: 'Actions',
        accessor: 'id',
        className: 'actions',
        headerClassName: "justify-content-center",
        style: {
            width: 'auto'
        },
        width: 100,
        Cell: row => (
            <>
                <a href="#edit" className="on-default edit-row mr-2"><i className="fas fa-pencil-alt" onClick={ e => openModal( e, row.value ) }></i></a>
                <a href="#del" className="on-default remove-row" onClick={ e => deleteRow( e, row.value ) }><i className="far fa-trash-alt"></i></a>
            </>
        )
    } ];

    useEffect( () => {
        setLoading( true );
        getTaxType( parseInt( props.match.params.id ) ).then( data => {
            setTax( {
                name: data.name,
                description: data.description ? data.description : ''
            } );
            setLoading( false );
            setRates( data.tax_rates );
            setSelected( data.tax_rates.map( rate => {
                return {
                    id: rate.id,
                    selected: false
                };
            } ) );
        } );
    }, [ props.match.params.id ] )

    useEffect( () => {
        setSelected( selected.map( item => {
            return {
                ...item,
                selected: selectAll
            }
        } ) );
    }, [ selectAll ] )

    function isSelected ( key ) {
        return selected.find( item => item.id === key && item.selected );
    }

    function onSelectChange ( e, value, row ) {
        setSelected( selected.map( item => {
            if ( item.id === row.id ) {
                return {
                    ...item,
                    selected: !item.selected
                };
            }
            return item;
        } ) );
    }

    function deleteRow ( e, index ) {
        e.preventDefault();
        if ( window.confirm( "Are you sure you want to delete this data?" ) ) {
            setRates( rates.filter( ( rate ) => rate.id !== index ) );
        }
    }

    function bulkAction ( e ) {
        e.preventDefault();
        if ( bulk === 'delete' ) {
            setRates( rates.filter( term => selected.find( item => item.id === term.id && !item.selected ) ) );
        }
    }

    function taxChange ( key, value ) {
        let temp = { ...tax };
        temp[ key ] = value;
        setTax( temp );
    }

    function searchTaxRates ( e ) {
        e.preventDefault();
        tableRef.current.wrappedInstance.filterColumn( { id: filterBy }, search );
    }

    function openModal ( e, index ) {
        e.preventDefault();
        setCurrentRate( rates.find( rate => index && rate.id === parseInt( index ) ) );
        setModalOpen( true );
    }

    function closeModal ( result, data ) {
        setModalOpen( false );
        if ( result ) {
            if ( currentRate ) {
                setRates( rates.map( rate => {
                    if ( rate.id === currentRate.id ) {
                        return {
                            ...rate,
                            ...data
                        };
                    }
                    return rate;
                } ) );
            } else {
                let id = rates.length + 1 + parseInt( Math.random() * 100 );
                setRates( [
                    ...rates,
                    {
                        id: id,
                        ...data
                    }
                ] );
                setSelected( [
                    ...selected,
                    {
                        id: id,
                        selected: false
                    }
                ] );
            }
        }
    }

    function saveTax ( e ) {
        e.preventDefault();
        toast(
            <PNotify title="Success" icon="fas fa-check" text="Tax rate saved successfully." />,
            {
                containerId: "default",
                className: "notification-success"
            }
        );
    }

    return (
        <>
            <Breadcrumb current="Tax Rate Edit" paths={ [
                {
                    name: 'Home',
                    url: '/'
                }, {
                    name: 'Ecommerce',
                    url: '/ecommerce'
                }, {
                    name: 'Tax Settings',
                    url: '/ecommerce/settings/tax'
                }
            ] } />
            { loading ? <Loader />
                :
                <>
                    <Row>
                        <Col>
                            <Form className="ecommerce-setting-form pb-5" action="#" method="post" onSubmit={ saveTax }>
                                <Card className="card-modern card-big-info">
                                    <Card.Body>
                                        <Row>
                                            <Col lg="2-5" xl="1-5">
                                                <i className="card-big-info-icon bx bx-cog"></i>
                                                <h2 className="card-big-info-title">General</h2>
                                                <p className="card-big-info-desc">Add here the tax rate info with all details and necessary information.</p>
                                            </Col>
                                            <Col lg="3-5" xl="4-5">
                                                <Form.Group as={ Row } className="align-items-center">
                                                    <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mb-lg-0">Class Name</Col>
                                                    <Col lg={ 7 } xl={ 6 }>
                                                        <Form.Control
                                                            type="text"
                                                            maxLength="50"
                                                            className="form-control-modern"
                                                            value={ tax.name }
                                                            onChange={ e => taxChange( 'name', e.target.value ) }
                                                            required
                                                        />
                                                    </Col>
                                                </Form.Group>
                                                <Form.Group as={ Row }>
                                                    <Col as={ Form.Label } lg={ 5 } xl={ 3 } className="control-label text-lg-right mt-2 mb-0">Description</Col>
                                                    <Col lg={ 7 } xl={ 6 }>
                                                        <Form.Control
                                                            as="textarea"
                                                            className="form-control-modern"
                                                            rows="6"
                                                            maxLength="250"
                                                            value={ tax.description }
                                                            onChange={ e => taxChange( 'description', e.target.value ) }
                                                        />
                                                    </Col>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                    <Card.Footer className="text-right">
                                        <Button type="submit" variant="primary">Save changes</Button>
                                    </Card.Footer>
                                </Card>
                            </Form>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form action="#" method="get" onSubmit={ searchTaxRates }>
                                <Card className="card-modern">
                                    <Card.Body>
                                        <div className="datatables-header-footer-wrapper">
                                            <div className="datatable-header mb-4">
                                                <Row className="align-items-center">
                                                    <Col md="auto" className="mb-3 mb-lg-0">
                                                        <Button
                                                            href="#addTaxRate"
                                                            className="font-weight-semibold"
                                                            variant="primary"
                                                            size="md"
                                                            onClick={ openModal }
                                                        >+ Add Tax</Button>
                                                    </Col>
                                                    <Col md="auto" className="col-8 ml-auto mb-3 mb-lg-0">
                                                        <div className="d-flex align-items-lg-center flex-column flex-lg-row">
                                                            <Form.Label className="ws-nowrap mr-3 mb-0 d-none d-lg-inline-block">Filter By:</Form.Label>
                                                            <Form.Control
                                                                as="select"
                                                                className="select-style-1 filter-by"
                                                                value={ filterBy }
                                                                onChange={ e => setFilterBy( e.target.value ) }
                                                            >
                                                                <option value="name">Name</option>
                                                                <option value="country">Country Code</option>
                                                                <option value="state">State Code</option>
                                                                <option value="postcode">Postcode / Zip</option>
                                                                <option value="city">City</option>
                                                            </Form.Control>
                                                        </div>
                                                    </Col>
                                                    <Col lg="auto" className="pl-md-1">
                                                        <div className="search search-style-1 mx-lg-auto">
                                                            <InputGroup>
                                                                <Form.Control
                                                                    type="text"
                                                                    maxLength="20"
                                                                    className="search-term"
                                                                    placeholder="Search Tax Rate"
                                                                    value={ search }
                                                                    onChange={ e => setSearch( e.target.value ) }
                                                                />
                                                                <InputGroup.Append>
                                                                    <Button type="submit" variant="default"><i className="bx bx-search"></i></Button>
                                                                </InputGroup.Append>
                                                            </InputGroup>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>

                                            <PtTable
                                                className="table table-ecommerce-simple -striped mb-0"
                                                data={ rates }
                                                columns={ columns }
                                                pageSize={ 12 }
                                                selectAll={ selectAll }
                                                toggleAll={ () => setSelectAll( !selectAll ) }
                                                isSelected={ key => isSelected( key ) }
                                                toggleSelection={ onSelectChange }
                                                onChangeRef={ ref => setTableRef( ref ) }
                                            />

                                            <div className="datatable-footer">
                                                <Row className="align-items-center justify-content-between mt-3">
                                                    <Col md="auto" className="mb-3 mb-lg-0">
                                                        <div className="d-flex align-items-center">
                                                            <Form.Control
                                                                as="select"
                                                                className="select-style-1 bulk-action w-auto mr-3"
                                                                value={ bulk }
                                                                onChange={ e => setBulk( e.target.value ) }
                                                                style={ { minWidth: "120px" } }
                                                            >
                                                                <option value="">Bulk Actions</option>
                                                                <option value="delete">Delete</option>
                                                            </Form.Control>
                                                            <Button
                                                                href="#bulk-action"
                                                                className="bulk-action-apply border font-weight-semibold text-color-dark text-3"
                                                                variant="light"
                                                                onClick={ bulkAction }
                                                            >Apply</Button>
                                                        </div>
                                                    </Col>
                                                    <Col lg="auto" className="mb-3 mb-lg-0">
                                                        <div className="pagination-wrapper d-flex justify-content-lg-end">
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Form>
                        </Col>
                    </Row>
                </>
            }
            <Row className="action-buttons">
                <Col md="auto">
                    <Button
                        as={ Link }
                        to={ `${ process.env.PUBLIC_URL }/ecommerce/settings/tax` }
                        className="btn-px-4 py-3 d-flex align-items-center font-weight-semibold line-height-1"
                        variant="default"
                    >
                        <i className="bx bx-arrow-back text-4 mr-2"></i> Back
                    </Button>
                </Col>
            </Row>

            <TaxRateModal isOpen={ modalOpen } onClose={ closeModal } data={ currentRate } />
        </>
    )
}