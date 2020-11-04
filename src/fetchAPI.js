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
  deleteBookingData() {

  },
  postBookingData() {

  }
};

export {fetchAPIs};
