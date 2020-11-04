class User {
  constructor(roomData, bookingData, userData) {
    this.bookings = bookingData;
    this.rooms = roomData;
    this.totalSpent = 0;
    this.userData = userData;
  }
  searchAvailibility(date) {
    let bookedRoomNumbers = this.bookings.reduce((bookingNumbers, booking) => {
      if (booking.date === date) {
        bookingNumbers.push(booking.roomNumber)
      }
      return bookingNumbers;
    }, []);
   return this.rooms.filter(room => !bookedRoomNumbers.includes(room.number))
  }
  bookRoom(roomNumber, user, date) {
    let roomBooked = this.bookings.find(booking => booking.roomNumber === roomNumber && booking.userID === user.id && booking.date === date)
    return roomBooked;
    // return 'You have booked this room on this date'
    // call POST Data Function from fetchAPI object
  }
  cancelRoom(roomNumber, user, date) {
    let canceledRoom = this.bookings.find(booking => booking.roomNumber === roomNumber && booking.userID === user.id && booking.date === date)
    return canceledRoom;
    // return 'You have deleted this bookingon this date'
    // call DELETE data function from fetchAPI object
  }
  calculateTotalAmountSpent(bookingData) {
    this.totalSpent = bookingData.reduce((totalSpent, booking) => {
      this.rooms.forEach(room => {
        if(booking.roomNumber === room.number) {
          totalSpent += room.costPerNight;
        }
      });
      return totalSpent;
    }, 0);
    this.totalSpent = (this.totalSpent).toFixed(2)
  }
};

export default User;
