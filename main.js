const navLinks = document.getElementById("nav-links");
const menuBtn = document.getElementById("menu-btn");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};


// header container
// Pulsing shadow animation for header image
function animateShadow() {
  const image = document.querySelector('.header__image');
  let growing = true;
  let blur = 10;
  let spread = 5;

  function pulse() {
    // Smaller increments for a slower animation
    if (growing) {
      blur += 0.2;
      spread += 0.1;
      if (blur >= 20) growing = false;
    } else {
      blur -= 0.2;
      spread -= 0.1;
      if (blur <= 10) growing = true;
    }

    image.style.boxShadow = `0 0 ${blur}px ${spread}px #4d7cff`; //#668fff`; //rgba(155, 154, 154, 0.4)`;

    // Use setTimeout to slow down the frame rate (~30fps)
    setTimeout(() => {
      requestAnimationFrame(pulse);
    }, 30);
  }

  pulse();
}

window.addEventListener('DOMContentLoaded', animateShadow);



// portfolio container
ScrollReveal().reveal(".portfolio__card", {
  duration: 1000,
  interval: 500,
});


