export default function InternationalPayments() {
    return (
        <div className="international-section">
            <div className="content">
                <h2>Receive payment from international bank details</h2>
                <div className="feature-container">
                    <div className="feature-item">
                        <div className="feature-icon">
                            <i className="fas fa-credit-card"></i>
                        </div>
                        <div className="feature-content">
                            <p>
                                Id mollis consectetur congue egestas egestas suspendisse
                                blandit justo.
                            </p>
                        </div>
                    </div>
                    <div className="feature-item">
                        <div className="feature-icon">
                            <i className="fas fa-money-bill-wave"></i>
                        </div>
                        <div className="feature-content">
                            <p>
                                Augue pulvinar justo, fermentum fames aliquam accumsan
                                vestibulum non.
                            </p>
                        </div>
                    </div>
                </div>
                <button className="btn-primary">
                    Learn More
                    <i className="fas fa-arrow-right"></i>
                </button>
            </div>
            <div className="image">
                <img
                    src="src/assets/money-transfer-2.svg"
                    alt="International Payment Details"
                    className="secondary-image"
                />
            </div>
        </div>
    );
}
