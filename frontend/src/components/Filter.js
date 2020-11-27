import React from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import { Formik } from "formik";
import { useDispatch } from "react-redux";

import { setFilterWools } from "../store/actions/filter";

const Filter = () => {

  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ thickness: "", left: "" }}
      onSubmit={(values, { setSubmitting }) => {
        Object.keys(values).forEach(
          (key) => values[key] === "" && delete values[key]
          );
        console.log('values', values)
        dispatch(setFilterWools(values));
        // history.push(`/filter/`);
        // console.log('values', values)
        // if emtpy push to /
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
            <Row>
              <Col>
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
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Restante</Form.Label>
                  <Form.Control
                    title="Restante"
                    as="select"
                    name="left"
                    id="left"
                    placeholder="Grossor"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.left}
                  >
                    <option value="">Elige Peso</option>
                    <option value="1">Menor de 50gr</option>
                    <option value="2">Entre 50gr y 100gr </option>
                    <option value="3">Entre 100gr y 150gr </option>
                    <option value="4">Entre 150gr y 200gr </option>
                    <option value="5">Entre 200gr y 300gr </option>
                    <option value="6">Entre 300gr y 500gr </option>
                    <option value="7">Mayor de 500gr </option>
                  </Form.Control>
                </Form.Group>
              </Col>
              
              <Col>
                <Button type="submit" variant="primary">
                  Filtrar
                </Button>
              </Col>
            </Row>
          </Form>
        );
      }}
    </Formik>
  );
};

export default Filter;