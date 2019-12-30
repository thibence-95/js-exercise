/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function() {

        //establishing random nrs between 1 - 100

        //Math.floor rounds up number/
        let rdm1 = Math.floor(Math.random()*100);
        let rdm2 = Math.floor(Math.random()*100);
        let rdm3 = Math.floor(Math.random()*100);
        let rdm4 = Math.floor(Math.random()*100);
        let rdm5 = Math.floor(Math.random()*100);
        let rdm6 = Math.floor(Math.random()*100);
        let rdm7 = Math.floor(Math.random()*100);
        let rdm8 = Math.floor(Math.random()*100);
        let rdm9 = Math.floor(Math.random()*100);
        let rdm10 = Math.floor(Math.random()*100);

        //putting rdm nrs in array
        let rdm = [rdm1, rdm2, rdm3, rdm4, rdm5, rdm6, rdm7, rdm8, rdm9, rdm10];

        //inserting into HTML table
        document.getElementById("n-1").innerHTML = rdm1;
        document.getElementById("n-1").innerHTML = rdm2;
        document.getElementById("n-1").innerHTML = rdm3;
        document.getElementById("n-1").innerHTML = rdm4;
        document.getElementById("n-1").innerHTML = rdm5;
        document.getElementById("n-1").innerHTML = rdm6;
        document.getElementById("n-1").innerHTML = rdm7;
        document.getElementById("n-1").innerHTML = rdm8;
        document.getElementById("n-1").innerHTML = rdm9;
        document.getElementById("n-1").innerHTML = rdm10;

        //this sorts output from small to big
        let sort = rdm.sort((a, b) => {return a-b;});

        //count 'em oop
        let arrSum = rdm1 + rdm2 + rdm3 + rdm4 + rdm5 + rdm6 + rdm7 + rdm8 + rdm9 + rdm10

        //calculates average
        let calcAverage = arrSum/(rdm.length);

        console.log(rdm.length);
    });

})();
