/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let target = document.getElementById("target");
    let table = document.createElement("table");
    let tbody = document.createElement("tbody");

    //create table cells...
    for (let i = 0; i < 2; i++) {
        //...and row
        let row = document.createElement("tr");

        for (let j = 0; j < 2; j++) {
            let cell = document.createElement("td");
            let celltxt = document.createTextNode("cell in tr" +i+ "column" +j);
            cell.appendChild(celltxt);
            row.appendChild(cell);
        }

        //adds row to end of tbody
        tbody.appendChild(row);
    }

    //puts tbody in tbl
    tbl.appendChild(tbody);
    //append table to target
    target.appendChild(tbl);




})();
