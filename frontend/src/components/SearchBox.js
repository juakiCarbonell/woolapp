import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import {useHistory} from 'react-router-dom'

const SearchBox = () => {
  let history = useHistory()
  const [keyword, setKeyword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  }
  return (
    <Form onSubmit={submitHandler} inline>
      <Form.Control
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Busca lanas"
        className="mr-sm-2 ml-sm-5"
      ></Form.Control>
      <Button type='submit' variant='primary'>Burcar</Button>
    </Form>
  );
};

export default SearchBox;
