import React, { useState } from 'react';
import Reveal from 'react-awesome-reveal';
import LightBox from 'react-image-lightbox';
import { Row, Col } from 'react-bootstrap';

import Breadcrumb from '../../common/breadcrumb';
import TimeLine, { TimeLineGroup, TimeLineItem } from '../../features/elements/timeline';
import { fadeInRight } from '../../../utils/data/keyframes';
import PtLazyLoad from '../../features/lazyload';

function TimeLinePage () {
    const [ imageShow, setImageShow ] = useState( -1 );

    function prevent ( e ) {
        e.preventDefault();
    }

    function showLightBox ( e, index ) {
        e.preventDefault();
        setImageShow( index );
    }

    function closeLightBox () {
        setImageShow( -1 );
    }

    return (
        <>
            <Breadcrumb current="Timeline" paths={ [ {
                name: "Home",
                url: "/"
            }, {
                name: "Pages",
                url: "/pages"
            } ] } />

            <TimeLine>
                <TimeLineGroup
                    title={ <h5 className="m-0 py-2 text-uppercase">November 2020</h5> }
                >
                    <TimeLineItem>
                        <TimeLineItem.Info>
                            <div className="tm-icon"><i className="fas fa-star"></i></div>
                            <time className="tm-datetime" dateTime="2020-11-22 19:13">
                                <div className="tm-datetime-date">7 months ago</div>
                                <div className="tm-datetime-time">07:13 PM</div>
                            </time>
                        </TimeLineItem.Info>
                        <Reveal keyframes={ fadeInRight } delay={ 100 } duration={ 1000 } triggerOnce>
                            <TimeLineItem.Box>
                                <p>
                                    It's awesome when we find a good solution for our projects, Porto Admin is <span className="text-color-primary">#awesome</span>
                                </p>
                                <div className="tm-meta">
                                    <span>
                                        <i className="fas fa-user"></i> By <a href="#john" onClick={ prevent }>John Doe</a>
                                    </span>
                                    <span>
                                        <i className="fas fa-tag"></i> <a href="#porto" onClick={ prevent }>Porto</a>, <a href="#awesome" onClick={ prevent }>Awesome</a>
                                    </span>
                                    <span>
                                        <i className="fas fa-comments"></i> <a href="#comments" onClick={ prevent }>5652 Comments</a>
                                    </span>
                                </div>
                            </TimeLineItem.Box>
                        </Reveal>
                    </TimeLineItem>

                    <TimeLineItem>
                        <TimeLineItem.Info>
                            <div className="tm-icon"><i className="fas fa-thumbs-up"></i></div>
                            <time className="tm-datetime" dateTime="2020-11-22 18:13">
                                <div className="tm-datetime-date">7 months ago</div>
                                <div className="tm-datetime-time">06:13 PM</div>
                            </time>
                        </TimeLineItem.Info>
                        <Reveal keyframes={ fadeInRight } delay={ 100 } duration={ 1000 } triggerOnce>
                            <TimeLineItem.Box>
                                <p>
                                    What is your biggest developer pain point?
                                </p>
                            </TimeLineItem.Box>
                        </Reveal>
                    </TimeLineItem>

                    <TimeLineItem>
                        <TimeLineItem.Info>
                            <div className="tm-icon"><i className="fas fa-map-marker-alt"></i></div>
                            <time className="tm-datetime" dateTime="2020-11-22 17:25">
                                <div className="tm-datetime-date">7 months ago</div>
                                <div className="tm-datetime-time">05:25 PM</div>
                            </time>
                        </TimeLineItem.Info>
                        <Reveal keyframes={ fadeInRight } delay={ 100 } duration={ 1000 } triggerOnce>
                            <TimeLineItem.Box>
                                <p>
                                    <a href="#john" onClick={ prevent }>John Doe</a> is reading a book at <span className="text-primary">New York Public Library</span>
                                </p>
                                <blockquote className="primary">
                                    <p>Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.</p>
                                    <small>A. Einstein,
                                        <cite title="Brainyquote">Brainyquote</cite>
                                    </small>
                                </blockquote>
                                <div id="gmap-checkin-example" className="mb-3" style={ { height: "250px", width: "100%" } }></div>
                                <div className="tm-meta">
                                    <span>
                                        <i className="fas fa-user"></i> By <a href="#john" onClick={ prevent }>John Doe</a>
                                    </span>
                                    <span>
                                        <i className="fas fa-comments"></i> <a href="#comments" onClick={ prevent }>9 Comments</a>
                                    </span>
                                </div>
                            </TimeLineItem.Box>
                        </Reveal>
                    </TimeLineItem>
                </TimeLineGroup>

                <TimeLineGroup
                    title={ <h5 className="m-0 py-2 text-uppercase">September 2020</h5> }
                >
                    <TimeLineItem>
                        <TimeLineItem.Info>
                            <div className="tm-icon"><i className="fas fa-heart va-middle"></i></div>
                            <time className="tm-datetime" dateTime="2020-09-08 16:13">
                                <div className="tm-datetime-date">9 months ago</div>
                                <div className="tm-datetime-time">04:13 PM</div>
                            </time>
                        </TimeLineItem.Info>
                        <Reveal keyframes={ fadeInRight } delay={ 100 } duration={ 1000 } triggerOnce>
                            <TimeLineItem.Box>
                                <p>
                                    Checkout! How cool is that!
                                </p>
                                <div className="thumbnail-gallery">
                                    <Row>
                                        <Col sm={ 6 } lg={ 4 } xl={ 3 }>
                                            <a className="img-thumbnail d-block" href="#lightbox" onClick={ ( e ) => showLightBox( e, 4 ) }>
                                                <PtLazyLoad
                                                    src={ `${ process.env.PUBLIC_URL }/assets/images/projects/project-4.jpg` }
                                                    alt="project"
                                                    width={ 215 }
                                                    height={ 215 }
                                                />
                                                <span className="zoom"><i className="fas fa-search"></i></span>
                                            </a>
                                        </Col>
                                        <Col sm={ 6 } lg={ 4 } xl={ 3 }>
                                            <a className="img-thumbnail d-block" href="#lightbox" onClick={ ( e ) => showLightBox( e, 3 ) }>
                                                <PtLazyLoad
                                                    src={ `${ process.env.PUBLIC_URL }/assets/images/projects/project-3.jpg` }
                                                    alt="project"
                                                    width={ 215 }
                                                    height={ 215 }
                                                />
                                                <span className="zoom"><i className="fas fa-search"></i></span>
                                            </a>
                                        </Col>
                                        <Col sm={ 6 } lg={ 4 } xl={ 3 }>
                                            <a className="img-thumbnail d-block" href="#lightbox" onClick={ ( e ) => showLightBox( e, 2 ) }>
                                                <PtLazyLoad
                                                    src={ `${ process.env.PUBLIC_URL }/assets/images/projects/project-2.jpg` }
                                                    alt="project"
                                                    width={ 215 }
                                                    height={ 215 }
                                                />
                                                <span className="zoom"><i className="fas fa-search"></i></span>
                                            </a>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="tm-meta">
                                    <span>
                                        <i className="fas fa-user"></i> By <a href="#john" onClick={ prevent }>John Doe</a>
                                    </span>
                                    <span>
                                        <i className="fas fa-tag"></i> <a href="#duis" onClick={ prevent }>Duis</a>, <a href="#news" onClick={ prevent }>News</a>
                                    </span>
                                    <span>
                                        <i className="fas fa-comments"></i> <a href="#comments" onClick={ prevent }>12 Comments</a>
                                    </span>
                                </div>
                            </TimeLineItem.Box>
                        </Reveal>
                    </TimeLineItem>

                    <TimeLineItem>
                        <TimeLineItem.Info>
                            <div className="tm-icon"><i className="fas fa-video va-middle"></i></div>
                            <time className="tm-datetime" dateTime="2020-09-08 16:13">
                                <div className="tm-datetime-date">9 months ago</div>
                                <div className="tm-datetime-time">04:13 PM</div>
                            </time>
                        </TimeLineItem.Info>
                        <Reveal keyframes={ fadeInRight } delay={ 100 } duration={ 1000 } triggerOnce>
                            <TimeLineItem.Box>
                                <p>
                                    Google Fonts gives you access to over 600 web fonts!
                                </p>
                                <div className="embed-responsive embed-responsive-16by9">
                                    <iframe title="vimeo" className="embed-responsive-item" src="//player.vimeo.com/video/67957799" />
                                </div>
                                <div className="tm-meta">
                                    <span>
                                        <i className="fas fa-user"></i> By <a href="#john" onClick={ prevent }>John Doe</a>
                                    </span>
                                    <span>
                                        <i className="fas fa-thumbs-up"></i> 122 Likes
                                    </span>
                                    <span>
                                        <i className="fas fa-comments"></i> <a href="#comments">3 Comments</a>
                                    </span>
                                </div>
                            </TimeLineItem.Box>
                        </Reveal>
                    </TimeLineItem>
                </TimeLineGroup>
            </TimeLine>

            { imageShow >= 0 && (
                <LightBox
                    mainSrc={ `${ process.env.PUBLIC_URL }/assets/images/projects/project-${ imageShow }.jpg` }
                    reactModalStyle={ {
                        overlay: {
                            zIndex: '9999'
                        }
                    } }
                    onCloseRequest={ closeLightBox }
                />
            ) }
        </>
    )
}

export default React.memo( TimeLinePage );