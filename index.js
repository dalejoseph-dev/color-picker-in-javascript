function paint(color) {
  const circle = document.getElementById('circleID');
  circle.style = `background-color:${color}`;
}

function ChangeColor() {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  
  randomColor = `#${randomColor.padStart(6, '0')}`;
  const button = document.getElementById('circleID');
  
  button.style.backgroundColor = randomColor;
}