import * as React from "react";
import Header from "../components/Header";
import styles from "../styles/Connect.module.css";
import emailjs from "emailjs-com";

const Connect = () => {
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
    <div className={styles.app}>
      <div style={{ position: "sticky", top: 0, zIndex: 10 }}>
        <Header />
      </div>
      <div className={styles.container}>
        <div className={styles.titleWrapper}>
          <div className={styles.container}>
            <div className={styles.content}>
              <h2 style={{ marginBottom: "20px" }}>Let's Connect</h2>

              <div className={styles.address}>
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
              </div>
              <form onSubmit={sendEmail}>
                <div className="row pt-3 mx-auto">
                  <div className="col-10 form-group mx-auto">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      name="name"
                    />
                  </div>
                  <div className="col-10 form-group pt-2 mx-auto">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email Address"
                      name="email"
                    />
                  </div>
                  <div className="col-10 form-group pt-2 mx-auto">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject"
                      name="subject"
                    />
                  </div>

                  <div className="col-10 form-group pt-2 mx-auto">
                    <textarea
                      className="form-control"
                      id=""
                      cols="30"
                      rows="8"
                      placeholder="Your message"
                      name="message"
                    ></textarea>
                  </div>

                  <div className="col-10 pt-3 mx-auto">
                    <input
                      type="submit"
                      className="btn btn-info"
                      value="Send Message"
                    ></input>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
