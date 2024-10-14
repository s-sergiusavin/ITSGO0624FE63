import './App.css';
import DemoComponent from './components/DemoComponent';

function App() {
  const persons = [
    {
      fullName: 'Adrian Popa',
      birthday: new Date(1990, 6, 30),
      address: {
        city: 'Oradea'
      }
    },
    {
      fullName: 'Adrian Ceva',
      birthday: new Date(1993, 0, 31),
      address: {
        city: 'NuStiu'
      }
    }
  ]

  return (
    <div>
      <h1>This is my first ReactJS App</h1>

      <DemoComponent name={persons[0].fullName} birthday={persons[0].birthday}></DemoComponent>
      <DemoComponent name={persons[1].fullName} birthday={persons[1].birthday} />
      <DemoComponent name={'Nume nou'} birthday={persons[0].birthday} />
    </div>
  );
}

export default App
