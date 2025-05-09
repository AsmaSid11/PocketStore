import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-2xl font-bold text-white">
              Pocket Store
            </div>
            <p className="text-sm text-blue-100">
              Your one-stop destination for all your shopping needs. Quality products, great prices, and excellent service.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition-colors">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/products" className="text-blue-100 hover:text-white transition-colors">All Products</a></li>
              <li><a href="/categories" className="text-blue-100 hover:text-white transition-colors">Categories</a></li>
              <li><a href="/deals" className="text-blue-100 hover:text-white transition-colors">Special Deals</a></li>
              <li><a href="/new-arrivals" className="text-blue-100 hover:text-white transition-colors">New Arrivals</a></li>
              <li><a href="/seller-dashboard" className="text-blue-100 hover:text-white transition-colors">Seller Dashboard</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><a href="/help" className="text-blue-100 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="/shipping" className="text-blue-100 hover:text-white transition-colors">Shipping Info</a></li>
              <li><a href="/returns" className="text-blue-100 hover:text-white transition-colors">Returns & Refunds</a></li>
              <li><a href="/faq" className="text-blue-100 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="/contact" className="text-blue-100 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div id="contact-section">
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-blue-200" />
                <span className="text-blue-100">123 Shopping Street, Retail City, RC 12345</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaPhone className="text-blue-200" />
                <span className="text-blue-100">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaEnvelope className="text-blue-200" />
                <span className="text-blue-100">support@pocketstore.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-blue-400/30">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-blue-100">
              &copy; {new Date().getFullYear()} Pocket Store. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className="text-blue-100 hover:text-white transition-colors">Privacy Policy</a>
              <a href="/terms" className="text-blue-100 hover:text-white transition-colors">Terms of Service</a>
              <a href="/cookies" className="text-blue-100 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

