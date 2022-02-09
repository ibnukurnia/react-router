import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

const Login = () => {
  const navigate = useNavigate();
  const user = {
    email: "wagamama@test.com",
    password: "wagamama1604",
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = () => {
    if (!email || !password) return console.log("kosong");

    if (email !== user.email || password !== user.password) return console.log("salah");

    localStorage.setItem("isLogin", true);
    navigate("/");
  };
  return (
    <div>
      <Form className="d-flex flex-column gap-3">
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button onClick={onLogin}>Login</Button>
      </Form>
    </div>
  );
};

export default Login;
