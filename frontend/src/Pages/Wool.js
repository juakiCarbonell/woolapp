import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useHistory } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button } from "react-bootstrap";

import { fetchWool, deleteWool, deleteWoolReset } from "../store/actions/wool";
import Message from "../components/Message";
import Loader from "../components/Loader";

function Wool() {
  let { id } = useParams();
  let history = useHistory();
  const dispatch = useDispatch();

  const woolDetails = useSelector((state) => state.woolDetails);
  const { loading, error, wool } = woolDetails;

  const woolDelete = useSelector((state) => state.woolDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = woolDelete;

  useEffect(() => {
    if (successDelete) {
      dispatch(deleteWoolReset());
      history.push(`/`);
    } else {
      dispatch(fetchWool(id));
    }
  }, [id, dispatch, history, successDelete]);

  const deleteHandler = (id) => {
    if (window.confirm("Estas segura Lorea?")) {
      dispatch(deleteWool(id));
    }
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          {loadingDelete && <Loader />}
          {errorDelete && <Message variant="danger">{errorDelete}</Message>}
          <Col>
            <Row>
              <Col className="text-right">
                <Link to="/">
                  <Button variant="outline-primary">Volver</Button>
                </Link>
              </Col>
            </Row>
            <Row className="row align-items-center">
              <Col md={6}>
                <h2>{wool.name}</h2>
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
                    <strong>Restante:</strong> {wool.left}gr
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
            <Row className="row align-items-center">
              <Col md={3}>
                <Link to={`/wool/edit/${wool._id}`}>
                  <Button variant="outline-primary">
                    <i className="fas fa-edit"></i>
                    Editar
                  </Button>
                </Link>
              </Col>
              <Col md={3}>
                <Button
                  variant="danger"
                  onClick={() => deleteHandler(wool._id)}
                >
                  <i className="fas fa-trash"></i>
                  Eliminar
                </Button>
              </Col>
            </Row>
          </Col>
        </>
      )}
    </>
  );
}

export default Wool;
