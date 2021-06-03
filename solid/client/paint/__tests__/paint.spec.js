import { Paint } from '../paint';
import { PaintStore } from '../PaintStore';

describe('Paint', () => {
    beforeEach(() => {
        localStorage.clear();
    });

    describe('rendering a report', () => {
        it('returns an HTML table', () => {
            const paint = new Paint(new PaintStore());

            paint.usePaint('blue', 1);
            paint.usePaint('red', 2);
            paint.usePaint('green', 3);

            const expected = `
            <table>
                <thead>
                    <tr>
                        <th>Color</th>
                        <th>Remaining</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>blue</td>
                        <td>7</td>
                    </tr>
                    <tr>
                        <td>red</td>
                        <td>6</td>
                    </tr>
                    <tr>
                        <td>green</td>
                        <td>5</td>
                    </tr>
                </tbody>
            </table>`;

            expect(paint.generateReport().trim()).toEqual(expected.trim());
        });

        it('reverses the order of the columns', () => {
            const paint = new Paint(new PaintStore());

            paint.usePaint('blue', 1);
            paint.usePaint('red', 2);
            paint.usePaint('green', 3);

            const expected = `
            <table>
                <thead>
                    <tr>
                        <th>Remaining</th>
                        <th>Color</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>7</td>
                        <td>blue</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>red</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>green</td>
                    </tr>
                </tbody>
            </table>`;

            expect(paint.generateReport({
                reverseColumns: true
            }).trim()).toEqual(expected.trim());
        });
    });


    describe('providing data for "almost out" report', () => {
        it('should return 3 lowest non-zero paints ASC', () => {
            const paint = new Paint(new PaintStore());

            paint.usePaint('pink', 8);
            paint.usePaint('blue', 7);
            paint.usePaint('red', 6);
            paint.usePaint('green', 5);
            paint.usePaint('turqoise', 4);
            paint.usePaint('purple', 3);

            const expected = [
                ['blue', 1],
                ['red', 2],
                ['green', 3],
            ]

            expect(paint.almostOutData()).toEqual(expected);
        });
    });
});