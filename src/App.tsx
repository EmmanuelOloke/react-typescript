import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';

function App() {
  const personName = {
    first: 'Tony',
    last: 'Stark',
  };

  const nameList = [
    {
      first: 'Captain',
      last: 'America',
    },
    {
      first: 'Scarlet',
      last: 'Witch',
    },
    {
      first: 'Black',
      last: 'Widow',
    },
  ];

  return (
    <>
      <Greet name="Pope" messageCount={28} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
    </>
  );
}

export default App;
