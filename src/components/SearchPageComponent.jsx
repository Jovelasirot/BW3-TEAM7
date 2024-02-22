import { Container, Row } from "react-bootstrap";
import SearchPageSx from "./SearchPageSx";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { querySearch } from "../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";

const SearchPage = () => {
  const { query } = useParams();
  const dispatch = useDispatch();
  console.log(query);
  useEffect(() => {
    dispatch(querySearch(query));
  }, [query]);
  return (
    <Container>
      <Row>
        <SearchPageSx />
      </Row>
    </Container>
  );
};

export default SearchPage;
