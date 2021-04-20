import * as React from "react";
import styles from "../styles/Projects.module.css";
import Header from "../components/Header";
import cyclist from "../images/cyclist.jpeg";
import habitico from "../images/habitico.jpeg";
import hdw from "../images/hdw.png";
import tab from "../images/tab.png";

const Projects = () => {
  return (
    <div className={styles.app}>
      <div style={{ position: "sticky", top: 0, zIndex: 10 }}>
        <Header />
      </div>
      <div className={styles.container}>
        <div className={styles.titleWrapper}>
          <div className={styles.container}>
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
                  "You'll like seeing that chain, especially when you get a few
                  weeks under your belt." - Jerry Seinfeld
                  <br />A productivity app inspired by the comedian's "Don't
                  break the chain" technique, allows users to track and make
                  streaks of their habits and long term goals. Habitico operates
                  as a bundle of all the productivity hacks that I found most
                  effective.
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
                  Blair is a dating and relationship coach who helps men achieve
                  their ideal dating lives. His free Dating Bootcamp video
                  series teaches the essentials of getting a date, getting a
                  girlfriend, and creating a healthy relationship for any man to
                  meet, attract, and keep the woman of his dreams. He publishes
                  additional dating advice and answers viewer questions on his
                  YouTube channel, blog, podcast, and social media.
                </p>
              </div>
            </div>

            <div className={styles.projects}>
              <div className={styles.titleWrapper}>
                <h2>CycleList</h2>
                <div className={styles.viewProject}>
                  <a href="https://github.com/minsu3/cyclelist" target="blank">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
