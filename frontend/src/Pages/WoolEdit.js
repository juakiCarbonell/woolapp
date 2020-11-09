import React, { useEffect, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import Message from "../components/Message";
import Loader from "../components/Loader";

import {
  updateWool,
  fetchWool,
  fetchWoolReset,
  updateWoolReset,
} from "../store/actions/wool";

const WoolForm = () => {
  let { id } = useParams();
  let history = useHistory();
  const [image, setImage] = useState("");
  const [brand, setBrand] = useState("");
  const [name, setName] = useState("");
  const [thickness, setThickness] = useState("");
  const [length, setLength] = useState(0);
  const [weight, setWeight] = useState(0);
  const [material, setMaterial] = useState("");
  const [color, setColor] = useState("");
  const [amount, setAmount] = useState(0);
  const [uploading, setUploading] = useState(0);

  const dispatch = useDispatch();

  const woolUpdate = useSelector((state) => state.woolUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: woolSuccess,
  } = woolUpdate;

  const woolDetails = useSelector((state) => state.woolDetails);
  const { loading, error, wool } = woolDetails;

  useEffect(() => {
    if (woolSuccess) {
      dispatch(updateWoolReset());
      dispatch(fetchWoolReset());
      history.push(`/wool/${id}`);
    } else {
      if (!wool.name || wool._id !== id) {
        dispatch(fetchWool(id));
      } else {
        setImage(wool.image);
        setBrand(wool.brand);
        setName(wool.name);
        setThickness(wool.thickness);
        setLength(wool.length);
        setWeight(wool.weight);
        setMaterial(wool.material);
        setColor(wool.color);
        setAmount(wool.amount);
      }
    }
  }, [dispatch, id, wool, woolSuccess, history]);

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    setUploading(true);

    try {
      const config = {
        headers: {
          "Content-type": "multipart/form-data",
        },
      };
      const { data } = await axios.post("/upload", formData, config);
      setImage(data);
      setUploading(false);
    } catch (error) {
      console.error(error);
      setUploading(false);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateWool({
        name,
        _id: id,
        brand,
        image,
        thickness,
        length,
        weight,
        material,
        color,
        amount,
      })
    );
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          {loadingUpdate && <Loader />}
          {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
          <FormContainer>
            <Row className="align-items-center">
              <Col>
                <h1>Editar Lana</h1>
              </Col>
              <Col className="text-right">
                <Link to={`/wool/${id}`} className="ml-auto">
                  <Button variant="outline-primary">Volver</Button>
                </Link>
              </Col>
            </Row>
            <Form onSubmit={submitHandler}>
              <Form.Group controlId="brand">
                <Form.Label>Marca</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Marca"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nombre"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="image">
                <Form.Label>Image</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Imagen url"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                ></Form.Control>
                <Form.File
                  id="image-file"
                  label="Archivo"
                  custom
                  onChange={uploadFileHandler}
                ></Form.File>
                {uploading && <Loader />}
              </Form.Group>
              <Form.Group controlId="thickness">
                <Form.Label>Grossor</Form.Label>
                <Form.Control
                  title="Bla"
                  as="select"
                  placeholder="Grossor"
                  value={thickness}
                  onChange={(e) => setThickness(e.target.value)}
                >
                  <option value="0">Lace</option>
                  <option value="1">Light fingering</option>
                  <option value="2">Fingering</option>
                  <option value="3">Sport</option>
                  <option value="4">DK</option>
                  <option value="5">Worsted</option>
                  <option value="6">Aran</option>
                  <option value="7">Bulky</option>
                  <option value="8">Super Bulky</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="length">
                <Form.Label>Longitud</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter length"
                  value={length}
                  onChange={(e) => setLength(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="weight">
                <Form.Label>Peso</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Peso"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="amount">
                <Form.Label>Cantidad</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Cantidad"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="material">
                <Form.Label>Material</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Material"
                  value={material}
                  onChange={(e) => setMaterial(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="color">
                <Form.Label>Color</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Button type="submit" variant="primary">
                Editar
              </Button>
            </Form>
          </FormContainer>
        </>
      )}
    </>
  );
};

export default WoolForm;
