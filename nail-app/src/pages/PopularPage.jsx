import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import products from "../data"; // Import product list
import { useSort } from "../context/SortContext";

const PopularPage = () => {
  // Filter products with ratings 4.5 and above
  const popularProducts = products.filter((product) => product.rating >= 4.5);

  const { sortOption, setSortOption, sortProducts } = useSort();

  const sortedPopularProducts = sortProducts(popularProducts);

  return (
    <Container className="py-5">
      <h2 className="my-4" style={{ fontFamily: "'Playwrite AU SA', serif", color: "#cf99ff" }}>Popular Products</h2>
      <Form.Select value={sortOption} onChange={(e) => setSortOption(e.target.value)} className="mb-4 w-auto">
        <option value="default">Sort by (Default) </option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="rating">Rating</option>
        <option value="name-asc">Name: A-Z</option>
        <option value="name-desc">Name: Z-A</option>
      </Form.Select>
      {sortedPopularProducts.length === 0 ? (
        <p>No popular products found.</p>
      ) : (
        <Row className="gx-4 gx-lg-5 justify-content-center">
          {sortedPopularProducts.map((product) => (
            <Col key={product.id} xs={12} sm={6} md={4} lg={3} className="mb-4" >
              <ProductCard product={product} cardKey={product.id} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default PopularPage;
