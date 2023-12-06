import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Nav } from 'react-bootstrap';

import Breadcrumb from '../../common/breadcrumb';

function PageNotFound () {
    return (
        <>
            <Breadcrumb current="500" paths={ [ {
                name: "Home",
                url: "/"
            }, {
                name: "Pages",
                url: "/pages"
            } ] } />

            <section className="body-error error-inside">
                <div className="center-error">
                    <Row>
                        <Col lg={ 8 }>
                            <div className="main-error mb-3">
                                <h2 className="error-code text-dark text-center font-weight-semibold m-0">500 <i className="fas fa-file"></i></h2>
                                <p className="error-explanation text-center">We're sorry, something went wrong.</p>
                            </div>
                        </Col>

                        <Col lg={ 4 }>
                            <h4 className="text">Here are some useful links</h4>
                            <Nav className="nav-list flex-column primary">
                                <Nav.Item>
                                    <Nav.Link as={ Link } to={ `${ process.env.PUBLIC_URL }/` }><i className="fas fa-caret-right text-dark"></i> Dashboard</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link as={ Link } to={ `${ process.env.PUBLIC_URL }/pages/user-profile` }><i className="fas fa-caret-right text-dark"></i> User Profile</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="#faqs" onClick={ e => e.preventDefault() }><i className="fas fa-caret-right text-dark"></i> FAQ's</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}

export default React.memo( PageNotFound );