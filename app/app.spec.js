
describe('Solution', function() {
    it('should support 4', function() {
        expect(isPerfectSquare(4)).toBe(true);
    });
    
    it('should support 9', function() {
        expect(isPerfectSquare(9)).toBe(true);
    });
    
    it('should support 100', function() {
        expect(isPerfectSquare(100)).toBe(true);
    });
    
    it('should support 7', function() {
        expect(isPerfectSquare(7)).toBe(false);
    });

    it('should support 2147483647', function() {
        expect(isPerfectSquare(2147483647)).toBe(false);
    });


    

    for (var i = 0; i < 10; i++) {

        var x = Math.floor(Math.random() * 2345);

        it('should run ' + x, function() {
            expect(isPerfectSquare(x)).toBe(Math.sqrt(x) % 1 === 0);
        })
    }



});