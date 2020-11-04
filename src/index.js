import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/hotel-california.jpeg'


import {fetchApi} from './fetchAPI'


const fetchedUserData = fetchApi.fetchUserData();
const fetchedRoomData = fetchApi.fetchRoomData();
const fetchedBookingData = fetchApi.fetchBookingData();

let userData;
let roomData;
let bookingData;


Promise.all([fetchedUserData, fetchedRoomData, fetchedBookingData]).then(values => {
  userData = values[0];
  roomData = values[1];
  bookingData = values[2];
})

function checkLogin() {
// if its a manager display manager & instantiate a manager
// if its a customer display customer & instantiate a customer
}

function getRandomCustomerIndex() {
  const userIndex = Math.floor(Math.random() * 50);
  return userData[userIndex]
}

function customerDisplayLogin() {

}

function instantiateCustomer() {
  const customer = new Customer(roomData, bookingData, userData, getRandomUserIndex());
  return customer;
}

function managerDisplayLogin() {

}

function instantiateManager() {
  const manager = new Manager(roomData, bookingData, userData);
  return manager;
}
