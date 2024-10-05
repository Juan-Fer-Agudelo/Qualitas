// src/components/Home.tsx
//import React from 'react';
import React, { useState } from 'react';

const Home: React.FC = () => {

    // Estados para el formulario de contacto
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    //logica para manejar el envío del formulario
    console.log({
      nombre,
      correo,
      mensaje,
    });
  };


  return (
    <div>
       {/* Barra de Navegación  puede ser la definitiva
       <nav style={styles.nav}>
        <h1 style={styles.logo}>Qualitas</h1>
        <ul style={styles.navLinks}>
          <li>Servicios</li>
          <li>Login</li>
          <li>Registro</li>
          <li>Contacto  </li>
        </ul>
      </nav>*/}
  
      {/*contenido Principal con imagen de fondo */}
      <main style={styles.main}>
        <div style={styles.overlay}>
          <h2 style={styles.mainText}>QUALITAS comprometidos contigo</h2>
          <p style={styles.subText}>Realización de prubas | Simulacros | Examenes personalizados</p>
          <button style={styles.ctaButton}>Contactanos</button>
        </div>
      </main>
       {/*Seccion de Servicios */}
       <section style={styles.servicesSection}>
        <h2 style={styles.sectionTitle}>Servicios</h2>
        <div style={styles.servicesGrid}>
          <div style={styles.serviceCard}>
            <h3 style={styles.serviceTitle}>Servicio 1</h3>
            <p style={styles.serviceDescription}>
              Breve descripción del servicio 1 que ofreces.
            </p>
            <button style={styles.button}>Presentar prueba</button>
          </div>
          <div style={styles.serviceCard}>
            <h3 style={styles.serviceTitle}>Servicio 2</h3>
            <p style={styles.serviceDescription}>
              Breve descripción del servicio 2 que ofreces.
            </p>
            <button style={styles.button}>Presentar prueba</button>
          </div>
          <div style={styles.serviceCard}>
            <h3 style={styles.serviceTitle}>Servicio 3</h3>
            <p style={styles.serviceDescription}>
              Breve descripción del servicio 3 que ofreces.
            </p>
            <button style={styles.button}>Presentar prueba</button>
          </div>
          {/* Puedes agregar más tarjetas aquí */}
        </div>
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
    /*nav: {
    position: 'fixed',
    top: 0,
    width: '100%',
    backgroundColor: '#333',
    color: 'white',
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    zIndex: 1000, // Asegura que esté encima del contenido
  },
  logo: {
    margin: 0,
  },
  navLinks: {
    listStyle: 'none',
    display: 'flex',
    gap: '20px', // Aumentamos el espacio entre los elementos
    marginRight: '30px', // Añadimos margen para evitar que los 'li' queden pegados al borde derecho
  },
  navButtons: {
    display: 'flex',
    gap: '10px',
  },
  navButton: {
    backgroundColor: '#555',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    cursor: 'pointer',
  },*/
  main: {
    height: '100vh', //ocupamos toda la pantalla
    backgroundImage: 'url("https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjzBv98WG1qpPagnh00Va-GO6rlf95GBt5r32KeT2BHaKqp7AvQWOjTfSEzO-lRvKINsEe2NOxeX_rsPCKV_k1CGiHJOfNJ7ejFme4_nvmKWeZ5fOTbgVgq0CchnF_kkrO9gsMdlNOqpXA7/s1600/blog.jpg")', //imagen sacada de internet
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semitransparente
    padding: '20px',
    borderRadius: '10px',
  },
  mainText: {
    //position: 'relative' as const,
    //zIndex: 1,
    //color: 'white',
    fontSize: '3rem',
    margin: 0,
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)', // Añadimos sombra al texto

  },
  subText: {
    fontSize: '1.5rem',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)', // Añadimos sombra al texto
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
  servicesSection: {
    padding: '10px 20px',
    backgroundColor: '#f4f4f4',
    textAlign: 'center',
    marginBottom: '50px', // Espacio entre la sección de servicios y el footer
  },
  sectionTitle: {
    fontSize: '2.5rem',
    marginBottom: '5px',
  },
  servicesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  serviceCard: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease',
  },
  serviceCardHover: {
    transform: 'scale(1.05)',
  },
  serviceTitle: {
    fontSize: '1.8rem',
    margin: '10px 0',
  },
  serviceDescription: {
    fontSize: '1rem',
    color: '#666',
  },
  button: {
    padding: '10px 10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    
  },
  contactSection: {
    padding: '1px 5px',
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
