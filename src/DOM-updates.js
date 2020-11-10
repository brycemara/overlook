
let domUpdates = {
  addBookedRoomsEventListener() {
    let bookRoomButtons = document.getElementsByClassName('book-room');
    for(let i=0; i < bookRoomButtons.length; i++) {
      bookRoomButtons[i].addEventListener('click', bookARoom);
    }
  },
  cancelRoomsEventListener() {
    let cancelRoomButtons = document.getElementsByClassName('cancel-room');
    for(let i=0; i < cancelRoomButtons.length; i++) {
      cancelRoomButtons[i].addEventListener('click', cancelARoom);
    }
  },
  customerDisplayLogin(customer) {
    document.querySelector('.login-form').classList.add('hidden');
    document.querySelector('.customer-dashboard').classList.remove('hidden');
    document.querySelector('.welcome').innerText = `Welcome ${customer.name}, to the Hotel California!`
    document.querySelector('.customer-spending').innerText = `$${customer.totalSpent}`;
    searchResults.innerHTML = "<h4> Please select a room type and date to search available bookings!</h4>";
    domUpdates.customerBookingsDisplay(customer, roomData);
  },
  customerBookingsDisplay(customer, roomData) {
    let customerBookings = customer.getUserBookings(customer.id)
    customerBookings.forEach((booking) => {
      document.querySelector('.user-bookings').insertAdjacentHTML('beforeend', createBookingCards(booking, roomData));
    });
    domUpdates.cancelRoomsEventListener();
  },
  displayUpdatedCustomerBookings(customer, bookingData) { ///////////******/////////////
    document.querySelector('.user-bookings').innerHTML = ""
    customer.bookings = bookingData;
    domUpdates.customerBookingsDisplay(customer);
  },
  displayManagerLogin() {
    document.querySelector('.login-form').classList.add('hidden');
    document.querySelector('.manager-dashboard').classList.remove('hidden');
    domUpdates.displayCalculatedRevenue(manager);
    domUpdates.displayedPercentOccupied(manager);
  },
  displayCalculatedRevenue(manager) {
    let date = domUpdates.getTodaysDate();
    let revenue = manager.calculateDailyRevenue(date);
    document.querySelector('.revenue-today').innerText = `$${revenue}`;
  },
  displayedPercentOccupied(manager) {
    let date = domUpdates.getTodaysDate();
    document.querySelector('.percent-occupied').innerText = `${manager.getPercentOccupied(date)}%`;
  },
  // displaySearchedCustomer() {
  //   let user = domUpdates.getCusomterInfo('customer-name');
  //   if (userData.includes(user)) {
  //     customer = new Customer(roomData, bookingData, userData, user)
  //     domUpdates.displayCustomerBookings();
  //   } else {
  //     document.querySelector('.user-results').innerHTML = "";
  //     alert('Customer infomation not found.')
  //   }
  // }
  displayCustomerBookings(customer, roomData) {
    let customerBookings = customer.getUserBookings(customer.id);
    customerBookings.forEach((booking) => {
      document.querySelector('.user-results').insertAdjacentHTML('beforeend', domUpdates.createBookingCards(booking, roomData));
    });
    domUpdates.cancelRoomsEventListener();
  },
  // displayAvaiableRooms() {
  //   let user = getCusomterInfo('customer-name-avaiable');
  //   customer = new Customer(roomData, bookingData, userData, user)
  //   let date = document.getElementById('avaiable-rooms-date').value;
  //   let avaibleRooms = manager.searchAvailibility(date);
  //   avaibleRooms.forEach((room) => {
  //     document.querySelector('.avaiable-results').insertAdjacentHTML('beforeend', domUpdates.createRoomBlocks(room, date));
  //   });
  //   domUpdates.addBookedRoomsEventListener();
  // }
  displayUpdatedAvaiableRooms(customer, bookingData) {///////////******/////////////
    document.querySelector('.avaiable-results').innerHTML = "";
    customer.bookings = bookingData;
    domUpdates.displayAvaiableRooms();
  },
  displayUpdatedSearchedCustomer(customer, bookingData) {///////////******/////////////
    document.querySelector('.user-results').innerHTML = "";
    customer.bookings = bookingData;
    domUpdates.displayCustomerBookings(customer);
  },
  getTodaysDate() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    today = yyyy + '/' + mm + '/' + dd;
    return today;
  },
  createRoomBlocks(room, date) {
    const roomBlock =
    `<div class="avaiable-room">
      <img id="room-image" src="https://placeimg.com/250/175/any" alt="Room">
      <h3 id="room-image-name-card">${room.roomType} #${room.number}</h3>
      <p  class="room-image-price">This room has ${room.numBeds} ${room.bedSize} beds. The price of this room is $${room.costPerNight} per night.</p>
      <button id=${room.number} class="book-room" type="button">Book Room</button>
    </div>`
    return roomBlock;
  },
  createBookingCards(booking, roomData) {
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
  },
  updateSearchResultsCount(resultsCount) {
    document.querySelector('.results-count').innerText = `${resultsCount} Results`;
  },
}

export {domUpdates};
