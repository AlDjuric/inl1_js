import PropTypes from 'prop-types';

export default function Partners({ isDarkMode }) {
    const logos = [
        {
            src: "src/assets/partners/logo.svg",
            alt: "Logo",
            className: "partner-logo partner-logo-large"
        },
        {
            src: "src/assets/partners/logo-1.svg",
            alt: "Logo",
            className: "partner-logo"
        },
        {
            src: "src/assets/partners/logo-2.svg",
            alt: "Logo",
            className: "partner-logo"
        },
        {
            src: "src/assets/partners/logo-3.svg",
            alt: "Logo",
            className: "partner-logo"
        },
        {
            src: "src/assets/partners/logo-4.svg",
            alt: "Logo",
            className: "partner-logo"
        },
        {
            src: "src/assets/partners/logo-5.svg",
            alt: "Logo",
            className: "partner-logo"
        },
    ];

    // Reverse the logos array if in dark mode
    const displayedLogos = isDarkMode ? [...logos].reverse() : logos;

    return (
        <section id="partners" className="partner-logos">
            <div className="partner-logos">
                {displayedLogos.map((logo, index) => (
                    <img
                        key={index}
                        src={isDarkMode ? logo.src.replace('.svg', '-dark.png') : logo.src}
                        alt={logo.alt}
                        className={logo.className}
                    />
                ))}
            </div>
        </section>
    );
}

Partners.propTypes = {
    isDarkMode: PropTypes.bool.isRequired
};
