import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home'
// import Teams from './Components/Teams'
import About from './Pages/About'
import Data from './Pages/Data'
// import ContactUs from './Components/ContactUs'
import './styles/App.scss';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/data" element={<Data />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
