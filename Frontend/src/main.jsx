import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Books from './Pages/Books.jsx';
import Favorite from './Pages/Favorite.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
    {path: "/about", element: <About /> },
      {path: "/books", element: <Books />},
      {path: "/favorite", element: <Favorite />}
  ],
      
    }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)