// src/components/Home.tsx
import React, { useState } from 'react';

const Home: React.FC = () => {
  // Estados para el formulario de contacto
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');

  
  const biografia = `
    Bienvenidos a Qualitas, donde estamos comprometidos en brindar una educación personalizada y de calidad.
    Nos especializamos en la realización de pruebas, simulacros y exámenes personalizados, diseñados para ayudarte a alcanzar
    tus objetivos académicos y profesionales. Nuestro equipo de expertos se dedica a ofrecer un soporte educativo
    excepcional, guiándote en cada paso de tu preparación. ¡Confía en nosotros para llevar tus conocimientos al siguiente nivel!
  `;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica para manejar el envío del formulario
    console.log({
      nombre,
      correo,
      mensaje,
    });
  };

  return (
    <div>
      {/* Contenido Principal con imagen de fondo */}
      <main style={styles.main}>
        <div style={styles.overlay}>
          <h2 style={styles.mainText}>QUALITAS comprometidos contigo</h2>
          <p style={styles.subText}>Realización de pruebas | Simulacros | Exámenes personalizados</p>
          <button style={styles.ctaButton}>Contáctanos</button>
        </div>
      </main>

      {/* Sección de Biografía */}
      <section style={styles.bioSection}>
        <h2 style={styles.bioTitle}>Quienes Somos</h2>
        <p style={styles.bioText}>{biografia}</p>
      </section>

      {/* Sección de Contacto */}
      <section id="contacto" style={styles.contactSection}>
        <h2 style={styles.contactTitle}>Contáctanos</h2>
        <form onSubmit={handleSubmit} style={styles.contactForm}>
          <div style={styles.formGroup}>
            <label htmlFor="nombre" style={styles.formLabel}>Nombre</label>
            <input
              type="text"
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              style={styles.formInput}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="correo" style={styles.formLabel}>Correo</label>
            <input
              type="email"
              id="correo"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              style={styles.formInput}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="mensaje" style={styles.formLabel}>Mensaje</label>
            <textarea
              id="mensaje"
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              style={styles.formTextarea}
              rows={5}
              required
            />
          </div>
          <button type="submit" style={styles.submitButton}>
            Enviar
          </button>
        </form>
      </section>
    </div>
  );
};

// Estilos en línea para mantener el ejemplo sencillo
const styles: { [key: string]: React.CSSProperties } = {
  main: {
    height: '100vh',
    backgroundImage: 'url("https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjzBv98WG1qpPagnh00Va-GO6rlf95GBt5r32KeT2BHaKqp7AvQWOjTfSEzO-lRvKINsEe2NOxeX_rsPCKV_k1CGiHJOfNJ7ejFme4_nvmKWeZ5fOTbgVgq0CchnF_kkrO9gsMdlNOqpXA7/s1600/blog.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: '20px',
    borderRadius: '10px',
  },
  mainText: {
    fontSize: '3rem',
    margin: 0,
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
  },
  subText: {
    fontSize: '1.5rem',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
  },
  ctaButton: {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '1.2rem',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },
  bioSection: {
    padding: '40px 20px',
    backgroundColor: '#ffffff',
    textAlign: 'center',
    marginBottom: '50px',
    borderRadius: '15px', // Bordes redondeados
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
    maxWidth: '700px', 
    margin: '0 auto', 
    border: '2px solid #007bff', 
  },
  bioTitle: {
    fontSize: '2.5rem',
    marginBottom: '20px',
    color: '#333',
  },
  bioText: {
    fontSize: '1.2rem',
    lineHeight: '1.6',
    color: '#555',
  },
  contactSection: {
    padding: '20px 10px',
    backgroundColor: '#f9f9f9',
    marginBottom: '90px',
  },
  contactTitle: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  contactForm: {
    maxWidth: '600px',
    margin: '0 auto',
  },
  formGroup: {
    marginBottom: '20px',
  },
  formLabel: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
  },
  formInput: {
    width: '100%',
    padding: '5px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '16px',
  },
  formTextarea: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '16px',
  },
  submitButton: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default Home;
