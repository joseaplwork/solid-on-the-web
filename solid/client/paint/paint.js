const MAX_USES = 8;

export class PaintStore {
    constructor() {
        let data = JSON.parse(localStorage.getItem('paint'));

        if (!data) {
            data = {};

            localStorage.setItem('paint', JSON.stringify(data));
        }

        this.data = data;
    }

    set(color, value) {
        this.data[color] = value;

        localStorage.setItem('paint', this.data);
    }

    get(color) {
        return this.data[color] || MAX_USES;
    }

    getAll() {
        return this.data;
    }
}

export class PaintReport {
    constructor(data) {
        this.data = data;
    }

    generate() {
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

        const remaining = this.data[color];

        output = `
                    <tr>
                        <td>${color}</td>
                        <td>${remaining}</td>
                    </tr>`;

        return output;
    }
}

export class Paint {
    constructor(store, report) {
        this.store = store;
        this.report = report;
    }

    getPaintLeft(color, uses) {
        if (uses) {
            const newUses = Math.max(this.store.get(color) - uses, 0);

            this.store.set(color, newUses);
        }

        return this.store.get(color);
    }

    generateReport() {
        const report = new PaintReport(this.store.getAll());

        return report.generate();
    }
}
