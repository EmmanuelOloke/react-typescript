import './App.css';
import { Greet } from './components/Greet';

function App() {
  return (
    <>
      <Greet name="Pope" messageCount={28} isLoggedIn={false} />
    </>
  );
}

export default App;
