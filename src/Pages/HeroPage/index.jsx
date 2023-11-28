import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const HeroPage = () => {
  const { id } = useParams();
  console.log(id);
  const [heroData, setHeroData] = useState(null);

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const response = await fetch(`https://superheroapi.com/api/${import.meta.env.VITE_TOKEN}/${id}`);
        const data = await response.json();
        console.log(data);
        if (data.response === 'success') {
          setHeroData(data);
        } else {
          console.error('Hero not found');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchHeroData();
  }, []);

  if (!heroData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className= "heroSingle">
      <h1>{heroData.name}</h1>
      <img src={heroData.image.url} alt={heroData.name} />

      <h2>Power Stats</h2>
      <ul>
        <li>Intelligence: {heroData.powerstats.intelligence}</li>
        <li>Strength: {heroData.powerstats.strength}</li>
        <li>Speed: {heroData.powerstats.speed}</li>
        <li>Durability: {heroData.powerstats.durability}</li>
        <li>Power: {heroData.powerstats.power}</li>
        <li>Combat: {heroData.powerstats.combat}</li>
      </ul>

      <h2>Biography</h2>
      <ul>
        <li>Full Name: {heroData.biography['full-name']}</li>
        <li>Alter Egos: {heroData.biography['alter-egos']}</li>
        <li>Place of Birth: {heroData.biography['place-of-birth']}</li>
        <li>First Appearance: {heroData.biography['first-appearance']}</li>
      </ul>

      <h2>Appearance</h2>
      <ul>
        <li>Gender: {heroData.appearance.gender}</li>
        <li>Race: {heroData.appearance.race}</li>
        <li>Height: {heroData.appearance.height.join(', ')}</li>
        <li>Weight: {heroData.appearance.weight.join(', ')}</li>
        <li>Eye Color: {heroData.appearance['eye-color']}</li>
        <li>Hair Color: {heroData.appearance['hair-color']}</li>
      </ul>

      <h2>Work</h2>
      <ul>
      <li>Work: {heroData.work.occupation}</li>
      </ul>
      </div>
    </div>
  );
};

export default HeroPage;
