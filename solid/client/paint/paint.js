const MAX_USES = 8;

export class Paint {
    constructor() {
        let data = this.getPaint();

        if (!data) {
            data = {};

            this.setPaint(data);
        }

        this.data = data;
    }

    setPaint(encoded) {
        localStorage.setItem('paint', JSON.stringify(encoded));
    }

    getPaint() {
        return JSON.parse(localStorage.getItem('paint'));
    }

    getPaintLeft(color, uses) {
        const paintLeft = this.getColor(color);

        if (!paintLeft) {
            this.setDefaultPaintUsage(color);
        }

        if (uses) {
            this.updatePaintUsage(color, uses);
        }

        return paintLeft;
    }

    getColor(color) {
        return this.data[color];
    }

    updatePaintUsage(color, uses) {
        this.data[color] = Math.max(this.data[color] - uses, 0);
    }

    setDefaultPaintUsage(color) {
        this.data[color] = MAX_USES;
    }

    generateReport() {
        let rowNum = 0;
        const max = Object.keys(this.data).length;
        this.report = `
            <table>
                <thead>
                    <tr>
                        <th>Color</th>
                        <th>Remaining</th>
                    </tr>
                </thead>
                <tbody>`;


        while (rowNum < max) {
            const color = Object.keys(this.data)[rowNum];
            this.report += this.getReportRow(color);

            rowNum++;
        }

        this.report += `
                </tbody>
            </table>
        `;

        return this.report;
    }

    getReportRow(color) {
        let output;

        const remaining = this.getPaintLeft(color);

        output = `
                    <tr>
                        <td>${color}</td>
                        <td>${remaining}</td>
                    </tr>`;

        return output;
    }
}
