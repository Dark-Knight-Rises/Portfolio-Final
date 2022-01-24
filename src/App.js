import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Cards from './components/Cards';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
