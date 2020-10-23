//this step will decide the direction of coversion based on the radioButton value

let shotCaller = null;

function radioFunction(browser) {
  shotCaller = browser;
  console.log(shotCaller);
  return shotCaller;
} 
// NOT ABLE TO PASS shotCaller value later in the programm -says "undefined" - would love to get some feedback as to why..
// establish conversion funcitons to use later    
function celsiusToFahrenheit (input){
    let fahrenheit =(input * 1.8) + 32;
    return Math.round(fahrenheit);
};

function fahrenheiToCelsius (input){
    let celsius = (input - 32) * 5 / 9;
    return Math.round(celsius);
}
// ____________________________________________
// fetch html elements to jS to enable from elements
var userInput = document.getElementById('difficult');
var submitButton = document.getElementById('submit');
var clearButton = document.getElementById('clear')
var screen = document.querySelector('.screen');
// enable user input and submission button
//___________________________________________
submitButton.onclick = function(){
    
    console.log(shotCaller);
    if(shotCaller==="b"){
    var yourInput = Math.round(userInput.value);
    const printResult = /* based on path outcome */celsiusToFahrenheit(yourInput);
    screen.innerHTML = printResult+ "&#8457";
    }else{
        var yourInput = Math.round(userInput.value);
        const printResult = /* based on path outcome */fahrenheiToCelsius(yourInput);
        screen.innerHTML = printResult+ "&#8451"; 
    }
}
// not able to switch between Celsius and Fahrenheit - unable to retrive the shotCaller value...
// enable user input and clear button
//___________________________________
clearButton.onclick = function(){
    screen.innerHTML ="";
    userInput.value="";
}
    


// ----------------------------------------
