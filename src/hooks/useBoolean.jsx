import { useState } from 'react';

export function useBoolean() {
  const [bool, setBool] = useState(false);

  const setTrue = () => {
    setBool(true);
  };

  const setFalse = () => {
    setBool(false);
  };

  const togleBool = () => {
    setBool((prev) => !prev);
  };

  return { setTrue, setFalse, togleBool, bool };
}
