import { Focused } from "react-credit-cards";

export interface CreditCard {
  isCreditCardFormVisible: boolean;
}
export interface creditCardInputs {
  cardName: string;
  cardNumber: string;
  cardExpiration: string;
  cvc: string;
  focus: Focused | undefined;
}

export interface creditCardError {
  cname: string;
  cnumber: string;
  cexp: string;
  ccvv: string;
  isFormSucceed: boolean;
}
