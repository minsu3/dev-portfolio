import React from "react";
import styles from "../styles/Home.module.css";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import headshot from "../images/photoshoot.JPG";

import mainbanner from "../images/mainbanner.jpeg";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";
import twitter from "../images/twitter.png";
import angellist from "../images/angellist.png";

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
    <div className={styles.container}>
      <div className={styles.main}>
        <img src={mainbanner} alt="" />
        <div className={styles.title}>Minsu Kim</div>
        <div className={styles.sub}>Software Developer</div>
        <div className={styles.socialLogo}>
          <a href="https://www.linkedin.com/in/minsukim97/" target="blank">
            <img src={linkedin} alt="LinkedIn Profile" />
          </a>
          <a href="https://github.com/minsu3" target="blank">
            <img src={github} alt="Github Profile" />
          </a>
          <a href="https://twitter.com/kmnsuu" target="blank">
            <img src={twitter} alt="Twitter Profile" />
          </a>
          <a href="https://angel.co/u/minsu-kim-5" target="blank">
            <img src={angellist} alt="AngelList Profile" />
          </a>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.leftcolumn}>
          <div className={styles.projects}>
            <h2>BikeList - eCommerce Website</h2>
            <h5>
              <a href="https://github.com/minsu3/bikelist" target="blank">
                View Code
              </a>{" "}
              | <a href="https://github.com/minsu3/bikelist">Demo</a>
            </h5>
            <div className={styles.fakeimg}>Image</div>
            <br />
            <p>
              An eCommerce web application where users can login and choose the
              bicycle they are looking for and find the available bike
              retailers.
            </p>
          </div>

          <div className={styles.projects}>
            <h2>Habitico</h2>
            <h5>Productivity App Bundle</h5>
            <div className={styles.fakeimg}>Image</div>
            <br />
            <p>
              "You'll like seeing that chain, especially when you get a few
              weeks under your belt." - Jerry Seinfeld
              <br />A productivity app inspired by the comedian's "Don't break
              the chain" technique, allows users to track and make streaks of
              their habits and long term goals. Habitico operates as a bundle of
              all the productivity hacks that I found most effective.
            </p>
          </div>

          <div className={styles.projects}>
            <h2>How Dating Works</h2>
            <h5>Attraction and Dating Coach - Blair Meehan (Client) </h5>
            <div className={styles.fakeimg}>Image</div>
            <br />
            <p>
              Blair is a dating and relationship coach who helps men achieve
              their ideal dating lives. His free Dating Bootcamp video series
              teaches the essentials of getting a date, getting a girlfriend,
              and creating a healthy relationship for any man to meet, attract,
              and keep the woman of his dreams. He publishes additional dating
              advice and answers viewer questions on his YouTube channel, blog,
              podcast, and social media.
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
            <a
              href="https://drive.google.com/file/d/16AZHB9q3DeKSKAAoXwztCH0RSHwWXNj5/view?usp=sharing"
              target="blank"
            >
              <Button variant="success">
                <strong>Resumé</strong>
              </Button>
            </a>
          </div>

          <div className={styles.technology}>
            <h3 style={{ marginBottom: "30px" }}>Technology</h3>
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
                <p>JavaScript (ES6)</p>
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
            <div>
              <h3 style={{ marginBottom: "20px" }}>Let's Connect</h3>
              <p>
                <strong>Email: </strong>kim97minsu@gmail.com
              </p>
              <p>
                <strong>LinkedIn: </strong>
                https://www.linkedin.com/in/minsukim97/
              </p>
              <p>
                <strong>Github: </strong>https://github.com/minsu3
              </p>
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
    </div>
  );
};

export default Home;
