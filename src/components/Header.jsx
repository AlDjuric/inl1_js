import { useState } from 'react';
import DarkModeSwitch from './DarkModeSwitch';
import PropTypes from 'prop-types';

export default function Header({ onThemeChange }) {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleThemeChange = (darkMode) => {
        setIsDarkMode(darkMode);
        onThemeChange(darkMode);
    };

    return (
        <header>
            <div id="background-radial">
                <nav>
                    <div className="logo">
                        <img src={isDarkMode ? "src/assets/logo/solid.svg" : "src/assets/logo/solid-1.svg"} alt="Logo" />
                    </div>
                    <ul className="nav-menu">
                        <li>
                            <a href="#features">Features</a>
                        </li>
                    </ul>
                    <div className="nav-actions">
                        <DarkModeSwitch onThemeChange={handleThemeChange} />
                        <button className="btn-primary sign-in-button" aria-label="Sign in or sign up">
                            <i className="fas fa-user" aria-hidden="true"></i>
                            Sign in/up
                        </button>
                    </div>
                </nav>
                <section id="hero">
                    <div className="hero-content">
                        <h1>Manage All Your Money in One App</h1>
                        <p>
                            We offer you a new generation of mobile banking. Save, spend, and manage money in your pocket.
                        </p>
                        <div className="app-store-buttons">
                            <img src={isDarkMode ? "src/assets/appstore-light.svg" : "src/assets/appstore-black.svg"} alt="Download on the App Store" />
                            <img src={isDarkMode ? "src/assets/googleplay-light.svg" : "src/assets/googleplay-black.svg"} alt="Get it on Google Play" />
                        </div>
                    </div>
                    <div className="hero-image">
                        <img src="src/assets/mobile-app-top.svg" alt="Finance App Screenshot" />
                    </div>
                    <button className="discover-more" aria-label="Discover more">
                        <span className="chevron-circle">
                            <i className="fas fa-chevron-down" aria-hidden="true"></i>
                        </span>
                        Discover More
                    </button>
                </section>
            </div>
        </header>
    );
}

Header.propTypes = {
    onThemeChange: PropTypes.func.isRequired
};
