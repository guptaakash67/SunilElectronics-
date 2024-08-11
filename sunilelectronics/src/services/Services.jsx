import React from 'react';
import './Services.css';

export const servicesData = [
    {
        title: 'TV Repair',
        description: 'We repair all types of TVs, including LED, LCD, and plasma TVs.',
        icon: '📺'
    },
    {
        title: 'LED Repair',
        description: 'Expert LED TV repair services to fix any issues with your LED TV.',
        icon: '📺', // Represents a television
    },
    {
        title: 'LCD TV Repair',
        description: 'Professional LCD TV repair services to restore your TV to perfect working condition.',
        icon: '📺',
    },
    {
        title: 'Speaker Repair',
        description: 'We provide top-notch speaker repair services to restore your audio quality.',
        icon: '🔊'
    }
];

export const Services = () => {
    return (
        <main className="services">
            <section className="services-intro">
                <h1>Our Services</h1>
                <p>We offer a wide range of repair services for your electronics. Our experienced technicians are here to help you.</p>
            </section>
            <section className="services-list">
                {servicesData.map((service, index) => (
                    <div key={index} className="service-card">
                        <div className="service-icon">{service.icon}</div>
                        <h3 className="service-title">{service.title}</h3>
                        <p className="service-description">{service.description}</p>
                    </div>
                ))}
            </section>
        </main>
    );
};

export default Services;
