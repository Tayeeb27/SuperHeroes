import React from 'react';

const HeroCard = ({ hero }) => {
  return (
    <div className="hero-card">
      <h3>{hero.name}</h3>
      <p>{hero.description}</p>
      <img src={hero.image}/>
    </div>
  );
};

export default HeroCard;
