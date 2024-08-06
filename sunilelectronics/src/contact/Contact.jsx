import React from 'react';
import './Contact.css';

export const Contact = () => {
    return (
        <main className="contact">
            <section className="contact-info">
                <h2>Contact Us</h2>
                <p>If you have any questions or need further assistance, please don't hesitate to contact us.</p>
                <ul>
                    <li><strong>Address:</strong> 123 Repair Street, Fixit City</li>
                    <li><strong>Phone:</strong> +91 98201 14937</li>
                    <li><strong>Email:</strong> sunilgupta@gmail.com</li>
                </ul>
            </section>
            <section className="contact-map">
                <h3>Our Location</h3>
                <iframe
                    title="Our Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.1962674764244!2d-122.0828512846813!3d37.42199957982551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5e0d3a54b1b%3A0xa1b7b37b9a7fce8!2sGoogleplex!5e0!3m2!1sen!2sin!4v1628793536784!5m2!1sen!2sin"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </section>
        </main>
    );
};

export default Contact;
