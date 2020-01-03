/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    //select target
    let trgt = document.getElementById("target");
    //makes a tbl
    let table = document.createElement("table");
    trgt.appendChild(table);

    //for loops make as many columns as it makes if that makes any sense
    for (let i = 0; i < 10; i++) {
        let row = table.insertRow();
        for (let o = 0; o < 10; o++) {
            let column = row.insertCell();
            column.innerHTML = (o+1)*(i+1);
        }

    }



})();
