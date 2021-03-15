import * as React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "../styles/Connect.module.css";

const Connect = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3 style={{ marginBottom: "20px" }}>Let's Connect</h3>
        <p>
          <strong>Email: </strong>kim97minsu@gmail.com
        </p>
        <p>
          <strong>LinkedIn: </strong>https://www.linkedin.com/in/minsukim97/
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
  );
};

export default Connect;
