// import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Portfolio from './pages/Portfolio/Portfolio';
import Resume from './pages/Resume/Resume';
import Contact from './pages/Contact/Contact';
import './App.css';


function App() {
  return (
    <>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
