const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', function () {
  let consoleSpy;

  beforeEach(function () {
    // Create a spy on console.log before each test
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(function () {
    // Restore console.log to its original functionality after each test
    consoleSpy.restore();
  });

  it('should log "The total is: 120" and only log once for totalAmount = 100, totalShipping = 20', function () {
    sendPaymentRequestToApi(100, 20);

    // Assert that console.log was called with the correct message
    expect(consoleSpy.calledOnce).to.be.true;
    expect(consoleSpy.calledWithExactly('The total is: 120')).to.be.true;
  });

  it('should log "The total is: 20" and only log once for totalAmount = 10, totalShipping = 10', function () {
    sendPaymentRequestToApi(10, 10);

    // Assert that console.log was called with the correct message
    expect(consoleSpy.calledOnce).to.be.true;
    expect(consoleSpy.calledWithExactly('The total is: 20')).to.be.true;
  });
});
