import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './home';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                {/* Diğer rotalar */}
                {/* <Route path="/about" element={<AboutPage />} /> */}
                {/* <Route path="/services" element={<ServicesPage />} /> */}
                {/* <Route path="/contact" element={<ContactPage />} /> */}
            </Routes>
        </Router>
    );
}

export default App;
