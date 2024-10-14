import "./App.css";
import DemoComponent from "./DemoComponent.jsx";

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
      birthday: new Date(1990, 0, 31),
      address: {
        city: "Bucharest",
      },
    },
  ];

  return (
    <div>
      <h1>This is my first ReactJs app</h1>

      <DemoComponent name={persons[0].fullName}></DemoComponent>
      <DemoComponent name={persons[1].fullName} />
    </div>
  );
}

export default App;
