// Services.jsx
import React, { useState } from 'react';
import '../styles/Services.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const servicePackages = [
  {
    title: 'Welcome Package',
    image: 'https://images.unsplash.com/photo-1721904309410-ca4cd5ed681e?q=80&w=1115&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: '15min, 3 prints, custom tag',
    price: '$150',
    description: 'Our welcome package is specially priced to capture your first professional photos with your adopted pet! Choose a custom tag from our collection, and we add the names and details of your newest family member for you while you snap photos. Welcome to the Pawsh family!'
  },
  {
    title: 'Birthday Session',
    image: 'https://images.unsplash.com/photo-1662441899435-8bdee58218cd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: '20min, 10 prints, 1 smash cake',
    price: '$300',
    description: "Whether it's yours, your fur family, or someone's birthday, this festive photoshoot comes with a pet-friendly 6 inch smash cake made by our local Pet Bakery for your pet to make an adorable mess of!"
  },
  {
    title: 'Family & Friends',
    image: 'https://images.unsplash.com/photo-1526363269865-60998e11d82d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFtaWx5JTIwd2l0aCUyMHBldHxlbnwwfDB8MHx8fDI%3D',
    name: '30min, 10 prints, unlimited family',
    price: '$400',
    description: 'Includes everything in the Welcome Package with as many family members, and family photos you want in a 30 minute session!'
  },
  {
    title: 'Paws & Prints',
    image: 'https://images.unsplash.com/photo-1621567389899-2c49bbce3636?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
    <div className="services-wrapper container py-5">
      <div className="text-center mb-5">
        <h1 className="services-title">Our Photography Packages</h1>
        <p className="services-subtitle">Thoughtfully curated to celebrate all the different milestones with your new fur family! Please contact us directly to inquire about custom or travel packages.</p>
      </div>
      <div className="row g-4">
        {servicePackages.map((service, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-4 d-flex">
            <div
              className={`service-card-container flex-fill ${expanded === index ? 'expanded' : ''}`}
              onClick={() => toggleDescription(index)}
            >
              <img
                src={service.image}
                className="service-image"
                alt={service.title}
              />
              <div className="service-body">
                <h5 className="service-title">{service.title}</h5>
                <p className="service-name">{service.name}</p>
                <p className="service-price">{service.price}</p>
                {expanded === index && (
                  <p className="service-description">{service.description}</p>
                )}
                <button
                  className="service-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleDescription(index);
                  }}
                >
                  {expanded === index ? 'Hide' : 'Details'}
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
