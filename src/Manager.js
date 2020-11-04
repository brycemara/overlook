import User from './User';
class Manager extends User {
  constructor(roomData, bookingData, userData) {
    super(roomData, bookingData, userData);
  }
  searchUsers(userName) {
    let user = this.userData.find(user => user.name === userName)
    let usersData = this.bookings.filter(booking => booking.userID === user.id);
    return usersData;
  }
};
export default Manager;
