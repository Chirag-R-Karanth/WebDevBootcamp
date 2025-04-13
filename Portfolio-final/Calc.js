const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}
 
function calculate(){
    //import calc.py;
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}