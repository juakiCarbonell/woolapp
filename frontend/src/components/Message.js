import React from "react";
import { Alert } from "react-bootstrap";

const Message = ({ variant, children }) => {
  console.log('variant', variant)
  return <Alert variant={variant}>{children}</Alert>;
};

Message.defaultProps = {
  variant: "info",
};

export default Message;
