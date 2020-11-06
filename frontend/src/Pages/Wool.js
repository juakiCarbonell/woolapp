import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button } from "react-bootstrap";

import { fetchWool } from "../store/actions/wool";
import Message from "../components/Message";
import Loader from "../components/Loader";

function Wool() {
  let { id } = useParams();
  const dispatch = useDispatch();

  const woolDetails = useSelector((state) => state.woolDetails);
  const { loading, error, wool } = woolDetails;

  useEffect(() => {
    dispatch(fetchWool(id))
  }, [id, dispatch]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Col>
          <Row>
            <Col className="text-right">
              <Link to="/">
                <Button variant="outline-primary">Volver</Button>
              </Link>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col>
              <h2 className="text-center">{wool.name}</h2>
            </Col>
          </Row>
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
                  <strong>Longitud Restante:</strong>{" "}
                  {wool.amount * wool.length}m
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Col>
      )}
    </>
  );
}

export default Wool;
