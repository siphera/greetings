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
    
    
    
    
});    