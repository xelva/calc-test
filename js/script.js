let myArray = [];
let myOps = [];
let intArray = [];


document.addEventListener('click', function(evt) {
    if(evt.target.classList.contains('num')){
        hold = evt.target.innerText;
        arrayLength = myArray.length;
        myArray.splice(arrayLength, 0, hold);
        console.log(myArray);
        }

    else if(evt.target.classList.contains('calcButton')){
        holdOp = evt.target.innerText;
        opsLen = myOps.length;
        if (holdOp === myOps[opsLen -1] || myOps.includes('+', '-', '*', '/')) {
            alert('You can\'t enter the same operator twice. Please enter a different operator.');
        }
        myOps.splice(opsLen, 0, holdOp);
        console.log(myOps);
        }
    
    
 });

document.addEventListener('click', function(evt){
    if(evt.target.classList.contains('equal')){
       intArray = myArray.map(i => Number(i));
       for (let j=0; j<intArray.length;j++) {
           
           for (let k=0; k < myOps.length; k++) {
               if (myOps[k] === '*') {
                    console.log(intArray[j] * intArray[j]);
               };
               if (myOps[k] === '+') {
                    console.log(intArray[j] + intArray[j]);
               };
               if (myOps[k] === '-') {
                    console.log(intArray[j] - intArray[j]);
               };
               if (myOps[k] === '/') {
                    console.log(intArray[j] / intArray[j]);
               };
           };
       };
       console.log(intArray);
    }
    
});


document.addEventListener('click', function(evt){
    if(evt.target.classList.contains('clear')){
       myArray = [];
       myOps = [];
       intArray = [];
    }
});


   

