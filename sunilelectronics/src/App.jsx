// src/App.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigation } from "./components/Navigation.jsx"
import { Header} from "./homepage/Header.jsx"
import { HomePage } from "./homepage/HomePage.jsx" // Adjusted import path
import { Footer } from "./homepage/Footer.jsx"
import { Services } from "./services/Services.jsx"


function App() {
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <Services/>
                <Header />
                <Navigation />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<About />} />
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


