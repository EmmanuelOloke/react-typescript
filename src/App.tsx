import './App.css';
import { Button } from './components/Button';
import { Container } from './components/Container';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Input } from './components/Input';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { LoggedIn } from './components/state/LoggedIn';

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
      <Button handleClick={(event) => console.log('Button Clicked', event)} />
      <Input value="" handleChange={(event) => console.log(event)} />
      <Container styles={{ border: '1px solid black', padding: '1rem' }} />
      <LoggedIn />
    </>
  );
}

export default App;
