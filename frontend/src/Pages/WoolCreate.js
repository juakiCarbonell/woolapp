import React, { useEffect, useState } from "react";
import { ErrorMessage, Formik } from "formik";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";
import { Form, Button, Image, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import Loader from "../components/Loader";
import Message from "../components/Message";

import { createWool, createWoolReset } from "../store/actions/wool";

const WoolCreate = () => {
  let history = useHistory();
  const [uploading, setUploading] = useState(false);
  const dispatch = useDispatch();
  const woolCreate = useSelector((state) => state.woolCreate);
  const { loading, error, success } = woolCreate;

  useEffect(() => {
    if (success) {
      dispatch(createWoolReset());
      history.push("/");
    }
  }, [dispatch, success, history]);

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
                <Link to={`/`} className="ml-auto">
                  <Button variant="outline-primary">Volver</Button>
                </Link>
              </Col>
            </Row>
            <Formik
              initialValues={{
                name: "",
                brand: "",
                image: "",
                thickness: "",
                length: "",
                weight: "",
                material: "",
                color: "",
                amount: "",
              }}
              validate={(values) => {
                const errors = {};
                if (!values.name) {
                  errors.name = "*Campo Obligatorio";
                }
                if (!values.brand) {
                  errors.brand = "*Campo Obligatorio";
                }
                if (!values.image) {
                  errors.image = "*Campo Obligatorio";
                }
                if (!values.thickness) {
                  errors.thickness = "*Campo Obligatorio";
                }
                if (!values.length) {
                  errors.length = "*Campo Obligatorio";
                }
                if (!values.weight) {
                  errors.weight = "*Campo Obligatorio";
                }
                if (!values.material) {
                  errors.material = "*Campo Obligatorio";
                }
                if (!values.color) {
                  errors.color = "*Campo Obligatorio";
                }
                if (!values.amount) {
                  errors.amount = "*Campo Obligatorio";
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                dispatch(createWool({ ...values }));
                setSubmitting(false);
              }}
            >
              {({
                values,
                handleChange,
                handleBlur,
                isSubmitting,
                handleSubmit,
                setFieldValue,
              }) => {
                return (
                  <Form onSubmit={handleSubmit}>
                    <Form.Group>
                      <Form.Label>Nombre</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Nombre"
                        name="name"
                        id="name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="text-danger"
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Marca</Form.Label>
                      <Form.Control
                        type="text"
                        name="brand"
                        id="brand"
                        placeholder="Marca"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.brand}
                      />
                      <ErrorMessage
                        name="brand"
                        component="div"
                        className="text-danger"
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Image</Form.Label>
                      <Form.File
                        type="file"
                        name="image"
                        placeholder="Imagen"
                        id="image"
                        label="Elige Imagen"
                        custom
                        onBlur={handleBlur}
                        onChange={async (e) => {
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
                            const { data } = await axios.post(
                              "/upload",
                              formData,
                              config
                            );
                            setFieldValue("image", data);
                            setUploading(false);
                          } catch (error) {
                            console.error(error);
                            setUploading(false);
                          }
                        }}
                      />
                      <ErrorMessage
                        name="image"
                        component="div"
                        className="text-danger"
                      />
                      {uploading && <Loader />}
                      {values.image && <Image src={values.image} thumbnail/>}
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>Grossor</Form.Label>
                      <Form.Control
                        title="Grosor"
                        as="select"
                        name="thickness"
                        id="thickness"
                        placeholder="Grossor"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.thickness}
                      >
                        <option value="">Elige Grosor</option>
                        <option value="lace">Lace</option>
                        <option value="light_fingering">Light fingering</option>
                        <option value="fingering">Fingering</option>
                        <option value="sport">Sport</option>
                        <option value="dk">DK</option>
                        <option value="worsted">Worsted</option>
                        <option value="aran">Aran</option>
                        <option value="bulky">Bulky</option>
                        <option value="super_bulki">Super Bulky</option>
                      </Form.Control>
                      <ErrorMessage
                        name="thickness"
                        component="div"
                        className="text-danger"
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Longitud (M)</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Longitug"
                        name="length"
                        id="length"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.length}
                      />
                      <ErrorMessage
                        name="length"
                        component="div"
                        className="text-danger"
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Material</Form.Label>
                      <Form.Control
                        type="text"
                        name="material"
                        id="material"
                        placeholder="Material"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.material}
                      />
                      <ErrorMessage
                        name="material"
                        component="div"
                        className="text-danger"
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Caterial</Form.Label>
                      <Form.Control
                        type="text"
                        name="color"
                        id="color"
                        placeholder="Color"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.color}
                      />
                      <ErrorMessage
                        name="color"
                        component="div"
                        className="text-danger"
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Peso (Gr)</Form.Label>
                      <Form.Control
                        type="number"
                        name="weight"
                        id="weight"
                        placeholder="Cantidad"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.weight}
                      />
                      <ErrorMessage
                        name="weight"
                        component="div"
                        className="text-danger"
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Cantidad</Form.Label>
                      <Form.Control
                        type="number"
                        name="amount"
                        id="amount"
                        placeholder="Cantidad"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.amount}
                      />
                      <ErrorMessage
                        name="amount"
                        component="div"
                        className="text-danger"
                      />
                    </Form.Group>
                    <Button
                      type="submit"
                      variant="primary"
                      disabled={isSubmitting}
                    >
                      Crear Lana
                    </Button>
                  </Form>
                );
              }}
            </Formik>
          </FormContainer>
        </>
      )}
    </>
  );
};

export default WoolCreate;
