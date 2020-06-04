import React from 'react';

const Producto = ({ producto,carrito, setCarrito, productos }) => {

    const seleccionarProducto = (id) => {
        const producto = productos.find(producto => producto.id === id);
        setCarrito([...carrito,producto]);
    }

    const eliminarProducto = (id) => {
        const productos = carrito.filter(producto => producto.id !== id);
        setCarrito(productos);

    }

	return  (
        <>
            <h2>{producto.nombre}</h2>
            <h3>{producto.precio}</h3>
            { productos ? (
                <button
                    type="button"
                    onClick={() => seleccionarProducto(producto.id)}
                >Comprar</button>
            ) : (
                <button
                    type="button"
                    onClick={() => eliminarProducto(producto.id)}                  
                >Eliminar</button>
            )
            }
        </>

    )
    
};

export default Producto;
