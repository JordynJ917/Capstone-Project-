import { useState } from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

function LoginForm() {
  // State for input values
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  // State for submission messages
  const [submitResult, setSubmitResult] = useState('');

  const [show, setShow] = useState(false);

  
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on form submission

    // Validation logic
    if (userPassword.length < 5) {
      setSubmitResult('Password must be at least 5 characters long.');
    } else if (userPassword === userEmail) {
      setSubmitResult('Password must not match email address.');
    } else {
      setSubmitResult('Successful login.');
    }
  };

  return (
    <>
    <Button variant="outline-none" className="bg-transparent text-white" onClick={handleShow}>
        <i className="bi bi-person-fill " style={{fontSize: "30px"}}></i>
    </Button>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail" className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                value={userEmail}
                name="userEmail"
                onChange={(e) => setUserEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={userPassword}
                name="userPassword"
                onChange={(e) => setUserPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="outline-none" style={{background: "#cf99ff" }} type="submit" className="w-100 text-white">
              Log In
            </Button>
          </Form>

          {/* Submission message */}
          {submitResult && (
            <p className="mt-3 text-center" style={{ color: submitResult === "Successful login." ? "green" : "red" }}>
              {submitResult}
            </p>
          )}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="outline-none" className="text-white" style={{background: "hsla(246, 100%, 74%, 1) 22%" }} onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </>
  );
}

export default LoginForm;