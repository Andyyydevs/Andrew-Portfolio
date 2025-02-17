// Back to Top Button
const backToTopButton = document.getElementById("back-to-top");

window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
};

backToTopButton.addEventListener("click", () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
});

// Typing Animation for Home Section
const textThree = document.querySelector(".text-three");
const strings = ["Software Developer", "Application Developer", "Coffee Enthusiast"];
let currentStringIndex = 0;
let currentCharIndex = 0;

function typeWriter() {
  if (currentCharIndex < strings[currentStringIndex].length) {
    textThree.textContent += strings[currentStringIndex].charAt(currentCharIndex);
    currentCharIndex++;
    setTimeout(typeWriter, 100);
  } else {
    setTimeout(eraseText, 2000);
  }
}

function eraseText() {
  if (currentCharIndex > 0) {
    textThree.textContent = strings[currentStringIndex].substring(0, currentCharIndex - 1);
    currentCharIndex--;
    setTimeout(eraseText, 50);
  } else {
    currentStringIndex = (currentStringIndex + 1) % strings.length;
    setTimeout(typeWriter, 500);
  }
}

typeWriter();

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});