import Axios from "axios";
import { useState, React } from "react";
import { Card, Row, Button, Modal, Form } from "react-bootstrap";
import EditModal from "./EditModal";

//todo: display none when no data
const SwimLane = ({paintList}) => {
  const deletePaint = (id) => {
    Axios.delete(`http://localhost:5000/api/paint/${id}`);
  };
  return (
    <Card style={{ width: "100%", textAlign: "center" }}>
      <Row>
        {paintList &&
          paintList.map((paint) => (
            <div>
              <Card.Text>
                {paint.paintName} : {paint.status}
              </Card.Text>
              <EditModal Paint={paint} id={paint.id}></EditModal>
              <Button
                onClick={() => {
                  deletePaint(paint.id);
                }}
              >
                Delete
              </Button>
            </div>
          ))}
      </Row>
    </Card>
  );
};

export default SwimLane;
