// Hero animation on page load
window.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('.hero-text');
    if (hero) {
        // allow layout to settle
        setTimeout(() => {
            hero.classList.add('animate-hero');
        }, 300);
    }
});

// Navigation bar scroll effect
window.addEventListener("scroll", function () {
    const nav = document.getElementById("main-nav");
    if (nav) {
        if (window.scrollY > 50) { // Nav bar becomes visible after 50px of scroll
            nav.classList.add("scrolled");
        } else {
            nav.classList.remove("scrolled");
        }    
    }
});

// Active Page Highlight
document.addEventListener("DOMContentLoaded", () => {
    const currentPage = window.location.pathname.split("/").pop();
    const links = document.querySelectorAll("nav a");

    links.forEach(link => {
        if(link.getAttribute("href") === currentPage){
            link.classList.add("active");
        }
    });
});

// Footer Reveal on Scroll
document.addEventListener("DOMContentLoaded", () => {
    const footer = document.querySelector("footer");
    
    if (footer) {
        footer.classList.add("footer-reveal");
        
        function revealFooter() {
            const rect = footer.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                footer.classList.add("footer-visible");
                window.removeEventListener("scroll", revealFooter);    
            }
        }
        
        window.addEventListener("scroll", revealFooter);
        revealFooter(); // Check on load too
    }
});

// Donation form validation and submission
document.getElementById("donationForm").addEventListener("submit", function(e){
    e.preventDefault();

    let amount = document.getElementById("amount").value;
    let name = document.getElementById("donorName").value;
    let email = document.getElementById("donorEmail").value;

    if(amount <= 0){
        alert("Please enter a valid donation amount.");
        return;
    }
    if(name.trim() === ""){
        alert("Please enter your full name.");
        return;
    }
    if(email.trim() === ""){
        alert("Please enter your email.");
        return;
    }

    document.getElementById("donationSuccess").classList.remove("hidden");
});

document.addEventListener("DOMContentLoaded", () => {
  new Swiper(".program-swiper", {
      slidesPerView: 1,
      spaceBetween: 25,
      loop: true,
      centeredSlides: true,
      autoHeight: true,
      grabCursor: true,

      pagination: {
          el: ".swiper-pagination",
          clickable: true,
      },

      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
      },

      autoplay: {
          delay: 4000,
      },

      breakpoints: {
          768: { slidesPerView: 2 },
          1130: { slidesPerView: 3 }
      }

    });
});
