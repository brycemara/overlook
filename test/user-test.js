import chai from 'chai';
const expect = chai.expect;

import User from '../src/User';
import { sampleData } from './sampleData'

describe('User', () => {
let user;

  beforeEach(() => {
    user = new User(sampleData.roomData, sampleData.bookingData, sampleData.userData);
  });

  it('should be a function', () => {
    expect(User).to.be.a('function');
  });

  it('should be an instance of User', () => {
    expect(user).to.be.an.instanceof(User);
  });

  it('should have room data', () => {
    expect(user.rooms.length).to.equal(7);
  });

  it('should have booking data', () => {
    expect(user.bookings.length).to.equal(7);
  });

  it('should have user data', () => {
    expect(user.userData.length).to.equal(6);
  });

  it('should be able to search available bookings', () => {
    let searchResults = user.searchAvailibility("2020/04/22")

    expect(searchResults.length).to.deep.equal(6);
  });

  it('should be able to find booked rooms', () => {
    let searchResults = user.findBookedRooms("2020/04/22")

    expect(searchResults.length).to.deep.equal(3);
  });

  it('should be able to calculate total amount spent', () => {
    user.calculateTotalAmountSpent(sampleData.bookingData);

    expect(user.totalSpent).to.equal('431.85');
  });

  it('should be able to get a specific users bookings', () => {
    let userBookings = user.getUserBookings(1);

    expect(userBookings).to.deep.equal([{
    "id": "5fwrgu4i7k55hl6t8",
    "userID": 1,
    "date": "2020/02/05",
    "roomNumber": 12,
    "roomServiceCharges": []
    }]);
  });
});
