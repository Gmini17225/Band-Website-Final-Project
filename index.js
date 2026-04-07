/*
  Author: Grace Minielly
  Purpose: Homepage interactivity including robot verification, navigation hover, schedule hover, and slideshow
  Last Modified: April 6, 2026
*/

"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // Check if user has already verified
  if (!localStorage.getItem("robotVerified")) {
    showRobotVerification();
  }

  // Add hover effects to navigation links
  const navLinks = document.querySelectorAll(
    "header .heading ul a, header .heading nav a",
  );

  navLinks.forEach((link) => {
    link.addEventListener("mouseenter", function () {
      this.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
      this.style.padding = "0.5rem 0.75rem";
      this.style.borderRadius = "4px";
      this.style.transition = "all 0.2s ease";
    });

    link.addEventListener("mouseleave", function () {
      this.style.backgroundColor = "transparent";
      this.style.padding = "0";
      this.style.borderRadius = "0";
    });
  });

  // Add hover effects schedule
  const scheduleRows = document.querySelectorAll(
    ".schedule-preview-heading table tbody tr",
  );

  scheduleRows.forEach((row) => {
    row.addEventListener("mouseenter", function () {
      this.style.backgroundColor = "#b8c9db";
      this.style.transition = "background-color 0.2s ease";
      this.style.cursor = "pointer";
    });

    row.addEventListener("mouseleave", function () {
      this.style.backgroundColor = "transparent";
    });
  });

  // Slideshow functionality
  const images = document.querySelectorAll(".slideshow-container img");
  let currentIndex = 0;
  let slideshowInterval;

  function showImage(index) {
    images.forEach((img) => img.classList.remove("active"));
    images[index].classList.add("active");
    currentIndex = index;
  }

  function startSlideshow() {
    slideshowInterval = setInterval(() => {
      let nextIndex = (currentIndex + 1) % images.length;
      showImage(nextIndex);
    }, 3000);
  }

  if (images.length > 0) {
    showImage(0);
    startSlideshow();

    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    prevButton.addEventListener("click", () => {
      clearInterval(slideshowInterval);
      let prevIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(prevIndex);
      startSlideshow();
    });

    nextButton.addEventListener("click", () => {
      clearInterval(slideshowInterval);
      let nextIndex = (currentIndex + 1) % images.length;
      showImage(nextIndex);
      startSlideshow();
    });
  }
});

//SO MANY STYLES, would this be easier with just css...?
// Robot verification
function showRobotVerification() {
  const overlay = document.createElement("div");
  overlay.style.position = "fixed";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  overlay.style.display = "flex";
  overlay.style.justifyContent = "center";
  overlay.style.alignItems = "center";
  overlay.style.zIndex = "9999";

  // Experimenting with modal?
  const modal = document.createElement("div");
  modal.style.backgroundColor = "#ffffff";
  modal.style.padding = "2rem";
  modal.style.borderRadius = "12px";
  modal.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.15)";
  modal.style.maxWidth = "400px";
  modal.style.textAlign = "center";
  modal.style.fontFamily =
    'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
  //Greettt
  const greeting = document.createElement("h2");
  greeting.textContent = "Welcome to Comox Valley Band & Choir Festival!";
  greeting.style.color = "#0d2340";
  greeting.style.marginTop = "0";
  greeting.style.marginBottom = "1rem";

  // Add message
  const message = document.createElement("p");
  message.textContent = "Please verify that you are not a robot to continue.";
  message.style.color = "#333";
  message.style.marginBottom = "1.5rem";

  // Checkboxxx
  const checkboxContainer = document.createElement("div");
  checkboxContainer.style.display = "flex";
  checkboxContainer.style.alignItems = "center";
  checkboxContainer.style.justifyContent = "center";
  checkboxContainer.style.gap = "0.5rem";
  checkboxContainer.style.marginBottom = "1.5rem";

  // Checkbox please work.
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = "robotCheckbox";
  checkbox.style.width = "20px";
  checkbox.style.height = "20px";
  checkbox.style.cursor = "pointer";

  // Label
  const label = document.createElement("label");
  label.htmlFor = "robotCheckbox";
  label.textContent = "I'm not a robot";
  label.style.cursor = "pointer";
  label.style.color = "#333";
  label.style.fontSize = "1rem";

  checkboxContainer.appendChild(checkbox);
  checkboxContainer.appendChild(label);

  // Buttun
  const button = document.createElement("button");
  button.textContent = "Continue";
  button.style.backgroundColor = "#0d2340";
  button.style.color = "#fff";
  button.style.padding = "0.75rem 2rem";
  button.style.border = "none";
  button.style.borderRadius = "6px";
  button.style.fontSize = "1rem";
  button.style.cursor = "pointer";
  button.style.fontWeight = "600";
  button.style.transition = "background-color 0.2s ease";
  button.disabled = true;
  button.style.opacity = "0.5";

  button.addEventListener("mouseenter", function () {
    if (!this.disabled) {
      this.style.backgroundColor = "#0a1a2e";
    }
  });

  button.addEventListener("mouseleave", function () {
    if (!this.disabled) {
      this.style.backgroundColor = "#0d2340";
    }
  });

  checkbox.addEventListener("change", function () {
    if (this.checked) {
      button.disabled = false;
      button.style.opacity = "1";
    } else {
      button.disabled = true;
      button.style.opacity = "0.5";
    }
  });

  // Handle button click
  button.addEventListener("click", function () {
    localStorage.setItem("robotVerified", "true");
    document.body.removeChild(overlay);
  });

  // modal v2
  modal.appendChild(greeting);
  modal.appendChild(message);
  modal.appendChild(checkboxContainer);
  modal.appendChild(button);

  // Display / overlay
  overlay.appendChild(modal);
  document.body.appendChild(overlay);
}
