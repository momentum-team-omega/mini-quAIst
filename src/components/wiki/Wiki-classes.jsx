import { Link, useNavigate } from "react-router-dom";
import React from "react";
import Nav from "components/Nav";
import Under from "components/Under";
import Footer from "components/Footer";
import classesImg from "assets/wiki-assets/classes.png";
import mageImg from "assets/wiki-assets/mage-icon.png";
import barbarianImg from "assets/wiki-assets/barbarian-icon.png";
import rogueImg from "assets/wiki-assets/rogue-icon.png";
import "/src/styles/Wiki.css";

const WikiClasses = () => {
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
            <h1 className="wiki-title">What are Classes?</h1>
            <div className="wiki-info-container">
              <div className="wiki-img-container">
                <img className="wiki-img" src={classesImg} alt="wiki-img" />
              </div>
              <div className="wiki-info-box">
                <p className="wiki-info">
                  Welcome to the world of Mini QuAIst! One of the first things
                  you'll notice is that characters can belong to different
                  "classes". Think of a class as a job or profession, but with a
                  fantasy twist. It determines your character's skills,
                  abilities, and how they approach challenges in the game.
                  Today, we'll introduce you to three popular classes:
                </p>
                <p className="wiki-info">
                  The <strong>Mage,</strong>
                  the <strong>Barbarian,</strong> and the{" "}
                  <strong>Rogue.</strong>
                </p>
                <Link to="/wiki/mage">
                  <div className="class-link-box">
                    <div className="class-link-img-box">
                      <img
                        className="class-link-img"
                        src={mageImg}
                        alt="class-link"
                      />
                    </div>
                    <div className="class-link-label">
                      <p className="class-link-text">Mage</p>
                    </div>
                  </div>
                </Link>
                <Link to="/wiki/barbarian">
                  <div className="class-link-box">
                    <div className="class-link-img-box">
                      <img
                        className="class-link-img"
                        src={barbarianImg}
                        alt="class-link"
                      />
                    </div>
                    <div className="class-link-label">
                      <p className="class-link-text">Barbarian</p>
                    </div>
                  </div>
                </Link>
                <Link to="/wiki/rogue">
                  <div className="class-link-box">
                    <div className="class-link-img-box">
                      <img
                        className="class-link-img"
                        src={rogueImg}
                        alt="class-link"
                      />
                    </div>
                    <div className="class-link-label">
                      <p className="class-link-text">Rogue</p>
                    </div>
                  </div>
                </Link>
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

export default WikiClasses;
