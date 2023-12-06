/**
 * Get image url for responsive.
 * 
 * @param {String} url 
 * @param {Number} width 
 * 
 * @returns {String}
 */
export function getCroppedImageUrl ( url, width ) {
    let i;
    for ( i = url.length - 1; i >= 0 && url[ i ] !== '.'; i-- );
    return url.substr( 0, i ) + `-${ width }x${ width }.` + url.substr( i + 1 );
}

/**
 * Get query object from search string.
 * 
 * @param {String} url 
 * @returns {Object}
 */
export function getQueryInfo ( url ) {
    let array = url.slice( 1 ).split( '&' );
    return array.reduce( ( acc, cur ) => {
        if ( cur !== '' ) {
            let [ key, value ] = cur.split( '=' );
            acc[ key ] = value;
        }
        return acc;
    }, {} );
}

/**
 * Get Search string from query object.
 * 
 * @param {Object} query 
 * @returns {String}
 */
export function getQueryString ( query ) {
    let arr = [];
    for ( let key in query ) {
        arr.push( key + '=' + query[ key ] );
    }
    return '?' + arr.join( '&' );
}

/**
 * Get tree of categories.
 * 
 * @param {Array<Category>} categories 
 * @param {Number} except 
 * @returns {Array<Object>}
 */
export function getCategoryTree ( categories, except ) {
    let stack = categories.filter( cat => cat.parent === 0 && ( !except || cat.id !== except ) ).map( cat => {
        return {
            ...cat,
            depth: 0
        };
    } );
    let results = [];
    let temp, children;
    const filter = categories => {
        return categories.filter( cat => cat.parent === temp.id && ( !except || cat.id !== except ) ).map( cat => {
            return {
                ...cat,
                depth: temp.depth + 1
            };
        } );
    }

    while ( stack.length ) {
        temp = stack[ stack.length - 1 ];
        stack.pop();
        results.push( temp );
        children = filter( categories );
        stack = stack.concat( children );
    }

    return results;
}

/**
 * Remove xss attacks in html.
 * 
 * @param {String} html 
 * @returns {String} Sanitized HTML
 */
export function removeXSSAttacks ( html ) {
    const SCRIPT_REGEX = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;

    // Removing the <script> tags
    while ( SCRIPT_REGEX.test( html ) ) {
        html = html.replace( SCRIPT_REGEX, "" );
    }

    // Removing all events from tags...
    html = html.replace( / on\w+="[^"]*"/g, "" );

    return {
        __html: html
    }
}

/**
 * Is Internet Explorer?
 * @return { bool }
 */
export const isIEBrowser = function () {
    let sUsrAg = navigator.userAgent;
    if ( sUsrAg.indexOf( "Trident" ) > -1 )
        return true;
    return false;
}

/**
 * Is Firefox Explorer?
 * @return { bool }
 */
export const isFirefoxBrowser = function () {
    let sUsrAg = navigator.userAgent;
    if ( sUsrAg.indexOf( "Firefox" ) > -1 )
        return true;
    return false;
}

/**
 * Is Edge Explorer?
 * @return { bool }
 */
export const isEdgeBrowser = function () {
    let sUsrAg = navigator.userAgent;
    if ( sUsrAg.indexOf( "Edge" ) > -1 )
        return true;
    return false;
}