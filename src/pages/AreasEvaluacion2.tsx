import React from 'react';
import { useNavigate } from 'react-router-dom';

const AreasEvaluacion2: React.FC = () => {
  const navigate = useNavigate(); 

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <div>
      <h1>Áreas de Evaluación</h1>
      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        {/* Lectura Crítica */}
        <div style={{ width: '300px', margin: '20px', border: '1px solid #ccc', borderRadius: '8px', padding: '16px', textAlign: 'center' }}>
          <img src="https://i0.wp.com/www.julianmarquina.es/wp-content/uploads/Lectura-critica-juventud.jpg?fit=1200%2C800&ssl=1" alt="Lectura Crítica" style={{ width: '100%', borderRadius: '8px 8px 0 0' }} />
          <h3>Lectura Crítica</h3>
          <p>Evaluación de la capacidad de interpretar y analizar textos de manera crítica.</p>
          <button onClick={() => handleNavigate('/lectura-critica')}>Presentar prueba</button>
          
        </div>

        {/* Matemáticas */}
        <div style={{ width: '300px', margin: '20px', border: '1px solid #ccc', borderRadius: '8px', padding: '16px', textAlign: 'center' }}>
          <img src="https://ario.com.co/wp-content/uploads/2022/06/board-ge2db63895_1280-1-1024x682.jpg" alt="Matemáticas" style={{ width: '100%', borderRadius: '8px 8px 0 0' }} />
          <h3>Razonamiento Cuantitativo</h3>
          <p>Evaluación de habilidades matemáticas y razonamiento lógico.</p>
          <button onClick={() => handleNavigate('/Matematicas')}>Presentar prueba</button>
        </div>

        {/* Sociales y Ciudadanas */}
        <div style={{ width: '300px', margin: '20px', border: '1px solid #ccc', borderRadius: '8px', padding: '16px', textAlign: 'center' }}>
          <img src="https://www.lacoladerata.co/wp-content/uploads/2020/09/competencias-ciudadanas3.jpg" alt="Sociales y Ciudadanas" style={{ width: '100%', borderRadius: '8px 8px 0 0' }} />
          <h3>Competencias Ciudadanas</h3>
          <p>Evaluación de competencias ciudadanas y sociales.</p>
          <button onClick={() => handleNavigate('/sociales-ciudadanas')}>Presentar prueba</button>
        </div>

        {/* Ciencias Naturales */}
        <div style={{ width: '300px', margin: '20px', border: '1px solid #ccc', borderRadius: '8px', padding: '16px', textAlign: 'center' }}>
          <img src="https://img.freepik.com/vector-premium/linda-ilustracion-ciencia-espacial_123891-43126.jpg?semt=ais_hybrid" alt="Ciencias Naturales" style={{ width: '100%', borderRadius: '8px 8px 0 0' }} />
          <h3>Ciencias Naturales</h3>
          <p>Evaluación de conocimientos sobre ciencias naturales.</p>
          <button onClick={() => handleNavigate('/ciencias-naturales')}>Presentar prueba</button>
        </div>

        {/* Inglés */}
        <div style={{ width: '300px', margin: '20px', border: '1px solid #ccc', borderRadius: '8px', padding: '16px', textAlign: 'center' }}>
          <img src="https://t1.uc.ltmcdn.com/es/posts/7/6/9/lista_de_conectores_en_ingles_42967_600.webp" alt="Inglés" style={{ width: '100%', borderRadius: '8px 8px 0 0' }} />
          <h3>Inglés</h3>
          <p>Evaluación de habilidades en el idioma inglés.</p>
          <button onClick={() => handleNavigate('/ingles')}>Presentar prueba</button>
        </div>
      </div>
    </div>
  );
};


const buttonStyle = {
    backgroundColor: '#007BFF',
    color: 'blue',
    border: 'none',
    padding: '20px 30px',
    borderRadius: '10px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s ease',
    marginTop: '15px',
    //padding: '10px 20px',
    //backgroundColor: '#007bff',
    //color: 'white',
    //border: 'none',
    //borderRadius: '5px',
    //cursor: 'pointer',
    
  };

  
  //buttonStyle[':hover'] = {
    //backgroundColor: '#0056b3',
  //};

export default AreasEvaluacion2;
