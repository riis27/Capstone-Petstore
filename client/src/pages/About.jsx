import React from "react";
import { Link } from "react-router-dom";
import "../styles/About.css";

const teamMembers = [
  {
    name: "Param Javastrapni",
    role: "Pawsh Founder, Director",
    photo:
      "https://images.unsplash.com/photo-1650811141381-8620031f6c56?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Elemina draws from her experiences in animal advocacy to create a streamlined hub for all animal lovers to connect and build memories together.",
  },
  {
    name: "Elemina Tailwind",
    role: "National Ambassador",
    photo:
      "https://images.unsplash.com/photo-1607892996263-491f791600c0?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Param is expanding Pawsh's impact in the local community, and is the director of the new Pawsh network in Cincinnati.",
  },
  {
    name: "Maya Rivera",
    role: "Veterinary Specialist",
    photo:
      "https://images.unsplash.com/photo-1722110957119-6496759047b8?q=80&w=1192&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Maya ensures every animal receives optimal health evaluations and customized wellness plans.",
  },
  {
    name: "Elijah Brooks",
    role: "Pet Behaviorist",
    photo:
      "https://images.unsplash.com/photo-1598198414976-ddb788ec80c1?q=80&w=1279&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Elijah helps pets transition smoothly into their new homes with temperament testing and coaching.",
  },
  {
    name: "Lena Zhao",
    role: "Photography & Media",
    photo:
      "https://images.unsplash.com/photo-1702530028234-41d6b42fc4ae?q=80&w=1141&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Lena captures the soul of each pet and family through her signature photo storytelling.",
  },
  {
    name: "Victor Hugo",
    role: "Adoption Consultant",
    photo:
      "https://images.unsplash.com/photo-1653198020531-4a15524333e9?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Victor matches families with their ideal companions and walks them through every step.",
  },
  {
    name: "Nico Santiago",
    role: "Customer Experience Lead",
    photo:
      "https://images.unsplash.com/photo-1577976085628-ea1297582be9?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Nico ensures every client interaction is smooth, friendly, and aligned with our Pawsh values—from first inquiry to adoption day.",
  },
  {
    name: "Aria Bennett",
    role: "Digital Adoption Strategist",
    photo:
      "https://images.unsplash.com/photo-1715436074110-701a3252d7d6?q=80&w=1156&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Aria designs and optimizes our online adoption flow, ensuring pets and families connect through seamless tech-driven experiences.",
  },
];


const About = () => {
  return (
    <section className="about-page">
      <h2 className="about-title">
        Meet the Heart Behind Pawsh<sup>&reg;</sup>
      </h2>

      <div className="team-row">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.photo} alt={member.name} className="team-photo" />
            <div className="team-info">
              <h3>{member.name}</h3>
              <h4>{member.role}</h4>
              <p>{member.description}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="about-title">The Pawsh<sup>&reg;</sup> Mission</h2>

      <div className="about-image-wrapper">
        <img
          src="https://images.unsplash.com/photo-1583160201565-7294e0e44cf0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Dog with family on beach"
          className="about-image"
        />
      </div>

      <div className="about-content">
        <p>
          Founded in 2012, Pawsh<sup>&reg;</sup> is dedicated to enriching lives
          by connecting exceptional pets with loving families. Leveraging our
          extensive background in veterinary medicine and purebred judging, we
          maintain the highest standards for the health, temperament, and
          overall well-being of every animal we represent.
        </p>
        <p>
          Unlike traditional pet stores or online marketplaces,
          Pawsh<sup>&reg;</sup> meticulously selects our pets through
          partnerships with reputable local and regional breeders, as well as
          carefully assessing and training animals from families and shelters
          in transition. This rigorous process, combined with our commitment to
          transparency and client education, ensures a trustworthy and
          satisfying experience for every adopter.
        </p>

        <h3>Who We Partner With</h3>
        <p>
          To further support our mission of responsible pet placement,
          Pawsh<sup>&reg;</sup> partners with local pet photographers,
          specializing in capturing the unique personality of each animal. By
          booking a photography session through Pawsh<sup>&reg;</sup>, clients
          not only receive cherished memories but also contribute a portion of
          the proceeds to support the vital work of the Cincinnati Animal CARE
          Humane Society.
        </p>

        <h3>Your New Best Friend Awaits!</h3>
        <p>
          At Pawsh<sup>&reg;</sup>, we believe that finding the perfect pet is a
          deeply personal journey, and we are committed to guiding families
          every step of the way, fostering lasting bonds and promoting animal
          welfare. On behalf of our partners and team members, we thank you for
          choosing us to meet your new family addition!
        </p>
      </div>

      <div className="philanthropy-section">
        <h3>Support Our Mission</h3>
        <p>
          Help us extend our impact by contributing to our education and
          adoption outreach fund.
        </p>
        <Link to="/contact" className="donate-link">
          Click here to contact us about donations.
        </Link>
      </div>
    </section>
  );
};

export default About;
