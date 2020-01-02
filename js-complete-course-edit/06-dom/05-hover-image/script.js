/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let img = document.getElementsByTagName("img")[0]; //selects img we want to change
    let onHov = img.attributes.getNamedItem("data-hover").value; //extracts value of "data-hover"
    let noHov = img.attributes.getNamedItem("src").value; //extracts value of original image

    img.addEventListener("mouseover", function () { //listen for mouse hover
        img.setAttribute("src", onHov); //set att to let nr 1
    });

    img.addEventListener("mouseout", function () {
        img.setAttribute("src", noHov); //set att to let nr 2
    })

})();
