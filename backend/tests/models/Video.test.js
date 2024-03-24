const chai = require('chai');
const expect = chai.expect;
const Video = require('../../models/Video');

describe('Video Model Tests', function() {
  it('should create a new video', async function() {
    const videoData = { name: 'Test Video', views: 100, likes: 10 };
    const video = new Video(videoData);
    const savedVideo = await video.save();
    expect(savedVideo.name).to.equal('Test Video');
    expect(savedVideo.views).to.equal(100);
    expect(savedVideo.likes).to.equal(10);
    expect(savedVideo).to.have.property('createdAt');
    expect(savedVideo).to.have.property('updatedAt');
  });
});
