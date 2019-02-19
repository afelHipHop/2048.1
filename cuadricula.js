
function vacia() {
  return [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ];
}

function comparar(a, b) {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (a[i][j] !== b[i][j]) {
        return true;
      }
    }
  }
  return false;
}

function copiarCuadricula(cuadricula) {
  let extra = vacia();
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      extra[i][j] = cuadricula[i][j];
    }
  }
  return extra;
}

function girar(cuadricula) {
  for (let i = 0; i < 4; i++) {
    cuadricula[i].reverse();
  }
  return cuadricula;
}

function transponer(cuadricula) {
  let newCuadricula = vacia();
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      newCuadricula[i][j] = cuadricula[j][i];
    }
  }
  return newCuadricula;
}

function sumarNumero() {
  let opciones = [];
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (cuadricula[i][j] === 0) {
        opciones.push({
          x: i,
          y: j
        });
      }
    }
  }
  if (opciones.length > 0) {
    let lugar = random(opciones);
    let r = random(1);
    cuadricula[lugar.x][lugar.y] = r > 0.1 ? 2 : 4;
    cuadricula_new[lugar.x][lugar.y] = 1;
  }
}
