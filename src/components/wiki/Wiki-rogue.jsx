import { Link, useNavigate } from 'react-router-dom';
import React from 'react';
import Nav from 'components/Nav';
import Under from 'components/Under';
import Footer from 'components/Footer';
import rogueImg from 'assets/wiki-assets/rogue.png';

const WikiRogue = () => {
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
            <h1 className="wiki-title">What is a Rogue?</h1>
            <div className="wiki-info-container">
              <div className="wiki-img-container">
                <img className="wiki-img" src={rogueImg} alt="wiki-img" />
              </div>
              <div className="wiki-info-box">
                <p className="wiki-info">
                  Rogues are skilled thieves, assassins, spies, and scouts. They
                  excel in stealth, dexterity-based skills, and precision
                  attacks. They are often seen as cunning, nimble, and
                  resourceful adventurers.
                </p>
                <div className="list-box">
                  <p className="list-label">Proficiencies:</p>
                  <p className="list-item">
                    <strong>Armor: </strong>Light Armor
                  </p>
                  <p className="list-item">
                    <strong>Weapons: </strong>Simple Weapons, Hand Crossbows,
                    Shortswords
                  </p>
                  <p className="list-item">
                    <strong>Saving Throws: </strong>Dexterity, Intelligence
                  </p>
                </div>
                <p className="wiki-info">
                  The Rogue class offers a lot of versatility, and its features
                  are designed to ensure that Rogues can slip in and out of
                  dangerous situations, deal significant damage when the
                  conditions are right, and apply their skills in a wide range
                  of scenarios. Whether you want to be a master thief, a shadowy
                  assassin, or a charismatic con artist, the Rogue has options
                  for all sorts of playstyles.
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

export default WikiRogue;
