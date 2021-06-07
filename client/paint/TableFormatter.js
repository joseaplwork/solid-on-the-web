import mustache from 'mustache';

export function TableFormatter(columns, rows) {
    const template = `<table>
        <thead><tr>{{#columns}}<th>{{.}}</th>{{/columns}}</tr></thead>
        <tbody>
        {{#rows}}
            <tr>{{#.}}<td>{{.}}</td>{{/.}}</tr>
        {{/rows}}
        </tbody>
    </table>`.replace(/\n\s*/g, '');

    return mustache.render(template, { columns, rows });
}
