import { PaintReport } from './PaintReport.js';
import {
    objToTuple,
    removeZeroes,
    sortAscending,
    take,
    compose
} from './paint-data.js';

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

    generateReport(options) {
        const report = new PaintReport(this.store.getAll(), options);

        return report.generate();
    }

    almostOutData() {
        return compose(
            () => this.store.getAll(),
            objToTuple,
            removeZeroes,
            sortAscending,
            (sorted) => take(3, sorted)
        );
    }
}
