import { createBrowserRouter, Navigate } from "react-router-dom";
import { lazy } from "react";
import { AppContent } from "./AppContent";

// import ToDoScreen from './components/ToDoScreen';
// import DoneScreen from './components/DoneScreen';
// import DetailScreen from './components/DetailScreen';

const ToDoScreen = lazy(() => import("./components/ToDoScreen"));
const DoneScreen = lazy(() => import("./components/DoneScreen"));
const DetailScreen = lazy(() => import("./components/DetailScreen"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppContent />,
    children: [
      { path: "/", element: <ToDoScreen /> },
      { path: "/done", element: <DoneScreen /> },
      { path: "/detail/:id", element: <DetailScreen /> },
    ],
  },
  { path: "*", element: <Navigate to="/" /> },
]);
