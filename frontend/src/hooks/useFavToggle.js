import { useState } from "react";

const useFavToggle = () => {
  const [status, setStatus] = useState(false);

  const handleClick = () => {
    setStatus((prev) => !prev);
  };

  return { status, toggleFav: handleClick };
};

export default useFavToggle;