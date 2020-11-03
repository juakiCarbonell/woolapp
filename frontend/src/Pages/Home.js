import React from "react";
import { Link } from "react-router-dom";
import { Table, Image, Button } from "react-bootstrap";

import wools from "../products";

function Home() {

  const deleteHandler = (id) => {
    console.log('Delete', id)
  }


  return (
    <>
      <h1>Lanas</h1>
      <Table striped bordered hover responsive className="text-center">
        <thead>
          <tr>
            <th></th>
            <th>COLOR</th>
            <th>NOMBRE</th>
            <th>TIPO</th>
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
            <th>RESTANTE</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {wools.map((wool) => (
            <tr key={wool._id}>
              <td>
                <Image src={wool.image} width={171} height={180} />
              </td>
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
              <td className="align-middle">{wool.name}</td>
              <td className="align-middle">{wool.type}</td>
              <td className="align-middle">{wool.thickness}mm</td>
              <td className="align-middle">{wool.length}mm</td>
              <td className="align-middle">{wool.lengthLeft}mm</td>
              <td className="align-middle">
                <Link to={`/wool/${wool._id}`}>
                  <Button variant="light" className="btn-sm">
                    <i className="fas fa-eye"></i>
                  </Button>
                </Link>
                <Link to={`/wool/${wool._id}/edit`}>
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
