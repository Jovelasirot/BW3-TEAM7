import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import dveloper from "../assets/dveloper.png"
import epicodelogo from "../assets/epicodelogo.png"

const studentiLavoratori = Math.floor(Math.random() * 99) + 1;
const candidatiLavoratori = Math.floor(Math.random() * 99) + 1;

function SearchPageSx() {
    return(
    
        <Col className="col-lg-6 col-md-6 d-s-none">
        <Row>
          <Col>
          <section className="p-2 m-2 border border">
                
                <Row>
                    
                    <Col className="col-2">
                    <img
                    className="float-end"
                    src={dveloper}
                    alt="logo"
                    style={{ width: '90%', height: 'auto' }}
                    />
                    </Col>

                  <Col className="col-10">
                  <div className="d-flex-column">
                  <div className="bluetext1 fw-bold">Tipo di Lavoro</div>
                  <div className="sidebarText1">Azienda</div>
                  <div className="sidebarText2">Luogo</div>
                  <div><span>
                  <img
                  src={epicodelogo}
                  alt="logo"
                  style={{ width: '4%', height: 'auto' }}/>
                  </span>
                  <span className="ms-1 sidebarText2">
                  {studentiLavoratori} ex studenti lavorano qui</span>
                  </div>

                  <div className="mt-2"><span className="sidebarText2 fw-bold">1 giorno fa · </span>
                  <span className="sidebarText2 greentext fw-bold">{candidatiLavoratori} candidati</span>
                  </div>
                  </div>
                  <hr/>
                  </Col>
                  </Row>
                
              </section>
    
          </Col>
          </Row>
          </Col>
    
    )
    }
    
    export default SearchPageSx;