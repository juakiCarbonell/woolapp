import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const ButtonSort = ({order, field, icon}) => {
  let history = useHistory();
  
  const handleSortClick = () => {
    history.push(`/sortBy/${field}/${order}`);
  };

  return (
    <Button
      onClick={handleSortClick}
      variant="secondary"
      style={{ padding: "0px 10px", lineHeight: "0.5" }}
    >
      <i className={`fas fa-sort-${icon}`}></i>
    </Button>
  );
};

export default ButtonSort;
