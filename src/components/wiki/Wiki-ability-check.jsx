import { Link, useNavigate } from 'react-router-dom';
import React from 'react';
import Nav from 'components/Nav';
import Under from 'components/Under';
import Footer from 'components/Footer';
import abilityCheck from 'assets/wiki-assets/ability-check.png';

const WikiAbilityCheck = () => {
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
            <h1 className="wiki-title">What is an Ability Check?</h1>
            <div className="wiki-info-container">
              <div className="wiki-img-container">
                <img className="wiki-img" src={abilityCheck} alt="wiki-img" />
              </div>
              <div className="wiki-info-box">
                <p className="wiki-info">
                  In Mini QuAIst, and many other Dungeons & Dragons inspired
                  games, the game often challenges characters to see if they can
                  succeed at a task. This is where the "ability check" comes in.
                </p>
                <p className="wiki-info">
                  Imagine you're trying to do something in real life, like climb
                  a wall. Whether or not you succeed depends on a few factors:
                  how strong you are, how skilled you are at climbing, and maybe
                  a bit of luck. In Mini QuAIst, this is simulated using ability
                  checks.
                </p>
                <p className="wiki-info">
                  The ability check is most often determined by rolling a
                  20-sided dice, or 'd20'. Any additional modifiers are added
                  and occasionally a character might also add proficiency
                  bonuses if they're particularly skilled at a given task. If
                  your number is equal to or higher than the required amount,
                  you succeed! If it's lower, you fail.
                </p>
                <p className="wiki-info">
                  In a nutshell, an ability check is a way of using dice and
                  character stats to see if you can pull off a task in the game
                  world. It's a mix of your character's natural talents,
                  training, and a bit of luck.
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

export default WikiAbilityCheck;
