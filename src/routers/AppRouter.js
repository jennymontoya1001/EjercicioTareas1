import React,{ useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import { Container } from '../container/Container';
import { Navbar } from '../components/Navbar';
import { DetalleTarea } from '../components/DetalleTarea';
import { url } from '../helpers/url';

export const AppRouter = () => {

    const [tareas, setTareas] = useState([])

    useEffect(() => {
        cargarDatos();
    }, [])

    const cargarDatos = async () => {
        const respuesta = await fetch(url);
        const datos = await respuesta.json();
        setTareas(datos);
    }

    return (
        <div>
            <Router>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Container data={tareas}/>} />
                    <Route exact path="/detalle/:id" element={<DetalleTarea detalle={tareas}/>} />
                </Routes>
            </Router>
        </div>
    )
}
