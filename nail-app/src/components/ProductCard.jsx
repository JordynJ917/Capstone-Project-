import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { useCart } from "../context/CartContext";
import Badge from "react-bootstrap/Badge";
import useFavorites from "../hooks/useFavorites";
import '../styles/card.css'
import products from "../data";




const ProductCard = ({ product, cardKey }) => {
  const RatingStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
        if (rating >= i +1){
            stars.push(<i key={i} className='bi-star-fill'></i>);
        } else if (rating >= i + 0.5) {
            stars.push(<i key={i} className="bi-star-half"></i>);
        } else {
            stars.push(<i key={i} className="bi-star"></i>)
        }
    }
    return stars;
}

  
    const { addToCart } = useCart();
    const { favorites, toggleFavorite } = useFavorites();

    const isFavorite = favorites.some((item) => item.id === product.id);

  return (
    <Card className="card text-white h-100" key={cardKey}>
                {/* Favorite Button */}
                <Button className="position-absolute favorite" style={{ top: "0.5rem", right: "0.5rem" }} onClick={() => toggleFavorite(product)}>
                <i className={isFavorite ? "bi bi-heart-fill" : "bi bi-heart"}></i>
                </Button>

                {/* Sale Badge */}
                {product.salePrice && (
                  <Badge className="position-absolute sale" style={{ top: "0.5rem", left: "0.5rem" }}>
                    Sale
                  </Badge>
                )}

                {/* Product Image */}
                <Card.Img className="card-img-top" src={product.image} alt={product.title} />

                {/* Product Details */}
                <Card.Body className="card-body text-center">
                  <Card.Title className="fw-bolder">{product.title}</Card.Title>
                  <div className="d-flex justify-content-center small mb-2">{RatingStars(product.rating)}</div>
                  <Card.Text>
                    {product.salePrice ? (
                      <>
                        <span className="text-muted text-decoration-line-through">${product.salePrice.toFixed(2)}</span>{" "}
                        ${product.price.toFixed(2)}
                      </>
                    ) : (
                      <>${product.price.toFixed(2)}</>
                    )}
                  </Card.Text>
                </Card.Body>

                {/* Add to Cart Button */}
                <Card.Footer className="card-footer pt-0 border-top-0">
                  <div className="text-center">
                    <Button variant="outline-light" className="bg-transparent mt-auto" onClick={() => addToCart(product)}>
                      Add to Cart
                    </Button>
                  </div>
                </Card.Footer>
              </Card>
  );
};

export default ProductCard;
