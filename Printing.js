document.getElementById('ticketForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Retrieve user input
  const name = document.getElementById('name').value;
  const flight = document.getElementById('flight').value;
  const departure = document.getElementById('departure').value;
  const arrival = document.getElementById('arrival').value;
  const date = document.getElementById('date').value;
  const seat = document.getElementById('seat').value;

  // Display ticket details
  document.getElementById('ticketName').textContent = name;
  document.getElementById('ticketFlight').textContent = flight;
  document.getElementById('ticketDeparture').textContent = departure;
  document.getElementById('ticketArrival').textContent = arrival;
  document.getElementById('ticketDate').textContent = date;
  document.getElementById('ticketSeat').textContent = seat;

  // Show the ticket
  document.getElementById('ticket').style.display = 'block';
});
