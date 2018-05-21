var nameInput = document.querySelector(".nameInputField");
var nameCounter = document.querySelector(".counter");
var greetMe = document.querySelector(".greetBtn");
var clearButton =document.querySelector(".clearBtn");
var display = document.querySelector('.output');
var outputResults = document.querySelector(".outputRes")

function greetings(data) {
    var greetedNames= {};
    var name = "";
    var lang = "";
    
    function setName(value) {
        if (value !== " ") {
            name = value;
        }
    }
    
    function setLanguage(value) {
        lang = value;
    }
    
    function setGreetedNames() {
        if (data) {
            greetedNames = data;
        }
        if (name !== "") {
            if (greetedNames[name] === undefined) {
                greetedNames[name] = 0;
            }
        }
    }
    
    function greetLogic() {
        if (lang === english) {
            return "Hello, " + name;  
        } else if (lang === afrikaans) {
            return "Hallo, " + name;
            
        } if (lang === isixhosa) {
            return "Molo, " + name;
        }
    }

    function getName() {
        return name;
    }
    
    function getLanguage() {
        return lang;
    }
    
    function getGreetedNames() {
        return greetedNames;
    }
    
    function resetGreetedNames() {
        return greetedNames = {};
    }
    
    function namesCounter() {
        return Object.keys(greetedNames).length;
    }
    
    return {
        names: setName,
        language: setLanguage,
        reset: resetGreetedNames,
        namesGrtd: setGreetedNames,
        getName: getName,
        getGreetedNames: getGreetedNames,
        outputMsg: greetLogic,
        nameMap: getGreetedNames,
        counter: namesCounter

    }
}


var data = localStorage.getItem('Names') ? JSON.parse(localStorage.getItem('Names')) : {};
var addToData = greetings(data);
nameCounter.innerHTML = Object.keys(data).length;

function greetMeBtn() {
  var radioCheck = document.querySelector("input[name='language']:checked");
  var enterLanguage = radioCheck.value;
  var name = nameInput.value.trim();
  addToData.names(name);
  addToData.language(enterLanguage);
  addToData.namesGrtd();
  localStorage.setItem("Names", JSON.stringify(addToData.nameMap()));
  nameCounter.innerHTML = addToData.counter();
  outputResults.innerHTML = addToData.outputMsg();
  nameInput.value = "";
  if (name == "") {
  outputResults.innerHTML = "Enter namesssss";

  }
}

function clearData() {
    window.location.reload();
    localStorage.clear();
    outputResults.innerHTML = "Type in your name and choose language";
}


greetMe.addEventListener('click', greetMeBtn);
clearButton.addEventListener('click', clearData);
