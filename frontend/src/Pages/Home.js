import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Row } from "react-bootstrap";
import Switch from "react-switch";
import { Link } from "react-router-dom";

import { fetchWools, deleteWool } from "../store/actions/wool";
import Message from "../components/Message";
import Loader from "../components/Loader";
import WoolTable from "../components/WoolTable";
import WoolCard from "../components/WoolCard";

function Home() {
  const [modeTable, setModeTable] = useState(true);
  const dispatch = useDispatch();

  const woolList = useSelector((state) => state.woolList);
  const { loading, error, wools } = woolList;

  const woolDelete = useSelector((state) => state.woolDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = woolDelete;

  useEffect(() => {
    dispatch(fetchWools());
  }, [dispatch, successDelete]);

  return (
    <>
      {loadingDelete && <Loader />}
      {errorDelete && <Message variant="danger">{errorDelete}</Message>}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Row>
            <h1>Lanas</h1>
            <div className="ml-auto d-flex align-items-center">
              <div className="d-flex align-items-center">
                <span>Cambiar Vista</span>
                <Switch
                  onChange={() => setModeTable(!modeTable)}
                  checked={modeTable}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  offHandleColor="#593196"
                  onHandleColor="#593196"
                  offColor="#CCC"
                  onColor="#CCC"
                  handleDiameter={30}
                />
              </div>

              <Link to="/wool/create" className="ml-auto">
                <Button variant="outline-primary">Crear Lana</Button>
              </Link>
            </div>
          </Row>
          {modeTable ? <WoolTable wools={wools} /> : <WoolCard wools={wools} />}
        </>
      )}
    </>
  );
}

export default Home;
