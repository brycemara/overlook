import User from './User';
class Customer extends User {
  constructor(roomData, bookingData) {
    super(roomData, bookingData);
    this.userData = userData;
    this.userBookings = [];
  }
  selectDate(date) {
    let bookingsByDate = this.bookingData.filter(booking => booking.date === date);
    return bookingsByDate;
  }
  filterByRoomType(roomType) {
    const roomsAvailable = this.roomTypes.forEach(room => {
      return bookingsByDate.filter(booking => booking.roomNumber === room.number);
    })
    return roomsAvailable;
  }
};

export default Customer;
