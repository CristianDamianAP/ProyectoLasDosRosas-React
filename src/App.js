import React from 'react'
import { Header } from "./Componentes/Header"
import 'boxicons';
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Paginas } from "./Componentes/Paginas";
import { DataProvider } from "./Context/Dataprovider"
import {Carrito} from "./Componentes/Carrito"
function App() {
  return (
    <DataProvider>
    <div className="App">
      <Router>
     <Header/>
     <Carrito/>
     <Paginas/>
     </Router>
    </div>
    </DataProvider>
  );
}

export default App;
