import React, { useState } from 'react';
import '../App.css';
import Twitter from "../images/twitter.png"
import Linkedin from "../images/linkedin.png"
import Facebook from "../images/facebook.png"
import Instagram from "../images/instagram.png"
import Github from "../images/github.png"
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

const questionsData = [
  {
    id: 1,
    text: '¿Cuál es el nombre del abuelo en Rick and Morty?',
    options: ['Rick', 'Morty', 'Jerry', 'Birdperson'],
    correctAnswer: 'Rick',
  },
  // Pregunta 2
  {
    id: 2,
    text: '¿Qué especie es Birdperson?',
    options: ['Humano', 'Gaviota', 'Cyborg', 'Alien'],
    correctAnswer: 'Alien',
  },
  // Pregunta 3
  {
    id: 3,
    text: '¿Cómo se llama la dimensión hogar de Rick?',
    options: ['Dimensión C-137', 'Dimensión XYZ', 'Dimensión 123', 'Dimensión WXYZ'],
    correctAnswer: 'Dimensión C-137',
  },
  // Pregunta 4
  {
    id: 4,
    text: '¿Quién es el mejor amigo de Morty?',
    options: ['Birdperson', 'Jerry', 'Rick', 'Summer'],
    correctAnswer: 'Birdperson',
  },
  // Pregunta 5
  {
    id: 5,
    text: '¿Cuál es el trabajo de Rick en la Policía Galáctica?',
    options: ['Guardia de seguridad', 'Detective', 'Oficial de aduanas', 'Recepcionista'],
    correctAnswer: 'Oficial de aduanas',
  },
  // Pregunta 6
  {
    id: 6,
    text: '¿Cómo se llama la hermana de Rick?',
    options: ['Beth', 'Summer', 'Jessica', 'Tammy'],
    correctAnswer: 'Beth',
  },
  // Pregunta 7
  {
    id: 7,
    text: '¿Cuál es el nombre del planeta natal de Birdperson?',
    options: ['Planeta Avian', 'Planeta Bird', 'Planeta Earth', 'Planeta Squanch'],
    correctAnswer: 'Planeta Squanch',
  },
  // Pregunta 8
  {
    id: 8,
    text: '¿Qué criatura vive en la cabeza de Jerry?',
    options: ['Gusano de la memoria', 'Pájaro', 'Alien Parasitario', 'Mini Jerry'],
    correctAnswer: 'Alien Parasitario',
  },
  // Pregunta 9
  {
    id: 9,
    text: '¿Cuál es el nombre del vecino de Rick?',
    options: ['Mr. Johnson', 'Mr. Sanchez', 'Mr. Smith', 'Mr. Goldenfold'],
    correctAnswer: 'Mr. Goldenfold',
  },
  // Pregunta 10
  {
    id: 10,
    text: '¿Cuál es el nombre del bar de interdimensional de Rick?',
    options: ['The Portal', 'The Infinite', 'The Multiverse', 'The Citadel'],
    correctAnswer: 'The Citadel',
  },
];

const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);

  const handleAnswer = () => {
    const currentAnswer = questionsData[currentQuestionIndex].correctAnswer;
    if (selectedOption === currentAnswer) {
      setScore(score + 1);
    }

    // Avanzar a la siguiente pregunta
    if (currentQuestionIndex < questionsData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null); // Reiniciar la opción seleccionada para la nueva pregunta
    }
  };

  return (
    <div className="game-container">
        // Mostrar preguntas mientras haya más preguntas disponibles
        <div>
          <br></br>
          <br></br>
          <div>
            <h2 className="question-title">{questionsData[currentQuestionIndex].text}</h2>
            <ul className="options-list">
              {questionsData[currentQuestionIndex].options.map((option, index) => (
                <li
                  key={index}
                  className={`option-item ${selectedOption === option ? 'selected' : ''}`}
                  onClick={() => setSelectedOption(option)}
                >
                  {option}
                </li>
              ))}
            </ul>
            <button className="answer-button" onClick={handleAnswer}>
              Enviar respuesta
            </button>
            {selectedOption && (
              <p className={`feedback ${selectedOption === questionsData[currentQuestionIndex].correctAnswer ? 'correct' : 'incorrect'}`}>
                {selectedOption === questionsData[currentQuestionIndex].correctAnswer ? '¡Correcto!' : 'Incorrecto. Elige otra respuesta.'}
              </p>
            )}
          </div>
        </div>
        <div>
          <h1 className="game-title">¡SCORE!</h1>
          <p>Tu conteo de aciertos es: {score} de {questionsData.length}</p>
        </div>
      

<MDBFooter className='bg-dark text-center text-white'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <img src={Facebook} alt="" style={{ width: "30px", height: "30px" }} />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
          <img src={Twitter} alt="" style={{ width: "30px", height: "30px" }} />
          </MDBBtn>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
          <img src={Instagram} alt="" style={{ width: "30px", height: "30px" }} />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
          <img src={Linkedin} alt="" style={{ width: "30px", height: "30px" }} />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <img src={Github} alt="" style={{ width: "30px", height: "30px" }} />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
    </div>
    
  );
};

export default App;
