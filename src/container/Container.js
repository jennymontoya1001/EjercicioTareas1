import React from 'react';
import { AgregarTarea } from '../components/AgregarTarea';
import { ListarTarea } from '../components/ListarTarea';


export const Container = ({data}) => {


    return (
        <div className="container mt-5">
            <h1>Tareas</h1>
            <hr />
            <div className="row">

                <div div className="col-8">
                    <ListarTarea tarea={data}/>
                </div>

                <div div className="col-4">
                    <AgregarTarea />
                </div>

            </div>
        </div>
    )
}
