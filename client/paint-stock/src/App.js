import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import SwimLane from "./Components/SwimLane";
import PaintForm from "./Components/PaintForm";
import { useEffect, useState } from "react";
import Axios from "axios";
const App = () => {
  const [paintList, setPaintList] = useState(null);
  useEffect(() => {
    Axios.get("http://localhost:5000/api/paint").then((res) => {
      setPaintList(res.data);
    });
  }, [paintList]);
  return (
    <Container fluid>
      <Row>
        <Col className="content-col" xs={8}>
          <h1>Paint Stock</h1>
        </Col>
        <Col className="content-col" xs={8}>
          <>{paintList && <SwimLane paintList={paintList}></SwimLane>}</>
        </Col>
        <Col className="content-col" xs={8}>
          <PaintForm></PaintForm>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
