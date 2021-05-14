window.addEventListener('load', () => {
    const welcomEl = document.getElementById('welcome');
    const buttonEl = document.querySelector('.done');
 
    buttonEl.addEventListener('click', () => {
        let name = document.querySelector('.name');

        name = name.value.split(' ');

        if (
            name[0] === 'Mr.' ||
            name[0] === 'Mrs.' ||
            name[0] === 'Dr.'
        ) {
            name.shift();        
        }
    
        welcomEl.innerHTML = `Welcome ${name[0]}!`;
    });
});
