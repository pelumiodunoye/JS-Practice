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
      let randomIndex = Math.floor(Math.random() * colors.length);
      let randomColor = colors[randomIndex];
      document.body.style.backgroundColor = randomColor;
      let colorNameDisplay = document.querySelector(".color");
      colorNameDisplay.textContent = randomColor;
      colorNameDisplay.style.color = randomColor;
    });
} else if (window.location.pathname.includes("colorflipperhex.html")) {
  function randomHexColor() {
    let hex = "#";
    const hexValues = "0123456789ABCDEF";
    for (let i = 0; i < 6; i++) {
      let randomIndex = Math.floor(Math.random() * hexValues.length);
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
