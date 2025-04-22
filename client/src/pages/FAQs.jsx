// FAQs.jsx
import React, { useState, useEffect } from 'react';
import '../styles/FAQs.css';

const FAQImages = [
  {
    src: 'https://images.unsplash.com/photo-1547960450-2ea08b931270?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    headline: 'Frequently Asked Questions',
    subtitle: 'Answers that help you feel confident, cared for, and informed.',
  },
  {
    src: 'https://images.unsplash.com/photo-1534958210670-31215027cb02?q=80&w=1051&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    headline: 'Everything You Need to Know',
    subtitle: 'From services to adoption—we’ve got you covered.',
  },
];

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % FAQImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const faqs = [
    {
      category: 'Adoption & Rescue',
      questions: [
        {
          q: 'How do I adopt a pet from Pawsh?',
          a: 'Start by filling out our online adoption application. Once reviewed, we’ll schedule a call and a meet-and-greet with the pet either virtually or in person.',
        },
        {
          q: 'What’s included in the adoption fee?',
          a: 'All adopted pets are vaccinated, microchipped, and spayed/neutered. The fee also covers behavior assessments and starter kits (food, leash, toy).',
        },
        {
          q: 'Can I foster before adopting?',
          a: 'Absolutely! We offer a “Foster-to-Adopt” program that lets you care for the pet temporarily to ensure it’s a great fit.',
        },
        {
          q: 'Are pets returned often? What happens then?',
          a: 'Returns are rare but handled with empathy. Pets are re-evaluated and re-matched with compatible homes. Our goal is always a forever match.',
        },
      ],
    },
    {
      category: 'Photography Services',
      questions: [
        {
          q: 'What types of photography services do you offer?',
          a: 'We offer a wide range of photography services onsite, including custom services on location. Please refer to our Services page for more details.',
        },
        {
          q: 'How do I book a photography session?',
          a: 'You can book a session by contacting us through our website, email, or phone. We\'ll discuss your needs and schedule a convenient time.',
        },
        {
          q: 'What are your pricing packages?',
          a: 'Our pricing packages vary depending on the type of photography and the duration of the session. Please contact us for a detailed quote.',
        },
        {
          q: 'How long does it take to receive the edited photos?',
          a: 'The turnaround time for edited photos is typically 1-2 weeks, depending on the volume of photos and the complexity of editing.',
        },
      ],
    },
    ];
  

  return (
    <div className="faqs-wrapper">
      {/* Banner Section */}
      <div className="faqs-section">
        <img src={FAQImages[currentImage].src} alt="FAQ Banner" className="faqs-img" />
        <div className="faqs-overlay"></div>
        <div className="faqs-content">
          <h2 className="faqs-title">{FAQImages[currentImage].headline}</h2>
          <p className="faqs-subtitle">{FAQImages[currentImage].subtitle}</p>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="faq-info">
        {faqs.map((section, i) => (
          <div key={i} className="faq-content">
            <h3 className="faqs-header">{section.category}</h3>
            {section.questions.map((faq, j) => {
              const index = `${i}-${j}`;
              return (
                <div
                  className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                  onClick={() => toggleFAQ(index)}
                  key={index}
                >
                  <div className="faq-question d-flex justify-content-between align-items-center">
                    <span>{faq.q}</span>
                    <span className="arrow">{activeIndex === index ? '−' : '+'}</span>
                  </div>
                  {activeIndex === index && (
                    <div className="faq-answer">
                      <p className="faq-answer">{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
