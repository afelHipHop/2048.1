
let cuadricula;
let cuadricula_new;
let puntaje = 0;

function setup() {
  createCanvas(400, 400);
  noLoop();
  cuadricula = vacia();
  cuadricula_new = vacia();
 
  sumarNumero();
  sumarNumero();
  updateCanvas();
}

function keyPressed() {
  let voltear = false;
  let rotar = false;
  let jugado = true;
  switch (keyCode) {
    case DOWN_ARROW:
      break;
    case UP_ARROW:
      cuadricula = girar(cuadricula);
      voltear = true;
      break;
    case RIGHT_ARROW:
      cuadricula = transponer(cuadricula);
      rotar = true;
      break;
    case LEFT_ARROW:
      cuadricula = transponer(cuadricula);
      cuadricula = girar(cuadricula);
      rotar = true;
      voltear = true;
      break;
    default:
      jugado = false;
  }

  if (jugado) {
    let pasado = copiarCuadricula(cuadricula);
    for (let i = 0; i < 4; i++) {
      cuadricula[i] = operar(cuadricula[i]);
    }
    let cambiar = comparar(pasado, cuadricula);
    if (voltear) {
      cuadricula = girar(cuadricula);
    }
    if (rotar) {
      cuadricula = transponer(cuadricula);
    }
    if (cambiar) {
      sumarNumero();
    }
    updateCanvas();

    let perdio = juegoPerdido();
    if (perdio) {
      console.log("GAME OVER");
    }

    let gano = juegoGanado();
    if (gano) {
      console.log("VICTORIA");
    }

  }
}

function updateCanvas() {
  background(255);
  dibujarCuadricula();
  select('#score').html(puntaje);
}

function dibujarCuadricula() {
  let w = 100;
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      noFill();
      strokeWeight(2);
      let val = cuadricula[i][j];
      let s = val.toString();
      if (cuadricula_new[i][j] === 1) {
        stroke(200, 0, 200);
        strokeWeight(16);
        cuadricula_new[i][j] = 0;
      } else {
        strokeWeight(4);
        stroke(0);
      }

      if (val != 0) {
        fill(colorDimension[s].color);
      } else {
        noFill();
      }
      rect(i * w, j * w, w, w, 30);
      if (val !== 0) {
        textAlign(CENTER, CENTER);
        noStroke();
        fill(0);
        textSize(colorDimension[s].size);
        text(val, i * w + w / 2, j * w + w / 2);
      }
    }
  }
}
