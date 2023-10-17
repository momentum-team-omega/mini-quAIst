import { Link } from "react-router-dom";
import React from "react";
import Nav from "components/Nav";
import Under from "components/Under";
import Footer from "components/Footer";
import d20tree from "assets/wiki-assets/d20tree-icon.png";
import classesImg from "assets/wiki-assets/classes-icon.png";
import mageImg from "assets/wiki-assets/mage-icon.png";
import barbarianImg from "assets/wiki-assets/barbarian-icon.png";
import rogueImg from "assets/wiki-assets/rogue-icon.png";
import battleImg from "assets/wiki-assets/battle-icon.png";
import abilityImg from "assets/wiki-assets/ability-check-icon.png";
import "/src/styles/Wiki.css";

const Wiki = () => {
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
            <Link to="/wiki/mini_quaist">
              <div className="wiki-page-link">
                <div className="wiki-link-img-container">
                  <img
                    className="wiki-link-img"
                    src={d20tree}
                    alt="wiki-link"
                  />
                </div>
                <div className="wiki-label-container">
                  <p className="wiki-label">What is Mini QuAIst?</p>
                </div>
              </div>
            </Link>
            <Link to="/wiki/classes">
              <div className="wiki-page-link">
                <div className="wiki-link-img-container">
                  <img
                    className="wiki-link-img"
                    src={classesImg}
                    alt="wiki-link"
                  />
                </div>
                <div className="wiki-label-container">
                  <p className="wiki-label">What are Classes?</p>
                </div>
              </div>
            </Link>
            <Link to="/wiki/mage">
              <div className="wiki-page-link">
                <div className="wiki-link-img-container">
                  <img
                    className="wiki-link-img"
                    src={mageImg}
                    alt="wiki-link"
                  />
                </div>
                <div className="wiki-label-container">
                  <p className="wiki-label">What is a Mage?</p>
                </div>
              </div>
            </Link>
            <Link to="/wiki/barbarian">
              <div className="wiki-page-link">
                <div className="wiki-link-img-container">
                  <img
                    className="wiki-link-img"
                    src={barbarianImg}
                    alt="wiki-link"
                  />
                </div>
                <div className="wiki-label-container">
                  <p className="wiki-label">What is a Barbarian?</p>
                </div>
              </div>
            </Link>
            <Link to="/wiki/rogue">
              <div className="wiki-page-link">
                <div className="wiki-link-img-container">
                  <img
                    className="wiki-link-img"
                    src={rogueImg}
                    alt="wiki-link"
                  />
                </div>
                <div className="wiki-label-container">
                  <p className="wiki-label">What is a Rogue?</p>
                </div>
              </div>
            </Link>
            <Link to="/wiki/battle">
              <div className="wiki-page-link">
                <div className="wiki-link-img-container">
                  <img
                    className="wiki-link-img"
                    src={battleImg}
                    alt="wiki-link"
                  />
                </div>
                <div className="wiki-label-container">
                  <p className="wiki-label">What is a Battle?</p>
                </div>
              </div>
            </Link>
            <Link to="/wiki/ability_check">
              <div className="wiki-page-link">
                <div className="wiki-link-img-container">
                  <img
                    className="wiki-link-img"
                    src={abilityImg}
                    alt="wiki-link"
                  />
                </div>
                <div className="wiki-label-container">
                  <p className="wiki-label">What is an Ability Check?</p>
                </div>
              </div>
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Wiki;
