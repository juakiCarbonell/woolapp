import React, { useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import Loader from "../components/Loader";
import Message from "../components/Message";
import FormmikContainer from "../components/FormikContainer";

import { createWool, createWoolReset } from "../store/actions/wool";

const WoolCreate = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const woolCreate = useSelector((state) => state.woolCreate);
  const { loading, error, success } = woolCreate;

  useEffect(() => {
    if (success) {
      dispatch(createWoolReset());
      history.push("/");
    }
  }, [dispatch, success, history]);

  const submitHandler = (values) => {
    dispatch(createWool({ ...values }));
  };

  const initalValues = {
    name: "",
    brand: "",
    image: "",
    thickness: "",
    length: "",
    weight: "",
    material: "",
    color: "",
    amount: "",
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
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
          <FormmikContainer
            submitHandler={submitHandler}
            initialValues={initalValues}
            submitText="Crear Lana"
          />
        </FormContainer>
      )}
    </>
  );
};

export default WoolCreate;
