// Adoption.jsx
import React, { useEffect, useState } from 'react';
import '../styles/Adoption.css';

const PetBox = ({ pet, onVote }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="pet-box">
      <img src={pet.image} alt={pet.name} />
      <h5>{pet.name} <span className="age">({pet.age})</span></h5>

      <button
        className="btn btn-light expand-button"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? 'Hide' : 'Learn More'}
      </button>

      {expanded && (
        <div className="pet-info">
          <p><strong>Breed:</strong> {pet.breed || 'N/A'}</p>
          <p><strong>Sex:</strong> {pet.sex || 'N/A'}</p>
          <p><strong>Disposition:</strong> {pet.disposition || 'N/A'}</p>
          <p><strong>Traits:</strong> {pet.traits || 'N/A'}</p>
          <p><strong>Votes:</strong> {pet.votes ?? 0}</p>
          <div className="vote-buttons mt-2">
            <button
              onClick={() => onVote(pet._id, 'upvote')}
              className="btn btn-outline-success me-2"
            >
              👍 Upvote
            </button>
            <button
              onClick={() => onVote(pet._id, 'downvote')}
              className="btn btn-outline-danger"
            >
              👎 Downvote
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const Adoption = () => {
  const [pets, setPets] = useState([]);

  // Fetch pets from the backend
  useEffect(() => {
    const fetchPets = async () => {
      try {
        const res = await fetch('/api/pets');
        const data = await res.json();
        console.log('🐾 Pets fetched:', data); // Optional debug log
        setPets(data);
      } catch (err) {
        console.error('❌ Failed to fetch pets:', err);
      }
    };

    fetchPets();
  }, []);

  // Handle voting
  const handleVote = async (petId, voteType) => {
    try {
      const res = await fetch(`/api/pets/${petId}/vote`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ voteType }),
      });

      const data = await res.json();

      const updatedPets = pets.map((pet) =>
        pet._id === petId ? { ...pet, votes: data.votes } : pet
      );
      setPets(updatedPets);
    } catch (err) {
      console.error('❌ Vote error:', err);
    }
  };

  // Handle adding a pet (for future admin use)
  const handleAddPet = async (newPet) => {
    const token = localStorage.getItem('authToken');
    const response = await fetch('/api/pets/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(newPet),
    });

    if (response.ok) {
      alert('✅ Pet added successfully');
      const res = await fetch('/api/pets');
      const data = await res.json();
      setPets(data);
    } else {
      alert('❌ Failed to add pet');
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Meet Our Adorable Adoptables</h1>
      <div className="pet-container">
        {pets.length === 0 ? (
          <p className="text-center">No pets available right now.</p>
        ) : (
          pets.map((pet) => (
            <PetBox key={pet._id} pet={pet} onVote={handleVote} />
          ))
        )}
      </div>
    </div>
  );
};

export default Adoption;
