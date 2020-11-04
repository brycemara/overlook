import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/hotel-california.jpeg'

import User from './User';
import Customer from './Customer';
import Manager from './Manager';

import {fetchApi} from './fetchAPI'

let userData;
let roomData;
let bookingData;

function reAssignData() {
  const fetchedUserData = fetchApi.fetchUserData();
  const fetchedRoomData = fetchApi.fetchRoomData();
  const fetchedBookingData = fetchApi.fetchBookingData();
  Promise.all([fetchedUserData, fetchedRoomData, fetchedBookingData]).then(values => {
    userData = values[0];
    roomData = values[1];
    bookingData = values[2];
  })
}

const userNameInput = document.querySelector('.username');
const passwordInput = document.querySelector('.password');
const loginButton = document.querySelector('.login-button');

window.onload = reAssignData();
loginButton.addEventListener('click', checkLogin)

function checkLogin() {
  if (userNameInput.value === 'manager' && passwordInput.value === 'overlook2020') {
    instantiateManager();
    managerDisplayLogin();
  } else if (userNameInput.value.includes('customer') && passwordInput.value === 'overlook2020') {
    let splitUserName = userNameInput.value.split('customer');
    let userID = parseInt(splitUserName[1]);
    instantiateCustomer(userID);
    customerDisplayLogin();
  }
}

function customerDisplayLogin() {
  document.querySelector('.login-form').classList.add('hidden');
  document.querySelector('.customer-dashboard').classList.remove('hidden');
}

function instantiateCustomer(userID) {
  let user = userData.find(user => user.id === userID)
  const customer = new Customer(roomData, bookingData, userData, user);
  return customer;
}

function managerDisplayLogin() {
  document.querySelector('.login-form').classList.add('hidden');
  document.querySelector('.manager-dashboard').classList.remove('hidden');
}

function instantiateManager() {
  const manager = new Manager(roomData, bookingData, userData);
  return manager;
}
