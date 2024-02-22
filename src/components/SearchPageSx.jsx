import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function SearchPageSx() {
    return(
    
        <Col className="col-lg-2 col-md-2 d-s-none">
        <Row>
          <Col>
          <section className="p-2 m-2 border border">
                <div className="d-flex-column p-3">
                  <p className="jobText fw-bold"><i className="bi bi-bookmark-fill jobsIcons me-2"></i>
    Le mie offerte di lavoro</p>
                  <p className="jobText fw-bold"><i className="bi bi-list-task jobsIcons me-1"></i>
    Preferenze</p>
    <p className="jobText fw-bold"><i className="bi bi-clipboard2-check jobsIcons me-1"></i>
    Valutazione delle competenze</p>
    <p className="jobText fw-bold"><i className="bi bi-youtube jobsIcons me-1"></i>
    Indicazioni per chi cerca lavoro</p>
    <p className="jobText fw-bold"><i className="bi bi-gear-fill jobsIcons me-1"></i>
    Impostazioni candidatura</p>
                 </div>
              </section>
    
          </Col>
          </Row>
          </Col>
    
    )
    }
    
    export default SearchPageSx;