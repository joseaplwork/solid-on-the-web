const MAX_USES = 8;
/* Identify change actors, who wants to changes to this file class */
export class Paint {
    constructor() {
        // persistant - Developer
        let encoded = localStorage.getItem('paint');

        // reading - Developer
        if (!encoded) {
            encoded = '{}';
            localStorage.setItem('paint', encoded);
        }

        // data initialization - Developer
        this.data = JSON.parse(encoded);
    }

    getPaintLeft(color, uses) {
        // side effect
        if (!this.data[color]) {
            this.data[color] = MAX_USES;

            localStorage.setItem('paint', JSON.stringify(this.data[color]))
        }

        // side effect
        if (uses) {
            this.data[color] = Math.max(this.data[color] - uses, 0);

            localStorage.setItem('paint', JSON.stringify(this.data[color]))
        }

        // query
        return this.data[color];
    }

    generateReport() {
        // state change
        this.reportDone = false;
        this.inHeader = true;
        this.rowNum = 0;
        this.report = "<table>";

        while (!this.reportDone) {
            this.getReportRow();
        }

        this.report += '</tbody></table>';

        // state change
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
            // state change
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
                // state change
                this.reportDone = true;

                return;
            }
        }

        this.report += output;

        // query
        return output;
    }
}
