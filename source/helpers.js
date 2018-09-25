/**
 * Retrieve element node from the DOM
 */
export function e(selector) {
    let fetchedDOM = document.querySelectorAll(selector), elemCount = fetchedDOM.length;

    return (elemCount == 1) ? fetchedDOM[0] : (elemCount > 1) ? fetchedDOM : null;
}

/**
 * Retrieve element node from the DOM
 */
export function findIn(el, selector) {
    let fetchedDOM = el.querySelectorAll(selector), elemCount = fetchedDOM.length;

    return (elemCount == 1) ? fetchedDOM[0] : (elemCount > 1) ? fetchedDOM : null;
}

/**
 * Retrieve element node from the DOM
 */
export function createElement(htmlString) {
    let template = document.createElement('div');
    htmlString = htmlString.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = htmlString;
    return template;
}