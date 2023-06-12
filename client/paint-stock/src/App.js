import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import SwimLane from "./Components/SwimLane";
import PaintForm from "./Components/PaintForm";
import { useEffect, useState, createContext, useContext } from "react";
import Axios from "axios";
const App = () => {
  const [paintList, setPaintList] = useState(null);
  const dataContext = createContext();
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    Axios.get("http://localhost:5000/api/paint").then((res) => {
      setPaintList(res.data);
    });
  };
  return (
    <Container fluid>
      <Row>
        <Col className="content-col" xs={8}>
          <h1>Paint Stock</h1>
        </Col>
        <Col className="content-col" xs={8}>
          <>
            {paintList && (
              <SwimLane paintList={paintList} getData={getData}></SwimLane>
            )}
          </>
        </Col>
        <Col className="content-col" xs={8}>
          <PaintForm
            getData={getData}
            setPaintList={setPaintList}
            submitBttnText={"Add Paint"}
            statusFieldText={"Select status"}
            paintFieldText={"Enter paint name"}
            method={"POST"}
          ></PaintForm>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
