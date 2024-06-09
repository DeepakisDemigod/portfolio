import './App.css';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path='/'
            element={<Hero />}
          />
          <Route
            path='/About'
            element={<About />}
          />
          <Route
            path='/contact'
            element={<Contact />}
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
