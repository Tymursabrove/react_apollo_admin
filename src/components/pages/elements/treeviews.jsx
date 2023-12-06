import React, { useState } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import Tree from 'rc-tree';
import axios from 'axios';

import 'rc-tree/assets/index.css';

import Breadcrumb from '../../common/breadcrumb';

import { withCardActions } from '../../hoc';

const CardWithActions = withCardActions( Card );

const treeData1 = [ {
    key: "root",
    title: "Root Node",
    children: [ {
        key: "selected",
        title: "Selected Node",
        isLeaf: false
    }, {
        key: "opened",
        title: "Opened Node",
        children: [ {
            key: "disabled",
            title: "Disabled Node",
            disabled: true,
            isLeaf: false
        }, {
            key: "child",
            title: "Child Node"
        } ]
    }, {
        key: "custom-icon",
        title: "Custom Icon",
        icon: <i className="far fa-file-image"></i>
    }, {
        key: "custom-icon-image",
        title: "Custom Icon Image",
        icon: <img src={ `${ process.env.PUBLIC_URL }/assets/images/icon.png` } alt="icon" width="16" height="16" />
    } ]
}, {
    key: "colored",
    title: "Colored",
    style: {
        color: "#0088cc"
    },
    isLeaf: false
} ];

const treeData2 = [ {
    key: "root",
    title: "Root Node",
    checkable: true,
    children: [ {
        key: "selected",
        title: "Selected Node",
        checkable: true,
        isLeaf: false
    }, {
        key: "opened",
        title: "Opened Node",
        checkable: true,
        children: [ {
            key: "disabled",
            title: "Disabled Node",
            disabled: true,
            checkable: true,
            isLeaf: false
        }, {
            key: "child",
            title: "Child Node",
            checkable: true
        } ]
    }, {
        key: "custom-icon",
        title: "Custom Icon",
        icon: <i className="far fa-file-image"></i>,
        checkable: true
    }, {
        key: "custom-icon-image",
        title: "Custom Icon Image",
        icon: <img src={ `${ process.env.PUBLIC_URL }/assets/images/icon.png` } alt="icon" width="16" height="16" />,
        checkable: true
    } ]
}, {
    key: "colored",
    title: "Colored",
    style: {
        color: "#0088cc"
    },
    checkable: true,
    isLeaf: false
} ];

const treeData3 = [ {
    key: "root1",
    title: "Root Node",
    children: [ {
        key: "selected",
        title: "Selected Node",
        isLeaf: false
    }, {
        key: "opened",
        title: "Opened Node",
        children: [ {
            key: "child1",
            title: "Child Node"
        }, {
            key: "child2",
            title: "Child Node 2"
        }, {
            key: "child3",
            title: "Child Node 3"
        } ]
    } ]
}, {
    key: "root2",
    title: "Root Node 2"
} ];

const treeData4 = [ {
    key: "root1",
    title: "Root 1"
}, {
    key: "root2",
    title: "Root 2",
    isLeaf: true
} ];

function TreeViewsPage () {
    const [ draggableData, setDraggableData ] = useState( treeData3 );
    const [ ajaxData, setAjaxData ] = useState( treeData4 );

    function loadData ( node ) {
        return axios.get( `${ process.env.PUBLIC_URL }/mock-server/tree.json` )
            .then( result => {
                let temp = [ ...ajaxData ];
                let targetPos = node.pos.split( "-" );
                let targetNode = targetPos.slice( 1 ).reduce( ( acc, cur, idx, src ) => {
                    let index = parseInt( cur );
                    return idx < src.length - 1 ? acc[ index ].children : acc[ index ];
                }, temp );
                targetNode.children = targetNode.children ? targetNode.children : [];
                targetNode.children = targetNode.children.concat( result.data );
                setAjaxData( temp );
            } )
            .catch( error => {
                return console.error( error );
            } );
    }

    function dropNode ( { dragNode, node } ) {
        let temp = [ ...draggableData ];
        let dragPos = dragNode.pos.split( "-" );
        let dragParent = dragPos.slice( 1, -1 ).reduce( ( acc, cur, idx, src ) => {
            let index = parseInt( cur );
            return idx < src.length - 1 ? acc[ index ].children : acc[ index ];
        }, temp );
        let [ dragItem ] = dragParent.children.splice( dragPos[ dragPos.length - 1 ], 1 );
        let targetPos = node.pos.split( "-" );
        let targetNode = targetPos.slice( 1 ).reduce( ( acc, cur, idx, src ) => {
            let index = parseInt( cur );
            return idx < src.length - 1 ? acc[ index ].children : acc[ index ];
        }, temp );
        targetNode.children = targetNode.children ? targetNode.children : [];
        targetNode.children.push( dragItem );

        setDraggableData( temp );
    }

    return (
        <>
            <Breadcrumb current="Tree Views" paths={ [ {
                name: "Home",
                url: "/"
            }, {
                name: "Elements",
                url: "/elemen"
            } ] } />

            <Row>
                <Col lg={ 6 }>
                    <CardWithActions>
                        <Card.Header>
                            <Card.Title>Basic</Card.Title>
                            <Card.Subtitle>Interactive tree, basic sample.</Card.Subtitle>
                        </Card.Header>

                        <Card.Body>
                            <Tree
                                selectable={ true }
                                showLine={ true }
                                defaultSelectedKeys={ [ "selected" ] }
                                defaultExpandedKeys={ [ "opened" ] }
                                treeData={ treeData1 }
                            />
                        </Card.Body>
                    </CardWithActions>

                    <CardWithActions>
                        <Card.Header>
                            <Card.Title>Ajax</Card.Title>
                            <Card.Subtitle>You can also use AJAX to populate the tree with HTML your server returns.</Card.Subtitle>
                        </Card.Header>

                        <Card.Body>
                            <Tree
                                selectable={ true }
                                showLine={ true }
                                loadData={ loadData }
                                treeData={ ajaxData }
                            />
                        </Card.Body>
                    </CardWithActions>
                </Col>

                <Col lg={ 6 }>
                    <CardWithActions>
                        <Card.Header>
                            <Card.Title>Checkbox</Card.Title>
                            <Card.Subtitle>Checkbox icons in front of each node.</Card.Subtitle>
                        </Card.Header>

                        <Card.Body>
                            <Tree
                                selectable={ true }
                                checkable={ true }
                                showLine={ true }
                                defaultCheckedKeys={ [ "selected" ] }
                                defaultExpandedKeys={ [ "opened" ] }
                                treeData={ treeData2 }
                            />
                        </Card.Body>
                    </CardWithActions>

                    <CardWithActions>
                        <Card.Header>
                            <Card.Title>Drag &amp; Drop</Card.Title>
                            <Card.Subtitle>Makes it possible to drag and drop tree nodes and rearrange the tree.</Card.Subtitle>
                        </Card.Header>

                        <Card.Body>
                            <Tree
                                draggable={ true }
                                selectable={ true }
                                showLine={ true }
                                defaultSelectedKeys={ [ "selected" ] }
                                defaultExpandedKeys={ [ "opened" ] }
                                treeData={ draggableData }
                                onDrop={ dropNode }
                            />
                        </Card.Body>
                    </CardWithActions>
                </Col>
            </Row>
        </>
    )
}

export default React.memo( TreeViewsPage );