import React from "react";
import Helmet from "react-helmet";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import emailjs from "emailjs-com";
import Button from "react-bootstrap/Button";

import cyclist from "../images/cyclist.jpeg";
import habitico from "../images/habitico.jpeg";
import hdw from "../images/hdw.png";
import headshot from "../images/photoshoot.JPG";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";
import tab from "../images/tab.png";
import angellist from "../images/angellist.png";
import downarrow from "../images/downarrow.png";

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
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_xyq1hhe",
        e.target,
        "user_Wgusg7th9dfltKayhOucQ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <>
      <Helmet>
        <title>Minsu Kim</title>
      </Helmet>

      <div className={styles.container}>
        <div className={styles.mainWrapper}>
          <div className={styles.main}>
            <div className={styles.textContainer}>
              <h1 className={styles.heyThere}>Hey there! 👋</h1>
              <h1>
                My name is <span>Minsu Kim</span>.
              </h1>
              <h1>
                I design and build things for the <span>web</span>.
              </h1>
              <div className={styles.location}>
                Freelance Web Developer and Designer based in{" "}
                <span>Santa Barbara, CA</span>. ☀️
              </div>
              <div className={styles.arrow}>
                <img
                  src={downarrow}
                  alt=""
                  style={{ userDrag: "none", userSelect: "none" }}
                />
              </div>
            </div>
          </div>
        </div>

        <div style={{ position: "sticky", top: 0, zIndex: 10 }}>
          <Header />
        </div>

        <div className={styles.content} id="scrollContent">
          <div>
            <div className={styles.leftcolumn}>
              <div className={styles.projects}>
                <div className={styles.titleWrapper}>
                  <h2>Habitico</h2>
                  <div className={styles.viewProject}>
                    <a
                      href="https://github.com/minsu3/HabiticoWebApp"
                      target="blank"
                    >
                      <img src={tab} alt="" />
                    </a>
                  </div>
                </div>
                <h5>Productivity App</h5>

                <div className={styles.projectContainer}>
                  <img src={habitico} alt="" className={styles.projectgif} />
                  <br />
                  <p className={styles.projectdescription}>
                    "You'll like seeing that chain, especially when you get a
                    few weeks under your belt." - Jerry Seinfeld
                    <br />A productivity app inspired by the comedian's "Don't
                    break the chain" technique, allows users to track and make
                    streaks of their habits and long term goals. Habitico
                    operates as a bundle of all the productivity hacks that I
                    found most effective.
                  </p>
                </div>
              </div>

              <div className={styles.projects}>
                <div className={styles.titleWrapper}>
                  <h2>How Dating Works</h2>
                  <div className={styles.viewProject}>
                    <a
                      href="https://github.com/minsu3/howdatingworks"
                      target="blank"
                    >
                      <img src={tab} alt="" />
                    </a>
                  </div>
                </div>

                <h5>Freelance for Client: Blair Meehan </h5>

                <div className={styles.projectContainer}>
                  <img src={hdw} alt="" className={styles.projectgif} />
                  <br />
                  <p className={styles.projectdescription}>
                    Blair is a dating and relationship coach who helps men
                    achieve their ideal dating lives. His free Dating Bootcamp
                    video series teaches the essentials of getting a date,
                    getting a girlfriend, and creating a healthy relationship
                    for any man to meet, attract, and keep the woman of his
                    dreams. He publishes additional dating advice and answers
                    viewer questions on his YouTube channel, blog, podcast, and
                    social media.
                  </p>
                </div>
              </div>

              <div className={styles.projects}>
                <div className={styles.titleWrapper}>
                  <h2>CycleList</h2>
                  <div className={styles.viewProject}>
                    <a
                      href="https://github.com/minsu3/cyclelist"
                      target="blank"
                    >
                      <img src={tab} alt="" />
                    </a>
                  </div>
                </div>
                <h5>eCommerce Website</h5>

                <div className={styles.projectContainer}>
                  <img src={cyclist} alt="" className={styles.projectgif} />
                  <p className={styles.projectdescription}>
                    A full stack eCommerce web application where users can login
                    and choose the bicycle they are looking for and find the
                    available bike retailers. This project incorporates Google
                    Maps API to locate the bicycle retailers and successfully
                    authenticates users onto the database.
                  </p>
                </div>
              </div>
              <Button
                variant="light"
                href="https://github.com/minsu3?tab=repositories"
                target="blank"
              >
                <strong>Check out more projects!</strong>
              </Button>
            </div>

            <div className={styles.rightcolumn}>
              <div className={styles.aboutme}>
                <div className={styles.aboutmeWrapper}>
                  <h2>About Me</h2>
                  <img src={headshot} alt="" />
                  <div className={styles.socialLogo}>
                    <a
                      href="https://www.linkedin.com/in/minsukim97/"
                      target="blank"
                    >
                      <img src={linkedin} alt="LinkedIn Profile" />
                    </a>
                    <a href="https://github.com/minsu3" target="blank">
                      <img src={github} alt="Github Profile" />
                    </a>
                    <a href="https://angel.co/u/minsu-kim-5" target="blank">
                      <img src={angellist} alt="AngelList Profile" />
                    </a>
                  </div>
                </div>
                <p>
                  I am self-taught programmer and a graduate from UC Santa
                  Barbara and General Assembly bootcamp. I make full fledged,
                  high performant web apps using React, Next.js, Node.js,
                  MongoDB, SQL, and various web frameworks and APIs. I have
                  experience in working for startups and satisfying client's
                  needs as a freelance developer.
                </p>
                <div style={{ textAlign: "center" }}>
                  <a
                    href="https://drive.google.com/file/d/171wKFxcZog6XdJWuxsybCuSrH6WEuIaN/view?usp=sharing"
                    target="blank"
                  >
                    <Button className="btn btn-info">
                      <strong>Resumé</strong>
                    </Button>
                  </a>
                </div>
              </div>

              <div className={styles.technology}>
                <h2 style={{ marginBottom: "30px" }}>Technology</h2>
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
                  <h2 style={{ marginBottom: "20px" }}>Let's Connect</h2>
                  <form onSubmit={sendEmail}>
                    <div className="row ">
                      <div className="col-12 form-group mx-auto">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Full Name"
                          name="name"
                        />
                      </div>
                      <div className="col-12 form-group pt-2 mx-auto">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email Address"
                          name="email"
                        />
                      </div>
                      <div className="col-12 form-group pt-2 mx-auto">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Subject"
                          name="subject"
                        />
                      </div>

                      <div className="col-12 form-group pt-2 mx-auto">
                        <textarea
                          className="form-control"
                          id=""
                          cols="30"
                          rows="5"
                          placeholder="Your message"
                          name="message"
                        ></textarea>
                      </div>

                      <div className="col-12 pt-2 mx-auto">
                        <input
                          type="submit"
                          className="btn btn-info"
                          value="Submit"
                        ></input>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div
              style={{ textAlign: "center", color: "white", fontSize: "15px" }}
            >
              Built from scratch with React.js
            </div>
            <div
              style={{
                textAlign: "center",
                color: "white",
                marginTop: "10px",
                fontSize: "17px",
              }}
            >
              &copy; 2021 Minsu Kim All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
