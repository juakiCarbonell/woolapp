import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button } from "react-bootstrap";

function Wool() {
  let { id } = useParams();
  const [wool, setWool] = useState({});

  useEffect(() => {
    const fetctWool = async () => {
      const { data } = await axios.get(`/wools/${id}`);
      setWool(data);
    };
    fetctWool();
  }, [id]);

  return (
    <>
      <Link to="/">
        <Button variant="outline-primary">Volver</Button>
      </Link>
      <h2 className="text-center">{wool.name}</h2>
      <Row className="row align-items-center">
        <Col md={6}>
          <Image src={wool.image} alt={wool.name} fluid />
        </Col>
        <Col md={6}>
          <ListGroup>
            <ListGroup.Item
              style={{ color: "black", backgroundColor: "white" }}
            >
              <strong>Marca:</strong> {wool.brand}
            </ListGroup.Item>
            <ListGroup.Item
              style={{ color: "black", backgroundColor: "white" }}
            >
              <strong>Color:</strong> {wool.color}
            </ListGroup.Item>
            <ListGroup.Item
              style={{ color: "black", backgroundColor: "white" }}
            >
              <strong>Material:</strong> {wool.material}
            </ListGroup.Item>
          </ListGroup>
          <ListGroup>
            <ListGroup.Item
              style={{ color: "black", backgroundColor: "white" }}
            >
              <strong>Grossor:</strong> {wool.thickness}mm
            </ListGroup.Item>
            <ListGroup.Item
              style={{ color: "black", backgroundColor: "white" }}
            >
              <strong>Longitud:</strong> {wool.length}mm
            </ListGroup.Item>
            <ListGroup.Item
              style={{ color: "black", backgroundColor: "white" }}
            >
              <strong>Peso:</strong> {wool.weight}gr
            </ListGroup.Item>
            <ListGroup.Item
              style={{ color: "black", backgroundColor: "white" }}
            >
              <strong>Cantidad:</strong> {wool.amount}
            </ListGroup.Item>
            <ListGroup.Item
              style={{ color: "black", backgroundColor: "white" }}
            >
              <strong>Longitud Restante:</strong> {wool.amount * wool.length}m
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
}

export default Wool;
