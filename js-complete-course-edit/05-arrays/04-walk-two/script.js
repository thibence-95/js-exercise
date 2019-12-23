/* becode/javascript
 *
 * /05-arrays/04-walk-two/script.js - 5.4: parcours de tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var fruits = [
        "Apple",
        "Pear",
        "Strawberry",
        "Tomato",
        "Orange",
        "Mandarin",
        "Durian",
        "Peach",
        "Raisin",
        "Cherry",
    ];

    document.getElementById("run").addEventListener("click", function () {
        fruits.forEach(function(item) {
            console.log(item)
        })
    })

})();
