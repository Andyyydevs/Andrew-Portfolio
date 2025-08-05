// Back to Top Button
const backToTopButton = document.getElementById("back-to-top");

window.onscroll = function () {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    backToTopButton.style.display = "flex";
  } else {
    backToTopButton.style.display = "none";
  }
};

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Typing Animation for Home Section
const textThree = document.querySelector(".text-three");
const strings = ["Full-Stack Developer", "Problem Solver", "Coffee Enthusiast", "Tech Innovator"];
let currentStringIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;

function typeWriter() {
  const currentString = strings[currentStringIndex];

  if (isDeleting) {
    textThree.textContent = currentString.substring(0, currentCharIndex - 1);
    currentCharIndex--;
  } else {
    textThree.textContent = currentString.substring(0, currentCharIndex + 1);
    currentCharIndex++;
  }

  let typeSpeed = isDeleting ? 50 : 100;

  if (!isDeleting && currentCharIndex === currentString.length) {
    typeSpeed = 2000;
    isDeleting = true;
  } else if (isDeleting && currentCharIndex === 0) {
    isDeleting = false;
    currentStringIndex = (currentStringIndex + 1) % strings.length;
    typeSpeed = 500;
  }

  setTimeout(typeWriter, typeSpeed);
}

// Start typing animation
setTimeout(typeWriter, 1000);

// Smooth Scroll for Navigation
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

      // Update active navigation
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    }
  });
});

// Update active navigation on scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= (sectionTop - 200)) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Add scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(30px)';
  section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(section);
});

// Project cards hover effect
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mouseenter', function () {
    this.style.transform = 'translateY(-10px) rotateX(5deg)';
  });

  card.addEventListener('mouseleave', function () {
    this.style.transform = 'translateY(0) rotateX(0)';
  });
});