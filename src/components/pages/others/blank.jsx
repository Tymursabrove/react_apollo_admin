import React from 'react';

import Breadcrumb from '../../common/breadcrumb';

function BlankPage () {
    return (
        <Breadcrumb current="Blank Page" paths={ [ {
            name: "Home",
            url: "/"
        }, {
            name: "Pages",
            url: "/pages"
        } ] } />
    )
}

export default React.memo( BlankPage );