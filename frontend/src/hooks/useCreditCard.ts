import {
  useState,
  useEffect,
  useCallback,
  FormEvent,
  ChangeEvent,
} from "react";
import { setBalance } from "../redux/actions/userAction";
import { toggleCreditCardForm } from "../redux/actions/creditCardAction";
import { useDispatch } from "react-redux";
import axios from "axios";
import validateCreditCard from "../helpers/validateCreditCard";

const useCreditCard = () => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState<any>({});
  const [values, setValues] = useState({
    cardName: "",
    cardNumber: "",
    cardExpiration: "",
    cvc: "",
    focus: undefined,
  });
  const [transactionState, setTransactionState] = useState(0);
  const updateUserBalance = useCallback(() => {
    //Retrieve api and user data from .env file
    const {
      REACT_APP_USER_BALANCE_API,
      REACT_APP_USER_AMOUNT,
      REACT_APP_TIME_HIDE_FORM,
    } = process.env;
    const timeHideCreditCardForm = Number(REACT_APP_TIME_HIDE_FORM) * 1000;

    axios
      .post(REACT_APP_USER_BALANCE_API || "", {
        amount: Number(REACT_APP_USER_AMOUNT),
      })
      .then(({ data }) => {
        setTransactionState(1);
        dispatch(setBalance(data.balance));
      })
      .catch((error) => {
        setTransactionState(2);
      });

    //Empty credit carrd form after the transaction
    setTimeout(() => {
      dispatch(toggleCreditCardForm());
      setErrors({});
      setValues({
        cardName: "",
        cardNumber: "",
        cardExpiration: "",
        cvc: "",
        focus: undefined,
      });
    }, timeHideCreditCardForm);
  }, [dispatch]);

  useEffect(() => {
    if (errors.isFormSucceed) {
      updateUserBalance();
    }
  }, [errors, updateUserBalance]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrors(() => validateCreditCard(values));
  };

  const handleFocus = (e: any) =>
    setValues({
      ...values,
      focus: e.target.name,
    });

  return {
    handleChange,
    handleFocus,
    handleSubmit,
    values,
    errors,
    setErrors,
    transactionState,
  };
};

export default useCreditCard;
