import { useState } from "react";

const useBool = () => {
  const [bool, setBool] = useState(false);

  const toggleBool = () => {
    setBool((prev) => !prev);
  };

  return [bool, toggleBool];
};

export default useBool;