/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function randomBgcolor() {

        let randomColor = "hsl" + "(" + Math.floor(Math.random()* 255) + "," + Math.floor(Math.random()* 255) + "," + Math.floor(Math.random()* 255) + ")" ;
        document.body.style.backgroundColor = randomColor;
        console.log(randomColor)
    });

})();
