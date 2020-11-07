import React from "react";
import { Table, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const WoolTable = ({wools}) => {
  return (
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
            <td className="align-middle">{wool.length * wool.weight}gr</td>

            <td className="align-middle">
              <Link to={`/wool/${wool._id}`}>
                <Button variant="light" className="btn-sm">
                  <i className="fas fa-eye"></i>
                </Button>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default WoolTable;
