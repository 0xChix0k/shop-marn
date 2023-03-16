import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from './Rating';

export default function Product({ product }) {
  let url = '/products/' + product._id;

  return (
    <Card className="my-3 p-3 rounded">
      <Link to={url}>
        <Card.Img src={product.image} variant="top" />
      </Link>
      <Card.Body>
        <Link to={url}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <div className="my-3">
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
          </div>
        </Card.Text>
        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
}
