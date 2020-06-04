import React, {useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import Producto from './Producto';
import Carrito from './Carrito';

function App() {

  const [productos, setProductos] = useState([
    { id: 1, nombre: 'camisa ReactJS', precio: 10},
    { id: 2, nombre: 'camisa Angular', precio: 50},
    { id: 3, nombre: 'camisa VueJS', precio: 40},
    { id: 4, nombre: 'camisa Node.js', precio: 30},
  ]);

  const [ carrito, setCarrito ] = useState([])

  const fecha = new Date().getFullYear();

	return (
		<>
			<Header 
        titulo='Tienda Virtual'
      />

      <h1>Lista Producto</h1>
      {productos.map(producto => (
        <Producto 
          productos={productos}
          key={producto.id}
          producto={producto}       
          carrito={carrito}
          setCarrito={setCarrito}
        />
      ))}

      <Carrito 
        carrito={carrito}
        productos={productos}
        setCarrito={setCarrito}
      />
			<Footer 
        fecha={fecha}
      />

    </>	
	);
}

export default App;
