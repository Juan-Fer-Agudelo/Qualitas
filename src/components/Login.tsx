import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';




const Login: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        //desde este lugar manejo la logica de autenticacion
        console.log({ email, password });
    };
    
        const navigate = useNavigate();
      
        const handleLogin = () => {
          navigate('/Services');   
       //services es la ruta donde quiero llegar
        };

    return (
        <div style={styles.container}>
            <form onSubmit={handleSubmit} style={styles.form}>
                <h2 style={styles.title}>Login</h2>
                <div style={styles.inputGroup}>
                    <label htmlFor="email" style={styles.label}>Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={styles.input}
                    />
                </div>
                <div style={styles.inputGroup}>
                    <label htmlFor="password" style={styles.label}>Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={styles.input}
                    />
                </div>
                {/*<button onClick={handleLogin}>Iniciar sesión</button>*/}
                <button onClick={handleLogin} style={{ backgroundColor: '#007BFF', color: 'white', padding: '10px 20px' }}>Iniciar sesión</button>
            </form>
        </div>
    );
};

const styles: { [key: string]: React.CSSProperties } = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '70vh',
        backgroundColor: '#f5f5f5',
    },
    form: {
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '16px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        width: '300px',
    },
    title: {
        textAlign: 'center',
        marginBottom: '15px',
    },
    inputGroup: {
        marginBottom: '20px',
    },
    label: {
        display: 'block',
        marginBottom: '5px',
    },
    input: {
        width: '94%',
        padding: '10px',
        borderRadius: '4px',
        border: '2px solid #ccc',
        fontSize: '16px',
    },
   loginbutton: {
        width: '100%',
        padding: '10px',
        backgroundColor: '#007BFF',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '16px',
    },
    
};

export default Login;
