import './App.css';
import {useDispatch, useSelector} from 'react-redux';
import { useState } from 'react';
import { Increment, Decrement,Rest, IncrByValue, DecrByValue } from './redux/actions';


function App() {
  const dispatch = useDispatch()
  const counter = useSelector(state=> state.counter);
  console.log(counter);
  const [incValue, setIncValue] = useState(1);
  const [decValue, setDecValue] = useState(1);


  const INCR = () => {
    return Increment(dispatch);
  };
  const DECR = () => {
    return Decrement(dispatch);
  };
  const REST = () => {
    return Rest(dispatch);
  };

  // increment and decrement by value
  const decrByValue = () => {
    return DecrByValue(dispatch ,Number(decValue));
  };
  const incrByValue = () => {
    return IncrByValue(dispatch, Number(incValue));
  };

  // const dynamicCounter = setInterval(() => {
  //   setCounter(counter+1)
  // }, 1000);
  return (
    <div className="App">
      <div className="counter-box">
        <h1>React Redux Counter</h1>
        <p> {counter <= 0 ? 0: counter}</p>
        <div className="btn-container">
          <span>
            <button onClick={incrByValue}>incr by value</button>
            <input
              type="number"
              min={1}
              value={incValue}
              onChange={(e) => setIncValue(e.target.value)}
            />
          </span>
          {/*######################################################################################################*/}
          <div className="button-box">
            <button onClick={INCR}>Increment</button>
            <button onClick={REST}>Rest</button>
            <button disabled={counter === 0 ? true : false} onClick={DECR}>
              decrement
            </button>
          </div>
          {/*######################################################################################################*/}

          <span>
            <button onClick={decrByValue}>incr by value</button>
            <input
              type="number"
              min={1}
              value={decValue}
              onChange={(e) => setDecValue(e.target.value)}
            />
          </span>
          {/*######################################################################################################*/}
        </div>
      </div>
    </div>
  );
}

export default App;
