function trackShipment() {
    var trackingNumber = document.getElementById("tracking-number").value;
    var resultDiv = document.getElementById("tracking-result");

    // Example response (You can replace this with an actual API call to get tracking information)
    if (trackingNumber === "123456789") {
        resultDiv.innerHTML = "<p>Your shipment is on the way! Estimated delivery: 2 days.</p>";
    } else if (trackingNumber === "") {
        resultDiv.innerHTML = "<p>Please enter a tracking number.</p>";
    } else {
        resultDiv.innerHTML = "<p>Tracking number not found. Please try again.</p>";
    }
}
