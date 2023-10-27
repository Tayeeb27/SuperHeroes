import React from 'react';
import { Link } from 'react-router-dom';

const linkStyle = {
    color: '#875053'
  };

const HomePage = () => {
    return <main>
        <h1>SuperHeroes</h1>
        <p>Welcome to the SuperHeroes App, where you can see everything regarding your favourite superheroes!</p>
        <p>All of us have a favorite superhero that has inspired us at some point and made us want to be superheroes ourselves</p>
        <ul>
            <li><Link to="/add" style={linkStyle}>Add Heroes to your list</Link></li>
        </ul>
    </main>
};

export default HomePage;