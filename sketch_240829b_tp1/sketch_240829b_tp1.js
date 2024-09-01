//lucas salvatierra
//47114689
//https://youtu.be/T1k0L4wIdfU

//variables
let cantx=7;
let canty=7;
let colores;
//imagen 
let flechas;

function preload(){
  flechas = loadImage("data/flechas.jpeg");
  
}

function setup() {
  createCanvas(800,400)
colores=color(255);
}


function draw() {
background(119,3,170);
image(flechas,0,0,400,400);
  modY = 430 / canty;
   modX = 400 / cantx;
   for ( j = 0; j < canty; j++) {
    for ( i = 0; i < cantx; i++) {
      noStroke();
      fill(colores);
      rect(430 + i * modX, 50 + j * modY, 25, 15);
      triangle(430 + i * modX, 50 + j * modY + 25, 410 + i * modX, 50 + j * modY + 7.5, 430 + i * modX, 50 + j * modY - 10);

    }
    }
}
function mousePressed(){
    colores=aleatoriocolor(); // Cambia al color aleatorio
      }
      function aleatoriocolor(){
 return color(random(255), random(255), random(255));
}


function keyPressed() {
  if (key == 'r' || key == 'r') {
    for ( i = 0; i < cantx; i++) {
      for ( j = 0; j < canty; j++) {
        colores=255;
      }
    }
  }
}

  
