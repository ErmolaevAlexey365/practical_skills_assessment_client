/* eslint-disable no-unused-vars */

import { useRef, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { managerAPI } from "../../fetchManager/fetchManager";
import { useNavigate } from "react-router-dom";

const FormCart = ({ _id }) => {
  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  let alert = useRef();
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      setShow(!show);
      event.stopPropagation();
    } else {
      await managerAPI.postPurchase({
        pricingId: _id,
        firstName,
        lastName,
        email,
        address,
        country,
        state,
        zip
      });
      await form.reset();
      setShow(true);
      setTimeout(() => {
        console.log(1);
        navigate("/");
      }, 3000);
      alert.current.className = "alert alert-success alert-dismissible fade show";
    }
    setValidated(true);
  };

  return (
    <div className="col-md-8 order-md-1">
      <h4 className="mb-3">Billing address</h4>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="First name"
              defaultValue=""
              onChange={(e) => setFirstName(e.target.value)}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Last name"
              defaultValue=""
              onChange={(e) => setLastName(e.target.value)}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md='12' controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}
              required/>
            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md='12' controlId="formBasicAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control type="address" placeholder="Enter address"
              onChange={(e) => setAddress(e.target.value)}
              required/>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>County</Form.Label>
            <Form.Control type="text" placeholder="County"
              onChange={(e) => setCountry(e.target.value)}
              required/>
            <Form.Control.Feedback type="invalid">
                            Please provide a valid country.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>State</Form.Label>
            <Form.Control type="text" placeholder="State"
              onChange={(e) => setState(e.target.value)}
              required/>
            <Form.Control.Feedback type="invalid">
                            Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>Zip</Form.Label>
            <Form.Control type="text" placeholder="Zip"
              onChange={(e) => setZip(e.target.value)}
              required/>
            <Form.Control.Feedback type="invalid">
                            Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Button type="submit">Continue to checkout</Button>
        {show && <div className={"alert alert-danger alert-dismissible fade show"} role="alert" ref={alert}>
          <strong>Holy guacamole!</strong> You should check in on some of those fields below.
          <button onClick={() => setShow(false)} type="button" className="close" data-dismiss="alert"
            aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>}
      </Form>
    </div>
  );
};

export default FormCart;
