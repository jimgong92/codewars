var assert = chai.assert;

describe('Coin Sum', function(){
  describe('Functionality', function(){
    it('should be able to generate the total number of combinations', function(){
      expect(countChange(6)).to.equal(5);
    });
  });
  describe('Speed', function(){
    it('should finish in linear time', function(){
      var start = Date.now();
      countChange(10000);
      var end = Date.now();
      var time1 = end - start;
      var start2 = Date.now();
      countChange(20000);
      var end2 = Date.now();
      var time2 = end2 - start2;
      var linear = time2 <= time1 * 2.1
      expect(linear).to.equal(true);
    });
  });
});