import React, { useContext } from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "./context/ShopContext";

const CartButton = () => {
  const { cart } = useContext(CartContext);

  return (
    <Nav.Link as={Link} to="/cart" className="position-relative">
      <i className="bi bi-cart-fill" style={{ fontSize: "1.5rem" }}></i>
      {cart.length > 0 && (
        <span
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
        >
          {cart.length}
        </span>
      )}
    </Nav.Link>
  );
};

export default CartButton;
