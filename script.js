// Js code
const bgColor = document.querySelector(".bg-color");
bgColor.style.color = "#92EDE8";
bgColor.style.backgroundColor = "#000";
bgColor.style.width = "10rem";
bgColor.style.height = "4rem";
bgColor.style.borderRadius = "1rem";
bgColor.style.marginLeft = "3rem";
bgColor.style.marginTop = "2rem";
bgColor.style.fontWeight = "700";
bgColor.style.border = "none";
bgColor.addEventListener("click", function () {
  if (document.body.style.backgroundColor === "rgb(0, 0, 0)") {
    // Change to #92EDE8
    document.body.style.backgroundColor = "#92EDE8";
    bgColor.style.backgroundColor = "#000";
    bgColor.style.color = "#92EDE8";
  } else {
    // Change to black
    document.body.style.backgroundColor = "#000";
    bgColor.style.backgroundColor = "#92EDE8";
    bgColor.style.color = "#000";
  }
});

// script.js

document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get username and password values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Perform basic client-side validation (You should implement server-side validation too)
    if (username === "funmilola@gmail.com" && password === "987650") {
      // Redirect to page.html upon successful login
      window.location.href = "./page.html";
    } else {
      // Display error message for incorrect credentials
      alert("Incorrect username or password. Please try again.");
    }
  });
});
