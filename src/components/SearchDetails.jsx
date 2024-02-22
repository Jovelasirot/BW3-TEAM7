import { useState, useEffect } from "react";
import { Col } from "react-bootstrap";
// import DOMPurify from "dompurify";

const SearchDetails = function () {
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://strive-benchmark.herokuapp.com/api/jobs?company=Robots"
        );
        const { data } = await response.json();
        // const sanitizedData = DOMPurify.sanitize(data[0].description); // Utilizza DOMPurify per pulire il testo HTML
        setHtmlContent(data);
      } catch (error) {
        console.error("Error fetching HTML:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <Col className="col-lg-6">
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </Col>
    </>
  );
};

export default SearchDetails;
