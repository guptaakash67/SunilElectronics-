import React from 'react';
import './Home.css';
import Slideshow from './Slideshow';

export const HomePage = () => {
    return (
        <main className="home">
            <section className="hero">
                <h1>Welcome to Sunil TV Repairing Shop</h1>
                <p>Your one-stop solution for all TV repairs</p>
            </section>
            <section className="repair-images">
                <Slideshow />
            </section>
            <section className="about">
                <h2>About Us</h2>
                <p>We have been providing expert repair services for various electronics for over 10 years. Our technicians are highly skilled and use the latest technology to diagnose and fix your issues quickly and efficiently.</p>
            </section>
        </main>
    );
};

export default HomePage;