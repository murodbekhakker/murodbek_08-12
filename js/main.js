document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-mune");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-btn");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("activeBtn");
  });
});

let mybutton = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
