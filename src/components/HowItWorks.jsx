import PropTypes from 'prop-types';

const Screenshot = ({ src, alt }) => (
    <img src={src} alt={alt} className="screenshot" />
);

Screenshot.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};

export default function HowItWorks() {
    const screenshots = [
        { src: "src/assets/app-screenshot-1.svg", alt: "App Screenshot 1" },
        { src: "src/assets/app-screenshot-2.svg", alt: "App Screenshot 2" },
        { src: "src/assets/app-screenshot-3.svg", alt: "App Screenshot 3" },
    ];

    return (

        <section id="how-it-works">
            <div className="container">
                <h2>How Does It Work?</h2>
                <div className="how-it-works-screenshots">
                    {screenshots.map((screenshot, index) => (
                        <Screenshot key={index} {...screenshot} />
                    ))}
                </div>
                <div className="how-it-works-content">
                    <h3>Latest transaction history</h3>
                    <p>
                        Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed.
                        Arcu sociis tristique quisque hac in consectetur condimentum.
                    </p>
                </div>
            </div>
        </section>
    );
}
