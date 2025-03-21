import { ListGroup, Button, Container } from "react-bootstrap";
import { useCart } from "../context/CartContext";
import products from "../data";
import Image from "react-bootstrap/Image";
import '../styles/cartpage.css'

const CartPage = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <Container className="h-100 my-5">
      <h2 style={{ fontFamily: "'Playwrite AU SA', serif", color: "#cf99ff"}}>Shopping Cart</h2>
      <ListGroup className="my-5">
        {cart.length === 0 ? (
          <ListGroup.Item variant="outline-light" className="text-white list">Your cart is empty</ListGroup.Item>
        ) : (
          cart.map((product) => (
            <ListGroup.Item key={product.id} variant="outline-white" className="list d-flex align-items-center">
             <Image className="me-3 image" src={product.image} alt={product.title} />
             <div className="flex-grow-1 text-white text-center">
             <h5 className="mb-1">{product.title}</h5>  
             <p className="mb-1">${product.price} x {product.quantity}</p>
             </div>
              <Button variant="danger" size="sm" onClick={() => removeFromCart(item.id)}>
                Remove
              </Button>
            </ListGroup.Item>
          ))
        )}
      </ListGroup>
      <div className="text-center">
      <Button className="checkout" variant="outline-light">
        Go to Checkout
      </Button>
      </div>
    </Container>
  );
};

export default CartPage;
