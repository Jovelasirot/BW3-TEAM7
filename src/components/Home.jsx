import { Container, Row } from "react-bootstrap";
import SidebarHomeDx from "./SidebarHomeDx";

const Home = () => {
  return (
    <Container fluid>
      <Row>
        {/* sidebar sx col 2
        sez centrale col 7 */}
        <SidebarHomeDx /> {/* col 3 */}
      </Row>
    </Container>
  );
};

export default Home;
