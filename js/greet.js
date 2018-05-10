document.addEventListener('DOMContentLoaded', function() {
    
//    reference to the output
    var outputElem = document.querySelector(".output");
    
//    reference to the greet button
    var radioGreetBtn = document.querySelector(".greetBtn");
    
//    variable that will keep track of the counter
    var counterElem = document.querySelector(".counter");
    var languageElem = document.querySelector(".language");
    
    var greetFunction = greetFunctionLogic();
    
    radioGreetBtn.addEventListener('click', function(){
        
    var checkedRadioBtn = document.querySelector("input[name='language']:checked");
    var language = checkedRadioBtn.value;
        
        
    })
    
});