import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import Loader from "../components/Loader";
import Message from "../components/Message";

import { createWool } from "../store/actions/wool";

const WoolCreate = () => {
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
  const [uploading, setUploading] = useState(false);

  const dispatch = useDispatch();

  const woolCreate = useSelector((state) => state.woolCreate);
  const { loading, error, success } = woolCreate;

  useEffect(() => {
    if (success) {
      history.push("/");
    }
  }, [dispatch, success, history]);

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
      createWool({
        name,
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

  const formik = useFormik({
    initialValues: {
      name: 0,
      brand: 0,
      image: 0,
      thickness: 0,
      length: 0,
      weight: 0,
      material: 0,
      color: 0,
      amount: 0,
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const MyField = (props) => {
    

  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <FormContainer>
            <Row className="align-items-center">
              <Col>
                <h1>Crear Lana</h1>
              </Col>
              <Col className="text-right">
                <Link to="/" className="ml-auto">
                  <Button variant="outline-primary">Volver</Button>
                </Link>
              </Col>
            </Row>
            <Form onSubmit={formik.handleSubmit}>
              <Form.Group controlId="brand">
                <Form.Label htmlFor="brand">Marca</Form.Label>
                <Form.Control
                  placeholder="Marca"
                  type="text"
                  id="brand"
                  name="brand"
                  onChange={formik.handleChange}
                  value={formik.values.brand}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="name">
                <Form.Label htmlFor="name">Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nombre"
                  id="name"
                  name="name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
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
                <Form.Label htmlFor="thickness">Grossor</Form.Label>
                <Form.Control
                  title="Grossor"
                  as="select"
                  placeholder="Grossor"
                  id="thickness"
                  name="thickness"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                >
                  <option value="">Seleciona Grosor</option>
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
                <Form.Label htmlFor="length">Longitud (M)</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Longitud"
                  id="length"
                  name="length"
                  onChange={formik.handleChange}
                  value={formik.values.length}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="weight">
                <Form.Label htmlFor="weight">Peso (Gr)</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Peso"
                  id="weight"
                  name="weight"
                  min="0"
                  step="1"
                  onChange={formik.handleChange}
                  value={formik.values.weight}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="amount">
                <Form.Label htmlFor="amount">Cantidad</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Cantidad"
                  id="amount"
                  min="0"
                  step="1"
                  name="amount"
                  onChange={formik.handleChange}
                  value={formik.values.amount}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="material">
                <Form.Label htmlFor="material">Material</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Material"
                  id="material"
                  name="material"
                  onChange={formik.handleChange}
                  value={formik.values.material}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="color">
                <Form.Label htmlFor="color">Color</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Color"
                  id="color"
                  name="color"
                  onChange={formik.handleChange}
                  value={formik.values.color}
                ></Form.Control>
              </Form.Group>

              <Button type="submit" variant="primary">
                Crear
              </Button>
            </Form>
          </FormContainer>
        </>
      )}
    </>
  );
};

export default WoolCreate;
