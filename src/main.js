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

document.addEventListener("DOMContentLoaded", function () {
  // Get all FAQ toggle buttons
  const faqToggles = document.querySelectorAll(".faq-toggle");

  // Add click event listener to each toggle
  faqToggles.forEach((toggle) => {
    toggle.addEventListener("click", function () {
      // Toggle the visibility of the content
      const content = this.nextElementSibling;
      content.classList.toggle("hidden");

      // Rotate the chevron icon
      const chevron = this.querySelector(".faq-chevron");
      if (content.classList.contains("hidden")) {
        chevron.style.transform = "rotate(0deg)";
      } else {
        chevron.style.transform = "rotate(180deg)";
      }

      // Optional: Close other FAQs when opening a new one
      faqToggles.forEach((otherToggle) => {
        if (otherToggle !== toggle) {
          const otherContent = otherToggle.nextElementSibling;
          const otherChevron = otherToggle.querySelector(".faq-chevron");

          if (!otherContent.classList.contains("hidden")) {
            otherContent.classList.add("hidden");
            otherChevron.style.transform = "rotate(0deg)";
          }
        }
      });
    });
  });
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
