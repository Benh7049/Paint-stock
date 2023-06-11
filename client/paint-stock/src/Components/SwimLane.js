import Axios from "axios";
import { useState, React } from "react";
import { Card, Row, Button, Modal, Form } from "react-bootstrap";
import EditModal from "./EditModal";

//todo: display none when no data
const SwimLane = ({ paintDict}) => {
  const deletePaint = (id) => {
    Axios.delete(`http://localhost:5000/api/paint/${id}`);
  };
  return (
    <Card style={{ width: "100%", textAlign: "center" }}>
      <Row>
        {paintDict &&
          Object.keys(paintDict).map((id) => (
            <div>
              <Card.Text>
                {paintDict[id].paintName} : {paintDict[id].status}
              </Card.Text>
              <EditModal Paint={paintDict[id]} id={id}></EditModal>
              <Button
                onClick={() => {
                  deletePaint(id);
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
