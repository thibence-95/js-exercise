/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let newHero = {};

    fetch("http://localhost:12345/_shared/api.json")

    .then((response) => {
        return response.json();
    })

    .then(function (data) {
        document.getElementById("run").addEventListener("click", function () {

            let heroName = document.getElementById("hero-name").value;
            let altEgo = document.getElementById("hero-alter-ego").value;
            let heroPower = document.getElementById("hero-powers").value;

            newHero ["id"] = data.heroes.length +1;
            newHero ["name"] = heroName;
            newHero ["alterEgo"] = altEgo;
            newHero ["abilities"] = []; //

            newHero.abilities.push(heroPower);

            data.heroes.push(newHero);
            console.log(data.heroes)
    });





        //console.log(heroName, altEgo, heroPower);
    })



})();
