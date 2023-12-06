import React, { useEffect } from 'react';
import { Row, Col, Card } from 'react-bootstrap';

import Breadcrumb from '../../common/breadcrumb';
import PtLazyLoad from '../../features/lazyload';
import OwlCarousel from '../../features/elements/owl-carousel';

import { withCardActions } from '../../hoc';

const CardWithActions = withCardActions( Card );

const slider1 = {
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    margin: 10,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 6
        }
    }
}

const slider2 = {
    dots: true
}

const slider3 = {
    nav: true,
    navText: [ '<span>', '<span>' ]
}

const slider4 = {
    dots: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 1500
}

const slider5 = {
    dots: false,
    nav: false
}

function CarouselsPage () {

    useEffect( () => {
        document.querySelector( ".content-body" ).classList.add( "card-margin" );

        return () => {
            document.querySelector( ".content-body" ).classList.remove( "card-margin" );
        };
    }, [] )

    return (
        <>
            <Breadcrumb current="Carousels" paths={ [ {
                name: "Home",
                url: "/"
            }, {
                name: "Elements",
                url: "/elements"
            } ] } />

            <Row>
                <Col>
                    <CardWithActions>
                        <Card.Header>
                            <Card.Title>Basic</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <OwlCarousel options={ slider1 }>
                                <div className="item">
                                    <PtLazyLoad
                                        className="img-thumbnail"
                                        src={ `${ process.env.PUBLIC_URL }/assets/images/projects/project-1.jpg` }
                                        alt="project"
                                        width={ 1000 }
                                        height={ 1000 }
                                    />
                                </div>
                                <div className="item">
                                    <PtLazyLoad
                                        className="img-thumbnail"
                                        src={ `${ process.env.PUBLIC_URL }/assets/images/projects/project-2.jpg` }
                                        alt="project"
                                        width={ 1000 }
                                        height={ 1000 }
                                    />
                                </div>
                                <div className="item">
                                    <PtLazyLoad
                                        className="img-thumbnail"
                                        src={ `${ process.env.PUBLIC_URL }/assets/images/projects/project-3.jpg` }
                                        alt="project"
                                        width={ 1000 }
                                        height={ 1000 }
                                    />
                                </div>
                                <div className="item">
                                    <PtLazyLoad
                                        className="img-thumbnail"
                                        src={ `${ process.env.PUBLIC_URL }/assets/images/projects/project-4.jpg` }
                                        alt="project"
                                        width={ 1000 }
                                        height={ 1000 }
                                    />
                                </div>
                                <div className="item">
                                    <PtLazyLoad
                                        className="img-thumbnail"
                                        src={ `${ process.env.PUBLIC_URL }/assets/images/projects/project-5.jpg` }
                                        alt="project"
                                        width={ 1000 }
                                        height={ 1000 }
                                    />
                                </div>
                                <div className="item">
                                    <PtLazyLoad
                                        className="img-thumbnail"
                                        src={ `${ process.env.PUBLIC_URL }/assets/images/projects/project-6.jpg` }
                                        alt="project"
                                        width={ 1000 }
                                        height={ 1000 }
                                    />
                                </div>
                                <div className="item">
                                    <PtLazyLoad
                                        className="img-thumbnail"
                                        src={ `${ process.env.PUBLIC_URL }/assets/images/projects/project-7.jpg` }
                                        alt="project"
                                        width={ 1000 }
                                        height={ 1000 }
                                    />
                                </div>
                            </OwlCarousel>
                        </Card.Body>
                    </CardWithActions>
                </Col>
            </Row>

            <hr />

            <Row className="mt-lg-3 pt-lg-4">
                <Col lg={ 6 } xl={ 3 }>
                    <CardWithActions className="mt-lg-3 mt-xl-0">
                        <Card.Header>
                            <Card.Title>Single Item</Card.Title>
                        </Card.Header>

                        <Card.Body>
                            <OwlCarousel options={ slider2 }>
                                <div className="item">
                                    <PtLazyLoad
                                        className="img-thumbnail"
                                        src={ `${ process.env.PUBLIC_URL }/assets/images/projects/project-1.jpg` }
                                        alt="project"
                                        width={ 1000 }
                                        height={ 1000 }
                                    />
                                </div>
                                <div className="item">
                                    <PtLazyLoad
                                        className="img-thumbnail"
                                        src={ `${ process.env.PUBLIC_URL }/assets/images/projects/project-2.jpg` }
                                        alt="project"
                                        width={ 1000 }
                                        height={ 1000 }
                                    />
                                </div>
                                <div className="item">
                                    <PtLazyLoad
                                        className="img-thumbnail"
                                        src={ `${ process.env.PUBLIC_URL }/assets/images/projects/project-3.jpg` }
                                        alt="project"
                                        width={ 1000 }
                                        height={ 1000 }
                                    />
                                </div>
                            </OwlCarousel>
                        </Card.Body>
                    </CardWithActions>
                </Col>

                <Col lg={ 6 } xl={ 3 }>
                    <CardWithActions className="mt-lg-3 mt-xl-0">
                        <Card.Header>
                            <Card.Title>Navigation</Card.Title>
                        </Card.Header>

                        <Card.Body>
                            <OwlCarousel options={ slider3 }>
                                <div className="item">
                                    <PtLazyLoad
                                        className="img-thumbnail"
                                        src={ `${ process.env.PUBLIC_URL }/assets/images/projects/project-1.jpg` }
                                        alt="project"
                                        width={ 1000 }
                                        height={ 1000 }
                                    />
                                </div>
                                <div className="item">
                                    <PtLazyLoad
                                        className="img-thumbnail"
                                        src={ `${ process.env.PUBLIC_URL }/assets/images/projects/project-2.jpg` }
                                        alt="project"
                                        width={ 1000 }
                                        height={ 1000 }
                                    />
                                </div>
                                <div className="item">
                                    <PtLazyLoad
                                        className="img-thumbnail"
                                        src={ `${ process.env.PUBLIC_URL }/assets/images/projects/project-3.jpg` }
                                        alt="project"
                                        width={ 1000 }
                                        height={ 1000 }
                                    />
                                </div>
                            </OwlCarousel>
                        </Card.Body>
                    </CardWithActions>
                </Col>

                <Col lg={ 6 } xl={ 3 }>
                    <CardWithActions className="mt-lg-3 mt-xl-0">
                        <Card.Header>
                            <Card.Title>Autoplay</Card.Title>
                        </Card.Header>

                        <Card.Body>
                            <OwlCarousel options={ slider4 }>
                                <div className="item">
                                    <img
                                        className="img-thumbnail"
                                        src={ `${ process.env.PUBLIC_URL }/assets/images/projects/project-1.jpg` }
                                        alt="project"
                                        width={ 1000 }
                                        height={ 1000 }
                                    />
                                </div>
                                <div className="item">
                                    <img
                                        className="img-thumbnail"
                                        src={ `${ process.env.PUBLIC_URL }/assets/images/projects/project-2.jpg` }
                                        alt="project"
                                        width={ 1000 }
                                        height={ 1000 }
                                    />
                                </div>
                                <div className="item">
                                    <img
                                        className="img-thumbnail"
                                        src={ `${ process.env.PUBLIC_URL }/assets/images/projects/project-3.jpg` }
                                        alt="project"
                                        width={ 1000 }
                                        height={ 1000 }
                                    />
                                </div>
                            </OwlCarousel>
                        </Card.Body>
                    </CardWithActions>
                </Col>

                <Col lg={ 6 } xl={ 3 }>
                    <CardWithActions className="mt-lg-3 mt-xl-0">
                        <Card.Header>
                            <Card.Title>Controls Disabled</Card.Title>
                        </Card.Header>

                        <Card.Body>
                            <OwlCarousel options={ slider5 }>
                                <div className="item">
                                    <PtLazyLoad
                                        className="img-thumbnail"
                                        src={ `${ process.env.PUBLIC_URL }/assets/images/projects/project-1.jpg` }
                                        alt="project"
                                        width={ 1000 }
                                        height={ 1000 }
                                    />
                                </div>
                                <div className="item">
                                    <PtLazyLoad
                                        className="img-thumbnail"
                                        src={ `${ process.env.PUBLIC_URL }/assets/images/projects/project-2.jpg` }
                                        alt="project"
                                        width={ 1000 }
                                        height={ 1000 }
                                    />
                                </div>
                                <div className="item">
                                    <PtLazyLoad
                                        className="img-thumbnail"
                                        src={ `${ process.env.PUBLIC_URL }/assets/images/projects/project-3.jpg` }
                                        alt="project"
                                        width={ 1000 }
                                        height={ 1000 }
                                    />
                                </div>
                            </OwlCarousel>
                        </Card.Body>
                    </CardWithActions>
                </Col>
            </Row>
        </>
    )
}

export default React.memo( CarouselsPage );