import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6} className="text-center">
          <h1 className="mb-4">Welcome to our Bookstore!</h1>
          <p className="mb-4">
            We have a wide range of books and magazines available for you to explore. Browse our selection and find your next favorite read.
          </p>
          <Link to="/Books">
            <Button variant="primary" className="mr-3">
              Browse Books
            </Button>
          </Link>
          <Link to="/Magazines">
            <Button variant="secondary">
              Browse Magazines
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;

