import { useReducer, useEffect } from "react";
import axios from 'axios';

const initialStates = {
  likes: [],
  openFavourites: false,
  selectedPhoto: null,
  showModal: false,
  photoData: [],
  topicData: [],
  backToHome: false,
  selectedTopic: null
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
  SELECT_TOPIC: 'SELECT_TOPIC'

}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return {
        ...state,
        likes: [...state.likes, action.payload]
      };
    case ACTIONS.FAV_PHOTO_REMOVED:
      return {
        ...state,
        likes: state.likes.filter(favourite => favourite !== action.payload)
      };
    case ACTIONS.OPEN_FAV_STATE:
      return {
        ...state,
        openFavourites: action.payload
      };
    case ACTIONS.DISPLAY_FAV_PHOTOS:
      return {
        ...state,
        likes: action.payload
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
    case ACTIONS.SELECT_TOPIC:
      return {
        ...state,
        selectedTopic: action.payload
      };
    default:
      throw new Error(`Unsupported action type: ${action.type}`);
  }
}

const useApplicationData = () => {

  const [state, dispatch] = useReducer(reducer, initialStates);

  // like or un-like photo
  const toggleLike = (photo) => {
    if (state.likes.includes(photo)) {
      console.log("removing from likes")
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: photo });
      if (state.likes.length <= 1) {
        dispatch({ type: ACTIONS.OPEN_FAV_STATE, payload: false });
      }
    } else {
      console.log("adding to likes")
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
    if (state.likes.length > 0) {
      dispatch({ type: ACTIONS.OPEN_FAV_STATE, payload: true });
      dispatch({ type: ACTIONS.DISPLAY_FAV_PHOTOS, payload: state.likes });
    }
  }

  // get all photos
  const getAllPhotos = () => {
    axios.get(`/api/photos`)
      .then(res => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: res.data })
      })
  };

  useEffect(() => {
    getAllPhotos();
  }, []);

  // get all topics
  useEffect(() => {
    axios.get(`/api/topics`)
      .then(res => {
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: res.data })
      });
  }, []);


  // get corresponding photos for topic
  const getPhotosByTopic = topicId => dispatch({ type: ACTIONS.SELECT_TOPIC, payload: topicId });

  useEffect(() => {
    if (state.selectedTopic) {
      axios.get(`/api/topics/photos/${state.selectedTopic}`)
        .then(res => {
          const photosByTopic = res.data;
          dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: photosByTopic })
          dispatch({ type: ACTIONS.OPEN_FAV_STATE, payload: false });
        });
    }
  }, [state.selectedTopic]);

  return {
    state,
    toggleLike,
    toggleModal,
    handleSelectedPhoto,
    showFavouritedPhotos,
    getPhotosByTopic,
    getAllPhotos
  }
};

export default useApplicationData;