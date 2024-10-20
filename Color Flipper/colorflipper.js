if (window.location.pathname.includes("colorflipper.html")) {
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
    "Tan",
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
} else if (window.location.pathname.includes("colorflipperhex.html")) {
  // Create a function that generates random hex colors
  function randomHexColor() {
    let hex = "#";
    const hexValues = "0123456789ABCDEF";
    for (let i = 0; i < 6; i++) {
      // Generate a random index to pick a character from hexChars
      let randomIndex = Math.floor(Math.random() * hexValues.length);
      // Add the selected character to the hex string
      hex += hexValues[randomIndex];
    }

    return hex;
  }
  document.querySelector(".actionBtn").addEventListener("click", function () {
    let randomColor = randomHexColor();
    document.body.style.backgroundColor = randomColor;
    let colorNameDisplay = document.querySelector(".color");
    colorNameDisplay.textContent = randomColor;
    colorNameDisplay.style.color = randomColor;
  });
}

//   Key concepts covered:

// arrays
// document.getElementById()
// document.querySelector()
// addEventListener()
// document.body.style.backgroundColor
// Math.floor()
// Math.random()
// array.length
