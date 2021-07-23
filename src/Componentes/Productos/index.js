import React, { useContext } from 'react';
import { DataContext } from "../../Context/Dataprovider";
import { ProductoItem } from "./ProductoItem";

export const ProductosLista = () => {

    const value = useContext(DataContext)
    const [productos] = value.productos

    console.log(productos)
    
    return (
        <>
          <h1 className="title">Productos</h1>
            <div className="productos">
                { productos.map((producto) => (
                    <ProductoItem 
                    key={producto.id}
                    id={producto.id}
                    title={producto.title} 
                    price={producto.price}
                    image={producto.image}
                    category={producto.caregory}
                    cantidad={producto.cantidad}
                    />   
                    ))}
            </div>
        </>
    );
}
