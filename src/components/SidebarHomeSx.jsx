
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import profileBgTop from "../assets/profileBgTop.png"
import Filippo from "../assets/Filippo.jpg"


function SidebarSx() {

    const numeroRandom = Math.floor(Math.random() * 99) + 1
    const numeroRandom1 = Math.floor(Math.random() * 99) + 1

    return (
        <Col className="col-lg-3 col-md-3 d-s-none">
        <Row>
          <Col>
            <section className="p-2 m-2 border border">
              <div>
                <img
                src={profileBgTop}
                alt=""
                className="img-fluid w-100 z-0 h-100 position-relative"/>
                </div>

              <div className="z-1 text-center top-25 start-25 d-flex position-absolute text-center">
              <img
              src={Filippo}
              alt=""
              className="profilePic flex-grow-1 rounded-circle border border-solid border-light"
              style={{width: "60px", height: "60px"}}
            />
               </div>

                <div className="d-flex-column text-center">
                  <p className="sidebarText fw-bold mt-4 pb-1">Nome e Cognome</p>
                  <p className="sidebarText1 ">Titolo</p>

                </div>
        
              
              <hr />
                <div className="">
                  <span className="sidebarText2 fw-bold">Visitatori del profilo</span><span className="float-end text-secondary sidebarText1 fw-bold">{numeroRandom}</span>
                </div>
                <div className="">
                  <span className="sidebarText2 fw-bold">Impressioni del post</span><span className="float-end text-secondary sidebarText1 fw-bold">{numeroRandom1}</span>
                </div>
                <hr />
                <div>
                <span className="sidebarText2">Accedi a strumenti e informazioni in esclusiva</span>
                <p><span className=""><i className="bi bi-slash-square-fill sidebarIcons"></i></span><span className="ms-1 sidebarText1 fw-bold">Prova Premium per 0 EUR</span></p>
                </div>
                <hr />
                <div>
                    <span><i className="bi bi-bookmark-fill sidebarIcons1"></i></span><span className="sidebarText2 ms-2 fw-bold">I miei elementi</span>
                </div>
                </section>
                <section className="p-2 m-2 border border">
                <div className="d-flex-column">
                  <p className="sidebarText2">Recenti</p>
                  <p><span className="hashtag fw-bold">#</span><span className="sidebarText2 ms-2 fw-bold">developing</span></p>
                  <p><span className="hashtag fw-bold">#</span><span className="sidebarText2 ms-2 fw-bold">epicode</span></p>
                  <hr />
                  <p className="ms-1 sidebarText1 text-secondary fw-bold">Gruppi</p>
                  <p className="ms-1 sidebarText1 text-secondary fw-bold">Eventi</p>
                  <p className="ms-1 sidebarText1 text-secondary fw-bold">Hashtag seguiti</p>
                  <p><span className="hashtag fw-bold">#</span><span className="sidebarText2 ms-2 fw-bold">developing</span></p>
                  <p><span className="hashtag fw-bold">#</span><span className="sidebarText2 ms-2 fw-bold">epicode</span></p>
                  <p><span className="sidebarText2 ms-2 fw-bold">Vedi tutti</span></p>

                  </div>

                <hr/>
                <div className="text-center sidebarText3">Scopri di più</div>
                  
                

                </section>
                </Col>
                </Row>
                </Col>

    )
}

export default SidebarSx;
