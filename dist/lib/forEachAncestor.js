"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.forEachAncestor = void 0;
const forEachAncestor = async (child, maxCount, iterator) => {
    let counter = 0;
    let currentElement = child?.parentElement;
    while (currentElement && currentElement.tagName !== 'HTML') {
        iterator(currentElement);
        currentElement = currentElement.parentElement;
        counter += 1;
        if (typeof maxCount === 'number') {
            if (counter >= maxCount) {
                break;
            }
        }
    }
};
exports.forEachAncestor = forEachAncestor;
