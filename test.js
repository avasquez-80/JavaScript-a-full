const sumar = function(a, b) {
  return a + b;
};
console.log(sumar(3, 2));

const sumar2 = (a, b) => a + b;
console.log(sumar2(3, 2));

const saludo = (nombre) => `Hola ${nombre}`;
console.log(saludo("Juan"));

// const lista = [1, 2, 3, 4, 5];
// lista.forEach((numero,indice) => {
//     console.log(`El numero ${numero} esta en la posicion ${indice}`);
//     });

const list2 = [1, 2, 3, 4, 5];
list2.forEach((numero,index) => console.log(`El numero ${numero} esta en la posicion ${index}`));