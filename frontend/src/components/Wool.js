import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Wool = ({wool}) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/wool/${wool._id}`}>
        <Card.Img src={wool.image} varian="top" />
      </Link>
      <Card.Body>
        <Link to={`/wool/${wool._id}`}>
          <Card.Title as="div">
            <strong>{wool.name}</strong>
          </Card.Title>
        </Link>
        {/* <Card.Text as="div">
          <Rating
            value={wool.rating}
            text={`${wool.numReviews} reviews`}
          />
        </Card.Text>
        <Card.Text as="h3">{wool.price}&euro;</Card.Text> */}
      </Card.Body>
    </Card>
  );
};

export default Wool;
