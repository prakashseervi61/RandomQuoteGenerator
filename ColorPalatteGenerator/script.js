function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function generateUniqueColor(existingColors) {
  let color;
  do {
    color = getRandomColor();
  } while (existingColors.includes(color));
  return color;
}

function generatePalette() {
  const palette = document.getElementById("palette");
  palette.innerHTML = "";
  const colors = [];

  for (let i = 0; i < 4; i++) {
    const color = getRandomColor();
    colors.push(color);
    const box = document.createElement("div");
    box.className = "color-box";
    box.style.backgroundColor = color;
    box.innerText = color;
    palette.appendChild(box);
  }

  const bodyColor = generateUniqueColor(colors);
  document.getElementById(
    "body-color-code"
  ).innerText = `Body Color: ${bodyColor}`;
  document.body.style.backgroundColor = bodyColor;
}

window.onload = generatePalette;
