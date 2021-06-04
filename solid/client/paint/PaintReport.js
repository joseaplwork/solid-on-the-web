export class PaintReport {
    constructor(data, options = {}) {
        this.data = data;
        this.reverseColumns = !!options.reverseColumns;
        this.prices = options.prices;
        this.useDivs = !!options.useDivs;
    }

    eachColor(fn) {
        const colors = Object.keys(this.data);

        return colors.map((color) => {
            const remaining = this.data[color];

            return fn(color, remaining);
        });
    }

    generate() {
        return this.wrapReport(
            this.getReportHeader() +
            this.wrapBody(
                this.eachColor((color, remaining) => {
                    return this.getReportRow(color, remaining);
                }).join('')
            )
        );
    }

    getReportHeader() {
        let columns = ['Color', 'Remaining'];

        if (this.prices) columns.push('Price');
        if (this.reverseColumns) columns = columns.reverse();

        const ths = columns.map((c) => this.wrapColumn(c)).join('');

        return this.wrapHeader(ths);
    }

    getReportRow(color, remaining) {
        let values = [color, remaining];

        if (this.prices) values.push(this.prices[color]);
        if (this.reverseColumns) values = values.reverse();

        const tds = values.map((v) => this.wrapValue(v)).join('');

        return this.wrapRow(tds);
    }

    wrapReport(content) {
        if (this.useDivs) {
            return `<div class="table">${content}</div>`;
        }

        return `<table>${content}</table>`;
    }

    wrapBody(content) {
        if (this.useDivs) {
            return content;
        }

        return `<tbody>${content}</tbody>`;
    }
    
    wrapHeader(content) {
        if (this.useDivs) {
            return `<div>${content}</div>`;
        }

        return `<thead><tr>${content}</tr></thead>`;
    }

    wrapRow(content) {
        if (this.useDivs) {
            return `<div>${content}</div>`;
        }

        return `<tr>${content}</tr>`;
    }

    wrapValue(content) {
        if (this.useDivs) {
            return `<span>${content}</span>`;
        }
   
        return `<td>${content}</td>`;
    }

    wrapColumn(content) {
        if (this.useDivs) {
            return `<strong>${content}</strong>`;
        }
   
        return `<th>${content}</th>`;
    }
}
