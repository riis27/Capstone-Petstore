import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import FAQs from './pages/FAQs';
import Adoption from './pages/Adoption';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chatbox from './components/Chatbox';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/adoption" element={<Adoption />} />
        <Route path="/services" element={<Services />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Chatbox />
      <Footer />
    </Router>
  );
}

export default App;
