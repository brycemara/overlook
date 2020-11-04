const chai = require('chai');
const expect = chai.expect;

const spies = require('chai-spies');
chai.use(spies);


describe('fetchApi', () => {

  before(() => {
    global.fetchApi = {};
    chai.spy.on(fetchApi, ['fetchUserData', 'fetchRoomData', 'fetchBookingData', 'deleteBookingData', 'postBookingData', 'buildBookingData'], () => {})
  });

  it('should be able to fetch user data', () => {
    fetchApi.fetchUserData();

    expect(fetchApi.fetchUserData).to.have.been.called(1);
    expect(fetchApi.fetchUserData).to.have.been.called.with();
  });

  it('should be able to fetch room data', () => {
    fetchApi.fetchRoomData();

    expect(fetchApi.fetchRoomData).to.have.been.called(1);
    expect(fetchApi.fetchRoomData).to.have.been.called.with();
  });

  it('should be able to fetch user data', () => {
    fetchApi.fetchBookingData();

    expect(fetchApi.fetchBookingData).to.have.been.called(1);
    expect(fetchApi.fetchBookingData).to.have.been.called.with();
  });

  it('should be able to delete booking data', () => {
    let booking = {};
    fetchApi.deleteBookingData(booking);

    expect(fetchApi.deleteBookingData).to.have.been.called(1);
    expect(fetchApi.deleteBookingData).to.have.been.called.with(booking);
  });

  it('should be able to build booking data object', () => {
    let booking = {};
    fetchApi.buildBookingData(booking);

    expect(fetchApi.buildBookingData).to.have.been.called(1);
    expect(fetchApi.buildBookingData).to.have.been.called.with(booking);
  });

  it('should be able to post booking data', () => {
    let booking = {};
    fetchApi.postBookingData(booking);

    expect(fetchApi.postBookingData).to.have.been.called(1);
    expect(fetchApi.postBookingData).to.have.been.called.with(booking);
  });

});
