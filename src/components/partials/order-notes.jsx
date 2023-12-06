import React from 'react';
import { Col, Card, Form, Button } from 'react-bootstrap';

import { format } from 'date-format-parse';

import { withCardActions } from '../hoc';

const CardWithActions = withCardActions( Card );

export default class OrderNotes extends React.Component {
    constructor ( props ) {
        super( props );
        this.addNote = this.addNote.bind( this );
        this.deleteNote = this.deleteNote.bind( this );
        this.state = {
            notes: props.value ? props.value : [],
            content: '',
            notifyCustomer: 0
        };
    }

    addNote () {
        this.setState( {
            notes: [
                ...this.state.notes,
                {
                    author: {
                        first_name: 'John',
                        last_name: 'Doe'
                    },
                    created_at: format( new Date(), 'YYYY-MM-DD HH:mm:ss' ),
                    content: this.state.content,
                    notify_customer: this.state.notifyCustomer
                }
            ],
            content: '',
            notifyCustomer: 0
        } )
    }

    deleteNote ( index ) {
        if ( window.confirm( "Are you sure you want to remove this note?" ) ) {
            this.setState( {
                ...this.state,
                notes: this.state.notes.filter( ( note, id ) => id !== index )
            } );
        }
    }

    componentDidUpdate () {
        this.props.onChange && this.props.onChange( this.state.notes );
    }

    render () {
        return (
            <CardWithActions className="card-modern" dismissible={ false }>
                <Card.Header>
                    <Card.Title>Order Notes</Card.Title>
                </Card.Header>
                <Card.Body>
                    { this.state.notes.length ?
                        <div className="ecommerce-timeline mb-3">
                            <div className="ecommerce-timeline-items-wrapper">
                                { this.state.notes.map( ( note, index ) => (
                                    <div className="ecommerce-timeline-item" key={ `note-${ index }` }>
                                        <small>added on { note.created_at } by { note.author.first_name } { note.author.last_name } - <a href="#deleteNote" className="text-color-danger" onClick={ e => { e.preventDefault(); this.deleteNote( index ) } }>Delete Note</a></small>
                                        <p>{ note.content }</p>
                                    </div>
                                ) ) }
                            </div>
                        </div>
                        : ''
                    }
                    <Form.Row>
                        <Form.Group as={ Col } className="pb-1 mb-3">
                            <Form.Label>Add Note</Form.Label>
                            <Form.Control
                                as="textarea"
                                className="form-control-modern"
                                rows="6"
                                value={ this.state.content }
                                onChange={ e => { this.setState( { ...this.state, content: e.target.value } ) } }
                            />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group className="col-auto d-flex">
                            <Form.Control
                                as="select"
                                className="form-control-modern"
                                value={ this.state.notifyCustomer }
                                onChange={ e => { this.setState( { ...this.state, notifyCustomer: e.target.value } ) } }
                            >
                                <option value={ 0 }>Private Note</option>
                                <option value={ 1 }>Note to Customer</option>
                            </Form.Control>
                            <Button
                                href="#addNote"
                                className="border font-weight-semibold text-color-dark line-height-1 d-flex align-items-center text-nowrap ml-1"
                                variant="light"
                                disabled={ !this.state.content }
                                onClick={ e => { e.preventDefault(); this.addNote(); } }
                            >
                                Add Note
                            </Button>
                        </Form.Group>
                    </Form.Row>
                </Card.Body>
            </CardWithActions>
        )
    }
}