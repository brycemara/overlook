import chai from 'chai';
const expect = chai.expect;

import User from '../src/User';
import Customer from '../src/Customer';
import { sampleData } from './sampleData'


describe('Customer', () => {
  let customer;

  beforeEach(() => {
    customer = new Customer(sampleData.roomData, sampleData.bookingData, sampleData.userData, sampleData.userData[0])
  });

  it('should be a function', () => {
    expect(Customer).to.be.a('function');
  });

  it('should be an instace of Customer', () => {
    expect(customer).to.be.an.instanceof(Customer);
  });

  it('should have an id', () => {
    expect(customer.id).to.equal(1);
  });

  it('should have a name', () => {
    expect(customer.name).to.equal("Leatha Ullrich");
  });

  it('should be able filter by room type', () => {
    let searchResults = customer.searchAvailibility("2020/04/22");
    let filteredResults = customer.filterByRoomType("single room", searchResults);

    expect(filteredResults.length).to.equal(3)
  });
});
