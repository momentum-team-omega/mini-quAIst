import { Link, useNavigate } from "react-router-dom";
import React from "react";
import Nav from "components/Nav";
import Under from "components/Under";
import Footer from "components/Footer";
import d20tree from "assets/wiki-assets/d20tree.png";
import "/src/styles/Wiki.css";

const WikiQuaist = () => {
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
            <h1 className="wiki-title">What is Mini QuAIst?</h1>
            <div className="wiki-info-container">
              <div className="wiki-img-container">
                <img className="wiki-img" src={d20tree} alt="wiki-img" />
              </div>
              <div className="wiki-info-box">
                <p className="wiki-info">Hey! Thanks for being here!</p>
                <p className="wiki-info">
                  Mini QuAIst is Momentum Team 19's final project. A Dungeons &
                  Dragons style, top-down rpg video game where a player can
                  choose a character, explore the world, interact with NPCs,
                  follow a story-line, and make friends along the way.
                </p>
                <p className="wiki-info">
                  The plot of the game is a young child asleep, dreaming of a
                  fantasy land. Wandering after a lost pet, the child gets
                  consumed in world of fabulous adventure and untold wonder.
                </p>
                <p className="wiki-info">
                  The target demographic for this game is anybody who has a
                  passion for fantasy worlds and epic adventure! Our goal is to
                  be engaging enough for veterens of the Dungeons & Dragons
                  world, while also being accessible enough for newcomers to
                  learn the rules of the game without feeling overwhelmed.
                </p>
                <p className="wiki-info">
                  On behalf of the devlolpers, we would like to say{" "}
                  <strong>THANK YOU</strong> for playing our game and we hope
                  you have fun getting lost in the world of
                </p>
                <p className="wiki-info">
                  <strong>Mini QuAIst!</strong>
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

export default WikiQuaist;
