// Adoption.jsx
import React, { useEffect, useState } from 'react';
import '../styles/Adoption.css';



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
    alert('Pet added successfully');
    // re-fetch pets after adding
    const res = await fetch('/api/pets');
    const data = await res.json();
    setPets(data);
  } else {
    alert('Failed to add pet');
  }
};
