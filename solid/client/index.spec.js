describe('Index.js', () => {
    test('should render basic structure', () => {
        const inputEl = document.querySelector('input.name');
        const buttonEl = document.querySelector('button.done');
        const messageEl = document.getElementById('.welcome');

        expect(inputEl).toBeDefined();
        expect(buttonEl).toBeDefined();
        expect(messageEl).toBeDefined();
    });
});