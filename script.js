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
