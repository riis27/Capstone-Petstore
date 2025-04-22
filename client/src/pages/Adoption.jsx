import React, { useEffect, useState } from 'react';
import '../styles/Adoption.css';
import BACKEND_URL from '../config';
import { jwtDecode } from 'jwt-decode';

const PetBox = ({ pet, onDelete, onEdit, isAdmin }) => {
  const [expanded, setExpanded] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({ ...pet });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    onEdit(pet._id, formData);
    setEditMode(false);
  };

  return (
    <div className="pet-box">
      <img src={pet.image} alt={pet.name} />
      <h5>{pet.name} <span className="age">({pet.age})</span></h5>
      <button className="pet-button" onClick={() => setExpanded(!expanded)}>
        {expanded ? 'Hide' : 'Details'}
      </button>

      {expanded && (
        <div className="pet-info">
          {editMode ? (
            <>
              <input name="name" value={formData.name} onChange={handleChange} />
              <input name="age" value={formData.age} onChange={handleChange} />
              <input name="breed" value={formData.breed} onChange={handleChange} />
              <input name="sex" value={formData.sex} onChange={handleChange} />
              <input name="disposition" value={formData.disposition} onChange={handleChange} />
              <textarea name="traits" value={formData.traits} onChange={handleChange} />
              <input name="image" value={formData.image} onChange={handleChange} />
              <button className="save-button" onClick={handleSave}>Save</button>
              <button className="cancel-button" onClick={() => setEditMode(false)}>Cancel</button>
            </>
          ) : (
            <>
              <p><strong>Breed:</strong> {pet.breed || 'N/A'} <strong>Sex:</strong> {pet.sex || 'N/A'}</p>
              <p><strong>Disposition:</strong> {pet.disposition || 'N/A'}</p>
              <p><strong>Traits:</strong> {pet.traits || 'N/A'}</p>
              {isAdmin && (
                <div className="edit-buttons">
                  <button className="edit-button" onClick={() => setEditMode(true)}>Edit</button>
                  <button className="delete-button" onClick={() => onDelete(pet._id)}>Delete</button>
                </div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
};

const Adoption = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const BASE_URL = BACKEND_URL + 'api/pets';

  // Get token from localStorage and decode to check isAdmin
  const token = localStorage.getItem('authToken');
  let isAdmin = false;

  if (token) {
    try {
      const decoded = jwtDecode(token);
      isAdmin = decoded.isAdmin === true;
    } catch (error) {
      console.error("Invalid token:", error);
    }
  }

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const res = await fetch(BASE_URL);
        if (!res.ok) throw new Error('Failed to fetch pets');
        const data = await res.json();
        setPets(data);
        setLoading(false);
      } catch (err) {
        setError('Unable to load pets. Please try again later.');
        setLoading(false);
      }
    };
    fetchPets();
  }, []);

  const handleDelete = async (petId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this pet?");
    if (!confirmDelete) return;

    try {
      const res = await fetch(`${BASE_URL}/${petId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (res.ok) {
        setPets((prev) => prev.filter((p) => p._id !== petId));
      } else {
        const error = await res.json();
        alert(`Delete failed: ${error.message}`);
      }
    } catch (err) {
      console.error("Error deleting pet:", err);
    }
  };

  const handleEdit = async (petId, updatedData) => {
    try {
      const res = await fetch(`${BASE_URL}/${petId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(updatedData),
      });
      if (res.ok) {
        const updatedPet = await res.json();
        setPets((prev) =>
          prev.map((pet) => (pet._id === petId ? updatedPet : pet))
        );
      } else {
        const error = await res.json();
        alert(`Edit failed: ${error.message}`);
      }
    } catch (err) {
      console.error("Error editing pet:", err);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="adoption-title">Meet Our Adorable Adoptables</h1>
      {loading ? (
        <p className="text-center">🐾 Loading pets...</p>
      ) : error ? (
        <p className="text-danger text-center">{error}</p>
      ) : pets.length === 0 ? (
        <p className="text-center">No pets available right now.</p>
      ) : (
        <div className="pet-container">
          {pets.map((pet) => (
            <PetBox
              key={pet._id}
              pet={pet}
              onDelete={handleDelete}
              onEdit={handleEdit}
              isAdmin={isAdmin}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Adoption;