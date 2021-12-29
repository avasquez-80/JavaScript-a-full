//Calculo cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log(`Los lados del cuadrado miden: ${ladoCuadrado}cm`);
function ladosCuadrado(ladoCuadrado) {
    return ladoCuadrado;
}
// const perimetroCuadrado = ladoCuadrado * 4;
// console.log(`El perimetro del cuadrador mide: ${perimetroCuadrado}cm`);
function perimetroCuadrado(ladoCuadrado) {
    return ladoCuadrado * 4;
}
function calcularPerimetroC(){
    const input=document.getElementById("InputCuadrado").value;
    const perimetro=perimetroCuadrado(input);
    alert(`El perimetro del cuadrado es: ${perimetro}cm`);
}
// const areaCuadrado = ladoCuadrado **2;
function areaCuadrado(ladoCuadrado) {
    return ladoCuadrado ** 2;
}
function calcularAreaC(){
    const input=document.getElementById("InputCuadrado").value;
    const area=areaCuadrado(input);
    alert(`El area del cuadrado es: ${area}cm^2`);
}
// console.log(`El area del cuadrado mide: ${areaCuadrado}cm^2`);
console.groupEnd;

//Calculo triangulo
console.group("Triangulos");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;
// console.log(`La altura del triangulo mide: ${alturaTriangulo}cm`);

// console.log(`Los lados del triangulo miden: ${ladoTriangulo1}cm, ${ladoTriangulo2}cm, ${baseTriangulo}cm`);
function ladosTriangulo(ladoTriangulo1, ladoTriangulo2, baseTriangulo) {
    return `${ladoTriangulo1}, ${ladoTriangulo2}, ${baseTriangulo}`;
}
// const perimetroTriangulo = baseTriangulo + ladoTriangulo1 + ladoTriangulo2;
// console.log(`El perimetro del triangulo mide: ${perimetroTriangulo}cm`);
function perimetroTriangulo(baseTriangulo, ladoTriangulo1, ladoTriangulo2) {
    return baseTriangulo + ladoTriangulo1 + ladoTriangulo2;
}
function calcularPerimetroT(){
    const ladoA=Number(document.getElementById("InputLadoA").value);
    const ladoB=Number(document.getElementById("InputLadoB").value);
    const BaseT=Number(document.getElementById("InputBaseT").value);
    const perimetro=perimetroTriangulo(BaseT,ladoA,ladoB);
    const altura=alturaTriangulo(BaseT,ladoA,ladoB);
    alert(`La altura del triangulo es: ${altura}cm`);
    console.log(perimetro);
    alert(`El perimetro del triangulo es: ${perimetro}cm`);
}
// const areaTriangulo = (baseTriangulo * alturaTriangulo)/2;
function areaTriangulo(baseTriangulo, alturaTriangulo) {
    return (baseTriangulo * alturaTriangulo) / 2;
}
function calcularAreaT(){
    const BaseT=Number(document.getElementById("InputBaseT").value);
    const AlturaT=Number(document.getElementById("InputAlturaT").value);
    const area=areaTriangulo(BaseT,AlturaT);
    alert(`El area del triangulo es: ${area}cm^2`);
}
// console.log(`El area del triangulo mide: ${areaTriangulo}cm^2`);
function alturaTriangulo(baseTriangulo, ladoTriangulo1, ladoTriangulo2) {
    if(ladoTriangulo1==ladoTriangulo2){
        alert("El triangulo es de tipo isoceles");
        return Math.sqrt(ladoTriangulo1**2-(baseTriangulo**2/4));
    }
    else{
        return alert("El triangulo es de tipo escaleno");
    }
}
console.groupEnd;

//Calculo circulo
console.group("Circulos");
//Radio
// const radioCirculo = 4;
// console.log(`El radio del circulo mide: ${radioCirculo}cm`);
function radioCirculo(radioCirculo) {
    return radioCirculo;
}
//DIametro
// const diametroCirculo = radioCirculo * 2;
// console.log(`El diametro del circulo mide: ${diametroCirculo}cm`);
function diametroCirculo(radioCirculo) {
    return radioCirculo * 2;
}
function calcularDiametroCir(){
    const radio=document.getElementById("InputRadio").value;
    const diametro=diametroCirculo(radio);
    alert(`El diametro del circulo es: ${diametro}cm`);
}
//Pi
// const pi = Math.PI;
// console.log(`El valor de pi es: ${pi}`);
function pi() {
    return Math.PI;
}
//Circunferencia
// const circunferenciaCirculo = diametroCirculo * pi;
// console.log(`La circunferencia del circulo mide: ${circunferenciaCirculo}cm`);
function circunferenciaCirculo(radioCirculo) {
    const diametroC = diametroCirculo(radioCirculo);
    return diametroC * pi();
}
function calcularCircunferenciaCir(){
    const radio=document.getElementById("InputRadio").value;
    const circunferencia=circunferenciaCirculo(radio);
    alert(`La circunferencia del circulo es: ${circunferencia}cm`);
}
//Area
// const areaCirculo = pi * (radioCirculo ** 2);
// console.log(`El area del circulo mide: ${areaCirculo}cm^2`);
function areaCirculo(radioCirculo) {
    return pi() * (radioCirculo ** 2);
}
function calcularAreaCir(){
    const radio=document.getElementById("InputRadio").value;
    const area=areaCirculo(radio);
    alert(`El area del circulo es: ${area}cm^2`);
}
console.groupEnd;