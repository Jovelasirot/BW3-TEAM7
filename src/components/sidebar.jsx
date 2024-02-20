import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import avatarMichela from "../assets/1705333174881.jpg";
import Button from "react-bootstrap/Button";
import avatarRoberta from "../assets/robi.webp";
import avatarPasquale from "../assets/pasquale.jpeg";
import avatarFilippo from "../assets/Filippo.webp";
import avatarJovel from "../assets/jovel.jpeg";
import pubblicità from "../assets/pubblicità.webp";

const Sidebar = () => {
  return (
    <Col className="col-3 d-flex flex-end">
      <Row>
        <Col>
          <section className="p-2 m-2">
            <div>
              <div className="d-flex justify-content-between">
                <h4>Lingua del profilo</h4>
                <i className="bi bi-pencil ms-5"></i>
              </div>
              <p>Italiano</p>
            </div>
            <hr />
            <div>
              <div className="d-flex justify-content-between">
                <h4>Public profile & URL</h4>
                <i className="bi bi-pencil ms-5"></i>
              </div>
              <p>www.linkedin.com/in/michela-vivacqua-56b1242a7</p>
            </div>
          </section>
          <section>
            <img src={pubblicità} alt="adv" id="adv" />
          </section>
          <section className="p-2 m-2">
            <div>
              <h4>Persone che potresti conoscere</h4>
              <p className="mb-5">Dal tuo settore</p>
              <div className="d-flex align-items-center mt-3">
                <img src={avatarMichela} alt="avatar" className="avatar" />
                <h6 className="ms-2">Michela Vivacqua</h6>
              </div>
              <p className="ms-5">
                Front-end web developer graduated by Epicode
              </p>
              <div className="d-flex justify-content-center">
                <Button variant="outline-secondary">
                  <i className="bi bi-person-add"></i> Collegati
                </Button>
              </div>
              <div className="d-flex align-items-center mt-5">
                <img src={avatarRoberta} alt="avatar" className="avatar" />
                <h6 className="ms-2">Roberta Stira</h6>
              </div>
              <p className="ms-5">
                Front-end web developer graduated by Epicode
              </p>
              <div className="d-flex justify-content-center">
                <Button variant="outline-secondary">
                  <i className="bi bi-person-add"></i> Collegati
                </Button>
              </div>
              <div className="d-flex align-items-center mt-5">
                <img src={avatarPasquale} alt="avatar" className="avatar" />
                <h6 className="ms-2">Pasquale Andriano</h6>
              </div>
              <p className="ms-5">
                Front-end web developer graduated by Epicode
              </p>
              <div className="d-flex justify-content-center">
                <Button variant="outline-secondary">
                  <i className="bi bi-person-add"></i> Collegati
                </Button>
              </div>
              <div className="d-flex align-items-center mt-5">
                <img src={avatarFilippo} alt="avatar" className="avatar" />
                <h6 className="ms-2">Filippo Borelli </h6>
              </div>
              <p className="ms-5">
                Front-end web developer graduated by Epicode
              </p>
              <div className="d-flex justify-content-center">
                <Button variant="outline-secondary">
                  <i className="bi bi-person-add"></i> Collegati
                </Button>
              </div>
              <div className="d-flex align-items-center mt-5">
                <img src={avatarJovel} alt="avatar" className="avatar" />
                <h6 className="ms-2">Jovel Asirot</h6>
              </div>
              <p className="ms-5">
                Front-end web developer graduated by Epicode
              </p>
              <div className="d-flex justify-content-center">
                <Button variant="outline-secondary">
                  <i className="bi bi-person-add"></i> Collegati
                </Button>
              </div>
              <hr />
              <h6 className="text-center">Mostra tutto</h6>
            </div>
          </section>
        </Col>
      </Row>
    </Col>
  );
};

export default Sidebar;
