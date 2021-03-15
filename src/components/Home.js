import React from "react";
import styles from "../styles/Home.module.css";
import Connect from "../components/Connect";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";

import headshot from "../images/photoshoot.JPG";
import mainbanner from "../images/mainbanner.jpeg";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";
import twitter from "../images/twitter.png";

import logohtml from "../images/fulls/html-5.png";
import css from "../images/fulls/css.png";
import javascript from "../images/fulls/javascript.png";
import react from "../images/fulls/react.png";
import typescript from "../images/fulls/typescript.png";
import nodejs from "../images/fulls/nodejs.png";
import python from "../images/fulls/python.png";
import mongodb from "../images/fulls/mongodb.png";
import express from "../images/fulls/express.png";
import sqlite from "../images/fulls/sqlite.png";
import postgresql from "../images/fulls/postgresql.png";
import git from "../images/fulls/git.png";
import aws from "../images/fulls/aws.png";
import docker from "../images/fulls/docker.png";
import nginx from "../images/fulls/nginx.png";
import digitalocean from "../images/fulls/digitalocean.png";

const Home = () => {
  return (
    <div>
      <div className={styles.main}>
        <img src={mainbanner} alt="" />
        <div className={styles.title}>Minsu Kim</div>
        <div className={styles.sub}>Software Developer</div>
        <div className={styles.socialLogo}>
          <img src={linkedin} alt="" />
          <img src={github} alt="" />
          <img src={twitter} alt="" />
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.leftcolumn}>
          <div className={styles.projects}>
            <h2>BikeList</h2>
            <h5>eCommerce Website</h5>
            <div className={styles.fakeimg}>Image</div>
            <p>Some text..</p>
            <p>
              Sunt in culpa qui officia deserunt mollit anim id est laborum
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco.
            </p>
          </div>

          <div className={styles.projects}>
            <h2>Habitico</h2>
            <h5>Productivity App Bundle</h5>
            <div className={styles.fakeimg}>Image</div>
            <p>Some text..</p>
            <p>
              Sunt in culpa qui officia deserunt mollit anim id est laborum
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco.
            </p>
          </div>

          <div className={styles.projects}>
            <h2>How Dating Works</h2>
            <h5>Attraction and Dating Coach - Blair Meehan (Client) </h5>
            <div className={styles.fakeimg}>Image</div>
            <p>Some text..</p>
            <p>
              Sunt in culpa qui officia deserunt mollit anim id est laborum
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco.
            </p>
          </div>

          <Button variant="light">
            <strong>Check out more projects!</strong>
          </Button>
        </div>

        <div className={styles.rightcolumn}>
          <div className={styles.aboutme}>
            <h2>About Me</h2>
            <div>
              <img
                src={headshot}
                alt=""
                style={{ width: "100%", marginBottom: "10px" }}
              />
            </div>
            <p>
              Hey there! My name is Minsu Kim and I'm a full stack software
              developer based in SF Bay Area. I make full fledged, high
              performant web apps using React, Next.js, Node.js, MongoDB, SQL,
              and various web frameworks/APIs. I have experience in working for
              startups and satisfying client's needs as a freelance developer.
            </p>
            <Button variant="success">
              <strong>Resumé</strong>
            </Button>
          </div>

          <div className={styles.technology}>
            <h3>Technology</h3>
            <div className={styles.skillsimg}>
              <div className={styles.logos}>
                <img src={logohtml} alt="" />
                <p>HTML5</p>
              </div>
              <div className={styles.logos}>
                <img src={css} alt="" />
                <p>CSS3</p>
              </div>
              <div className={styles.logos}>
                <img src={javascript} alt="" />
                <p>JavaScript</p>
              </div>
              <div className={styles.logos}>
                <img src={react} alt="" />
                <p>React</p>
              </div>
            </div>
            <br />
            <div className={styles.skillsimg}>
              <div className={styles.logos}>
                <img src={typescript} alt="" />
                <p>TypeScript</p>
              </div>
              <div className={styles.logos}>
                <img src={nodejs} alt="" />
                <p>Node.js</p>
              </div>
              <div className={styles.logos}>
                <img src={python} alt="" />
                <p>Python</p>
              </div>
              <div className={styles.logos}>
                <img src={mongodb} alt="" />
                <p>MongoDB</p>
              </div>
            </div>
            <br />
            <div className={styles.skillsimg}>
              <div className={styles.logos}>
                <img src={express} alt="" />
                <p>Express</p>
              </div>
              <div className={styles.logos}>
                <img src={sqlite} alt="" />
                <p>SQLite3</p>
              </div>
              <div className={styles.logos}>
                <img src={postgresql} alt="" />
                <p>PostgreSQL</p>
              </div>
              <div className={styles.logos}>
                <img src={git} alt="" />
                <p>Git</p>
              </div>
            </div>
            <br />
            <div className={styles.skillsimg}>
              <div className={styles.logos}>
                <img src={aws} alt="" />
                <p>Amazon Web Services</p>
              </div>
              <div className={styles.logos}>
                <img src={docker} alt="" />
                <p>Docker</p>
              </div>
              <div className={styles.logos}>
                <img src={nginx} alt="" />
                <p>Nginx</p>
              </div>
              <div className={styles.logos}>
                <img src={digitalocean} alt="" />
                <p>DigitalOcean</p>
              </div>
            </div>
          </div>

          <div className={styles.social}>
            <h3>Contact Me</h3>
            <Form>
              <Form.Group>
                <Form.Label>Full Name</Form.Label>
                <Form.Control />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <div className="mb-3">
                <Form.File id="formcheck-api-regular">
                  <Form.File.Label>Upload File</Form.File.Label>
                  <Form.File.Input />
                </Form.File>
              </div>

              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Send a Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
