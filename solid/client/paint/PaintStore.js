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

        localStorage.setItem('paint', JSON.stringify(this.data));
    }

    get(color) {
        const amount = this.data[color];

        return typeof amount === 'number' ? amount : MAX_USES;
    }

    getAll() {
        return this.data;
    }
}
