import React from 'react';
import { atom, useRecoilState } from 'recoil';

const counterState = atom({
  key: "counterState",
  default: 1,
})

function App() {

  const [counter, setCounter] = useRecoilState(counterState);

  return (
    <div className="App">
      <h1>
         Hello World <br /> A simple counter made with Redux!
      </h1>
      <h3>Counter</h3>
      <h3>{counter}</h3>
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
    </div>
  );
}

export default App;
