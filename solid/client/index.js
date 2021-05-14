// View/Design logic -- Designers
function setupClickHandlers() {
    const buttonEl = document.querySelector('.done');
 
    buttonEl.addEventListener('click',  onButtonClicked);   
}

// Change behiavou, what does done do? -- Product manager
// Change of copy -- Copywriting 
function onButtonClicked() {
    const name = getFullName();
    const firstName = parseFirstName(name);

    displayWelcome(firstName);
}

// View change -- Designers, PM, Developers
function getFullName() {
    return document.querySelector('.name');
}

// QA / Customer service
function parseFirstName(fullName) {
    if (
        fullName[0] === 'Mr.' ||
        fullName[0] === 'Mrs.' ||
        fullName[0] === 'Dr.'
    ) {
        return fullName[1];        
    }

    return fullName[0];
}

// UI/View -- Designers. Copywriting
function displayWelcome(name) {
    const welcomEl = document.getElementById('welcome');

    welcomEl.innerHTML = `Welcome ${name}!`;
}

// loading code -- Developers
window.addEventListener(setupClickHandlers);