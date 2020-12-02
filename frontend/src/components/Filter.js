import React from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { setFilterWools, resetFilterWools } from "../store/actions/filter";

const Filter = () => {
  let history = useHistory()
  const dispatch = useDispatch();

  const { thickness, left, keyword } = useSelector((state) => state.woolFilter);


  const resetFilterHanlder = () => {
    dispatch(resetFilterWools())
    history.push(`/`);
  }

  return (
    <Formik
      initialValues={{ thickness, left, keyword }}
      onSubmit={(values, { setSubmitting }) => {
        // Object.keys(values).forEach(
        //   (key) => values[key] === "" && delete values[key]
        // );
        dispatch(setFilterWools(values));
        history.push(`/`);
  
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
            <Row className="align-items-center border">
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
                <Form.Group>
                  <Form.Label>Buscar</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Buscar"
                    name="keyword"
                    id="keyword"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.keyword}
                  ></Form.Control>
                </Form.Group>
              </Col>

              <Col>
                <Button type="submit" variant="primary">
                  Filtrar
                </Button>
              </Col>
              <Col>
                <Button variant="outline-primary" onClick={resetFilterHanlder}>
                  Reset
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
