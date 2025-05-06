// Example ticket data
const ticketData = {
  BK001: {
    name: "Jane Doe",
    event: "Comedy Night",
    seat: "A12",
    date: "2025-06-10",
  },
  BK002: {
    name: "John Smith",
    event: "Rock Concert",
    seat: "B5",
    date: "2025-06-12",
  }
};

// Function to show ticket info
function viewTicket(bookingId) {
  const ticket = ticketData[bookingId];
  if (ticket) {
    const info = `
      <strong>Name:</strong> ${ticket.name}<br>
      <strong>Event:</strong> ${ticket.event}<br>
      <strong>Seat:</strong> ${ticket.seat}<br>
      <strong>Date:</strong> ${ticket.date}
    `;
    document.getElementById("ticketInfo").innerHTML = info;
    document.getElementById("ticketModal").style.display = "block";
  } else {
    alert("Ticket not found.");
  }
}

// Function to close the modal
function closeModal() {
  document.getElementById("ticketModal").style.display = "none";
}
