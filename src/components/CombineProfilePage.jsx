import Sidebar from "./sidebar";
import ProfileTop from "./ProfileTop";
import { Container, Row } from "react-bootstrap";

const CombineProfilePage = () => {
  return (
    <>
      <Container>
        <Row>
          <ProfileTop />
          <Sidebar />
        </Row>
      </Container>
    </>
  );
};
export default CombineProfilePage;
