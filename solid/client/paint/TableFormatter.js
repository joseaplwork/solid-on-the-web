import { Formatter } from './Formatter.js';

export class TableFormatter extends Formatter {
    wrapReport(content) {
        return `<table>${content}</table>`;
    }

    wrapBody(content) {
        return `<tbody>${content}</tbody>`;
    }
    
    wrapHeader(content) {
        return `<thead><tr>${content}</tr></thead>`;
    }

    wrapRow(content) {
        return `<tr>${content}</tr>`;
    }

    wrapValue(content) {
        return `<td>${content}</td>`;
    }

    wrapColumn(content) {
        return `<th>${content}</th>`;
    }
}