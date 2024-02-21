import { useState } from "react";
import { ListGroup, Button } from "react-bootstrap";
import HomeDxFooter from "./HomeDxFooter";

const SidebarHomeDx = () => {
  const items = [
    { title: "• Come se la passano i pendolari", content: "1 giorno fa" },
    { title: "• JS o TS? Pro e contro", content: "oggi" },
    { title: "• Vite, CRA non ha più utenti", content: "3 giorni fa" },
    { title: "• Epicoder richiesti in tutte le aziende", content: "14 ore fa" },
    { title: "• Frontender specialist", content: "2 giorni fa" },
    { title: "• Clonare LinkedIn", content: "2 ore fa" },
    { title: "• Inverno Soleggiato", content: "7 giorni fa" },
    { title: "• Non c'è neve in montagna", content: "19 ore fa" },
    { title: "• Aperitivi al mare a Febbraio", content: "4 giorni fa" },
    { title: "• TEAM 7 ♥", content: "oggi" },
  ];

  const [espandiLista, setEspandiLista] = useState(false);

  return (
    <>
      <section>
        <div className="col-lg-3 d-none d-md-block ">
          <div className="d-flex justify-content-between">
            <h5 className="m-3">LinkedIn Notizie</h5>
            <i className="bi bi-info-square-fill m-3"></i>
          </div>
          <ListGroup as="ul">
            {items.slice(0, 5).map((item, index) => (
              <ListGroup.Item key={index} as="li">
                <h6>{item.title}</h6>
                <p>{item.content}</p>
              </ListGroup.Item>
            ))}
          </ListGroup>

          {espandiLista && (
            <ListGroup as="ul">
              {items.slice(5).map((item, index) => (
                <ListGroup.Item key={index} as="li">
                  <h6>{item.title}</h6>
                  <p>{item.content}</p>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}

          {items.length > 5 && (
            <Button
              onClick={() => setEspandiLista(!espandiLista)}
              className="mt-3"
            >
              {espandiLista ? "Meno dettagli" : "Vedi altro"}
            </Button>
          )}
        </div>
      </section>
      <HomeDxFooter />
    </>
  );
};

export default SidebarHomeDx;
