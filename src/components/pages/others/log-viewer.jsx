import React from 'react';
import { Card, Table, Button } from 'react-bootstrap';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';

import Breadcrumb from '../../common/breadcrumb';

function LogViewer () {

    function prevent ( e ) {
        e.preventDefault();
    }

    return (
        <>
            <Breadcrumb current="Log Viewer" paths={ [ {
                name: "Home",
                url: "/"
            }, {
                name: "Pages",
                url: "/pages"
            } ] } />

            <Tabs className="inner-body mg-main px-0 ml-0" selectedTabClassName="active" selectedTabPanelClassName="active show">
                <div className="inner-toolbar clearfix">
                    <ul>
                        <li className="px-0">
                            <Button variant="primary"><i className="fas fa-pause m-0 va-middle"></i> Pause</Button>
                        </li>
                        <li className="right px-0">
                            <TabList className="nav nav-pills nav-pills-primary">
                                <li className="nav-item"><label>Type</label></li>
                                <Tab>
                                    <a className="nav-link" href="#access-log" onClick={ prevent }>Access Log</a>
                                </Tab>
                                <Tab>
                                    <a className="nav-link" href="#error-log" onClick={ prevent }>Error Log</a>
                                </Tab>
                                <Tab>
                                    <a className="nav-link" href="#custom-log" onClick={ prevent }>Custom Log</a>
                                </Tab>
                            </TabList>
                        </li>
                    </ul>
                </div>

                <Card>
                    <Card.Body className="tab-content">
                        <TabPanel className="tab-pane fade">
                            <Table striped bordered className="table-no-more mb-0" >
                                <thead>
                                    <tr>
                                        <th width="10%"><span className="font-weight-normal text-4">Type</span></th>
                                        <th width="15%"><span className="font-weight-normal text-4">Date</span></th>
                                        <th><span className="font-weight-normal text-4">Message</span></th>
                                    </tr>
                                </thead>
                                <tbody className="log-viewer">
                                    <tr>
                                        <td data-title="Type" className="py-3">
                                            <i className="fas fa-bug fa-fw text-muted text-5 mr-1"></i>
                                            <span>Debug</span>
                                        </td>
                                        <td data-title="Date" className="py-3">13/04/2021 18:25:59</td>
                                        <td data-title="Message" className="py-3">my.host - oh snap! another exception</td>
                                    </tr>
                                    <tr>
                                        <td data-title="Type" className="py-3">
                                            <i className="fas fa-info fa-fw text-info text-5 mr-1"></i>
                                            <span>Info</span>
                                        </td>
                                        <td data-title="Date" className="py-3">
                                            13/04/2021 21:50:17
                                        </td>
                                        <td data-title="Message" className="py-3">
                                            "GET / HTTP/1.1" 200 1225
                                        </td>
                                    </tr>
                                    <tr>
                                        <td data-title="Type" className="py-3">
                                            <i className="fas fa-exclamation-triangle fa-fw text-warning text-5 mr-1"></i>
                                            <span>Warning</span>
                                        </td>
                                        <td data-title="Date" className="py-3">
                                            13/04/2021 17:44:21
											</td>
                                        <td data-title="Message" className="py-3">
                                            DocumentRoot [/var/www/porto-admin/] does not exist
											</td>
                                    </tr>
                                    <tr>
                                        <td data-title="Type" className="py-3">
                                            <i className="fas fa-times-circle fa-fw text-danger text-5 mr-1"></i>
                                            <span>Error</span>
                                        </td>
                                        <td data-title="Date" className="py-3">
                                            13/04/2021 21:55:18
											</td>
                                        <td data-title="Message" className="py-3">
                                            File does not exist: /var/www/porto-admin/favicon.ico
											</td>
                                    </tr>
                                    <tr>
                                        <td data-title="Type" className="py-3">
                                            <i className="fas fa-ban fa-fw text-danger text-5 mr-1"></i>
                                            <span>Fatal</span>
                                        </td>
                                        <td data-title="Date" className="py-3">
                                            13/04/2021 22:13:39
											</td>
                                        <td data-title="Message" className="py-3">
                                            not a tree object
											</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </TabPanel>

                        <TabPanel className="tab-pane fade">
                            <Table striped bordered className="table-no-more mb-0">
                                <thead>
                                    <tr>
                                        <th width="10%"><span className="font-weight-normal text-5">Type</span></th>
                                        <th width="15%"><span className="font-weight-normal text-5">Date</span></th>
                                        <th><span className="font-weight-normal text-5">Message</span></th>
                                    </tr>
                                </thead>
                                <tbody className="log-viewer">
                                    <tr>
                                        <td data-title="Type" className="py-3">
                                            <i className="fas fa-times-circle fa-fw text-danger text-5 mr-1"></i>
                                            <span>Error</span>
                                        </td>
                                        <td data-title="Date" className="py-3">
                                            13/04/2021 21:55:30
                                        </td>
                                        <td data-title="Message" className="py-3">
                                            File does not exist: /var/www/porto-admin/favicon.ico
                                        </td>
                                    </tr>
                                    <tr>
                                        <td data-title="Type" className="py-3">
                                            <i className="fas fa-times-circle fa-fw text-danger text-5 mr-1"></i>
                                            <span>Error</span>
                                        </td>
                                        <td data-title="Date" className="py-3">
                                            13/04/2021 21:55:29
                                        </td>
                                        <td data-title="Message" className="py-3">
                                            File does not exist: /var/www/porto-admin/favicon.ico
                                        </td>
                                    </tr>
                                    <tr>
                                        <td data-title="Type" className="py-3">
                                            <i className="fas fa-times-circle fa-fw text-danger text-5 mr-1"></i>
                                            <span>Error</span>
                                        </td>
                                        <td data-title="Date" className="py-3">
                                            13/04/2021 21:55:28
                                        </td>
                                        <td data-title="Message" className="py-3">
                                            File does not exist: /var/www/porto-admin/favicon.ico
                                        </td>
                                    </tr>
                                    <tr>
                                        <td data-title="Type" className="py-3">
                                            <i className="fas fa-times-circle fa-fw text-danger text-5 mr-1"></i>
                                            <span>Error</span>
                                        </td>
                                        <td data-title="Date" className="py-3">
                                            13/04/2021 21:55:27
                                        </td>
                                        <td data-title="Message" className="py-3">
                                            File does not exist: /var/www/porto-admin/favicon.ico
                                        </td>
                                    </tr>
                                    <tr>
                                        <td data-title="Type" className="py-3">
                                            <i className="fas fa-times-circle fa-fw text-danger text-5 mr-1"></i>
                                            <span>Error</span>
                                        </td>
                                        <td data-title="Date" className="py-3">
                                            13/04/2021 21:55:26
                                        </td>
                                        <td data-title="Message" className="py-3">
                                            File does not exist: /var/www/porto-admin/favicon.ico
                                        </td>
                                    </tr>
                                    <tr>
                                        <td data-title="Type" className="py-3">
                                            <i className="fas fa-times-circle fa-fw text-danger text-5 mr-1"></i>
                                            <span>Error</span>
                                        </td>
                                        <td data-title="Date" className="py-3">
                                            13/04/2021 21:55:25
                                        </td>
                                        <td data-title="Message" className="py-3">
                                            File does not exist: /var/www/porto-admin/favicon.ico
                                        </td>
                                    </tr>
                                    <tr>
                                        <td data-title="Type" className="py-3">
                                            <i className="fas fa-ban fa-fw text-danger text-5 mr-1"></i>
                                            <span>Fatal</span>
                                        </td>
                                        <td data-title="Date" className="py-3">
                                            12/04/2021 22:13:39
                                        </td>
                                        <td data-title="Message" className="py-3">
                                            not a tree object
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </TabPanel>

                        <TabPanel className="tab-pane fade">
                            <Table striped bordered className="table-no-more mb-0">
                                <thead>
                                    <tr>
                                        <th width="10%"><span className="font-weight-normal text-5">Type</span></th>
                                        <th width="15%"><span className="font-weight-normal text-5">Date</span></th>
                                        <th><span className="font-weight-normal text-5">Message</span></th>
                                    </tr>
                                </thead>
                                <tbody className="log-viewer">
                                    <tr>
                                        <td data-title="Type" className="py-3">
                                            <i className="fas fa-info fa-fw text-info text-5 mr-1"></i>
                                            <span>Info</span>
                                        </td>
                                        <td data-title="Date" className="py-3">
                                            12/04/2017 21:50:54
											</td>
                                        <td data-title="Message" className="py-3">
                                            "GET / HTTP/1.1" 200 1225
											</td>
                                    </tr>
                                    <tr>
                                        <td data-title="Type" className="py-3">
                                            <i className="fas fa-info fa-fw text-info text-5 mr-1"></i>
                                            <span>Info</span>
                                        </td>
                                        <td data-title="Date" className="py-3">
                                            12/04/2017 21:50:53
											</td>
                                        <td data-title="Message" className="py-3">
                                            "GET /vendor/bootstrap/css/bootstrap.css HTTP/1.1" 200 110495
											</td>
                                    </tr>
                                    <tr>
                                        <td data-title="Type" className="py-3">
                                            <i className="fas fa-info fa-fw text-info text-5 mr-1"></i>
                                            <span>Info</span>
                                        </td>
                                        <td data-title="Date" className="py-3">
                                            12/04/2017 21:50:52
											</td>
                                        <td data-title="Message" className="py-3">
                                            "GET /css/theme.css HTTP/1.1" 200 1273
											</td>
                                    </tr>
                                    <tr>
                                        <td data-title="Type" className="py-3">
                                            <i className="fas fa-info fa-fw text-info text-5 mr-1"></i>
                                            <span>Info</span>
                                        </td>
                                        <td data-title="Date" className="py-3">
                                            12/04/2017 21:50:51
											</td>
                                        <td data-title="Message" className="py-3">
                                            "GET /css/skin.css HTTP/1.1" 200 230
											</td>
                                    </tr>
                                    <tr>
                                        <td data-title="Type" className="py-3">
                                            <i className="fas fa-info fa-fw text-info text-5 mr-1"></i>
                                            <span>Info</span>
                                        </td>
                                        <td data-title="Date" className="py-3">
                                            12/04/2017 21:50:50
											</td>
                                        <td data-title="Message" className="py-3">
                                            "GET /vendor/jquery/jquery.js HTTP/1.1" 200 244962
											</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </TabPanel>
                    </Card.Body>
                </Card>
            </Tabs>
        </>
    )
}

export default React.memo( LogViewer );