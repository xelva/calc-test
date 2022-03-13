//store array of all elements w class of 'numbers' in new variable
const numbers = document.querySelectorAll('.numbers div');
//store array of all elements w class of 'calcButton' in new variable
const operations = document.querySelectorAll('.calcButton');
//variable for calling the equals button
const calcResult = document.getElementById('result');
//set the decimal flag to false, meaning the decimal has not been entered yet
let decimalFlag = false;
//set the operator to false, meaning an operator has not been entered yet
let operatorFlag = false;
//create an equals flag
let equalFlag = false;
//variable for the input field
const input = document.getElementById('input');
//variable to hold a string of numbers
let holdNums = '';
//array to store numbers when cleared
let numArray = [];
//array to store operators when cleared
let opsArray = [];
//result array
let resultArray = [];

//loop through the array of elements with class of 'numbers' and add addEventListener to each
for (let i = 0; i<numbers.length; i++) {
    numbers[i].addEventListener('click', function(e) {
        //clear the input, arrays, and flags if 'C' is clicked
        if (e.target.innerHTML === 'C') {
            clearC();
        }
        //if 'C' is not clicked, do the following
        else {
            //clear input if results are currently displayed 
            if (!equalFlag) {
                input.innerHTML = '';
                equalFlag = true;
            }
            //if an operator has been entered before your number
            if (operatorFlag) {
                //add the operator to an array and clear the input
               opReset();
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
            //clear the input display
            input.innerHTML = '';
            //add the operator
            input.innerHTML += e.target.innerHTML; 
            
            }
        //if an operator has been clicked, don't do anything (except add a message to user)
        else if (operatorFlag) {
            alert('Please don\'t click that...you\'ve already entered an operator.')
            
        }
    })
};

calcResult.addEventListener('click', function(){
    //set the flag to true
    operatorFlag = true;
    //add the numbers that are currently in the display to an array before clearing them
    numArray.push(input.innerHTML);
    //clear what's currently in the display
    input.innerHTML = '';

    //loop through your array of numbers
    for (let i = 0; i < numArray.length; i++) {

            //store the first one in a new array that will tally operations as you go
            if (resultArray.length === 0){
                resultArray.push(numArray[i]);               
            }
            //for all following numbers...
            else {
                if (opsArray[0] === '+') {
                    //after you've used your operator, remove it from the front of your op array
                    opsArray.shift();
                    //then perform your operation on the first (and only) item in tally array and the number you're iterating through
                    holdRes = Number(resultArray[0]) + Number(numArray[i]);
                    //and store the results as the tally in your tally array
                    resultArray[0] = holdRes;
                }
                else if (opsArray[0] === '-') {
                    opsArray.shift();
                    holdRes = Number(resultArray[0]) - Number(numArray[i]);
                    resultArray[0] = holdRes;
                    
                }
                else if (opsArray[0] === '*') {
                    opsArray.shift();
                    holdRes = Number(resultArray[0]) * Number(numArray[i]);
                    resultArray[0] = holdRes;
                }
                else {
                    opsArray.shift();
                    holdRes = Number(resultArray[0]) / Number(numArray[i]);
                    resultArray[0] = holdRes;
 
                }
            }
    }
    //log results to the display
    input.innerHTML = resultArray;
    //and reset all your flags
    decimalFlag = false;
    operatorFlag = false;
    opsArray = [];
    numArray = [];
    resultArray = [];
    equalFlag = false;

});


//what happens when an operator is clicked and then a number
const opReset = () => {
    //add the operator to an array to store it
    opsArray.push(input.innerHTML);
    //clear the input
    input.innerHTML = '';
    //reset the operatorFlag so that an operator can be entered after numbers
    operatorFlag = false;
    //reset the decimalFlag
    decimalFlag = false;
};

//what happens when you click clear
const clearC = () => {
    input.innerHTML = '';
    decimalFlag = false;
    operatorFlag = false;
    opsArray = [];
    numArray = [];
    resultArray = [];
};



