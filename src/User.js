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
    let room = this.bookings.find(booking => booking.roomNumber === roomNumber)
    this.bookings.push({
      "id": "5fwrgu4i7k55hl6sx",
      "userID": user.id,
      "date": date,
      "roomNumber": roomNumber,
      "roomServiceCharges": []
      })
    // return 'You have booked this room on this date'
    // call POST Data Function from fetchAPI object
  }
  cancelRoom(roomNumber, date) {
    let room = this.bookings.find(booking => booking.roomNumber === roomNumber && booking.date === date);
    let index = this.bookings.indexOf(room);
    this.bookings.splice(index, 1)
    // return 'You have deleted this bookingon this date'
    // call DELETE data function from fetchAPI object
  }
  calculateTotalAmountSpent(userID) {
    let userBookings = this.bookings.filter(booking => booking.userID === userID)
    let totalAmountSpentOnRoomService = userBookings.reduce((totalSpent, booking) => {
        booking.roomServiceCharges.forEach(charge => {
          totalSpent += charge;
        })
      return totalSpent;
    }, 0);
    let totalAmountSpentOnRoom = userBookings.reduce((totalSpent, booking) => {
      let room = this.rooms.find(room => booking.roomNumber === room.number);
        totalSpent += room.costPerNight;
      return totalSpent
    }, 0);
    return totalAmountSpentOnRoom;
  }
};

export default User;
