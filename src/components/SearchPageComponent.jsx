import { Container, Row } from "react-bootstrap";
import SearchPageSx from "./SearchPageSx";
import SearchDetails from "./SearchDetails";

const SearchPage = () => {
  return (
    <Container>
      <Row>
        <SearchPageSx />
        <SearchDetails />
      </Row>
    </Container>
  );
};

export default SearchPage;
