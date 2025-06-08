class CarritoCompra {
    constructor() {
        this.carritoProductos = []
    }
    agregarProducto(producto){
        this.carritoProductos.push(producto);
    }
    calcularTotal(){

    let suma = 0;

    for(let index = 0; index < this.carritoProductos.length; index++) {
        suma = this.carritoProductos[index].precio * this.carritoProductos[index].cantidad + suma
    }
    return suma
}
aplicarDescuento(descuento){
    return this.calcularTotal() - (this.calcularTotal() * descuento / 100)
}
}
module.exports = CarritoCompra;