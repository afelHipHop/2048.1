
function operar(fila) {
  fila = deslizar(fila);
  fila = combinar(fila);
  fila = deslizar(fila);
  return fila;
}

function deslizar(fila) {
  let arr = fila.filter(val => val);
  let faltante = 4 - arr.length;
  let ceros = Array(faltante).fill(0);
  arr = ceros.concat(arr);
  return arr;
}

function combinar(fila) {
  for (let i = 3; i >= 1; i--) {
    let a = fila[i];
    let b = fila[i - 1];
    if (a == b) {
      fila[i] = a + b;
      puntaje += fila[i];
      fila[i - 1] = 0;
    }
  }
  return fila;
}

function juegoGanado() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (cuadricula[i][j] == 2048) {
        return true;
      }
    }
  }
  return false;
}


function juegoPerdido() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (cuadricula[i][j] == 0) {
        return false;
      }
      if (i !== 3 && cuadricula[i][j] === cuadricula[i + 1][j]) {
        return false;
      }
      if (j !== 3 && cuadricula[i][j] === cuadricula[i][j + 1]) {
        return false;
      }
    }
  }
  return true;
}
