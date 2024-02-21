import { Col, Container, Row } from "react-bootstrap";
import HomeMidTop from "./HomeMidTop";

const HomeMid = () => {
  return (
    <Container>
      <Row className="flex-column">
        <Col>
          <HomeMidTop />
        </Col>
        <Col className="d-flex align-items-center ">
          <div className="flex-grow-1 me-2 ">
            <hr />
          </div>
          <div>
            <span className="d-flex">
              Seleziona la visualizzazione del feed:
              <p className="mb-0 fw-semibold ms-2 ">Più rilevanti per primi</p>
              <i className="bi bi-caret-down-fill"></i>
            </span>
          </div>
        </Col>
        <Col>
          <h1>test</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default HomeMid;
