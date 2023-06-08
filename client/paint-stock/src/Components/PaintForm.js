import React from "react";
import { Button, Form, Col, Row } from "react-bootstrap";

const PaintForm = () => {
  return (
    <Form style={{ width: "100%" }}>
      <Row>
        <Form.Group as={Col}>
          <Form.Control placeholder="Enter paint name" />
        </Form.Group>
      </Row>
      <fieldset>
        <Form.Group as={Row} className="mt-3">
          <Form.Label as="legend" column sm={2}>
            Select Status:
          </Form.Label>
          <Col sm={10}>
            <Form.Check
              type="radio"
              label="Available"
              name="paintStatusRadios"
            />
            <Form.Check
              type="radio"
              label="Low"
              name="paintStatusRadios"
            />
            <Form.Check
              type="radio"
              label="Out of stock"
              name="paintStatusRadios"
            />
          </Col>
        </Form.Group>
      </fieldset>
      <Button variant="primary" type="submit" xs={6} className="mt-2">
        Add Paint
      </Button>
    </Form>
  );
};

export default PaintForm;
