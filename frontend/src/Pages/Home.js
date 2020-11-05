import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Table, Image, Button, Row } from "react-bootstrap";

function Home() {
  const [wools, setWools] = useState([]);

  useEffect(() => {
    const fetctWools = async () => {
      const { data } = await axios.get("/wools");
      setWools(data);
    };
    fetctWools();
  }, []);

  const deleteHandler = (id) => {
    console.log("Delete", id);
  };

  return (
    <>
      <Row>
        <h1>Lanas</h1>
        <Link to="/wool/create" className="ml-auto">
          <Button variant="outline-primary">Crear Lana</Button>
        </Link>
      </Row>
      <Table striped bordered hover responsive className="text-center">
        <thead>
          <tr>
            <th></th>
            <th>MARCA</th>
            <th>NOMBRE</th>
            <th className="d-flex align-items-center">
              <div className="mr-1">GROSOR</div>
              <div>
                <div>
                  <Button variant="outline-secondary" className="btn-sm">
                    <i className="fas fa-sort-up"></i>
                  </Button>
                </div>
                <div>
                  <Button variant="outline-secondary" className="btn-sm">
                    <i className="fas fa-sort-down"></i>
                  </Button>
                </div>
              </div>
            </th>
            <th>LONGITUD</th>
            <th>PESO</th>
            <th>MATERIAL</th>
            <th>COLOR</th>
            <th>CANTIDAD</th>
            <th>TOTAL</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {wools.map((wool) => (
            <tr key={wool._id}>
              <td>
                <Image src={wool.image} width={171} height={180} />
              </td>
              <td className="align-middle">{wool.brand}</td>
              <td className="align-middle">{wool.name}</td>
              <td className="align-middle">{wool.thickness}mm</td>
              <td className="align-middle">{wool.length}m</td>
              <td className="align-middle">{wool.weight}gr</td>
              <td className="align-middle">{wool.material}gr</td>
              <td className="align-middle">
                <div className="d-flex flex-column justify-content-center align-items-center">
                  {wool.color}
                  <div
                    style={{
                      backgroundColor: `${wool.color}`,
                      width: "40px",
                      height: "40px",
                    }}
                  ></div>
                </div>
              </td>
              <td className="align-middle">{wool.amount}</td>
              <td className="align-middle">{wool.length * wool.amount}m</td>

              <td className="align-middle">
                <Link to={`/wool/${wool._id}`}>
                  <Button variant="light" className="btn-sm">
                    <i className="fas fa-eye"></i>
                  </Button>
                </Link>
                <Link to={`/wool/edit/${wool._id}`}>
                  <Button variant="light" className="btn-sm">
                    <i className="fas fa-edit"></i>
                  </Button>
                </Link>
                <Button
                  variant="danger"
                  className="btn-sm"
                  onClick={() => deleteHandler(wool._id)}
                >
                  <i className="fas fa-trash"></i>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default Home;
