import User from './User';
class Customer extends User {
  constructor(roomData, bookingData, userData, userDetails) {
    super(roomData, bookingData, userData);
    this.id = userDetails.id;
    this.name = userDetails.name;
  }
  filterByRoomType(numBeds, roomsArray) {
    const filteredRooms = roomsArray.filter(room => room.numBeds === numBeds);
    return filteredRooms;
  }
  getUserBookings() {
    let userBookings = this.bookings.filter(booking => booking.userID === this.id);
    return userBookings;
  }
};

export default Customer;
