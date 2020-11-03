import User from './User';
class Manager extends User {
  constructor(roomData, bookingData, userData) {
    super(roomData, bookingData, userData);
  }
  searchUsers(userID) {
    let user = userData.find(user => user.id === userID)
    return user;
  }
};
export default Manager;
