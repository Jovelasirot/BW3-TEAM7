import Sidebar from "./sidebar";
import ProfileTop from "./ProfileTop";
import { Container, Row } from "react-bootstrap";

const CombineProfilePage = () => {
  return (
    <>
      <Container className="bg bg-light">
        <Row>
          <ProfileTop />
          <Sidebar />
        </Row>
      </Container>
    </>
  );
};
export default CombineProfilePage;
