/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click, function"){
     //obtain dropdown's value
     var d = document.getElementById("dob-day").value;
     var m = document.getElementById("dob-month").value;
     var y = document.getElementById("dob-year").value;


     //registering values
     //var age = today.getFullYear() - birthDate.getFullYear();

        alert(d + m + y);
    };

})();
