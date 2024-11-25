import React from 'react';
import { useNavigate } from 'react-router-dom';

const SpecificTest: React.FC = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Elige un Área de Conocimiento</h2>
      <ul style={styles.areaList}>
        <li>Lectura crítica</li>
        <li>Razonamiento cuantitativo</li>
        <li>Comunicación escrita</li>
        <li>Competencias ciudadanas</li>
        <li>Inglés</li>
      </ul>
    </div>
  );
};

// Estilos en línea
const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
  },
  title: {
    textAlign: 'center' as const,
    marginBottom: '20px',
    color: '#333',
  },
  areaList: {
    listStyleType: 'none' as const,
    padding: '0',
    textAlign: 'center' as const,
  },
};

export default SpecificTest;
