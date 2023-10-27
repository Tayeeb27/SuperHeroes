import React, {useState} from "react";
import "./App.css";
import { Routes, Route } from 'react-router-dom';
import {HomePage, HeroesPage, HeroPage, NotFoundPage, AddHeroPage } from "./Pages"
import { PageWrapper } from "./Components";

const App = () => {
    const [heroes, setHeroes] = useState([]);
    const addHero = (newHero) => {
        setHeroes([...heroes, newHero]);
  };
    console.log(heroes)
  return(
  <>
      <Routes>
      <Route path="/" element={<PageWrapper />}>
          <Route index element={<HomePage />} />
          <Route path="/heroes">
              <Route index element={<HeroesPage heroes={heroes}/>} />
              <Route path=":id" element={<HeroPage />} />
          </Route>
          <Route path="/add" element={<AddHeroPage addHero={addHero} />} />
          <Route path="*" element={<NotFoundPage />} />
      </Route>
      </Routes>
  </>
  )
};

export default App;
