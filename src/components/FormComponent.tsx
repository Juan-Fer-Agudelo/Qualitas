import React, { useState } from 'react';

interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}

interface FormComponentProps {
  title: string;
  questions: Question[];
}

const FormComponent: React.FC<FormComponentProps> = ({ title, questions }) => {
  const [answers, setAnswers] = useState<string[]>(Array(questions.length).fill(""));

  const handleChange = (index: number, answer: string) => {
    const newAnswers = [...answers];
    newAnswers[index] = answer;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    console.log("Respuestas enviadas: ", answers);
    // Aquí podrías implementar una lógica para validar o enviar respuestas
  };

  return (
    <div>
      <h2>{title}</h2>
      {questions.map((q, index) => (
        <div key={index}>
          <p>{q.question}</p>
          {q.options.map((option, idx) => (
            <label key={idx}>
              <input
                type="radio"
                name={`question-${index}`}
                value={option}
                checked={answers[index] === option}
                onChange={() => handleChange(index, option)}
              />
              {option}
            </label>
          ))}
        </div>
      ))}
      <button onClick={handleSubmit}>Enviar respuestas</button>
    </div>
  );
};

export default FormComponent;
