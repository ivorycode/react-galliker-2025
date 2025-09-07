import { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Routes,
  Route,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
// import  ToDoScreen  from './components/ToDoScreen';
// import  DoneScreen  from './components/DoneScreen';

const ToDoScreen = lazy(() => import("./components/ToDoScreen"));
const DoneScreen = lazy(() => import("./components/DoneScreen"));

export function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        // staleTime: 10000,
      },
    },
  });

  return (
    <div className="App">
      <div className="todoapp-header">
        <h1 id="title">Simplistic ToDo</h1>
        <h4>A most simplistic ToDo List in React.</h4>
      </div>

      <section className="todoapp">
        <QueryClientProvider client={queryClient}>
          <Router>
            <div className="nav">
              <NavLink to="/" className="selected">
                Pending
              </NavLink>
              <NavLink to="/done" className="selected">
                Done
              </NavLink>
            </div>

            <Suspense fallback={<div>Loading ...</div>}>
              <Routes>
                <Route path="/done" element={<DoneScreen />} />
                <Route path="/" element={<ToDoScreen />} />
              </Routes>
            </Suspense>
          </Router>
          <ReactQueryDevtools initialIsOpen={true} />
        </QueryClientProvider>
      </section>

      <footer className="info">
        <p>
          JavaScript Example / Initial template from{" "}
          <a href="https://github.com/tastejs/todomvc-app-template">
            todomvc-app-template
          </a>
        </p>
      </footer>
    </div>
  );
}
