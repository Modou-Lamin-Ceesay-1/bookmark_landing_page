// TABS AND ACTIVE INDICATOR MANIPULATION SECTION
const tabs = document.querySelectorAll(".tab-button");
const sections = document.querySelectorAll(".feature-section");


tabs.forEach((tab, index) => {
  tab.addEventListener("click", function () {
    sections.forEach((section) => section.classList.add("hidden"));
    sections[index].classList.remove("hidden");

    tabs.forEach((t) => {
      t.classList.remove("border-b-2", "border-red-500");
      t.classList.add("text-gray-500");
    });

    contents.forEach((content) => content.classList.add("hidden"));

    tab.classList.add("border-b-2", "tab-red");
    tab.classList.remove("text-gray-500");

  
    tab.classList.add("border-b-2", "tab-red");
    tab.classList.remove("text-gray-500");
  });
});


// FAQ TOGGLE SECTION
function toggleFAQ(element) {
  // Toggle the answer visibility
  const answer = element.nextElementSibling;
  answer.classList.toggle("hidden");

  // Rotate the arrow icon
  const arrow = element.querySelector("svg");
  arrow.classList.toggle("rotate-180");


  // Optional: close other open FAQs
  const allAnswers = document.querySelectorAll(".border-t");
  const allArrows = document.querySelectorAll("button svg");

  allAnswers.forEach((item) => {
    if (item !== answer && !item.classList.contains("hidden")) {
      item.classList.add("hidden");
    }
  });

  allArrows.forEach((item) => {
    if (item !== arrow && item.classList.contains("rotate-180")) {
      item.classList.remove("rotate-180");
    }
  });
}


// Email Validation for Newsletter Form
document.addEventListener("DOMContentLoaded", function () {
  const newsletterForm = document.querySelector("#newsletter-form");
  const emailInput = document.querySelector(
    '#newsletter-form input[type="email"]'
  );
  const subscribeButton = document.querySelector("#newsletter-form button");

  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (event) {
      if (!validateEmail(emailInput.value)) {
        event.preventDefault();
        showError(emailInput, "Please enter a valid email address");
      }
    });
  }

  if (emailInput) {
    // Clear error on input
    emailInput.addEventListener("input", function () {
      clearError(emailInput);

      // Real-time validation
      if (emailInput.value.length > 0) {
        if (validateEmail(emailInput.value)) {
          emailInput.classList.add("valid");
          emailInput.classList.remove("invalid");
        } else {
          emailInput.classList.add("invalid");
          emailInput.classList.remove("valid");
        }
      } else {
        emailInput.classList.remove("valid", "invalid");
      }
    });
  }

  // Email validation function
  function validateEmail(email) {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  // Show error message
  function showError(inputElement, message) {
    clearError(inputElement);

    const errorElement = document.createElement("input");
    errorElement.className = "error-message";
    errorElement.textContent = message;
    errorElement.style.color = "red";
    errorElement.style.fontSize = "12px";
    errorElement.style.marginTop = "5px";

    inputElement.classList.add("invalid");
    inputElement.parentNode.appendChild(errorElement);
  }

  // Clear error message
  function clearError(inputElement) {
    const errorElement =
      inputElement.parentNode.querySelector(".error-message");
    if (errorElement) {
      errorElement.remove();
    }
  }
});


// Mobile Navbar
const hamburgarIcon = document.querySelector("#hamburgar-icon");
const mobileMenu = document.querySelector("#mobile-menu");
const closeIcon = document.querySelector("#close-icon");

console.log(closeIcon);

hamburgarIcon.addEventListener("click", () => {
  //   alert("clicking");
  hamburgarIcon.classList.add("hidden");
  mobileMenu.classList.remove("hidden");
});

closeIcon.addEventListener("click", () => {
  hamburgarIcon.classList.remove("hidden");
  mobileMenu.classList.add("hidden");
});
