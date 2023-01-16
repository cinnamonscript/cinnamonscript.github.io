function toggleNav() {
  var nav = document.getElementById("nav");
  if (nav.style.display === "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }
}

// Get all elements with the class "animated"
var animatedElements = document.querySelectorAll(".animated");

// Listen for scroll events
window.addEventListener("scroll", function () {
  // Loop through each animated element
  animatedElements.forEach(function (element) {
    // Get the distance from the top of the element to the top of the viewport
    var elementTop = element.getBoundingClientRect().top;
    // If the element is in the viewport
    if (elementTop < window.innerHeight) {
      // Add the "visible" class to the element
      element.classList.add("visible");
    }
  });
});
