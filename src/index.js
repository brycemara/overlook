import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/hotel-california.jpeg'

import User from './User';
import Customer from './Customer';
import Manager from './Manager';

import {fetchApi} from './fetchAPI';

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
const searchResults = document.querySelector('.search-results');
// const bookRoomButton = document.querySelectorAll('.book-room');

const searchUserBookingsButton = document.querySelector('.search-customer-bookings');
const searchOccupied = document.querySelector('.search-hotel-percent-occupied');
const searchAvailableRoomsButton = document.querySelector('.search-avaiable-rooms');
const calculateRevenueButton = document.querySelector('.calculate-revenue');


window.onload = reAssignData();
loginButton.addEventListener('click', checkLogin);

///// Customer Controls /////
searchButton.addEventListener('click', checkInputs);
searchUserBookingsButton.addEventListener('click', displaySearchedCustomer);
// bookRoomButton.forEach(button => button.addEventListener('click', bookARoom))

///// Manager Controls /////
searchOccupied.addEventListener('click', searchOccupiedByDate);
searchAvailableRoomsButton.addEventListener('click', displayAvaiableRooms);
calculateRevenueButton.addEventListener('click', displayCalculatedRevenue);

function checkLogin() {
  if (userNameInput.value === 'manager' && passwordInput.value === 'overlook2020') {
    instantiateManager();
    displayManagerLogin();
  } else if (userNameInput.value.includes('customer') && passwordInput.value === 'overlook2020') {
    let user = getUserFromLogin(userNameInput.value);
    instantiateCustomer(user);
    customerDisplayLogin(customer);
  } else {
    alert('You have enterd an incorrect username or password!')
  }
}

function getUserFromLogin(userInput) {
  let splitUserName = userInput.split('customer');
  let userID = parseInt(splitUserName[1]);
  return userData.find(user => user.id === userID);
}

////////////////////////CUSTOMER LOGIN/////////////////////////////////

function instantiateCustomer(user) {
  customer = new Customer(roomData, bookingData, userData, user);
  let customerData = customer.getUserBookings(customer.id);
  customer.calculateTotalAmountSpent(customerData);
}

function customerDisplayLogin(customer) {
  document.querySelector('.login-form').classList.add('hidden');
  document.querySelector('.customer-dashboard').classList.remove('hidden');
  document.querySelector('.welcome').innerText = `Welcome ${customer.name}, to the Hotel California!`
  document.querySelector('.customer-spending').innerText = `$${customer.totalSpent}`;
  // roomData.forEach((room) => {
  //   searchResults.insertAdjacentHTML('beforeend', createRoomBlocks(room));
  // });
  updateSearchResultsCount(roomData.length);
  customerBookingsDisplay();
}

function customerBookingsDisplay() {
  let customerBookings = customer.getUserBookings(customer.id)
  customerBookings.forEach((booking) => {
    document.querySelector('.user-bookings').insertAdjacentHTML('beforeend', createBookingCards(booking));
  });
}

function checkInputs() {
  let date = document.querySelector('.date-input').value;
  let dateSearchResults = customer.searchAvailibility(date);
  let filterResults;
  if (oneBedOption.selected) {
    filterResults = customer.filterByRoomType(1, dateSearchResults);
  } else if (twoBedOption.selected) {
    filterResults = customer.filterByRoomType(2, dateSearchResults);
  }
  searchResults.innerText = "";
  filterResults.forEach((room) => {
    searchResults.insertAdjacentHTML('beforeend', createRoomBlocks(room, date));
  });
  updateSearchResultsCount(filterResults.length);
}

function bookARoom(roomNumber, userID, date) {
  console.log(roomNumber, userID, date)
  // customer.bookRoom(roomNumber, userID, date);
}

////////////////////////////////MANAGER LOGIN////////////////////////////////

function instantiateManager() {
  manager = new Manager(roomData, bookingData, userData);
  return manager;
}

function displayManagerLogin() {
  document.querySelector('.login-form').classList.add('hidden');
  document.querySelector('.manager-dashboard').classList.remove('hidden');
}

function searchOccupiedByDate() {
  let date = document.querySelector('.date-input-occupied').value;
  document.querySelector('.percent-occupied').innerText = `${manager.getPercentOccupied(date)}%`;
}

function displaySearchedCustomer() {
  let customer = getCusomterInfo();
  if (userData.includes(customer)) {
    displayCustomerBookings(customer);
  } else {
    document.querySelector('.user-results').innerHTML = "";
    alert('Customer infomation not found.')
  }
}

function getCusomterInfo() {
  let customerName = document.querySelector('.customer-name').value;
  let customer = userData.find(user => user.name === customerName);
  return customer;
}

function displayCustomerBookings(customer) {
  let customerBookings = manager.getUserBookings(customer.id);
  customerBookings.forEach((booking) => {
    document.querySelector('.user-results').insertAdjacentHTML('beforeend', createBookingCards(booking));
  });
}

function displayCalculatedRevenue() {
  let date = document.querySelector('.date-input-revenue').value;
  let revenue = manager.calculateDailyRevenue(date);
  document.querySelector('.revenue').innerText = `$${revenue}`;
}

function displayAvaiableRooms() {
  let date = document.querySelector('.avaiable-rooms-date').value;
  let avaibleRooms = manager.searchAvailibility(date);
  avaibleRooms.forEach((room) => {
    document.querySelector('.avaiable-results').insertAdjacentHTML('beforeend', createRoomBlocks(room, date));
  });
}

////////////////////////////////PURE DOM/////////////////////////////////

function createRoomBlocks(room, date) {
  let bookRoomButtons = document.querySelectorAll('.book-room');
  bookRoomButtons.forEach(button => button.addEventListener('click', () => bookARoom(room.number, customer.id, date)))
  const roomBlock =
  `<div class="avaiable-room">
    <img id="room-image" src="https://placeimg.com/250/175/any" alt="Room">
    <h3 id="room-image-name-card">${room.roomType}</h3>
    <p id="room-image-price">This room has ${room.numBeds} ${room.bedSize} beds. The price of this room is $${room.costPerNight} per night.</p>
    <button class="book-room" type="button">Book Room</button>
  </div>`
  return roomBlock;
}

function createBookingCards(booking) {
  let room = roomData.find(room => booking.roomNumber === room.number)
  var bookingCard = `
  <div class="booking-card">
    <div>
      <p>Booking on ${booking.date}.</p>
      <p>${room.roomType} with ${room.numBeds} ${room.bedSize} at a price of ${room.costPerNight} per night.</p>
      <button class="cancel-room" type="button" onclick="">Cancel Booking</button>
    </div>
  </div>
  `;
  return bookingCard;
}

function updateSearchResultsCount(resultsCount) {
  document.querySelector('.results-count').innerText = `${resultsCount} Results`;
}
