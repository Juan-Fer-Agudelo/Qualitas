import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';


// Define the type for a question
interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}

const PruebaCompleta: React.FC = () => {
  // Create the list of 15 questions
  const questions: Question[] = [
    {
      question: "¿Cuál es el propósito principal del autor en un texto informativo?",
      options: ["Persuadir", "Informar", "Divertir", "Criticar"],
      correctAnswer: "Informar",
    },
    {
      question: "¿Qué técnica se utiliza para persuadir al lector en un artículo de opinión?",
      options: ["Narración", "Descripción", "Argumentación", "Exposición"],
      correctAnswer: "Argumentación",
    },
    {
      question: "Si un texto describe los beneficios de la lectura, ¿cuál es el tipo de texto?",
      options: ["Expositivo", "Narrativo", "Argumentativo", "Descriptivo"],
      correctAnswer: "Expositivo",
    },
    {
      question: "¿Cuál de los siguientes recursos es una figura retórica?",
      options: ["Metáfora", "Oración compleja", "Hecho", "Opinión"],
      correctAnswer: "Metáfora",
    },
    {
      question: "¿Cuál es el tema principal de un artículo sobre cambio climático?",
      options: ["Problemas ambientales", "Tecnología", "Economía global", "Salud mental"],
      correctAnswer: "Problemas ambientales",
    },
    {
      question: "Un texto comienza describiendo una situación y luego la resuelve. Este es un ejemplo de:",
      options: ["Comparación", "Causa-efecto", "Problema-solución", "Orden cronológico"],
      correctAnswer: "Problema-solución",
    },
    {
      question: "¿Cuál es la raíz cuadrada de 144?",
      options: ["12", "14", "16", "10"],
      correctAnswer: "12",
    },
    {
      question: "Si tienes 3/4 de un pastel y comes 1/2, ¿cuánto te queda?",
      options: ["1/2", "1/4", "3/4", "1/8"],
      correctAnswer: "1/4",
    },
    {
      question: "En una gráfica lineal, la pendiente es de 2. ¿Qué representa la pendiente?",
      options: ["El punto de intersección con el eje y", "La tasa de cambio", "La intersección con el eje x", "El máximo valor"],
      correctAnswer: "La tasa de cambio",
    },
    {
      question: "Si el precio de un producto es de $100 y aumenta en un 10%, ¿cuál es el nuevo precio?",
      options: ["$110", "$105", "$120", "$115"],
      correctAnswer: "$110",
    },
    {
      question: "Si 5x + 3 = 18, ¿cuál es el valor de x?",
      options: ["2", "3", "5", "4"],
      correctAnswer: "3",
    },
    {
      question: "Si un tren viaja a 60 km/h durante 3 horas, ¿qué distancia recorre?",
      options: ["180 km", "200 km", "150 km", "90 km"],
      correctAnswer: "180 km",
    },
    {
      question: "¿Qué es la democracia?",
      options: ["Un sistema de gobierno donde gobierna una sola persona.", "Un sistema donde el poder reside en la ciudadanía.", "Un sistema económico.", "Un tipo de dictadura."],
      correctAnswer: "Un sistema donde el poder reside en la ciudadanía.",
    },
    {
      question: "¿Cuál es el principal derecho que otorga la libertad de expresión?",
      options: ["Decir lo que uno quiera sin límites.", "Manifestar opiniones sin represalias.", "Crear leyes a voluntad.", "Controlar medios de comunicación."],
      correctAnswer: "Manifestar opiniones sin represalias.",
    },
    {
      question: "¿Qué institución garantiza los derechos fundamentales en la Constitución?",
      options: ["El Congreso", "La Corte Suprema", "La Policía", "El Gobierno"],
      correctAnswer: "La Corte Suprema",
    }
  ];

  // State to track the user's answers
  const [answers, setAnswers] = useState<string[]>(Array(questions.length).fill(""));

  // State to show success message after submission
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);

  // Function to handle answer selection
  const handleAnswerChange = (index: number, selectedAnswer: string) => {
    const newAnswers = [...answers];
    newAnswers[index] = selectedAnswer;
    setAnswers(newAnswers);
  };

  // Function to handle form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setShowSuccessMessage(true); // Show the success message on submit
  };

  return (
    <div>
      <h1>Simulacro de Prueba Completa</h1>
      <form onSubmit={handleSubmit}>
        {questions.map((q, index) => (
          <div key={index}>
            <p>{index + 1}. {q.question}</p>
            {q.options.map((option) => (
              <label key={option}>
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
        <button type="submit">Enviar respuestas</button>
      </form>

      {/* Success message that will appear after submission */}
      {showSuccessMessage && (
        <div style={{ marginTop: "20px", padding: "10px", backgroundColor: "#d4edda", color: "#155724", borderRadius: "5px" }}>
          <strong>¡Tus respuestas se enviaron con éxito!</strong>
        </div>
      )}
    </div>
  );
};

export default PruebaCompleta;
