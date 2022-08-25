import './App.css';
import {  Routes, Route } from "react-router-dom";

import Formulario from "./Components/formulario/formulario.js";
import Lista from "./Components/Lista/lista";



function App() {
  
  return (
    
      <Routes >
        <Route path="/" element={ <Formulario/> } exact />
        <Route path="/Listas" element={ <Lista/> } exact />
      </Routes>
  );
}

export default App;
