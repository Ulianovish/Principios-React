import React from 'react';
import './carrito.css';
import Producto from './Producto';

const Carrito = ({ carrito, productos, setCarrito }) => (
	<div className="carrito">
		<h2>Tu carrito de compras</h2>
		{carrito.length === 0 ? (
			<p>el carro esta vacio</p>
		) : (
			carrito.map((producto) => (
				<Producto key={producto.id} producto={producto} carrito={carrito} setCarrito={setCarrito} />
			))
		)}
	</div>
);

export default Carrito;
