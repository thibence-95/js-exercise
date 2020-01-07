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

    for (let i = 0; i<input.length; i++) {
        function slot() {
            let randomNr = Math.floor(Math.random()*99);
            input[1].value = randomNr;
        }

        const run = setInterval(slot, 100);
        buttons[i].addEventListener("click", function () {
            let minVal = input[i].getAttribute("data-min");
            let maxVal = input[i].getAttribute("data-max");

            let randomVal = Math.floor(Math.random()*(maxVal - minVal) + minVal);
            let randomBig = Math.floor(Math.random()*(499 - 460) + 460);

            input[0].value = randomBig;
            clearInterval(run);


            document.getElementById("target").innerHTML = "+0"
                + input[0].value
                + input[1].value
                + input[2].value
                + input[3].value
        });
    }
})();
