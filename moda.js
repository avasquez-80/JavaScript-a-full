function calcModa(lista1){
    const lista1Count ={};
    lista1.map(x => lista1Count[x] = (lista1Count[x] || 0) + 1);
    const lista1Array = Object.entries(lista1Count).sort((a,b) => b[1] - a[1]);
    const moda = lista1Array[0];
    return moda;
}
// lista1.map(
    //     function(x){
    //         if(lista1Count[x]){
    //             lista1Count[x] += 1;
    //         }else{
    //             lista1Count[x] = 1;
    //         }
    //     }
    // );
    
// const lista1 = [1,1,2,5,4,5,5,6,8,8,2,3,3,4,4];
