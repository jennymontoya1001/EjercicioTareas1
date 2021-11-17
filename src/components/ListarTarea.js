import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {url} from '../helpers/url';

export const ListarTarea = ({ tarea }) => {


    const eliminarDatos = async(id) => {
        await fetch(url+id,{
            method: 'DELETE'
        })
    }

  
    return (
        <div>
            <h3 className="text-center">Lista de Tareas</h3>
            <ul className="list-group">
                {
                    tarea.map(t => (
                        <li className="list-group-item" key={t.id}>
                            <span className="lead">{t.nombre}</span>
                            <button
                                className="btn btn-danger btm-sm float-end "
                                onClick={() => eliminarDatos(t.id)}
                            >
                                borrar
                            </button>
                            <Link
                                className="btn btn-success btm-sm float-end mx-2"
                                to={`/detalle/${t.id}`}
                            >
                                Detalle
                            </Link>
                        </li>
                    ))
                }

            </ul>
        </div>
    )
}
