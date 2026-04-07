/*
  Author: Grace Minielly
  Purpose: Add hover effects for About page navigation and schedule behaviors
  Last Modified: April 6, 2026
*/

"use strict";

document.addEventListener("DOMContentLoaded", function () {
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

  // Add hover effects to schedule table rows
  const scheduleRows = document.querySelectorAll("section table tbody tr");

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
});
