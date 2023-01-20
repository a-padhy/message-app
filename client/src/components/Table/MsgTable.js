import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";

const MsgTable = ({ messages }) => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col xs={8}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>_id</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
              {messages.map((msg) => {
                return (
                  <tr key={msg._id}>
                    <td>{msg._id}</td>
                    <td>{msg.value}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default MsgTable;
