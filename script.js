document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.createElement('button');
    themeToggleButton.textContent = 'Toggle Theme';
    themeToggleButton.className = 'theme-toggle-btn'; // Add a class name to the button
    document.body.insertBefore(themeToggleButton, document.body.firstChild);

    themeToggleButton.addEventListener('click', () => {
        if (document.body.style.backgroundColor === 'black') {
            document.body.style.backgroundColor = '#f4f4f4';
            document.body.style.color = '#333';
            themeToggleButton.textContent = 'Toggle Theme';
        } else {
            document.body.style.backgroundColor = 'black';
            document.body.style.color = 'white';
            themeToggleButton.textContent = 'Toggle Theme';
        }
    });
});