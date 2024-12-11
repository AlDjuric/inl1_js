import { useState } from 'react';

export default function Faq() {
    // State to track which accordion item is open
    const [activeIndex, setActiveIndex] = useState(null);

    const faqItems = [
        {
            id: 'faq-1',
            question: 'Is any of my personal information stored in the App?',
            answer: 'Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.'
        },
        {
            id: 'faq-2',
            question: 'What formats can I download my transaction history in?',
            answer: 'Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.'
        },
        {
            id: 'faq-3',
            question: 'Can I schedule future transfers?',
            answer: 'Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.'
        },
        {
            id: 'faq-4',
            question: 'When can I use Banking App services?',
            answer: 'Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.'
        },
        {
            id: 'faq-5',
            question: 'Can I create my own password that is easy for me to remember?',
            answer: 'Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.'
        },
        {
            id: 'faq-6',
            question: 'What happens if I forget or lose my password?',
            answer: 'Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.'
        }
    ];

    // Toggle function to handle accordion clicks
    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section id="faq" aria-labelledby="faq-heading">
            <div className="faq-container">
                <div className="faq-top">
                    <div className="faq-left">
                        <h2 id="faq-heading">Any questions? Check out the FAQs</h2>
                        <p>Still have unanswered questions and need to get in touch?</p>
                        <div className="faq-boxes">
                            <div className="faq-box">
                                <i className="fa-solid fa-phone-volume"></i>
                                <p>Still have questions?</p>
                                <a href="#contact" id="contact" className="btn-secondary">
                                    Contact us
                                </a>
                            </div>
                            <div className="faq-box">
                                <i className="fa-solid fa-comment-dots"></i>
                                <p>Don&apos;t like phone calls?</p>
                                <a href="#help-center" id="help-center" className="btn-secondary">
                                    Contact us
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="faq-right">
                        <div className="faq-accordion">
                            {faqItems.map((item, index) => (
                                <div key={item.id} className="faq-item">
                                    <div
                                        className="faq-question"
                                        onClick={() => toggleAccordion(index)}
                                        role="button"
                                        tabIndex={0}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter' || e.key === ' ') {
                                                toggleAccordion(index);
                                            }
                                        }}
                                    >
                                        {item.question}
                                        <i
                                            className={`fas fa-chevron-down faq-icon ${activeIndex === index ? 'active' : ''}`}
                                            aria-hidden="true"
                                        ></i>
                                    </div>
                                    <div
                                        className={`faq-answer ${activeIndex === index ? 'active' : ''}`}
                                        style={{
                                            maxHeight: activeIndex === index ? '1000px' : '0',
                                            opacity: activeIndex === index ? 1 : 0,
                                            overflow: 'hidden',
                                            transition: 'all 0.3s ease-in-out'
                                        }}
                                    >
                                        <p>{item.answer}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
