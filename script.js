
// var bgWhite = document.getElementById('white');
// var bgBlack = document.getElementById('black');
// var bgBlue = document.getElementById('darkBlue');

// bgWhite.onclick = function() {
//   document.body.style.backgroundColor = 'white';
//   document.body.style.color = 'black'; // Change text color to black
// };

// bgBlack.onclick = function() {
//   document.body.style.backgroundColor = 'black';
//   document.body.style.color = 'red'; // Change text color to white
  
// };



// bgBlue.onclick = function() {
//   document.body.style.backgroundColor = 'darkBlue';
//   document.body.style.color = 'white'; // Keep text color white for dark background
// };

function changeBg(color) {
  document.body.style.backgroundColor = color;
  let txt = document.querySelectorAll("p, h1, h2, h3, h4, h6, a, span, li, td, th, label, button, input, select, textarea");
  let header = document.getElementById("header");

  if (color === "black") {
    for (let elm of txt) {
      elm.style.color = "red";
    }
    header.style.backgroundColor = "#3c3c3c"; // Reset to default
  } else if (color === "darkblue") {
    for (let elm of txt) {
      elm.style.color = "white";
    }
    header.style.backgroundColor = "#0700c6"; // Set header bg to black in dark blue mode
  } else {
    for (let elm of txt) {
      elm.style.color = "black";
    }
    header.style.backgroundColor = ""; // Reset to default
  }
  
}


