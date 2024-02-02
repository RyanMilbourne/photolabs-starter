import { useReducer } from "react";

const initialStates = {
  favourites: [],
  selectedPhoto: null,
  showModal: false,
}

const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SELECT_PHOTO: 'SELECT_PHOTO',
  SHOW_MODAL: 'SHOW_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL'
}

function reducer(state, action) {

  switch (action.type) {

    case ACTIONS.FAV_PHOTO_ADDED:
      return {
        ...state,
        favourites: [...state.favourites, action.payload]
      };

    case ACTIONS.FAV_PHOTO_REMOVED:
      const updatedFavourites = state.favourites.filter(favouriteId => favouriteId !== action.payload)
      return {
        ...state,
        favourites: updatedFavourites
      };

    case ACTIONS.SHOW_MODAL:
      return {
        ...state,
        showModal: true,
        selectedPhoto: action.payload
      };

    case ACTIONS.CLOSE_MODAL:
      return {
        ...state,
        showModal: false
      };

    case ACTIONS.SELECT_PHOTO:
      return {
        ...state,
        selectedPhoto: action.payload
      };

    default:
      throw new Error(`Unsupported action type: ${action.type}`);
  }

}

const useApplicationData = () => {

  const [state, dispatch] = useReducer(reducer, initialStates);

  const toggleFavourite = (id) => {
    if (!state.favourites.includes(id)) {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: id });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: id });
    }
  };

  const toggleModal = (props) => {
    if (props === undefined || null) {
      dispatch({ type: ACTIONS.CLOSE_MODAL, payload: false });
    } else {
      dispatch({ type: ACTIONS.SHOW_MODAL, payload: props });
    }
  }

  const handleSelectedPhoto = (props) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: props });
  }

  return {
    state,
    toggleFavourite,
    toggleModal,
    handleSelectedPhoto
  }
};

export default useApplicationData;