const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('./api');
const { expect } = chai;

chai.use(chaiHttp);

describe('Index page', () => {
  it('should return correct status code and message for GET /', (done) => {
    chai.request(server)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal('Welcome to the payment system');
        done();
      });
  });
});

// Additional tests can be added here for other routes or functionalities

after(() => {
  server.close(); // Close the server after all tests complete
});
