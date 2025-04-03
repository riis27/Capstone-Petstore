// Adoption.jsx
import React, { useEffect, useState } from 'react';
import '../styles/Adoption.css';

const PetBox = ({ pet }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="pet-box">
      <img src={pet.image} alt={pet.name} />
      <h3>{pet.name} <span className="age">({pet.age})</span></h3>
      <button className="btn btn-light expand-button" onClick={toggleExpand}>
        {expanded ? 'Hide' : 'Learn More'}
      </button>
      {expanded && (
        <div className="pet-info">
          <p><strong>Breed:</strong> {pet.breed}</p>
          <p><strong>Sex:</strong> {pet.sex}</p>
          <p><strong>Disposition:</strong> {pet.disposition}</p>
          <p><strong>Traits:</strong> {pet.traits}</p>
        </div>
      )}
    </div>
  );
};

const Adoption = () => {
  const pets = [
    {
      image: "https://images.pexels.com/photos/11773582/pexels-photo-11773582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Buddy",
      age: "3 years",
      sex: "Male",
      breed: "Westie (Terrier)",
      disposition: "Active",
      traits: "Don't let his tiny size fool you, Buddy has a big heart for big adventures! But he most enjoys long walks on the beach"
    },
    {
      image: "https://images.pexels.com/photos/29983805/pexels-photo-29983805/free-photo-of-charming-grey-cat-with-expressive-face-outdoors.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Bella",
      age: "2 years",
      sex: "Female",
      breed: "British Shorthair",
      disposition: "Jokester",
      traits: "Bella is quite the silly goose, and loves to tease mercilessly. Great with kids; not so much other kitties"
    },
    {
      image: "https://images.pexels.com/photos/4203280/pexels-photo-4203280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Max",
      age: "5 months",
      sex: "Male",
      breed: "Beagle",
      disposition: "Playful",
      traits: "Always under your toes, Max is your walking shadow. He is super friendly and curious!"
    },
    {
      image: "https://images.pexels.com/photos/9195629/pexels-photo-9195629.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Sienna",
      age: "4 years",
      sex: "Female",
      breed: "Tawny Cat",
      disposition: "Reticent",
      traits: "Sienna likes to hide and quietly observe her surroundings; while she tolerates children, she fits best in a home that gives her lots of independence"
    },
    {
      image: "https://images.pexels.com/photos/11629817/pexels-photo-11629817.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Charlie & Chaplin",
      age: "2, 2.5 years",
      sex: "Male, Male",
      breed: "Fischer's Lovebirds",
      disposition: "Inseparable",
      traits: "These two come as a pair! They bonded in captivity, and fare best in a loving home that allows them to roost together. Love is love!"
    },
    {
      image: "https://images.pexels.com/photos/29881327/pexels-photo-29881327/free-photo-of-siberian-husky-dog-with-striking-blue-eyes.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Lucy",
      age: "2 years",
      sex: "Female",
      breed: "Husky mix",
      disposition: "Sharp & Loyal",
      traits: "Though Lucy may have an independent streak, she has the sharpest eyes and nose, and loves to play Hide & Seek with various items. Great with people who lose things easily; a ready made game!"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      if (header) {
        if (window.scrollY > 0) {
          header.classList.add('sticky');
        } else {
          header.classList.remove('sticky');
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Meet Our Adorable Adoptables</h1>
      <div className="pet-container">
        {pets.map((pet, index) => (
          <PetBox key={index} pet={pet} />
        ))}
      </div>
    </div>
  );
};

export default Adoption;