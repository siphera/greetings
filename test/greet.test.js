describe("greet function", function() {
    it("it should return the name typed in", function() {
        var greeting = greetings();
        greeting.names("siphenkosi");
        assert.equal(greeting.getName(), "siphenkosi");
    });

    
    it("It should Greet the user in english", function() {
        var greeting = greetings();
        greeting.names("siphenkosi")
        greeting.language("english");
        assert.equal(greeting.outputMsg(), "Hello, siphenkosi");
    });
    
    
    it("It should Greet the user in isixhosa", function() {
        var greeting = greetings();
        greeting.names("siphenkosi")
        greeting.language("isixhosa");
        assert.equal(greeting.outputMsg(), "Molo, siphenkosi");
    });
    
    it("It should Greet the user in afrikaans", function() {
        var greeting = greetings();
        greeting.names("siphenkosi")
        greeting.language("afrikaans");
        assert.equal(greeting.outputMsg(), "Hallo, siphenkosi");
    });
    
    
//    it("It should return the correct count of names greeted", function() {
//        var greeting = greetings({});
//        
//        greeting.names("siphenkosi")
//        greeting.language("afrikaans");
//        
//        greeting.names("sabelo")
//        greeting.language("isixhosa");
//        
//        greeting.names("ayanda")
//        greeting.language("english");
//        
//        assert.equal(greeting.counter(),3);
//    });
    
});    