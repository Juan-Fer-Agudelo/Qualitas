import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <nav style={styles.nav}>
            <h1 style={styles.logo}>Qualitas</h1>
            <ul style={styles.navLinks}>
                <li>
                    <Link to="/home" style={styles.link}>Home</Link> {/*si al darle click a la barra de navegacion no me lleva donde es, debo fijarme en estas lineas */}
                </li>
                <li>
                    <Link to="/login" style={styles.link}>Login</Link>
                </li>
                <li>
                    <Link to="/register" style={styles.link}>Registro</Link>
                </li>
                <li>
                    <Link to="/Services" style={styles.link}>Services</Link>
                </li>
                <li>
                    <Link to="/Pruebacompleta" style={styles.link}>PruebaCompleta</Link>
                </li>
            </ul>
        </nav>
    );
};

const styles = {
    nav: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#333',
        padding: '8px 20px',
    } as React.CSSProperties,
    logo: {
        color: '#fff',
        fontSize: '24px',
        fontWeight: 'bold',
    } as React.CSSProperties,
    navLinks: {
        listStyleType: 'none',
        display: 'flex',
        gap: '20px',
    } as React.CSSProperties,
    link: {
        color: '#fff',
        textDecoration: 'none',
        fontSize: '18px',
    } as React.CSSProperties,
};

export default Navbar;
