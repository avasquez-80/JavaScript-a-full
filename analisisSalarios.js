const listaSalarios = colombianSalary.map(function(people){
    return people.salary;
});
const listaSalariosOrdenada = listaSalarios.sort((SalarioA,SalarioB) => SalarioA - SalarioB);
function esPar(numero){
    return numero % 2 == 0;
}
//calculo mediana de salarios total
function medianaSalarios(lista){
    const mitad=parseInt(lista.length/2);
    if(esPar(lista.length)){
        return (lista[mitad] + lista[mitad-1])/2;
    }else{
        return lista[mitad];
    }
}
const medianaGeneral = medianaSalarios(listaSalariosOrdenada);

//Calculo mediana top 10
const spliceStart = (listaSalariosOrdenada.length * 90)/100;
const spliceCount = listaSalariosOrdenada.length - spliceStart;

const salariosTop10 = listaSalariosOrdenada.splice(spliceStart,spliceCount);
const medianaTop10 = medianaSalarios(salariosTop10);
console.log({medianaGeneral,medianaTop10});