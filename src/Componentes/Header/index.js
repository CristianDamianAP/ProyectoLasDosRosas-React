import React, {useContext} from 'react'
import Nov from "../../images/Nov.png";
import { Link } from "react-router-dom";
import { DataContext } from "../../Context/Dataprovider"

export const Header = () => {
    const value = useContext(DataContext);
    const [menu, setMenu] = value.menu;
    const [carrito] = value.carrito

    
    const toogleMenu = () =>{
        setMenu(!menu)
    }
 

    return (
        <header>
            <Link to="/">
               <div className="logo">
                <img src={Nov} alt="logo" width="120"/>
               </div>
            </Link>
            <ul>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/productos">Productos</Link>
                </li>
                <li>   
                <Link to="/">Iniciar Sesion</Link>  
                </li>
            </ul>
            <div className="cart" onClick={toogleMenu}>
                <box-icon name="cart"></box-icon>
                <span className="item__total">{carrito.length}</span>
            </div>
        </header>
    )
}
