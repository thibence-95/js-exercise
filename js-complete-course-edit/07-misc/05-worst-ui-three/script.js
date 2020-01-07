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

    //define buttons as constants
    const button1 = document.getElementById("fix-part-one");
    const button2 = document.getElementById("fix-part-two");
    const button3 = document.getElementById("fix-part-three");
    const button4 = document.getElementById("fix-part-four");

    //define output fields as vars
    let output1 = document.getElementById("part-one");
    let output2 = document.getElementById("part-two");
    let output3 = document.getElementById("part-three");
    let output4 = document.getElementById("part-four");

    //define target
    let target = document.getElementById("target");

    button1.onclick = function() {
        let minValue = document.getElementById("part-one").getAttribute("data-min");
        let maxValue = document.getElementById("part-one").getAttribute("data-max");
        output1.value = Math.floor(Math.random()*(499 - 460) + 460);
        target.innerHTML = "0" + output1.value + output2.value + output3.value + output4.value;
    };

    button2.onclick = function () {
        let minValue = document.getElementById("part-two").getAttribute("data-min");
        let maxValue = document.getElementById("part-two").getAttribute("data-max");
        output2.value = Math.floor(Math.random()*(minValue - maxValue) + maxValue);
        if (output2.value < 10){
            output2.value = "0" + output2.value;
        }

        target.innerHTML = "0" + output1.value + output2.value + output3.value + output4.value;
    };
    

})();
