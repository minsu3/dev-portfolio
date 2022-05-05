import React from "react";
import Helmet from "react-helmet";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";

// import headshot from "../images/photoshoot.JPG";
// import linkedin from "../images/linkedin.png";
// import github from "../images/github.png";
// import angellist from "../images/angellist.png";
import tab from "../images/tab.png";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Minsu Kim</title>
      </Helmet>

      <div className={styles.container}>
        <div style={{ position: "sticky", top: 0, zIndex: 10 }}>
          <Header />
        </div>

        <div className={styles.content} id="scrollContent">
          <div className={styles.projectContainer}>
            <div className={styles.projects}>
              <div className={styles.titleWrapper}>
                <h2>Project 1</h2>
                <div className={styles.viewProject}>
                  <a
                    href="https://github.com/minsu3/howdatingworks"
                    target="blank"
                  >
                    <img src={tab} alt="" />
                  </a>
                </div>
              </div>
              <h5>Project Subtitle</h5>
              <div className={styles.projectContainer}>
                <br />
                <p className={styles.projectdescription}>PROJECT DESCRIPTION</p>
              </div>
            </div>

            <div className={styles.projects}>
              <div className={styles.titleWrapper}>
                <h2>Project 2</h2>
                <div className={styles.viewProject}>
                  <a
                    href="https://github.com/minsu3/howdatingworks"
                    target="blank"
                  >
                    <img src={tab} alt="" />
                  </a>
                </div>
              </div>
              <h5>Project Subtitle</h5>
              <div className={styles.projectContainer}>
                <br />
                <p className={styles.projectdescription}>PROJECT DESCRIPTION</p>
              </div>
            </div>

            <div className={styles.projects}>
              <div className={styles.titleWrapper}>
                <h2>Project 3</h2>
                <div className={styles.viewProject}>
                  <a href="https://github.com/minsu3/cyclelist" target="blank">
                    <img src={tab} alt="" />
                  </a>
                </div>
              </div>
              <h5>Project Subtitle</h5>
              <div className={styles.projectContainer}>
                <p className={styles.projectdescription}>PROJECT DESCRIPTION</p>
              </div>
            </div>
            <div className={styles.projects}>
              <div className={styles.titleWrapper}>
                <h2>Project 4</h2>
                <div className={styles.viewProject}>
                  <a href="https://github.com/minsu3/cyclelist" target="blank">
                    <img src={tab} alt="" />
                  </a>
                </div>
              </div>
              <h5>Project Subtitle</h5>
              <div className={styles.projectContainer}>
                <p className={styles.projectdescription}>PROJECT DESCRIPTION</p>
              </div>
            </div>
          </div>
          <div
            style={{ textAlign: "center", color: "black", fontSize: "15px" }}
          >
            Built from scratch with React.js
          </div>
          <div
            style={{
              textAlign: "center",
              color: "black",
              marginTop: "10px",
              fontSize: "17px",
            }}
          >
            &copy; 2021 Minsu Kim All Rights Reserved.
          </div>
        </div>
      </div>
    </>
  );
};

// useEffect(() => {
//   window.scrollTo(0, 0);
// }, []);

export default Home;
