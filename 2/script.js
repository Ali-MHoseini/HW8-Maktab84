const elem = 'div';

function creator(item) {
    const elemTag = document.createElement(item);
    return elemTag;
}

function elemCreator(elem, callback) {
    const createdElem = callback(elem);
    createdElem.innerHTML = "This is Test";
    document.body.appendChild(createdElem);
}

elemCreator(elem, creator);