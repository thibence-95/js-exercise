/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    //define buttons and input as constants
    const buttons = document.getElementsByTagName("button");
    const input = document.getElementsByTagName("input");

    for (let i = 0, i < input.length, i++) {
        function slot() {
            let randomNr = Math.floor(Math.random()*99);
            input[1].value = randomNr;
        }
    }
})();
