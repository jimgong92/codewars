var assert = chai.assert;

describe('Explosive Sum', function(){
  describe('Functionality', function(){
    it('should be able to generate the total number of combinations', function(){
      expect(solver(6)).to.equal(11);
    });
  });
});