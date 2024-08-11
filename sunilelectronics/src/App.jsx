// src/App.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useState } from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigation } from "./navigation/Navigation.jsx"
import { Header} from "./homepage/Header.jsx"
import { HomePage } from "./homepage/HomePage.jsx" // Adjusted import path
import { Footer } from "./homepage/Footer.jsx"
import { Contact } from "./contact/Contact.jsx"
import { Services } from "./services/Services.jsx"

function App() {
    const [isBlurred, setIsBlurred] = useState(false);

    return (
        <Router>
            <Navigation toggleBlur={setIsBlurred} />
            <div className={`main-content ${isBlurred ? 'blurred' : ''}`}>
                <Header />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;


