/* becode/javascript
 *
 * /09-fetch/05-delete/script.js - 11.5: supprimer un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    fetch("http://localhost:12345/_shared/api.json")

        .then((response) => {
            return response.json();
        })

        .then(function (data) {
            document.getElementById("run").addEventListener("click", function () {
                let input = parseInt(document.getElementById("hero-id").value)-1;

                data.heroes.splice(input, 1);
                console.log(data.heroes)
            })
        })




})();
