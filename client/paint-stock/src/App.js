import { Container, Row, Col,} from "react-bootstrap";
import "./App.css";
import SwimLane from "./Components/SwimLane";
import PaintForm from "./Components/PaintForm";
const App = () => {
  return (
    <Container fluid>
      <Row>
        <Col className="content-col" xs={8}>
          <h1>Paint Stock</h1>
        </Col>
        <Col className="content-col" xs={8}>
          <SwimLane></SwimLane>
        </Col>
        <Col className="content-col" xs={8}>
          <PaintForm></PaintForm>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
