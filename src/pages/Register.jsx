import { Form, Button } from "react-bootstrap";

const Register = () => {
  return (
    <div>
      <Form className="d-flex flex-column gap-3">
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" name="email" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" name="username" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" name="confirmPassword" />
        </Form.Group>
        <Button>Register</Button>
      </Form>
    </div>
  );
};

export default Register;
