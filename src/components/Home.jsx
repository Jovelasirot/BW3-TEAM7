import { Container, Row } from "react-bootstrap";
import SidebarHomeDx from "./SidebarHomeDx";
import SidebarHomeSx from "./SidebarHomeSx";

const Home = () => {
  return (
    <Container fluid>
      <Row>
        <SidebarHomeSx/>
        {/* sidebar sx col 2
        sez centrale col 7 */}
        <SidebarHomeDx />
        {/* col 3 */}
      </Row>
    </Container>
  );
};

export default Home;
