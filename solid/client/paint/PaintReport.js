import { TableFormatter } from './TableFormatter';

export class PaintReport {
    constructor(data, options = {}) {
        this.data = data;
        this.reverseColumns = !!options.reverseColumns;
        this.prices = options.prices;
        this.useDivs = !!options.useDivs;
        this.formatter = options.formatter || new TableFormatter(!!this.useDivs);
    }

    eachColor(fn) {
        const colors = Object.keys(this.data);

        return colors.map((color) => {
            const remaining = this.data[color];

            return fn(color, remaining);
        });
    }

    columns() {
        let columns = ['Color', 'Remaining'];

        if (this.prices) columns.push('Price')
        if (this.reverseColumns) columns = columns.reverse()

        return columns;
    }

    rows() {
        let rows = [];

        this.eachColor((color, remaining) => {
            rows.push(this.rowValue(color, remaining));
        });

        return rows;
    }

    rowValue(color, remaining) {
        let values = [color, remaining];

        if (this.prices) values.push(this.prices[color]);
        if (this.reverseColumns) values = values.reverse();

        return values;
    }
    
    generate() {
        const columns = this.columns();
        const rows = this.rows();

        return this.formatter.format(columns, rows);
    }
}
