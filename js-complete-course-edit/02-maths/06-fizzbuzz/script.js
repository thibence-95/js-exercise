/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    //using for loop because what else? I don't know I'm just a noob

    for (let i = 0; i < 100; i++) {
        if (i%5 === 0 && 1%3 === 0) /*% = divide remainder - && = and.*/ {
            console.log(i + "fizzbuzz");
        }
        else if (i%5 === 0) {
            console.log(i + "fizz");
        }
        else if (i%3 === 0) {
            console.log(i + "buzz");
        }
        else {
            console.log(i);
        };
    };


})();
