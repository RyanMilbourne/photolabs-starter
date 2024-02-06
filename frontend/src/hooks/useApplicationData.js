import { useReducer, useEffect } from "react";
import axios from 'axios';

const initialStates = {
  favourites: [],
  selectedPhoto: null,
  showModal: false,
  photoData: [],
  topicData: [],
}

const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  GET_PHOTOS_BY_TOPIC: 'GET_PHOTOS_BY_TOPIC',
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
    case ACTIONS.SET_PHOTO_DATA:
      return {
        ...state,
        photoData: action.payload
      };
    case ACTIONS.SET_TOPIC_DATA:
      return {
        ...state,
        topicData: action.payload
      };
    case ACTIONS.GET_PHOTOS_BY_TOPIC:
      return {
        ...state,
        photoData: action.payload
      }
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
    if (null) {
      dispatch({ type: ACTIONS.CLOSE_MODAL, payload: false });
    } else {
      dispatch({ type: ACTIONS.SHOW_MODAL, payload: props });
    }
  }

  const handleSelectedPhoto = (props) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: props });
  }

  useEffect(() => {
    const fetchPhotoData = axios.get('/api/photos');
    const fetchTopicData = axios.get('/api/topics');

    Promise.all([fetchPhotoData, fetchTopicData])
      .then(([photoRes, topicRes]) => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: photoRes.data });
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: topicRes.data });
      })
      .catch((err) => { console.error("Error fetching data:", err) });
  }, []);

  const loadPhotoByTopic = (id) => {
    axios.get(`/api/topics/photos/${id}`)
      .then((res) => {
        dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPIC, payload: res.data });
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: res.data });
      })
      .catch((error) => {
        console.error('Error: ', error)
      })
  }

  return {
    state,
    toggleFavourite,
    toggleModal,
    handleSelectedPhoto,
    loadPhotoByTopic
  }
};

export default useApplicationData;