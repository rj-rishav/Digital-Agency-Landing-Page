// Toggleing Hamburger
setTimeout(function () {
  const hamburgerMenu = document.getElementById("hamburger-menu");
  const nav = document.getElementById("nav-links-mobile");
  console.log(hamburgerMenu, nav);

  hamburgerMenu.addEventListener("click", () => {
    console.log("clicked");

    nav.classList.toggle("active");
  });
}, 1000);

// Form Validation
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    let valid = true;
    let errorMessage = "";

    if (!name) {
      valid = false;
      errorMessage += "Name is required.\n";
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email || !emailRegex.test(email)) {
      valid = false;
      errorMessage += "Please enter a valid email address.\n";
    }

    if (!message) {
      valid = false;
      errorMessage += "Message cannot be empty.\n";
    }

    if (!valid) {
      alert(errorMessage);
    } else {
      alert("Form submitted successfully!");
    }
  });
