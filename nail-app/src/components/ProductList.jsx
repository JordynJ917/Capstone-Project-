import React from "react";
// import { useState } from "react";
import  Card  from "react-bootstrap/Card";
import  Button  from "react-bootstrap/Button";
import Container  from "react-bootstrap/Container";
import  Row  from "react-bootstrap/Row";
import  Col  from "react-bootstrap/col";
import { Badge } from "react-bootstrap";
import { useContext } from "react";
import products from "../data";
import ProductCard from "./ProductCard";



const ProductList = () => {
  return (
    // <section id="product-list" className="py-5 text-white">
      <Container className="py-5">
        <Row className="gx-4 gx-lg-5 justify-content-center" >
          {products.map((product) => (
            <Col key = {product.id} xs={12} md={4} lg={3} className="mb-5">
              <ProductCard product={product} cardKey={product.id}/>
            </Col>
          ))}
        </Row>
      </Container>
    
  );
} 
    
    export default ProductList;
