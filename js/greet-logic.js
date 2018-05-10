function greetFunctionLogic() {
    
    var englishCount = 0;
    var isixhosaCount = 0;
    var afrikaansCount = 0
    
    function radioGreet(lang) {
        
        if (lang === "english"){
            
            englishCount += 1;
        }
        
        if (lang === "isixhosa"){
            
            isixhosaCount += 1;
        }
        
        else if (lang === "afrikaans"){
            
            afrikaansCount += 1;
        }
        overallCount = englishCount + isixhosaCount + afrikaansCount;
    }
    return{
        
    }
    
    
}
