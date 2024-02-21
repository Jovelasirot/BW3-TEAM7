import { Col, Container, InputGroup, Row } from "react-bootstrap";
import { Form } from "react-router-dom";

const HomeMidTop = () => {
  return (
    <Row className="flex-column p-2 bg-white mt-3 border border-muted rounded-2 ">
      <Col className="d-flex ">
        <i className="bi bi-person fs-4 "></i>
        {/* <img src="" alt="" /> */}
        <input
          className="ms-2 flex-grow-1 "
          placeholder="Avvia Un Post"
        ></input>
      </Col>
      <Col className="d-flex fs-4 justify-content-between ">
        <div className="d-flex">
          <i className="bi bi-image text-secondary "></i>
          <span className="ms-2">Contenuti multimediali</span>
        </div>
        <div className="d-flex">
          <i className="bi bi-calendar3 text-warning"></i>
          <span className="ms-2">Evento</span>
        </div>
        <div className="d-flex">
          <i className="bi bi-layout-text-window text-danger"></i>
          <span className="ms-2">Scrivi un articolo</span>
        </div>
      </Col>
    </Row>
  );
};

export default HomeMidTop;
