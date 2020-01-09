/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", function () {
        let input = document.getElementById("hero-id").value;

        fetch("http://localhost:12345/_shared/api.json")
            .then((response)=> {
                return response.json()
            })

            .then (function (myJson) {
                let heroes = myJson.heroes;
                heroes.forEach(function (element) {
                    let tplTarget = document.getElementById("tpl-target");
                    let heroId = document.getElementById("hero-id");
                    console.log(heroes);

                    let newTarget = tplTarget.content.cloneNode(true);

                    if (heroId == element.id) {

                        newTarget.querySelector(".name").innerHTML = element.name;
                        newTarget.querySelector(".alter-ego").innerHTML = element.alterEgo;
                        newTarget.querySelector(".powers").innerHTML = element.abilities;

                        document.getElementById("target").appendChild(newTarget);
                    }
                })
            })
    })
})();
