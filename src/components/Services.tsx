import React from 'react';
import { useNavigate } from 'react-router-dom';

const Services: React.FC = () => {
  const navigate = useNavigate();

  const handleAreasEvaluacion = () => {
    navigate('/AreasEvaluacion'); // Redirigir a la página de areas de evaluacion
  };

    const handlePruebacompleta=()=>{
      navigate('/Pruebacompleta');
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Nuestros Servicios</h2>
      <div style={styles.servicesGrid}>
        
        {/* Servicio 1: Simulacro de prueba completa */}
        <div style={styles.serviceCard}>
          <h3 style={styles.serviceTitle}>Simulacro de Prueba Completa</h3>
          <p style={styles.serviceDescription}>
            Evalúa las siguientes 6 áreas de conocimiento:
          </p>
          <ul style={styles.areaList}>
            <li>Lectura crítica</li>
            <li>Razonamiento cuantitativo</li>
            <li>Comunicación escrita</li>
            <li>Competencias ciudadanas</li>
            <li>Inglés</li>
          </ul>
          {/*<button style={styles.button}>presentar Simulacro de prueba completa</button>*/}
          <button style={styles.button} onClick={handlePruebacompleta}>
            Presentar la prueba completa
          </button>
        </div>

        {/* Servicio 2: Prueba específica */}
        <div style={styles.serviceCard}>
          <h3 style={styles.serviceTitle}>Prueba Específica</h3>
          <p style={styles.serviceDescription}>
            Elige el área de conocimiento que deseas evaluar.
          </p>
          <button style={styles.button} onClick={handleAreasEvaluacion}>
            Elegir Área específica
          </button>
        </div>
        
      </div>
    </div>
  );
};

// Estilos en línea
const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
  },
  title: {
    textAlign: 'center' as const,
    marginBottom: '20px',
    color: '#333',
  },
  servicesGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',
  },
  serviceCard: {
    padding: '50px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f9f9f9',
  },
  serviceTitle: {
    fontSize: '18px',
    fontWeight: 'bold' as const,
    marginBottom: '10px',
  },
  serviceDescription: {
    marginBottom: '10px',
  },
  areaList: {
    marginBottom: '10px',
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

export default Services;
