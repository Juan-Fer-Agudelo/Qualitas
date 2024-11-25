/*import React, { useState } from 'react';
import axios from 'axios'; // Asegúrate de instalar axios

interface RegisterFormProps{}

export const Register: React.FC<RegisterFormProps> = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState<string>('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Las contraseñas no coinciden");
            return;
        }

        try {
            const response = await axios.post('http://localhost:3001/api/register', {
                name: username,
                email,
                password,
            });
            setMessage('Registro Exitoso') // Mensaje de éxito del backend
        } catch (error:any) {
            setMessage('Error al registrar el usuario' + error.response.data.message);
        }
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

export default Register;*/


import React from "react";

const Register: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Regístrate</h1>
      <p style={styles.subtitle}>Comencemos con tu prueba gratuita de 30 días</p>
      <form style={styles.form}>
        <input type="text" placeholder="Name" style={styles.input} />
        <input type="email" placeholder="Email" style={styles.input} />
        <input type="password" placeholder="Password" style={styles.input} />
        <button type="submit" style={styles.createAccountButton}>
          Crear Cuenta
        </button>
        <p style={styles.loginText}>
          ¿Ya tienes una cuenta?{" "}
          <a href="/login" style={styles.loginLink}>
            Log in
          </a>
        </p>
        <button type="button" style={styles.appleButton}>
          <span>🍎</span> Regístrate con Apple
        </button>
        <button type="button" style={styles.googleButton}>
          <span>🔵</span> Regístrate con Google
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "400px",
    margin: "2 auto",
    padding: "30px",
    borderRadius: "20px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center" as const,
    fontFamily: "Arial, sans-serif",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold" as const,
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "14px",
    color: "gray",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "15px",
  },
  input: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },
  createAccountButton: {
    backgroundColor: "#1579b9",
    color: "white",
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    fontSize: "16px",
    cursor: "pointer",
  },
  loginText: {
    fontSize: "14px",
    color: "gray",
    marginTop: "10px",
  },
  loginLink: {
    color: "#1579b9",
    textDecoration: "none",
  },
  appleButton: {
    backgroundColor: "black",
    color: "white",
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    fontSize: "16px",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
  },
  googleButton: {
    backgroundColor: "white",
    color: "black",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "16px",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
  },
};

export default Register;




