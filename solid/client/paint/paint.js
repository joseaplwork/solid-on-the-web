const MAX_USES = 8;

export class Paint {
    constructor() {
        let encoded = localStorage.getItem('paint');

        if (!encoded) {
            encoded = '{}';
            localStorage.setItem('paint', encoded);
        }

        this.data = JSON.parse(encoded);
    }

    getPaintLeft(color, uses) {
        if (!this.data[color]) {
            this.data[color] = MAX_USES;

            localStorage.setItem('paint', JSON.stringify(this.data[color]))
        }

        if (uses) {
            this.data[color] = Math.max(this.data[color] - uses, 0);

            localStorage.setItem('paint', JSON.stringify(this.data[color]))
        }

        return this.data[color];
    }

    generateReport() {
        this.reportDone = false;
        this.inHeader = true;
        this.rowNum = 0;
        this.report = "<table>";

        while (!this.reportDone) {
            this.getReportRow();
        }

        this.report += '</tbody></table>';

        return this.report;
    }

    getReportRow() {
        let output;

        if (this.inHeader) {
            output = `
        <thead>
          <tr>
            <th>Color</th>
            <th>Remaining</th>
          </tr>
        </thead>
      `;

            this.inHeader = false;
        } else {
            const color = Object.keys(this.data)[this.rowNum++];

            if (color) {
                const remaining = this.getPaintLeft(color);

                output = `
          <tbody>
              <tr>
                  <td>${color}</td>
                  <td>${remaining}</td>
              </tr>
        `;
            } else {
                this.reportDone = true;

                return;
            }
        }

        this.report += output;

        return output;
    }
}
