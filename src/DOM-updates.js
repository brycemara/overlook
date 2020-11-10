let domUpdates = {
  displayManagerLogin(manager) {
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
  updateCustomerSpending(customer) {
    let customerData = customer.getUserBookings(customer.id);
    customer.calculateTotalAmountSpent(customerData);
    document.querySelector('.customer-spending').innerText = `$${customer.totalSpent}`;
  },
  updateSpendingResultsCounter(customer) {
    let customerData = customer.getUserBookings(customer.id);
    customer.calculateTotalAmountSpent(customerData);
    document.querySelector('.spending-results').innerText = `${customer.name} has spent $${customer.totalSpent}.`
  }
}

export {domUpdates};
