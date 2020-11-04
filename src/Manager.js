import User from './User';
class Manager extends User {
  constructor(roomData, bookingData, userData) {
    super(roomData, bookingData, userData);
  }
  searchUsers(userID) {
    let usersData = this.bookings.filter(booking => booking.userID === userID);
    return usersData;
  }
};
export default Manager;
