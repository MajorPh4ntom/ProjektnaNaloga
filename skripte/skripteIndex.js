// JavaScript preveri mail in password na submit
    function preveriVnose(event) {
      // prava mail in password v objektu
      const upoPodatki = {
        pravoGeslo: 'Password123?',
        praviMail: 'Janez.Jansa@hotmail.com'
      };

      // uzemi vnose iz polj
      const vnesenoGeslo = document.getElementById('passGeslo').value;
      const vnesenMail = document.getElementById('passMail').value;

      // preveri ce se mail in password ujemata objektom
      if (vnesenoGeslo !== upoPodatki.pravoGeslo || vnesenMail !== upoPodatki.praviMail) {
        // ce email in geslo nista enaka opozori preko alerta
        event.preventDefault();
        alert('Email ali geslo se ne ujemata!');
      } else {
        // email in geslo se ujemata, vrzi na formo
        alert('Prijava uspešna!');
        document.querySelector('form').action = 'strani/forma.html';
      }
    }

    // das funkcijo na gumb prijava
    window.onload = function () {
      document.getElementById('prijava').addEventListener('click', preveriVnose);
    };