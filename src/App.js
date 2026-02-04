import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './Home';
import ContactUs from './ContactUs';

function App() {
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('language');
    return savedLanguage || 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === 'en' ? 'vi' : 'en');
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home language={language} toggleLanguage={toggleLanguage} />} />
        <Route path="/contact" element={<ContactUs language={language} toggleLanguage={toggleLanguage} />} />
      </Routes>
    </Router>
  );
}

export default App;