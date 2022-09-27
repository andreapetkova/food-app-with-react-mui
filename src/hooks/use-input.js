import { useState } from 'react';

export const useInput = validateValue => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isTouched, setisTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const inputHasError = !valueIsValid && isTouched;

  const valueChangeHandler = event => {
    setEnteredValue(event.target.value);
  };
  const inputBlurHandler = event => {
    setisTouched(true);
  };

  const reset = () => {
    setEnteredValue('');
    setisTouched(false);
  };

  return {
    value: enteredValue,
    inputHasError,
    valueIsValid,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};
