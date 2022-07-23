import { useState } from 'react';

import ButtonIncremente from './components/ButtonIncremente';
import ButtonDecremente from './components/ButtonDecremente';
import ButtonReset from './components/ButtonReset';

import logo from './assets/logo.svg';

function App() {
  const [counter, setCounter] = useState(0);
  const reset = () => setCounter(0);
  return (
    <>
      <div className='App'>
        <h1>
          <span className='header'>
            <img src={logo} alt='image_calculate'></img>
          </span>
          React Counter
        </h1>
        <div className='section'>
          <div className='containerButton'>
            <ButtonDecremente counter={counter} setCounter={setCounter} />
            <p className='counter'>{counter}</p>
            <ButtonIncremente counter={counter} setCounter={setCounter} />
          </div>
          <ButtonReset counter={reset} setCounter={reset} />
        </div>
        <div className='footer'>
          <p>
            Made with<span className='text_footer'>React</span>at
            <span className='text_footer'>Le Reacteur</span> by
            <span className='text_footer'>Farid Bouras</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
