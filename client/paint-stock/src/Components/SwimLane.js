import Axios from "axios";
import { useState, React } from "react";
import { Card, Row, Button, Modal } from "react-bootstrap";

//todo: display none when no data
const SwimLane = ({ paintDict }) => {
  
  const deletePaint = (id)=>{
    Axios.delete(`http://localhost:5000/api/paint/${id}`)
  }
  return (
      <Card style={{ width: "100%", textAlign: "center" }}>
        <Row>
          {paintDict &&
            Object.keys(paintDict).map((key, index) => (
              <div>
                <Card.Text>
                  {paintDict[key].paintName} : {paintDict[key].status}
                </Card.Text>
                <Button>Edit</Button>
                <Button onClick={()=>{deletePaint(key)}}>Delete</Button>
              </div>
            ))}
        </Row>
      </Card>
  );
};

export default SwimLane;
