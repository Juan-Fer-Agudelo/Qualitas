import React, { useState } from 'react';

const Register: React.FC = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Las contraseñas no coinciden");
            return;
        }
        //logica para el  envio del formulario
        console.log({ username, email, password });
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Registro</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.inputGroup}>
                    <label style={styles.label}>Nombre de Usuario:</label>
                    <input 
                        type="text" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} 
                        style={styles.input} 
                        required
                    />
                </div>
                <div style={styles.inputGroup}>
                    <label style={styles.label}>Correo Electrónico:</label>
                    <input 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                        style={styles.input} 
                        required
                    />
                </div>
                <div style={styles.inputGroup}>
                    <label style={styles.label}>Contraseña:</label>
                    <input 
                        type="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} 
                        style={styles.input} 
                        required
                    />
                </div>
                <div style={styles.inputGroup}>
                    <label style={styles.label}>Confirmar Contraseña:</label>
                    <input 
                        type="password" 
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)} 
                        style={styles.input} 
                        required
                    />
                </div>
                <button type="submit" style={styles.button}>Registrarse</button>
            </form>
        </div>
    );
};

// Estilos en línea
const styles = {
    container: {
        maxWidth: '400px',
        margin: '0 auto',
        padding: '50px',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#f9f9f9',
    },
    title: {
        textAlign: 'center' as const,
        marginBottom: '20px',
        color: '#333',
    },
    form: {
        display: 'flex',
        flexDirection: 'column' as const,
    },
    inputGroup: {
        marginBottom: '15px',
    },
    label: {
        marginBottom: '5px',
        fontWeight: 'bold' as const,
        color: '#555',
    },
    input: {
        width: '100%',
        padding: '10px',
        fontSize: '16px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        boxSizing: 'border-box' as const,
    },
    button: {
        padding: '10px',
        fontSize: '16px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
};

export default Register;
