// Hamburger toggle
const hamburger = document.getElementById("hamburger");
const navbar = document.querySelector(".navbar");

if (hamburger) {
  hamburger.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });
}

// Navbar Contact button scrolls to Enquiry section
const navContactBtn = document.querySelector('.navbar a[href="#enquirySection"]');
if(navContactBtn){
  navContactBtn.addEventListener('click', (e) => {
    e.preventDefault();
    enquiryBtn.scrollIntoView({behavior: 'smooth'});
  });
}
