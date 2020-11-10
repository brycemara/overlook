import chai from 'chai';
const expect = chai.expect;

import User from '../src/User';
import Manager from '../src/Manager';
import { sampleData } from './sampleData'

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

  it('should be able to calculate percent occupied', () => {
    let percentOccupied = manager.getPercentOccupied("2020/02/14");

    expect(percentOccupied).to.equal('0.00')
  })

  it('should calculate the dailey revenue', () => {
    let calculatedRevenue = manager.calculateDailyRevenue("2020/02/14")

    expect(calculatedRevenue).to.equal('2218.14')
  })
});
