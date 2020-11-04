let fetchApi = {
  fetchUserData() {
    let fetchedUsers = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users')
      .then(response => response.json())
      .then(data => data.users)
      .catch(error => console.log(error.message));
      return fetchedUsers;
  },
  fetchRoomData() {
    let fetchedRooms = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms')
    .then(response => response.json())
    .then(data => data.rooms)
    .catch(error => console.log(error.message));
    return fetchedRooms;
  },
  fetchBookingData() {
    let fetchedBookings = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings')
    .then(response => response.json())
    .then(data => data.bookings)
    .catch(error => console.log(error.message));
    return fetchedBookings;
  },
  deleteBookingData(booking) {
    let deletedData = fetch(`https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings/${booking.id}` , {
      method: 'DELETE',
    })
    return deletedData;
  },
  postBookingData(booking) {
    let newBooking = fetchApi.buildBookingData(booking);
    let postedData = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(newBooking)
      })
      .then(response => response.json())
      .catch(error => console.log(error.message))
    return postedData;
  },
  buildBookingData(booking) {
    let bookingObject = {
      userID : booking.userID,
      date : booking.date,
      roomNumber : booking.roomNumber
    }
    return bookingObject;
  }
};

export {fetchApi}
