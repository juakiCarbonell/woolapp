import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { Form, Button, Row } from "react-bootstrap";
import FormContainer from "../components/FormContainer";

const WoolForm = ({ mode }) => {
  const isEditMode = mode === "edit" ? true : false;
  const [image, setImage] = useState("");
  const [brand, setBrand] = useState("");
  const [name, setName] = useState("");
  const [thickness, setThickness] = useState("");
  const [length, setLength] = useState(0);
  const [weight, setWeight] = useState(0);
  const [material, setMaterial] = useState("");
  const [color, setColor] = useState("");
  const [amount, setAmount] = useState(0);

  const uploadFileHandler = () => {
    console.log("uoploas");
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <FormContainer>
        <Row>
          <h1>{isEditMode ? "Editar Lana" : "Crear Lana"}</h1>
          <Link to="/" className="ml-auto">
            <Button variant="outline-primary">Volver</Button>
          </Link>
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
              <option value="4">Olc</option>
              <option value="5">Worsted</option>
              <option value="6">Aran</option>
              <option value="7">Bullay</option>
              <option value="8">Super Bullay</option>
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
            <Form.Label>color</Form.Label>
            <Form.Control
              type="text"
              placeholder="Color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Button type="submit" variant="primary">
            {isEditMode ? "Editar" : "Crear"}
          </Button>
        </Form>
      </FormContainer>
    </>
  );
};

export default WoolForm;
