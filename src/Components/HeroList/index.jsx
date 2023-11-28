import React from 'react';
import HeroCard from '../HeroCard';

const HeroList = ({ heroes }) => {
    console.log(heroes)
  return (
    <div>
      <h2>Hero List</h2>
      <div className='HeroList'>
      {heroes && heroes.length > 0 ? (
        heroes.map((hero, index) => (
          <HeroCard key={index} hero={hero} />
        ))
      ) : (
        <p>No heroes to display.</p>
      )}
      </div>
    </div>
  );
};

export default HeroList;
