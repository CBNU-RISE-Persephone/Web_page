import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home'
import Teams from './Pages/Teams'
import About from './Pages/About'
import FAQ from './Pages/FAQ'
import Data from './Pages/Data'
import ContactUs from './Pages/ContactUs'
import './styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/data" element={<Data />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
