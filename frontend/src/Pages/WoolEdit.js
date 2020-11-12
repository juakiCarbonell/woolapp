import React, { useEffect, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import Message from "../components/Message";
import Loader from "../components/Loader";
import FormmikContainer from "../components/FormikContainer";

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
      console.log("1");
      dispatch(updateWoolReset());
      dispatch(fetchWoolReset());
      history.push(`/wool/${id}`);
    } else {
      if (!wool.name || wool._id !== id) {
        console.log("2");
        dispatch(fetchWool(id));
      } else {
        console.log("3");
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

  const submitHandler = (values) => {
    dispatch(updateWool({ ...values }));
  };

  let initialValues = {
    name,
    brand,
    image,
    thickness,
    length,
    weight,
    material,
    color,
    amount,
  };
  // let initalValues = wool
  //   ? {
  //       name: wool.name,
  //       brand: wool.brand,
  //       image: wool.image,
  //       thickness: wool.thickness,
  //       length: wool.length,
  //       weight: wool.weight,
  //       material: wool.material,
  //       color: wool.color,
  //       amount: wool.amount,
  //     }
  //   : {
  //       name: "",
  //       brand: "",
  //       image: "",
  //       thickness: "",
  //       length: "",
  //       weight: "",
  //       material: "",
  //       color: "",
  //       amount: "",
  //     }; ;

  console.log("loading", loading);
  console.log("error", error);
  console.log("wool", wool);

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
            <FormmikContainer
              submitHandler={submitHandler}
              initialValues={initialValues}
              submitText="Editar Lana"
            />
          </FormContainer>
        </>
      )}
    </>
  );
};

export default WoolForm;
