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
  getPercentOccupied(date) {
    let roomsAvilable = this.searchAvailibility(date);
    let amount = (this.bookings.length - roomsAvilable.length) / this.bookings.length;
    return (amount * 100).toFixed(2);
  }
  calculateDailyRevenue(date) {
    let bookedRoomNumbers = this.findBookedRooms(date);
    let bookedRooms = this.rooms.filter(room => !bookedRoomNumbers.includes(room.number));
    let revenue = bookedRooms.reduce((totalReveune, room) => {
      totalReveune += room.costPerNight;
      return totalReveune;
    }, 0);
    return revenue;
  }
};
export default Manager;
