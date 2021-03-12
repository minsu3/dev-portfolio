import React from "react";
import styles from "../styles/Home.module.css";
import headshot from "../images/photoshoot.JPG";
import mainbanner from "../images/mainbanner.jpeg";
import Button from "react-bootstrap/Button";

const Home = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.main}>
          <img src={mainbanner} alt="" />
          <div className={styles.title}>Minsu Kim</div>
          <div className={styles.sub}>Software Developer</div>
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
                and various web frameworks/APIs. I have experience in working
                for startups and satisfying client's needs as a freelance
                developer.
              </p>
              <Button variant="success">
                <strong>Resumé</strong>
              </Button>
            </div>

            <div className={styles.technology}>
              <h3>Technology</h3>
              <div className={styles.fakeimg}>
                <div>
                  <img src="images/fulls/html-5.png" alt="" title="HTML5" />
                </div>
                <div>
                  <img src="images/fulls/css.png" alt="" title="CSS3" />
                </div>
                <div>
                  <img
                    src="images/fulls/javascript.png"
                    alt=""
                    title="JavaScript"
                  />
                </div>
                <div>
                  <img src="images/fulls/react.png" alt="" title="React" />
                </div>
              </div>
              <br />
              <div className={styles.fakeimg}>Image</div>
              <br />
              <div className={styles.fakeimg}>Image</div>
            </div>

            <div className={styles.social}>
              <h3>Follow on Social Media</h3>
              <p>Some text..</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
