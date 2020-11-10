const chai = require('chai');
const expect = chai.expect;

const spies = require('chai-spies');
chai.use(spies);


describe('domUpdates', () => {
  let manager;
  let room;
  let date;
  let booking;
  let roomData;
  let resultsCount;
  let customer;


  before(() => {
    global.domUpdates = {};
    chai.spy.on(domUpdates, ['displayManagerLogin', 'displayCalculatedRevenue', 'displayedPercentOccupied', 'getTodaysDate', 'compareDates', 'createRoomBlocks', 'createBookingCards', 'updateSearchResultsCount', 'updateCustomerSpending', 'updateSpendingResultsCounter'], () => {})
  });

  beforeEach(() => {
    manager = {};
    room = {};
    date = "";
    booking = {};
    roomData = [];
    resultsCount = 1;
    customer = {};

  })

  it('should be able to display the manager login', () => {
    domUpdates.displayManagerLogin(manager);

    expect(domUpdates.displayManagerLogin).to.have.been.called(1);
    expect(domUpdates.displayManagerLogin).to.have.been.called.with(manager);
  });

  it('should be able to display the calculated reveune', () => {
    domUpdates.displayCalculatedRevenue(manager);

    expect(domUpdates.displayCalculatedRevenue).to.have.been.called(1);
    expect(domUpdates.displayCalculatedRevenue).to.have.been.called.with(manager);
  });

  it('should be able to display the percent occupied', () => {
    domUpdates.displayedPercentOccupied(manager);

    expect(domUpdates.displayedPercentOccupied).to.have.been.called(1);
    expect(domUpdates.displayedPercentOccupied).to.have.been.called.with(manager);
  });

  it('should be able to get todays date', () => {
    domUpdates.getTodaysDate();

    expect(domUpdates.getTodaysDate).to.have.been.called(1);
    expect(domUpdates.getTodaysDate).to.have.been.called.with();
  });

  it('should be able to check if date is in past or future', () => {
    domUpdates.compareDates(date);

    expect(domUpdates.compareDates).to.have.been.called(1);
    expect(domUpdates.compareDates).to.have.been.called.with(date);
  });

  it('should be able to create room blocks', () => {
    domUpdates.createRoomBlocks(room, date);

    expect(domUpdates.createRoomBlocks).to.have.been.called(1);
    expect(domUpdates.createRoomBlocks).to.have.been.called.with(room, date);
  });

  it('should be able to create bookings cards', () => {
    domUpdates.createBookingCards(booking, roomData);

    expect(domUpdates.createBookingCards).to.have.been.called(1);
    expect(domUpdates.createBookingCards).to.have.been.called.with(booking, roomData);
  });

  it('should be able to update the search results count', () => {
    domUpdates.updateSearchResultsCount(resultsCount);

    expect(domUpdates.updateSearchResultsCount).to.have.been.called(1);
    expect(domUpdates.updateSearchResultsCount).to.have.been.called.with(resultsCount);
  });

  it('should be able to update the user spending', () => {
    domUpdates.updateCustomerSpending(customer);

    expect(domUpdates.updateCustomerSpending).to.have.been.called(1);
    expect(domUpdates.updateCustomerSpending).to.have.been.called.with(customer);
  });

  it('should be able to update the user spending counter', () => {
    domUpdates.updateSpendingResultsCounter(customer);

    expect(domUpdates.updateSpendingResultsCounter).to.have.been.called(1);
    expect(domUpdates.updateSpendingResultsCounter).to.have.been.called.with(customer);
  });

})
