import './css/base.scss';
import User from './User';
import Customer from './Customer';
import Manager from './Manager';

import {fetchApi} from './fetchAPI';
import {domUpdates} from './DOM-updates';

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
const searchUserBookingsButton = document.querySelector('.search-customer-bookings');
const searchAvailableRoomsButton = document.querySelector('.search-avaiable-rooms');

window.onload = () => {
  reAssignData();
}
loginButton.addEventListener('click', checkLogin);
///// Customer Controls /////
searchButton.addEventListener('click', checkInputs);

///// Manager Controls /////
searchAvailableRoomsButton.addEventListener('click', displayAvaiableRooms);
searchUserBookingsButton.addEventListener('click', displaySearchedCustomer);

function checkLogin() {
  if (userNameInput.value === 'manager' && passwordInput.value === 'overlook2020') {
    instantiateManager();
    domUpdates.displayManagerLogin(manager);
  } else if (userNameInput.value.includes('customer') && passwordInput.value === 'overlook2020') {
    let user = getUserFromLogin(userNameInput.value);
    instantiateCustomer(user);
    customerDisplayLogin();
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
  domUpdates.updateCustomerSpending(customer);
}

function customerDisplayLogin() {
  document.querySelector('.login-form').classList.add('hidden');
  document.querySelector('.customer-dashboard').classList.remove('hidden');
  document.querySelector('.welcome').innerText = `Welcome ${customer.name}, to the Hotel California!`
  searchResults.innerHTML = "<h4> Please select a room type and a future date to search available bookings!</h4>";
  customerBookingsDisplay();
}

function customerBookingsDisplay() {
  let customerBookings = customer.getUserBookings(customer.id)
  customerBookings.forEach((booking) => {
    document.querySelector('.user-bookings').insertAdjacentHTML('beforeend', domUpdates.createBookingCards(booking, roomData));
  });
  addCancelRoomsEventListener();
}

function checkInputs() {
  let date = document.getElementById('date-input').value;
  let dateSearchResults = customer.searchAvailibility(date);
  let filterResults = getFilterResults(dateSearchResults);
  if(filterResults.length === 0) {
    alert("We are so so sorry there are no rooms avaiable for that date & room type!")
    return;
  }
  buildSearchResults(filterResults, date);
}

function getFilterResults(dateSearchResults) {
  if (singleRoomOption.selected) {
    return customer.filterByRoomType("single room", dateSearchResults);
  } else if (suiteOption.selected) {
    return customer.filterByRoomType("suite", dateSearchResults);
  } else if (juniorSuiteOption.selected) {
    return customer.filterByRoomType("junior suite", dateSearchResults);
  } else if (resSuiteOption.selected) {
    return customer.filterByRoomType("residential suite", dateSearchResults);
  }
}

function buildSearchResults(filterResults, date) {
  searchResults.innerText = "";
  filterResults.forEach((room) => {
    searchResults.insertAdjacentHTML('beforeend', domUpdates.createRoomBlocks(room, date));
  });
  domUpdates.updateSearchResultsCount(filterResults.length);
  addBookedRoomsEventListener();
}

////////////////////////////////MANAGER LOGIN////////////////////////////////

function instantiateManager() {
  manager = new Manager(roomData, bookingData, userData);
  return manager;
}

function getCusomterInfo(elementID) {
  let customerName = document.getElementById(elementID).value;
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

function displaySearchedCustomer() {
  document.querySelector('.user-results').innerHTML = "";
  let user = getCusomterInfo('customer-name');
  if (userData.includes(user)) {
    customer = new Customer(roomData, bookingData, userData, user)
    domUpdates.updateSpendingResultsCounter(customer);
    displayCustomerBookings();
  } else {
    document.querySelector('.user-results').innerHTML = "";
    alert('Customer infomation not found.')
  }
}

function displayAvaiableRooms() {
  document.querySelector('.avaiable-results').innerHTML = "";
  let user = getCusomterInfo('customer-name-avaiable');
  customer = new Customer(roomData, bookingData, userData, user)
  let date = document.getElementById('avaiable-rooms-date').value;
  let formattedDate = date.split(/[-]+/).join('/');
  if(domUpdates.compareDates(formattedDate)) {
    alert("No avaiable bookings in the past.");
    return;
  }
  createAvailableRooms(date);
}

function createAvailableRooms(date) {
  let avaibleRooms = manager.searchAvailibility(date);
  avaibleRooms.forEach((room) => {
    document.querySelector('.avaiable-results').insertAdjacentHTML('beforeend', domUpdates.createRoomBlocks(room, date));
  });
  addBookedRoomsEventListener();
}

////////////////////////////////BOOK & CANCEL ROOMS////////////////////////////////

function bookARoom(e) {
  let roomNumber = parseInt(e.target.id);
  let userID = customer.id;
  let onCustomerSuccess = () => {
    updateBookingData();
  }
  let onManagerSuccess = () => {
    updateAvaiableRooms()
  }
  checkWhatToBook(roomNumber, userID, onCustomerSuccess, onManagerSuccess)
}

function checkWhatToBook(roomNumber, userID, onCustomerSuccess, onManagerSuccess) {
  if(!manager) {
    let date = getCorrectDate('date-input');
    if(domUpdates.compareDates(date)) {
      alert("You cannot cancel a booking from the past");
      return;
    }
    fetchApi.postBookingData(roomNumber, userID, date, onCustomerSuccess);
    alert("You've successfuly booked a room!")
  } else {
    let date = getCorrectDate('avaiable-rooms-date');
    fetchApi.postBookingData(roomNumber, userID, date, onManagerSuccess);
    alert("You've successfuly booked a room!")
  }
}

function getCorrectDate(elementID) {
  let date = document.getElementById(elementID).value;
  let formattedDate = date.split(/[-]+/).join('/');
  return formattedDate;
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
  domUpdates.updateCustomerSpending(customer);
  customerBookingsDisplay();
}

function updateAvaiableRooms() {
  fetchedBookingData = fetchApi.fetchBookingData();
  fetchedBookingData.then(value => {
   bookingData = value
  })
  .then(() => displayUpdatedAvaiableRooms())
  .catch(error => console.log(error.message))
}

function displayUpdatedAvaiableRooms() {
  document.querySelector('.avaiable-results').innerHTML = "";
  customer.bookings = bookingData;
  displayUpdatedSearchedCustomer();
  displayAvaiableRooms();
}

function displayUpdatedSearchedCustomer() {
  document.querySelector('.user-results').innerHTML = "";
  customer.bookings = bookingData;
  domUpdates.updateSpendingResultsCounter(customer);
  displayCustomerBookings();
}

function displayCustomerBookings() {
  let customerBookings = customer.getUserBookings(customer.id);
  customerBookings.forEach((booking) => {
    document.querySelector('.user-results').insertAdjacentHTML('beforeend', domUpdates.createBookingCards(booking, roomData));
  });
  addCancelRoomsEventListener();
}

function cancelARoom(e) {
  let roomNumber = parseInt(e.target.id);
  let userID = customer.id;
  let date = e.target.value;
  if(domUpdates.compareDates(date)) {
    alert("You cannot cancel a booking from the past");
    return;
  }
  let booking = getBookingData(date, roomNumber, userID);
  checkWhatToCancel(booking);
  alert("You've successfuly canceled a room!")
}

function getBookingData(date, roomNumber, userID) {
  let formattedDate = date.split(/[-]+/).join('/');
  let booking = bookingData.find(booking => booking.roomNumber === roomNumber && booking.userID === userID && booking.date === formattedDate);
  return booking;
}

function checkWhatToCancel(booking) {
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

function addBookedRoomsEventListener() {
  let bookRoomButtons = document.getElementsByClassName('book-room');
  for(let i=0; i < bookRoomButtons.length; i++) {
    bookRoomButtons[i].addEventListener('click', bookARoom);
  }
}

function addCancelRoomsEventListener() {
  let cancelRoomButtons = document.getElementsByClassName('cancel-room');
  for(let i=0; i < cancelRoomButtons.length; i++) {
    cancelRoomButtons[i].addEventListener('click', cancelARoom);
  }
}
