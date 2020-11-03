import User from './User';
class Manager extends User {
  constructor(roomData, bookingData) {
    super(roomData, bookingData);
    this.userData = userData;
  }
  searchUsers(userID) {
    let user = userData.find(user => user.id === userID)
    return user;
  }
};
export default Manager;
