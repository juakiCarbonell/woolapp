import React from "react";
import { Table, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import ButtonSort from "./ButtonSort";

const WoolTable = ({ wools }) => {
  return (
    <Table striped bordered hover responsive className="text-center">
      <thead>
        <tr>
          <th></th>
          <th>
            <div className="d-flex align-items-center">
              <div className="d-flex flex-column">
                <ButtonSort order="asc" field="brand" icon="up" />
                <div>MARCA</div>
                <ButtonSort order="desc" field="brand" icon="down" />
              </div>
            </div>
          </th>
          <th>
            <div className="d-flex align-items-center">
              <div className="d-flex flex-column">
                <ButtonSort order="asc" field="name" icon="up" />
                <div>NOMBRE</div>
                <ButtonSort order="desc" field="name" icon="down" />
              </div>
            </div>
          </th>
          <th>
            <div className="d-flex align-items-center">
              <div className="d-flex flex-column">
                <ButtonSort order="asc" field="thickness" icon="up" />
                <div>GROSOR</div>
                <ButtonSort order="desc" field="thickness" icon="down" />
              </div>
            </div>
          </th>
          <th>
            <div className="d-flex align-items-center">
              <div className="d-flex flex-column">
                <ButtonSort order="asc" field="length" icon="up" />
                <div>LONGITUD</div>
                <ButtonSort order="desc" field="length" icon="down" />
              </div>
            </div>
          </th>
          <th>
            <div className="d-flex align-items-center">
              <div className="d-flex flex-column">
                <ButtonSort order="asc" field="weight" icon="up" />
                <div>PESO</div>
                <ButtonSort order="desc" field="weight" icon="down" />
              </div>
            </div>
          </th>
          <th>
            <div className="d-flex align-items-center">
              <div className="d-flex flex-column">
                <ButtonSort order="asc" field="material" icon="up" />
                <div>MATERIAL</div>
                <ButtonSort order="desc" field="material" icon="down" />
              </div>
            </div>
          </th>
          <th>
            <div className="d-flex align-items-center">
              <div className="d-flex flex-column">
                <ButtonSort order="asc" field="color" icon="up" />
                <div>COLOR</div>
                <ButtonSort order="desc" field="color" icon="down" />
              </div>
            </div>
          </th>
          <th>
            <div className="d-flex align-items-center">
              <div className="d-flex flex-column">
                <ButtonSort order="asc" field="amount" icon="up" />
                <div>CANTIDAD</div>
                <ButtonSort order="desc" field="amount" icon="down" />
              </div>
            </div>
          </th>
          <th>
            <div className="d-flex align-items-center">
              <div className="d-flex flex-column">
                <ButtonSort order="asc" field="left" icon="up" />
                <div>RESTANTE</div>
                <ButtonSort order="desc" field="left" icon="down" />
              </div>
            </div>
          </th>
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
            <td className="align-middle text-capitalize">{wool.thickness}</td>
            <td className="align-middle">{wool.length}m</td>
            <td className="align-middle">{wool.weight}gr</td>
            <td className="align-middle">{wool.material}</td>
            <td className="align-middle">{wool.color}</td>
            <td className="align-middle">{wool.amount}</td>
            <td className="align-middle">{wool.left}gr</td>

            <td className="align-middle">
              <Link to={`/wool/${wool._id}`}>
                <Button variant="light">
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
