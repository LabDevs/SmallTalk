import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const userInfo = {
    username: username,
    password: password,
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    console.log(username, password);
    console.log(userInfo)
    fetch("/api/login", {
      method: "POST",
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(userInfo)
    })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Form onSubmit={handleSumbit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Enter your username"

        />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Enter your password"
        />
      </Form.Group>
      <Button onClick={handleSumbit} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default LoginForm;
