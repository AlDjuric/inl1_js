import PropTypes from 'prop-types';

export default function FeatureItem({ icon, title, description }) {
    return (
        <div className="feature-item">
            <img src={`src/assets/icons/${icon}`} alt="Feature Icon" />
            <div className="feature-content">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

FeatureItem.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};
