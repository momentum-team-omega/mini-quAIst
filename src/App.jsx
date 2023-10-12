
import React, { useState } from 'react';
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
import TempBattle from 'components/Temp-battle';
import TempDialogue from './components/Temp-dialogue';
import TempCreate from './components/Temp-create';
import TempCheck from './components/Temp-check';
import TempInventory from './components/Temp-inventory';
import TempStart from "./components/Temp-start";

function App() {
  const [token, setToken] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to='/home' replace />} />;
        <Route path='/home' element={<Home />} />;
        <Route
          path='/login'
          element={<Login setToken={setToken} setIsLoggedIn={setIsLoggedIn} />}
        />
        ;
        <Route
          path='/register'
          element={
            <Register setToken={setToken} setIsLoggedIn={setIsLoggedIn} />
          }
        />
        ;
        <Route path="/play" element={<Game />} />;
        <Route path="/wiki" element={<Wiki />} />;
        <Route path="/wiki/mini_quaist" element={<WikiQuaist />} />;
        <Route path="/wiki/classes" element={<WikiClasses />} />;
        <Route path="/wiki/mage" element={<WikiMage />} />;
        <Route path="/wiki/barbarian" element={<WikiBarb />} />;
        <Route path="/wiki/rogue" element={<WikiRogue />} />;
        <Route path="/battle" element={<TempBattle />} />;
        <Route path="/dialogue" element={<TempDialogue />} />;
        <Route path="/create" element={<TempCreate />} />;
        <Route path="/check" element={<TempCheck />} />;
        <Route path="/inventory" element={<TempInventory />} />;
        <Route path='/start' element={<TempStart />} />;
      </Routes>
    </>
  );
}

export default App;
