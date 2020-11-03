class User {
  constructor(roomData, bookingData) {
    this.availibleBookings = bookingData;
    this.roomTypes = roomData;
    this.rentedBookings = [];
    this.totalSpent = 0;
  }
  searchAvailibility(date) {
    let searchResults = bookingData.filter(booking => !this.rentedBookings.includes(booking));
    return searchResults;
  }
  bookRoom(room) {
    let index = this.availibleBookings.getIndexOf(room);
    this.availibleBookings.splice(index, 1);
    this.rentedBookings.push(room);
    // call POST Data Function from fetchAPI object
  }
  cancelRoom(room) {
    let index = this.rentedBookings.getIndexOf(room);
    this.rentedBookings.splice(index, 1);
    this.availibleBookings.push(room);
    // call DELETE data function from fetchAPI object
  }
  calculateTotalAmountSpent() {
    let totalAmountSpent = this.rentedBookings.reduce((totalSpent, booking) => {
      booking.roomServiceCharges.forEach(charge => {
        totalSpent += charge;
      })
      return totalSpent;
    }, 0);
    return totalAmountSpent;
  }
};

export default User;
