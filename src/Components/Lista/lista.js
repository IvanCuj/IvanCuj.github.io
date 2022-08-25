//import { Link, userParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
//import Swal from "sweetalert2";
import './lista'


const Lista = () => {
    const [listadoFormulario, setListadoFormulario] = useState([]);

    useEffect(() => {
        axios.get("https://aqueous-savannah-79860.herokuapp.com/api/participantes").then((res) => {
            setListadoFormulario(res.data.Formularios)
        })
    });
    return (
        <div>
            <section className="main-content">
                <div className="container">
                    <h1>Usuario Registrados</h1>

                    <table className="table">
                        <thead>
                            <tr>
                                <th>User</th>
                                <th>Tipo Poesia</th>
                                <th>Carrera</th>
                                <th>Fecha Entrega</th>
                                <th>Fecha Incripcion</th>
                            </tr>
                        </thead>
                        {listadoFormulario.map((datos) => {
                            return (
                                <tbody key={datos._id}>
                                    <tr >
                                        <td>
                                            <div className="user-info">
                                                <div className="user-info__basic">
                                                    <h5 className="mb-0">{datos.nombre} </h5>
                                                    <p className="text-muted mb-0">Carnet: {datos.carnet} </p>
                                                </div>
                                            </div>
                                        </td>

                                        <td> {datos.tipoPoesia} </td>
                                        <td> {datos.carrera}</td>
                                        <td> {datos.fechaEntrega} </td>
                                        <td> {datos.fechaIncripcion} </td>

                                    </tr>
                                </tbody>

                            )
                        })}


                    </table>
                </div>
            </section >


        </div >
    );
};

export default Lista;