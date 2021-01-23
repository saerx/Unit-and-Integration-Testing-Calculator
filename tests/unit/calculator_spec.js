var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('it can add', function(){
    calculator.previousTotal = 1
    calculator.add(4)
    assert.strictEqual(calculator.runningTotal, 5)
  })

  it('it can subtract', function(){
    calculator.previousTotal = 7;
    calculator.subtract(4)
    assert.strictEqual(calculator.runningTotal, 3)
  })

  it('it can multiply', function(){
    calculator.previousTotal = 3
    calculator.multiply(5)
    assert.strictEqual(calculator.runningTotal, 15)
  })

  it('it can divide', function(){
    calculator.previousTotal = 21;
    calculator.divide(7)
    assert.strictEqual(calculator.runningTotal, 3)
  })

  it('it can concatenate numbers', function(){
    calculator.numberClick(5);
    calculator.numberClick(7);
    assert.strictEqual(calculator.runningTotal, 57)
  })

  it("it won't concatenate when newTotal", function(){
    calculator.numberClick(5);
    calculator.newTotal = true;
    calculator.numberClick(7);
    assert.strictEqual(calculator.runningTotal, 7)
  })

  it('it can chain multiple operations together', function(){
    calculator.numberClick(3);
    calculator.operatorClick("+");
    calculator.operatorClick("+");
    calculator.operatorClick("*");
    calculator.operatorClick("=");
    assert.strictEqual(calculator.runningTotal, 144)
    calculator.operatorClick("/");
    calculator.operatorClick("=");
    assert.strictEqual(calculator.runningTotal, 1)
  })

  it('it can clear the running total without affecting the calculation', function(){
    calculator.numberClick(3);
    calculator.operatorClick("+");
    calculator.operatorClick("=");
    calculator.clearClick();
    assert.strictEqual(calculator.runningTotal, 0)
    assert.strictEqual(calculator.previousTotal, 6)
  })


});
