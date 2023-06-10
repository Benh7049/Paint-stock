import React from "react";
import { Card, Row} from "react-bootstrap";

//todo: display none when no data
const SwimLane = ({ paintList }) => {
  return (
    <Card style={{ width: "100%", textAlign: "center" }}>
      <Row>
        {paintList &&
          paintList.map((paint) => (
            <Card.Text>
              {paint.status} : {paint.paintName}
            </Card.Text>
          ))}
      </Row>
    </Card>
  );
};

export default SwimLane;
