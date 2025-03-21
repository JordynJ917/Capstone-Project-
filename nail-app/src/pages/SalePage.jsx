import React from "react";
import { Container, Row, Form } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import products from "../data";
import Col from "react-bootstrap/Col";
import { useSort } from "../context/SortContext";

const SalePage = () => {
  const saleProducts = products.filter((product) => product.salePrice !== null);

  const { sortOption, setSortOption, sortProducts } = useSort();

  const sortedSaleProducts = sortProducts(saleProducts);

  return (
    <Container className="py-5">
      <h2 className="my-4" style={{ fontFamily: "'Playwrite AU SA', serif", color: "#cf99ff" }}>Sale</h2>
      <Form.Select value={sortOption} onChange={(e) => setSortOption(e.target.value)} className="mb-4 w-auto">
        <option value="default">Sort by (Default) </option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="rating">Rating</option>
        <option value="name-asc">Name: A-Z</option>
        <option value="name-desc">Name: Z-A</option>
      </Form.Select>
      {sortedSaleProducts.length === 0 ? (
        <p>No products on sale.</p>
      ) : (
        <Row className="gx-4 gx-lg-5 justify-content-center">
          {sortedSaleProducts.map((product) => (
            <Col key={product.id} xs={12} sm={6} md={4} lg={3} className="mb-4" >
            <ProductCard cardKey={product.id} product={product} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default SalePage;
