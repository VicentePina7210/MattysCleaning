
let scrollContainer = document.querySelector(".review-bar");
let arrowLeft = document.getElementById("arrowLeft");
let arrowRight = document.getElementById("arrowRight");



scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;

});

arrowRight.addEventListener("click", ()=>{
    scrollContainer.scrollLeft += 900;
});

arrowLeft.addEventListener("click", ()=>{
    scrollContainer.scrollLeft -= 900;
});
//the rest of the code is for handling the email API
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