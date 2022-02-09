import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  const isLogin = localStorage.getItem("isLogin");
  return (
    <>
      <Navbar>
        <Container>
          <Nav className="d-flex justify-content-between w-100">{!isLogin ? <Login /> : <Logout />}</Nav>
        </Container>
      </Navbar>
    </>
  );
};

const Login = () => {
  return (
    <>
      <Nav.Item>
        <Link to="/login">Login</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/register">Register</Link>
      </Nav.Item>
    </>
  );
};

const Logout = () => {
  const onLogout = () => {
    localStorage.removeItem("isLogin");
  };
  return (
    <>
      <Nav.Item>
        <Link to="/">Back</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/login" onClick={onLogout}>
          Logout
        </Link>
      </Nav.Item>
    </>
  );
};

export default NavigationBar;
