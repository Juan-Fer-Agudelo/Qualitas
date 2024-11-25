import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}

const PruebaCompleta: React.FC = () => {
  const navigate = useNavigate();

  const questions: Question[] = [
    { question: "¿Cuál es el propósito principal del autor en un texto informativo?", options: ["Persuadir", "Informar", "Divertir", "Criticar"], correctAnswer: "Informar" },
    { question: "¿Qué técnica se utiliza para persuadir al lector en un artículo de opinión?", options: ["Narración", "Descripción", "Argumentación", "Exposición"], correctAnswer: "Argumentación" },
    { question: "Si un texto describe los beneficios de la lectura, ¿cuál es el tipo de texto?", options: ["Expositivo", "Narrativo", "Argumentativo", "Descriptivo"], correctAnswer: "Expositivo" },
    { question: "¿Cuál de los siguientes recursos es una figura retórica?", options: ["Metáfora", "Oración compleja", "Hecho", "Opinión"], correctAnswer: "Metáfora" },
    { question: "¿Cuál es el tema principal de un artículo sobre cambio climático?", options: ["Problemas ambientales", "Tecnología", "Economía global", "Salud mental"], correctAnswer: "Problemas ambientales" },
    { question: "Un texto comienza describiendo una situación y luego la resuelve. Este es un ejemplo de:", options: ["Comparación", "Causa-efecto", "Problema-solución", "Orden cronológico"], correctAnswer: "Problema-solución" },
    { question: "¿Cuál es la raíz cuadrada de 144?", options: ["12", "14", "16", "10"], correctAnswer: "12" },
    { question: "Si tienes 3/4 de un pastel y comes 1/2, ¿cuánto te queda?", options: ["1/2", "1/4", "3/4", "1/8"], correctAnswer: "1/4" },
    { question: "En una gráfica lineal, la pendiente es de 2. ¿Qué representa la pendiente?", options: ["El punto de intersección con el eje y", "La tasa de cambio", "La intersección con el eje x", "El máximo valor"], correctAnswer: "La tasa de cambio" },
    { question: "Si el precio de un producto es de $100 y aumenta en un 10%, ¿cuál es el nuevo precio?", options: ["$110", "$105", "$120", "$115"], correctAnswer: "$110" },
    { question: "Si 5x + 3 = 18, ¿cuál es el valor de x?", options: ["2", "3", "5", "4"], correctAnswer: "3" },
    { question: "Si un tren viaja a 60 km/h durante 3 horas, ¿qué distancia recorre?", options: ["180 km", "200 km", "150 km", "90 km"], correctAnswer: "180 km" },
    { question: "¿Qué es la democracia?", options: ["Un sistema de gobierno donde gobierna una sola persona.", "Un sistema donde el poder reside en la ciudadanía.", "Un sistema económico.", "Un tipo de dictadura."], correctAnswer: "Un sistema donde el poder reside en la ciudadanía." },
    { question: "¿Cuál es el principal derecho que otorga la libertad de expresión?", options: ["Decir lo que uno quiera sin límites.", "Manifestar opiniones sin represalias.", "Crear leyes a voluntad.", "Controlar medios de comunicación."], correctAnswer: "Manifestar opiniones sin represalias." },
    { question: "¿Qué institución garantiza los derechos fundamentales en la Constitución?", options: ["El Congreso", "La Corte Suprema", "La Policía", "El Gobierno"], correctAnswer: "La Corte Suprema" }
  ];

  const handleBackClick = () => {
    navigate('/Services'); // Cambia '/ruta-del-componente-destino' a la ruta del componente al que quieres regresar.
  };

  const [answers, setAnswers] = useState<string[]>(Array(questions.length).fill(""));
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);

  const handleAnswerChange = (index: number, selectedAnswer: string) => {
    const newAnswers = [...answers];
    newAnswers[index] = selectedAnswer;
    setAnswers(newAnswers);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setShowSuccessMessage(true);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Simulacro de Prueba Completa</h1>
      <form onSubmit={handleSubmit}>
        {questions.map((q, index) => (
          <div key={index} style={styles.questionContainer}>
            <p style={styles.questionText}>{index + 1}. {q.question}</p>
            {q.options.map((option) => (
              <label key={option} style={styles.optionLabel}>
                <input
                  type="radio"
                  name={`question-${index}`}
                  value={option}
                  checked={answers[index] === option}
                  onChange={() => handleAnswerChange(index, option)}
                />
                {option}
              </label>
            ))}
          </div>
        ))}
        <button type="submit" style={styles.submitButton}>Enviar respuestas</button> 
        <br></br>
        <button
        style={{ ...styles.button, marginTop: '10px' }}
        onClick={handleBackClick}
      >
        Volver
      </button>
      </form>

      {showSuccessMessage && (
        <div style={styles.successMessage}>
          <strong>¡Tus respuestas se enviaron con éxito!</strong>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f4',
    padding: '20px',
    borderRadius: '10px',
    maxWidth: '600px',
    margin: '0 auto',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  title: {
    textAlign: 'center' as 'center',
    color: '#333',
    marginBottom: '20px',
  },
  questionContainer: {
    marginBottom: '20px',
    padding: '10px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  questionText: {
    fontWeight: 'bold' as 'bold',
    color: '#333',
    marginBottom: '10px',
  },
  optionLabel: {
    display: 'block' as 'block',
    marginBottom: '5px',
    color: '#555',
  },
  submitButton: {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  successMessage: {
    marginTop: '20px',
    padding: '10px',
    backgroundColor: '#d4edda',
    color: '#155724',
    borderRadius: '5px',
    textAlign: 'center' as 'center',
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
};

export default PruebaCompleta;
