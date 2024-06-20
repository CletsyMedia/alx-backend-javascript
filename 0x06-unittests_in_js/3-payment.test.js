const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function () {
  it('should call Utils.calculateNumber with SUM type and correct arguments', function () {
    // Create a spy on Utils.calculateNumber
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

    // Call the function
    sendPaymentRequestToApi(100, 20);

    // Assert that Utils.calculateNumber was called with the expected arguments
    expect(calculateNumberSpy.calledOnce).to.be.true;
    expect(calculateNumberSpy.calledWithExactly('SUM', 100, 20)).to.be.true;

    // Restore the spy to its original state
    calculateNumberSpy.restore();
  });

  it('should log the correct sum to the console', function () {
    // Stub console.log to capture its output
    const consoleStub = sinon.stub(console, 'log');

    // Call the function
    sendPaymentRequestToApi(100, 20);

    // Assert that console.log was called with the correct message
    expect(consoleStub.calledOnce).to.be.true;
    expect(consoleStub.calledWithExactly('The total is: 120')).to.be.true;

    // Restore the stub to its original state
    consoleStub.restore();
  });
});
