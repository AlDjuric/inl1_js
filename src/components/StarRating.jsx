import PropTypes from 'prop-types';

const StarRating = ({ starRating }) => {
    const maxStars = 5;
    const normalizedRating = Math.max(0, Math.min(starRating, maxStars));

    return (
        <div className="star-rating" aria-label={`Rating: ${normalizedRating} out of ${maxStars} stars`}>
            {[...Array(maxStars)].map((_, index) => (
                <i
                    key={index}
                    className={`fa-sharp ${index < normalizedRating ? 'fa-solid' : 'fa-regular'} fa-star`}
                    aria-hidden="true"
                />
            ))}
        </div>
    );
};

StarRating.propTypes = {
    starRating: PropTypes.number.isRequired
};

export default StarRating;
