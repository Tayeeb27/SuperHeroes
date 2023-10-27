import React from 'react';
import {HeroList} from '../../Components';

const HeroesPage = ({ heroes }) => {
  return (
    <div>
      <h1>Heroes Page</h1>
      <HeroList heroes={heroes} />
    </div>
  );
};

export default HeroesPage;
