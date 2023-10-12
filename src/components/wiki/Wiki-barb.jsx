import { Link, useNavigate } from 'react-router-dom';
import React from 'react';
import Nav from 'components/Nav';
import Under from 'components/Under';
import Footer from 'components/Footer';
import barbarianImg from 'assets/wiki-assets/barbarian.png';

const WikiBarb = () => {
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
            <h1 className="wiki-title">What is a Barbarian?</h1>
            <div className="wiki-info-container">
              <div className="wiki-img-container">
                <img className="wiki-img" src={barbarianImg} alt="wiki-img" />
              </div>
              <div className="wiki-info-box">
                <p className="wiki-info">
                  The Barbarian is the embodiment of primal fury, a warrior who
                  draws from raw rage and the power of nature to decimate foes
                  on the battlefield. These untamed fighters are known for their
                  resilience and ferocity.
                </p>
                <div className="list-box">
                  <p className="list-label">Proficiencies:</p>
                  <p className="list-item">
                    <strong>Armor: </strong>Light and Medium Armor, Shields
                  </p>
                  <p className="list-item">
                    <strong>Weapons: </strong>Heavy Weapons, Martial Combat
                  </p>
                  <p className="list-item">
                    <strong>Saving Throws: </strong>Strength, Constitution
                  </p>
                </div>
                <p className="wiki-info">
                  The Barbarian class captures the spirit of the wild, untamed
                  warrior, drawing on primal fury and the power of nature to
                  overpower their enemies. They are a force to be reckoned with
                  on the battlefield and are known for their intense combat
                  style and sheer resilience.
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

export default WikiBarb;
