/* becode/javascript
 *
 * /06-dom/03-select-three/script.js - 6.3: sélection multiple par sélecteur css
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    //creating let to select "target" because querySelectorAll doesn't work
    let select = document.querySelector(".target");
    let i;

    //getting it to work on all other "target elements"
    for (i = 0; i < select.length; i++) {
        select[i].innerHTML = "I don't speak faggotois";
    }

})();
