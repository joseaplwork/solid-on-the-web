import { welcomeMessage } from './messages.js';

export function getNameInputValue() {
    const nameEl = document.querySelector('.name');

    return nameEl.value;
}

export function displayWelcome(msg) {
    const welcomEl = document.getElementById('welcome');

    welcomEl.innerHTML = msg;
}

export function setupClickHandlers() {
    const buttonEl = document.querySelector('.done');
 
    buttonEl.addEventListener('click',  onDoneButtonClicked);   
}

function onDoneButtonClicked() {
    displayWelcome(welcomeMessage());
}