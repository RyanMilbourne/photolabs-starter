import { useReducer, useEffect } from "react";
import axios from 'axios';

const initialStates = {
  favourites: [],
  openFavourites: false,
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
  CLOSE_MODAL: 'CLOSE_MODAL',
  OPEN_FAV_STATE: 'OPEN_FAV_STATE',
  DISPLAY_FAV_PHOTOS: 'DISPLAY_FAV_PHOTOS',
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return {
        ...state,
        favourites: [...state.favourites, action.payload]
      };
    case ACTIONS.FAV_PHOTO_REMOVED:
      return {
        ...state,
        favourites: state.favourites.filter(favourite => favourite !== action.payload)
      };
    case ACTIONS.OPEN_FAV_STATE:
      return {
        ...state,
        openFavourites: action.payload
      };
    case ACTIONS.DISPLAY_FAV_PHOTOS:
      return {
        ...state,
        favourites: action.payload
      }
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
        topicData: action.payload,
      };
    case ACTIONS.GET_PHOTOS_BY_TOPIC:
      return {
        ...state,
        photoData: action.payload,
      }
    default:
      throw new Error(`Unsupported action type: ${action.type}`);
  }
}

const useApplicationData = () => {

  const [state, dispatch] = useReducer(reducer, initialStates);

  // like or un-like photo
  const toggleFavourite = (photo) => {
    if (state.favourites.includes(photo)) {
      console.log("removing from favourites")
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: photo });
      if (state.favourites.length <= 1) {
        dispatch({ type: ACTIONS.OPEN_FAV_STATE, payload: false });
      }
    } else {
      console.log("adding to favourites")
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: photo });
    }
  };

  // open or close modal
  const toggleModal = (props) => {
    if (null) {
      dispatch({ type: ACTIONS.CLOSE_MODAL, payload: false });
    } else {
      dispatch({ type: ACTIONS.SHOW_MODAL, payload: props });
    }
  }

  // capture selected photo data
  const handleSelectedPhoto = (props) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: props });
  }

  // display photos marked 'favourite'
  const showFavouritedPhotos = () => {
    if (state.favourites.length > 0) {
      dispatch({ type: ACTIONS.OPEN_FAV_STATE, payload: true });
      dispatch({ type: ACTIONS.DISPLAY_FAV_PHOTOS, payload: state.favourites });
    }
  }

  // connect with backend
  useEffect(() => {
    const fetchPhotoData = axios.get('/api/photos');
    const fetchTopicData = axios.get('/api/topics');

    Promise.all([fetchPhotoData, fetchTopicData])
      .then(([photoRes, topicRes]) => {
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: topicRes.data });
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: photoRes.data });
      })
      .catch((err) => { console.error("Error fetching data:", err) });
  }, []);

  const loadPhotoByTopic = (id) => {

    axios.get(`/api/topics/photos/${id}`)
      .then((res) => {
        console.log("This is state.favourites: ", state.favourites)
        dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPIC, payload: res.data });
        dispatch({ type: ACTIONS.OPEN_FAV_STATE, payload: false });
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
    loadPhotoByTopic,
    showFavouritedPhotos
  }
};

export default useApplicationData;