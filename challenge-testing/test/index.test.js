

const Carrito = require('../index');

describe('Revisando carrito de compra' , () => {
    let carrito;
    const producto = { nombre: "piano", cantidad: 2, precio:1000};
     const producto2 = { nombre: "piano", cantidad: 3, precio:1000};

    beforeEach(() => {
     carrito = new Carrito();
        
    }) 
  it('Probamos la clase carrito', () => {
    
    expect(typeof carrito).toBe('object');
  });
  
  it('verificamos el carrito dentro de la clase', () => {
    expect(carrito.carritoProductos).toEqual([]);
    expect(carrito.carritoProductos.length).toBe(0);
    expect(Array.isArray(carrito.carritoProductos)).toBe(true);
  });
   
  it("Verificamos que exista la función agregarProducto", () => {
    expect( typeof carrito.agregarProducto).toBe('function');
    expect(carrito.agregarProducto).toBeDefined();
  });

  test("debería recibir un producto - objeto y lo agrega al carrito", () => {
   

    carrito.agregarProducto(producto);

   
    
    expect(carrito.carritoProductos[0].nombre).toBe("piano");
    expect(carrito.carritoProductos[0].cantidad).toBe(2);
    expect(carrito.carritoProductos[0].precio).toBe(1000);
    expect(carrito.carritoProductos.length).toBe(1);
    expect(carrito.carritoProductos[0]).toEqual(producto);
  });

  it("verificamos que exista la función calcularTotal", () => {
    expect(typeof carrito.calcularTotal).toBe('function');
    expect(carrito.calcularTotal).toBeDefined();
  });

  it("verificamos que exista la función calcularTotal sume el valor de los elementos agregados", () => {
     
     carrito.agregarProducto(producto);
     carrito.agregarProducto(producto2);
      
     expect(carrito.carritoProductos.length).toBe(2);
     expect(carrito.calcularTotal()).toBe(5000);

});

 it("verificamos que exista la función aplicarDescuento", () => {
    expect(typeof carrito.aplicarDescuento).toBe("function");
    expect(carrito.aplicarDescuento).toBeDefined();
 });

 it("verificamos que la función aplicarDescuento nos de el 10% sobre el total", () => {
    
     carrito.agregarProducto(producto);
     carrito.agregarProducto(producto2);
     expect(carrito.aplicarDescuento(10)).toBe(5000 - 5000 * 0.1);
 })

  it("verificamos que la función aplicarDescuento nos de el 10% sobre el total", () => {
    
     carrito.agregarProducto(producto);
     carrito.agregarProducto(producto2);
     expect(carrito.aplicarDescuento(20)).toBe(5000 - 5000 * 0.2);
 })
});