function setup() {
createCanvas(400, 400);
}


function draw() {
  dibujaCuadrado(100,100);
  dibujaCuadrado(200,100);
  dibujaCuadrado(300,100);
}
function dibujaCuadrado(x, y) {
  rect(x, y, 50, 50);
}
