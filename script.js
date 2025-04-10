// Mobile Navigation Toggle
const navBar = document.querySelector('.nav-bar');
const navLinks = document.querySelector('.nav-links');

navBar.addEventListener('click', () => {
    navBar.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll Reveal Animation
document.addEventListener("DOMContentLoaded", function () {
    const impactItems = document.querySelectorAll(".impact-item");

    window.addEventListener("scroll", function () {
        impactItems.forEach((item) => {
            const position = item.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (position < windowHeight - 100) {
                item.classList.add("visible");
            }
        });
    });
});

// impact item 
const impactItems = document.querySelectorAll('.impact-item');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1
  });

  impactItems.forEach(item => {
    observer.observe(item);
  });
// Web3Forms Contact Form Submission
const contactForm = document.getElementById('contact-form'); // make sure your form has this ID

if (contactForm) {
    contactForm.addEventListener("submit", async function (e) {
        e.preventDefault(); // prevent page reload
        const formData = new FormData(contactForm);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const result = await response.json();

            if (result.success) {
                alert("Message sent successfully!");
                contactForm.reset(); // Clear the form
            } else {
                alert("Failed to send message. Please try again.");
            }
        } catch (error) {
            alert("An error occurred. Please check your internet connection.");
        }
    });
}

// Dynamic Year in Footer
document.getElementById('yearValue').textContent = new Date().getFullYear();
