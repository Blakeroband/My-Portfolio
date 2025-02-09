// ReactDom is used to render the components into the Document object model (DOM).
import ReactDom from 'react-dom/client';
// createBrowserRouter and RouterProvider are used to create a router for the website.
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// index.css is used to style the website. (not sure if i was suppose to have a style sheet for each page but this worked fine)
import './index.css'
// App is the main component that is rendered into the DOM
import App from './App.jsx'
// About is the component that renders my information found in the about page
import About from './pages/About.jsx';
// Contact is the component that renders my contact information found in the contact page
import Contact from './pages/Contact.jsx';
// Portfolio is the component that renders my portfolio found in the portfolio page
// right now it is only rendering 3 cards with clickable links to my github repositories
import Portfolio from './pages/Portfolio.jsx';
// Resume is the component that renders my resume found in the resume page
import Resume from './pages/Resume.jsx';


// router is created using createBrowserRouter and the routes are defined in the array as objects
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <About />
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


// ReactDom is used to render the router into the DOM
ReactDom.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
