// AddPet.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AddPet.css'; 


const AddPet = () => {
  const navigate = useNavigate();
  const [petData, setPetData] = useState({
    name: '',
    age: '',
    breed: '',
    sex: '',
    disposition: '',
    traits: '',
    image: ''
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setPetData({ ...petData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('authToken');

    try {
      const res = await fetch('http://localhost:2727/api/pets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(petData)
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || 'Failed to add pet');

      setSuccess('✅ Pet added successfully!');
      setError(null);

      setTimeout(() => {
        navigate('/adoption');
      }, 1500);
    } catch (err) {
      setError(err.message);
      setSuccess(null);
    }
  };

  return (
    <div className="addpet-container">
      <h2 className="text-center mb-4">Add a New Pet</h2>
      {success && <p className="text-success text-center">{success}</p>}
      {error && <p className="text-danger text-center">{error}</p>}

      <form className="addpet-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={petData.name} onChange={handleChange} required />
        <input type="text" name="age" placeholder="Age (e.g. 2 years)" value={petData.age} onChange={handleChange} required />
        <input type="text" name="breed" placeholder="Breed" value={petData.breed} onChange={handleChange} required />
        <input type="text" name="sex" placeholder="Sex" value={petData.sex} onChange={handleChange} required />
        <input type="text" name="disposition" placeholder="Disposition" value={petData.disposition} onChange={handleChange} required />
        <input type="text" name="traits" placeholder="Traits" value={petData.traits} onChange={handleChange} required />
        <input type="url" name="image" placeholder="Image URL" value={petData.image} onChange={handleChange} required />

        <button type="submit" className="btn btn-dark w-100 mt-3">Add Pet</button>
      </form>
    </div>
  );
};

export default AddPet;