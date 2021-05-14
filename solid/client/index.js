function setupClickHandlers() {
    const buttonEl = document.querySelector('.done');
 
    buttonEl.addEventListener('click',  onButtonClicked);   
}

function onButtonClicked() {
    const name = getFullName();
    const firstName = parseFirstName(name);

    renderMessage(firstName);
}

function getFullName() {
    return document.querySelector('.name');
}

function parseFirstName(fullName) {
    if (
        fullName[0] === 'Mr.' ||
        fullName[0] === 'Mrs.' ||
        fullName[0] === 'Dr.'
    ) {
        fullName[1];        
    }

    return fullName[0];
}

function renderMessage(name) {
    const welcomEl = document.getElementById('welcome');

    welcomEl.innerHTML = `Welcome ${name}!`;
}

window.addEventListener(setupClickHandlers);