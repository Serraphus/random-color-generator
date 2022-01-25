const colorButton = document.getElementById('ColorButton');
const colorCodeDisplay = document.getElementById('ColorCode');

// Generate a random hexadecimal color code.
const getRandomColor = () => {
    const hexCodes = '1234567890abcdef'.split('');
    const hexColor = [];
    for (let i = 1; i < 7; i++) {
        const randomIndex = Math.floor(Math.random() * 16);
        hexColor.push(hexCodes[randomIndex]);
    }
    return '#' + hexColor.join('');
}

// Change the background color and the displayed color code.
const changeColor = () => {
    const randomColorPlease = getRandomColor();
    document.body.style.backgroundColor = randomColorPlease;
    document.getElementById('ColorCode').innerHTML = randomColorPlease;
}

// addEventListener for button, and run changeColor() on click.
colorButton.addEventListener('click', changeColor);
