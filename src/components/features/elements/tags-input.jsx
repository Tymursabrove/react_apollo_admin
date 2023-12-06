import React, { Component } from 'react';

export default class PtTagsInput extends Component {
    constructor ( props ) {
        super( props );
        this.addTag = this.addTag.bind( this );
        this.removeTag = this.removeTag.bind( this );
        this.keyPress = this.keyPress.bind( this );
        this.state = {
            tags: props.value ? props.value : []
        };
    }

    componentDidUpdate ( prev, next ) {
        if ( prev.tags !== next.tags ) {
            this.props.onChange && this.props.onChange( this.state.tags );
        }
        this.props.addSelectedTags(this.state.tags);
    }

    addTag ( tag ) {
        this.state.tags.find( item => item.slug === tag.slug ) || this.setState( {
            ...this.state,
            tags: [ ...this.state.tags, tag ]
        });
        console.log(this.state.tags);
    }

    removeTag ( slug ) {
        this.setState( {
            tags: this.state.tags.filter( tag => tag.slug !== slug )
        } );
    }

    keyPress ( e ) {
        if ( e.which === 13 || e.which === 44 ) {
            e.preventDefault();

            let newTag = {
                name: e.target.value,
                slug: e.target.value
            };

            e.target.value = '';
            this.addTag( newTag );
        }
    }

    render () {
        const { tagClass = '' } = this.props;

        return (
            <div className="bootstrap-tagsinput">
                {
                    this.state.tags.map( ( tag, index ) => (
                        <span className={ `badge ${ tagClass }` } key={ `tag-${ index }` }>
                            { tag.name }
                            <span data-role="remove" onClick={ () => this.removeTag( tag.slug ) }></span>
                        </span>
                    ) )
                }
                <input type="text" onKeyPress={ this.keyPress } />
            </div>
        )
    }
}