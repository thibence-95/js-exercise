/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("pass-one").setAttribute("minlength", "8", function () {
        let input = document.getElementById("pass-one").value;
        let inputLgth = input.length;

        console.log(inputLgth);

        if (inputLgth > 8) {
            document.getElementById("validity").innerHTML = "OK";
        }
    })
    

})();
