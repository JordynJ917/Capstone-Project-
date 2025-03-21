import React from "react";
import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import productData from "../data"
import { Container } from "react-bootstrap";
import { Row, Form } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import { useSort } from "../context/SortContext";

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const { sortOption, setSortOption, sortProducts } = useSort();

  useEffect(() => {  
    setProducts(productData);
  }, []);

  const sortedProducts = sortProducts(products);
    return (
        <Container className="py-5">
          <h2 className="my-4 " style={{ fontFamily: "'Playwrite AU SA', serif", color: "#cf99ff"}}>All Products</h2>
          <Form.Select value={sortOption} onChange={(e) => setSortOption(e.target.value)} className="mb-4 w-auto">
        <option value="default">Sort by (Default) </option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="rating">Rating</option>
        <option value="name-asc">Name: A-Z</option>
        <option value="name-desc">Name: Z-A</option>
      </Form.Select>
          <Row className="gx-4 gx-lg-5 justify-content-center">
            {sortedProducts.map((product) => (
              <Col key={product.id} xs={12} sm={6} md={4} lg={3}className="mb-4" >
              <ProductCard product={product} cardKey={product.id} />
              </Col>
            ))}
          </Row>
        </Container>
    );
}