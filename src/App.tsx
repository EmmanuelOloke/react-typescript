import './App.css';
import { Box } from './components/context/Box';
import { ThemeContextProvider } from './components/context/ThemeContext';
import { Button } from './components/Button';
import { Container } from './components/Container';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Input } from './components/Input';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { Counter } from './components/state/Counter';
import { LoggedIn } from './components/state/LoggedIn';
import { User } from './components/state/User';
import { UserContextProvider } from './components/context/UserContext';
import { ContextUser } from './components/context/ContextUser';
import { MutableRef } from './components/ref/MutableRef';
import { CounterClass } from './components/class/CounterClass';
import { Private } from './components/auth/Private';
import { Profile } from './components/auth/Profile';
import { List } from './components/generics/List';
import { RandomNumber } from './components/restriction/RandomNumber';
import { Toast } from './components/templateliterals/Toast';
import { CustomButton } from './components/html/Button';
import { Text } from './components/polymorphic/Text';

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
      <User />
      <Counter />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>

      <UserContextProvider>
        <ContextUser />
      </UserContextProvider>

      <MutableRef />

      <CounterClass message="The count value is:" />

      <Private isLoggedIn={true} component={Profile} />

      {/* <List items={['Sharon', 'Obianuju', 'Orekelewa']} onClick={(item) => console.log(item)} />
      <List items={[1, 2, 3]} onClick={(item) => console.log(item)} /> */}
      <List
        items={[
          {
            id: 1,
            first: 'Bruce',
            last: 'Wayne',
          },
          {
            id: 2,
            first: 'Clark',
            last: 'Kent',
          },
          {
            id: 3,
            first: 'Princess',
            last: 'Diana',
          },
        ]}
        onClick={(item) => console.log(item)}
      />

      <RandomNumber value={5} isPositive />

      <Toast position="center" />

      <CustomButton variant="primary" onClick={() => console.log('Clicked')}>
        Primary Button
      </CustomButton>

      <Text as="h1" size="lg">
        Heading
      </Text>
      <Text as="p" size="md">
        Paragraph
      </Text>
      <Text as="label" htmlFor="someId" size="sm" color="secondary">
        Label
      </Text>
    </>
  );
}

export default App;
