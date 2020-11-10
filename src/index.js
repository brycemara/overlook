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
let fetchedBookingData;

function reAssignData() {
  const fetchedUserData = fetchApi.fetchUserData();
  const fetchedRoomData = fetchApi.fetchRoomData();
  fetchedBookingData = fetchApi.fetchBookingData();
  Promise.all([fetchedUserData, fetchedRoomData, fetchedBookingData]).then(values => {
    userData = values[0];
    roomData = values[1];
    bookingData = values[2];
  })
}

const userNameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginButton = document.querySelector('.login-button');
const searchButton = document.querySelector('.search-button');
const singleRoomOption = document.querySelector('.single-room');
const suiteOption = document.querySelector('.suite');
const juniorSuiteOption = document.querySelector('.junior-suite');
const resSuiteOption = document.querySelector('.residential-suite');


const searchResults = document.querySelector('.search-results');
// let bookRoomButtons = document.getElementsByClassName('book-room');
// let cancelRoomButtons = document.getElementsByClassName('cancel-room');

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
  searchResults.innerHTML = "<h4> Please select a room type and date to search available bookings!</h4>";
  customerBookingsDisplay();
}

function customerBookingsDisplay() {
  let customerBookings = customer.getUserBookings(customer.id)
  customerBookings.forEach((booking) => {
    document.querySelector('.user-bookings').insertAdjacentHTML('beforeend', createBookingCards(booking));
  });
  cancelRoomsEventListener();
}

function checkInputs() {
  let date = document.getElementById('date-input').value;
  let dateSearchResults = customer.searchAvailibility(date);
  let filterResults;
  if (singleRoomOption.selected) {
    filterResults = customer.filterByRoomType("single room", dateSearchResults);
  } else if (suiteOption.selected) {
    filterResults = customer.filterByRoomType("suite", dateSearchResults);
  } else if (juniorSuiteOption.selected) {
    filterResults = customer.filterByRoomType("junior suite", dateSearchResults);
  } else if (resSuiteOption.selected) {
    filterResults = customer.filterByRoomType("residential suite", dateSearchResults);
  }
  searchResults.innerText = "";
  filterResults.forEach((room) => {
    searchResults.insertAdjacentHTML('beforeend', createRoomBlocks(room, date));
  });
  updateSearchResultsCount(filterResults.length);
  addBookedRoomsEventListener();
}

function addBookedRoomsEventListener() {
  let bookRoomButtons = document.getElementsByClassName('book-room');
  for(let i=0; i < bookRoomButtons.length; i++) {
    bookRoomButtons[i].addEventListener('click', bookARoom);
  }
}

function bookARoom(e) {
  let searchedUser;
  if(!customer) {
    searchedUser = getCusomterInfo();
  }
  let roomNumber = parseInt(e.target.id);
  let userID = (customer == undefined) ? searchedUser.id : customer.id;
  let date = document.getElementById('date-input').value;
  let formattedDate = date.split(/[-]+/).join('/');
  let onSuccess = () => {
    updateBookingData();
  }
  fetchApi.postBookingData(roomNumber, userID, formattedDate, onSuccess);
}

function cancelRoomsEventListener() {
  let cancelRoomButtons = document.getElementsByClassName('cancel-room');
  for(let i=0; i < cancelRoomButtons.length; i++) {
    cancelRoomButtons[i].addEventListener('click', cancelARoom);
  }
}

function cancelARoom(e) {
  let roomNumber = parseInt(e.target.id);
  let userID = customer.id;
  let date = e.target.value;
  let formattedDate = date.split(/[-]+/).join('/');
  let booking = bookingData.find(booking => booking.roomNumber === roomNumber && booking.userID === userID && booking.date === formattedDate)
  let onCustomerSuccess = () => {
    updateBookingData();
  }
  let onManagerSuccess = () => {
    updateManagerSearchResults();
  }
  if(!manager) {
    fetchApi.deleteBookingData(booking, onCustomerSuccess);
  } else {
    fetchApi.deleteBookingData(booking, onManagerSuccess);
  }
}

