import React, { useEffect, useState } from "react";
import { ErrorMessage, Field, Formik } from "formik";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { Form, Button, Row, Col, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import Loader from "../components/Loader";
import Message from "../components/Message";

import { createWool } from "../store/actions/wool";

const WoolCreate = () => {
  let history = useHistory();
  const [image, setImage] = useState("");
  const [uploading, setUploading] = useState(false);
  // const [brand, setBrand] = useState("");
  // const [name, setName] = useState("");
  // const [thickness, setThickness] = useState("");
  // const [length, setLength] = useState(0);
  // const [weight, setWeight] = useState(0);
  // const [material, setMaterial] = useState("");
  // const [color, setColor] = useState("");
  // const [amount, setAmount] = useState(0);

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

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   dispatch(
  //     createWool({
  //       name,
  //       brand,
  //       image,
  //       thickness,
  //       length,
  //       weight,
  //       material,
  //       color,
  //       amount,
  //     })
  //   );
  // };

  return (
    <>
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
            errors.name = "Required";
          }
          if (!values.brand) {
            errors.brand = "Required";
          }
          if (!values.image) {
            errors.image = "Required";
          }
          if (!values.thickness) {
            errors.thickness = "Required";
          }
          if (!values.length) {
            errors.length = "Required";
          }
          if (!values.weight) {
            errors.weight = "Required";
          }
          if (!values.material) {
            errors.material = "Required";
          }
          if (!values.color) {
            errors.color = "Required";
          }
          if (!values.amount) {
            errors.amount = "Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log("sub", values);
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isSubmitting,
          handleSubmit,
          setFieldValue,
          /* and other goodies */
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
                {errors.name && touched.name && errors.name}
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
                {errors.brand && touched.brand && errors.brand}
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
                {errors.image && touched.image && errors.image}
                {uploading && <Loader />}
                {values.image && <Image src={values.image} />}
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
                {errors.length && touched.length && errors.length}
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
                {errors.material && touched.material && errors.material}
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
                {errors.weight && touched.weight && errors.weight}
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
                {errors.amount && touched.amount && errors.amount}
              </Form.Group>
              <Button type="submit" variant="primary" disabled={isSubmitting}>
                Crear Lana
              </Button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default WoolCreate;
