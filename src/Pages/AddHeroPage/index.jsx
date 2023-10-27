import React from 'react';
import {HeroForm} from '../../Components';

const AddHeroPage = ({ addHero }) => {
  return (
    <div>
      <h1>Add Hero Page</h1>
      <HeroForm addHero={addHero} />
    </div>
  );
};

export default AddHeroPage;