function updateManagerSearchResults() {
  fetchedBookingData = fetchApi.fetchBookingData();
  fetchedBookingData.then(value => {
   bookingData = value
   })
   .then(() => displayUpdatedSearchedCustomer())
   .catch(error => console.log(error.message))
}

function updateBookingData() {
 fetchedBookingData = fetchApi.fetchBookingData();
 fetchedBookingData.then(value => {
  bookingData = value
  })
  .then(() => displayUpdatedCustomerBookings())
  .catch(error => console.log(error.message))
}

function displayUpdatedCustomerBookings() {
  document.querySelector('.user-bookings').innerHTML = ""
  customer.bookings = bookingData;
  customerBookingsDisplay();
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
  let date = document.getElementById('.date-input-occupied').value;
  document.querySelector('.percent-occupied').innerText = `${manager.getPercentOccupied(date)}%`;
}

function displaySearchedCustomer() {
  let user = getCusomterInfo();
  if (userData.includes(user)) {
    customer = new Customer(roomData, bookingData, userData, user)
    displayCustomerBookings();
  } else {
    document.querySelector('.user-results').innerHTML = "";
    alert('Customer infomation not found.')
  }
}

function displayUpdatedSearchedCustomer() {
  document.querySelector('.user-results').innerHTML = "";
  customer.bookings = bookingData;
  displayCustomerBookings();
}

function getCusomterInfo() {
  let customerName = document.getElementById('customer-name').value;
  let formattedCustomerName = formatCustomerName(customerName);
  let customer = userData.find(user => user.name === formattedCustomerName);
  return customer;
}

function formatCustomerName(customerName) {
  let words = customerName.split(" ")
  let firstName = words[0][0].toUpperCase() + words[0].substring(1);
  let lastName = words[1][0].toUpperCase() + words[1].substring(1);
  let formattedName = firstName.concat(" " + lastName);
  return formattedName;
}

function displayCustomerBookings() {
  let customerBookings = customer.getUserBookings(customer.id);
  console.log(customerBookings)
  customerBookings.forEach((booking) => {
    document.querySelector('.user-results').insertAdjacentHTML('beforeend', createBookingCards(booking));
  });
  debugger
  cancelRoomsEventListener();
}

function displayCalculatedRevenue() {
  let date = document.getElementById('.date-input-revenue').value;
  let revenue = manager.calculateDailyRevenue(date);
  document.querySelector('.revenue').innerText = `$${revenue}`;
}

function displayAvaiableRooms() {
  let date = document.getElementById('avaiable-rooms-date').value;
  let avaibleRooms = manager.searchAvailibility(date);
  avaibleRooms.forEach((room) => {
    document.querySelector('.avaiable-results').insertAdjacentHTML('beforeend', createRoomBlocks(room, date));
  });
  addBookedRoomsEventListener();
}

////////////////////////////////PURE DOM/////////////////////////////////

function createRoomBlocks(room, date) {
  const roomBlock =
  `<div class="avaiable-room">
    <img id="room-image" src="https://placeimg.com/250/175/any" alt="Room">
    <h3 id="room-image-name-card">${room.roomType} #${room.number}</h3>
    <p  class="room-image-price">This room has ${room.numBeds} ${room.bedSize} beds. The price of this room is $${room.costPerNight} per night.</p>
    <button id=${room.number} class="book-room" type="button">Book Room</button>
  </div>`
  return roomBlock;
}

function createBookingCards(booking) {
  let currentRoom = roomData.find(room => booking.roomNumber === room.number)
  if (!currentRoom) return;
  var bookingCard = `
  <div class="booking-card">
    <div>
      <p>Booking on ${booking.date}.</p>
      <p> ${currentRoom.roomType} with ${currentRoom.numBeds} ${currentRoom.bedSize} at a price of $${currentRoom.costPerNight} per night.</p>
      <button id=${currentRoom.number} value="${booking.date}" class="cancel-room" type="button">Cancel Booking</button>
    </div>
  </div>
  `;
  return bookingCard;
}

function updateSearchResultsCount(resultsCount) {
  document.querySelector('.results-count').innerText = `${resultsCount} Results`;
}
