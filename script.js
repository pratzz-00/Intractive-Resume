// script.js

document.addEventListener('DOMContentLoaded', function () {
    var printButton = document.getElementById('printButton');
    if (printButton) {
        printButton.addEventListener('click', function () {
            window.print();
        });
    }

    var roles = ["UI Designer", "Developer"];
    var roleIndex = 0;
    var roleTextElement = document.getElementById('roleText');

    setInterval(function () {
        roleTextElement.textContent = roles[roleIndex];
        roleIndex = (roleIndex + 1) % roles.length;
    }, 2000); // Change role every 2 seconds (adjust as needed)

    var loadingLine = document.querySelector('.loadingLine');

    setInterval(function () {
        loadingLine.style.width = '100%';
        setTimeout(function () {
            loadingLine.style.width = '0';
        }, 2000); // Match the duration of text animation
    }, 4000); // Change line animation every 4 seconds (adjust as needed)
});
