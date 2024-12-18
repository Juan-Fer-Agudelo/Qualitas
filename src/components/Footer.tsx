import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer style={styles.footer}>
            <br></br>
            <p style={styles.text}>© 2024 Qualitas. Todos los derechos reservados.</p>
                <h5>Educación superior de calidad</h5>
                <ul>
                    <li>Categorias llamativas</li>
                    <li>Excelentes resultados</li>
                    <li>Contactos</li>
                    <li>Descripción de servicios</li>
                </ul>
        </footer>

    );
};

const styles = {
    footer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#126aa2',
        color: '#fff',
        padding: '35px',
        //position: 'fixed',
        bottom: 0,
        width: '100%',
    } as React.CSSProperties,
    text: {
        margin: 0,
    } as React.CSSProperties,
};

export default Footer;
