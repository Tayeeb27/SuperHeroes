import React from 'react';
import { Link } from 'react-router-dom';

const linkStyle = {
    color: '#875053'
};
const HeroCard = ({ hero }) => {
  return (
    <div className="hero-card">
      <h3>
        <Link to={`/heroes/${hero.id}`} style={linkStyle}>
            {hero.name}
        </Link>
      </h3>
      <p>{hero.description}</p>
      <img src={hero.image}/>
    </div>
  );
};

export default HeroCard;
