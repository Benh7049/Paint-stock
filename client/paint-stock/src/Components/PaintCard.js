import React from "react";
import { Button, Card, Row, Col } from "react-bootstrap";
import EditModal from "./EditModal";
import Axios from "axios";

const PaintCard = ({ paint }) => {
  const deletePaint = (id) => {
    Axios.delete(`http://localhost:5000/api/paint/${id}`);
  };
  return (
    <div className="mb-2">
      <p>{paint.paintName}</p>
      <Row>
        <Col xs={12} className="mb-2">
          <EditModal Paint={paint}>Edit</EditModal>
        </Col>
        <Col xs={12} className="mb-2">
          <Button onClick={() => deletePaint(paint.id)}>Remove</Button>
        </Col>
      </Row>
    </div>
  );
};

export default PaintCard;
