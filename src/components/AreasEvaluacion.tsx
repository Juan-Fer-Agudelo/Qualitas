//Este componente ya no se utiliza, se  puede borrar mas adelante.
import React from 'react';
import { useNavigate } from 'react-router-dom';

// Definir las áreas de evaluación con descripciones
const areas = [
  {
    name: 'Lectura Crítica',
    description: 'Evaluación de la capacidad de interpretar y analizar textos de manera crítica.',
    imageUrl: 'https://i0.wp.com/www.julianmarquina.es/wp-content/uploads/Lectura-critica-juventud.jpg?fit=1200%2C800&ssl=1',
  },
  {
    name: 'Razonamiento Cuantitativo',
    description: 'Evaluación de habilidades matemáticas y de razonamiento lógico.',
    imageUrl: 'https://ario.com.co/wp-content/uploads/2022/06/board-ge2db63895_1280-1-1024x682.jpg',
  },
  {
    name: 'Competencias Ciudadanas',
    description: 'Evaluación de la formación cívica y compromiso social.',
    imageUrl: 'https://www.lacoladerata.co/wp-content/uploads/2020/09/competencias-ciudadanas3.jpg',
  },
  {
    name: 'Comunicación Escrita',
    description: 'Evaluación de las habilidades de redacción y organización de ideas.',
    imageUrl: 'https://humanidades.com/wp-content/uploads/2017/05/comunicacion-escrita-5-e1568916213961.jpg',
  },
  {
    name: 'Inglés',
    description: 'Evaluación del nivel de comprensión y expresión en el idioma inglés.',
    imageUrl: 'https://t1.uc.ltmcdn.com/es/posts/7/6/9/lista_de_conectores_en_ingles_42967_600.webp',
  },
];

const AreasEvaluacion: React.FC = () => {
  const navigate = useNavigate();

  const handlePresentarPrueba = (area: string) => {
    // Navegar al componente donde el usuario presentará la prueba para el área seleccionada
    navigate(`/SpecificTest/${area}`);
  };

  return (
    <section style={styles.section}>
      <h2 style={styles.title}>Áreas de Evaluación</h2>
      <div style={styles.grid}>
        {areas.map((area) => (
          <div key={area.name} style={styles.card}>
            <img src={area.imageUrl} alt={area.name} style={styles.image} />
            <div style={styles.content}>
              <h3 style={styles.areaName}>{area.name}</h3>
              <p style={styles.description}>{area.description}</p>
              <button
                style={styles.button}
                onClick={() => handlePresentarPrueba(area.name)}
              >
                Presentar prueba
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Estilos en línea
const styles = {
  section: {
    padding: '20px',
    textAlign: 'center' as const,
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '20px',
    justifyContent: 'center',
  },
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    textAlign: 'left' as const,
  },
  image: {
    width: '100%',
    height: '150px',
    objectFit: 'cover' as const,
  },
  content: {
    padding: '15px',
  },
  areaName: {
    fontSize: '18px',
    fontWeight: 'bold',
  },
  description: {
    marginTop: '10px',
    fontSize: '14px',
    color: '#555',
  },
  button: {
    marginTop: '15px',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default AreasEvaluacion;
