import { Button, Col, Container, Row } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import profileTopImg from "../assets/profileBgTop.png";
import profileUserPic from "../assets/Bitmoji.png";
import MyAnalisi from "./MyAnalisi";
import MyRisorse from "./MyRisorse";
import MyAttivita from "./MYAttivita";

const ProfileTop = () => {
  return (
    <Col className="col-9">
      <Row className="flex-column gy-3 rounded-2 border border-muted overflow-auto mt-2 bg-white ">
        <Col className="p-0 position-relative mt-0  mb-4">
          <img
            src={profileTopImg}
            alt=""
            className="img-fluid w-100 z-0 h-100 "
          />
          <div className="z-1 position-absolute top-50 start-0 translate-right bg-dark border border-3 border-light rounded-circle d-flex  ms-4 overflow-auto">
            <img
              src={profileUserPic}
              alt=""
              className="profilePic flex-grow-1 imgUser "
            />
          </div>
        </Col>
        <Col className="text-end mb-5 ">
          <i className="bi bi-pen fs-4 text-muted"></i>
        </Col>
        <Col className="">
          <Row>
            <Col>
              <h3>Jovel Asirot</h3>
              <p>Web Designer</p>
              <div className="d-flex">
                <p className="text-muted me-2 ">
                  Milano, Lombardia, Italia &#183;
                </p>
                <p className="text-secondary fw-semibold ">
                  Informazioni di contatto
                </p>
              </div>
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
              className="rounded-5 border border-2 border-secondary me-2 bg-opacity-10 bg-secondary text-secondary "
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
        <Col className="mb-2">
          <Container>
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
              <Col className="border border-muted rounded-3 p-3 ms-2 ">
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
          </Container>
        </Col>
      </Row>
      <Row className="flex-column gy-4 mt-2 ">
        <Col className="px-0">
          <MyAnalisi />
        </Col>
        <Col className="px-0">
          <MyRisorse />
        </Col>
        <Col className="px-0">
          <MyAttivita />
        </Col>
      </Row>
    </Col>
  );
};

export default ProfileTop;
