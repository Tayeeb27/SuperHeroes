import React, { useState } from 'react';
import './HeroForm.css'
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
        id: selectedHero.id,
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
    <div className="hero-form-container"> 
      <h2 className="hero-form-title">Search for a Hero</h2> 
      <input
        type="text"
        placeholder="Hero Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="hero-input" 
      />
      <button onClick={handleSearch} className="hero-search-button">Search</button> 
      {searchResults.length > 0 && (
        <div className="hero-search-results"> 
          <h3 className="hero-search-results-title">Search Results:</h3> 
          <ul className="hero-search-result-list"> 
            {searchResults.map((hero, index) => (
              <li
                key={index}
                onClick={() => selectHero(hero)}
                className={`hero-search-result-item ${selectedHero === hero ? 'selected' : ''}`}
              >
                {hero.name}
              </li>
            ))}
          </ul>
          <button onClick={handleAddHero} className="hero-add-button">Add Selected Hero</button> {/* Apply the 'hero-add-button' class */}
        </div>
      )}
    </div>
  );
};

export default HeroForm;
