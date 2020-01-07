/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let randomX = Math.floor(Math.random()*(99) + 1);
    let guessCount = 0; //amount of times guessed

    GuessMyNumber();
    function GuessMyNumber() {
        let guessedNr = prompt("Guess a number");

        if (guessedNr === randomX) {
            alert('you guessed it in ${guessCount} times!')
        }
        else if (guessedNr < randomX) {
            alert("Guess higher");
            guessCount++;
            GuessMyNumber();
        }
        else {
            alert("Guess lower");
            guessCount++;
            GuessMyNumber();
        }
    }

})();
