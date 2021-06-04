import mustache from 'mustache';

export function DivFormatter(columns, rows) {
    const template = `<div class="table">
        <div>{{#columns}}<strong>{{.}}</strong>{{/columns}}</div>
        {{#rows}}
            <div>{{#.}}<span>{{.}}</span>{{/.}}</div>
        {{/rows}}
    </div>`.replace(/\n\s*/g, '');

    return mustache.render(template, { columns, rows });
}