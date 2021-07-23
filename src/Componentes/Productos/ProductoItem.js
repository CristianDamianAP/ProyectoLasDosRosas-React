import React, { useContext } from 'react';
import { DataContext, DataProvider } from '../../Context/Dataprovider';


export const ProductoItem = ({
    id,
    title,
    price,
    image,
    category
}) => {

    const value = useContext(DataContext);
    const addCarrito = value.addCarrito;
    

    return (
        <div className="producto">
        <a href="#">
            <div className="producto__img">
                <img src={image.default} alt={title} />
            </div>
        </a>
        <div className="producto__footer">
            <h1>{title}</h1>
            <p>{category}</p>
            <p className="price">${price}</p>
        </div>
        <div className="buttom">
            <button className="btn" onClick={()=> addCarrito(id)}> Añadir al Carrito </button>
            <div>
                <a href="#" className="btn">Vista</a>
            </div>
        </div>
        {/*<div>
        {Array(5)
        .fill()
        .map((_, i)=> (
          <p>&#11088;</p>
        ))} 
        </div>*/}
        
    </div>
    )
}