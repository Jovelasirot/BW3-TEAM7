import { useState } from "react";
import { ListGroup, Button } from "react-bootstrap";

const SidebarHomeDx = () => {
  const items = [
    "Elemento 1",
    "Elemento 2",
    "Elemento 3",
    "Elemento 4",
    "Elemento 5",
    "Elemento 6",
    "Elemento 7",
    "Elemento 8",
    "Elemento 9",
    "Elemento 10",
  ];

  const [espandiLista, setEspandiLista] = useState(false);

  return (
    <div className="col-lg-3 d-lg-none ">
      <h5>LinkedIn Notizie</h5>
      <ListGroup as="ul">
        {items.slice(0, 5).map((item, index) => (
          <ListGroup.Item key={index} as="li">
            {item}
          </ListGroup.Item>
        ))}
      </ListGroup>

      {espandiLista && (
        <ListGroup as="ul">
          {items.slice(5).map((item, index) => (
            <ListGroup.Item key={index} as="li">
              {item}
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}

      {items.length > 5 && (
        <Button onClick={() => setEspandiLista(!espandiLista)} className="mt-3">
          {espandiLista ? "Meno dettagli" : "Visualizza altro"}
        </Button>
      )}
    </div>
  );
};

export default SidebarHomeDx;
