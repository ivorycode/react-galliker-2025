import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Greeter} from './Greeter.tsx';
import {Child} from './Child.tsx';


// function Greeter() {
//   return <h1>Hello, world!!!!!</h1>
// } 

function App() {
  const [count, setCount] = useState(0)

  const input = ['apple', 'zitrone', 'banana', 'orange'];
  
  function increment() {
    setCount(count => count + 1);
  }
  
  let message = <h2>Hello World!</h2>;
  let showGreeter = true
  if (count % 2 === 1) {
    // showGreeter = false;
    message = <h3>Hello Universe!</h3>;
  }
  
  function handleAlert() {
    alert('Alert from Greeter!!!!')
  }
  
  console.log('Rendering App')
  return (
    <>
    <div>Gugus</div>
    <div>
      <a href="https://vite.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo"/>
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo"/>
      </a>
      <Greeter message={message} onAlert={handleAlert} count2={42} />
      

      <Child/>

      <div className="card">
        <button onClick={increment}>
          count is {count}
        </button>
        <h2>
          Edit <code>src/App.tsx</code> and save to test HMR
        </h2>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
    </>
  )
}


export default App
