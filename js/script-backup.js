const numbers = document.querySelectorAll('.numbers div');
const operations = document.querySelectorAll('.calcButton');
//set the decimal flag to false, meaning the decimal has not been entered yet
let decimalFlag = false;
//set the operator to false, meaning an operator has not been entered yet
let operatorFlag = false;
//variable for the input field
const input = document.getElementById('input');
//variable to hold a string of numbers
let holdNums = '';
//array to store numbers when cleared
let numArray = [];
//array to store operators when cleared
let opsArray = [];

//loop through the array of elements with class of 'numbers' and add addEventListener to each
for (let i = 0; i<numbers.length; i++) {
    numbers[i].addEventListener('click', function(e) {
        //clear the input, arrays, and flags if 'C' is clicked
        if (e.target.innerHTML === 'C') {
            input.innerHTML = '';
            decimalFlag = false;
            operatorFlag = false;
            opsArray = [];
            numArray = [];
        }
        //if 'C' is not clicked, do the following
        else {
            //if an operator has been entered before your number
            if (operatorFlag) {
                //add the operator to an array to store it
                opsArray.push(input.innerHTML);
                //...and print to console :)
                console.log(opsArray);
                //clear the input
                input.innerHTML = '';
                //reset the operatorFlag so that an operator can be entered after numbers
                operatorFlag = false;
                //reset the decimalFlag
                decimalFlag = false;
            }
            //if the user is not entering a decimal, add the number to input
            if(e.target.innerHTML != ".") {
                input.innerHTML += e.target.innerHTML; 
            }
            //else if the user clicks a decimal for the first time (we know this bc flag is negative), add decimal and set the flag to positive
            else if(!decimalFlag) {
                decimalFlag = true;
                input.innerHTML += e.target.innerHTML; 
            }
            }
    })
};

//loop through the operators and add an event listener to each
for (let i = 0; i<operations.length; i++) {
    operations[i].addEventListener('click', function(e){
        //if an operator has not been clicked, allow it to be clicked as long as a number has previously been enetered
        if(!operatorFlag && input.innerHTML.length > 0) {
            //...and set the flag to true
            operatorFlag = true;
            //add the numbers that are currently in the display to an array before clearing them
            numArray.push(input.innerHTML);
            //show that it's working in console
            console.log(numArray);
            //clear the input display
            input.innerHTML = '';
            //add the operator
            input.innerHTML += e.target.innerHTML; 
            //console.log(holdNums);
            }
        //if an operator has been clicked, don't do anything (except add a small message to user)
        else if (operatorFlag) {
            alert('Please don\'t click that...you\'ve already entered an operator.')
            
        }
    })
};

