const chai = require('chai');
const expect = chai.expect;

const spies = require('chai-spies');
chai.use(spies);


describe('fetchApi', () => {

  before(() => {
    global.fetchApi = {};
    chai.spy.on(fetchApi, ['fetchUserData', 'fetchRoomData', 'fetchBookingData', 'deleteBookingData', 'postBookingData'], () => {})
  });

  it('should be able to fetch user data', function() {
    fetchApi.fetchUserData();

    expect(fetchApi.fetchUserData).to.have.been.called(1);
    expect(fetchApi.fetchUserData).to.have.been.called.with();
  });

  it('should be able to fetch room data', function() {
    fetchApi.fetchRoomData();

    expect(fetchApi.fetchRoomData).to.have.been.called(1);
    expect(fetchApi.fetchRoomData).to.have.been.called.with();
  });

  it('should be able to fetch user data', function() {
    fetchApi.fetchBookingData();

    expect(fetchApi.fetchBookingData).to.have.been.called(1);
    expect(fetchApi.fetchBookingData).to.have.been.called.with();
  });

  it('should be able to delete booking data', function() {
    fetchApi.deleteBookingData();

    expect(fetchApi.deleteBookingData).to.have.been.called(1);
    expect(fetchApi.deleteBookingData).to.have.been.called.with();
  });

  it('should be able to post booking data', function() {
    fetchApi.postBookingData();

    expect(fetchApi.postBookingData).to.have.been.called(1);
    expect(fetchApi.postBookingData).to.have.been.called.with();
  });
});
