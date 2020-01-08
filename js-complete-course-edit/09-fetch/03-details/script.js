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

            .then((data) => {
                for (i=0; i < data.heroes[i]; i++) {
                    if (heroName==(data.heroes[i].name)) {
                        let itm = document.getElementById("tpl-hero");
                        let clone = itm.content.cloneNode(true);
                    }
                }
            })
    })
})();
