import './App.css';
import { useState } from 'react';
import kitty from './kitty.png';
import kitty2 from './kitten2.jpg';

function App() {
  const [blessed, setBlessed] = useState("Boop the kitten for luck");
  const [image, setImage] = useState(kitty);

  const handleClick = () => {
    setBlessed("💖Kitten has blessed you💖")
    setImage(kitty2);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>{ blessed }</h1>
        <img onClick={ handleClick} src={ image } alt="a kitten"></img>
      </header>
    </div>
  );
}

export default App;
