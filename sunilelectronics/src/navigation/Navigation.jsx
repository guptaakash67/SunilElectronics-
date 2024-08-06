// src/components/Navigation.jsx
import { Link } from 'react-router-dom';
import './Navigation.css';

export const Navigation = () => {
    return (
        
            <nav className="navbar">
                <div className="logo">Sunil Electronics</div>
                <ul className="navbar-list">
                    <li className="navbar-item">
                        <Link to="/">
                            <div className="link-content">
                                <span className="icon"></span>
                                <span className="text">Home</span>
                            </div>
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/services">
                            <div className="link-content">
                                <span className="icon">💼</span>
                                <span className="text">Services</span>
                            </div>
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/contact">
                            <div className="link-content">
                                <span className="icon">📞</span>
                                <span className="text">Contact</span>
                            </div>
                        </Link>
                    </li>
                </ul>
            </nav>
        );
    };



export default Navigation;