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
let customer;
let manager;

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
const searchButton = document.querySelector('.search-button');
const oneBedOption = document.querySelector('.item-1');
const twoBedOption = document.querySelector('.item-2');
const dateInput = document.querySelector('.date-input');
const searchResults = document.querySelector('.search-results');
const searchUserBookingsButton = document.querySelector('.search-customer-bookings');
const searchOccupied = document.querySelector('.search-hotel-percent-occupied');

window.onload = reAssignData();
loginButton.addEventListener('click', checkLogin);
searchButton.addEventListener('click', checkInputs);
searchUserBookingsButton.addEventListener('click', getCustomerBookings);
searchOccupied.addEventListener('click', searchOccupiedByDate);

function checkLogin() {
  if (userNameInput.value === 'manager' && passwordInput.value === 'overlook2020') {
    instantiateManager();
    managerDisplayLogin();
  } else if (userNameInput.value.includes('customer') && passwordInput.value === 'overlook2020') {
    let user = getUserFromLogin(userNameInput.value);
    instantiateCustomer(user);
    customerDisplayLogin(customer);
  }
}

function getUserFromLogin(userInput) {
  let splitUserName = userInput.split('customer');
  let userID = parseInt(splitUserName[1]);
  return userData.find(user => user.id === userID);
}

function customerDisplayLogin(customer) {
  document.querySelector('.login-form').classList.add('hidden');
  document.querySelector('.customer-dashboard').classList.remove('hidden');
  document.querySelector('.welcome').innerText = `Welcome ${customer.name}, to the Hotel California!`
  document.querySelector('.customer-spending').innerText = `$${customer.totalSpent}`;
  roomData.forEach((room) => {
    searchResults.insertAdjacentHTML('beforeend', createRoomBlocks(room));
  });
  userBookingsDisplay();
}

function instantiateCustomer(user) {
  customer = new Customer(roomData, bookingData, userData, user);
  let customerData = customer.getUserBookings(customer.id);
  customer.calculateTotalAmountSpent(customerData);
}

function managerDisplayLogin() {
  document.querySelector('.login-form').classList.add('hidden');
  document.querySelector('.manager-dashboard').classList.remove('hidden');
  document.querySelector('.revenue').innerText = `$${manager.totalSpent}`;
}

function searchOccupiedByDate() {
  let date = document.querySelector('.date-input-occupied').value;
  document.querySelector('.percent-occupied').innerText = `${manager.getPercentOccupied(date)}%`;
}

function instantiateManager() {
  manager = new Manager(roomData, bookingData, userData);
  manager.calculateTotalAmountSpent(bookingData);
  return manager;
}

function getCustomerBookings() {
  let customerName = document.querySelector('.customer-name').value;
  let customer = userData.find(user => user.name === customerName);
  let customerBookings = manager.getUserBookings(customer.id);
  console.log(customerBookings)
  console.log(searchResults)
  customerBookings.forEach((booking) => {
    document.querySelector('.user-results').insertAdjacentHTML('beforeend', createUserBookings(booking));
  });
}

function checkInputs() {
  let dateSearchResults = customer.searchAvailibility(dateInput);
  let filterResults;
  if (oneBedOption.selected) {
    filterResults = customer.filterByRoomType(1, dateSearchResults)
  } else if (twoBedOption.selected) {
    filterResults = customer.filterByRoomType(2, dateSearchResults)
  }
  searchResults.innerText = "";
  filterResults.forEach((room) => {
    searchResults.insertAdjacentHTML('beforeend', createRoomBlocks(room));
  });
}

function createRoomBlocks(room) {
  const roomBlock =
  `<div class="avaiable-room">
    <img id="room-image" src="https://placeimg.com/250/175/any" alt="Room">
    <h3 id="room-image-name-card">${room.roomType}</h3>
    <p id="room-image-price">This room has ${room.numBeds} ${room.bedSize} beds. The price of this room is $${room.costPerNight} per night.</p>
    <button id="book-room" type="button">Book Room</button>
  </div>`
  return roomBlock;
}

function userBookingsDisplay() {
  let customerBookings = customer.getUserBookings(customer.id)
  customerBookings.forEach((booking) => {
    document.querySelector('.user-bookings').insertAdjacentHTML('beforeend', createUserBookings(booking));
  });
}

function createUserBookings(booking) {
  let room = roomData.find(room => booking.roomNumber === room.number)
  var bookingCard = `
  <div class="booking-card">
    <div>
      <p>Your booking on ${booking.date}</p>
      <p>${room.roomType} with ${room.numBeds} ${room.bedSize} at a price of ${room.costPerNight} per night</p>
    </div>
  </div>
  `;
  return bookingCard;
}
