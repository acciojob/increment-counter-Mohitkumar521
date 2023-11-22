//your JS code here. If required.
  document.addEventListener('DOMContentLoaded', function () {
      // Get elements by their IDs
      var counterElement = document.getElementById('counter');
      var incrementBtn = document.getElementById('incrementBtn');

      // Initialize counter value
      var counterValue = 0;

      // Function to handle button click
      function handleIncrement() {
        // Display the un-incremented value in an alert
        alert('Un-incremented value: ' + counterValue);

        // Increment the counter value
        counterValue++;

        // Update the counter display
        counterElement.textContent = counterValue;
      }

      // Attach the handleIncrement function to the button click event
      incrementBtn.addEventListener('click', handleIncrement);
    });