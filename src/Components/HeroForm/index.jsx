import React, { useState } from 'react';
// import {token} from '../api-key'

const HeroForm = ({ addHero }) => {
  const [name, setName] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedHero, setSelectedHero] = useState(null);

  const handleSearch = async () => {
    const apiUrl = `https://www.superheroapi.com/api/${import.meta.env.VITE_TOKEN}/search/${name}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data.response === 'success') {
        const firstFiveResults = data.results.slice(0, 5);
        setSearchResults(firstFiveResults);
      } else {
        alert('No heroes found.');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleAddHero = () => {
    if (selectedHero) {
      const heroData = {
        name: selectedHero.name,
        description: selectedHero.biography['full-name'],
        image: selectedHero.image.url,
      };
      addHero(heroData);
      setName('');
      setSearchResults([]);
    }
  };

  const selectHero = (hero) => {
    setSelectedHero(hero);
  };

  return (
    <div>
      <h2>Search for a Hero</h2>
      <input
        type="text"
        placeholder="Hero Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {searchResults.length > 0 && (
        <div>
          <h3>Search Results:</h3>
          <ul>
            {searchResults.map((hero, index) => (
              <li
                key={index}
                onClick={() => selectHero(hero)}
                className={selectedHero === hero ? 'selected' : ''}
              >
                {hero.name}
              </li>
            ))}
          </ul>
          <button onClick={handleAddHero}>Add Selected Hero</button>
        </div>
      )}
    </div>
  );
};

export default HeroForm;
