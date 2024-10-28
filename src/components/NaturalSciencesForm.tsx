import React from 'react';
import { useNavigate } from 'react-router-dom';
import FormComponent from './FormComponent';

const NaturalSciencesForm: React.FC = () => {
    const navigate = useNavigate();

    const questions = [
      { question: "¿Cuál es la célula más básica?", options: ["Animal", "Vegetal", "Procariota", "Eucariota"], correctAnswer: "Procariota" }, // Respuesta correcta: "Procariota"
      { question: "¿Qué es fotosíntesis?", options: ["Respiración animal", "Almacenamiento de agua", "Producción de oxígeno", "Transformación de luz en energía"], correctAnswer: "Transformación de luz en energía" }, // Respuesta correcta: "Transformación de luz en energía"
      { question: "¿Qué es el ADN?", options: ["Molécula genética", "Proteína", "Carbohidrato", "Mineral"], correctAnswer: "Molécula genética" }, // Respuesta correcta: "Molécula genética"
      { question: "¿Cuál es el planeta más cercano al sol?", options: ["Tierra", "Venus", "Mercurio", "Marte"], correctAnswer: "Mercurio" }, // Respuesta correcta: "Mercurio"
      { question: "¿Qué estudia la ecología?", options: ["Fósiles", "Ecosistemas", "Rocas", "Minerales"], correctAnswer: "Ecosistemas" } // Respuesta correcta: "Ecosistemas"
    ];

  const handleBackClick = () => {
    navigate('/AreasEvaluacion2'); // Cambia '/ruta-del-componente-destino' a la ruta del componente al que quieres regresar.
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Lectura Crítica</h2>
      {questions.map((q, index) => (
        <div key={index} style={styles.questionContainer}>
          <p style={styles.question}>{index + 1}- {q.question}</p>
          <div style={styles.optionContainer}>
            {q.options.map((option, idx) => (
              <label key={idx} style={styles.option}>
                <input type="radio" name={`question-${index}`} value={option} style={{ marginRight: '8px' }} />
                {option}
              </label>
            ))}
          </div>
        </div>
      ))}
      <button
        style={styles.button}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor as string}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = styles.button.backgroundColor as string}
        onClick={() => alert('Respuestas enviadas')}
      >
        Enviar respuestas
      </button>
      <br></br>
      <button
        style={{ ...styles.button, marginTop: '10px' }}
        onClick={handleBackClick}
      >
        Volver
      </button>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '600px',
    margin: 'auto',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
    textAlign: 'center',
  },
  questionContainer: {
    marginBottom: '20px',
  },
  question: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  optionContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  option: {
    fontSize: '16px',
    marginBottom: '5px',
  },
  button: {
    fontSize: '16px',
    padding: '10px 20px',
    color: 'white',
    backgroundColor: '#007BFF',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
};

export default NaturalSciencesForm;
