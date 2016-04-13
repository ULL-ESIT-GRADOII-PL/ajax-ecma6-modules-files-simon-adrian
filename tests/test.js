var expect = chai.expect;

suite("CSV", function() {

  test("Debería aceptar formato csv", function() {
    var original = '1,2,3,a';
    var result = calculate(original);
    expect(result).to.be.instanceof(Array);
    expect(result[0].value.toString()).to.equal("1,2,3,a");
  });
  
});
