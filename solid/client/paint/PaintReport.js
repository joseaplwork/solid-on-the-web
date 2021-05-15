export class PaintReport {
    constructor(data) {
        this.data = data;
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
        return `
                    <tr>
                        <td>${color}</td>
                        <td>${remaining}</td>
                    </tr>`;
    }
}
