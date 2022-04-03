import { ActionType } from "../constants/action-type";

export const toggleCreditCardForm = () => {
  return {
    type: ActionType.CREDIT_CARD_FORM_STATE,
  };
};
