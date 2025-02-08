import Nav from './components/NavTabs';
import {Outlet} from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';

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

export default App;