import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';

function App() {
  const personName = {
    first: 'Tony',
    last: 'Stark',
  };
  return (
    <>
      <Greet name="Pope" messageCount={28} isLoggedIn={false} />
      <Person name={personName} />
    </>
  );
}

export default App;
