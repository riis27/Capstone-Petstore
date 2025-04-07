import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Adoption from './pages/Adoption';
import Services from './pages/Services';
import FAQs from './pages/FAQs';
import Booking from './pages/Booking';
import Contact from './pages/Contact';
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
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/registered" element={<Registered />} />
      </Routes>
      <Chatbox />
      <Footer />
    </Router>
  );
}

export default App;
