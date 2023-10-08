import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Home from "components/Home";
import Login from "components/Login";
import Register from "components/Register";
import Game from "components/Game";
import BattleTemp from "components/Battle-temp";
import Dialogue from "./components/Dialogue";

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
        <Route path="/battle" element={<BattleTemp />} />;
        <Route
          path="/dialogue"
          element={
            <Dialogue
              npcText="Hello, adventurer! How can I help you?"
              options={[
                "Ask about quests",
                "Buy items",
                "Leave",
                "Say goodbye",
              ]}
              backgroundImage="/src/assets/lotr.png" // Pass the URL as a prop
            />
          }
        />
        ;
      </Routes>
    </>
  );
}

export default App;
