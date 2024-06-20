const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function () {
  afterEach(function () {
    sinon.restore(); // Restore all sinon stubs/spies after each test
  });

  it('should stub Utils.calculateNumber to return 10 and log the correct message', function () {
    // Create a stub for Utils.calculateNumber
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);

    // Spy on console.log to capture its output
    const consoleStub = sinon.stub(console, 'log');

    // Call the function
    sendPaymentRequestToApi(100, 20);

    // Assert that Utils.calculateNumber was called with the expected arguments
    expect(calculateNumberStub.calledOnce).to.be.true;
    expect(calculateNumberStub.calledWithExactly('SUM', 100, 20)).to.be.true;

    // Assert that console.log was called with the correct message
    expect(consoleStub.calledOnce).to.be.true;
    expect(consoleStub.calledWithExactly('The total is: 10')).to.be.true;
  });
});
