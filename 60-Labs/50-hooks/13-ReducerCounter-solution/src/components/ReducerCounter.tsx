import {useEffect, useReducer, useState} from "react";
import "./Counter.css";
import {CounterAction, counterReducer, createInitialCounterState} from './counterState';


interface ReducerCounterProps {
  count: number;
  dispatch: (actioon: CounterAction) => void;
}

export function ReducerCounter({count, dispatch} : ReducerCounterProps) {
  
  return (
    <div className="counter">
      <h3>The Counter:</h3>
      <h2>{count}</h2>
      <button onClick={() => dispatch({type: 'increment'})} >Increment</button>
      <button onClick={() => dispatch({type: 'decrement'})} >Decrement</button>
      <button onClick={() => dispatch({type: 'reset'})} >Reset</button>
    </div>
  );
}
