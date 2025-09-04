import {JSX, type ReactNode, useEffect, useState} from 'react';
import {Child} from './Child.tsx';
import * as React from 'react';

type GreeterProps = { message: JSX.Element, onAlert: () => void, count2: number };

export function Greeter({message, onAlert, count2}: GreeterProps) {
  

  const [gugus, gaga] = useState('Jonas');
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Greeter effect -coutn')
    return () => {
      console.log('Greeter cleanup -coiutn')
    }
  }, [count])

  useEffect(() => {
    console.log('Greeter effect- gugus')
    return () => {
      console.log('Greeter cleanup -gugus')
    }
  }, [gugus])

  console.log('Rendering Greeter')

  function onFirstNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    gaga(e.target.value)
  }


  function increment() {
    setCount(count + 1);
    onAlert();
  }

  return <div>
    {/*<h1>Hello, {gugus}</h1>*/}
    <h1>Child Count {count}</h1>
    {message}
    <h3>{count2}</h3>
    <button onClick={increment}>Increment Child Count</button>
    <input type="text" value={gugus} onChange={onFirstNameChange}/>
    {/*<Child/>*/}
  </div>
} 