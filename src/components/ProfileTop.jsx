import { Button, Col, Container, Row } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

const ProfileTop = () => {
  return (
    <Container>
      <Row className="flex-column gy-3 rounded-2 border border-muted p-2 ">
        <Col className="bg-dark">placeHolder for pic</Col>
        <Col className="">
          <Row>
            <Col>
              <h3>Jovel Asirot</h3>
              <p>Web Designer</p>
              <p>Web Designer</p>
            </Col>
            <Col>
              <p>Lavoratore Privato</p>
              <p>EPICODE</p>
            </Col>
          </Row>
        </Col>
        <Col>
          <div>
            <Button variant="secondary" className="rounded-5 me-2 ">
              Disponibile per
            </Button>
            <Button
              className="rounded-5 border border-2 border-secondary me-2 bg-opacity-10 bg-secondary"
              variant="muted"
            >
              Aggiungi sezione del profilo
            </Button>
            <Button
              className="rounded-5 text-muted border border-muted"
              variant="muted"
            >
              Altro
            </Button>
          </div>
        </Col>
        <Col>
          <Row>
            <Col className=" bg-opacity-10 bg-secondary rounded-3 p-3 me-2">
              <div className="d-flex justify-content-between">
                <span>Disponibile a lavorare</span>
                <i className="bi bi-pen "></i>
              </div>
              <p className="mb-0">
                Ruoli di Sviluppatore Web, React Developer e UX...
              </p>
              <p className="text-secondary fw-semibold mb-0 ">
                Mostra dettagli
              </p>
            </Col>
            <Col className="border border-muted rounded-3 p-3 ms-2">
              <div className="d-flex justify-content-between">
                <span className="fw-semibold">
                  Fai sapere che stai facendo selezione e attrai
                </span>
                <i className="bi bi-x-lg"></i>
              </div>
              <p className="mb-0">candidati qualificati</p>
              <p className="text-secondary fw-semibold mb-0">Inizia</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfileTop;
