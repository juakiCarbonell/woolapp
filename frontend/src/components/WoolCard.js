import React from "react";
import { Row, Col } from "react-bootstrap";
import Wool from './Wool'

const WoolCard = ({wools}) => {
  return (
    <Row>
      {wools.map((wool) => (
        <Col key={wool._id} sm={12} md={6} lg={4} xl={3}>
          <Wool wool={wool} />
        </Col>
      ))}
    </Row>
  );
};

export default WoolCard;
