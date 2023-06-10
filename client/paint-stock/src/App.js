import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import SwimLane from "./Components/SwimLane";
import PaintForm from "./Components/PaintForm";
import { useEffect, useState } from "react";
import Axios from "axios";
//todo: get new data right away
const App = () => {
  const [paintDict, setPaintDict] = useState(null);
  useEffect(() => {
    Axios.get("http://localhost:5000/api/paint").then((res) => {
      setPaintDict(res.data)
    });
  }, []);
  return (
    <Container fluid>
      <Row>
        <Col className="content-col" xs={8}>
          <h1>Paint Stock</h1>
        </Col>
        <Col className="content-col" xs={8}>
          <SwimLane paintDict={paintDict}></SwimLane>
        </Col>
        <Col className="content-col" xs={8}>
          <PaintForm></PaintForm>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
