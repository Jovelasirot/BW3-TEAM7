import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import LogoNav from "../assets/LogoNav.png";

function NavbarComponent() {
  return (
    <Container fluid className="bg-white sticky-lg-top ">
      <Container>
        <Row className="justify-content-between align-items-center ">
          <Col>
            <Col className="d-flex flex-row mt-1">
              <span className="me-1 mt-1">
                <img src={LogoNav} width="35" height="35" alt="linkedinLogo" />
              </span>

              <span>
                <Form className="mt-1">
                  <InputGroup>
                    <InputGroup.Text id="basic-addon1" className="bg-primary">
                      <i className="bi bi-search"></i>
                    </InputGroup.Text>
                    <Form.Control
                      placeholder="Cerca"
                      aria-label="Cerca"
                      aria-describedby="basic-addon1"
                      className="bg-primary"
                      width={60}
                    />
                  </InputGroup>
                </Form>
              </span>
            </Col>
          </Col>

          <Col>
            <Col>
              <Row className="align-items-center">
                <Col className="d-flex flex-column text-center g-0">
                  <span href="#">
                    <i className="bi bi-house-door-fill icons py-0"></i>
                  </span>
                  <span className="navbar-text py-0">Home</span>
                </Col>
                <Col className="d-flex flex-column text-center g-0">
                  <span href="#">
                    <i className="bi bi-people-fill icons"></i>
                  </span>
                  <span className="navbar-text py-0">Rete</span>
                </Col>
                <Col className="d-flex flex-column text-center g-0">
                  <span href="#">
                    <i className="bi bi-suitcase-lg icons py-0"></i>
                  </span>
                  <span className="navbar-text py-0">Lavoro</span>
                </Col>
                <Col className="d-flex flex-column text-center g-0">
                  <span href="#">
                    <i className="bi bi-chat-dots icons"></i>
                  </span>
                  <span className="navbar-text py-0">Messaggistica</span>
                </Col>
                <Col className="d-flex flex-column text-center g-0">
                  <span href="#">
                    <i className="bi bi-bell-fill icons"></i>
                  </span>
                  <span className="navbar-text py-0">Notifiche</span>
                </Col>
                <Col className=" d-flex flex-column text-center px-0 border-end ">
                  <span className="me-1 mt-1 ">
                    <i className="bi bi-person-circle fs-5"></i>
                  </span>

                  <Dropdown>
                    <Dropdown.Toggle className="bg-white border border-0 p-0 "></Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Link className="nav-link ms-3" to={"profile/Filippo"}>
                        Filippo Borelli
                      </Link>
                      <Link className="nav-link ms-3" to={"profile/Jovel"}>
                        Jovel Asirot
                      </Link>
                      <Link className="nav-link ms-3" to={"profile/Pasquale"}>
                        Pasquale Andriano
                      </Link>
                      <Link className="nav-link ms-3" to={"profile/Michela"}>
                        Michela Vivacqua
                      </Link>
                      <Link className="nav-link ms-3" to={"profile/Roberta"}>
                        Roberta Stira
                      </Link>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
                <Col className="d-flex flex-column text-center g-0 ms-1 ">
                  <span href="#">
                    <i className="bi bi-grid-3x3-gap-fill icons"></i>
                  </span>
                  <Dropdown>
                    <Dropdown.Toggle
                      className="bg-white border border-0 p-0"
                      style={{ fontSize: "12px" }}
                    >
                      Per le aziende
                    </Dropdown.Toggle>
                  </Dropdown>
                </Col>
                <Col className=" navbar-text2 mt-1  ">
                  <div>Prova Premium per</div>
                  <div>0 EUR</div>
                </Col>
              </Row>
            </Col>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default NavbarComponent;