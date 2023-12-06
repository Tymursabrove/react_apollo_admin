import React, { useEffect } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { Scrollbars } from 'react-custom-scrollbars';

import Breadcrumb from '../../common/breadcrumb';

import { withCardActions } from '../../hoc';

const CardWithActions = withCardActions( Card );

function ScrollablesPage () {

    useEffect( () => {
        document.querySelector( ".content-body" ).classList.add( "card-margin" );

        return () => {
            document.querySelector( ".content-body" ).classList.remove( "card-margin" );
        };
    }, [] )

    return (
        <>
            <Breadcrumb current="Scrollable" paths={ [ {
                name: "Home",
                url: "/"
            }, {
                name: "Elements",
                url: "/elements"
            } ] } />

            <h4 className="mb-0">Scrollable Content</h4>
            <p className="mb-0 mb-lg-3">Easily add scrollbars in any type of content in the page as shown below:</p>

            <Row className="mb-4">
                <Col lg={ 4 }>
                    <CardWithActions className="mt-md-4 mt-lg-0">
                        <Card.Header>
                            <Card.Title>
                                Panel with Scrollable Content
                            </Card.Title>
                        </Card.Header>

                        <Card.Body>
                            <Scrollbars style={ { height: 350 } } autoHide>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec egestas felis, ut posuere est. Etiam eleifend, lacus in pretium placerat, augue nulla pretium ex, non accumsan est sapien et arcu. In facilisis euismod justo, id ultricies purus efficitur eu. Nullam a commodo turpis. Nam vitae neque tellus. Sed luctus, ante tincidunt placerat vestibulum, mi dui placerat sapien, consectetur posuere nisl sem non odio. Proin eget metus lobortis, tristique diam bibendum, aliquet nisi. Aliquam sed finibus quam, sed lobortis justo. In cursus magna id scelerisque accumsan. Cras eleifend accumsan ligula, in elementum libero bibendum ut. Maecenas tempor faucibus vulputate.</p>

                                <p>Quisque purus nunc, tempus et dolor at, sagittis commodo elit. Cras venenatis odio eros, id venenatis nulla rhoncus non. Ut id risus iaculis, laoreet tortor ac, venenatis purus. Sed gravida auctor ex, tincidunt accumsan nisi tristique eget. In bibendum maximus nisl a varius. Proin imperdiet nunc vel augue vehicula finibus. Sed blandit congue aliquet. In dignissim odio vel nisl mollis molestie. Vestibulum malesuada nec turpis quis egestas. Vestibulum quam nisi, volutpat non enim eu, fermentum dignissim nisi. Donec eu maximus augue, sit amet vestibulum libero. Pellentesque imperdiet nisl a imperdiet iaculis. Donec quis lectus orci. Duis vitae cursus tellus, id volutpat lacus. Nulla mollis quam non diam interdum, non varius ex accumsan. Donec tempor mauris ante, in consequat massa sollicitudin eget.</p>

                                <p>Aenean facilisis risus et scelerisque eleifend. Nam vel malesuada lectus, et efficitur eros. Nullam ultrices enim sit amet tellus placerat pharetra. Aliquam a nulla sit amet magna hendrerit tristique. Curabitur sodales eros id massa gravida viverra. Etiam sed justo vehicula, consequat nunc a, viverra ante. Donec at mollis felis, quis pharetra arcu. Nulla sed libero a nibh tincidunt maximus. Aliquam placerat diam nibh, eget maximus urna sollicitudin ut.</p>

                                <p>Mauris cursus sapien at felis commodo, et efficitur mi eleifend. Vivamus efficitur vel lacus id accumsan. Quisque nec nisl tincidunt, consequat nisi ac, semper dolor. Vestibulum hendrerit, nibh vitae hendrerit ultricies, odio lectus tempus lectus, eu varius dui mauris quis felis. Curabitur id porttitor felis. Sed rhoncus purus a magna sollicitudin pharetra. Curabitur euismod, massa sit amet elementum sodales, risus est finibus quam, et semper dolor ipsum quis quam. Sed non sapien sed sem iaculis ornare. Integer ultrices tortor a eleifend feugiat. Nam id purus rhoncus, fringilla orci quis, cursus turpis. Suspendisse ultricies nisi vitae eros feugiat efficitur.</p>

                                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus hendrerit sit amet massa ut molestie. Pellentesque sollicitudin at erat eu dignissim. Pellentesque ultrices, quam sed euismod varius, tellus orci accumsan justo, eget blandit velit mi non sapien. Nunc at ornare ipsum. Nunc porttitor enim massa, non venenatis tellus viverra quis. Aliquam vel euismod lacus. Etiam mauris enim, consectetur quis odio ut, semper lobortis ipsum. Duis eget augue eu tortor hendrerit eleifend et sit amet neque. Vestibulum tempor pellentesque arcu, ut gravida dui. Sed consectetur et ligula quis semper. Morbi lobortis, lectus at lacinia pellentesque, ante felis viverra orci, sodales suscipit magna lacus condimentum dolor. Pellentesque finibus erat et magna tristique, varius tempor mi interdum. </p>
                            </Scrollbars>
                        </Card.Body>
                    </CardWithActions>
                </Col>

                <Col lg={ 4 }>
                    <CardWithActions className="mt-md-4 mt-lg-0">
                        <Card.Header>
                            <Card.Title>
                                Slider Always Visible
                            </Card.Title>
                        </Card.Header>

                        <Card.Body>
                            <Scrollbars style={ { height: 350 } }>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec egestas felis, ut posuere est. Etiam eleifend, lacus in pretium placerat, augue nulla pretium ex, non accumsan est sapien et arcu. In facilisis euismod justo, id ultricies purus efficitur eu. Nullam a commodo turpis. Nam vitae neque tellus. Sed luctus, ante tincidunt placerat vestibulum, mi dui placerat sapien, consectetur posuere nisl sem non odio. Proin eget metus lobortis, tristique diam bibendum, aliquet nisi. Aliquam sed finibus quam, sed lobortis justo. In cursus magna id scelerisque accumsan. Cras eleifend accumsan ligula, in elementum libero bibendum ut. Maecenas tempor faucibus vulputate.</p>

                                <p>Quisque purus nunc, tempus et dolor at, sagittis commodo elit. Cras venenatis odio eros, id venenatis nulla rhoncus non. Ut id risus iaculis, laoreet tortor ac, venenatis purus. Sed gravida auctor ex, tincidunt accumsan nisi tristique eget. In bibendum maximus nisl a varius. Proin imperdiet nunc vel augue vehicula finibus. Sed blandit congue aliquet. In dignissim odio vel nisl mollis molestie. Vestibulum malesuada nec turpis quis egestas. Vestibulum quam nisi, volutpat non enim eu, fermentum dignissim nisi. Donec eu maximus augue, sit amet vestibulum libero. Pellentesque imperdiet nisl a imperdiet iaculis. Donec quis lectus orci. Duis vitae cursus tellus, id volutpat lacus. Nulla mollis quam non diam interdum, non varius ex accumsan. Donec tempor mauris ante, in consequat massa sollicitudin eget.</p>

                                <p>Aenean facilisis risus et scelerisque eleifend. Nam vel malesuada lectus, et efficitur eros. Nullam ultrices enim sit amet tellus placerat pharetra. Aliquam a nulla sit amet magna hendrerit tristique. Curabitur sodales eros id massa gravida viverra. Etiam sed justo vehicula, consequat nunc a, viverra ante. Donec at mollis felis, quis pharetra arcu. Nulla sed libero a nibh tincidunt maximus. Aliquam placerat diam nibh, eget maximus urna sollicitudin ut.</p>

                                <p>Mauris cursus sapien at felis commodo, et efficitur mi eleifend. Vivamus efficitur vel lacus id accumsan. Quisque nec nisl tincidunt, consequat nisi ac, semper dolor. Vestibulum hendrerit, nibh vitae hendrerit ultricies, odio lectus tempus lectus, eu varius dui mauris quis felis. Curabitur id porttitor felis. Sed rhoncus purus a magna sollicitudin pharetra. Curabitur euismod, massa sit amet elementum sodales, risus est finibus quam, et semper dolor ipsum quis quam. Sed non sapien sed sem iaculis ornare. Integer ultrices tortor a eleifend feugiat. Nam id purus rhoncus, fringilla orci quis, cursus turpis. Suspendisse ultricies nisi vitae eros feugiat efficitur.</p>

                                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus hendrerit sit amet massa ut molestie. Pellentesque sollicitudin at erat eu dignissim. Pellentesque ultrices, quam sed euismod varius, tellus orci accumsan justo, eget blandit velit mi non sapien. Nunc at ornare ipsum. Nunc porttitor enim massa, non venenatis tellus viverra quis. Aliquam vel euismod lacus. Etiam mauris enim, consectetur quis odio ut, semper lobortis ipsum. Duis eget augue eu tortor hendrerit eleifend et sit amet neque. Vestibulum tempor pellentesque arcu, ut gravida dui. Sed consectetur et ligula quis semper. Morbi lobortis, lectus at lacinia pellentesque, ante felis viverra orci, sodales suscipit magna lacus condimentum dolor. Pellentesque finibus erat et magna tristique, varius tempor mi interdum. </p>
                            </Scrollbars>
                        </Card.Body>
                    </CardWithActions>
                </Col>

                <Col lg={ 4 }>
                    <CardWithActions className="mt-md-4 mt-lg-0">
                        <Card.Header>
                            <Card.Title>
                                Slider Always Visible and Colored
                            </Card.Title>
                        </Card.Header>

                        <Card.Body>
                            <Scrollbars
                                style={ { height: 350 } }
                                renderThumbVertical={ ( props ) => <div { ...props } className="bg-primary rounded"></div> }
                            >
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec egestas felis, ut posuere est. Etiam eleifend, lacus in pretium placerat, augue nulla pretium ex, non accumsan est sapien et arcu. In facilisis euismod justo, id ultricies purus efficitur eu. Nullam a commodo turpis. Nam vitae neque tellus. Sed luctus, ante tincidunt placerat vestibulum, mi dui placerat sapien, consectetur posuere nisl sem non odio. Proin eget metus lobortis, tristique diam bibendum, aliquet nisi. Aliquam sed finibus quam, sed lobortis justo. In cursus magna id scelerisque accumsan. Cras eleifend accumsan ligula, in elementum libero bibendum ut. Maecenas tempor faucibus vulputate.</p>

                                <p>Quisque purus nunc, tempus et dolor at, sagittis commodo elit. Cras venenatis odio eros, id venenatis nulla rhoncus non. Ut id risus iaculis, laoreet tortor ac, venenatis purus. Sed gravida auctor ex, tincidunt accumsan nisi tristique eget. In bibendum maximus nisl a varius. Proin imperdiet nunc vel augue vehicula finibus. Sed blandit congue aliquet. In dignissim odio vel nisl mollis molestie. Vestibulum malesuada nec turpis quis egestas. Vestibulum quam nisi, volutpat non enim eu, fermentum dignissim nisi. Donec eu maximus augue, sit amet vestibulum libero. Pellentesque imperdiet nisl a imperdiet iaculis. Donec quis lectus orci. Duis vitae cursus tellus, id volutpat lacus. Nulla mollis quam non diam interdum, non varius ex accumsan. Donec tempor mauris ante, in consequat massa sollicitudin eget.</p>

                                <p>Aenean facilisis risus et scelerisque eleifend. Nam vel malesuada lectus, et efficitur eros. Nullam ultrices enim sit amet tellus placerat pharetra. Aliquam a nulla sit amet magna hendrerit tristique. Curabitur sodales eros id massa gravida viverra. Etiam sed justo vehicula, consequat nunc a, viverra ante. Donec at mollis felis, quis pharetra arcu. Nulla sed libero a nibh tincidunt maximus. Aliquam placerat diam nibh, eget maximus urna sollicitudin ut.</p>

                                <p>Mauris cursus sapien at felis commodo, et efficitur mi eleifend. Vivamus efficitur vel lacus id accumsan. Quisque nec nisl tincidunt, consequat nisi ac, semper dolor. Vestibulum hendrerit, nibh vitae hendrerit ultricies, odio lectus tempus lectus, eu varius dui mauris quis felis. Curabitur id porttitor felis. Sed rhoncus purus a magna sollicitudin pharetra. Curabitur euismod, massa sit amet elementum sodales, risus est finibus quam, et semper dolor ipsum quis quam. Sed non sapien sed sem iaculis ornare. Integer ultrices tortor a eleifend feugiat. Nam id purus rhoncus, fringilla orci quis, cursus turpis. Suspendisse ultricies nisi vitae eros feugiat efficitur.</p>

                                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus hendrerit sit amet massa ut molestie. Pellentesque sollicitudin at erat eu dignissim. Pellentesque ultrices, quam sed euismod varius, tellus orci accumsan justo, eget blandit velit mi non sapien. Nunc at ornare ipsum. Nunc porttitor enim massa, non venenatis tellus viverra quis. Aliquam vel euismod lacus. Etiam mauris enim, consectetur quis odio ut, semper lobortis ipsum. Duis eget augue eu tortor hendrerit eleifend et sit amet neque. Vestibulum tempor pellentesque arcu, ut gravida dui. Sed consectetur et ligula quis semper. Morbi lobortis, lectus at lacinia pellentesque, ante felis viverra orci, sodales suscipit magna lacus condimentum dolor. Pellentesque finibus erat et magna tristique, varius tempor mi interdum. </p>
                            </Scrollbars>
                        </Card.Body>
                    </CardWithActions>
                </Col>
            </Row>

            <Row>
                <Col md={ 12 }>
                    <Scrollbars style={ { height: 500 } } autoHide>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec egestas felis, ut posuere est. Etiam eleifend, lacus in pretium placerat, augue nulla pretium ex, non accumsan est sapien et arcu. In facilisis euismod justo, id ultricies purus efficitur eu. Nullam a commodo turpis. Nam vitae neque tellus. Sed luctus, ante tincidunt placerat vestibulum, mi dui placerat sapien, consectetur posuere nisl sem non odio. Proin eget metus lobortis, tristique diam bibendum, aliquet nisi. Aliquam sed finibus quam, sed lobortis justo. In cursus magna id scelerisque accumsan. Cras eleifend accumsan ligula, in elementum libero bibendum ut. Maecenas tempor faucibus vulputate.</p>

                        <p>Quisque purus nunc, tempus et dolor at, sagittis commodo elit. Cras venenatis odio eros, id venenatis nulla rhoncus non. Ut id risus iaculis, laoreet tortor ac, venenatis purus. Sed gravida auctor ex, tincidunt accumsan nisi tristique eget. In bibendum maximus nisl a varius. Proin imperdiet nunc vel augue vehicula finibus. Sed blandit congue aliquet. In dignissim odio vel nisl mollis molestie. Vestibulum malesuada nec turpis quis egestas. Vestibulum quam nisi, volutpat non enim eu, fermentum dignissim nisi. Donec eu maximus augue, sit amet vestibulum libero. Pellentesque imperdiet nisl a imperdiet iaculis. Donec quis lectus orci. Duis vitae cursus tellus, id volutpat lacus. Nulla mollis quam non diam interdum, non varius ex accumsan. Donec tempor mauris ante, in consequat massa sollicitudin eget.</p>

                        <p>Aenean facilisis risus et scelerisque eleifend. Nam vel malesuada lectus, et efficitur eros. Nullam ultrices enim sit amet tellus placerat pharetra. Aliquam a nulla sit amet magna hendrerit tristique. Curabitur sodales eros id massa gravida viverra. Etiam sed justo vehicula, consequat nunc a, viverra ante. Donec at mollis felis, quis pharetra arcu. Nulla sed libero a nibh tincidunt maximus. Aliquam placerat diam nibh, eget maximus urna sollicitudin ut.</p>

                        <p>Mauris cursus sapien at felis commodo, et efficitur mi eleifend. Vivamus efficitur vel lacus id accumsan. Quisque nec nisl tincidunt, consequat nisi ac, semper dolor. Vestibulum hendrerit, nibh vitae hendrerit ultricies, odio lectus tempus lectus, eu varius dui mauris quis felis. Curabitur id porttitor felis. Sed rhoncus purus a magna sollicitudin pharetra. Curabitur euismod, massa sit amet elementum sodales, risus est finibus quam, et semper dolor ipsum quis quam. Sed non sapien sed sem iaculis ornare. Integer ultrices tortor a eleifend feugiat. Nam id purus rhoncus, fringilla orci quis, cursus turpis. Suspendisse ultricies nisi vitae eros feugiat efficitur.</p>

                        <div className="bg-white p-3 mb-3">
                            <Scrollbars style={ { height: 200 } } autoHide>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec egestas felis, ut posuere est. Etiam eleifend, lacus in pretium placerat, augue nulla pretium ex, non accumsan est sapien et arcu. In facilisis euismod justo, id ultricies purus efficitur eu. Nullam a commodo turpis. Nam vitae neque tellus. Sed luctus, ante tincidunt placerat vestibulum, mi dui placerat sapien, consectetur posuere nisl sem non odio. Proin eget metus lobortis, tristique diam bibendum, aliquet nisi. Aliquam sed finibus quam, sed lobortis justo. In cursus magna id scelerisque accumsan. Cras eleifend accumsan ligula, in elementum libero bibendum ut. Maecenas tempor faucibus vulputate.</p>

                                <p>Quisque purus nunc, tempus et dolor at, sagittis commodo elit. Cras venenatis odio eros, id venenatis nulla rhoncus non. Ut id risus iaculis, laoreet tortor ac, venenatis purus. Sed gravida auctor ex, tincidunt accumsan nisi tristique eget. In bibendum maximus nisl a varius. Proin imperdiet nunc vel augue vehicula finibus. Sed blandit congue aliquet. In dignissim odio vel nisl mollis molestie. Vestibulum malesuada nec turpis quis egestas. Vestibulum quam nisi, volutpat non enim eu, fermentum dignissim nisi. Donec eu maximus augue, sit amet vestibulum libero. Pellentesque imperdiet nisl a imperdiet iaculis. Donec quis lectus orci. Duis vitae cursus tellus, id volutpat lacus. Nulla mollis quam non diam interdum, non varius ex accumsan. Donec tempor mauris ante, in consequat massa sollicitudin eget.</p>

                                <p>Aenean facilisis risus et scelerisque eleifend. Nam vel malesuada lectus, et efficitur eros. Nullam ultrices enim sit amet tellus placerat pharetra. Aliquam a nulla sit amet magna hendrerit tristique. Curabitur sodales eros id massa gravida viverra. Etiam sed justo vehicula, consequat nunc a, viverra ante. Donec at mollis felis, quis pharetra arcu. Nulla sed libero a nibh tincidunt maximus. Aliquam placerat diam nibh, eget maximus urna sollicitudin ut.</p>

                                <p>Mauris cursus sapien at felis commodo, et efficitur mi eleifend. Vivamus efficitur vel lacus id accumsan. Quisque nec nisl tincidunt, consequat nisi ac, semper dolor. Vestibulum hendrerit, nibh vitae hendrerit ultricies, odio lectus tempus lectus, eu varius dui mauris quis felis. Curabitur id porttitor felis. Sed rhoncus purus a magna sollicitudin pharetra. Curabitur euismod, massa sit amet elementum sodales, risus est finibus quam, et semper dolor ipsum quis quam. Sed non sapien sed sem iaculis ornare. Integer ultrices tortor a eleifend feugiat. Nam id purus rhoncus, fringilla orci quis, cursus turpis. Suspendisse ultricies nisi vitae eros feugiat efficitur.</p>
                            </Scrollbars>
                        </div>

                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus hendrerit sit amet massa ut molestie. Pellentesque sollicitudin at erat eu dignissim. Pellentesque ultrices, quam sed euismod varius, tellus orci accumsan justo, eget blandit velit mi non sapien. Nunc at ornare ipsum. Nunc porttitor enim massa, non venenatis tellus viverra quis. Aliquam vel euismod lacus. Etiam mauris enim, consectetur quis odio ut, semper lobortis ipsum. Duis eget augue eu tortor hendrerit eleifend et sit amet neque. Vestibulum tempor pellentesque arcu, ut gravida dui. Sed consectetur et ligula quis semper. Morbi lobortis, lectus at lacinia pellentesque, ante felis viverra orci, sodales suscipit magna lacus condimentum dolor. Pellentesque finibus erat et magna tristique, varius tempor mi interdum. </p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec egestas felis, ut posuere est. Etiam eleifend, lacus in pretium placerat, augue nulla pretium ex, non accumsan est sapien et arcu. In facilisis euismod justo, id ultricies purus efficitur eu. Nullam a commodo turpis. Nam vitae neque tellus. Sed luctus, ante tincidunt placerat vestibulum, mi dui placerat sapien, consectetur posuere nisl sem non odio. Proin eget metus lobortis, tristique diam bibendum, aliquet nisi. Aliquam sed finibus quam, sed lobortis justo. In cursus magna id scelerisque accumsan. Cras eleifend accumsan ligula, in elementum libero bibendum ut. Maecenas tempor faucibus vulputate.</p>

                        <p>Quisque purus nunc, tempus et dolor at, sagittis commodo elit. Cras venenatis odio eros, id venenatis nulla rhoncus non. Ut id risus iaculis, laoreet tortor ac, venenatis purus. Sed gravida auctor ex, tincidunt accumsan nisi tristique eget. In bibendum maximus nisl a varius. Proin imperdiet nunc vel augue vehicula finibus. Sed blandit congue aliquet. In dignissim odio vel nisl mollis molestie. Vestibulum malesuada nec turpis quis egestas. Vestibulum quam nisi, volutpat non enim eu, fermentum dignissim nisi. Donec eu maximus augue, sit amet vestibulum libero. Pellentesque imperdiet nisl a imperdiet iaculis. Donec quis lectus orci. Duis vitae cursus tellus, id volutpat lacus. Nulla mollis quam non diam interdum, non varius ex accumsan. Donec tempor mauris ante, in consequat massa sollicitudin eget.</p>

                        <p>Aenean facilisis risus et scelerisque eleifend. Nam vel malesuada lectus, et efficitur eros. Nullam ultrices enim sit amet tellus placerat pharetra. Aliquam a nulla sit amet magna hendrerit tristique. Curabitur sodales eros id massa gravida viverra. Etiam sed justo vehicula, consequat nunc a, viverra ante. Donec at mollis felis, quis pharetra arcu. Nulla sed libero a nibh tincidunt maximus. Aliquam placerat diam nibh, eget maximus urna sollicitudin ut.</p>

                        <p>Mauris cursus sapien at felis commodo, et efficitur mi eleifend. Vivamus efficitur vel lacus id accumsan. Quisque nec nisl tincidunt, consequat nisi ac, semper dolor. Vestibulum hendrerit, nibh vitae hendrerit ultricies, odio lectus tempus lectus, eu varius dui mauris quis felis. Curabitur id porttitor felis. Sed rhoncus purus a magna sollicitudin pharetra. Curabitur euismod, massa sit amet elementum sodales, risus est finibus quam, et semper dolor ipsum quis quam. Sed non sapien sed sem iaculis ornare. Integer ultrices tortor a eleifend feugiat. Nam id purus rhoncus, fringilla orci quis, cursus turpis. Suspendisse ultricies nisi vitae eros feugiat efficitur.</p>

                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus hendrerit sit amet massa ut molestie. Pellentesque sollicitudin at erat eu dignissim. Pellentesque ultrices, quam sed euismod varius, tellus orci accumsan justo, eget blandit velit mi non sapien. Nunc at ornare ipsum. Nunc porttitor enim massa, non venenatis tellus viverra quis. Aliquam vel euismod lacus. Etiam mauris enim, consectetur quis odio ut, semper lobortis ipsum. Duis eget augue eu tortor hendrerit eleifend et sit amet neque. Vestibulum tempor pellentesque arcu, ut gravida dui. Sed consectetur et ligula quis semper. Morbi lobortis, lectus at lacinia pellentesque, ante felis viverra orci, sodales suscipit magna lacus condimentum dolor. Pellentesque finibus erat et magna tristique, varius tempor mi interdum. </p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec egestas felis, ut posuere est. Etiam eleifend, lacus in pretium placerat, augue nulla pretium ex, non accumsan est sapien et arcu. In facilisis euismod justo, id ultricies purus efficitur eu. Nullam a commodo turpis. Nam vitae neque tellus. Sed luctus, ante tincidunt placerat vestibulum, mi dui placerat sapien, consectetur posuere nisl sem non odio. Proin eget metus lobortis, tristique diam bibendum, aliquet nisi. Aliquam sed finibus quam, sed lobortis justo. In cursus magna id scelerisque accumsan. Cras eleifend accumsan ligula, in elementum libero bibendum ut. Maecenas tempor faucibus vulputate.</p>

                        <p>Quisque purus nunc, tempus et dolor at, sagittis commodo elit. Cras venenatis odio eros, id venenatis nulla rhoncus non. Ut id risus iaculis, laoreet tortor ac, venenatis purus. Sed gravida auctor ex, tincidunt accumsan nisi tristique eget. In bibendum maximus nisl a varius. Proin imperdiet nunc vel augue vehicula finibus. Sed blandit congue aliquet. In dignissim odio vel nisl mollis molestie. Vestibulum malesuada nec turpis quis egestas. Vestibulum quam nisi, volutpat non enim eu, fermentum dignissim nisi. Donec eu maximus augue, sit amet vestibulum libero. Pellentesque imperdiet nisl a imperdiet iaculis. Donec quis lectus orci. Duis vitae cursus tellus, id volutpat lacus. Nulla mollis quam non diam interdum, non varius ex accumsan. Donec tempor mauris ante, in consequat massa sollicitudin eget.</p>

                        <p>Aenean facilisis risus et scelerisque eleifend. Nam vel malesuada lectus, et efficitur eros. Nullam ultrices enim sit amet tellus placerat pharetra. Aliquam a nulla sit amet magna hendrerit tristique. Curabitur sodales eros id massa gravida viverra. Etiam sed justo vehicula, consequat nunc a, viverra ante. Donec at mollis felis, quis pharetra arcu. Nulla sed libero a nibh tincidunt maximus. Aliquam placerat diam nibh, eget maximus urna sollicitudin ut.</p>

                        <p>Mauris cursus sapien at felis commodo, et efficitur mi eleifend. Vivamus efficitur vel lacus id accumsan. Quisque nec nisl tincidunt, consequat nisi ac, semper dolor. Vestibulum hendrerit, nibh vitae hendrerit ultricies, odio lectus tempus lectus, eu varius dui mauris quis felis. Curabitur id porttitor felis. Sed rhoncus purus a magna sollicitudin pharetra. Curabitur euismod, massa sit amet elementum sodales, risus est finibus quam, et semper dolor ipsum quis quam. Sed non sapien sed sem iaculis ornare. Integer ultrices tortor a eleifend feugiat. Nam id purus rhoncus, fringilla orci quis, cursus turpis. Suspendisse ultricies nisi vitae eros feugiat efficitur.</p>

                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus hendrerit sit amet massa ut molestie. Pellentesque sollicitudin at erat eu dignissim. Pellentesque ultrices, quam sed euismod varius, tellus orci accumsan justo, eget blandit velit mi non sapien. Nunc at ornare ipsum. Nunc porttitor enim massa, non venenatis tellus viverra quis. Aliquam vel euismod lacus. Etiam mauris enim, consectetur quis odio ut, semper lobortis ipsum. Duis eget augue eu tortor hendrerit eleifend et sit amet neque. Vestibulum tempor pellentesque arcu, ut gravida dui. Sed consectetur et ligula quis semper. Morbi lobortis, lectus at lacinia pellentesque, ante felis viverra orci, sodales suscipit magna lacus condimentum dolor. Pellentesque finibus erat et magna tristique, varius tempor mi interdum. </p>
                    </Scrollbars>
                </Col>
            </Row>
        </>
    )
}

export default React.memo( ScrollablesPage );