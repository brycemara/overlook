import User from './User';
class Customer extends User {
  constructor(roomData, bookingData, userData, userDetails) {
    super(roomData, bookingData, userData);
    this.id = userDetails.id;
    this.name = userDetails.name;
  }
  filterByRoomType(roomType, roomsArray) {
    const filteredRooms = roomsArray.filter(room => room.roomType === roomType);
    return filteredRooms;
  }
};

export default Customer;
