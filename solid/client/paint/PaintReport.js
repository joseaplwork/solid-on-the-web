export class PaintReport {
    constructor(data, options = {}) {
        this.data = data;
        this.reverseColumns = !!options.reverseColumns;
    }

    eachColor(fn) {
        const colors = Object.keys(this.data);

        colors.forEach((color) => {
            const remaining = this.data[color];

            fn(color, remaining);
        });
    }

    generate() {
        this.report = this.getReportHeader();

        this.eachColor((color, remaining) => {
            this.report += this.getReportRow(color, remaining);
        });

        this.report += `
                </tbody>
            </table>
        `;

        return this.report;
    }

    getReportHeader() {
        if (this.reverseColumns) {
            return `
            <table>
                <thead>
                    <tr>
                        <th>Remaining</th>
                        <th>Color</th>
                    </tr>
                </thead>
                <tbody>`;
        }
        
        return `
            <table>
                <thead>
                    <tr>
                        <th>Color</th>
                        <th>Remaining</th>
                    </tr>
                </thead>
                <tbody>`;
    }

    getReportRow(color, remaining) {
        if (this.reverseColumns) {
            return `
                    <tr>
                        <td>${remaining}</td>
                        <td>${color}</td>
                    </tr>`;
        }

        return `
                    <tr>
                        <td>${color}</td>
                        <td>${remaining}</td>
                    </tr>`;
    }
}
