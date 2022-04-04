import React, { ReactElement } from "react";
import { useDispatch } from "react-redux";
import Cards from "react-credit-cards";
import { Button, Modal, Spinner, Form, Alert, Row, Col } from "react-bootstrap";
import useCreditCard from "../../hooks/useCreditCard";
import { toggleCreditCardForm } from "../../redux/actions/creditCardAction";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-credit-cards/es/styles-compiled.css";
import "./CreditCardForm.css";

const CreditCardForm = (): ReactElement => {
  const {
    handleChange,
    handleFocus,
    handleSubmit,
    values,
    errors,
    setErrors,
    transactionState,
  } = useCreditCard();
  const dispatch = useDispatch();

  const hideCreditCardForm = () => {
    dispatch(toggleCreditCardForm());
    setErrors({});
  };

  return (
    <Modal show={true} onHide={hideCreditCardForm}>
      <Modal.Header closeButton>Recharge your balance</Modal.Header>
      <Alert
        show={(errors.isFormSucceed && transactionState === 1) || false}
        variant="success"
      >
        Transaction completed successfully.
      </Alert>
      <Alert show={transactionState === 2} variant="danger">
        Transaction failed
      </Alert>
      <Modal.Body>
        <div className="container">
          <div className="creditCard">
            <Cards
              cvc={values.cvc}
              expiry={values.cardExpiration}
              focused={values.focus}
              name={values.cardName}
              number={values.cardNumber}
            />
          </div>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Control
                type="text"
                name="cardName"
                placeholder="Cardholder Name"
                value={values.cardName}
                onChange={handleChange}
                onFocus={handleFocus}
              />
              <Alert show={!!errors.cname || false} variant="danger">
                {errors.cname}
              </Alert>
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="number"
                name="cardNumber"
                placeholder="Card Number"
                value={values.cardNumber}
                onChange={handleChange}
                onFocus={handleFocus}
              />
              <Alert show={!!errors.cnumber || false} variant="danger">
                {errors.cnumber}
              </Alert>
            </Form.Group>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Control
                    type="text"
                    name="cardExpiration"
                    placeholder="Expiration Date"
                    value={values.cardExpiration}
                    onChange={handleChange}
                    onFocus={handleFocus}
                  />
                  <Alert show={!!errors.cexp || false} variant="danger">
                    {errors.cexp}
                  </Alert>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Control
                    type="number"
                    name="cvc"
                    placeholder="Security Code"
                    value={values.cvc}
                    onChange={handleChange}
                    onFocus={handleFocus}
                  />
                  <Alert show={!!errors.ccvv || false} variant="danger">
                    {errors.ccvv}
                  </Alert>
                </Form.Group>
              </Col>
            </Row>
            <Button
              type="submit"
              variant="success"
              disabled={errors.isFormSucceed}
            >
              {errors.isFormSucceed ? (
                <Spinner animation="border" />
              ) : (
                `Charge 10$`
              )}
            </Button>
          </Form>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default CreditCardForm;
