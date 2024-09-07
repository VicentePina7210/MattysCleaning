//example of sending the email with the api
// function sendEmail() {
//     Email.send({
// Host : "smtp.elasticemail.com",
// Username : "username",
// Password : "password",
// To : 'them@website.com',
// From : "you@isp.com",
// Subject : "This is the subject",
// Body : "And this is the body"
// }).then(
// message => alert(message)
// );
// }

const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const address = document.getElementById('address');
const submit = document.getElementsByClassName('form')[0];
const additionalInfo = document.getElementById('additional-info');

submit.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log("Clicked Submit")
let ebody = `
<h1>Request</h1>
<br>
<b>Name: </b>${fname.value}&nbsp;${lname.value}
<br>
<b>Email: ${email.value} </b>
<br>
<b>Phone Number: </b>${phone.value}
<br>
<b>Additional info: </b>${additionalInfo.value}
<br></br>
`
    Email.send({
        SecureToken : "Goes here :)",
        To : 'mattygonzlez@gmail.com',
        From : "mattygonzlez@gmail.com",
        Subject : "Cleaning Quote Request from: " + email.value,
        Body : ebody
    }).then(
      message => alert(message)
    );
})