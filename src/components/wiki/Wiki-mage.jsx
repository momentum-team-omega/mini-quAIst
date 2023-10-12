import { Link, useNavigate } from 'react-router-dom';
import React from 'react';
import Nav from 'components/Nav';
import Under from 'components/Under';
import Footer from 'components/Footer';
import mageImg from 'assets/wiki-assets/mage.png';

const WikiMage = () => {
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
            <h1 className="wiki-title">What is a Mage?</h1>
            <div className="wiki-info-container">
              <div className="wiki-img-container">
                <img className="wiki-img" src={mageImg} alt="wiki-img" />
              </div>
              <div className="wiki-info-box">
                <p className="wiki-info">
                  Mages are arcane spellcasters who derive their power from
                  intense study and a deep understanding of the arcane arts.
                  Similar to sorcerers, mages spend years deciphering ancient
                  tomes, learning new spells, and mastering the arcane.
                </p>
                <div className="list-box">
                  <p className="list-label">Proficiencies:</p>
                  <p className="list-item">
                    <strong>Armor: </strong>Magic Armor
                  </p>
                  <p className="list-item">
                    <strong>Weapons: </strong>Daggers, Staffs, Arcane Weapons
                  </p>
                  <p className="list-item">
                    <strong>Saving Throws: </strong>Intelligence, Wisdom
                  </p>
                </div>
                <p className="wiki-info">
                  In a party, wizards typically serve as primary spellcasters,
                  dealing damage, controlling the battlefield, and providing
                  utility with their wide array of spells. Their versatility
                  makes them valuable members of any adventuring group.
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

export default WikiMage;
