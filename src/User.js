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
    let bookedBookings = this.bookings.reduce((totalBookings, booking) => {
      booking.date === formattedDate ? totalBookings.push(booking) : null;
      return totalBookings;
    }, []);
    return bookedBookings;
  }
  // bookRoom(roomNumber, userID, date) {
  //   // let formattedDate = date.split(/[-]+/).join('/');
  //   // alert(`You have booked a room on ${date}.`)
  //   // return fetchApi.postBookingData(roomNumber, userID, formattedDate);
  // }
  // cancelRoom(roomNumber, userID, date) {
  //   let formattedDate = date.split(/[-]+/).join('/');
  //   return this.bookings.find(booking => booking.roomNumber === roomNumber && booking.userID === userID && booking.date === formattedDate)
  //   // alert(`You have deleted your booking on ${date}.`)
  //   // return fetchApi.deleteBookingData(canceledRoom);
  // }
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
