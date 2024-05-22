import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export class Home extends React.Component {
    render() {
        return (
            <div>
                <header className="header">
                    <div className="auth-buttons">
                        <Link to="/registro">
                            <button className="auth-button">Register</button>
                        </Link>
                        <Link to="/login">
                            <button className="auth-button">Login</button>
                        </Link>
                    </div>
                </header>
                <main>
                    <h2>P�gina Principal</h2>
                    <p>Bienvenido a nuestra aplicaci�n de sonidos de animales. Aqu� puedes descargar nuestras aplicaciones.</p>
                    <div className="download-buttons">
                        <button>Descargar Versi�n Escritorio Gratuita</button>
                        <button>Descargar Versi�n Escritorio de Pago</button>
                        <button>Descargar Versi�n Android Gratuita</button>
                        <button>Descargar Versi�n Android de Pago</button>
                        <button>Descargar Versi�n iOS de Pago</button>
                    </div>
                </main>
            </div>
        );
    }
}

export default Home;
