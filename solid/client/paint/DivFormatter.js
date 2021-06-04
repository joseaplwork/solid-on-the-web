import { Formatter } from './Formatter.js';

export class DivFormatter extends Formatter {
    wrapReport(content) {
        return `<div class="table">${content}</div>`;
    }

    wrapBody(content) {
        return content;
    }
    
    wrapHeader(content) {
        return `<div>${content}</div>`;
    }

    wrapRow(content) {
        return `<div>${content}</div>`;
    }

    wrapValue(content) {
        return `<span>${content}</span>`;
    }

    wrapColumn(content) {
        return `<strong>${content}</strong>`;
    }
}