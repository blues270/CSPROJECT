function generateTicket(bookingData) {
    const ticket = {
        name: bookingData.username,
        ticketNumber: bookingData.booking_id,
        from: bookingData.departure_city,
        to: bookingData.destination_city,
        date: bookingData.travel_date,
        class: "ECONOMY",
        gate: "A" + Math.floor(Math.random() * 10 + 1),
        flight: "BB" + Math.floor(Math.random() * 1000),
        boardingTime: "11:00",
        seat: "A" + Math.floor(Math.random() * 30 + 1)
    };

    const ticketHTML = `
        <div class="ticket" style="
            border: 2px solid #333;
            border-radius: 15px;
            padding: 20px;
            width: 800px;
            margin: 20px auto;
            background: #fff;
            font-family: 'Arial', sans-serif;
            color: #000;
            display: flex;
            justify-content: space-between;
            background-color: #B0C4DE;
        ">
            <div class="ticket-main" style="flex: 2; padding-right: 20px; border-right: 2px dashed #333;">
                <h2 style="text-align: center; margin-bottom: 20px; background-color: #B0C4DE; padding: 10px;">BOARDING PASS</h2>
                <div style="display: grid; grid-template-columns: 1fr; gap: 10px;">
                    <div style="display: flex; justify-content: space-between;">
                        <div>
                            <p><strong>NAME:</strong> ${ticket.name}</p>
                            <p><strong>FROM:</strong> ${ticket.from}</p>
                            <p><strong>TO:</strong> ${ticket.to}</p>
                        </div>
                        <div style="text-align: right;">
                            <p><strong>DATE:</strong> ${ticket.date}</p>
                            <p><strong>CLASS:</strong> ${ticket.class}</p>
                        </div>
                    </div>
                    <div style="display: flex; justify-content: space-between; margin-top: 20px;">
                        <p><strong>GATE:</strong> ${ticket.gate}</p>
                        <p><strong>FLIGHT №:</strong> ${ticket.flight}</p>
                        <p><strong>BOARDING TIME:</strong> ${ticket.boardingTime}</p>
                        <p><strong>SEAT:</strong> ${ticket.seat}</p>
                    </div>
                </div>
            </div>
            <div class="ticket-stub" style="flex: 1; padding-left: 20px;">
                <h2 style="text-align: center; margin-bottom: 20px; background-color: #B0C4DE; padding: 10px;">BOARDING PASS</h2>
                <p><strong>NAME:</strong> ${ticket.name}</p>
                <p><strong>FROM:</strong> ${ticket.from}</p>
                <p><strong>TO:</strong> ${ticket.to}</p>
                <div style="margin-top: 20px;">
                    <p><strong>DATE:</strong> ${ticket.date}</p>
                    <p><strong>TIME:</strong> ${ticket.boardingTime}</p>
                    <p><strong>CLASS:</strong> ${ticket.class}</p>
                </div>
                <div style="margin-top: 20px;">
                    <p><strong>GATE:</strong> ${ticket.gate}</p>
                    <p><strong>FLIGHT:</strong> ${ticket.flight}</p>
                    <p><strong>SEAT:</strong> ${ticket.seat}</p>
                </div>
            </div>
        </div>
    `;
  return ticketHTML;
}