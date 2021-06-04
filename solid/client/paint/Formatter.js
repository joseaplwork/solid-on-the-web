export const Formatter = {
    format(columns, rows) {
        return this.wrapReport(
            this.getReportHeader(columns) +
            this.wrapBody(
                rows.map(row => {
                    return this.getReportRow(row);
                }).join('')
            )
        );
    },

    getReportHeader(columns) {
        const ths = columns.map((c) => this.wrapColumn(c)).join('');

        return this.wrapHeader(ths);
    },

    getReportRow(row) {
        const tds = row.map((v) => this.wrapValue(v)).join('');

        return this.wrapRow(tds);
    }
}

