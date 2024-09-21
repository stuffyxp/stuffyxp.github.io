const haiku1 = `Lost in the vast web,
A page whispers empty dreams–
404, no trace.`;
const haiku2 = `Tears fall silently
Lost in a digital world
404 Not Found`;

function getRandomHaiku() {
            const randomIndex = Math.floor(Math.random() * 2); // 0 or 1
            return randomIndex === 0 ? haiku1 : haiku2;
}

window.onload = function() {
            const errorMessageElement = document.getElementById("error-message");
            errorMessageElement.textContent = getRandomHaiku();
};