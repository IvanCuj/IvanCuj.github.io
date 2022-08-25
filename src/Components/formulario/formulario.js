import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import './formulario.css'
//import ListGroup from 'react-bootstrap/ListGroup';
//import Card from 'react-bootstrap/Card';

const Formulario = () => {
    localStorage.clear();
    const [nombre, setNombre] = useState("");
    const [carnet, setCarnet] = useState("");
    const [direccion, setDireccion] = useState("");
    const [genero, setGenero] = useState("");
    const [telefono, setTelefono] = useState("");
    const [fechaNacimiento, setFechaNacimiento] = useState("");
    const [carrera, setCarrera] = useState("");
    const [tipoPoesia, setTipoPoesia] = useState("");


    function crearFormulario() {
        var datos = {
            nombre: nombre,
            carnet: carnet,
            direccion: direccion,
            genero: genero,
            telefono: telefono,
            fechaNacimiento: fechaNacimiento,
            carrera: carrera,
            tipoPoesia: tipoPoesia
        };

        axios
            .post('https://aqueous-savannah-79860.herokuapp.com/api/crearFormulario', datos)
            .then((res) => {
                Swal.fire({
                    icon: "success",
                    title: res.data.Formulario.fechaEntrega,
                    text: "Ya esta!!!",
                });
            }).catch((error) => {
                console.log(error);
                Swal.fire({
                    icon: "error",
                    title: error.response.data.Error,
                });
            });
    }

    return (
        <div>
            
                <div className="container col-xl-10 col-xxl-8 px-4 py-5">
                    <div className="row align-items-center g-lg-5 py-5">
                        <div className="col-md-10 mx-auto col-lg-5">

                            <form className="p-4 p-md-5 border rounded-3 bg-light form-register" >

                                <h4 >Ingrese su Informacion</h4>

                                <div className="form-floating mb-3">
                                    <input
                                        type="carnet"
                                        value={carnet}
                                        onChange={(n) => {
                                            setCarnet(n.target.value);
                                        }}
                                        name="carnet"
                                        required
                                        was-validated="true"                                        
                                        className='controls'
                                        placeholder="Ingresa tu Carnet"

                                    />
                                </div>

                                <div className="form-floating mb-3">
                                    <input
                                        type="nombre"
                                        value={nombre}
                                        onChange={(n) => {
                                            setNombre(n.target.value)
                                        }}
                                        name="nombre"
                                        className='controls'
                                        placeholder="Ingresa tu Nombre Completo"
                                        required
                                    />
                                </div>

                                <div className="form-floating mb-3">
                                    <input
                                        type="direccion"
                                        value={direccion}
                                        onChange={(n) => {
                                            setDireccion(n.target.value)
                                        }}
                                        name="direccion"
                                        className='controls'
                                        placeholder="Ingresa tu Direccion"
                                        required
                                    />
                                </div>

                                <div className="form-floating mb-3">
                                    <input
                                        type="genero"
                                        value={genero}
                                        onChange={(n) => {
                                            setGenero(n.target.value)
                                        }}
                                        name="genero"
                                        className='controls'
                                        placeholder="Ingresa tu Genero"
                                        required
                                    />
                                </div>

                                <div className="form-floating mb-3">
                                    <input
                                        type="Number"
                                        value={telefono}
                                        onChange={(n) => {
                                            setTelefono(n.target.value)
                                        }}
                                        name="telefono"
                                        className='controls'
                                        placeholder="Ingresa tu Telefono"
                                        required
                                    />
                                </div>

                                <div className="form-floating mb-3">
                                    <input
                                        type="Date"
                                        value={fechaNacimiento}
                                        onChange={(n) => {
                                            setFechaNacimiento(n.target.value)
                                        }}
                                        name="fechaNacimiento"
                                        className='controls'
                                        placeholder="Ingresa tu fecha Nacimiento"
                                        required
                                    />
                                </div>

                                <div className="form-floating mb-3">
                                    <input
                                        type="carrera"
                                        value={carrera}
                                        onChange={(n) => {
                                            setCarrera(n.target.value)
                                        }}
                                        name="carrera"
                                        className='controls'
                                        placeholder="Ingresa tu Carrera"
                                        required
                                    />
                                </div>

                                <div className="form-floating mb-3">
                                    <input
                                        type="tipoPoesia"
                                        value={tipoPoesia}
                                        onChange={(n) => {
                                            setTipoPoesia(n.target.value)
                                        }}
                                        name="tipoPoesia"
                                        className='controls'
                                        placeholder="Ingresa tu Tipo Poesia"
                                        required
                                    />
                                </div>
                                <button className="w-100 btn btn-primary btn-lg" type="submit" onClick={crearFormulario} >Ingresar</button>
                                
                                <Link to={"/Listas"}>
                                <button className="w-100 btn btn-primary btn-lg botons"  type="submit" >Ver participantes</button>
                                </Link>

                            </form>
                        </div>
                    </div>
                </div>            
        </div>
    );
};

export default Formulario;