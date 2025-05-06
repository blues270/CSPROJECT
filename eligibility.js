function checkRefundEligibility() {
  // Get form values
  const formData = {
    "Refunding One Day before Flight": document.getElementById("oneDayBefore").value,
    "Unable to Travel due to Health": document.getElementById("healthIssue").value,
    "Favorable Weather": document.getElementById("goodWeather").value
  };

  // Determine eligibility
  let messages = [];
  let eligible = true;

  if (formData["Refunding One Day before Flight"] === "Y") {
    messages.push(" Not Eligible: Refunding one day before flight.");
    eligible = false;
  } else {
    messages.push(" OK: Not refunding one day before flight.");
  }

  if (formData["Unable to Travel due to Health"] === "Y") {
    messages.push(" Not Eligible: Health issues not covered.");
    eligible = false;
  } else {
    messages.push(" OK: No health issue preventing travel.");
  }

  if (formData["Favorable Weather"] === "Y") {
    messages.push(" Eligible: Weather conditions are favorable.");
  } else {
    messages.push(" Not Eligible: Unfavorable weather.");
    eligible = false;
  }

  // Display result in modal
  const finalMsg = eligible
    ? " You are eligible for a refund.<br><br>" + messages.join("<br>")
    : " You are NOT eligible for a refund.<br><br>" + messages.join("<br>");

  document.getElementById("refundResult").innerHTML = finalMsg;
  document.getElementById("refundModal").style.display = "block";
}

function closeRefundModal() {
  document.getElementById("refundModal").style.display = "none";
}
