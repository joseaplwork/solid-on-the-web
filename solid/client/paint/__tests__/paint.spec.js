import { Paint } from '../paint';
import { PaintStore } from '../PaintStore';

describe('Paint', () => {
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
            </table>
            `;

            expect(paint.generateReport().trim()).toEqual(expected.trim());
        });
    });
});