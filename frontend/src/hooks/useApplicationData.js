import { useState } from "react";

const useApplicationData = () => {
  const [bool, setBool] = useState(false);

  const toggleBool = () => {
    setBool((prev) => !prev);
  };

  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handleSelectedPhoto = (data) => {
    setSelectedPhoto(data);
  }

  const [favourites, setFavourites] = useState([]);

  const toggleFavourite = (id) => {
    if (!favourites.includes(id)) {
      setFavourites(() => [...favourites, id])
    } else {
      const copyOfArray = [...favourites].filter(favourite => id !== favourite);
      setFavourites(copyOfArray);
    }
  };

  const helperFunctions = {
    bool,
    toggleBool,
    selectedPhoto,
    handleSelectedPhoto,
    favourites,
    toggleFavourite,
  };

  return helperFunctions;
};

export default useApplicationData;