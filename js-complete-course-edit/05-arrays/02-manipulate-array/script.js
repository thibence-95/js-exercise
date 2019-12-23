/* becode/javascript
 *
 * /05-arrays/02-manipulate-array/script.js - 5.2: manipulation de tableau
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
        fruits.pop(); //removes the last one
        fruits.shift(); //removes the first one
        fruits.push("Mango"); //adds a new one

        console.log(fruits);
    })


})();
