import { useState } from 'react'
import './index.scss'

const questions = [
  {
    title: 'React - это ... ?',
    variants: ['библиотека', 'фреймворк', 'приложение'],
    correct: 0,
  },
  {
    title: 'Компонент - это ... ',
    variants: [
      'приложение',
      'часть приложения или страницы',
      'то, что я не знаю что такое',
    ],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это тот же HTML, но с возможностью выполнять JS-код',
    ],
    correct: 2,
  },
]

function Result({ setQuestion, setCorrect, correct }) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>Вы отгадали {correct} ответа из 3</h2>
      <button
        onClick={() => {
          setQuestion(0)
          setCorrect(0)
        }}
      >
        Попробовать снова
      </button>
    </div>
  )
}

function Game({ title, variants, correct, number, setQuestion }) {
  const percents = (100 * number) / 3
  console.log(number)
  return (
    <>
      <div className="progress">
        <div
          style={{ width: `${percents}%` }}
          className="progress__inner"
        ></div>
      </div>
      <h1>{title}</h1>
      <ul>
        {variants.map((variant, index) => (
          <li onClick={() => setQuestion(correct, index)}>{variant}</li>
        ))}
      </ul>
    </>
  )
}

function App() {
  const [question, setQuestion] = useState(0)
  const [correct, setCorrect] = useState(0)
  function handleSetQuestion(correctAnswer, idx) {
    setQuestion(question + 1)

    if (correctAnswer === idx) {
      setCorrect(correct + 1)
    }
    console.log(correctAnswer, idx)
  }

  return (
    <div className="App">
      {question < 3 && (
        <Game
          setQuestion={handleSetQuestion}
          number={question}
          {...questions[question]}
        />
      )}
      {question === 3 && (
        <Result
          setCorrect={setCorrect}
          setQuestion={setQuestion}
          correct={correct}
        />
      )}
    </div>
  )
}

export default App
