// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'


import {fetchApi} from '.fetchAPI'


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
  startApp();
});


function startApp() {

};

function displayLogin() {

};

function checkLogin() {
// if its a manager display manager & instantiate a manager
// if its a customer display customer & instantiate a customer
};

function getRandomCustomerIndex() {
  const userIndex = Math.floor(Math.random() * 50);
  return userData[userIndex]
};

function customerDisplayLogin() {

};

function instantiateCustomer() {
  const customer = new Customer(roomData, bookingData, userData, getRandomUserIndex());
  return customer;
};

function managerDisplayLogin() {

};

instantiateManager() {
  const manager = new Manager(roomData, bookingData, userData);
  return manager;
};
