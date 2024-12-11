import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function DarkModeSwitch({ onThemeChange }) {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storedThemeMode = localStorage.getItem('themeMode');

        if (storedThemeMode === 'dark' || (!storedThemeMode && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setIsDarkMode(true);
            document.documentElement.classList.add('dark-mode');
        } else {
            setIsDarkMode(false);
            document.documentElement.classList.remove('dark-mode');
        }
    }, []);

    const handleThemeToggle = () => {
        const newTheme = !isDarkMode;
        setIsDarkMode(newTheme);
        document.documentElement.classList.toggle('dark-mode', newTheme);
        localStorage.setItem('themeMode', newTheme ? 'dark' : '');
        onThemeChange(newTheme);
    };

    return (
        <div className="dark-mode-toggle">
            <label className="toggle-switch" htmlFor="dark-mode-toggle">
                <p>Dark mode</p>
                <input
                    id="dark-mode-toggle"
                    type="checkbox"
                    checked={isDarkMode}
                    onChange={handleThemeToggle}
                />
                <span className="slider"></span>
            </label>
        </div>
    );
}

DarkModeSwitch.propTypes = {
    onThemeChange: PropTypes.func.isRequired
};
