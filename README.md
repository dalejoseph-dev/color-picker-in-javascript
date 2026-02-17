# Color Picker in JavaScript

An interactive color picker web app built with vanilla HTML, CSS, and JavaScript. Users can change the color of a circle on screen by clicking preset color buttons or generating a random color.

---

## Features

- Click **Red**, **Green**, or **Yellow** buttons to instantly apply a solid color to the circle.
- Click **Random Color** to generate and apply a random hex color.
- Clean, centered UI with a large circular color display.

---

## Project Structure

```
color-picker-in-javascript/
├── index.html   # Main HTML structure and button layout
├── index.js     # JavaScript logic for color changes
├── styles.css   # Styling for the layout and circle
└── README.md    # Project documentation
```

---

## Getting Started

No installation or dependencies required. Just open the project in your browser:

1. Clone or download the repository.
2. Open `index.html` in any modern web browser.
3. Click the buttons to change the circle's color.

---

## How It Works

### `paint(color)` — `index.js`
Called by the **Red**, **Green**, and **Yellow** buttons. Accepts a color string and applies it as the background color of the circle element (`#circleID`).

```js
function paint(color) {
  const circle = document.getElementById('circleID');
  circle.style = `background-color:${color}`;
}
```

### `ChangeColor()` — `index.js`
Called by the **Random Color** button. Generates a random 6-digit hex color code and applies it to the circle.

```js
function ChangeColor() {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  randomColor = `#${randomColor.padStart(6, '0')}`;
  const button = document.getElementById('circleID');
  button.style.backgroundColor = randomColor;
}
```

---

## Technologies Used

- **HTML5** — Page structure and button event bindings
- **CSS3** — Flexbox layout and circle styling
- **JavaScript (ES6)** — DOM manipulation and random color generation

---

## Learning Goals

This project is designed as a beginner-friendly introduction to JavaScript, covering:

- DOM selection with `document.getElementById()`
- Inline style manipulation via `element.style`
- Random number generation with `Math.random()`
- Hexadecimal color codes and string formatting

---

## License

This project is open source and free to use for learning purposes.