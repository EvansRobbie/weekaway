import './App.css';
import Acivity from './components/Acivity';
import Booking from './components/Booking';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Topbar from './components/Topbar';

function App() {
  return (
    <div>
      <Topbar/>
      <Navbar/>
      <Hero/>
      <Acivity/>
      <Booking/>
      <Gallery/>
      <Contact/>
      <Footer/>
      
    </div>
  );
}

export default App;
