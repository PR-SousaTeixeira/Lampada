// script.js
document.addEventListener('DOMContentLoaded', function () {
    const lampadaOn = document.getElementById('lampada');
    const lampadaOff = document.getElementById('lampada-off');
    const toggleButton = document.getElementById('botao');
    const body = document.body;

    toggleButton.addEventListener('click', function () {
        const isLampadaOn = lampadaOn.style.opacity === '1';

        if (isLampadaOn) {
            lampadaOn.style.opacity = '0';
            lampadaOff.style.opacity = '1';
            body.style.backgroundColor = 'black';
        } else {
            lampadaOn.style.opacity = '1';
            lampadaOff.style.opacity = '0';
            body.style.backgroundColor = 'yellow';
        }
    });
});


