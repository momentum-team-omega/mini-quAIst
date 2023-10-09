import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Home from 'components/Home';
import Login from 'components/Login';
import Register from 'components/Register';
import Game from 'components/Game';
import TempBattle from 'components/Temp-battle';
import TempDialogue from './components/Temp-dialogue';
import TempCreate from './components/Temp-create';
import TempCheck from './components/Temp-check';

function App() {
  const [token, setToken] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />;
        <Route path="/home" element={<Home />} />;
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
        <Route path="/play" element={<Game />} />;
        <Route path="/battle" element={<TempBattle />} />;
        <Route path="/dialogue" element={<TempDialogue />} />;
        <Route path="/create" element={<TempCreate />} />;
        <Route path="/check" element={<TempCheck />} />;
      </Routes>
    </>
  );
}

export default App;
