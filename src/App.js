import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Cards from './components/Cards';
import Data from './components/Data';

function App() {
  const cards = Data.map(obj => {
    return (
      <Cards
        key={obj.id}
        name={obj.name}
        image={obj.image}
        link={obj.link}
      />
    )
  })
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="card--list">
        {cards}
      </div>
      <Footer />
    </div>
  );
}

export default App;
