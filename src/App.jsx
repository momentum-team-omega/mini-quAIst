import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Home from 'components/Home';
import Login from 'components/Login';
import Register from 'components/Register';
import Game from 'components/Game';
import Wiki from 'components/wiki/Wiki';
import WikiQuaist from 'components/wiki/Wiki-quaist';
import WikiClasses from 'components/wiki/Wiki-classes';
import WikiMage from 'components/wiki/Wiki-mage';
import WikiBarb from 'components/wiki/Wiki-barb';
import WikiRogue from 'components/wiki/Wiki-rogue';
import WikiBattle from 'components/wiki/Wiki-battle';
import WikiAbilityCheck from './components/wiki/Wiki-ability-check';

function App() {
  const [token, setToken] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [mute, setMute] = useState(true);

  const toggleMute = () => {
    setMute((prevMute) => !prevMute);
  };

  const initializeLocalStorage = () => {
    if (!localStorage.getItem('mapPosition')) {
      const defaultMapPosition = { x: 252, y: -100 };
      localStorage.setItem('mapPosition', JSON.stringify(defaultMapPosition));
    }
  };

  useEffect(() => {
    initializeLocalStorage();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />;
        <Route path="/home" element={<Home toggleMute={toggleMute} />} />;
        <Route
          path="/login"
          element={<Login setToken={setToken} setIsLoggedIn={setIsLoggedIn} />}
        />
        ;
        <Route
          path="/register"
          element={
            <Register setToken={setToken} setIsLoggedIn={setIsLoggedIn} />
          }
        />
        ;
        <Route path="/play" element={<Game mute={mute} setMute={setMute} />} />
        ;
        <Route path="/wiki" element={<Wiki />} />;
        <Route path="/wiki/mini_quaist" element={<WikiQuaist />} />;
        <Route path="/wiki/classes" element={<WikiClasses />} />;
        <Route path="/wiki/mage" element={<WikiMage />} />;
        <Route path="/wiki/barbarian" element={<WikiBarb />} />;
        <Route path="/wiki/rogue" element={<WikiRogue />} />;
        <Route path="/wiki/battle" element={<WikiBattle />} />;
        <Route path="/wiki/ability_check" element={<WikiAbilityCheck />} />;
      </Routes>
    </>
  );
}

export default App;
