import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Navbar from './Navbar';
import Contact from './Contact';
import Settings from './Settings';
import Ui from './Ui';
import UserProfile from './UserProfile';
function App() {
  return (
    <Router>
      <Navbar />
      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact/settings" element={<Settings />} />
          <Route path="/contact/settings/ui" element={<Ui />} />
          <Route path="/user/:username" element={<UserProfile />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
