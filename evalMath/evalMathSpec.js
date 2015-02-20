var assert = chai.assert;

describe('Evaluate Mathematical Expressions', function(){
  describe('Operators', function(){
    it('should add two numbers', function(){
      expect(evalMath('1 + 1')).to.equal(2);
    });
    it('should subtract two numbers', function(){
      expect(evalMath('1 -1')).to.equal(0);
    });
    it('should multiply two numbers', function(){
      expect(evalMath('1 * 1')).to.equal(1);
    });
    it('should divide two numbers', function(){
      expect(evalMath('2 / 1')).to.equal(2);
    });
  });
  describe('Parenthetical Expressions', function(){
    it('should evaluate nested parenths', function(){
      expect(evalMath('(2 / (2 + 3.33) * 4) - -6')).to.equal(7.50093808630394);
    });
  });
  describe('Negative numbers', function(){
    it('should evaluate negative numbers', function(){
      expect(evalMath('1 + -1')).to.equal(0);
    });
  });
});