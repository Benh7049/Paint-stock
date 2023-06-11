import Axios from "axios";
import { useState, React } from "react";
import { Card, Row, Button, Modal, Form, Col } from "react-bootstrap";
import EditModal from "./EditModal";
import PaintCard from "./PaintCard";

//todo: display none when no data
const SwimLane = ({paintList}) => {
  const deletePaint = (id) => {
    Axios.delete(`http://localhost:5000/api/paint/${id}`);
  };
  const columns = [
    {
      id: "Low",
      label: "Low",
    },
    {
      id: "Available",
      label: "Available",
    },
    {
      id: "Out of Stock",
      label: "Out of Stock",
    },
  ];
  const renderPaint = (columnId) => {
    return paintList
      .filter((paint) => paint.status === columnId)
      .map((p) => <PaintCard key={p.id} paint={p}></PaintCard>);
  };

  // Render columns first, even if there is no paint.
  // renderPaint will filter and match paint with column.
  return (
    <Card style={{ width: "100%", textAlign: "center" }}>
      <Row>
        {columns.map((col) => {
          return (
            <Col xs={4} key={col.id}>
              <Card.Text>{col.label}</Card.Text>
              {renderPaint(col.id)}
            </Col>
          );
        })}
      </Row>
    </Card>
  );
};

export default SwimLane;
