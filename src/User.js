import {fetchApi} from './fetchAPI';

class User {
  constructor(roomData, bookingData, userData) {
    this.bookings = bookingData;
    this.rooms = roomData;
    this.totalSpent = 0;
    this.userData = userData;
  }
  searchAvailibility(date) {
    let formattedDate = date.split(/[-]+/).join('/');
    console.log('F', formattedDate)
    let bookedRoomNumbers = this.bookings.reduce((bookingNumbers, booking) => {
      if (booking.date === formattedDate) {
        bookingNumbers.push(booking.roomNumber)
      }
      return bookingNumbers;
    }, []);
   let searchResults = this.rooms.filter(room => !bookedRoomNumbers.includes(room.number));
   return searchResults;
  }
  findBookedRooms(date) {
    let formattedDate = date.split(/[-]+/).join('/');
    console.log('F', formattedDate)
    let bookedBookings = this.bookings.reduce((totalBookings, booking) => {
      booking.date === formattedDate ? totalBookings.push(booking) : null;
      return totalBookings;
    }, []);
    console.log(bookedBookings)
    return bookedBookings;
  }
  bookRoom(roomNumber, user, date) {
    let roomBooked = this.bookings.find(booking => booking.roomNumber === roomNumber && booking.userID === user.id && booking.date === date)
    // fetchApi.postBookingData(roomBooked);
    return roomBooked;

  }
  cancelRoom(roomNumber, user, date) {
    let canceledRoom = this.bookings.find(booking => booking.roomNumber === roomNumber && booking.userID === user.id && booking.date === date)
    // fetchApi.deleteBookingData(canceledRoom);
    return canceledRoom;
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
  getUserBookings(userID) {
    let userBookings = this.bookings.filter(booking => booking.userID === userID);
    return userBookings;
  }
};

export default User;
