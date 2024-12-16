const haiku1 = `Tears fall silently
Lost in a digital world
404 Not Found`;
const haiku2 = `Lost in the vast web,
A page whispers empty dreams—
404, no trace.`;
const haiku3 = `A broken link, a void,
The page you sought is lost
404 Not Found`;
const haiku4 = `A digital dead end,
The page vanished, a trace
404 Not Found`;
const haiku5 = `A broken path, a void,
The server couldn't find
The page you sought`;
const haiku6 = `A digital mirage,
The page you sought, now gone
404's empty stare`;
const haiku7 = `A broken link, a flaw,
The server's search is vain
404 Not Found`;
const haiku8 = `A lost path, a dead end,
The page you sought, not here
404, a haunting`;

function getRandomHaiku() {
            const randomIndex = Math.floor(Math.random() * 8); // Adjust for more haikus
            return randomIndex === 0 ? haiku1 : (randomIndex === 1 ? haiku2 : (randomIndex === 2 ? haiku3 : (randomIndex === 3 ? haiku4 : (randomIndex === 4 ? haiku5 : (randomIndex === 5 ? haiku6 : (randomIndex === 6 ? haiku7 : haiku8))))));
        }

        window.onload = function() {
            const errorMessageElement = document.getElementById("error-message");
            errorMessageElement.textContent = getRandomHaiku();
        };