import React from "react";
import { Link, useParams } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";

import products from "../products";

function Wool() {
  let { id } = useParams();
  const product = products.find((p) => p._id === id);
  console.log(product);

  return (
    <>
      <Link to="/">
        <Button variant="outline-primary">Volver</Button>
      </Link>
      <Row className="row align-items-center">
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={6}>
          <h2 className="text-center">{product.name}</h2>

          <ListGroup variant="flush">
            <ListGroup.Item
              style={{ color: "black", backgroundColor: "white" }}
            >
              <strong>Tipo:</strong> {product.type}
            </ListGroup.Item>
            <ListGroup.Item
              style={{ color: "black", backgroundColor: "white" }}
            >
              <strong>Color:</strong> {product.color}
            </ListGroup.Item>
          </ListGroup>

          <ListGroup>
            <ListGroup.Item
              style={{ color: "black", backgroundColor: "white" }}
            >
              <strong>Longitud:</strong> {product.length}mm
            </ListGroup.Item>
            <ListGroup.Item
              style={{ color: "black", backgroundColor: "white" }}
            >
              <strong>Longitud Restante:</strong>{" "}
              {product.lengthLeft > 0
                ? `${product.lengthLeft}mm`
                : "No disponible"}
            </ListGroup.Item>
            <ListGroup.Item
              style={{ color: "black", backgroundColor: "white" }}
            >
              <strong>Detalles:</strong> {product.description}
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
}

export default Wool;
