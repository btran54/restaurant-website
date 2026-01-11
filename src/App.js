import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import ContactUs from './ContactUs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
