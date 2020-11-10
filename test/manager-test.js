import chai from 'chai';
const expect = chai.expect;

import Manager from '../src/Manager';
import { sampleData } from './sampleData';

describe('Manager', () => {
  let manager;

  beforeEach(() => {
    manager = new Manager(sampleData.roomData, sampleData.bookingData, sampleData.userData);
  });

  it('should be a function', () => {
    expect(Manager).to.be.a('function');
  });

  it('should be an instance of Manager', () => {
    expect(manager).to.be.an.instanceof(Manager);
  });

  it('should have room data', () => {
    expect(manager.rooms.length).to.equal(7);
  });

  it('should have booking data', () => {
    expect(manager.bookings.length).to.equal(8);
  });

  it('should have user data', () => {
    expect(manager.userData.length).to.equal(6);
  });

  it('should be able to search users bookings by user name', () => {
    let searchResults = manager.searchUsers("Leatha Ullrich");

    expect(searchResults).to.deep.equal([{
    "id": "5fwrgu4i7k55hl6t8",
    "userID": 1,
    "date": "2020/02/05",
    "roomNumber": 12,
    "roomServiceCharges": []
    }])
  });

  it('shoud be able to search users bookings by different user name', () => {
    let searchResults = manager.searchUsers("Kelvin Schiller");

    expect(searchResults).to.deep.equal([{
    "id": "5fwrgu4i7k55hl6t7",
    "userID": 3,
    "date": "2020/02/16",
    "roomNumber": 7,
    "roomServiceCharges": []
    }])
  })

  it('should be able to calculate percent occupied', () => {
    let percentOccupied = manager.getPercentOccupied("2020/02/14");

    expect(percentOccupied).to.equal('12.50')
  })

  it('should be able to calculate percent occupied on any date', () => {
    let percentOccupied = manager.getPercentOccupied("2020/04/22");

    expect(percentOccupied).to.equal('37.50');
  })

  it('should calculate the daily revenue', () => {
    let calculatedRevenue = manager.calculateDailyRevenue("2020/02/14")

    expect(calculatedRevenue).to.equal('2218.14')
  })

  it('should be able to calculate daily revenue on any date', () => {
    let calculatedRevenue = manager.calculateDailyRevenue("2020/04/22")

    expect(calculatedRevenue).to.equal('2218.14')
  })
});
