/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later. 8==D~

(function() {

    let src = document.getElementById("source"); //defines the element that has targeted attr
    let valium = src.attributes.getNamedItem("data-image").value; //gets value of said attr
    let crtImg = document.createElement("img"); //creates an image element
    let addImg = document.getElementById("target").appendChild(crtImg); //adds our image element to .target element
    let crtAtb = document.createAttribute("src"); //creates new attr within img

    crtAtb.value = crtImg;
    addImg.setAttributeNode(crtAtb);
    src.parentNode.removeChild("source");



})();
