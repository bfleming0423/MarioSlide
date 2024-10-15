//Beau Fleming


var height;
var char = "#";


//some code reused from mario2
//print function to print the pyramid in the console.



function printPyramid() {
    var rowStr = '';
    //get user input
    height = document.getElementById('height').value;
    char = document.getElementById('character').value;

    for (let i = 1; i <= height; i++) {
        console.log(".".repeat(height - i) + char.repeat(i) + char);

        //create the rows and the total string
        let row = ("&nbsp".repeat(height - i) + char.repeat(i) + char);
        rowStr += row + "<br>";
    }

    //print to document and console
    document.getElementById('pyramid').innerHTML = rowStr;
    console.log(rowStr);
};