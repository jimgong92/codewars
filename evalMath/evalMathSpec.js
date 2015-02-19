var assert = chai.assert;

describe('Evaluate Mathematical Expressions', function(){
  describe('Addition', function(){
    it('should add two numbers', function(){
      expect(evalMath('1 + 1')).to.equal(2);
      
    });
    it('should evaluate negative numbers', function(){
      expect(evalMath('1 + -1')).to.equal(0);
      
    });
  });
  describe('Subtraction', function(){
    it('should subtract two numbers', function(){
      expect(evalMath('1 - 1')).to.equal(0);
    });
    it('should evaluate negative numbers', function(){
      expect(evalMath('1 - -1')).to.equal(2);
    });
  });
  describe('Multiplication', function(){
    it('should multiply two numbers', function(){
      expect(evalMath('1 * 1')).to.equal(1);
    });
    it('should evaluate negative numbers', function(){
      expect(evalMath('1 * -1')).to.equal(-1);
    });
  });
  describe('Division', function(){
    it('should divide two numbers', function(){
      expect(evalMath('2 / 1')).to.equal(2);
    });
    it('should evaluate negative numbers', function(){
      expect(evalMath('2 / -1')).to.equal(-2);
    });
  });
  it('should handle parenthetical expressions', function(){
    expect(evalMath('2 / (1 + 1)')).to.equal(1);
  });
});