function checkPassword(event) {
      // Prevent the form from submitting
      event.preventDefault();

      // Object holding the correct password
      const userData = {
        correctPassword: 'Password123?'
      };

      // Get the value from the password input field
      const enteredPassword = document.getElementById('passGeslo').value;

      // Check if the entered password matches the correct password
      if (enteredPassword === userData.correctPassword) {
        document.getElementById('message').style.color = 'green';
        document.getElementById('message').textContent = 'Password is correct!';
      } else {
        document.getElementById('message').style.color = 'red';
        document.getElementById('message').textContent = 'Incorrect password!';
      }
    }

    document.getElementById('passwordForm').addEventListener('submit', checkPassword);