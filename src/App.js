import { useState } from 'react';

import ButtonIncremente from './components/ButtonIncremente';
import ButtonDecremente from './components/ButtonDecremente';
import ButtonReset from './components/ButtonReset';

function App() {
  const [counter, setCounter] = useState(0);
  const reset = () => setCounter(0);
  return (
    <div className='App'>
      <h1>React Counter</h1>
      <p>{counter}</p>
      <ButtonIncremente counter={counter} setCounter={setCounter} />
      <ButtonDecremente counter={counter} setCounter={setCounter} />
      <ButtonReset counter={reset} setCounter={reset} />
    </div>
  );
}

export default App;
