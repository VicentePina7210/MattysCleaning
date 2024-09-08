var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
  // Optionally, you can randomize testimonials by shuffling them on page load
  function shuffleTestimonials() {
    let slides = document.querySelectorAll('.swiper-slide');
    for (let i = slides.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      slides[i].parentNode.insertBefore(slides[j], slides[i].nextSibling);
    }
  }
  
  document.addEventListener("DOMContentLoaded", shuffleTestimonials);
  
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