import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Footer() {
  return (
    <div>
      <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Plant Paradise</h3>
          <p>Bringing nature closer to you.</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/plants">Plants</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Plant Paradise | All Rights Reserved</p>
      </div>
    </footer> 
    </div>
  )
}