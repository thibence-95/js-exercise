/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", function() {

        function byFactor(number) {

            var result = 1;

            for (var i = number; i > 1; i--) {
                result *= i;
            }

            return result;
        };

        let theInput = document.getElementById("number").value;
        alert(byFactor(theInput));

    });

})();
//got help from Steve, starting to get a grip of it more and more!
