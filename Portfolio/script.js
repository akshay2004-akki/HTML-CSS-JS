// Sticky Navigation Menu JS Code
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }

}

// Side NavIgation Menu JS Code
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = function(){
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
}
cancelBtn.onclick = function(){
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
}

// Side Navigation Bar Close While We Click On Navigation Links
let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click" , function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
}

//lets chat button
const box=document.querySelector('.boxx');
const send=document.querySelector('.send');

send.addEventListener('click', function(){
  box.textContent=null;
  alert("Message sent !");
})

// fade in JS


const fadeElements = document.querySelectorAll('.fade-in');

function checkScroll() {
  for (const element of fadeElements) {
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;

    if (elementTop < window.innerHeight && elementBottom >= 0) {
      // Introduce a delay using setTimeout
      setTimeout(() => {
        element.style.opacity = 1;
        element.style.transform = 'translateY(0)';
      }, 400); // Adjust the delay time (in milliseconds) as needed
    } else {
      element.style.opacity = 0;
      element.style.transform = 'translateY(10px)';
    }
  }
}


window.addEventListener('scroll', checkScroll);

checkScroll();

// image slider JS

const slider = document.querySelector('.slider');
const slides = slider.querySelector('.slides');
const images = slides.querySelectorAll('img');
const navigationDots = document.querySelectorAll('.slider-dot');
let currentIndex = 0;
let touchStartX = 0;
let slideIndex = 0;

// Function to show a specific slide with smooth transition
function showSlide(index) {
  slides.style.transition = 'transform 0.5s ease'; // Add a transition effect
  slides.style.transform = `translateX(-${index * 100}%)`;

  // Update the active dot
  navigationDots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });

  // Remove the transition after a brief delay
  setTimeout(() => {
    slides.style.transition = 'none';
  }, 500); // Wait for the transition to complete
}

// Function to automatically slide
function autoSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  showSlide(currentIndex);
}

// Start the automatic slide show
autoSlideInterval = setInterval(autoSlide, 3000); // Change image every 3 seconds

// Click event for navigation dots
navigationDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    clearInterval(autoSlideInterval); // Stop auto-sliding on dot click
    currentIndex = index;
    showSlide(currentIndex);
    autoSlideInterval = setInterval(autoSlide, 3000); // Restart auto-sliding
  });
});

// ... (Rest of your swipe and touch event handling code)

// hover button in project section
