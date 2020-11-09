import chai from 'chai';
const expect = chai.expect;

import User from '../src/User';

describe('User', () => {
let user;
let userData;
let roomData;
let bookingData;

  beforeEach(() => {
    userData = [{
      "id": 1,
      "name": "Leatha Ullrich"
      },{
      "id": 2,
      "name": "Rocio Schuster"
      },{
      "id": 3,
      "name": "Kelvin Schiller"
      },{
      "id": 4,
      "name": "Kennedi Emard"
      },{
      "id": 5,
      "name": "Rhiannon Little"
      },{
      "id": 6,
      "name": "Fleta Schuppe"
      }]
    roomData = [{
      "number": 1,
      "roomType": "residential suite",
      "bidet": true,
      "bedSize": "queen",
      "numBeds": 1,
      "costPerNight": 358.4
      },{
      "number": 2,
      "roomType": "suite",
      "bidet": false,
      "bedSize": "full",
      "numBeds": 2,
      "costPerNight": 477.38
      },{
      "number": 3,
      "roomType": "single room",
      "bidet": false,
      "bedSize": "king",
      "numBeds": 1,
      "costPerNight": 491.14
      },{
      "number": 4,
      "roomType": "single room",
      "bidet": false,
      "bedSize": "queen",
      "numBeds": 1,
      "costPerNight": 429.44
      },{
      "number": 5,
      "roomType": "single room",
      "bidet": true,
      "bedSize": "queen",
      "numBeds": 2,
      "costPerNight": 340.17
      },{
      "number": 6,
      "roomType": "junior suite",
      "bidet": true,
      "bedSize": "queen",
      "numBeds": 1,
      "costPerNight": 397.02
      },{
      "number": 7,
      "roomType": "single room",
      "bidet": false,
      "bedSize": "queen",
      "numBeds": 2,
      "costPerNight": 231.46
      },{
      "number": 8,
      "roomType": "junior suite",
      "bidet": false,
      "bedSize": "king",
      "numBeds": 1,
      "costPerNight": 261.26
      }, {
      "number": 9,
      "roomType": "single room",
      "bidet": true,
      "bedSize": "queen",
      "numBeds": 1,
      "costPerNight": 200.39
      }]
    bookingData = [{
      "id": "5fwrgu4i7k55hl6sz",
      "userID": 9,
      "date": "2020/04/22",
      "roomNumber": 15,
      "roomServiceCharges": []
      },{
      "id": "5fwrgu4i7k55hl6t5",
      "userID": 43,
      "date": "2020/04/22",
      "roomNumber": 24,
      "roomServiceCharges": []
      },{
      "id": "5fwrgu4i7k55hl6t6",
      "userID": 13,
      "date": "2020/01/10",
      "roomNumber": 12,
      "roomServiceCharges": []
      },{
      "id": "5fwrgu4i7k55hl6t7",
      "userID": 20,
      "date": "2020/02/16",
      "roomNumber": 7,
      "roomServiceCharges": []
      },{
      "id": "5fwrgu4i7k55hl6t8",
      "userID": 1,
      "date": "2020/02/05",
      "roomNumber": 12,
      "roomServiceCharges": []
      },{
      "id": "5fwrgu4i7k55hl6t9",
      "userID": 38,
      "date": "2020/02/14",
      "roomNumber": 14,
      "roomServiceCharges": []
      },{
      "id": "5fwrgu4i7k55hl6ta",
      "userID": 25,
      "date": "2020/04/22",
      "roomNumber": 9,
      "roomServiceCharges": []
    }]
    user = new User(roomData, bookingData, userData);
  });

  it('should be a function', () => {
    expect(User).to.be.a('function');
  });

  it('should be an instance of User', () => {
    expect(user).to.be.an.instanceof(User);
  });

  it('should have room data', () => {
    expect(user.rooms.length).to.equal(9);
  });

  it('should have booking data', () => {
    expect(user.bookings.length).to.equal(7);
  });

  it('should have user data', () => {
    expect(user.userData.length).to.equal(6);
  });

//TODO: Sad Path, waht if entry is wrong?
  it('should be able to search available bookings', () => {
    let searchResults = user.searchAvailibility("2020/04/22")

    expect(searchResults.length).to.deep.equal(8);
  });

  it('should be able to book a room', () => {
    let bookedRoom = user.bookRoom(12, 1, "2020/02/05");

    expect(bookedRoom).to.deep.equal({
    "id": "5fwrgu4i7k55hl6t8",
    "userID": 1,
    "date": "2020/02/05",
    "roomNumber": 12,
    "roomServiceCharges": []
    });
  });

  it('should be able to cancel a room', () => {
    let canceledRoom = user.cancelRoom(12, 1, "2020/02/05");

    expect(canceledRoom).to.deep.equal({
    "id": "5fwrgu4i7k55hl6t8",
    "userID": 1,
    "date": "2020/02/05",
    "roomNumber": 12,
    "roomServiceCharges": []
    });
  });

//TODO: Test for is their are roomServiceCharges?
  it('should be able to calculate total amount spent', () => {
    user.calculateTotalAmountSpent(bookingData);

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
