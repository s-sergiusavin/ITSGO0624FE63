<<<<<<< HEAD
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
=======
import "./App.css";
import DemoComponent from "./components/DemoComponent";

function App() {
  const persons = [
    {
      fullName: "Sergiu Savin",
      birthday: new Date(1990, 6, 30),
      address: {
        city: "Brasov",
      },
    },
    {
      fullName: "Sergiu Altceva",
      birthday: new Date(1991, 0, 31),
      address: {
        city: "Bucharest",
      },
    },
  ];

  return (
    <div>
      <h1>This is my first ReactJs app</h1>

      <DemoComponent
        name={persons[0].fullName}
        birthday={persons[0].birthday}
      ></DemoComponent>
      <DemoComponent
        name={persons[1].fullName}
        birthday={persons[1].birthday}
      />
      <DemoComponent
        name={'Nume Nou'}
        birthday={persons[1].birthday}
      />
    </div>
  );
}

export default App;
>>>>>>> main
