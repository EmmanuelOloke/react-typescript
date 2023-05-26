import './App.css';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';

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
      <Greet name="Pope" isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="error" />
      <Heading>Na the heading be this</Heading>
      <Oscar>
        <Heading>Oscar goes to Tony Stark</Heading>
      </Oscar>
    </>
  );
}

export default App;
