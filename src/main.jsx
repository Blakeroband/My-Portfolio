import ReactDom from 'react-dom/client';
import { createBrowserRouter } from 'react-router-dom';
import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    Children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/About',
        element: <About />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
      {
        path: '/Portfolio',
        element: <Portfolio />,
      },
      {
        path: '/Resume',
        element: <Resume />,
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
