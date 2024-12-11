export default function MoneyTransfer() {
    return (
        <div className="transfer-section">
            <div className="content">
                <h2>Make your money transfer simple and clear</h2>
                <ul>
                    <li>
                        <i className="fas fa-check"></i>
                        <span>Banking transactions are free for you</span>
                    </li>
                    <li>
                        <i className="fas fa-check"></i>
                        <span>No monthly cash commission</span>
                    </li>
                    <li>
                        <i className="fas fa-check"></i>
                        <span>Manage payments and transactions online</span>
                    </li>
                </ul>
                <button className="btn-primary">
                    Learn More
                    <i className="fas fa-arrow-right"></i>
                </button>
            </div>
            <div className="image">
                <img
                    src="src/assets/money-transfer-1.svg"
                    alt="Money Transfer"
                    className="main-image"
                />
            </div>
        </div>
    );
}
