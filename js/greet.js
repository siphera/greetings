var nameInput = document.querySelector(".nameInputField");
var nameCounter = document.querySelector(".counter");
var greetMe = document.querySelector(".greetBtn");
var clear =document.querySelector(".clearBtn");
var display = document.querySelector('.output');


function greetings(data){
    var name = "";
    var language = "";
    var greetedNames= {};
    
    function setName(value) {
        if (value !== " ") {
            name = value;
        }
    }
    
    function setLanguage(value) {
        language = value;
    }
    
    function setGreetedNames() {
        if (data) {
            greetedNames = data;
        }
        
        if (name !== "") {
            if (greetedNames[name] === undefined) {
                greetedNames[name] = 0
            }
        }
    }
    
    function greetLogic() {
        if (language === english) {
            return "Hello, " + name;
        } else if (language === afrikaans) {
            return "Hallo, " + name;
        } else if (language === isixhosa) {
            return "Molo, " + name;
        }
    }
    
    
    function getName() {
        return name;
    }
    
    function getLanguage(){
        return language;
    }
    
    function getGreetedNames() {
        return greetedNames;
    }
    
    function bGreetedNames(){
        return greetedNames = {};
    }
    
    function namesCounter() {
        return Object.keys(greetedNames).length;
    }
    
    return {
        
    }
}

//--------------------------------------------------------------------
//----------------------buttons----------------------------
function clickCounter() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)+1;
        } else {
            localStorage.clickcount = 1;
        }
        document.querySelector(".counter").innerHTML = localStorage.clickcount;
    }
    
    function clearInput(element){                   
element.value="";
}
}

function clearClicked() {
  localStorage.clear();
//  addToStorage.reset();
  window.location.reload();
//  counterOfNameElement.innerHTML = addToStorage.counter();
//  console.log(localStorage.clear());
    
    
}

greetMe.addEventListener("click", clickCounter);
clear.addEventListener("click", clearClicked);