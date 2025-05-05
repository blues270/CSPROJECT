4th Qtr:

To allow our website to save user data on a server, we are modifying the persistent user storage
system, which will have booking and account management functions.
Budget Breeze users will indeed be able to view complete
flight information such as fare, baggage allowance and seat assignments.
Users will also be able to view aspects such as fare construction, fare basis codes and
payment details which will give the look and feel of airline-standard e-tickets right
within our platform. If the data storage model gets implemented well, it will provide a
streamlined travel booking experience to users in a professional way and will mark
Budget Breeze reliable and user friendly.

The Plan is to make one minor webpages, a "No Refund Policy" that will display
a criteria for eligibity of refunding a ticket for restrictions and limitations of using the provided services.
With the three given criteria, the user will give a yes or no within limitations, there will be if-else conditions,
that can allow eligibity to refund the ticket given.

1. Type of Data - Flight Ticket Data
   Purpose: To save credentials and show a preview of your given data within a
   template of a ticket
   Structure in JSON Format:
   {
   "Name": "text-string",
   "Ticket_Number": "text-string"
   "Origin": "text-string"
   "Date of Flight": "text-string"
   "Destination": "text-string"
   "Baggage Allowance": "integer, lbs"
   "Seat Assignment": "text-string"
   "Payment Method": "Cash or Card"
   "Breakdown of Costs": "text-string"
   }

2. Type of Data - No Refund Policy
   Purpose: To display rules and limitations within the Services.html, that you can inquiry for a refund and a checklist or survey
   on why you refunded your ticket and if it is eligible to refund
   Structure in JSON Format:
   {
   "Refunding One Day before Flight": "Y/N"
   if "Refunding One Day before Flight" == "Y"{
   console.log("Not Eligible for Refund")
   } else {
   console.log("Eligible for Refund")
   }
   "Unable to Travel due to Health": "Y/N"
   if "Unable to Travel due to Health" == "Y"{
   console.log("Not Eligible for Refund")
   } else {
   console.log("Eligible for Refund")
   }
   "Favorable Weather": "Y/N"
   if "Favorable Weathert" == "Y"{
   console.log("Eligible for Refund")
   } else {
   console.log("Not Eligible for Refund")
   }
   }

---------------------------Old Plans---------------------------

3rd Qtr:

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

1. Type of Data - User Account
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
![Alt text](<https://cdn.glitch.global/d76985b4-9558-442d-9584-0aa5a5f79119/Username%20(1).png?v=1743093687412>)
