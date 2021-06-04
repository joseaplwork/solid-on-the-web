import { Formatter } from './Formatter.js';

export const TableFormatter = {
    wrapReport(content) {
        return `<table>${content}</table>`;
    },

    wrapBody(content) {
        return `<tbody>${content}</tbody>`;
    },
    
    wrapHeader(content) {
        return `<thead><tr>${content}</tr></thead>`;
    },

    wrapRow(content) {
        return `<tr>${content}</tr>`;
    },

    wrapValue(content) {
        return `<td>${content}</td>`;
    },

    wrapColumn(content) {
        return `<th>${content}</th>`;
    }
}

Object.assign(TableFormatter, Formatter);