import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

import Breadcrumb from '../../common/breadcrumb';

import { withCardActions } from '../../hoc';

const CardWithActions = withCardActions( Card );

function CardsPage () {
    return (
        <>
            <Breadcrumb current="Cards" paths={ [ {
                name: "Home",
                url: '/'
            }, {
                name: 'Elements',
                url: '/elements'
            } ] } />

            <h4 className="my-0">Basic</h4>
            <p className="mb-3">By default, all the <code>.panel</code> does is apply some basic border and padding to contain some content.</p>

            <Card className="mb-4">
                <Card.Body>Content.</Card.Body>
            </Card>

            <h4 className="pt-4 my-0">Panel with Heading</h4>
            <p className="mb-3">Easily add a headingn container to your panel with <code>&lt;Card.Header&gt;</code>. You may also include a <code>&lt;Card.Title&gt;</code> and <code>&lt;Card.Subtitle&gt;</code> to add a pre-styled heading.</p>

            <Row>
                <Col md={ 6 }>
                    <CardWithActions className="mb-4">
                        <Card.Header>
                            <Card.Title>Title</Card.Title>
                        </Card.Header>

                        <Card.Body>Content.</Card.Body>
                    </CardWithActions>
                </Col>

                <Col md={ 6 }>
                    <CardWithActions className="mb-4">
                        <Card.Header>
                            <Card.Title>Title</Card.Title>
                            <Card.Subtitle>Subtitle</Card.Subtitle>
                        </Card.Header>

                        <Card.Body>Content.</Card.Body>
                    </CardWithActions>
                </Col>
            </Row>

            <h4 className="pt-4 my-0">Panel with Footer</h4>
            <p className="mb-3">Wrap buttons or secondary text in <code>&lt;Card.Footer&gt;</code>. Note that panel  footers do not inherit colors and borders when using contextual variations as they are not meant to be in the foreground.</p>

            <Row>
                <Col>
                    <Card className="mb-4">
                        <Card.Body>Content.</Card.Body>

                        <Card.Footer>Footer Content.</Card.Footer>
                    </Card>
                </Col>
            </Row>

            <h4 className="pt-3 mb-0">Panel Collapsed by Default</h4>
            <p className="mb-3">Set <code>collapsed</code> prop <span className="text-color-primary">true</span>.</p>

            <Row>
                <Col md={ 6 }>
                    <CardWithActions className="mb-4" collapsed={ true }>
                        <Card.Header>
                            <Card.Title>Title</Card.Title>
                        </Card.Header>

                        <Card.Body>Content.</Card.Body>

                        <Card.Footer>Footer Content.</Card.Footer>
                    </CardWithActions>
                </Col>
                <Col md={ 6 }>
                    <CardWithActions className="mb-4" collapsed={ true }>
                        <Card.Header>
                            <Card.Title>Title</Card.Title>
                        </Card.Header>

                        <Card.Body>Content.</Card.Body>

                        <Card.Footer>Footer Content.</Card.Footer>
                    </CardWithActions>
                </Col>
            </Row>

            <h4 className="pt-3 mb-0">Panel Featured</h4>
            <p className="mb-3">Like other components, easily make a panel more meaningful to a particular context by adding any of the contextual state classes.</p>

            <Row>
                <Col md={ 6 }>
                    <CardWithActions className="card-featured mb-4">
                        <Card.Header>
                            <Card.Title>Title</Card.Title>
                        </Card.Header>

                        <Card.Body><code>.card-featured</code></Card.Body>
                    </CardWithActions>
                </Col>

                <Col md={ 6 }>
                    <CardWithActions className="card-featured mb-4">
                        <Card.Header>
                            <Card.Title>Title</Card.Title>
                            <Card.Subtitle>Subtitle</Card.Subtitle>
                        </Card.Header>

                        <Card.Body><code>.card-featured</code></Card.Body>
                    </CardWithActions>
                </Col>

                <Col md={ 6 }>
                    <CardWithActions className="card-featured card-featured-primary mb-4">
                        <Card.Header>
                            <Card.Title>Title</Card.Title>
                        </Card.Header>

                        <Card.Body><code>.card-featured.card-featured-primary</code></Card.Body>
                    </CardWithActions>
                </Col>

                <Col md={ 6 }>
                    <CardWithActions className="card-featured card-featured-primary mb-4">
                        <Card.Header>
                            <Card.Title>Title</Card.Title>
                            <Card.Subtitle>Subtitle</Card.Subtitle>
                        </Card.Header>

                        <Card.Body><code>.card-featured.card-featured-primary</code></Card.Body>
                    </CardWithActions>
                </Col>

                <Col md={ 6 }>
                    <CardWithActions className="card-featured card-featured-success mb-4">
                        <Card.Header>
                            <Card.Title>Title</Card.Title>
                        </Card.Header>

                        <Card.Body><code>.card-featured.card-featured-success</code></Card.Body>
                    </CardWithActions>
                </Col>

                <Col md={ 6 }>
                    <CardWithActions className="card-featured card-featured-success mb-4">
                        <Card.Header>
                            <Card.Title>Title</Card.Title>
                            <Card.Subtitle>Subtitle</Card.Subtitle>
                        </Card.Header>

                        <Card.Body><code>.card-featured.card-featured-success</code></Card.Body>
                    </CardWithActions>
                </Col>

                <Col md={ 6 }>
                    <CardWithActions className="card-featured card-featured-warning mb-4">
                        <Card.Header>
                            <Card.Title>Title</Card.Title>
                        </Card.Header>

                        <Card.Body><code>.card-featured.card-featured-warning</code></Card.Body>
                    </CardWithActions>
                </Col>

                <Col md={ 6 }>
                    <CardWithActions className="card-featured card-featured-warning mb-4">
                        <Card.Header>
                            <Card.Title>Title</Card.Title>
                            <Card.Subtitle>Subtitle</Card.Subtitle>
                        </Card.Header>

                        <Card.Body><code>.card-featured.card-featured-warning</code></Card.Body>
                    </CardWithActions>
                </Col>

                <Col md={ 6 }>
                    <CardWithActions className="card-featured card-featured-danger mb-4">
                        <Card.Header>
                            <Card.Title>Title</Card.Title>
                        </Card.Header>

                        <Card.Body><code>.card-featured.card-featured-danger</code></Card.Body>
                    </CardWithActions>
                </Col>

                <Col md={ 6 }>
                    <CardWithActions className="card-featured card-featured-danger mb-4">
                        <Card.Header>
                            <Card.Title>Title</Card.Title>
                            <Card.Subtitle>Subtitle</Card.Subtitle>
                        </Card.Header>

                        <Card.Body><code>.card-featured.card-featured-danger</code></Card.Body>
                    </CardWithActions>
                </Col>

                <Col md={ 6 }>
                    <CardWithActions className="card-featured card-featured-info mb-4">
                        <Card.Header>
                            <Card.Title>Title</Card.Title>
                        </Card.Header>

                        <Card.Body><code>.card-featured.card-featured-info</code></Card.Body>
                    </CardWithActions>
                </Col>

                <Col md={ 6 }>
                    <CardWithActions className="card-featured card-featured-info mb-4">
                        <Card.Header>
                            <Card.Title>Title</Card.Title>
                            <Card.Subtitle>Subtitle</Card.Subtitle>
                        </Card.Header>

                        <Card.Body><code>.card-featured.card-featured-info</code></Card.Body>
                    </CardWithActions>
                </Col>

                <Col md={ 6 }>
                    <CardWithActions className="card-featured card-featured-dark mb-4">
                        <Card.Header>
                            <Card.Title>Title</Card.Title>
                        </Card.Header>

                        <Card.Body><code>.card-featured.card-featured-dark</code></Card.Body>
                    </CardWithActions>
                </Col>

                <Col md={ 6 }>
                    <CardWithActions className="card-featured card-featured-dark mb-4">
                        <Card.Header>
                            <Card.Title>Title</Card.Title>
                            <Card.Subtitle>Subtitle</Card.Subtitle>
                        </Card.Header>

                        <Card.Body><code>.card-featured.card-featured-dark</code></Card.Body>
                    </CardWithActions>
                </Col>
            </Row>

            <h4 className="pt-3 mb-0">Contextual Alternatives</h4>
            <p className="mb-3">Like other components, easily make a panel more meaningful to a particular context by adding any of the contextual state classes.</p>

            <Row>
                <Col md={ 6 }>
                    <CardWithActions className="card-primary mb-4" >
                        <Card.Header>
                            <Card.Title>Title</Card.Title>
                        </Card.Header>

                        <Card.Body><code>card.primary</code></Card.Body>
                    </CardWithActions>
                </Col>

                <Col md={ 6 }>
                    <CardWithActions className="card-primary mb-4" >
                        <Card.Header>
                            <Card.Title>Title</Card.Title>
                            <Card.Subtitle>Subtitle</Card.Subtitle>
                        </Card.Header>

                        <Card.Body><code>card.primary</code></Card.Body>
                    </CardWithActions>
                </Col>

                <Col md={ 6 }>
                    <CardWithActions className="card-success mb-4" >
                        <Card.Header>
                            <Card.Title>Title</Card.Title>
                        </Card.Header>

                        <Card.Body><code>card.success</code></Card.Body>
                    </CardWithActions>
                </Col>

                <Col md={ 6 }>
                    <CardWithActions className="card-success mb-4" >
                        <Card.Header>
                            <Card.Title>Title</Card.Title>
                            <Card.Subtitle>Subtitle</Card.Subtitle>
                        </Card.Header>

                        <Card.Body><code>card.success</code></Card.Body>
                    </CardWithActions>
                </Col>

                <Col md={ 6 }>
                    <CardWithActions className="card-warning mb-4" >
                        <Card.Header>
                            <Card.Title>Title</Card.Title>
                        </Card.Header>

                        <Card.Body><code>card.warning</code></Card.Body>
                    </CardWithActions>
                </Col>

                <Col md={ 6 }>
                    <CardWithActions className="card-warning mb-4" >
                        <Card.Header>
                            <Card.Title>Title</Card.Title>
                            <Card.Subtitle>Subtitle</Card.Subtitle>
                        </Card.Header>

                        <Card.Body><code>card.warning</code></Card.Body>
                    </CardWithActions>
                </Col>

                <Col md={ 6 }>
                    <CardWithActions className="card-danger mb-4" >
                        <Card.Header>
                            <Card.Title>Title</Card.Title>
                        </Card.Header>

                        <Card.Body><code>card.danger</code></Card.Body>
                    </CardWithActions>
                </Col>

                <Col md={ 6 }>
                    <CardWithActions className="card-danger mb-4" >
                        <Card.Header>
                            <Card.Title>Title</Card.Title>
                            <Card.Subtitle>Subtitle</Card.Subtitle>
                        </Card.Header>

                        <Card.Body><code>card.danger</code></Card.Body>
                    </CardWithActions>
                </Col>

                <Col md={ 6 }>
                    <CardWithActions className="card-info mb-4" >
                        <Card.Header>
                            <Card.Title>Title</Card.Title>
                        </Card.Header>

                        <Card.Body><code>card.info</code></Card.Body>
                    </CardWithActions>
                </Col>

                <Col md={ 6 }>
                    <CardWithActions className="card-info mb-4" >
                        <Card.Header>
                            <Card.Title>Title</Card.Title>
                            <Card.Subtitle>Subtitle</Card.Subtitle>
                        </Card.Header>

                        <Card.Body><code>card.info</code></Card.Body>
                    </CardWithActions>
                </Col>

                <Col md={ 6 }>
                    <CardWithActions className="card-dark mb-4" >
                        <Card.Header>
                            <Card.Title>Title</Card.Title>
                        </Card.Header>

                        <Card.Body><code>card.dark</code></Card.Body>
                    </CardWithActions>
                </Col>

                <Col md={ 6 }>
                    <CardWithActions className="card-dark mb-4" >
                        <Card.Header>
                            <Card.Title>Title</Card.Title>
                            <Card.Subtitle>Subtitle</Card.Subtitle>
                        </Card.Header>

                        <Card.Body><code>card.dark</code></Card.Body>
                    </CardWithActions>
                </Col>
            </Row>

            <h4 className="mb-0">Panel Transparent</h4>
            <p className="mb-3">Set the panel to transparent background.</p>

            <Row>
                <Col md={ 6 }>
                    <Card className="mb-4">
                        <Card.Header className="card-header-transparent">
                            <Card.Title>Title</Card.Title>
                        </Card.Header>

                        <Card.Body>Content.</Card.Body>
                    </Card>
                </Col>

                <Col md={ 6 }>
                    <CardWithActions className="card-transparent mb-4">
                        <Card.Header>
                            <Card.Title>Title</Card.Title>
                            <Card.Subtitle>Subtitle</Card.Subtitle>
                        </Card.Header>

                        <Card.Body>Content.</Card.Body>
                    </CardWithActions>
                </Col>
            </Row>
        </>
    )
}

export default React.memo( CardsPage );