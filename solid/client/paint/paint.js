import { PaintReport } from './PaintReport.js';

export class Paint {
    constructor(store) {
        this.store = store;
    }

    getPaintLeft(color) {
        return this.store.get(color);
    }

    usePaint(color, uses) {
        const remaining = Math.max(this.store.get(color) - uses, 0);

        this.store.set(color, remaining);
    }

    generateReport() {
        const report = new PaintReport(this.store.getAll());

        return report.generate();
    }
}
