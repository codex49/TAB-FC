import { ActionType } from "../constants/action-type";

interface CreditCard {
  isCreditCardFormVisible: boolean;
}

export const creditCardReducer = (
  state: CreditCard = { isCreditCardFormVisible: false },
  { type }: { type: string }
) => {
  switch (type) {
    case ActionType.CREDIT_CARD_FORM_STATE:
      return {
        ...state,
        isCreditCardFormVisible: !state.isCreditCardFormVisible,
      };
    default:
      return state;
  }
};
