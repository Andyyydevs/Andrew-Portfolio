window.onload = function() {
    window.scrollTo(0, 0);
};

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Typing animation
var typed = new Typed('.text-three', {
    strings: [
        "An Innovative",
        "An Adaptable",
        "A Motivated",
        "A Passionate",
        "A Graduate Developer From South Africa"
    ],
    typeSpeed: 60,
    backSpeed: 40,
    loop: false,
    onComplete: function(self) {
        self.cursor.style.display = 'none'; // Hide the cursor
    }
});

// Interactive skills
document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.transform = 'scale(1.1)';
    });
    item.addEventListener('mouseout', () => {
        item.style.transform = 'scale(1)';
    });
});

// Back to top button
let backToTopButton = document.getElementById("back-to-top");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
}

backToTopButton.onclick = function() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const openToWork = true;

document.addEventListener('DOMContentLoaded', (event) => {
    const workStatus = document.querySelector('.work-status');
    const statusText = workStatus.querySelector('.status-text');

    if (!openToWork) {
        workStatus.classList.add('not-open');
        statusText.textContent = 'Not Open to Work';
    }
});
