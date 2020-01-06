/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let btnA = document.getElementById("part-one");
    let btnB = document.getElementById("part-two");
    let btnC = document.getElementById("part-three");
    let btnD = document.getElementById("part-four");
    let output = document.getElementById("target");

    btnA.onclick = function() {
        let outputA = (parseInt(btnA.innerText++));
        output.innerHTML = "0" + btnA.innerHTML + btnB.innerHTML + btnC.innerHTML + btnD.innerHTML;
    }



})();
