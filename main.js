

// Creare un array contenente una lista di email.
// Attraverso un prompt chiedere all'utente la sua email.
// Controllare se l'email dell'utente è presente nell'array e stampare un messaggio appropriato.
var listamail = ['luca@mail.it','marco@mail.it', 'giovanni@mail.com'];
console.log(listamail);
var mail = prompt('digita la tua email');
console.log(mail);
console.log(listamail.length);

var email_corretta = false;

for (var i = 0; i < listamail.length; i++) {
  console.log('elemento nella lista numero' +i);
  var usermail = listamail[i];
  console.log(usermail);
  if (usermail == mail) {
    console.log('presente in lista');
    email_corretta = true;

  }
}
console.log('in lista' + email_corretta);
