window.onload = function(){

  setTimeout(function(){
    document.getElementById("splash").style.opacity = "0";

    setTimeout(function(){
      document.getElementById("splash").style.display = "none";
    }, 500);

  }, 2200); // logo visible time

};

// Booking confirmation without refresh
const form = document.getElementById("bookingForm");

if(form){
  form.addEventListener("submit", function(e){
    e.preventDefault(); // stop page refresh

    document.getElementById("bookingMsg").style.display = "block";

    form.reset(); // clear form
  });
}

function sendToWhatsApp(){
  const name = document.querySelector(".booking-form input[type='text']").value;
  const phone = document.querySelector(".booking-form input[type='tel']").value;
  const service = document.querySelector(".booking-form select").value;

  if(name === "" || phone === "" || service === ""){
    alert("Please fill all details");
    return;
  }

  const adminNumber = "919791525688";

  const message = `New Booking Request%0A%0AName: ${name}%0APhone: ${phone}%0AService: ${service}`;

  window.open(`https://wa.me/${adminNumber}?text=${message}`, "_blank");

  document.getElementById("bookingMsg").style.display = "block";
}
function sendToWhatsApp(){
  const name = document.querySelector(".booking-form input[type='text']").value;
  const phone = document.querySelector(".booking-form input[type='tel']").value;
  const service = document.querySelector(".booking-form select").value;

  if(name === "" || phone === "" || service === ""){
    alert("Please fill all details");
    return;
  }

  const adminNumber = "919791525688"; 

  const message = `New Booking Request%0A%0AName: ${name}%0APhone: ${phone}%0AService: ${service}`;

  window.open(`https://wa.me/${adminNumber}?text=${message}`, "_blank");

  document.getElementById("bookingMsg").style.display = "block";
}
function sendEnquiryToWhatsApp() {

  const name = document.querySelector(".enquiry-form input[type='text']").value;
  const phone = document.querySelector(".enquiry-form input[type='tel']").value;
  const message = document.querySelector(".enquiry-form textarea").value;

  if (name === "" || phone === "") {
    alert("Please fill your name and phone number");
    return;
  }

  const adminNumber = "919791525688"; // 🔴 change to YOUR WhatsApp number

  const text =
    `New Enquiry from Contact Page%0A%0A` +
    `Name: ${name}%0A` +
    `Phone: ${phone}%0A` +
    `Message: ${message}`;

  window.open(
    `https://wa.me/${adminNumber}?text=${text}`,
    "_blank"
  );
}

// Services dropdown - mobile support
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    const menu = link.nextElementSibling;
    menu.style.display =
      menu.style.display === "block" ? "none" : "block";
  });
});


// FAQ toggle
document.querySelectorAll(".faq-question").forEach(btn => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    answer.style.display =
      answer.style.display === "block" ? "none" : "block";
  });
});

