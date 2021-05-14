import { setupClickHandlers } from '../welcome-view.js';

describe('Index.js', () => {
    document.body.innerHTML = `
        <input class="name" type="text">
        <button class="done">Done</button>
        <h1 id="welcome"></h1>
    `;

    beforeAll(setupClickHandlers);
    beforeEach(() => {
        const inputEl = document.querySelector('input.name');

        inputEl.value = '';
    });
    test('should render basic structure', () => {
        const inputEl = document.querySelector('input.name');
        const buttonEl = document.querySelector('button.done');
        const messageEl = document.getElementById('welcome');

        expect(inputEl).not.toBeNull();
        expect(buttonEl).not.toBeNull();
        expect(messageEl).not.toBeNull();
    });

    test('should render name on click', () => {
        const inputEl = document.querySelector('input.name');
        const buttonEl = document.querySelector('button.done');
        const messageEl = document.getElementById('welcome');

        inputEl.value = 'Jon Doe';
        buttonEl.click();

        expect(messageEl.innerHTML).toEqual('Welcome Jon!');
    });
});