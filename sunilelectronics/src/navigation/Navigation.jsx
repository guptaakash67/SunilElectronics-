import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

export const Navigation = ({ toggleBlur }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsOpen(!isOpen);
        toggleBlur(!isOpen);  // Toggle the blur effect
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">Sunil Electronics</div>
            <div className={`menu-toggle ${isOpen ? 'open' : ''}`} onClick={handleMenuToggle}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
            <ul className={`navbar-list ${isOpen ? 'open' : ''}`}>
                <li className="navbar-item">
                    <Link to="/" onClick={handleMenuToggle}>
                        <span className="icon">🏠</span>
                        <span className="text">Home</span>
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link to="/services" onClick={handleMenuToggle}>
                        <span className="icon">💼</span>
                        <span className="text">Services</span>
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link to="/contact" onClick={handleMenuToggle}>
                        <span className="icon">📞</span>
                        <span className="text">Contact</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
