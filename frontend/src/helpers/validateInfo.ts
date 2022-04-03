import valid from "card-validator";
import { creditCardInputs, creditCardError } from "../types/creditCard.type";

export default function validateInfo(values: creditCardInputs) {
  let errors: creditCardError = {
    cname: "",
    cnumber: "",
    cexp: "",
    ccvv: "",
    isFormSucceed: false,
  };
  let creditCard: any = valid.number(values.cardNumber);

  // Validate credit card form values using card-validator
  creditCard.expirationDate = valid.expirationDate(values.cardExpiration);
  creditCard.cvv = valid.cvv(values.cvc);
  creditCard.cardholderName = valid.cardholderName(values.cardName);

  if (!values.cardName || !creditCard.cardholderName.isValid) {
    errors.cname = "Cardholder name is invalid";
  }

  if (!values.cardNumber || !creditCard.isValid) {
    errors.cnumber = "Credit card number is invalid";
  }

  if (!values.cardExpiration || !creditCard.expirationDate.isValid) {
    errors.cexp = "Expiration date is invalid";
  }

  if (!values.cvc || !creditCard.cvv.isValid) {
    errors.ccvv = "Credit card CVC is invalid";
  }

  if (
    creditCard.cardholderName.isValid &&
    creditCard.isValid &&
    creditCard.expirationDate.isValid &&
    creditCard.cvv.isValid
  ) {
    errors.isFormSucceed = true;
  }

  return errors;
}
