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
                    <h2>Página Principal</h2>
                    <p>Bienvenido a nuestra aplicación de sonidos de animales. Aquí puedes descargar nuestras aplicaciones.</p>
                    <div className="download-buttons">
                        <button>Descargar Versión Escritorio Gratuita</button>
                        <button>Descargar Versión Escritorio de Pago</button>
                        <button>Descargar Versión Android Gratuita</button>
                        <button>Descargar Versión Android de Pago</button>
                        <button>Descargar Versión iOS de Pago</button>
                    </div>
                </main>
            </div>
        );
    }
}

export default Home;
