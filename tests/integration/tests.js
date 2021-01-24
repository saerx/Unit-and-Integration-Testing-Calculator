const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const { element } = require('protractor');
chai.use(chaiAsPromised);
const expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

  it('should update the display of the running total when number buttons are clicked', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number3')).click();
    element(by.css('#number5')).click();
    element(by.css('#number6')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('356')
  })

  it('should update the display with the result of the operation when operation buttons are clicked', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number4')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number8')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('12')
  })

  it('should be able to chain multiple operators', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number3')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('36')
  })

  it('should be able to function for a variety of numbers', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number3')).click()
    element(by.css('#operator_multiply')).click()
    element(by.css('#number4')).click()
    element(by.css('#number0')).click()
    element(by.css('#number0')).click()
    element(by.css('#number0')).click()
    element(by.css('#number0')).click()
    element(by.css('#number0')).click()
    element(by.css('#number0')).click()
    element(by.css('#number0')).click()
    element(by.css('#number0')).click()
    element(by.css('#number0')).click()
    element(by.css('#number0')).click()
    element(by.css('#operator_subtract')).click();
    element(by.css('#number1')).click()
    element(by.css('#number2')).click()
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('119999999988')
    element(by.css('#number1')).click()
    element(by.css('#operator_subtract')).click()
    element(by.css('#number1')).click()
    element(by.css('#number2')).click()
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('-11')
    element(by.css('#number1')).click()
    element(by.css('#operator_subtract')).click()
    element(by.css('#number1')).click()
    element(by.css('#number2')).click()
    element(by.css('#operator_divide')).click()
    element(by.css('#number7')).click()
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('-1.5714285714285714')
  })



  

});
