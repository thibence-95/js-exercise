/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function () {
        let Input = Number(document.getElementById("year").value);

        function spookyMonths(year) {
            for (let month=0; month<=12; month++) {

                //singling out every 13th of every month in a let
                let d = new Date(year, month, 13);

                //singles out all Fridays that fall on 13ths taken from the let above
                if (d.getDay() ===5) {
                    const months = [
                        "January", "Februray", "March",
                        "April", "May", "June",
                        "July", "August", "September",
                        "October", "November", "December"];

                    alert(months [Number(months)]);
                }
            }
        }

        console.log(spookyMonths(Input));
    )});

})();
