For our website to be compatible in saving user data on a server. We will
start introducing persistent user storage, that would essentially allow users
to revisit any travel booking log or manage transactions for buying tickets.
This would ensure that users would be able to log their booking history, retrieve
any lost/bought tickets and check up with their travel plan dates. If we are successful
in creating this data storage system for our website, the user's would have an easier
and smoother experience when handling our website.

The Plan is that, we would create 2 Main Webpages, "User Log in Credentials (index.html)", and "Booking Management".
"User Log in Credentials", would be the webpage responsible for letting users, 1st log in to our website
with ther credentials, and then it would also allow the user's to view, check and select their travel
destinations. "Booking Management", would be the webpage responsible for handling flight searches, ticket
selection and booking process for flights

Data that would be saved:

1. Type of Data - Travel Dashboard
   Purpose: To save the Booking Details of an user and to let the user
   search, book
   structure in JSON format:
   {
   "user_id": "text-string",
   "booking_id": "text-string",
   "departure_city": "text-string",
   "destination_city": "text-string",
   "travel_date": "ISO 8601 datetime string",
   "ticket_price": "decimal",
   "payment_status": "paid/pending/cancelled",
   "seat_number": "text-string"
   }

2. Type of Data - User Account
   Purpose: To let the user make an acoount, log in and access their travel dashboard
   structure in JSON format:
   {
   "user_id": "text-string",
   "username": "text-string",
   "password": "hashed-text-string",
   "email": "email-formatted-text-string",
   "profile_picture": "text-link-to-the-uploaded-pix"
   }

![Alt text](https://cdn.glitch.global/d76985b4-9558-442d-9584-0aa5a5f79119/Username.png)
![Alt text](https://cdn.glitch.global/d76985b4-9558-442d-9584-0aa5a5f79119/Username%20(1).png?v=1743093687412)

          