import './App.css';
import { useState } from 'react';
import kitty from './kitty.png';

function App() {
  const [blessed, setBlessed] = useState("Boop the kitten for luck");

  const handleClick = () => {
    setBlessed("💖Kitten has blessed you💖")
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>{ blessed }</h1>
        <img onClick={ handleClick } src={ kitty } alt="a kitten"></img>
      </header>
    </div>
  );
}

export default App;
