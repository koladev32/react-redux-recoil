import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import {increment} from "./store/actions"


function App() {

  const {counter} = useSelector((state:any) => state);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>
         Hello World <br /> A simple counter made with Redux!
      </h1>
      <h3>Counter</h3>
      <h3>{counter}</h3>
      <button onClick={() => dispatch(increment())}>Increase</button>
    </div>
  );
}

export default App;
