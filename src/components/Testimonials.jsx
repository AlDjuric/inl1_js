import { useState, useEffect } from 'react';
import StarRating from './StarRating';

export default function Testimonials() {
    const [testimonials, setTestimonials] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const response = await fetch('https://win24-assignment.azurewebsites.net/api/testimonials');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setTestimonials(data);
            } catch (err) {
                setError(err.message);
                console.error('Error fetching testimonials:', err);
            }
        };

        fetchTestimonials();
    }, []);

    if (error) {
        return <div className="error">Error loading testimonials: {error}</div>;
    }

    return (
        <section id="testimonials">
            <h2>Clients are <span>Loving Our App</span></h2>

            <div className="testimonial-grid">
                {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="testimonial-item">
                        <div className="rating">
                            <StarRating starRating={testimonial.starRating} />
                        </div>
                        <p>{testimonial.comment}</p>
                        <div className="author">
                            <img src={testimonial.avatarUrl} alt={testimonial.author} />
                            <div className="author-info">
                                <span className="author-name">{testimonial.author}</span>
                                <span className="author-title">{testimonial.jobRole}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
