const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function () {
  it('should resolve with { data: "Successful response from the API" } when success is true', function (done) {
    getPaymentTokenFromAPI(true)
      .then(response => {
        expect(response).to.deep.equal({ data: 'Successful response from the API' });
        done(); // Call done to indicate test completion
      })
      .catch(error => {
        done(error); // Call done with error if promise rejects
      });
  });

  it('should resolve with null when success is false', function (done) {
    getPaymentTokenFromAPI(false)
      .then(response => {
        expect(response).to.be.null;
        done();
      })
      .catch(error => {
        done(error);
      });
  });
});
