/*
  Author: Grace Minielly
  Purpose: Client-side email signup handling for contact page
  Last Modified: April 6, 2026
*/

"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("email-signup");
  const message = document.getElementById("signup-message");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;

    // Simple validation
    if (email) {
      // In a real app, send to server
      // For now, just show message
      message.style.display = "block";
      form.reset();
    }
  });
});
