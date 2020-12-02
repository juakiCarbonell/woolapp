import React, { useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { Button, Row, Col } from "react-bootstrap";
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
    } else if (!wool.name || wool._id !== id) {
      dispatch(fetchWool(id));
    }
  }, [dispatch, id, wool, woolSuccess, history]);

  const submitHandler = (values) => {
    dispatch(updateWool({ ...values, _id: id }));
  };

  let initialValues = wool
    ? {
        name: wool.name,
        brand: wool.brand,
        image: wool.image,
        thickness: wool.thickness,
        length: wool.length,
        weight: wool.weight,
        material: wool.material,
        color: wool.color,
        amount: wool.amount,
      }
    : {
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
