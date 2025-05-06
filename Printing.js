function generateTicket(bookingData) {
    const ticket = {
        name: bookingData.username,
        ticketNumber: bookingData.booking_id,
        origin: bookingData.departure_city,
        destination: bookingData.destination_city,
        dateOfFlight: bookingData.travel_date,
        baggageAllowance: "20 lbs",
        seatAssignment: "A" + Math.floor(Math.random() * 30 + 1),
        paymentMethod: bookingData.payment_status,
        ticketPrice: `$${bookingData.ticket_price}`
    };

    const ticketHTML = `
        <div class="ticket" style="
            border: 2px solid #333;
            padding: 20px;
            width: 400px;
            margin: 20px auto;
            background: #fff;
            font-family: 'Arial', sans-serif;
        ">
            <div style="text-align: center; margin-bottom: 20px;">
                <h2>Budget Breeze Airlines</h2>
                <h3>Boarding Pass</h3>
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                <p><strong>Passenger:</strong> ${ticket.name}</p>
                <p><strong>Ticket #:</strong> ${ticket.ticketNumber}</p>
                <p><strong>From:</strong> ${ticket.origin}</p>
                <p><strong>To:</strong> ${ticket.destination}</p>
                <p><strong>Date:</strong> ${ticket.dateOfFlight}</p>
                <p><strong>Seat:</strong> ${ticket.seatAssignment}</p>
                <p><strong>Baggage:</strong> ${ticket.baggageAllowance}</p>
                <p><strong>Payment:</strong> ${ticket.paymentMethod}</p>
                <p><strong>Price:</strong> ${ticket.ticketPrice}</p>
            </div>
        </div>
    `;

    return ticketHTML;
}
