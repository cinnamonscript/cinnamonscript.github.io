const navBar = document.querySelectorAll(".side-nav");
const navFullBar = document.querySelectorAll(".side-nav-full");

function toggleNav() {
  navBar.forEach((a) => {
    if (a.classList.contains("side-nav-full")) {
      a.classList.remove("side-nav-full");
      a.classList.add("side-nav");
    } else {
      a.classList.add("side-nav-full");
      a.classList.remove("side-nav");
    }
  });
  navFullBar.forEach((a) => {
    if (a.classList.contains("side-nav-full")) {
      a.classList.remove("side-nav-full");
      a.classList.add("side-nav");
    } else {
      a.classList.add("side-nav-full");
      a.classList.remove("side-nav");
    }
  });
}

function removeToggle() {
  navBar.forEach((a) => {
    if (a.classList.contains("side-nav-full")) {
      a.classList.remove("side-nav-full");
      a.classList.add("side-nav");
    }
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      console.log(entry.target.id);
    }
    /*     else {
      entry.target.classList.remove("show");
    } */
  });
});

const hiddenElements = document.querySelectorAll(".hidden");

hiddenElements.forEach((el) => observer.observe(el));

const sections = document.querySelectorAll("section");
const navList = document.querySelectorAll(".side-nav ul li a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });
  console.log(current);
  navList.forEach((a) => {
    a.classList.remove("active");
    if (a.classList.contains(current)) {
      a.classList.add("active");
    }
  });
});
