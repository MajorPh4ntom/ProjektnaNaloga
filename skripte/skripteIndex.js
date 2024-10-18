// JavaScript to check email and password on submit
    function preveriVnose(event) {
      // The correct password and email stored in the object
      const upoPodatki = {
        pravoGeslo: 'Password123?',
        praviMail: 'Janez.Jansa@hotmail.com'
      };

      // Get the value from the password and email input fields
      const vnesenoGeslo = document.getElementById('passGeslo').value;
      const vnesenMail = document.getElementById('passMail').value;

      // Check if the entered password and email match the stored values
      if (vnesenoGeslo !== upoPodatki.pravoGeslo || vnesenMail !== upoPodatki.praviMail) {
        // If either the email or password doesn't match, alert the user and prevent form submission
        event.preventDefault();
        alert('Email ali geslo se ne ujemata!');
      } else {
        // Both email and password match, allow form submission
        alert('Prijava uspešna!');
        document.querySelector('form').action = 'strani/forma.html';
      }
    }

    // das funkcijo na 
    window.onload = function () {
      document.getElementById('prijava').addEventListener('click', preveriVnose);
    };