import { Link, useNavigate } from "react-router-dom";
import React from "react";
import Nav from "components/Nav";
import Under from "components/Under";
import Footer from "components/Footer";
import battleImg from "assets/wiki-assets/battle.png";
import "/src/styles/Wiki.css";

const WikiBattle = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="homeContainer">
      <Nav />
      <div className="content">
        <div className="welcome-box">
          <p className="mini-subtext">WELCOME TO THE</p>
          <p className="mini-quaist">MINI QUAIST</p>
          <div className="underline-container">
            <Under />
          </div>
          <p className="mini-subtext">Wiki</p>
        </div>
        <section className="wikiSection">
          <div className="wikiContainer">
            <h1 className="wiki-title">What is a Battle?</h1>
            <div className="wiki-info-container">
              <div className="wiki-img-container">
                <img className="wiki-img" src={battleImg} alt="wiki-img" />
              </div>
              <div className="wiki-info-box">
                <p className="wiki-info">
                  When your character encounters a NPC on the map that it can't
                  dialogue peacefully with, a battle sequence will be initiated.
                  Mini QuAIst utilizes a turn-based combat system where players
                  and opponents take turns making their moves. It's similar to
                  board games like chess, where each side waits for the other to
                  complete their move before proceeding.
                </p>
                <p className="wiki-info">
                  When a battle begins, the character and opponent will be
                  displayed on opposite sides of the screen. The player will
                  have options for either attacking or healing. Once the player
                  has selected an option the move will be carried out based on
                  an ability check of stats and then the opponent will have a
                  turn. Once the enemy has taken their turn, it becomes the
                  players turn again.
                </p>
                <p className="wiki-info">
                  Once both the characters and the enemy have taken their
                  actions, the turn ends. The next turn begins, and the process
                  repeats until one side is defeated. In essence, turn-based
                  combat is a strategic system where players need to think about
                  their choices and anticipate enemy actions. It's less about
                  quick reflexes and more about planning and decision-making.
                </p>
              </div>
            </div>
          </div>
          <div className="wiki-link-container">
            <div onClick={handleBack} className="wiki-back-link">
              BACK
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default WikiBattle;
