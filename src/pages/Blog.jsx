import React from "react";
import { Container, Row } from "reactstrap";
import Helmet from "../components/Helmet";
import CommonSection from "../components/UI/CommonSection";
import BlogEntries from "../components/UI/BlogEntries";

const Blog = () => {
  return (
    <Helmet title="Blog">
      <CommonSection title="Blog" />
      <section>
        <Container>
          <Row>
            <BlogEntries />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Blog;