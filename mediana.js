function calcMediana(lista){
    const listaOrdenada = lista.sort((a,b) => a - b);
    if (lista.length % 2 == 0){
        const mitad = lista.length/2;
        const mediana = (listaOrdenada[mitad] + listaOrdenada[mitad-1])/2;
        return mediana;
    }else{
        const mitad = Math.floor(lista.length/2);
        const mediana = listaOrdenada[mitad];
        return mediana;
    }
}
    