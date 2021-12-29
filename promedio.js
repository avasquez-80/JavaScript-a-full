// const sumaLista = [25,30,28];
// let promedio = 0;
// for(let i = 0; i < sumaLista.length; i++){
//     promedio += sumaLista[i];
// }
// console.log(promedio/sumaLista.length);
function sumaLista(lista){
    // let promedio = 0;
    // for(let i = 0; i < lista.length; i++){
    //     promedio += lista[i];
    // }
    // return promedio/lista.length;

    // const sumaLista = lista.reduce(
    //     function(acumulador = 0, nuevoElemento){
    //         return acumulador + nuevoElemento;
    //     }
    // );
    // const promedio = sumaLista/lista.length;
    // return promedio;

    const promedio = (lista.reduce((acumulador, valorActual) => acumulador + valorActual))/lista.length;
    return promedio;
}