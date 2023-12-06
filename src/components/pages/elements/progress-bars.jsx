import React, { useEffect } from 'react';
import { Row, Col, Card, ProgressBar } from 'react-bootstrap';

import Breadcrumb from '../../common/breadcrumb';

function ProgressBarsPage () {

    useEffect( () => {
        document.querySelector( ".content-body" ).classList.add( "card-margin" );

        return () => {
            document.querySelector( ".content-body" ).classList.remove( "card-margin" );
        };
    }, [] )

    return (
        <>
            <Breadcrumb current="Progress Bars" paths={ [ {
                name: 'Home',
                url: '/'
            }, {
                name: 'Elements',
                url: '/elements'
            } ] } />

            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <ProgressBar variant="primary" className="light m-2" min={ 0 } max={ 100 } now={ 60 } label="60% Complete" />

                            <ProgressBar variant="success" className="light m-2" min={ 0 } max={ 100 } now={ 60 } label="60% Complete" />

                            <ProgressBar variant="warning" className="light m-2" min={ 0 } max={ 100 } now={ 60 } label="60% Complete" />

                            <ProgressBar variant="info" className="light m-2" min={ 0 } max={ 100 } now={ 60 } label="60% Complete" />

                            <ProgressBar variant="danger" className="light m-2" min={ 0 } max={ 100 } now={ 60 } label="60% Complete" />

                            <ProgressBar variant="dark" className="light m-2" min={ 0 } max={ 100 } now={ 60 } label="60% Complete" />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            { [ "info", "danger", "dark", "primary", "success", "warning" ].map( variant => (
                <Row key={ variant }>
                    <Col lg={ 4 }>
                        <Card>
                            <Card.Body>
                                <ProgressBar variant={ variant } className="progress-xs light m-2" min={ 0 } max={ 100 } now={ 60 } srOnly />

                                <ProgressBar variant={ variant } className="progress-sm light m-2" min={ 0 } max={ 100 } now={ 60 } srOnly />

                                <ProgressBar variant={ variant } className="progress-md light m-2" min={ 0 } max={ 100 } now={ 60 } srOnly />

                                <ProgressBar variant={ variant } className="progress-lg light m-2" min={ 0 } max={ 100 } now={ 60 } srOnly />

                                <ProgressBar variant={ variant } className="progress-xl light m-2" min={ 0 } max={ 100 } now={ 60 } srOnly />
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={ 4 }>
                        <Card>
                            <Card.Body>
                                <ProgressBar variant={ variant } className="progress-xs progress-half-rounded light m-2" min={ 0 } max={ 100 } now={ 60 } label="60%" />

                                <ProgressBar variant={ variant } className="progress-sm progress-half-rounded light m-2" min={ 0 } max={ 100 } now={ 60 } label="60%" />

                                <ProgressBar variant={ variant } className="progress-md progress-half-rounded light m-2" min={ 0 } max={ 100 } now={ 60 } label="60%" />

                                <ProgressBar variant={ variant } className="progress-lg progress-half-rounded light m-2" min={ 0 } max={ 100 } now={ 60 } label="60%" />

                                <ProgressBar variant={ variant } className="progress-xl progress-half-rounded light m-2" min={ 0 } max={ 100 } now={ 60 } label="60%" />
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={ 4 }>
                        <Card>
                            <Card.Body>
                                <ProgressBar variant={ variant } className="progress-xs progress-squared light m-2" min={ 0 } max={ 100 } now={ 60 } label="60%" />

                                <ProgressBar variant={ variant } className="progress-sm progress-squared light m-2" min={ 0 } max={ 100 } now={ 60 } label="60%" />

                                <ProgressBar variant={ variant } className="progress-md progress-squared light m-2" min={ 0 } max={ 100 } now={ 60 } label="60%" />

                                <ProgressBar variant={ variant } className="progress-lg progress-squared light m-2" min={ 0 } max={ 100 } now={ 60 } label="60%" />

                                <ProgressBar variant={ variant } className="progress-xl progress-squared light m-2" min={ 0 } max={ 100 } now={ 60 } label="60%" />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            ) ) }

            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <ProgressBar variant="primary" className="m-2" min={ 0 } max={ 100 } now={ 60 } label="60% Complete" />

                            <ProgressBar variant="success" className="m-2" min={ 0 } max={ 100 } now={ 60 } label="60% Complete" />

                            <ProgressBar variant="warning" className="m-2" min={ 0 } max={ 100 } now={ 60 } label="60% Complete" />

                            <ProgressBar variant="info" className="m-2" min={ 0 } max={ 100 } now={ 60 } label="60% Complete" />

                            <ProgressBar variant="danger" className="m-2" min={ 0 } max={ 100 } now={ 60 } label="60% Complete" />

                            <ProgressBar variant="dark" className="m-2" min={ 0 } max={ 100 } now={ 60 } label="60% Complete" />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            { [ "info", "danger", "dark", "primary", "success", "warning" ].map( variant => (
                <Row key={ variant }>
                    <Col lg={ 4 }>
                        <Card>
                            <Card.Body>
                                <ProgressBar variant={ variant } className="progress-xs m-2" min={ 0 } max={ 100 } now={ 60 } srOnly />

                                <ProgressBar variant={ variant } className="progress-sm m-2" min={ 0 } max={ 100 } now={ 60 } srOnly />

                                <ProgressBar variant={ variant } className="progress-md m-2" min={ 0 } max={ 100 } now={ 60 } srOnly />

                                <ProgressBar variant={ variant } className="progress-lg m-2" min={ 0 } max={ 100 } now={ 60 } srOnly />

                                <ProgressBar variant={ variant } className="progress-xl m-2" min={ 0 } max={ 100 } now={ 60 } srOnly />
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={ 4 }>
                        <Card>
                            <Card.Body>
                                <ProgressBar variant={ variant } className="progress-xs progress-half-rounded m-2" min={ 0 } max={ 100 } now={ 60 } label="60%" />

                                <ProgressBar variant={ variant } className="progress-sm progress-half-rounded m-2" min={ 0 } max={ 100 } now={ 60 } label="60%" />

                                <ProgressBar variant={ variant } className="progress-md progress-half-rounded m-2" min={ 0 } max={ 100 } now={ 60 } label="60%" />

                                <ProgressBar variant={ variant } className="progress-lg progress-half-rounded m-2" min={ 0 } max={ 100 } now={ 60 } label="60%" />

                                <ProgressBar variant={ variant } className="progress-xl progress-half-rounded m-2" min={ 0 } max={ 100 } now={ 60 } label="60%" />
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={ 4 }>
                        <Card>
                            <Card.Body>
                                <ProgressBar variant={ variant } className="progress-xs progress-squared m-2" min={ 0 } max={ 100 } now={ 60 } label="60%" />

                                <ProgressBar variant={ variant } className="progress-sm progress-squared m-2" min={ 0 } max={ 100 } now={ 60 } label="60%" />

                                <ProgressBar variant={ variant } className="progress-md progress-squared m-2" min={ 0 } max={ 100 } now={ 60 } label="60%" />

                                <ProgressBar variant={ variant } className="progress-lg progress-squared m-2" min={ 0 } max={ 100 } now={ 60 } label="60%" />

                                <ProgressBar variant={ variant } className="progress-xl progress-squared m-2" min={ 0 } max={ 100 } now={ 60 } label="60%" />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            ) ) }
        </>
    )
}

export default React.memo( ProgressBarsPage );