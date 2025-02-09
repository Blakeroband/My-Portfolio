// outlet is used to render the components into the DOM
import {Outlet} from 'react-router-dom';
// footer renders the footer of my website at the bottom of the main
import Footer from './components/Footer';
// headers renders my header component at the top of my page
import Header from './components/Header';


// function App() creates the main structure of the website
function App() {
  return (
    <main>
      <Header/>
      <main className='mx-3'>
        <Outlet />
      </main>
      <Footer />
    </main>
  );
}

//export app allows my app to be used in other files that import it
export default App;