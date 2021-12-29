function calcularDescuento(precio, descuento) {
    const desc = 100-descuento;
    return (precio * desc)/100;
}
function calcDesc(){
    const precio = Number(document.getElementById('precioP').value);
    const descuento = Number(document.getElementById('descuentoP').value);
    const sel = Number(document.getElementById('selector').value);
    const descTot = sel+descuento;
    console.log(descTot);
    const desc = calcularDescuento(precio, descTot);
    const resultP = document.getElementById('resultadoP');
    resultP.innerText = `El precio con descuento es: $${desc}`;
}