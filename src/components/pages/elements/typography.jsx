import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

import Breadcrumb from '../../common/breadcrumb';

import { withCardActions } from '../../hoc';
import PtWortRotator from '../../features/elements/wort-rotator';

const CardWithActions = withCardActions( Card );

function Typography () {
    return (
        <>
            <Breadcrumb current="Typography" paths={ [ {
                name: 'Home',
                url: '/'
            }, {
                name: 'Elements',
                url: '/elements'
            } ] } />

            <Row>
                <Col xl={ 9 }>
                    <CardWithActions>
                        <Card.Header>
                            <Card.Title>Headings</Card.Title>
                            <Card.Subtitle>All HTML headings, <code>&lt;h1&gt;</code> through <code>&lt;h6&gt;</code>, are available.</Card.Subtitle>
                        </Card.Header>

                        <Card.Body>
                            <h1>h1. Heading 1</h1>
                            <h2>h2. Heading 2</h2>
                            <h3>h3. Heading 3</h3>
                            <h4>h4. Heading 4</h4>
                            <h5>h5. Heading 5</h5>
                            <h6>h6. Heading 6</h6>
                        </Card.Body>
                    </CardWithActions>

                    <CardWithActions>
                        <Card.Header>
                            <Card.Title>Paragraphs</Card.Title>
                            <Card.Subtitle>Make a paragraph stand out by adding lead class, and check out the alternative font style.</Card.Subtitle>
                        </Card.Header>

                        <Card.Body>
                            <p className="lead">Mauris aliquet ultricies ante, non <PtWortRotator delay={ 3000 } items={ [ 'lorem', 'ipsum', 'dolor' ] } />
                                . Sed ultrices pellentesque purus, vulputate.</p>
                            <p className="lead">Check the <span className="alternative-font text-color-primary">alternative</span> font style.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a adipiscing lectus. Aenean fermentum mauris erat, quis accumsan eros facilisis sed. Nullam convallis arcu nec imperdiet pharetra. Suspendisse sed pharetra orci. Integer elementum augue sed dui sollicitudin, eu molestie leo rutrum. Vestibulum sit amet ullamcorper nunc.</p>
                            <p>Mauris aliquet <span className="highlight">ultricies</span> non faucibus ante gravida sed. Sed ultrices pellentesque purus, vulputate.</p>
                            <p>Check the <span className="alternative-font text-color-primary">alternative</span> font style.</p>
                            <p>Porto Admin is <PtWortRotator addClass="highlight" items={ [ 'incredibly', 'especially', 'extremely' ] } /> beautiful and fully responsive.
                            </p>
                        </Card.Body>
                    </CardWithActions>

                    <CardWithActions>
                        <Card.Header>
                            <Card.Title>Alignments</Card.Title>
                            <Card.Subtitle>It's easy to align the text the way you want.</Card.Subtitle>
                        </Card.Header>

                        <Card.Body>
                            <p className="text-left">left</p>
                            <p className="text-center">center</p>
                            <p className="text-justify"><span className="bold">Justify</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a adipiscing lectus. Aenean fermentum mauris erat, quis accumsan eros facilisis sed. Nullam convallis arcu nec imperdiet pharetra. Suspendisse sed pharetra orci. Integer elementum augue sed dui sollicitudin, eu molestie leo rutrum. Vestibulum sit amet ullamcorper nunc. Aliquam ligula dolor, feugiat sit amet nulla vitae, consequat ornare nunc. Proin scelerisque ligula purus, sed sodales tortor sodales non. Donec vel dolor cursus, ornare ipsum non, molestie neque. Quisque sed justo nunc. Sed tempus tellus nunc.</p>
                            <p className="text-right">right</p>
                        </Card.Body>
                    </CardWithActions>

                    <CardWithActions>
                        <Card.Header>
                            <Card.Title>States</Card.Title>
                            <Card.Subtitle>Text styles/states can be changed with css classes.</Card.Subtitle>
                        </Card.Header>

                        <Card.Body>
                            <p className="text-muted">
                                <code>.text-muted</code>
                                <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a adipiscing lectus. Aenean fermentum mauris erat, quis accumsan eros facilisis sed.
                            </p>

                            <p className="text-color-primary">
                                <code>.text-color-primary</code>
                                <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a adipiscing lectus. Aenean fermentum mauris erat, quis accumsan eros facilisis sed.
                            </p>

                            <p className="text-success">
                                <code>.text-success</code>
                                <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a adipiscing lectus. Aenean fermentum mauris erat, quis accumsan eros facilisis sed.
                            </p>

                            <p className="text-warning">
                                <code>.text-warning</code>
                                <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a adipiscing lectus. Aenean fermentum mauris erat, quis accumsan eros facilisis sed.
                            </p>

                            <p className="text-danger">
                                <code>.text-danger</code>
                                <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a adipiscing lectus. Aenean fermentum mauris erat, quis accumsan eros facilisis sed.
                            </p>

                            <p className="text-info">
                                <code>.text-info</code>
                                <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a adipiscing lectus. Aenean fermentum mauris erat, quis accumsan eros facilisis sed.
                            </p>

                            <p className="text-dark">
                                <code>.text-dark</code>
                                <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a adipiscing lectus. Aenean fermentum mauris erat, quis accumsan eros facilisis sed.
                            </p>
                        </Card.Body>
                    </CardWithActions>

                    <CardWithActions>
                        <Card.Header>
                            <Card.Title>Drop Caps</Card.Title>
                            <Card.Subtitle>Dropcaps styles can be changed with css classes.</Card.Subtitle>
                        </Card.Header>

                        <Card.Body>
                            <Row>
                                <Col lg={ 6 }>
                                    <p className="drop-caps">Pellentesque pellentesque eget tempor tellus. Fusce lacllentesque eget tempor tellus ellentesque pelleinia tempor malesuada. Pellentesque pellentesque eget tempor tellus ellentesque pellentesque eget tempor tellus. Fusce lacinia tempor malesuada. Pellentesque pellentesque eget tempor tellus ellentesque pellentesque eget tempor tellus. Fusce lacinia tempor malesuada.</p>
                                </Col>
                                <Col lg={ 6 }>
                                    <p className="drop-caps drop-caps-style-2">Pellentesque pellentesque eget tempor tellus. Fusce lacllentesque eget tempor tellus ellentesque pelleinia tempor malesuada. Pellentesque pellentesque eget tempor tellus ellentesque pellentesque eget tempor tellus. Fusce lacinia tempor malesuada. Pellentesque pellentesque eget tempor tellus ellentesque pellentesque eget tempor tellus. Fusce lacinia tempor malesuada.</p>
                                </Col>
                            </Row>
                        </Card.Body>
                    </CardWithActions>

                    <CardWithActions>
                        <Card.Header>
                            <Card.Title>Unorderd List</Card.Title>
                            <Card.Subtitle>A list of itmes in which the order does not explicitly matter.</Card.Subtitle>
                        </Card.Header>

                        <Card.Body>
                            <blockquote>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. Duis mollis, est non commodo luctus, nisi erat porttitor ligula integer posuere erat a ante.
										</p>
                                <small>A. Einstein, <cite title="Magazine X">Magazine X</cite></small>
                            </blockquote>

                            <code>.b-thin</code>
                            <blockquote className="b-thin primary">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. Duis mollis, est non commodo luctus, nisi erat porttitor ligula integer posuere erat a ante.
										</p>
                            </blockquote>

                            <code>.b-thick</code>
                            <blockquote className="b-thick primary">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. Duis mollis, est non commodo luctus, nisi erat porttitor ligula integer posuere erat a ante.
										</p>
                            </blockquote>

                            <code>.b-thin</code>
                            <blockquote className="primary rounded b-thin">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. Duis mollis, est non commodo luctus, nisi erat porttitor ligula integer posuere erat a ante.
										</p>
                            </blockquote>

                            <code>.blockquote-reverse</code>
                            <blockquote className="blockquote-reverse">
                                <p>Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.</p>
                                <small>A. Einstein, <cite title="Magazine X">Magazine X</cite></small>
                            </blockquote>

                            <code>.primary</code>
                            <blockquote className="primary">
                                <p>Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.</p>
                                <small>A. Einstein, <cite title="Magazine X">Magazine X</cite></small>
                            </blockquote>

                            <code>.success</code>
                            <blockquote className="success">
                                <p>Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.</p>
                                <small>A. Einstein, <cite title="Magazine X">Magazine X</cite></small>
                            </blockquote>

                            <code>.warning</code>
                            <blockquote className="warning">
                                <p>Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.</p>
                                <small>A. Einstein, <cite title="Magazine X">Magazine X</cite></small>
                            </blockquote>

                            <code>.danger</code>
                            <blockquote className="danger">
                                <p>Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.</p>
                                <small>A. Einstein, <cite title="Magazine X">Magazine X</cite></small>
                            </blockquote>

                            <code>.info</code>
                            <blockquote className="info">
                                <p>Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.</p>
                                <small>A. Einstein, <cite title="Magazine X">Magazine X</cite></small>
                            </blockquote>

                            <code>.dark</code>
                            <blockquote className="dark">
                                <p>Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.</p>
                                <small>A. Einstein, <cite title="Magazine X">Magazine X</cite></small>
                            </blockquote>
                        </Card.Body>
                    </CardWithActions>
                </Col>

                <Col xl={ 3 }>
                    <CardWithActions>
                        <Card.Header>
                            <Card.Title>Unordered List</Card.Title>
                            <Card.Subtitle>A list of items in which the order does explicitly matter.</Card.Subtitle>
                        </Card.Header>

                        <Card.Body>
                            <ul>
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>
                                    Lorem ipsum dolor sit amet.
                                    <ul>
                                        <li>Lorem ipsum dolor sit amet.</li>
                                        <li>Lorem ipsum dolor sit amet.</li>
                                        <li>Lorem ipsum dolor sit amet.</li>
                                    </ul>
                                </li>
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>Lorem ipsum dolor sit amet.</li>
                            </ul>
                        </Card.Body>
                    </CardWithActions>

                    <CardWithActions>
                        <Card.Header>
                            <Card.Title>Ordered List</Card.Title>
                            <Card.Subtitle>A list of items in which the order does explicitly matter.</Card.Subtitle>
                        </Card.Header>

                        <Card.Body>
                            <ol>
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>
                                    Lorem ipsum dolor sit amet.
                                    <ol>
                                        <li>Lorem ipsum dolor sit amet.</li>
                                        <li>Lorem ipsum dolor sit amet.</li>
                                        <li>Lorem ipsum dolor sit amet.</li>
                                    </ol>
                                </li>
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>Lorem ipsum dolor sit amet.</li>
                            </ol>
                        </Card.Body>
                    </CardWithActions>

                    <CardWithActions>
                        <Card.Header>
                            <Card.Title>Unstyled List</Card.Title>
                            <Card.Subtitle>Remove the default list-style and left margin on list items (immediate children only)</Card.Subtitle>
                        </Card.Header>

                        <Card.Body>
                            <ul className="list-unstyled">
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>
                                    Lorem ipsum dolor sit amet.
                                    <ul>
                                        <li>Lorem ipsum dolor sit amet.</li>
                                        <li>Lorem ipsum dolor sit amet.</li>
                                        <li>Lorem ipsum dolor sit amet.</li>
                                    </ul>
                                </li>
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>Lorem ipsum dolor sit amet.</li>
                            </ul>
                        </Card.Body>
                    </CardWithActions>

                    <CardWithActions>
                        <Card.Header>
                            <Card.Title>Inline List</Card.Title>
                            <Card.Subtitle>Place all list itmes on a single line with display: inline-block; and some light padding.</Card.Subtitle>
                        </Card.Header>

                        <Card.Body>
                            <ul className="list-inline">
                                <li>1 - Lorem ipsum dolor sit amet.</li>
                                <li>2 - Lorem ipsum dolor sit amet.</li>
                                <li>3 - Lorem ipsum dolor sit amet.</li>
                                <li>4 - Lorem ipsum dolor sit amet.</li>
                            </ul>
                        </Card.Body>
                    </CardWithActions>
                </Col>
            </Row>
        </>
    )
}

export default React.memo( Typography );