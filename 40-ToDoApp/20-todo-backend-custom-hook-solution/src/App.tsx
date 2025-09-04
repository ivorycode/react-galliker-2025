import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
// import  ToDoScreen  from './components/ToDoScreen';
// import  DoneScreen } from './components/DoneScreen';
import './App.css';

const ToDoScreen = lazy(() => import('./components/ToDoScreen'));
const DoneScreen = lazy(() => import('./components/DoneScreen'));

export function App() {
  return (
    <div className="App">
      <div className="todoapp-header">
        <h1 id="title">Simplistic ToDo</h1>
        <h4>A most simplistic ToDo List in React.</h4>
      </div>

      <section className="todoapp">
        <Router>
          <div className="nav">
            <NavLink end to="/" className={({isActive}) => isActive ? " selected" : ""}>
              Pending
            </NavLink>
            <NavLink to="/done" className={({isActive}) => isActive ? " selected" : ""}>
              Done
            </NavLink>
          </div>

          <Suspense fallback={<div>Loading ...</div>}>
            <Routes>
              <Route path="/done" element={ <DoneScreen />} />
              <Route path="/" element={<ToDoScreen />}/>
            </Routes>
          </Suspense>
        </Router>
      </section>

      <footer className="info">
        <p>
          JavaScript Example / Initial template from <a href="https://github.com/tastejs/todomvc-app-template">todomvc-app-template</a>
        </p>
      </footer>
    </div>
  );
}
