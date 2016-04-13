var expect = chai.expect;

suite("CSV", function() {

    test("Debería aceptar formato csv", function() {
      var original = 'a,b,c,d\nw,x,y,z';
      var result = calculate(original);
      expect(result).to.be.instanceof(Array);
      expect(result[0].items.toString()).to.equal("a,b,c,d");
      expect(result[1].items.toString()).to.equal("w,x,y,z");
    });

});
