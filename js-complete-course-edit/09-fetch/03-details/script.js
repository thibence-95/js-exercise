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
                return response.json();
            })

            .then((data)=> {

                    //console.log(heroes, index)
                    //let clone = itm.content.cloneNode(true); //true takes complete template (deep)
                    let inputVal = document.getElementById("hero-id").value-1;
                    //console.log(typeof, inputVal);

                    if (inputVal >= data.heroes.length) {
                        console.log("test");

                    }
                    else {
                        const clone = document.getElementById("tpl-hero").content.cloneNode(true);

                        clone.querySelector(".name").innerHTML = data.heroes[inputVal].name;
                        clone.querySelector(".alter-ego").innerHTML = data.heroes[inputVal].alterEgo;
                        clone.querySelector(".powers").innerHTML = data.heroes[inputVal].abilities;

                        document.getElementById("target").appendChild(clone);
                        //console.log(heroes[i]);
                    }


            })
    })
})();
