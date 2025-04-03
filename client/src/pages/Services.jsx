import React, { useState } from 'react';
import '../styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const servicePackages = [
  {
    title: 'Welcome Package',
    image: 'https://images.pexels.com/photos/20607811/pexels-photo-20607811/free-photo-of-couple-expecting-a-baby-posing-in-a-studio-with-a-dog.jpeg?auto=compress&cs=tinysrgb&w=400',
    name: '15min, 3 prints, custom tag',
    price: '$150',
    description: 'Our welcome package is specially priced to capture your first professional photos with your adopted pet! Choose a custom tag from our collection, and we add the names and details of your newest family member for you while you snap photos. Welcome to the Pawsh family!'
  },
  {
    title: 'Birthday Session',
    image: 'https://images.pexels.com/photos/27176120/pexels-photo-27176120/free-photo-of-a-couple-wearing-party-hats-celebrating-their-dogs-birthday.jpeg?auto=compress&cs=tinysrgb&w=400',
    name: '15min, 10 prints, 1 smash cake',
    price: '$300',
    description: "Whether it's yours, your fur family, or someone's birthday, this festive photoshoot comes with a pet-friendly 6 inch smash cake made by our local Pet Bakery for your pet to make an adorable mess of!"
  },
  {
    title: 'Family & Friends',
    image: 'https://images.unsplash.com/photo-1526363269865-60998e11d82d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFtaWx5JTIwd2l0aCUyMHBldHxlbnwwfDB8MHx8fDI%3D',
    name: '30min, 10 prints, unlimited family',
    price: '$350',
    description: 'Includes everything in the Welcome Package with as many family members, and family photos you want in a 30 minute session!'
  },
  {
    title: 'Paws & Prints',
    image: 'https://images.pexels.com/photos/7788657/pexels-photo-7788657.jpeg?auto=compress&cs=tinysrgb&w=400',
    name: '45min, Paw Plaque, 8x8 album',
    price: '$450',
    description: 'You and your family will cherish the beautiful memories made in this 45 minute session, which comes with a special "Paw Plaque" of your pet paws, an accessory/toy of your choice, and 20 prints in a 6x6 album.'
  },
  {
    title: 'Deluxe Dream',
    image: 'https://images.pexels.com/photos/573293/pexels-photo-573293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: '1hr & up, 8x8 album, designer detail',
    price: '$500+',
    description: 'With the right photographer and the right vision, we can help you create the photos to cherish for a lifetime!'
  },
  {
    title: 'Pawsh Patron',
    image: 'https://images.pexels.com/photos/10117520/pexels-photo-10117520.jpeg?auto=compress&cs=tinysrgb&w=400',
    name: 'Sponsor our Mission',
    price: '$500+',
    description: 'Your donation goes towards the care and training costs of other animals in our partner programs. You receive our Welcome Package, plus a plaque and special pin to display your contribution.'
  }
];

const Services = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleDescription = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Our Service Packages</h1>
      <div className="row g-4">
        {servicePackages.map((service, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm p-3" style={{ backgroundColor: 'rgba(255,255,255,0.85)', borderRadius: '10px', transition: 'transform 0.3s' }}>
              <img
                src={service.image}
                className="card-img-top mb-3"
                alt={service.title}
                style={{ borderRadius: '10px', height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold">{service.title}</h5>
                <p className="mb-1"><strong>{service.name}</strong></p>
                <p className="mb-2" style={{ fontSize: '1.2em', fontWeight: 'bold' }}>{service.price}</p>
                {expanded === index && (
                  <p className="card-text mt-2">{service.description}</p>
                )}
                <button
                  className="btn btn-outline-dark mt-auto"
                  onClick={() => toggleDescription(index)}
                >
                  {expanded === index ? 'See Less' : 'See More'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
