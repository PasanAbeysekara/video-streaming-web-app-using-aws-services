const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../server');
const expect = chai.expect;

chai.use(chaiHttp);

describe('Videos API Endpoints', function() {
  it('GET /api/videos should fetch all videos', function(done) {
    chai.request(server)
      .get('/api/videos')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        done();
      });
  });

  // Write more tests for other endpoints (/api/videos POST, /:id/like PATCH, etc.)
});
