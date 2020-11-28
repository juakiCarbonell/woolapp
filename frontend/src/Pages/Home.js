import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Row } from "react-bootstrap";
import Switch from "react-switch";
import { Link, useParams } from "react-router-dom";

import { fetchWools } from "../store/actions/wool";
import Message from "../components/Message";
import Loader from "../components/Loader";
import WoolTable from "../components/WoolTable";
import WoolCard from "../components/WoolCard";
import Filter from "../components/Filter";
import SearchBox from "../components/SearchBox";

function Home() {
  const { field = "", order = "", keyword } = useParams();

  const [modeTable, setModeTable] = useState(true);

  const dispatch = useDispatch();

  const woolList = useSelector((state) => state.woolList);
  const { loading, error, wools } = woolList;
  const woolFilter = useSelector((state) => state.woolFilter);

  useEffect(() => {
    dispatch(fetchWools(field, order, { ...woolFilter }, keyword));
  }, [dispatch, field, order, woolFilter]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <div className="my-4 d-flex">
            <h1>Lanas</h1>
            <div className="ml-auto d-flex align-items-center">
              <div className="d-flex align-items-center mx-4">
                <span className="mr-2">Cambiar Vista</span>
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

              <Link to="/wool/create">
                <Button variant="outline-primary">Crear Lana</Button>
              </Link>
            </div>
          </div>
          <div className="my-4">
            <Filter />
            <SearchBox />
          </div>
          {modeTable ? <WoolTable wools={wools} /> : <WoolCard wools={wools} />}
        </>
      )}
    </>
  );
}

export default Home;
