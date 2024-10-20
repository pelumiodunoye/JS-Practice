let colors = [
  "Red",
  "Blue",
  "Green",
  "Yellow",
  "Purple",
  "Orange",
  "Violet",
  "Grey",
  "Indigo",
  "Cyan",
  "Magenta",
  "Tan"
];

document
  .querySelector(".actionBtn")
  .addEventListener("click", function (changeColor) {
    //Generate a random index
    let randomIndex = Math.floor(Math.random() * colors.length);
    //select the color from the array
    let randomColor = colors[randomIndex];
    //change the background color
    document.body.style.backgroundColor = randomColor;
    //select element for color display (span)
    let colorNameDisplay = document.querySelector(".color");
    //change default name to actual color name
    colorNameDisplay.textContent = randomColor;
    // Match color name with color
    colorNameDisplay.style.color = randomColor;
  });


//   Key concepts covered:

// arrays
// document.getElementById()
// document.querySelector()
// addEventListener()
// document.body.style.backgroundColor
// Math.floor()
// Math.random()
// array.length
