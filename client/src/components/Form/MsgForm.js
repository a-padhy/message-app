import axios from "axios";
import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
const MsgForm = ({ getData }) => {
  const [msg, setMsg] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(
      "https://message-phjc15g3s-a-padhy.vercel.app/api/v1/messages",
      { value: msg }
    );
    setMsg("");
    getData();
  };
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={8}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-2" controlId="formBasicMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Message"
                value={msg}
                onChange={(event) => {
                  setMsg(event.target.value);
                }}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default MsgForm;
